import axiosInstance from "../../AxiosConfig/axiosConfig";
import { getToken } from "../../Services/globalUtil";



export const fetchAppliedLeaves = async (access) => {
  try { 
    const response = await axiosInstance.get("/leaveApplication" )  
    let {data} = response;
    return data;
  } catch (error) {
    
  }

  
}



  export const deleteLeave = async (access, id) => {
    try { 
      const response = await axiosInstance.delete(`/leaveApplication/${id}`, 
    
      
      )  
      let {data} = response;
      return data;
    } catch (error) {
      
    }
    
  }

  export const editLeaveApplication = async (leaveId, leaveObject)=> {
    try {
      const response = await axiosInstance.patch(`/leaveApplication/${leaveId}`,leaveObject)
      console.log("editLeaveApplicationHere", response)
      return response
    } catch (error) {
      
    }
    
  }

  
  export const updateLeaveApplication = async (id, newLeaveStatus) => {
    try{
      const response = await axiosInstance.patch(`/leaveApplication/${id}`, newLeaveStatus)
        return response
    } catch(error){

    }
  }


 