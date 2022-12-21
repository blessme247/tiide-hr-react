
//NOTE
//The combineReducers allows us to combine all the reducers
// The rootReducer will contain all other reducers in the application
// Putting all other reducers in the root reducer makes the reducers available to any component where it will be used
// leaveManagementStore is an identifier for our leaveManagementReducer and it can be any name
// leaveManagementReducer comes from leave.reducer.js

import { combineReducers } from "redux";
import leaveManagementReducer from "./leaveManagement/leave.reducer";
import appliedLeavesReducer from "./redux/LeaveApplication/leaveApplication.reducer";
import EmployeeManagementReducer from "./redux/EmployeeManagement/employeemanagement.reducer";
import LevelManagementReducer from "./redux/LevelManagement/LevelMgt.reducer";
import RoleManagementReducer from "./redux/RoleManagement/roleManagement.reducer";
import NotificationMgtReducer from "./redux/NotificationManagement/NotificationMgt.reducer";
import userAppliedLeavesReducer from "./redux/UserLeaveApplication/userLeaveApplication.reducer";
import userReducer from "./redux/User/user.reducer";


const rootReducer = combineReducers({
  leaveManagementStore: leaveManagementReducer,
  appliedLeavesStore: appliedLeavesReducer,
  EmployeeManagementStore: EmployeeManagementReducer,
  LevelManagementStore: LevelManagementReducer,
  RoleManagementStore: RoleManagementReducer,
  NotificationMgtStore: NotificationMgtReducer,
  userAppliedLeaveStore: userAppliedLeavesReducer,
  currentUserStore: userReducer
})


export default rootReducer;