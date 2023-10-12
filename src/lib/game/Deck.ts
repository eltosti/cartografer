import type {Card} from "../../local_types/cards";
import {Terrain} from "../../local_types/cards";

function choose(size: number, amount: number): number[] {
    if (size <= 0 || amount > size) return []
    let indexChoice = Array.from({length: size}, (value, index) => index);
    let selected = []
    for (let i = 0; i < amount; i++) {
        let rIndex = getRandomInt(size - i)
        selected.push(indexChoice[rIndex])
        indexChoice.splice(rIndex,1)
    }
    return selected
}

function isAmbush(card: Card): boolean {
    return card.materialOptions.filter(material => material != Terrain.Ambush).length == 0
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

class Deck implements Deck {
    cards: Card[] = []
    ambush: Card[] = []
    deck: Card[] = []
    draws: Card[] = []

    constructor(cards: Card[]) {
        this.cards = cards.filter(x => !isAmbush(x))
        this.ambush = cards.filter(x => isAmbush(x))
    }

    shuffle(difficulty: number = 1, ruins: number = 2): void {
        this.deck = [...this.cards]
        let ambushCards = choose(this.ambush.length-1, difficulty).map( index => this.ambush[index] )
        for (let i = 0; i < difficulty; i++) {
            this.deck.splice(getRandomInt(this.deck.length),0, ambushCards[i])
        }
        for (let index in choose(this.deck.length,ruins)) {
            this.deck[index].ruin = true
        }
    }

    draw(): Card {
        let firstCard = this.cards[0]
        if (typeof firstCard !== "undefined") this.draws.push(firstCard)
        return firstCard
    }
}


