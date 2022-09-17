import type { User } from '$lib/types/user';
import { store } from '@stores/waiting_room';
import { error, json, type RequestEvent } from '@sveltejs/kit';
export async function GET(event: RequestEvent){
    let localQueue: User[] = [];
    store.subscribe((queue: User[]) => { localQueue = queue });
    store.addUser(event.locals.user);
    return json(localQueue);
}