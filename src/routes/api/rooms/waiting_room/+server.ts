import type { User } from '$lib/types/user';
import { store } from '@stores/waiting_room';
import { error, json, type RequestEvent } from '@sveltejs/kit';
export async function POST(event: RequestEvent){
    let { nombre } = await event.request.json();
    if(!nombre) throw error(400, "Debe indicar un nombre");
    event.locals.user.nombre = nombre;
    console.log(event.locals.user);
    let localQueue: User[];
    store.subscribe((queue: User[]) => { localQueue = queue });
    
    return json(localQueue);
}