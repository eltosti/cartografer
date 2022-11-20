import type {Writable} from "svelte/store";
import type {Board, WaitingRoom} from "../local_types/store_state";
import type {Card} from "../local_types/cards";
import {writable} from "svelte/types/runtime/store";


export enum GameStates {
    drawCard,
    drawExtraCard,
    waitingForPlayers,
    positiveRotatePlayers,
    negativeRotatePlayers,

}

export type movement = {
    card: Card,
    coordinates: {
        x: number,
        y: number
    }
    player: Player
}

export type Player = {
    ready: boolean,
    board: Board,
    score: number,
    playedCards: movement[]

}


export type Game = {
    playedCards: Card[]
    deck: Card[],
    revealedObjectives: Card[]
    activeObjectives: Card[],
    objectives: Card[],
    players: Player[],
    state: GameStates,
}


interface WritableGame extends Writable<Game>{
    shuffleDeck: Function,
    drawCard: Function,
    playerReady: Function,
    validateCardPlacement: Function,
    addCardToDeck: Function,
    validateObjectives: Function,
    shiftsObjectives: Function,
    rotateBoards: Function,
    shuffleObjectives: Function,
    addPlayer: Function,
    playerDisconnect: Function,
}

function store(): WritableGame {
    const { subscribe, set, update } = writable<Game>({
        playedCards: [],
        deck: [],
        revealedObjectives: [],
        activeObjectives: [],
        objectives: [],
        players: [],
        state: GameStates.waitingForPlayers,
    });
    return {
        subscribe,
        set,
        update,
        shuffleDeck: () => update(state => {
            //salva caso de ruina -> embosca -> normal
            //              ruina -> ruina
            return state
        }),
        drawCard: () => update(state => {
            //fija de sacar otra carta si saca una runa
            return state
        }),
        playerReady: () => update(state => {
            return state
        }),
        validateCardPlacement: () => update(state => {
            return state
        }),
        addCardToDeck: () => update(state => {
            return state
        }),
        validateObjectives: () => update(state => {
            return state
        }),
        shiftsObjectives: () => update(state => {
            return state
        }),
        rotateBoards: () => update(state => {
            return state
        }),
        shuffleObjectives: () => update(state => {
            return state
        }),
        addPlayer: () => update(state => {
            return state
        }),
        playerDisconnect: () => update(state => {
            return state
        }),

    }
}

export default store()
