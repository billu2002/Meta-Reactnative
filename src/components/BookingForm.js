import React from 'react';
import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import "./booking.css";
import { useNavigate } from 'react-router-dom';

function BookingForm(props) {

    const navigate = useNavigate();


 return (
        <Box  className="booking" height="100vh" width="100%" display="flex"  alignItems="center" justifyContent="space-evenly"  textAlign="center"  flexDirection="row"  color="white" fontWeight="bold">
            <VStack maxWidth="300px" alignItems="center"  spacing="20px" >
                
                <Heading fontSize="clamp(34px,8vw,54px)" >
                    Reserve a table
                </Heading>
                <Text fontSize="clamp(18px,8vw,24px)" maxWidth="60ch"  >
                    Have a wonderful time dining at our restaurant with your friends and family
                </Text>
            </VStack>
            
        <form className='booking-form' style={{display: "flex", flexDirection:"column", maxWidth: "300px", gap: "10px", justifyContent:"center"}}
                onSubmit = {e => (props.submitForm([props.date, props.time, props.diners, props.occ]) && props.date.length > 1 && e) ? navigate('/succesfully-submitted') : null}>
            <Heading>
                <label htmlFor="res-date">Choose date</label>
            </Heading>
            <input type="date" id="res-date" style={{width:"220px", height:"40px", padding:"0 5px", fontFamily:"Karla", fontSize:'16px', borderRadius:"6px", border:"solid"}} value={props.date}  onChange={(e) => {props.setDate(e.target.value)
                                                                                                                                                                                                                    props.dispatch({type:props.date})}} required/>
                <Heading>
                <label htmlFor="res-time" >Choose time</label>
                    </Heading>
                <select id="res-time " value={props.time} onChange = {(e) => props.setTime(e.target.value)} style={{width:"220px", height:"40px", padding:"0 5px", fontFamily:"Karla", fontSize:'16px', borderRadius:"6px", border:"solid"}}>
                    {props.availableTime.map((elt, ind) => {

                        return (
                                <option key={ind}>{elt}</option>
                        )

                    })}
                    
                </select>
                <Heading >
                    <label htmlFor="guests">Number of guests</label>
                </Heading>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={props.diners} onChange = {(e) => props.setDiners(e.target.value)} style={{width:"220px", height:"40px", padding:"0 5px", fontFamily:"Karla", fontSize:'16px', borderRadius:"6px", border:"solid"}}/>
                <Heading>
                    <label htmlFor="occasion">Occasion</label>
                </Heading>
                <select id="occasion" value={props.occ} onChange = {(e) => props.setOcc(e.target.value)} style={{width:"220px", height:"40px", padding:"0 5px", fontFamily:"Karla", fontSize:'16px', borderRadius:"6px" ,border:"solid"}}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <Box paddingTop="20px" paddingBottom="10px">
                    <button  type='submit'  style={{width:"220px", height:"40px", padding:"0 5px", fontFamily:"Karla", fontSize:'16px', background:"#F4CE14", borderRadius:"16px", fontWeight:"bold", border:"solid", cursor:"pointer"}} 
                    disabled={(props.date.length >1) ? false: true}>Make Your reservation</button>
                </Box>
        </form>
        
        </Box>
  )
}

export default BookingForm;