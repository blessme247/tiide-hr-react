import React from "react";
import TopBar from "../../Components/Dashboard/TopBar/TopBar";
import SubNotification from "./SubNotification";
import { ChakraProvider } from '@chakra-ui/react'





const NotificationPage = () => {
  
  return (
    <div>
        
        <TopBar/>
        <ChakraProvider>
        <SubNotification/>
        </ChakraProvider>
    


    </div>
  );
};

export default NotificationPage;
