import type { RequestEvent } from "@sveltejs/kit";
import { Cards } from 'src/types/cards';
import type { Card } from "src/types/cards";
export function GET(event: RequestEvent){
    console.log(event);
    let card: Card = Cards.filter((card)=> card.id == event.params.id );
}