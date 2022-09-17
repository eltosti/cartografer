export enum shapes {

}

export type Shape = boolean[4][4]


export const smallL: Shape = [
    [1,0,0,0],
    [1,1,0,0],
    [0,0,0,0],
    [0,0,0,0],
]
export const standardL: Shape = [
    [1,1,1,1],
    [0,0,0,1],
    [0,0,0,0],
    [0,0,0,0],
]

export const uglySquare: Shape = [
    [1,1,1,0],
    [1,1,0,0],
    [0,0,0,0],
    [0,0,0,0],
]

export const shortLine: Shape = [
    [1,0,0,0],
    [1,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]
export const standardLine: Shape = [
    [1,1,1,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]

export const longLine: Shape = [
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]

export const longZigZag: Shape = [
    [0,0,1,1],
    [1,1,1,0],
    [0,0,0,0],
    [0,0,0,0],
]

export const standarZigZag: Shape = [
    [1,0,0,0],
    [1,1,0,0],
    [0,1,0,0],
    [0,0,0,0],
]

export const shortDiagonal: Shape = [
    [1,0,0,0],
    [0,1,0,0],
    [0,0,0,0],
    [0,0,0,0],
]
export const standardDiagonal: Shape = [
    [1,0,0,0],
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,0],
]
export const letterC: Shape = [
    [1,1,0,0],
    [1,0,0,0],
    [1,1,0,0],
    [0,0,0,0],
]

export const parallel: Shape = [
    [1,0,1,0],
    [1,0,1,0],
    [0,0,0,0],
    [0,0,0,0],
]


export const longDiagonal: Shape = [
    [0,0,1,0],
    [0,1,1,0],
    [1,1,0,0],
    [0,0,0,0],
]

export const cross: Shape = [
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [0,0,0,0],
]


export const longL: Shape = [
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0],
    [1,0,0,0],
]
export const single: Shape = [
    [1,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]

export const standardT: Shape = [
    [1,0,0,0],
    [1,1,0,0],
    [1,0,0,0],
    [0,0,0,0],
]

export const longT: Shape = [
    [1,0,0,0],
    [1,1,1,0],
    [1,0,0,0],
    [0,0,0,0],
]


export const empty: Shape = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]
