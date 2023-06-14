import React from "react";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Counter = () => {
    const [cnt, setCnt] = useState(0);

    return (
        <Box my = "50px" py="50px" display="flex"  flexDirection="column" alignItems="center">
            <Heading>{cnt}</Heading>
            <HStack>
                <Button onClick={(e) => (e? setCnt(cnt+1): null)} height="50px" width="80px">+</Button>
                <Button onClick={(e) => (e? setCnt(cnt-1): null)} height="50px" width="80px">-</Button>
                <Button onClick={(e) => (e? setCnt(0): null)} height="50px" width="80px">Reset</Button>
                
            </HStack>
        </Box>
    )

};

export default Counter ;