import { DELETE_ROLE, LOAD_CREATED_ROLES, CREATE_ROLE, EDIT_ROLE } from "./roleManagement.type";


const INITIAL_STATE = {
    roles: [],
    role: {},
    // currentUserRoleId:{}
}

const RoleManagementReducer = (state = INITIAL_STATE, action) => {

    const { roles } = state;
    const { type, payload } = action;

    switch (type) {

        case LOAD_CREATED_ROLES:
            // console.log("serv ", roles)
            // debugger;
            return {
                ...state,
                roles: payload,
            };

        case CREATE_ROLE:
            return {
                ...state,
                roles: [...roles, payload]
            }

        case EDIT_ROLE:
            return {
                ...state,
                roles: roles.map((role) =>
                    role.id === payload.id
                        ? {
                            ...role,
                            title: payload.title,
                            description: payload.description,
                        }
                        : role
                ),
            };

        case DELETE_ROLE:
            return {
                ...state,
                roles: roles.filter((role) => role.roleId !== payload.roleId)
            }

        default:
            return state;
    }
}

export default RoleManagementReducer;