import type {Card} from "../../local_types/cards";
import {Terrain} from "../../local_types/cards";
import type {Maybe} from "../../types/generics";


export interface IDeck {
    cards : Card[]
    ambush: Card[]
    deck: Card[]
    draws: Card[]
    shuffle(dificulty: number, ruins: number): void
    draw(): Maybe<Card>
}

export class Deck implements IDeck {
    cards: Card[] = []
    ambush: Card[] = []
    deck: Card[] = []
    draws: Card[] = []

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
        return firstCard
    }
}


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

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function isAmbush(card: Card): boolean {
    return card.materialOptions.filter(material => material != Terrain.Ambush).length == 0
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}





