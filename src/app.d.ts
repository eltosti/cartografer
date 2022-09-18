// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces


// and what to do when importing types
declare namespace App {
		import type { User } from "./local_types/user";
		interface Locals {
			id: number,
			user: User,
		}
		// interface PageData {}
		// interface PageError {}
		// interface Platform {}

}
