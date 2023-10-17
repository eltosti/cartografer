import type {IPlayer, IConfigPlayer} from "./Player";
import type {IDeck} from "./Deck";
import type {IConfig} from "./Config";
import {Deck} from "./Deck";
import {Player} from "./Player";
import type {IConfigBoard} from "./Board";


export interface IGame {
    players: {
        [key: string]: IPlayer
    }
    playerOrder: string[]
    playersToJoin: IPlayer[]
    rotated: "left" | "right" | null
    deck: IDeck
    minPlayers: number
    maxPlayers: number
    config: IConfig

    addPlayer(config: IConfigPlayer): boolean

    removePlayer(id: string): boolean

    nextTurn(): void

}


export class Game implements IGame {
    players: { [key: string]: IPlayer } = {}
    playerOrder: string[] = []
    playersToJoin: IPlayer[] = []
    rotated: "left" | "right" | null = null
    deck
    minPlayers
    maxPlayers
    config

    constructor(config: IConfig) {
        this.config = config
        this.deck = new Deck(config.cards, config.ruinsCards)
        this.minPlayers = config.minPlayer
        this.maxPlayers = config.maxPlayer

    }

    addPlayer(config: IConfigPlayer): boolean {
        if (this.playerOrder.length > this.maxPlayers) return false
        let tmpConfigBoard: IConfigBoard = {
            size: this.config.size,
            ruins: this.config.ruins,
            voids: this.config.voids,
            mountains: this.config.mountains
        }
        let tmpPlayer = new Player(config, tmpConfigBoard)
        this.playerOrder.push(tmpPlayer.id)
        this.players[tmpPlayer.id] = tmpPlayer
        return true;
    }

    nextTurn(): void {
    }

    removePlayer(id: string): boolean {
        return false;
    }

}



