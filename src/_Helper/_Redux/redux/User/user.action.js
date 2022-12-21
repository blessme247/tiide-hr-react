import { LOAD_CURRENT_USER } from "./user.type"


export const loadCurrentUser = (userObject) =>( dispatch )=> {
    dispatch({type: LOAD_CURRENT_USER, payload: userObject})
}