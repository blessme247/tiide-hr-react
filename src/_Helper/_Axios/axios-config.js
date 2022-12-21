// axios default base url
import axios from "axios";


// instance of axios
// const URL = `https://tiide-production.up.railway.app/v1/`
const localToken = JSON.parse(localStorage.getItem("token")) || [];
// const altLocalToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2OTkwNDE2MCwiZXhwIjoxNjcxNzA0MTYwLCJ0eXBlIjoiYWNjZXNzIn0.cWW4721xPWIjHskQvDLkeqjEQckf2_x_F5c7Kym1UQM"

console.log("from axios config ", localToken)
const axiosInstance = axios.create({
  baseURL: `https://tiide-production.up.railway.app/v1/`,
  headers: {
    Accepted: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localToken}`,
    // Authorization: `Bearer ${localToken ? localToken[0].access : altLocalToken}`,
    Authorization: `Bearer ${localToken[0]?.access}`,
  },
});

export default axiosInstance;