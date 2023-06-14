import React from "react";
import logo from '../icons_assets/Logo_lm.png';
import { Box, Link } from "@chakra-ui/react";
import '../index.css';
import { FaBars, FaTimes } from "react-icons/fa";


// const menu = document.querySelector(".menu");
// const [show, setShow] = React.useState(false);

// function openMenu() {
//   if (show) {
//     menu.style.display = "none";
//     setShow(false);

//   } else {
//     menu.style.display = "block";
//     setShow(true);

//   }
// }


function Navigation () {
    let width = window.innerWidth;

    const [click, setClick] = React.useState(false);
    const handleClick = () => {(window.innerWidth < 1040) ? setClick(!click): setClick(false)};

    return (
        

            <Box  className="header" >
                <Box>
                    <Link href='logo' >
                        <img src={logo} height={"90px"} width={"130px"} alt="Restaurant logo"/>
                    </Link>
                </Box>

                <ul className={(click && window.innerWidth <1040) ? "list-active" : "list"}>

                    <li><Link href="#" >Home</Link></li>
                    <li><Link href="#" >About</Link></li>
                    <li><Link href="#" >Menu</Link></li>
                    <li><Link href="#" >Reservations</Link></li>
                    <li><Link href="#" >Order Online</Link></li>
                    <li><Link href="#" >Login</Link></li>

                </ul>


            <div className="hamburger" onClick={handleClick} >
                    {click ? (
                    <FaTimes size={20} style={{ color: "#333333" }} />
                    ) : (
                    <FaBars size={20} style={{ color: "#333333" }} />
                    )}
            </div>
        
        </Box>

    );
}

export default Navigation