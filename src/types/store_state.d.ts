export type Tile = {
    occupied: boolean,
    material: Material,
    ruin: boolean,
    void: boolean,
    id: string
}
export type Board = {
    size: {
        x: number,
        y: number,
    }
    board : Tile[][]
}





