import {RECIEVE_TOP_MOVIES} from "../actions"

export default (state = {}, {type, data}) =>{
    switch (type) {
        case RECIEVE_TOP_MOVIES:
            return data;
    
        default:
            return state;
    }
};