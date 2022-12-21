import { LOAD_NOTIFICATIONS } from "./NotificationMgt.Types";

const INITIAL_STATE = {
  allNotifications: [],
}

const NotificationMgtReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_NOTIFICATIONS:
      return {
        ...state,
        allNotifications: payload,
      }


    default:
      return state;
  }
}

export default NotificationMgtReducer;