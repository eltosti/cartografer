import type {IObjective} from "./Objectives/Objective";


export type ISeason = {
    name: string
    duration: number
    difficulty: number
    Objectives: [IObjective,IObjective]
    reveled: boolean
    active: boolean
}

export type SeasonConfig = {
    name:string
    duration: number
    difficulty: number
}[]

export interface ISeasonHandler {
    currentSeasons: ISeason
    availableSeasons: ISeason[]
    extraObjectives: IObjective[]
    advanceSeason(time: number) :boolean
}

