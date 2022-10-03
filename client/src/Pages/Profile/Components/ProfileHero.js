import "../Profile.css";
import axios from "axios";
import React, { useEffect } from "react";
import img from "../../../Asserts/sample.png";
import Calendar from "react-calendar";
import { useState } from "react";
import { Link } from "react-router-dom"; 

const ProfileHero = () => {
  //calendar function
  const [value, onChange] = useState(new Date());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [empid, setEmpid] = useState("");
  const [contact, setContact] = useState("");
  const [dept, setDept] = useState("");
  const [year, setYear] = useState("");
  // const [role,setRole] = useState("")
  // const [dob,setDob] = useState("")
  // const [address,setAddress] = useState("")
  // const [location,setLocation] = useState("")
  // const [econtsct,setEcontact] =useState("")

  // get req
  const getprofile = async () => {
    axios.get("http://localhost:4000/api/employee").then((res) => {
      const Data = res.data;
      // console.log(Data)
      setName(Data[0].name);
      setEmail(Data[0].email);
      setEmpid(Data[0].emp_id);
      setContact(Data[0].phone);
      setDept(Data[0].dept);
      setYear(Data[0].year);
      // setRole(Data[0].role);
      // setDob(Data[0].dob);
    });
  };
  useEffect(() => {
    getprofile();
  });

  //image upload
  const [image,setImage]=useState('')
  const uploadImage= ()=>{
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","hxmjzxec")

    axios.post("https://api.cloudinary.com/v1_1/dytg2qogw/image/upload",formData)
    .then((res)=>{
      console.log(res)
    })
  }




  return (
    <div>
      <div className="auth-details">
        <div className="top">
          <div className="top-left">
            <div>
              <img src={img} alt="" />
              <input type="file"
              onChange={(e)=>{setImage(e.target.files[0])}}/>
              <button onClick={uploadImage()}>Edit</button>
            </div>

            <div className="details">
              <pre>
                <p>Full Name           :    {name} </p>
                <p>Email                   :    {email} </p>
                <p>Employee ID      :    {empid} </p>
                <form>
                  <p>Contact              :    {contact }</p>
                  <p>Department      :    {dept}</p>
                  <p>Year                    :    {year}</p>
                </form>
              </pre>
            </div>
          </div>

          <div className="top-right">
            <div className="basic-info">
              <h1>BASIC INFORMATION</h1>
              <button>Edit</button>
            </div>
            <div>
              <form>
                <div className="form-inside">
                {/*role ? <p>{role}</p> :*/ <input type="text" name="role" placeholder="Role" />}
                  {/*dob ?<p> {dob}</p> :*/<input type="text" name="dob" placeholder="Date of Birth" />}
                </div>



                <div className="form-inside">
                  <input type="text" name="dept" placeholder="Department" />
                  <input
                    type="text"
                    name="address"
                    placeholder="Present Address"
                  />
                </div>
                <div className="form-inside">
                  <input type="text" name="location" placeholder="Location" />
                  <input
                    type="tel"
                    name="econtact"
                    placeholder="Emergency Contact No"
                  />
                </div>
                <div>
                  <button>save</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="leaves">
            <div className="count">
              <p>01/10</p>
            </div>
            <div className="leaves-taken">
              <h1>Leaves Taken</h1>
              <p>Leave taken on 25 Jan 2022</p>
              <p>Leave taken on 26 Jan 2022</p>
              <p>Leave taken on 27 Jan 2022</p>
            </div>
          </div>
          <div className="calendar">
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className="weeks">
            <Link>TIMESHEET 1</Link>
            <Link>TIMESHEET 2</Link>
            <Link>TIMESHEET 3</Link>
            <Link>TIMESHEET 4</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
