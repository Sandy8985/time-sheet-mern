import React from "react";
import { Link } from "react-router-dom";
import "../Registration.css";
import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";

const RegistrationHero = () => {
  const [name, setName] = useState("");
  const [emp_id, setEmpid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(name, empid, email, password)

    await signup(name, emp_id, email, password);
    setName("");
    setEmpid("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="registrationr">
      <>
        <div className="links">
          <Link to="/register" className="eregister">
            EMPLOYEE REGISTRATION
          </Link>
          <Link to="/login" className="elogin">
            EMPLOYEE LOGIN
          </Link>
        </div>

        <form className="registerform" onSubmit={handleSubmit}>
          <h2>REGISTRATION FORM</h2>

          <input
            type="text"
            placeholder="Frist Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Employee ID"
            onChange={(e) => setEmpid(e.target.value)}
            value={emp_id}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <p>
            Already a member? <Link to="/login">Login</Link>
          </p>
          <button>Register</button>
          {error && <p>{error}</p>}
        </form>
      </>
    </div>
  );
};

export default RegistrationHero;
