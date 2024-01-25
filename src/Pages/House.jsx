import React, { useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Login from "./Login";
import Home from "./Home";
import Tansport from "./Tansport";
import NavBar from "../Components/NavBar";

const House = ({ register, setRegister }) => {
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(false);

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
      <NavBar handleLogOut={handleLogOut} />

      <div
        style={{
          backgroundColor: "#00418B",
        }}
        className=" w-100 h-100 m-auto d-flex justify-content-center"
      >
        <div className="w-100 p-4 pt-5 d-flex justify-content-between">
          <div className="col-4 mt-5">
            <div className="mb-3">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                How many People live in your Household
              </label>
              <input
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control p-3"
                placeholder="Please enter user name"
              />
            </div>

            <div className="mb-3">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Country of residence
              </label>
              <select
                className="form-select p-3"
                aria-label="Default select example"
              >
                <option selected>Choose from List</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mb-3">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Size of Housing (m2)
              </label>
              <input
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control p-3"
                placeholder="Type here..."
              />
            </div>

            <div className="mb-3">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Type of Housing
              </label>
              <select
                className="form-select p-3"
                aria-label="Default select example"
              >
                <option selected>Choose from List</option>
                <option value="1">Detached</option>
                <option value="2">Semi-detached</option>
                <option value="3">Flat</option>
              </select>
            </div>
          </div>
          <div className="col-4 mt-5">
            <div className="mb-3">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Size of Housing (m2)
              </label>
              <input
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control p-3"
                placeholder="Please enter user name"
              />
            </div>

            <div className="w-100 mb-3 d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked={isCheck}
                  onClick={() => setIsCheck(!isCheck)}
                />
                <label
                  className="form-check-label fs-6 fw-bold"
                  htmlhtmlFor="flexCheckChecked"
                >
                  I dont Know my Kw/Month
                </label>
              </div>
            </div>
            {isCheck && <>
              <div class="form-check mb-3 border rounded-3 p-2 ps-5 form-switch">
                <input
                  class="form-check-input "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={false}
                />
                <label
                  class="form-check-label text-black fw-bold"
                  for="flexSwitchCheckChecked"
                >
                  I use Solar Based energy 
                </label>
              </div>

              <div class="form-check mb-3 border rounded-3 p-2 ps-5 form-switch">
                <input
                  class="form-check-input me-3"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={false}
                />
                <label
                  class="form-check-label text-black fw-bold"
                  for="flexSwitchCheckChecked"
                >
                  I have energy saving devices
                </label>
              </div>
              <div class="form-check mb-3 border rounded-3 p-2 ps-5 form-switch">
                <input
                  class="form-check-input me-3"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={false}
                />
                <label
                  class="form-check-label text-black fw-bold"
                  for="flexSwitchCheckChecked"
                >
                  I use Energy Efficient Bulbs
                </label>
              </div>
              <div class="form-check mb-3 border rounded-3 p-2 ps-5 form-switch">
                <input
                  class="form-check-input me-3"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={false}
                />
                <label
                  class="form-check-label text-black fw-bold"
                  for="flexSwitchCheckChecked"
                >
                  I have programmable temperature Control  
                </label>
              </div>
            </>}
            

            <div className="mb-3">
              <label
                style={{
                  fontWeight: "600",
                }}
                htmlhtmlFor="exampleFormControlInput1"
                className="form-label text-white"
              >
                Heating Source
              </label>
              <select
                className="form-select p-3"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">Electricity</option>
                <option value="2">Natural Gas</option>
                <option value="3">Solar</option>
                <option value="4">No Heating</option>
              </select>
            </div>
          </div>
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

export default House;
