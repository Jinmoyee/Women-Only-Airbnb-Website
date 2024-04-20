import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CheckInOutCalendar.css";

function CheckInOutCalendar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="check-in-out-calendar">
      <div className="date-picker">
        <label>Check In</label>
        <DatePicker
          selected={startDate} //determine which date is currently selected.
          onChange={handleStartDateChange}
          selectsStart //indicate whether the datepicker selects the start or end of the range.
          startDate={startDate} //establish the range of selectable dates.
          endDate={endDate}
          minDate={new Date()} //check-out datepicker to ensure that the check-out date cannot be before the check-in date.
          placeholderText="Select start date"
          className="date-input"
          wrapperClassName="date_input"
        />
      </div>
      <div className="date-picker">
        <label>Check Out</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Select end date"
          className="date-input"
        />
      </div>
    </div>
  );
}

export default CheckInOutCalendar;
