import React from "react";
import Button from "./Button";
import { fetchAllUser, register } from "../Service/Auth.service";
import { notify } from "../App";

const Registration = ({
  regUserName,
  setRegUserName,
  regPassword,
  setRegPassword,
  regEmail,
  setRegEmail,
  setRegister,
}) => {

  const handleRegister = async (e) => {
    e.preventDefault()

    let form = e.target
    console.log(form);
    let formData = new FormData(form)
    let formObj = Object.fromEntries(formData.entries())
    console.log(formObj);

    const res = await register(formObj)
    console.log(res);

  //  const res = await fetchAllUser()
  //  console.log(res);


    if (res === "User registration successful") {
      setRegister(true);
      notify(res)
    }else{
      notify(res)
    }
  };



  return (
    <form
    onSubmit={handleRegister}
    >
      <div className="inner-login-div">
        <h3 className="fw-bold">Register with EcoBilling</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label corbon-black"
          >
            First Name
          </label>
          <input
            // value={regUserName}
            // onChange={(e) => setRegUserName(e.target.value)}
            type="text"
            name="firstName"
            className="form-control p-3 form-input"
            placeholder="Please enter user name"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label corbon-black"
          >
            Last Name
          </label>
          <input
            // value={regUserName}
            // onChange={(e) => setRegUserName(e.target.value)}
            type="text"
            name="lastName"
            className="form-control p-3 form-input"
            placeholder="Please enter user name"
          />
        </div>

        
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label  corbon-black"
          >
            Email Address
          </label>
          <input
            // value={regEmail}
            // onChange={(e) => setRegEmail(e.target.value)}
            type="email"
            name="email"
            className="form-control p-3 form-input"
            placeholder="name@example.com"
          />
        </div>


        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label corbon-black"
          >
            Password
          </label>
          <input
            // value={regPassword}
            // onChange={(e) => setRegPassword(e.target.value)}
            type="password"
            name="password"
            className="form-control p-3 form-input"
            placeholder="Please enter password"
          />
        </div>


        <Button 
        title="Register" />

        
<button type="button" onClick={() => setRegister(true)} className="btn-two rounded-2" >Login</button>
      </div>
    </form>
  );
};

export default Registration;
