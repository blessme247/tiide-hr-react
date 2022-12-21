import { ADD_EMPLOYEE, LOAD_EMPLOYEE } from "./employeemanagement.type";

const INITIAL_STATE = {
  employeeData: []
}

const EmployeeManagementReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_EMPLOYEE:
      return {
        ...state,
        employeeData: payload,
      }

    case ADD_EMPLOYEE:
      return {
        ...state,
        employeeData: [...state.employeeData, payload],
      }

    default:
      return state;
  }
};


export default EmployeeManagementReducer;