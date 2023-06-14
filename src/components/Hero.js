import React from "react";
import hero from "../icons_assets/restauranfood.jpg"
import { Box, VStack, Button, Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import '../index.css';

function Hero() {
    return (

    <Box height={"380px"}  backgroundColor="#495E57" color="#EDEFEE"
        display="flex"
        justifyContent={"space-evenly"} 
        alignItems={"center"}
     >

            <nav>
                <VStack 
                className="hero"
                display="flex"
                alignItems={"first-baseline"}
                width={"350px"}
                height={"300px"}
                
                my="0px"
                py="0px"
       
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

                    <p style={{marginBottom:"10px"}}>We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
                    <Link to='/booking-page'>
                        <Button background="#F4CE14" 
                        width="160px" height = "40px" 
                        marginTop="10px" 
                        fontFamily="karla" fontSize="16px" fontWeight="600"
                        border="1px solid white"
                        borderRadius="15px"
                        shadow="none">Reserve a Table</Button>
                    </Link>
                </VStack>
            </nav>

        <nav className="img-hero">
                <Box position="relative" paddingTop="100px">
                    <img src={hero} height={"400px"} width={"340px"} alt="photo of one of specials of menu"/>
                </Box>
         </nav>


    </Box>
    );
};

export default Hero;

