import React from 'react'
import stylez from "./popup.module.css"

import { Formik, Field } from "formik";
import {
  // Box,
  Button,
  // Checkbox,
  // Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  // VStack,
  // HStack,
  // Center,
  Textarea,
  Box,
  // ModalContent,
  // ModalCloseButton,
} from "@chakra-ui/react";
import { FaTimes } from 'react-icons/fa';
import levelServices from '../../_Helper/_Redux/redux/LevelManagement/LevelMgt.services';
import { useDispatch } from 'react-redux';
import { loadLevels } from '../../_Helper/_Redux/redux/LevelManagement/LevelMgt.action';

const LevelPreview = ({ levelToEdit, setEditMode, idToEdit }) => {
  const { title, description, salary } = levelToEdit;
  const dispatch = useDispatch();

  return (
    <div className={stylez.edit}>
      <Box bg="white" p="2rem" rounded="md" align="center" justify="center">
        <FaTimes className={stylez.editclose} onClick={() => setEditMode(false)} />
        <Formik
          initialValues={{
            title: title,
            salary: salary,
            desc: description,
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            // alert(JSON.stringify(values, null, 2));
            levelServices.editLevel(values, idToEdit).then((res) => {
              levelServices.getAllLevels().then((res) => {
                console.log("get all", res)
                dispatch(loadLevels(res))
              })
            });
            setEditMode(false);
            resetForm();
            // console.log("level previews", values)
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <Box align="flex-start" width="90%">
                {/* <HStack> */}
                <FormControl w="100%" isInvalid={!!errors.title && touched.title}>
                  <FormLabel htmlFor="title">Role Title</FormLabel>
                  <Field
                    w="100%"
                    as={Input}
                    id="title"
                    name="title"
                    type="text"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 2) {
                        error = "title too short...!";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage color="red" fontSize="xs">{errors.title}</FormErrorMessage>
                </FormControl>
                <FormControl w="100%" isInvalid={!!errors.salary && touched.salary}>
                  <FormLabel htmlFor="salary">Salary</FormLabel>
                  <Field
                    w="100%"
                    as={Input}
                    id="salary"
                    name="salary"
                    type="number"
                    variant="filled"
                    validate={(value) => {
                      let error;
                      if (value < 13500) {
                        error = "Kindly review payment";
                      }
                      return error;
                    }}
                  />
                  {/* <FormErrorMessage color="red" fontSize="xs">{errors.salary}</FormErrorMessage> */}
                </FormControl>

                {/* </HStack> */}
                <FormControl w="100%">
                  <FormLabel>Text Area</FormLabel>
                  <Field
                    as={Textarea}
                    resize="none"
                    id="desc"
                    name="desc"
                    variant="filled"
                    w="100%"
                    h="200px"
                    p="1rem"
                    placeholder="this is a textarea..."
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full" className="primary-button">
                  Login
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}



export default LevelPreview