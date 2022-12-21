import React from 'react'
import SideNav from "../../Components/Dashboard/SideNav/SideNav";
import {
  Flex,
  Stack,
  SimpleGrid,
  Heading,
  Box,
} from "@chakra-ui/react";

import NotificationBox from './NotificationBox';

const SubNotification = () => {
  return (
    <div>
      <Flex>
        <SideNav />
        <Box w="100%" pt="4">
          <Heading color="#000080" my="4">Notification</Heading>
          <SimpleGrid spacing={4} w="100%">
            <Stack spacing="2">
              <NotificationBox />
              <NotificationBox />
              <NotificationBox />
            </Stack>
          </SimpleGrid>
        </Box>
      </Flex>
    </div>
  )
}

export default SubNotification

