// Aca actualizamos el store de usuarios
import type { User } from '../../../local_types/user';
import { store } from "../../../stores/user_registry";
import { error, json, redirect } from '@sveltejs/kit';
import type { RequestHandler} from "./$types"
import type { RegistroUsuarios } from 'src/local_types/store_state';



export const POST: RequestHandler = async ({locals, request }) => {
    //TODO: Como carajo accedo mejor a los datos del POST ????
    let [param, value] = await (await request.text()).split("=");
    if(param != "nombre")throw error(400, "Debe indicar un nombre de usuario");
    let nombre = value;
    if(!nombre)throw error(400, "Debe indicar un nombre de usuario");
    console.log()
    locals.user.nombre = nombre;
    let registro: RegistroUsuarios = { usuarios: {} };
    store.subscribe((user_registry) => { registro = user_registry });

    if(!store.userExists(locals.user.userid)){
        store.addUser(locals.user);
    }
    store.setUsername(locals.user, nombre);
    throw redirect(303, "/wait");
}
