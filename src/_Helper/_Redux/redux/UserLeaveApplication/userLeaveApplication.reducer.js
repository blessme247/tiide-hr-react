import { LOAD_APPLIED_LEAVES_BY_USER } from "./userLeaveApplication.type";



const INITIAL_STATE = {
    appliedLeavesByUser: [],
    appliedLeaveByUser: {}
}

const userAppliedLeavesReducer = (state = INITIAL_STATE, action ) => {
    const {appliedLeavesByUser} = state;
    const {type, payload} = action;
    switch (type) {
        
        case LOAD_APPLIED_LEAVES_BY_USER: 
        return {
            ...state,
            appliedLeavesByUser: [...payload]
        };
        
        default: 
        return state;
    }
}

export default userAppliedLeavesReducer;