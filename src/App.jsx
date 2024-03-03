import React, { useEffect, useState } from "react";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import House from "./Pages/House";
import Transport from "./Pages/Tansport";
import LifeStyle from "./Pages/LifeStyle";
import { Zoom, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const notify = (message, type) => {
  if (type === "error") {
    toast.error(message, {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    });
  } else if (type === "warn") {
    toast.warn(message, {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    });
  } else {
    toast.success(message, {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    });
  }
};

const App = () => {
  const [register, setRegister] = useState(true);
  const navigate = useNavigate()




  useEffect(() => { 
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setRegister(true); // Mark as verified
      navigate("/home"); // Navigate to home page
    }
    if (register === false) navigate("/");
    
  }, [register]);

  return (
    <Routes >
    <Route path="/" element={<Login register={register} setRegister={setRegister} />} />
      <Route path="/home"  element={<Home register={register} setRegister={setRegister} />} />
      <Route path="/house" element={<House register={register} setRegister={setRegister} />} />
      <Route path="/lifestyle" element={<LifeStyle register={register} setRegister={setRegister} />} />
      <Route path="/transport" element={<Transport register={register} setRegister={setRegister} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
