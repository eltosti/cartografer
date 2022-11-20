import { writable} from 'svelte/store';
import type { Writable } from 'svelte/store';
import type {Board, Tile} from '../local_types/store_state';
import {Terrain} from '../local_types/cards'
import {emptyTile} from "../local_types/constants";
let BORDER_SIZE = 11;

function createBoard(): { set: (this: void, value: Board) => void; // @ts-ignore
	subscribe: (this: void, run: Subscriber<Board>, invalidate?: Invalidator<Board>) => Unsubscriber; update: (this: void, updater: Updater<Board>) => void; placeCard: void } {

	let tmp_board = Array(BORDER_SIZE)
	for (let i = 0; i < BORDER_SIZE; i++) {
		let tmp_row = []
		for (let j = 0; j < BORDER_SIZE; j++) {
			tmp_row.push(emptyTile)
		}
		tmp_board[i]= tmp_row
	}

	const { subscribe, set, update } = writable<Board>({
		size: {
			x: BORDER_SIZE,
			y: BORDER_SIZE
		},
		board: tmp_board,
		mousePosition: {
			x: null,
			y:null
		}
	});




	return {
		subscribe,
		set,
		update,
		// @ts-ignore
		placeCard: (x,y,shape, terrain) => update( state => {
			let generatedTile:Tile = {
				occupied: true,
				material: terrain,
				ruin: false,
				void: false,
				id: "aaaa",
			}
			let isValid = true
			for (let i = 0; i < shape.length; i++) {
				for (let j = 0; j < shape[i].length; j++) {

					if (shape[i][j] 
						&& (typeof(state.board[x+i]) === 'undefined' 
							|| typeof(state.board[x+i][y+j]) === 'undefined' 
							|| state.board[x+i][y+j].occupied) 
						){
						return state
					}
				}
			}
			for (let i = 0; i < shape.length; i++) {
				for (let j = 0; j < shape[i].length; j++) {
					if (shape[i][j]){
						state.board[x+i][y+j] = generatedTile
					}
				}
			}
			return state
		})
	};
}

const store: Writable<Board> = createBoard();

export {store}


