import {error, json, redirect,} from '@sveltejs/kit';
import type { RequestHandler} from "./$types"



export const  GET: RequestHandler = async (event) => {
    return json(false);
}
