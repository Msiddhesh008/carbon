import React from "react";
import NavBar from "../Components/NavBar";

const Main = ({ children, setRegister }) => {
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
      <NavBar setRegister={setRegister} />
      {children}
    </div>
  );
};

export default Main;
