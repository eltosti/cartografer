import type {IBoard} from "../Board";
import type {Terrain} from "../../../local_types/cards";
import {mountainCoins} from "./mountainCoins";

export type IObjective  = {
    name: string
    description: string
    hints: Terrain[]|"placement"
    max: number
    func: (board: Readonly<IBoard>) => number
}


export const Objectives: IObjective[] = [
    mountainCoins
]
