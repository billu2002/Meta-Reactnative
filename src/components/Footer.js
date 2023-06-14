import React from "react";
import photo from '../icons_assets/footer_lemon.PNG';
import {Box, Heading, Link } from "@chakra-ui/react";
import email from "../icons_assets/icons/email.png";
import address from "../icons_assets/icons/location.png";
import phone from "../icons_assets/icons/phone-call.png";
import ig from "../icons_assets/icons/instagram.png";
import fb from "../icons_assets/icons/facebook.png";
import twt from "../icons_assets/icons/twitter-sign.png";
 
function Footer () {
    return (
        <Box display="flex" width="100%" justifyContent="space-evenly" py="20px" background="#556B2F" color="#EDEFEE" textAlign="center" className="foot">
        <img src={photo} height={"160px"} width={"130px"} style={{position: "relative", top:"25px"}} className="img-hero"/>
        <ul >
            <Heading fontSize="24px" paddingBottom="10px" paddingTop="10px">Doormat Navigation</Heading>
            <li style={{paddingBottom:"5px"}}><a>Home</a></li>
            <li style={{paddingBottom:"5px"}}><a>Menu</a></li>
            <li style={{paddingBottom:"5px"}}><a>Reservations</a></li>
            <li style={{paddingBottom:"5px"}}><a>Order Online</a></li>
            <li style={{paddingBottom:"5px"}}><a>Login</a></li>

        </ul>

        <ul>

            <Heading fontSize="24px" py="10px">Contact</Heading>
            <li style={{paddingBottom:"5px"}}>
                <Link>
                    <img src={address} height="20px" width="20px" style ={{position :"relative",top:"5px"}} alt="adress icon"/>
                    <a style ={{paddingLeft:"5px"}}>Address</a>
                </Link>
                </li>

            <li style={{paddingBottom:"5px"}}>
                <Link>
                    <img src={phone} height="20px" width="20px" style ={{position :"relative",top:"5px"}} alt="phone icon"/>
                    <a style ={{paddingLeft:"5px"}}>Phone Numbers</a>
                </Link>
            </li>
                

            <li style={{paddingBottom:"5px"}}>
                <Link>
                    <img src={email} height="20px" width="20px" style ={{position :"relative",top:"5px"}} alt="email icon"/>
                    <a style ={{paddingLeft:"5px"}}>Email</a>
                </Link>
                </li>
        </ul>

        <ul>

            <Heading fontSize="24px" py="10px">Social Media links</Heading>

                <li style={{paddingBottom:"5px"}}>
                    <Link>
                        <img src={ig} height="20px" width="20px" style ={{position :"relative",top:"5px"}} alt="instagram icon"/>
                        <a style ={{paddingLeft:"5px"}}>Instagram</a>
                    </Link>
                    </li>

                <li style={{paddingBottom:"5px"}}>
                    <Link>
                        <img src={fb} height="20px" width="20px" style ={{position :"relative",top:"5px"}} alt="facebook icon"/>
                        <a style ={{paddingLeft:"5px"}}>Facebook</a>
                    </Link>
                </li>
                    

                <li style={{paddingBottom:"5px"}}>
                    <Link>
                        <img src={twt} height="20px" width="20px" style ={{position :"relative",top:"5px"}} alt="twitter icon"/>
                        <a style ={{paddingLeft:"5px"}}>Twitter</a>
                    </Link>
                </li>

        </ul>

        </Box>
    )
}

export default Footer