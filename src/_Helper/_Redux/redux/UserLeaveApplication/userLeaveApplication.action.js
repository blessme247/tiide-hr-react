import { LOAD_APPLIED_LEAVES_BY_USER } from "./userLeaveApplication.type"

export const loadAppliedLeavesByUser = (leavesArray) =>( dispatch )=> {
    dispatch({type: LOAD_APPLIED_LEAVES_BY_USER, payload: leavesArray})
}