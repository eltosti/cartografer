import type { WaitingQueue } from './rooms';
export type Tile = {
	occupied: boolean;
	material: Material;
	ruin: boolean;
	void: boolean;
	id: string;
};
export type Board = {
	size: {
		x: number;
		y: number;
	};
	board: Tile[][];
};


type WaitingQueue = User[]

export type WaitingRoom = {
	queue: WaitingQueue
}

export type RegistroUsuarios = {
	usuarios: { [key: string]: User }
}
