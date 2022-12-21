import axiosInstance from "../../AxiosConfig/axiosConfig";



 export const fetchUserAppliedLeaves = async (access) => {
    try { 
      const response = await axiosInstance.get("/leaveApplication/user" )  
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

 


 