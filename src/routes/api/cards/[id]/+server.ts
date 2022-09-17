import type { RequestEvent } from '@sveltejs/kit';
import type { Card } from "src/lib/types/cards";
import Cards from "src/lib/types/cards";
import {error} from "@sveltejs/kit";


export function GET(event: RequestEvent) {
	console.log(event);
	let card: Card = Cards.filter((card: Card)=> card.id == event.params.id ).pop();
	if (card) return new Response(JSON.stringify(card))
	throw error("no existe la carta con id "+event.params.id)
}
