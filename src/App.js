import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import BookingPage from "./components/BookingPage";
import './index.css';
import './components/booking.css'
import ConfirmedBooking from "./components/ConfirmedBooking";


function App() {
  return (
    
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="booking-page" element={<BookingPage />} />
      <Route path="succesfully-submitted" element={<ConfirmedBooking />} />
    </Routes>
  </>

  );
}

export default App;

