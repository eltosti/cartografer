import type { User } from '../../../../local_types/user';
import  store  from "../../../../stores/waiting_room";
import {error, json, redirect,} from '@sveltejs/kit';
import type { RequestHandler} from "./$types"



export const  GET: RequestHandler = async ({locals}) => {
    let localQueue: User[] = [];
    store.subscribe((queue) => { localQueue = queue.queue });
    store.addUser(locals.user);
    return json(localQueue);
}
