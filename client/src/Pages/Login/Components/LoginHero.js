import React from "react";
import { Link } from "react-router-dom";
import "../Login.css";
import { useState } from "react";
import { useLogin } from "../../../hooks/useLogin";

const LoginHero = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login,error} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    setEmail('')
    setPassword('')
  };
  return (
    <div className="login">
        <>
        <div className="links">
        <Link to="/register" className="eregister">
          EMPLOYEE REGISTRATION
        </Link>
        <Link to="/login" className="elogin">
          EMPLOYEE LOGIN
        </Link>
      </div>

      <form className="loginform" onSubmit={handleSubmit}>
        <h2>Employee Login</h2>

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
          Doesn't a member? <Link to="/register">Register</Link>
        </p>
        <button>Login</button>
        {error && <p>{error}</p>}
      </form></>
    </div>
  );
};

export default LoginHero;
