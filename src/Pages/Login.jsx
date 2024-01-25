import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import Registration from "../Components/Registration";

const Login = ({ register,  setRegister}) => {

  const [regUserName, setRegUserName] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
      className=" position-relative d-flex"
    >
      <span className="logo">LOGO</span>

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

      <div
        style={{
          backgroundColor: "#0A2FB6",
        }}
        className="col-4 position-relative overflow-hidden"
      >
        <span className="ellipse ellipse-1"></span>
        <span className="ellipse ellipse-2"></span>
        <span className="ellipse ellipse-3"></span>
        <span className="ellipse ellipse-4"></span>
        <span className="ellipse ellipse-5"></span>
      </div>
    </div>
  );
};

export default Login;
