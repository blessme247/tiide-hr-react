import axiosInstance from "../../../_Axios/axios-config"

const getAllNotifications = async () => {
  try {
    const res = await axiosInstance.get("/notifications")
    // console.log("serv", res.data)
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

const NotificationServices = {
  getAllNotifications,
};

export default NotificationServices;