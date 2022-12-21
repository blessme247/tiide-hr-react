
import axiosInstance from "../AxiosConfig/axiosConfig";


const localToken = JSON.parse(localStorage.getItem("token"));


    const fetchLeavePolicies = async ( setLeavePolicies, setIsLoading) => {
    try { 
      const response = await axiosInstance.get("/leavePolicy", 
     
      
      )  
  
      setIsLoading(false)
      let {data} = response;
      setLeavePolicies(data)

      return response;
    } catch (error) {
      
    }
    
  }

  const editLeavePolicy = async (leaveId, leaveObject)=> {
    try {
      const response = await axiosInstance.patch(`/leavePolicy/${leaveId}`,leaveObject)
      return response
    } catch (error) {
      
    }
    
  }

  const deleteLeavePolicy = async (leaveId) => {
    try {
      const response = await axiosInstance.delete(`/leavePolicy/${leaveId}`)

      return response
    } catch (error) {
      
    }
  }

  const LeaveManagementServices = {
    fetchLeavePolicies,
    editLeavePolicy, 
    deleteLeavePolicy
  };
  
  export default LeaveManagementServices;

//   export default fetchLeavePolicies;