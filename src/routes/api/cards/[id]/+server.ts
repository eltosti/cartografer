import { json, error } from '@sveltejs/kit';
import  {Cards, ruinTile} from "../../../../local_types/constants";
import type { Card} from "../../../../local_types/cards";
import type {RequestHandler} from "./$types";

export const GET :RequestHandler = async (event) =>  {
	console.log(event);
	let card: Card|undefined = Cards.filter((card: Card)=> card.id == (event.params.id as unknown as number )).pop();
	if (card) return json(card);
	throw error(404, "no existe la carta con id "+event.params.id)
}
