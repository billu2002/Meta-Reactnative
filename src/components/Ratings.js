import React from "react";
import { Box, HStack, VStack, Heading, Text } from "@chakra-ui/react";
import '../index.css';
import pers1 from '../icons_assets/ratings/per1.jpg';
import pers2 from '../icons_assets/ratings/pers2.jpg';
import pers3 from '../icons_assets/ratings/pers3.jpg';
import pers4 from '../icons_assets/ratings/per4.jpg';
import star from '../icons_assets/ratings/star.png';

const Ratings = () => {
    return (
        <Box  backgroundColor="#495E57" color="#333333" display= "flex" flexDirection="column" >
            <Heading color="#F4CE14" py = "15px" fontSize="54px" fontFamily="Markazi Text" margin="0 auto">Top Ratings</Heading>
            <Box className = "ratings" margin="40px auto" display="grid" gridAutoFlow="column"  justifyContent="center" alignItems="center">

                <Box background="#EDEFEE" width="180px" borderRadius="16px" marginRight="20px" height="240px" className = "rat-card">
                    <VStack py="20px" margin="0 auto">
                        <img src={pers1} alt="person 1 vote" height={"80px"} width={"80px"} style={{borderRadius:"40px"}} />
                        <Heading fontSize="24px" fontFamily="Markazi Text" >Jh. Paul</Heading>
                        <HStack>
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                        </HStack>
                        <Text px="10px" textAlign="center" paddingTop="8px" fontSize="14px">"You must try the greek salad"</Text>
                    </VStack>
                </Box>

                <Box background="#EDEFEE" width="180px" borderRadius="16px" marginRight="20px" height="240px" className = "rat-card">
                    <VStack py="20px" >
                        <img src={pers3} alt="person 1 vote" height={"80px"} width={"80px"} style={{borderRadius:"40px"}} />
                        <Heading fontSize="24px" fontFamily="Markazi Text">Rh. Maria</Heading>
                        <HStack>
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                        </HStack>
                        <Text px="10px" textAlign="center" paddingTop="8px" fontSize="14px">"Great Chef, really enjoyed the meal there"</Text>

                    </VStack>
                </Box>
                <Box background="#EDEFEE" width="180px" borderRadius="16px"  marginRight="20px" height="240px" className = "rat-card">
                    <VStack py="20px">
                        <img src={pers2} alt="person 1 vote" height={"80px"} width={"80px"} style={{borderRadius:"40px"}} />
                        <Heading fontSize="24px" fontFamily="Markazi Text">Mg. Josh</Heading>
                        <HStack>
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                        </HStack>
                        <Text px="10px" textAlign="center" paddingTop="8px" fontSize="14px">"love Bruschetta"</Text>

                    </VStack>
                </Box>
                <Box className = "rat-card" background="#EDEFEE" width="180px" borderRadius="16px" marginRight="20px" height="240px" >
                    <VStack py="20px" margin="0 auto">
                        <img src={pers4} alt="person 1 vote" height={"80px"} width={"80px"} style={{borderRadius:"40px"}} />
                        <Heading fontSize="24px" fontFamily="Markazi Text" >Fh. Penny</Heading>
                        <HStack>
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                            <img src={star} alt="star icon" height={"15px"} width={"15px"} />
                        </HStack>
                        <Text px="10px" textAlign="center" paddingTop="8px" fontSize="14px">"Great place for special occasions"</Text>

                    </VStack>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Ratings;