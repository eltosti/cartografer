import { writable} from 'svelte/store';
import type { Writable } from 'svelte/store';
import type {Board, Tile} from '../local_types/store_state';
import {Terrain} from '../local_types/cards'
import {emptyTile, MountainTile} from "../local_types/constants";
import config from '../config.json' assert { type: "json" };


function createBoard(): { set: (this: void, value: Board) => void; // @ts-ignore
	subscribe: (this: void, run: Subscriber<Board>, invalidate?: Invalidator<Board>) => Unsubscriber; update: (this: void, updater: Updater<Board>) => void; placeCard: void } {
	let mountains = [14,15,29,29,15]
	let tmp_board = Array(config.DEFAULT_BOARD_SIZE)



	for (let i = 0; i < config.DEFAULT_BOARD_SIZE; i++) {
		let tmp_row = []
		for (let j = 0; j < config.DEFAULT_BOARD_SIZE; j++) {
			console.log(mountains[0])
			if (mountains[0] == 0){
				mountains.reverse().pop()
				mountains.reverse()
				tmp_row.push(MountainTile)
			}else{
				mountains[0] = mountains[0] - 1
				tmp_row.push(emptyTile)
			}
		}
		tmp_board[i]= tmp_row
	}

	let tmp_seed = 1//Math.floor(Math.random() * 100000)

	const { subscribe, set, update } = writable<Board>({
		size: {
			x: config.DEFAULT_BOARD_SIZE,
			y: config.DEFAULT_BOARD_SIZE
		},
		board: tmp_board,
		mousePosition: {
			x: -1,
			y:-1
		},
		seed: tmp_seed,
		validPosition: false
	});



	return {
		subscribe,
		set,
		update,
		// @ts-ignore
		placeCard: (x_offset,y_offset,shape, terrain) => update( state => {
			let x = state.mousePosition.x - x_offset
			let y = state.mousePosition.y - y_offset
			let generatedTile:Tile = {
				occupied: true,
				material: terrain,
				ruin: false,
				void: false,
				id: "",
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
		}),
		// @ts-ignore
		updateMousePosition: (x,y,shape) => update(state => {
			state.mousePosition = {
				x: x,
				y:y
			}
			let insideBoard;
			let min_x_pos = state.mousePosition.x - shape.offset.x
			let min_y_pos = state.mousePosition.y - shape.offset.y
			let max_x_pos = min_x_pos + shape.shape.length
			let max_y_pos = min_y_pos + shape.shape[0].length
			insideBoard = min_y_pos >= 0 && min_x_pos >= 0 && max_x_pos <= state.board.length && max_y_pos <= state.board[0].length
			state.validPosition = insideBoard
			if (!insideBoard) return state

			let allValid = true
			for (let i = 0; i < shape.shape.length; i++) {
				for (let j = 0; j < shape.shape[0].length; j++) {
					let matrixPlacementX = min_x_pos+i
					let matrixPlacementY = min_y_pos+j
					if (shape.shape[i][j]) {
						console.log(state.board[matrixPlacementX][matrixPlacementY].material != Terrain.air)
						allValid = allValid && state.board[matrixPlacementX][matrixPlacementY].material == Terrain.air
					}
				}
			}
			state.validPosition = allValid
			return state
		})
	};

}




const store: Writable<Board> = createBoard();

export {store}


