import type {IPlayer} from "./Player";
import type {IDeck} from "./Deck";
import type {IConfig} from "./Config";



export interface IGame {
    players: {
        [key: string]: IPlayer
    }
    playerOrder: string[]
    deck: IDeck
    minPlayers: number
    maxPlayers: number

    config: IConfig
}






