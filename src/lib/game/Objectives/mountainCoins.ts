import {Terrain} from "../../../local_types/cards";
import type {IBoard} from "../Board";
import type {IObjective} from "./Objective";

export const mountainCoins : IObjective = {
    name: "mountain coins",
    description: "helper para contar montañas rellenas",
    hints: [Terrain.Mountain],
    max: Number.MAX_VALUE,
    func: (board: Readonly<IBoard>) => {
        let b = board.board
        let completed = 0
        for (let i = 0; i < b.length; i++) {
            for (let j = 0; j < b[0].length; j++) {
                if (b[i][j].material == Terrain.Mountain) {
                    let up = b[i-1][j]?.occupied ?? true
                    let down = b[i+1][j]?.occupied ?? true
                    let left = b[i][j-1]?.occupied ?? true
                    let right = b[i][j+1]?.occupied ?? true
                    if (up && down && left && right) completed++
                }
            }
        }
        return completed
    }
}
