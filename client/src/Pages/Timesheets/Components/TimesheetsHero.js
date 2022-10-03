import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Timesheets.css";

const TimesheetsHero = () => {
  const [name, setName] = useState("");
  const [empid, setEmpid] = useState("");
  // get req
  const getprofile = async () => {
    axios.get("http://localhost:4000/api/employee").then((res) => {
      const Data = res.data;
      // console.log(Data)
      setName(Data[0].name);
      setEmpid(Data[0].emp_id);
  });
};
useEffect(() => {
  getprofile();
});
  //calendar function
  const [value, onChange] = useState(new Date());
  return (
    <div className="timesheets">
      <div className="ts1">
        <div className="details">
          <h3>Employee Name : {name}</h3>
          <h3>Employee ID : {empid}</h3>
        </div>
        <div className="calendar">
          <Calendar onChange={onChange} value={value} />
        </div>
        <Link>PROFILE SECTION</Link>
      </div>

      <div className="ts2">
        <h2>WEEK 1</h2>
        <div className="grid">
        <div className="weeks">
          <h4>Monday</h4>
          <h4>Tuesday</h4>
          <h4>Wednesday</h4>
          <h4>Thursday</h4>
          <h4>Friday</h4>
          <h4>Saturday</h4>
          <h4>Sunday</h4>
        </div>
        <div className="checkboxe">
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
        <div className="ip">
          <input type="tel" />
          <input type="tel" />
          <input type="tel" />
          <input type="tel" />
          <input type="tel" />
          <input type="tel" />
          <input type="tel" />
        </div>
        </div>
        <button>submit</button>
      </div>
      <div className="ts3">
        <h2>WEEK 3</h2>
        <button>On next Friday</button>
      </div>
      <div className="ts4">
      <button>Week 2</button>
      <button>Week 3</button>
      <button>Week 4</button>
      </div>
    </div>
  );
};

export default TimesheetsHero;
