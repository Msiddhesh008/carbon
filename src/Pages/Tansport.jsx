import React, { useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Login from "./Login";
import Home from "./Home";
import NavBar from "../Components/NavBar";

const Tansport = ({ register, setRegister }) => {
  const [ useCar, setUseCar ] = useState(false)




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
        onClick={() => navigate("/")}
        className="logo"
      >
        LOGO
      </span>
      <NavBar />

      <div
        style={{
          backgroundColor: "#00418B",
          minHeight:"100%"
        }}
        className=" w-100  d-flex justify-content-center"
      >
        <div className="w-100 p-5 mt-3 d-flex flex-column gap-3 justify-content-between">
          <p className="text-white fs-5">
            Please Provide Average hours per week traveled by all household
            members using:
          </p>

          <div className="w-100 d-flex justify-content-between">
            <div className="mb-3 col-3 pe-2">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Train/Tube
              </label>
              <input
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                type="number"
                className="form-control p-3"
                placeholder=""
              />
            </div>

            <div className="mb-3 col-3 ps-2 pe-2">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Bus
              </label>
              <input
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                type="number"
                className="form-control p-3"
                placeholder=" "
              />
            </div>
            <div className="mb-3 col-3 ps-2 pe-2">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Inter City Bus
              </label>
              <input
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                type="number"
                className="form-control p-3"
                placeholder=""
              />
            </div>
            <div className="mb-3 col-3 ps-2 ">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Bicycle/Walk
              </label>
              <input
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                type="number"
                className="form-control p-3"
                placeholder=""
              />
            </div>
          </div>

          <div className="w-100 mb-3 d-flex justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input pointer"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked={useCar}
                onClick={() => setUseCar(!useCar)}
              />
              <label
                className="form-check-label fw-bold fs-6"
                htmlFor="flexCheckChecked"
              >
                I use car
              </label>
            </div>
          </div>

          {/* ======[ transport row 2]======== */}

          {useCar ?(<div className="w-100  d-flex justify-content-start">
            <div className="mb-3 col-3 pe-2">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Energy Source
              </label>
              <select
                className="form-select p-3"
                aria-label="Default select example"
              >
                <option className="p-3" selected>Choose from List</option>
                <option className="p-3" value="1">Electricity</option>
                <option className="p-3" value="2">Petro/Petroleum Product </option>
                <option className="p-3" value="3">Electric</option>
              </select>
            </div>
            <div className="mb-3 col-3 ps-2 pe-2">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Annual Mileage (Km)
              </label>
              <input
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                type="number"
                className="form-control p-3"
                placeholder=" "
              />
            </div>
            <div className="mb-3 col-3 ps-2 ">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Annual Mileage (Km)
              </label>
              <input
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                type="number"
                className="form-control p-3"
                placeholder=" "
              />
            </div>
          </div>):(<p className="text-white">Please Provide FLIGHTS PER YEAR FOR ALL HOUSEHOLD MEMBERS:</p>)}

          


        </div>
      </div>

      <div className="w-100 d-flex justify-content-end p-3 pe-0 pt-5 pb-0">
        <div className="col-3">
          <Button title="Calculate" />
        </div>
      </div>
      
    </div>
  );
};

export default Tansport;
