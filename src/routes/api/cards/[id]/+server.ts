import type { RequestEvent } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import type { Card } from "@types/cards";
import Cards from "@types/cards";
import {error} from "@sveltejs/kit";


export function GET(event: RequestEvent) {
	console.log(event);
	let card: Card|undefined = Cards.filter((card: Card)=> card.id == event.params.id ).pop();
	if (card) return json(card);
	throw error(404, "no existe la carta con id "+event.params.id)
}
