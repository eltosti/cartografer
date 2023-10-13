import type {IBoard} from "../Board";
import type {Terrain} from "../../../local_types/cards";

export interface IObjective {
    name: string
    description: string
    hints: Terrain[]|"placement"
    max: number
    func: (board: IBoard) => number
}
