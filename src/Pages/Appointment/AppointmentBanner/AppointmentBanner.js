import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import bg from "../../../assets/images/bg.png";
//import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className="my-6"
      style={{ background: `url(${bg})`, backgroundSize: "auto" }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
            alt="chair"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
