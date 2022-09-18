import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { RegistroUsuarios } from '../lib/types/store_state';
import type { User } from '$lib/types/user';

interface WritableUserRegistry extends Writable<RegistroUsuarios>{
    addUser: Function,
    getUser: Function,
    getUsers: Function,
    userExists: (userid: String) => boolean
}

function createRegistry(): WritableUserRegistry {
	const { subscribe, set, update } = writable<RegistroUsuarios>({
        usuarios: {}
    }); 
    let state: RegistroUsuarios;
	subscribe((v)=>state=v);

	return {
		subscribe,
		set,
		update, 
        addUser(user: User){
            update((usuarios) => {
                if(!this.userExists(user.userid)){
                    usuarios.usuarios.set(user.userid, user);
                }
                return usuarios;
            });
        },
        getUser(userid: String): User|null
        {
            if(this.userExists(userid)){
                return state.usuarios.get(userid);
            }else{
                return null;
            }
        },
        getUsers(){
            return Object.entries(state.usuarios).map(([k, v]) => v);
        },
        userExists(userid: String){
            console.log(userid, "HEY");
            return Object.keys(state.usuarios).includes(userid.toString());
        }
	};
}

export const store: WritableUserRegistry = createRegistry();
