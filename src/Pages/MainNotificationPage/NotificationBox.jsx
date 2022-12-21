import React from 'react'
import {
  Flex,
  Card,
  Heading,
  Box,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { FaUserCircle } from 'react-icons/fa';
import styles from './nots.module.css'

const NotificationBox = () => {
  return (
    <Card w="100%" h="fit-content" pl="4">
      <Flex alignItems="center">
        <FaUserCircle className={styles.FaUser} />
        <Box>
          <CardBody>
            <Heading size="xs">I expect a side by side stacking</Heading>
            <Text>I expect a side by side stacking</Text>
          </CardBody>
        </Box>
      </Flex>
    </Card>
  )
}

export default NotificationBox


