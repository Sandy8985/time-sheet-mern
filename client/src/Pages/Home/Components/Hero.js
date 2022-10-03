import React from "react";
import { Link } from "react-router-dom";
import Heroimg from "../../../Asserts/Heroimg.svg";
import "../Home.css";

const Hero = () => {
  return (
    <div className="Herosec">
      <div className="registration">
        <Link to="/register" className="eregister">
          EMPLOYEE REGISTRATION
        </Link>
        <Link to="/login" className="elogin">
          EMPLOYEE LOGIN
        </Link>

        <Link to="/alogin" className="elogin">
          ADMIN LOGIN
        </Link>
      </div>

      <div>
        <img src={Heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
