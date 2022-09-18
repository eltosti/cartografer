import type { Shape } from './shapes';


export enum Material {
	air,
	Village,
	Farm,
	Forest,
	River,
	Goblin,
	Mountain
}
export enum CardType {
	Exploration,
	Ambush,
	Ruin
}


export type shapeOption = {
	shapes: Shape[];
	coin: boolean;
};

export type Card = {
	name: string;
	time: number;
	id: number;
	materialOptions: Material[];
	shapesOptions: shapeOption[];
};


