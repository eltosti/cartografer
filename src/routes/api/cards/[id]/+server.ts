import type { RequestEvent } from '@sveltejs/kit';
import type { Card } from "$types/cards";
import Cards from "$types/cards";


export function GET(event: RequestEvent) {
	console.log(event);
	let card: Card[] = Cards.filter((card)=> card.id == event.params.id );
}
