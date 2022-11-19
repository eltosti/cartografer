import type { User } from '../../../../local_types/user';
import { store as w_store } from '../../../../stores/waiting_room';
import {error, json, redirect,} from '@sveltejs/kit';
import type { RequestHandler} from "./$types"



export const  GET: RequestHandler = async ({locals}) => {
    let localQueue: User[] = [];
    w_store.subscribe((queue) => { localQueue = queue.queue });
    // store.addUser(locals.user);
    return json(localQueue);
}

export const POST: RequestHandler = async ({locals}) => {
    let localQueue: User[] = [];
    w_store.subscribe((queue) => { localQueue = queue.queue });
    console.log(localQueue ,"!!!");
    w_store.addUser(locals.user);
    console.log("usuario registrado y agregado a la lista de espera");
    return json(localQueue);
}
// export const GET: RequestHandler = async ({locals, request }) => { 
//     let registro: RegistroUsuarios = { usuarios: {} };
//     let unsuscribe = await store.subscribe((user_registry) => { registro = user_registry });
//     return json(registro);
// }