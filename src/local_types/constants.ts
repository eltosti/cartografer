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

export const VoidTile: Tile = {
    occupied: true,
    material: Terrain.air,
    ruin:false,
    void: true,
    id: ''
}



let Cards: Card[] = [
    {
        id: 1,
        name: 'Ataque Goblin',
        time: 0,
        ruin: false,
        materialOptions: [Terrain.Ambush],
        shapesOptions: [{ shape: standardDiagonal, coin: false }]
    },
    {
        id: 2,
        name: 'Asalto Ogro',
        time: 0,
        ruin: false,
        materialOptions: [Terrain.Ambush],
        shapesOptions: [{ shape: parallel, coin: false }]
    },
    {
        id: 3,
        name: 'Ofensiva Kobold',
        time: 0,
        ruin: false,
        materialOptions: [Terrain.Ambush],
        shapesOptions: [{ shape: standardT, coin: false }]
    },
    {
        id: 4,
        name: 'Saqueo Gnoll',
        time: 0,
        ruin: false,
        materialOptions: [Terrain.Ambush],
        shapesOptions: [{ shape: letterC, coin: false }]
    },
    {
        id: 7,
        name: 'Gran Rio',
        time: 1,
        ruin: false,
        materialOptions: [Terrain.River],
        shapesOptions: [
            { shape: standardLine, coin: true },
            { shape: longDiagonal, coin: false }
        ]
    },
    {
        id: 8,
        name: 'Tierras de Cultivo',
        time: 1,
        ruin: false,
        materialOptions: [Terrain.Farm],
        shapesOptions: [
            { shape: shortLine, coin: true },
            { shape: cross, coin: false }
        ]
    },
    {
        id: 9,
        name: 'Aldea',
        time: 1,
        ruin: false,
        materialOptions: [Terrain.Village],
        shapesOptions: [
            { shape: smallL, coin: true },
            { shape: uglySquare, coin: false }
        ]
    },
    {
        id: 10,
        name: 'Bosque Olvidado',
        time: 1,
        ruin: false,
        materialOptions: [Terrain.Forest],
        shapesOptions: [
            { shape: shortDiagonal, coin: true },
            { shape: standardZigZag, coin: false }
        ]
    },
    {
        id: 11,
        name: 'Arroyo Interior',
        time: 2,
        ruin: false,
        materialOptions: [Terrain.Forest, Terrain.Village],
        shapesOptions: [{ shape: longZigZag, coin: false }]
    },
    {
        id: 12,
        name: 'Hacienda',
        time: 2,
        ruin: false,
        materialOptions: [Terrain.Village, Terrain.Farm],
        shapesOptions: [{ shape: standardT, coin: false }]
    },
    {
        id: 13,
        name: 'Arboles Frutales',
        time: 2,
        ruin: false,
        materialOptions: [Terrain.Forest, Terrain.Farm],
        shapesOptions: [{ shape: standardL, coin: false }]
    },
    {
        id: 14,
        name: 'Pueblo en los Árboles',
        time: 2,
        ruin: false,
        materialOptions: [Terrain.Farm, Terrain.River],
        shapesOptions: [{ shape: longL, coin: false }]
    },
    {
        id: 15,
        name: 'Pantanos',
        time: 2,
        ruin: false,
        materialOptions: [Terrain.Forest, Terrain.River],
        shapesOptions: [{ shape: longT, coin: false }]
    },
    {
        id: 16,
        name: 'Aldea Pesquera',
        time: 1,
        ruin: false,
        materialOptions: [Terrain.Village, Terrain.River],
        shapesOptions: [{ shape: longLine, coin: false }]
    },
    {
        id: 17,
        name: 'Grieta Interdimensional',
        time: 0,
        ruin: false,
        materialOptions: [Terrain.Village, Terrain.Farm, Terrain.Forest, Terrain.River],
        shapesOptions: [{ shape: single, coin: false }]
    }
];
export { Cards, ruinTile}
