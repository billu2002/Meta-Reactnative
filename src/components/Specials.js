import React from "react";
import { Box, HStack, VStack, Button, Heading } from "@chakra-ui/react";
import '../index.css';
import Card from "./SpecialsCard";
import { specialsData } from "./SpecialsData";





const Specials = () => {

    return (
        <Box marginTop="90px" width="100%"  mx="auto" >
            <VStack>
                <HStack display="flex"
                        justifyContent={"space-evenly"} 
                        alignItems={"center"}
                        width="100%"
                        paddingBottom="40px"
                >
                    <Heading fontFamily="Markazi Text" fontSize="54px" >
                        Specials
                    </Heading>
                    <Button background="#F4CE14" 
                    width="160px" height = "40px" 
                    marginTop="10px" 
                    fontFamily="Karla" fontSize="16px" fontWeight="600"
                    border="1px solid white"
                    borderRadius="15px"
                    cursor="pointer">
                        Online menu
                    </Button>
                </HStack>
                <Box className="card-special" display="flex" justifyContent="center" alignItems="center" paddingBottom="40px">
                    {specialsData.map((elt, ind) => {

                        return (
                        <Card key = {ind} 
                        img = {elt.img} 
                        name = {elt.name} 
                        price = {elt.price}
                        description = {elt.description}
                        order = {elt.order}
                        />
                        )
                        })}
                </Box>
            </VStack>
        </Box>
    )

}

export default Specials;