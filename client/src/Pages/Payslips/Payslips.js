import React from "react";
import Homenav from "../../Components/Homenav/Homenav";
import "./Payslips.css";
import axios from "axios";
import { useEffect,useState } from "react";

const Payslips = () => {
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
      <div className="payslips">
        <div className="left">
          <div className="details">
          <h3>Employee Name : {name}</h3>
          <h3>Employee ID : {empid}</h3>
          </div>
          <div className="months">
            <button>January</button>
            <button>February</button>
            <button>March</button>
            <button>April</button>
            <button>May</button>
            <button>June</button>
            <button>July</button>
            <button>August</button>
            <button>September</button>
            <button>October</button>
            <button>November</button>
            <button>December</button>
          </div>
        </div>
        <div className="img-section">
          <img src="" alt="" />
        </div>

        <button className="download">Download</button>
      </div>
    </div>
  );
};

export default Payslips;
