import  {Terrain} from "../local_types/cards";
import  type {Card} from "../local_types/cards";
import type {Shape} from "../local_types/shapes";

export function choose(size: number, amount: number): number[] {
    if (size <= 0 || amount > size) return []
    let indexChoice = Array.from({length: size}, (value, index) => index);
    let selected = []
    for (let i = 0; i < amount; i++) {
        let rIndex = getRandomInt(size - i)
        selected.push(indexChoice[rIndex])
        indexChoice.splice(rIndex,1)
    }
    return selected
}

export function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export function isAmbush(card: Card): boolean {
    return card.materialOptions.filter(material => material != Terrain.Ambush).length == 0
}

export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export function rotateClockwise<T>(array: T[][]): T[][] {
    let x = [...array]
    x[0].map((val, index) => x.map(row => row[index]).reverse())
    return x
}

export function rotate(s : Shape): Shape {
    let tmp = s as F
    let prevShapeValue = s.shape[s.offset.y][s.offset.x]
    tmp.shape[s.offset.y][s.offset.x] = null
    tmp.shape = rotateClockwise(tmp.shape)
    for (let i = 0; i < tmp.shape.length; i++) {
        for (let j = 0; j < tmp.shape[0].length; j++) {
            if (tmp.shape[i][j] == null) {
                tmp.offset.y = i
                tmp.offset.x = j
                tmp.shape[i][j] = prevShapeValue
            }
        }
    }
    return tmp as Shape
}


export type F = {
    shape: (boolean|null)[][],
    offset: {
        x: number,
        y: number,
    }
};


export function mirror(shape: Shape): Shape {
    let g = shape
    let s = g.shape.reverse()
    g.offset.x = s.length - g.offset.x -1

    return g
}

export function mutateShape(s: Shape) : Shape[] {
    let mirrored : Shape= mirror(s)
    let options : Shape[] = []
    options.push(s,mirrored)
    for (let i = 0; i < 3; i++) {
        options.push(rotate(options[options.length-1]), rotate(options[options.length-2]))
    }
    return options
}
