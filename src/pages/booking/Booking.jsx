import React from "react";
import CheckInOutCalendar from "../../components/calender/CheckInOutCalendar";
import "./booking.css";
import AboutUser from "../../components/aboutUser/AboutUser";
import Destination from "../../components/destination/Destination";

export default function Booking() {
  return (
    <div className="booking-container">
      <CheckInOutCalendar />
      <Destination />
      <AboutUser />
    </div>
  );
}
