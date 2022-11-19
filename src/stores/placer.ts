import type {Subscriber, Unsubscriber, Updater, Writable} from 'svelte/store';
import {writable} from 'svelte/store';
import type {Board} from '../local_types/store_state';
import type {Shape} from "../local_types/shapes";
import {Terrain} from "../local_types/cards";

type jajas = {
    shape: Shape,
    terrain: Terrain
}

function rotateClockwise(array: any[][]) {
    const result: any[] = [];
    array.forEach(function (a, i, aa) {
        a.forEach(function (b, j, bb) {
            result[j] = result[j] || [];
            result[j][aa.length - i - 1] = b;
        });
    });
    return result;
}


class Invalidator<T> {
}

function createStore(): { rotate: () => void; mirror: () => void; set: (this: void, value: jajas) => void; subscribe: (this: void, run: Subscriber<jajas>, invalidate?: Invalidator<jajas>) => Unsubscriber; update: (this: void, updater: Updater<jajas>) => void } {
    const { subscribe, set, update } = writable<jajas>({
        shape:  {
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
        },
        terrain: Terrain.air
    });

    // @ts-ignore
    return {
        set,
        // @ts-ignore
        subscribe,
        update,

        rotate: () => update(state => {
            let shape = state.shape.shape
            let preserve_prev = shape[state.shape.offset.x][state.shape.offset.y]
            // @ts-ignore
            shape[state.shape.offset.x][state.shape.offset.y] = null
            shape = rotateClockwise(shape);
            for (let i = 0; i < shape.length; i++) {
                for (let j = 0; j < shape[i].length; j++) {
                    if (shape[i][j] == null){
                        state.shape.offset.x = i
                        state.shape.offset.y = j
                        shape[i][j] = preserve_prev
                    }
                }
            }
            state.shape.shape = shape
            return state;
        }),

        mirror: () => update(state  => {
            let shape = state.shape.shape
            console.log(shape)
            shape = shape.reverse()
            /*for (let i = 0; i < shape.length; i++) {
                shape[i] = shape[i].reverse()
            }*/
            console.log(shape)
            state.shape.offset.x = state.shape.shape.length - state.shape.offset.x -1
            state.shape.shape = shape
            return state
        })
    };
}

const store: Writable<jajas> = createStore();
export {store}
