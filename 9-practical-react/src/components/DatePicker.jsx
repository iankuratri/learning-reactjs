import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      filterDate={(date) => date.getDay() !== 6 && date.getDate() !== 0}
      isClearable
    />
  );
};
