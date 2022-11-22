import {
    cross,
    letterC,
    longDiagonal, longL, longLine, longT, longZigZag,
    parallel, shortDiagonal,
    shortLine, single,
    smallL,
    standardDiagonal, standardL,
    standardLine,
    standardT, standardZigZag, uglySquare
} from "./shapes";
import type {Card} from "./cards";
import {Terrain} from "./cards"
import type {Tile} from "./store_state";
import config from '../config.json' assert {type: 'json'}



export const emptyTile: Tile = {
    occupied: false,
    material: Terrain.air,
    ruin: false,
    void: false,
    id: ''
};

const ruinTile: Tile = {
    occupied: false,
    material: Terrain.air,
    ruin: true,
    void: false,
    id: ''
};

export const MountainTile: Tile = {
    occupied: true,
    material: Terrain.Mountain,
    ruin: false,
    void: false,
    id: ''
};



let Cards: Card[] = [
    {
        id: 1,
        name: 'Ataque Goblin',
        time: 0,
        materialOptions: [Terrain.Ambush],
        shapesOptions: [{ shapes: [config.TERRAIN_CARDS.standardDiagonal], coin: false }]
    },
    {
        id: 2,
        name: 'Asalto Ogro',
        time: 0,
        materialOptions: [Terrain.Ambush],
        shapesOptions: [{ shapes: [parallel], coin: false }]
    },
    {
        id: 3,
        name: 'Ofensiva Kobold',
        time: 0,
        materialOptions: [Terrain.Ambush],
        shapesOptions: [{ shapes: [standardT], coin: false }]
    },
    {
        id: 4,
        name: 'Saqueo Gnoll',
        time: 0,
        materialOptions: [Terrain.Ambush],
        shapesOptions: [{ shapes: [letterC], coin: false }]
    },
    {
        id: 7,
        name: 'Gran Rio',
        time: 1,
        materialOptions: [Terrain.River],
        shapesOptions: [
            { shapes: [standardLine], coin: true },
            { shapes: [longDiagonal], coin: false }
        ]
    },
    {
        id: 8,
        name: 'Tierras de Cultivo',
        time: 1,
        materialOptions: [Terrain.Farm],
        shapesOptions: [
            { shapes: [shortLine], coin: true },
            { shapes: [cross], coin: false }
        ]
    },
    {
        id: 9,
        name: 'Aldea',
        time: 1,
        materialOptions: [Terrain.Village],
        shapesOptions: [
            { shapes: [smallL], coin: true },
            { shapes: [uglySquare], coin: false }
        ]
    },
    {
        id: 10,
        name: 'Bosque Olvidado',
        time: 1,
        materialOptions: [Terrain.Forest],
        shapesOptions: [
            { shapes: [shortDiagonal], coin: true },
            { shapes: [standardZigZag], coin: false }
        ]
    },
    {
        id: 11,
        name: 'Arroyo Interior',
        time: 2,
        materialOptions: [Terrain.Forest, Terrain.Village],
        shapesOptions: [{ shapes: [longZigZag], coin: false }]
    },
    {
        id: 12,
        name: 'Hacienda',
        time: 2,
        materialOptions: [Terrain.Village, Terrain.Farm],
        shapesOptions: [{ shapes: [standardT], coin: false }]
    },
    {
        id: 13,
        name: 'Arboles Frutales',
        time: 2,
        materialOptions: [Terrain.Forest, Terrain.Farm],
        shapesOptions: [{ shapes: [standardL], coin: false }]
    },
    {
        id: 14,
        name: 'Pueblo en los Árboles',
        time: 2,
        materialOptions: [Terrain.Farm, Terrain.River],
        shapesOptions: [{ shapes: [longL], coin: false }]
    },
    {
        id: 15,
        name: 'Pantanos',
        time: 2,
        materialOptions: [Terrain.Forest, Terrain.River],
        shapesOptions: [{ shapes: [longT], coin: false }]
    },
    {
        id: 16,
        name: 'Aldea Pesquera',
        time: 1,
        materialOptions: [Terrain.Village, Terrain.River],
        shapesOptions: [{ shapes: [longLine], coin: false }]
    },
    {
        id: 17,
        name: 'Grieta Interdimensional',
        time: 0,
        materialOptions: [Terrain.Village, Terrain.Farm, Terrain.Forest, Terrain.River],
        shapesOptions: [{ shapes: [single], coin: false }]
    }
];
export { Cards, ruinTile}
