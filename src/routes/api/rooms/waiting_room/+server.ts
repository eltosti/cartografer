import type { User } from '../../../../local_types/user';
import  {store}  from "../../../../stores/user_registry";
import {error, json, redirect,} from '@sveltejs/kit';
import type { RequestHandler} from "./$types"



export const  GET: RequestHandler = async ({locals}) => {
    let localQueue: { [p: string]: User } = {"aa": {nombre:"", userid: "" }};
    store.subscribe((queue) => { localQueue = queue.usuarios });
    store.addUser(locals.user);
    console.log(localQueue)


    return json(localQueue);
}
