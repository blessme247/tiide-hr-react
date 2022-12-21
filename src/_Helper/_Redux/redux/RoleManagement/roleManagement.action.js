import { DELETE_ROLE, LOAD_CREATED_ROLES, CREATE_ROLE, EDIT_ROLE, GET_ROLE_BY_ID } from "./roleManagement.type"


export const createNewRole = (newRoleObj) => dispatch => {
    console.log("serv dis ", newRoleObj)
    dispatch({ type: CREATE_ROLE, payload: newRoleObj })
}

export const loadRoles = (rolesArray) => dispatch => {
    dispatch({ type: LOAD_CREATED_ROLES, payload: rolesArray })
}

export const editRole = (roleObj) => dispatch => {
    dispatch({ type: EDIT_ROLE, payload: roleObj })
}

export const deleteRole = (roleId) => (dispatch) => {
    dispatch({ type: DELETE_ROLE, payload: roleId })
}

export const getRoleById = (roleId) => (dispatch) => {
    dispatch({ type: GET_ROLE_BY_ID, payload: roleId })
}