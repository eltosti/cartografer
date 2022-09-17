import { type RequestEvent, json } from "@sveltejs/kit";

import Cards from '$types/cards';
import type { Card } from "$types/cards";
export function GET(event: RequestEvent){
    let card: Card = Cards.filter((card: Card)=> card.id == event.params.id ).pop();
    if(card){
        return json({
            status: 200, 
            body: {
                card
            }
        }); 
    }else{
        return json({
            status: 404, 
            body: {
                message:"No existe la carta que estas buscando"
            }
        })
    }
}