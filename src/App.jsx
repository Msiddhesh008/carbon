import React, { useEffect, useState } from "react";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import House from "./Pages/House";
import Transport from "./Pages/Tansport";

const App = () => {
  const [register, setRegister] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    if (register === false) navigate("/");
  }, [register]);

  return (
    <Routes >
    <Route path="/" element={<Login register={register} setRegister={setRegister} />} />
      <Route path="/home"  element={<Home register={register} setRegister={setRegister} />} />
      <Route path="/house" element={<House register={register} setRegister={setRegister} />} />
      <Route path="/transport" element={<Transport register={register} setRegister={setRegister} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
