import { LOAD_CURRENT_USER } from "./user.type";

const INITIAL_STATE = {
    currentUser: {}
}

const userReducer = (state = INITIAL_STATE, action ) => {
    const {currentUser} = state;
    const {type, payload} = action;
    switch (type) {
        
        case LOAD_CURRENT_USER: 
        return {
            ...state,
            currentUser: payload
        };
        
        default: 
        return state;
    }
}

export default userReducer;