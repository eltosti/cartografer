import type {Card} from "../../local_types/cards";
import type {IKingdom} from "./Kingdom";
import type {Socket} from "socket.io";

export interface IPlayer {
    kingdomId: string
    points: number
    name: string
    title: string
    kingdom: IKingdom
    score: SeasonScore[]
    placedCard: boolean
    confirmCard: boolean
    socketId: string
    socket: Socket
    nextCard(card :Card): number

}


export type SeasonScore = {
    coins: number
    ambush: number
    objectiveA: number
    objectiveB: number
    total: number
}


