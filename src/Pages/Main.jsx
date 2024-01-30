import React from "react";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";

const Main = ({ children, setRegister }) => {  
  const navigate = useNavigate();

  const handleLogOut = () => {
    setRegister(false);
    navigate("/login");
  };
  return (
    <div
      style={{
        height: "auto",
        width: "100vw",
        padding: "4rem 4rem 2rem 4rem",
        overflowX: "hidden",
      }}
      className=" position-relative"
    >
      <span
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/home")}
        className="logo"
      >
        LOGO
      </span>
      <NavBar handleLogOut={handleLogOut} setRegister={setRegister} />
      {children}
    </div>
  );
};

export default Main;
