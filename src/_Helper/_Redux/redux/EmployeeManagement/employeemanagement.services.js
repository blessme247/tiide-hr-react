import axiosInstance from "../../../_Axios/axios-config";

// const localToken = JSON.parse(localStorage.getItem("token"));

const getEmployee = async () => {
  try {
    const res = await axiosInstance.get("/staffs")
    return (res.data)
  } catch (error) {
    console.log(error)
  }
};

const addNewEmployee = async (newObj) => {
  try {
    const res = await axiosInstance.post("/staffs", newObj)
    return (res.data)
  } catch (error) {
    console.log(error)
  }
};

const employeeManagementServices = {
  getEmployee,
  addNewEmployee,
};

export default employeeManagementServices;

// trying to dynamically get the token from local storage.
// but i am thinking that the token should be gotten and saved in the redux store instead of local storage. which will make it easier to get from all who needs it. 