import { get_user } from './local_types/user';
import type { Handle } from '@sveltejs/kit';
import {redirect} from "@sveltejs/kit";


export const handle: Handle = async ({ event, resolve }) => {
	let userid = event.cookies.get('userid') ?? "";
	let user    = get_user(userid) ?? {nombre: "", userid: userid};
	if(!userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		event.cookies.set("userid", user.userid.toString());

	}

	event.locals.user = user;

	return resolve(event);
};
