import React from "react";
import img1 from  "../icons_assets/Mario and Adrian A.jpg"
import img2 from  "../icons_assets/restaurant chef B.jpg"
import { Box, VStack, Heading } from "@chakra-ui/react";
import '../index.css';

function Description () {
    return (

    <Box  className="desc" 
        color="#333333"
        display="flex"
        gap="15%"
        flexDirection="row"
        justifyContent="center"
        alignItems={"center"}
        paddingTop="20px"
        paddingBottom="80px"
     >

                <VStack 

                display="flex"
                alignItems={"first-baseline"}
                width={"350px"}
                
                top="10px"
                // marginRight="30%"
              
                >
                    <Heading fontFamily='Markazi Text'
                    fontSize="54px"
                    color="#F4CE14"
                    >
                        Little Limon </Heading>

                    <Heading my="0px"
                    
                    fontFamily='Markazi Text'
                    fontSize="40px">
                        Chicago</Heading>

                    <p style={{marginBottom:"0px"}}>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>

                </VStack>

                <Box position="relative"  right="0">
                    <img src={img2} height={"200px"} width={"200px"} style={{top:"80px", right:"-80px", position: "relative"}} className="img-disc-two" alt="photo of a chef in little lemon restaurant"/>
                    <img src={img1} height={"200px"} width={"200px"} style={{top:"0px"}} className="img-disc" alt="photo of two chefs in little lemon restaurant"/>
                </Box>
 


    </Box>
    );
};

export default Description;