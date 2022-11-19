export type Shape = {
    shape: boolean[][],
    offset: {
        x: number,
        y: number,
    }
};

export const smallL: Shape = {
    offset: {
        x: 1,
        y: 0
    },
    shape: [
        [true, false],
        [true, true],
    ]
};
export const standardL: Shape = {
    offset: {
        x: 0,
        y: 2
    },
    shape: [
        [true, true, true, true],
        [false, false, false, true],
    ]
};

export const uglySquare: Shape = {
    offset: {
        x: 0,
        y: 1
    },
    shape: [
        [true, true, true,],
        [true, true, false],
    ]
};

export const shortLine: Shape = {
    offset: {
        x: 0,
        y: 0
    },
    shape: [
        [true],
        [true],
    ]
};
export const standardLine: Shape = {
    offset: {
        x: 0,
        y: 1
    },
    shape: [
        [true, true, true],
    ]
};

export const longLine: Shape = {
    offset: {
        x: 0,
        y: 1
    },
    shape: [
        [true, true, true, true],
    ]
};

export const longZigZag: Shape = {
    offset: {
        x: 1,
        y: 2
    },
    shape: [
        [false, false, true, true],
        [true, true, true, false],
    ]
};

export const standarZigZag: Shape = {
    offset: {
        x: 1,
        y: 0
    },
    shape: [
        [true, false,],
        [true, true,],
        [false, true,],
    ]
};

export const shortDiagonal: Shape = {
    offset: {
        x: 0,
        y: 0
    },
    shape: [
        [true, false,],
        [false, true,],
    ]
};
export const standardDiagonal: Shape = {
    offset: {
        x: 1,
        y: 1
    },
    shape: [
        [true, false, false,],
        [false, true, false,],
        [false, false, true,],
    ]
};
export const letterC: Shape = {
    offset: {
        x: 1,
        y: 0
    },
    shape: [
        [true, true, false,],
        [true, false, false,],
        [true, true, false,],
    ]
};

export const parallel: Shape = {
    offset: {
        x: 0,
        y: 0
    },
    shape: [
        [true, false, true,],
        [true, false, true,],
    ]
};

export const longDiagonal: Shape = {
    offset: {
        x: 1,
        y: 1
    },
    shape: [
        [false, false, true,],
        [false, true, true,],
        [true, true, false,],
    ]
};

export const cross: Shape = {
    offset: {
        x: 1,
        y: 1
    },
    shape: [
        [false, true, false,],
        [true, true, true,],
        [false, true, false,],
    ]
};

export const longL: Shape = {
    offset: {
        x: 0,
        y: 0
    },
    shape: [
        [true, true, true, true],
        [true, false, false, false],
        [true, false, false, false],
        [true, false, false, false]
    ]
};
export const single: Shape = {
    offset: {
        x: 0,
        y: 0
    },
    shape: [
        [true],
    ]
};

export const standardT: Shape = {
    offset: {
        x: 1,
        y: 0
    },
    shape: [
        [true, false,],
        [true, true,],
        [true, false,],
    ]
};

export const longT: Shape = {
    offset: {
        x: 1,
        y: 0
    },
    shape: [
        [true, false, false,],
        [true, true, true,],
        [true, false, false],
    ]
};

export const empty: Shape = {
    offset: {
        x: 0,
        y: 0
    },
    shape: [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ]
};
