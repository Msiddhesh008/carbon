import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import Registration from "../Components/Registration";
import { ToastContainer } from "react-toastify";

const Login = ({ register, setRegister }) => {
  const [regUserName, setRegUserName] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="login"
    >
      <div className="row h-100">
        <div className="col-md-7">
          {register ? (
            <LoginForm
              userName={userName}
              setUserName={setUserName}
              password={password}
              setPassword={setPassword}
              regUserName={regUserName}
              regPassword={regPassword}
              setRegister={setRegister}
            />
          ) : (
            <Registration
              regUserName={regUserName}
              setRegUserName={setRegUserName}
              regPassword={regPassword}
              setRegPassword={setRegPassword}
              regEmail={regEmail}
              setRegEmail={setRegEmail}
              setRegister={setRegister}
            />
          )}
        </div>
        <div className="col-md-5">
          <div
            className="ellipes-blue"
          >
            <span className="ellipse ellipse-1"></span>
            <span className="ellipse ellipse-2"></span>
            <span className="ellipse ellipse-3"></span>
            <span className="ellipse ellipse-4"></span>
            <span className="ellipse ellipse-5"></span>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
