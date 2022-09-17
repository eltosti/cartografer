import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { RegistroUsuarios } from '../lib/types/store_state';
import type { User } from '$lib/types/user';

interface WritableUserRegistry extends Writable<RegistroUsuarios>{
    addUser: Function,
    getUser: Function,
    getUsers: Function
}

function createRegistry(): WritableUserRegistry {
	const { subscribe, set, update } = writable<RegistroUsuarios>({
        usuarios: []
    }); 
    let state: RegistroUsuarios;
	subscribe((v)=>state=v);

	return {
		subscribe,
		set,
		update, 
        addUser(user: User){
            update((usuarios) => {
                usuarios.usuarios.push(user);
                return usuarios;
            });
        },
        getUser(userid: String){
            return state.usuarios.filter((usuario) => usuario.userid == userid).pop();
        },
        getUsers(){
            return state.usuarios;
        }
	};
}

export const store: WritableUserRegistry = createRegistry();
