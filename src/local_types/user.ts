import type {CardSelection} from "./cards"
import type {Board} from "./store_state";

export type User = {
    name: String,
    userid: String,
    mapid: String,
    points: Number,
    kingdomName: String,
    kingdom_badge: String,
    mountains: Number,
    playedcards: {
        card: CardSelection,
        position: {
            x: Number,
            y: Number
        },
        rotation: Boolean
    }[],
    map: {
        mapid: String,
        mapboard: Board
    },
    can_play_card: Boolean,
    played_Card: Boolean,
    confirmed: Boolean,
    leftplayer: User,
    rightplayer: User


}

function get_user(userid: string): User {
    if (!userid) {
        userid = crypto.randomUUID();
    }

    let defaultUser :any = {
        can_play_card: false,
        confirmed: false,
        kingdomName: "",
        kingdom_badge: "",
        leftplayer: undefined,
        map: {
            mapboard: {
                size: {
                    x: 11,
                    y: 11,
                },
                board: [],
                mousePosition: {
                    x: -1,
                    y: -1
                },
                seed: -1,
                validPosition: false,
            },
            mapid: crypto.randomUUID(),
        },
        mapid: "",
        mountains: 0,
        played_Card: false,
        playedcards: [],
        points: 0,
        rightplayer: undefined,
        userid,
        name: ""
    };

    defaultUser.mapid = defaultUser.map.mapid
    defaultUser.leftplayer = defaultUser
    defaultUser.rightplayer = defaultUser


    return defaultUser as User
}

export {get_user}
