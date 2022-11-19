import { writable} from 'svelte/store';
import type { Writable } from 'svelte/store';
import type {Board, Tile} from '../local_types/store_state';
import {Terrain} from '../local_types/cards'


function createBoard(): { set: (this: void, value: Board) => void; // @ts-ignore
	subscribe: (this: void, run: Subscriber<Board>, invalidate?: Invalidator<Board>) => Unsubscriber; update: (this: void, updater: Updater<Board>) => void; placeCard: void } {
	const { subscribe, set, update } = writable<Board>({
		size: {
			x: 11,
			y: 11
		},
		board: Array(11).fill(() => new Array(11).fill(Terrain.air)),
		mousePosition: {
			x: null,
			y:null
		}
	});

	let tmp_board = Array(11)
	for (let i = 0; i < 11; i++) {
		let tmp_row = Array(11,Terrain.air)
		tmp_board.push(tmp_row)
	}
	update(state => {
		state.board = tmp_board
		return state
	})


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
			for (let i = 0; i < shape.length; i++) {
				for (let j = 0; j < shape[i].length; j++) {

					if (shape[i][j]){
						console.log("place: ",x+i,y+j)
						state.board[x+i][y+j] = generatedTile
					}
				}
			}
			console.log(state.board[4] == state.board[0])
			return state
		})
	};
}

const store: Writable<Board> = createBoard();

export {store}


