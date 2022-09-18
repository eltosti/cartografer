
export type User = {
    nombre: String,
    userid: String
}

function  get_user(userid: string): User{
	if (!userid) {
		userid = crypto.randomUUID();
    }
	return {
        userid,
        nombre: ""
    };
}
export {get_user}
