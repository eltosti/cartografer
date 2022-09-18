import { get_user } from '$lib/types/user';
import { type RequestEvent, type Handle, redirect } from '@sveltejs/kit';
export const handle: Handle = async ({ event, resolve }) => {
	let userid = event.cookies.get('userid');
	let user   = get_user(userid);
	if(!userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		event.cookies.set("userid", user.userid.toString());
		throw redirect(301, "");
	}

	event.locals.user = user;

	return resolve(event);
};