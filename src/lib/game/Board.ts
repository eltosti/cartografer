import type {Tile} from "../../local_types/store_state"
import type {Shape} from "../../local_types/shapes";
import type {Terrain} from "../../local_types/cards";
import {emptyTile, ruinTile, MountainTile, VoidTile} from "../../local_types/constants";

type Position = {
    x: number
    y: number
}

export interface IConfigBoard {
    mountains: number[]
    ruins: number[]
    voids: number[]
    size: {
        x: number
        y: number
    }
}

type placement = {
    pos: Position,
    shape: Tile[][]
} | null


export interface IBoard {
    board: Tile[][]
    id: string
    lastPlacement: placement

    isPlaceable(shape: Shape): boolean

    placeShape(shape: Shape, terrain: Terrain, pos: Position, mustBeRuin: boolean): boolean

    removeLast(): boolean
}

export class Board implements IBoard {
    board: Tile[][] = []
    id = ""
    lastPlacement: placement = null

    constructor(config: IConfigBoard) {
        this.id = crypto.randomUUID();
        let tmp: Tile[] = Array(config.size.x * config.size.y).fill(emptyTile)
        for (const ruinIndex in config.ruins) {
            tmp[ruinIndex] = ruinTile
        }
        for (const mountainIndex in config.mountains) {
            tmp[mountainIndex] = MountainTile
        }
        for (const voidIndex in config.voids) {
            tmp[voidIndex] = VoidTile
        }
        this.board = listToMatrix(tmp, config.size.x)
    }

    isPlaceable(shape: Shape): boolean {
        // TODO
        return true
    }

    placeShape(shape: Shape, terrain: Terrain, pos: Position, mustBeRuin: boolean = false): boolean {
        let copy: Tile[][] = []

        // check si esta adentro del rango
        if (pos.x < 0 || pos.y < 0 || pos.y + shape.shape.length > this.board.length || pos.x + shape.shape[0].length > this.board[0].length) return false
        //copio la zona del mapa por si se quiere volver atras
        let foundRuin = false
        for (let i = 0; i < shape.shape.length; i++) {
            copy.push(Array(shape.shape[i].length).fill(emptyTile))
            for (let j = 0; j < copy[i].length; j++) {
                copy[i][j] = this.board[i + pos.y][j + pos.x]
                /*me fijo para las partes ocupas de la forma si:
                *   la tile esta ocupada
                *   si la tile es un vacio
                * voy guardando si alguna tile es una ruina
                */
                if (!(shape.shape[i][j] && !this.board[i + pos.y][j + pos.x].occupied && !this.board[i + pos.y][j + pos.x].void)) return false
                foundRuin = foundRuin || this.board[i + pos.y][j + pos.x].ruin
            }
        }

        if (mustBeRuin && !foundRuin) return false


        for (let i = 0; i < shape.shape.length; i++) {
            for (let j = 0; j < shape.shape[i].length; j++) {
                if (shape.shape[i][j]) {
                    this.board[i + pos.y][j + pos.x].occupied = true
                    this.board[i + pos.y][j + pos.x].material = terrain
                }
            }

        }
        this.lastPlacement = {
            pos,
            shape: copy
        }
        return true
    }

    removeLast() {
        if (this.lastPlacement == null) return false
        let s = this.lastPlacement.shape
        let p = this.lastPlacement.pos
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < s[0].length; j++) {
                this.board[p.y + i][p.x + j] = s[i][j]
            }
        }
        this.lastPlacement = null
        return true
    }

}

function listToMatrix<T>(arr: T[], width: number): T[][] {
    let matrix: T[][] = [], i, k;
    for (i = 0, k = -1; i < arr.length; i++) {
        if (i % width === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(arr[i]);
    }

    return matrix;
}


