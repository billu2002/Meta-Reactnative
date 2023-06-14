import React from "react";
import { Box , VStack, Heading, Text, Link } from "@chakra-ui/react";

const Card = (props) => {
    return (
    <Box width="250px" height="500px" background="#dadedf" borderRadius="20px" marginRight="5%" marginBottom="40px" className="scale-card">
        <VStack justifyContent={"center"} alignItems={"left"}>
            <img  src={props.img} alt="photo of a special " height={"250px"} width={"250px"}/>
            <Box mx="auto" px="15px" paddingBottom="10px" height="200px">
                <Heading paddingBottom="10px" fontSize="30px">
                    {props.name}
                </Heading>
                <Heading paddingBottom="10px" fontSize="24px">
                    {props.price}
                </Heading>
                <Text maxWidth="65ch" fontSize="16px">
                    {props.description}
                </Text>
            </Box>
            <Link paddingLeft="15px" fontFamily="karla" fontSize="18px" fontWeight="bold" textAlign="left" >
                {props.order}
            </Link>
        </VStack>

    </Box>
    )
}

export default Card;