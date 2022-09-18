import {
    cross,
    letterC,
    longDiagonal, longL, longLine, longT, longZigZag,
    parallel, shortDiagonal,
    shortLine, single,
    smallL,
    standardDiagonal, standardL,
    standardLine,
    standardT, standarZigZag, uglySquare
} from "./shapes";
import type {Card} from "./cards";
import {Material} from "./cards"
import type {Tile} from "./store_state";

export const emptyTile: Tile = {
    occupied: false,
    material: Material.air,
    ruin: false,
    void: false,
    id: ''
};

const ruinTile: Tile = {
    occupied: false,
    material: Material.air,
    ruin: true,
    void: false,
    id: ''
};

export const MountainTile: Tile = {
    occupied: true,
    material: Material.Mountain,
    ruin: false,
    void: false,
    id: ''
};


let Cards: Card[] = [
    {
        id: 1,
        name: 'Ataque Goblin',
        time: 0,
        materialOptions: [Material.Goblin],
        shapesOptions: [{ shapes: [standardDiagonal], coin: false }]
    },
    {
        id: 2,
        name: 'Asalto Osgo',
        time: 0,
        materialOptions: [Material.Goblin],
        shapesOptions: [{ shapes: [parallel], coin: false }]
    },
    {
        id: 3,
        name: 'Ofensiva Kobold',
        time: 0,
        materialOptions: [Material.Goblin],
        shapesOptions: [{ shapes: [standardT], coin: false }]
    },
    {
        id: 4,
        name: 'Saqueo Gnoll',
        time: 0,
        materialOptions: [Material.Goblin],
        shapesOptions: [{ shapes: [letterC], coin: false }]
    },
    {
        id: 7,
        name: 'Gran Rio',
        time: 1,
        materialOptions: [Material.River],
        shapesOptions: [
            { shapes: [standardLine], coin: true },
            { shapes: [longDiagonal], coin: false }
        ]
    },
    {
        id: 8,
        name: 'Tierras de Cultivo',
        time: 1,
        materialOptions: [Material.Farm],
        shapesOptions: [
            { shapes: [shortLine], coin: true },
            { shapes: [cross], coin: false }
        ]
    },
    {
        id: 9,
        name: 'Aldea',
        time: 1,
        materialOptions: [Material.Village],
        shapesOptions: [
            { shapes: [smallL], coin: true },
            { shapes: [uglySquare], coin: false }
        ]
    },
    {
        id: 10,
        name: 'Bosque Olvidado',
        time: 1,
        materialOptions: [Material.Forest],
        shapesOptions: [
            { shapes: [shortDiagonal], coin: true },
            { shapes: [standarZigZag], coin: false }
        ]
    },
    {
        id: 11,
        name: 'Arroyo Interior',
        time: 2,
        materialOptions: [Material.Forest, Material.Village],
        shapesOptions: [{ shapes: [longZigZag], coin: false }]
    },
    {
        id: 12,
        name: 'Hacienda',
        time: 2,
        materialOptions: [Material.Village, Material.Farm],
        shapesOptions: [{ shapes: [standardT], coin: false }]
    },
    {
        id: 13,
        name: 'Arboles Frutales',
        time: 2,
        materialOptions: [Material.Forest, Material.Farm],
        shapesOptions: [{ shapes: [standardL], coin: false }]
    },
    {
        id: 14,
        name: 'Pueblo en los Árboles',
        time: 2,
        materialOptions: [Material.Farm, Material.River],
        shapesOptions: [{ shapes: [longL], coin: false }]
    },
    {
        id: 15,
        name: 'Pantanos',
        time: 2,
        materialOptions: [Material.Forest, Material.River],
        shapesOptions: [{ shapes: [longT], coin: false }]
    },
    {
        id: 16,
        name: 'Aldea Pesquera',
        time: 1,
        materialOptions: [Material.Village, Material.River],
        shapesOptions: [{ shapes: [longLine], coin: false }]
    },
    {
        id: 17,
        name: 'Grieta Interdimensional',
        time: 0,
        materialOptions: [Material.Village, Material.Farm, Material.Forest, Material.River],
        shapesOptions: [{ shapes: [single], coin: false }]
    }
];
export { Cards, ruinTile}
