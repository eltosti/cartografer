import type { WaitingQueue } from './rooms';
import type{Card} from "./cards";
export type Tile = {
	occupied: boolean;
	material: Material;
	ruin: boolean;
	void: boolean;
	id: string;
};



export type Objectives = {
	card: Card,
	checker: (x: any) => number
	revealed: boolean
}


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
