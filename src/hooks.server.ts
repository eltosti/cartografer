import { get_user } from '$lib/types/user';
import type { RequestEvent, Handle } from '@sveltejs/kit';
import type { MaybePromise } from '@sveltejs/kit/types/private';
import type { ResolveOptions } from 'vite';
export const handle: Handle = async ({ event, resolve }: { 
	event: RequestEvent; resolve: CallableFunction }) => {
	let userid = event?.cookies.get('userid');
	let user   = get_user(userid);
	if(!userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		event.cookies.set("userid", user.userid.toString());
	}

	event.locals.user = user;

	return resolve(event);
};