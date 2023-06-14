import React from 'react';
import { Box, Heading, VStack, Text, HStack , Button} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import "./booking.css";

function ConfirmedBooking() {


  return (
    <Box  background="#495E57" height="100vh" width="100%" display="flex"  alignItems="center" justifyContent="center"  textAlign="center"  flexDirection="row"  color="white" fontWeight="bold">
            <VStack>
                <Heading fontSize="clamp(34px,8vw,54px)" >
                    Your reservation was succesfully submitted
                </Heading>
                <Text fontSize="clamp(18px,8vw,24px)" maxWidth="60ch"  >
                    Thanks for your reservation, washing you a good time at little lemon restaurant
                </Text>
                <HStack spacing="50px">
                  <Link to='/booking-page'>
                          <Button background="#F4CE14" 
                          width="200px" height = "40px" 
                          marginTop="10px" 
                          fontFamily="karla" fontSize="16px" fontWeight="600"
                          border="1px solid white"
                          borderRadius="15px"
                          shadow="none">Back to reservation page</Button>
                  </Link>
                  <Link to='/'>
                          <Button background="#F4CE14" 
                          width="200px" height = "40px" 
                          marginTop="10px" 
                          fontFamily="karla" fontSize="16px" fontWeight="600"
                          border="1px solid white"
                          borderRadius="15px"
                          shadow="none">Back to home page</Button>
                  </Link>
                </HStack>
            </VStack>
    </Box>
  )};

export default ConfirmedBooking;