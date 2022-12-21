import axiosInstance from "../../AxiosConfig/axiosConfig";
import { getRefreshToken } from "../../Services/getRefreshToken";

const refresh = getRefreshToken();

 const logOut = async () => {
    
  const payload = {
    refreshToken: refresh?.refresh
  }

    try { 
      const response = await axiosInstance.post('/auth/logout', payload)  
      console.log(response)
      return response;
    } catch (error) {
      
    }

    
  }

  export const getCurrentUser = async ()=> {
    try { 
      const response = await axiosInstance.get('/auth/current-user' )  

      const user = response.data;
      

      // console.log(business)
      
      return user;
    } catch (error) {
      
    }
  }

  const userServices = {
    logOut, getCurrentUser
  };
  
  export default userServices;