import { error } from '@sveltejs/kit';
import type {PageServerLoad} from "./$types"
import {store} from "../../stores/user_registry";


export const load: PageServerLoad = async (event) => {
    let json = store.getUsers()
    const post = []
    for (const jsonElement of json) {
        post.push(jsonElement)
    }

    if (post) {
        return {users:post};
    }

    throw error(404, 'Not found');
}
