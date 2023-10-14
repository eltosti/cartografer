import type {Card} from "../../local_types/cards";
import type {Terrain} from "../../local_types/cards";
import type {Maybe} from "../../types/generics";
import type {Shape} from "../../local_types/shapes";
import {isAmbush, getRandomInt, mutateShape, shuffleArray, choose} from "../utils";


export interface IDeck {
    cards : Card[]
    ambush: Card[]
    deck: Card[]
    draws: Card[]

    shuffle(difficulty: number, ruins: number): void
    draw(): Maybe<Card>
    isVariationOfDrawnCard(shape:Shape, material: Terrain): boolean
}

export class Deck implements IDeck {
    cards: Card[] = []
    ambush: Card[] = []
    deck: Card[] = []
    draws: Card[] = []

    _mutations: Shape[] = []

    constructor(cards: Card[]) {
        this.cards = cards.filter(x => !isAmbush(x))
        this.ambush = cards.filter(x => isAmbush(x))
    }

    shuffle(difficulty= 1, ruins= 2) {
        this.deck = [...this.cards]
        shuffleArray(this.deck)
        let ambushCards = choose(this.ambush.length-1, difficulty).map( index => this.ambush[index] )
        for (let i = 0; i < difficulty; i++) {
            this.deck.splice(getRandomInt(this.deck.length),0, ambushCards[i])
        }
        for (let index in choose(this.deck.length,ruins)) {
            this.deck[index].ruin = true
        }
    }

    draw() {
        if (!this.deck[0]) return null
        let firstCard = this.deck[0]
        this.draws.push(firstCard)
        this._mutations = []
        for (const sOptions of firstCard.shapesOptions) {
            this._mutations.concat(mutateShape(sOptions.shape))
        }
        return firstCard
    }

    isVariationOfDrawnCard(s:Shape, material: Terrain): boolean {
shape:  for (const mutation of this._mutations) {
            let m = mutation.shape
            if (mutation.offset.x != s.offset.x || mutation.offset.y != s.offset.y) continue
            if (m.length != s.shape.length || m[0].length != s.shape[0].length) continue

            for (let i = 0; i < m.length; i++) {
                for (let j = 0; j < m[0].length; j++) {
                    if (m[i][j] != s.shape[i][j]) continue shape
                }
            }
            return true
        }
        return false
    }

}





