// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { User } from "$lib/types/user";

// and what to do when importing types
declare namespace App {
	interface Locals {
		id: number,
		user: User,
	}
	// interface PageData {}
	// interface PageError {}
	// interface Platform {}
}
