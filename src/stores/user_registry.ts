import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { RegistroUsuarios } from '../local_types/store_state';
import type { User } from 'src/local_types/user';

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
                    usuarios.usuarios[user.userid.toString()] = user;
                }
                return usuarios;
            });
        },
        getUser(userid: String): User|null
        {
            if(this.userExists(userid)){
                return state.usuarios[userid.toString()];
            }else{
                return null;
            }
        },
        getUsers(){
            return Object.entries(state.usuarios).map(([k, v]) => v);
        },
        userExists(userid: String){
            return Object.keys(state.usuarios).includes(userid.toString());
        }
	};
}

export const store: WritableUserRegistry = createRegistry();
