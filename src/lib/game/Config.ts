import type {Card} from "../../local_types/cards";

export interface IConfig {
    size: {
        x: number
        y:number
    }
    seasons: [
        {
            name: string
            duration: number
            ambush: number
        }
    ]
    objectivesPerSeason: number
    objectives: string[]
    cards: Card[]
    ruinsCards: number
    minPlayer: number
    maxPlayer: number
    mountains: number[]
    ruins: number[]
    voids: number[]
}
