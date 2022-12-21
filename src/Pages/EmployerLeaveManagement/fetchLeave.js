import axiosInstance from "../../_Helper/_Redux/AxiosConfig/axiosConfig";

// const [leavePolicies, setLeavePolicies] = useState([]);

  const fetchLeavePolicies = async (accessToken) => {
    try { 
      const response = await axiosInstance.get("/leavePolicy", 
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
      
      )  
      let {data} = response;
      return data;
    } catch (error) {
      
    }

    
  }

  export default fetchLeavePolicies;