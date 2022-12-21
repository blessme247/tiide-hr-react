import { CREATE_LEVEL, DELETE_LEVEL, LOAD_LEVELS } from "./LevelMgt.types";

const INITIAL_STATE = {
  allLevels: [],
}

const LevelManagementReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LEVELS:
      return {
        ...state,
        allLevels: payload,
      }

    case CREATE_LEVEL:
      return {
        ...state,
        allLevels: [...state.allLevels, payload]
      }

    case DELETE_LEVEL:
      return {
        ...state,
        allLevels: state.allLevels.filter(id => id !== payload),
      }

    default:
      return state;
  }
}

export default LevelManagementReducer;