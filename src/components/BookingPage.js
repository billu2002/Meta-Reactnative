import React from 'react';
import BookingForm from './BookingForm';
import "./booking.css";
import { fetchAPI, submitAPI } from './Api';


function BookingPage() {

  const [date, setDate] = React.useState('');
  const [diners, setDiners] = React.useState(1);
  const [time, setTime] = React.useState('');
  const [occ, setOcc] = React.useState('');

  const day = new Date();

  const UpdateTime = (state, action) => {
    if (action.type) {
      return fetchAPI(new Date(action.type));
    } else {
      return fetchAPI(day)
    }
  };

  const InitializeTime = (day) => {

      const response = fetchAPI(day);

      return response;

  };

  const [availableTime, dispatch] = React.useReducer(UpdateTime, InitializeTime(day));

  const submitForm = (data) => {
    return submitAPI(data); 
  };

  return (
    <>
        <BookingForm date={date} setDate={setDate}
                    diners = {diners}  setDiners = {setDiners}
                    time = {time}  setTime = {setTime}
                    occ = {occ}  setOcc = {setOcc}
                    availableTime = {availableTime} dispatch = {dispatch}
                    submitForm = {submitForm}

        />
    </>
  )
}

export default BookingPage
