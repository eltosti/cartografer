import type { Cookies } from "@sveltejs/kit"

export type User = {
    nombre: String, 
    userid: String
}

export function  get_user(userid: String|void): User{
	if (!userid) {
		userid = crypto.randomUUID();
    }
	return {
        userid,
        nombre: ""
    };
}