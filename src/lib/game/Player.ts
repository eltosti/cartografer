import type {CardSelection} from "../../local_types/cards";
import type {IKingdom} from "./Kingdom";

export interface IPlayer {
    kingdomId: string
    points: number
    name: string
    title: string
    playedCards: CardSelection[]
    kingdom: IKingdom

}
