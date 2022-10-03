import React from "react";
import "../Homenav/Homenav.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useAdminLogout } from "../../hooks/useAdminLogout";

const Homenav = () => {
  const { logout } = useLogout();
  const { alogout } = useAdminLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    alogout();
  };
  return (
    <div>
      {!user && (
        <div className="nav">
          <h1>INKPROG</h1>
          <h2>TIMESHEET AND ATTENDANCE MANAGMENT SOFTWARE</h2>
        </div>
      )}

      {user && (
          <div className="navbar">
            <h1>INKPROG</h1>
            {/* <span>{user.email}</span> */}
            <div className="menu">
              <Link to="/profile">Profile</Link>
              <Link to="/timesheets">Timesheets</Link>
              <Link to="/applyforleave">Apply for leave</Link>
              <Link to="/payslips">Payslips</Link>
              <button onClick={handleClick}>signout</button>
            </div>
          </div>
      )}
    </div>
  );
};

export default Homenav;
