import type { Cookies } from "@sveltejs/kit"
import type { Maybe } from "src/types/generics";

export type User = {
    nombre: String, 
    userid: String
}

export function  get_user(userid: String|void): Maybe<User>{
	if (!userid) {
		userid = crypto.randomUUID();
    }
	return {
        userid,
        nombre: ""
    };
}