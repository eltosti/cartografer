import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Board } from '../lib/types/store_state';

function createBoard(): Writable<Board> {
	const { subscribe, set, update } = writable<Board>({
		size: {
			x: 11,
			y: 11
		},
		board: [[], [], [], [], [], [], [], [], [], [], [], []]
	});

	return {
		subscribe,
		set,
		update
	};
}

export const store: Writable<Board> = createBoard();
