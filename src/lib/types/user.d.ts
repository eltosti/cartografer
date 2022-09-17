import type { Cookies } from "@sveltejs/kit"

export type User = {
    nombre: String, 
    cookie: Cookies
}