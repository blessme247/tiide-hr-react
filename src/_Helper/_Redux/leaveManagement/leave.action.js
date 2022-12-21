import { EDIT_LEAVE_POLICY, LOAD_LEAVE_POLICIES } from "./leave.type"

export const loadLeavePolicies = (leavesArray) =>( dispatch )=> {
    dispatch({type: LOAD_LEAVE_POLICIES, payload: leavesArray})
}

export const editLeavePolicy = (newLeaveObject) => (dispatch)=> {
    dispatch({type: EDIT_LEAVE_POLICY, payload: newLeaveObject})
}
