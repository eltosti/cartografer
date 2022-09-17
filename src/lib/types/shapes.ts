export enum shapes {}

export type Shape = boolean[][];

export const smallL: Shape = [
	[true, false, false, false],
	[true, true, false, false],
	[false, false, false, false],
	[false, false, false, false]
];
export const standardL: Shape = [
	[true, true, true, true],
	[false, false, false, true],
	[false, false, false, false],
	[false, false, false, false]
];

export const uglySquare: Shape = [
	[true, true, true, false],
	[true, true, false, false],
	[false, false, false, false],
	[false, false, false, false]
];

export const shortLine: Shape = [
	[true, false, false, false],
	[true, false, false, false],
	[false, false, false, false],
	[false, false, false, false]
];
export const standardLine: Shape = [
	[true, true, true, false],
	[false, false, false, false],
	[false, false, false, false],
	[false, false, false, false]
];

export const longLine: Shape = [
	[true, true, true, true],
	[false, false, false, false],
	[false, false, false, false],
	[false, false, false, false]
];

export const longZigZag: Shape = [
	[false, false, true, true],
	[true, true, true, false],
	[false, false, false, false],
	[false, false, false, false]
];

export const standarZigZag: Shape = [
	[true, false, false, false],
	[true, true, false, false],
	[false, true, false, false],
	[false, false, false, false]
];

export const shortDiagonal: Shape = [
	[true, false, false, false],
	[false, true, false, false],
	[false, false, false, false],
	[false, false, false, false]
];
export const standardDiagonal: Shape = [
	[true, false, false, false],
	[false, true, false, false],
	[false, false, true, false],
	[false, false, false, false]
];
export const letterC: Shape = [
	[true, true, false, false],
	[true, false, false, false],
	[true, true, false, false],
	[false, false, false, false]
];

export const parallel: Shape = [
	[true, false, true, false],
	[true, false, true, false],
	[false, false, false, false],
	[false, false, false, false]
];

export const longDiagonal: Shape = [
	[false, false, true, false],
	[false, true, true, false],
	[true, true, false, false],
	[false, false, false, false]
];

export const cross: Shape = [
	[false, true, false, false],
	[true, true, true, false],
	[false, true, false, false],
	[false, false, false, false]
];

export const longL: Shape = [
	[true, true, true, true],
	[true, false, false, false],
	[true, false, false, false],
	[true, false, false, false]
];
export const single: Shape = [
	[true, false, false, false],
	[false, false, false, false],
	[false, false, false, false],
	[false, false, false, false]
];

export const standardT: Shape = [
	[true, false, false, false],
	[true, true, false, false],
	[true, false, false, false],
	[false, false, false, false]
];

export const longT: Shape = [
	[true, false, false, false],
	[true, true, true, false],
	[true, false, false, false],
	[false, false, false, false]
];

export const empty: Shape = [
	[false, false, false, false],
	[false, false, false, false],
	[false, false, false, false],
	[false, false, false, false]
];
