import React from "react";
import DatePicker from "react-horizontal-datepicker";
import "./date.styles.scss";
const selectedDay = val => {
  console.log(val);
};
const DateComponents = () => {
  return (
    <DatePicker
      getSelectedDay={selectedDay}
      shouldScroll={true}
      endDate={100}
      selectDate={new Date("2020-01-30")}
    />
  );
};

export default DateComponents;
