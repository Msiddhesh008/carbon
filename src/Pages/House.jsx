import React, { useState } from "react";
import Button from "../Components/Button";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { useNavigate } from "react-router-dom";

const House = ({ register, setRegister }) => {
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(false);

  const handleLogOut = () => {
    setRegister(true);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/");
  };
  

  return (
    <div className="d-flex">
      <SideBar handleLogOut={handleLogOut} />
      <div className="inner-home-page">
        <NavBar handleLogOut={handleLogOut} />

        <div className="card-body">
          <div className="container">
            <div className="w-100 row p-4">
              <div className="col-md-5">
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
                    className="form-control"
                    placeholder="Type here"
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
                    className="form-select"
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
                    className="form-control"
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
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Choose from List</option>
                    <option value="1">Detached</option>
                    <option value="2">Semi-detached</option>
                    <option value="3">Flat</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <div className="mb-3">
                  <label
                    style={{
                      fontWeight: "600",
                    }}
                    htmlhtmlFor="exampleFormControlInput1"
                    className="form-label text-white"
                  >
                    Electric Consumption  (Kw/Month)
                  </label>
                  <input
                    // value={userName}
                    // onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Type here"
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
                      className="form-check-label fs-6"
                      htmlhtmlFor="flexCheckChecked"
                    >
                      I dont Know my Kw/Month
                    </label>
                  </div>
                </div>
                {isCheck && (
                  <>
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
                  </>
                )}

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
                    className="form-select"
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
        </div>
        <div className="row next-btn">
          <div className="col-3">
            <Button title="Next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
