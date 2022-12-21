//This is where the business logic will be initiated
//Here, We wil create our store which will contain our initial state, the store will also contain our reducer/logic
//Finally, We export it to our rootReducer

import {
  EDIT_LEAVE_POLICY,
  LOAD_LEAVE_POLICIES
} from "./leave.type";

const INITIAL_STATE = {
  leaves: [],
  leave: {},
};

const leaveManagementReducer = (state = INITIAL_STATE, action) => {
  const { leaves } = state;
  const { type, payload } = action;
  switch (type) {
    case LOAD_LEAVE_POLICIES:
      console.log(typeof leaves, "leaveMgtReducer")
      return {
        ...state,
        leaves: [...payload],
      };
    case EDIT_LEAVE_POLICY:
      return {
        ...state,
        leaves: leaves.map((leave) =>
          leave.id === payload.id
            ? {
                ...leave,
                title: payload.title,
                duration: payload.duration,
                description: payload.description,
              }
            : leave
        ),
      };

    default:
      return state;
  }
};

export default leaveManagementReducer;
