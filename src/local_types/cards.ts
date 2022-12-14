import type { Shape } from './shapes';


export enum Terrain {
	air,
	Village,
	Farm,
	Forest,
	River,
	Ambush,
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
	materialOptions: Terrain[];
	shapesOptions: shapeOption[];
};


