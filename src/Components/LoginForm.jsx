import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { login } from "../Service/Auth.service";
import { notify } from "../App";

const LoginForm = ({
  userName,
  setUserName,
  password,
  setPassword,
  regUserName,
  regPassword,
  setRegister,
}) => {
  const navigate = useNavigate();
  const [isRemember, setIsRemember] = useState(false);

  // Save isRemember value to local storage when it changes
  useEffect(() => {
    localStorage.setItem("isLoginRemember", isRemember);
  }, [isRemember]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = e.target;
    console.log(form);
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    console.log(formObj);

    const res = await login(formObj);
    console.log(res);

    if (res === "Invalid Credentials") {
      notify(res, "error");
      // setRegister(false)
    } else {
      if (isRemember) {
        localStorage.setItem("email", formObj.email);
        localStorage.setItem("password", formObj.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
      navigate("/home");
      notify(res);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inner-login-div">
        <h3 className="fw-bold">EcoBilling Login</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label corbon-black"
          >
            User Name
          </label>
          <input
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="email"
            className="form-control p-3 form-input"
            placeholder="Please enter user name"
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
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="form-control p-3 form-input"
            placeholder="Please enter password"
          />
        </div>

        <div className="chekbox">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              onChange={() => setIsRemember(!isRemember)}
              id="flexCheckChecked"
              checked={isRemember}
            />
            <label className="form-check-label fs-6" htmlFor="flexCheckChecked">
              Remember me
            </label>
          </div>

          <span className="fs-6">Forgot Passowrd ?</span>
        </div>

        {/* <div className="mb-3"> */}
        <Button ty title="Login" />
        
        <button type="button" onClick={() => setRegister(false)} className="btn-two rounded-2" >Register now</button>
        {/* </div> */}
      </div>
    </form>
  );
};

export default LoginForm;
