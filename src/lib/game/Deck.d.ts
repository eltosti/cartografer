import {Card} from "../../local_types/cards";

declare class Deck {
    cards : Card[]
    ambush: Card[]
    deck: Card[]
    draws: Card[]
    difficulty: number
    constructor(cads: Card[])
    shuffle(dificulty: number, ruins: number)
    draw(): Card
}
