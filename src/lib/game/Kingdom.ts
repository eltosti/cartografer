import type {IBoard} from "./Board";
import type {CardSelection} from "../../local_types/cards";

export interface IKingdom {
    id: string
    name: string
    badgeId: string
    board: IBoard
    playedCards: CardSelection[]
}
