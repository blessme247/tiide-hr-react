import { ADD_EMPLOYEE, LOAD_EMPLOYEE } from "./employeemanagement.type"


export const loadEmployee = (data) => dispatch => {
  dispatch({ type: LOAD_EMPLOYEE, payload: data })
}

export const addEmployee = (dataObj) => dispatch => {
  dispatch({ type: ADD_EMPLOYEE, payload: dataObj })
}

