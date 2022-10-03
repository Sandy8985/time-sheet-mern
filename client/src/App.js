import "./App.css";
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Timesheets from "./Pages/Timesheets/Timesheets";
import ApplyForLeave from "./Pages/ApplyForLeaves/ApplyForLeave";
import Payslips from "./Pages/Payslips/Payslips";
import Home from "./Pages/Home/Home";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Alogin from "./Pages/Alogin/Alogin";

import {useAuthContext} from './hooks/useAuthContext'


function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user? <Home /> : <Navigate to="/login"/>} />
          <Route path="/profile" element={user ? <Profile/> : <Navigate to="/login"/>}/>
          <Route path="/timesheets" element={user ? <Timesheets /> : <Navigate to="/login"/>} />
          <Route path="/applyforleave" element={user ? <ApplyForLeave /> : <Navigate to="/login"/>} />
          <Route path="/payslips" element={user ? <Payslips /> : <Navigate to="/login"/>} />
          <Route path="/register" element={!user ? <Registration /> : <Navigate to="/login"/>} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/profile"/>} />
          <Route path="/alogin" element={!user ? <Alogin /> : <Navigate to="/profile"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
