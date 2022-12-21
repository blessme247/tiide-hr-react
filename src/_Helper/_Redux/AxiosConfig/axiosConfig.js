// axios default base url
// You must always put REACT_APP first before any other variable name
import axios from "axios";
import { getToken } from "../Services/globalUtil";

const access = getToken();


// instance of axios
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    Accepted: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${access?.access}`,
  },
});

export default axiosInstance;
