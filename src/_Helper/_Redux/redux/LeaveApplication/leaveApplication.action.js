import { DELETE_LEAVE, LOAD_APPLIED_LEAVES, LOAD_PENDING_LEAVES } from "./leaveApplication.type"


export const loadAppliedLeaves = (leavesArray) =>( dispatch )=> {
    dispatch({type: LOAD_APPLIED_LEAVES, payload: leavesArray})
}

export const loadPendingLeaves = (leavesArray) =>( dispatch )=> {
    dispatch({type: LOAD_PENDING_LEAVES, payload: leavesArray})
}


export const deleteLeaveById = (leaveObject) => (dispatch)=> {
    dispatch({type: DELETE_LEAVE, payload: leaveObject})
}