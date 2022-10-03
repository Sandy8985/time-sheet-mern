import React from "react";
import Calendar from "react-calendar";
import Homenav from "../../Components/Homenav/Homenav";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import './ApplyForLeave.css'

const ApplyForLeave = () => {
  //calendar function
  const [value, onChange] = useState(new Date());

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
  return (
    <div>
      <Homenav />
      <div className="aflHero">
        <div className="afl1">
          <div className="details">
          <h3>Employee Name : {name}</h3>
          <h3>Employee ID : {empid}</h3>
          </div>
          <div className="calendar">
            <Calendar onChange={onChange} value={value} />
          </div>
          <Link>PROFILE SECTION</Link>
        </div>

        <div className="afl2">
          <h2>LEAVE APPLICATION</h2>
          <div className="leaves">
            <form>
            <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
              <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
              <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
              <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
              <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
              <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
              <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
              <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
              <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
              <div className="lfreason">
                <input className="date" type="date"/>
                <input className="reason" type="text" placeholder="Reason for Leave" />
                <button>Apply</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApplyForLeave;
