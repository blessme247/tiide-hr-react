import { DELETE_LEAVE, LOAD_APPLIED_LEAVES } from "./leaveApplication.type";


const INITIAL_STATE = {
    appliedLeaves: [],
    appliedLeave: {},
}

const appliedLeavesReducer = (state = INITIAL_STATE, action ) => {
    const {appliedLeaves} = state;
    const {type, payload} = action;
    switch (type) {
        case LOAD_APPLIED_LEAVES: 
        return {
            ...state,
            appliedLeaves: [ ...payload]
        };
        case DELETE_LEAVE:
            return {
                ...state,
                appliedLeaves: appliedLeaves.filter((appliedLeave) => appliedLeave.id !== payload.id)
            }

        default: 
        return state;
    }
}

export default appliedLeavesReducer;