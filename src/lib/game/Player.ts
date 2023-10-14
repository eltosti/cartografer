import type {Card} from "../../local_types/cards";
import type {IKingdom} from "./Kingdom";
import type {Socket} from "socket.io";
import type {Maybe} from "../../types/generics";
import type {IConfigBoard} from "./Board";
import {Board} from "./Board";
import * as crypto from "crypto";


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
    socket: Maybe<Socket>
    nextCard(card :Card): number
    updateSocket(socket: Socket): boolean
}


export type SeasonScore = {
    coins: number
    ambush: number
    objectiveA: number
    objectiveB: number
    total: number
}

export type IPlayerConfig = {
    name: string
    title: string
    kingdomName: string
    kingdomBadge: string
}


export class Player implements IPlayer{
    kingdomId= ""
    points=0
    name=""
    title=""
    kingdom
    score: SeasonScore[] = []
    placedCard = false
    confirmCard = false
    socketId= ""
    socket : Maybe<Socket> =  null

    constructor(socket: Socket, playerConfig : IPlayerConfig , boardConfig: IConfigBoard ) {
        let tmpBoard = new Board(boardConfig)
        this.kingdomId = crypto.randomUUID()
        this.kingdom = {
            id : this.kingdomId,
            badgeId: playerConfig.kingdomBadge,
            name: playerConfig.kingdomName,
            playedCards: [],
            board: tmpBoard
        }
        this.name = playerConfig.name
        this.title = playerConfig.title
        this.socketId = socket.id
        this.socket = socket
    }


    nextCard(card :Card) {
        //TODO
        return 1
    }

    updateSocket(socket: Socket): boolean {
        this.socket = socket
        this.socketId = socket.id
        return true
    }
}
