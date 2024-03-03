import React, { useState } from "react";
import Button from "../Components/Button";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { useNavigate } from "react-router-dom";

const Tansport = ({ register, setRegister }) => {
  const [useCar, setUseCar] = useState(false);
  const navigate = useNavigate();


  const handleLogOut = () => {
    setRegister(true);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/");
  };

  return (
    <div className="d-flex">
      <SideBar handleLogOut={handleLogOut} />
      <div
        className="inner-home-page"
      >
        <NavBar />

        <div className=" card-body">
          <div className="container">
            <div className="transport">
              <p className="">
                Please Provide Average hours per week traveled by all household
                members using:
              </p>

              <div className="row">
                <div className="mb-3 col-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-white"
                  >
                    Train/Tube
                  </label>
                  <input
                    // value={userName}
                    // onChange={(e) => setUserName(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder=""
                  />
                </div>

                <div className="mb-3 col-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-white"
                  >
                    Bus
                  </label>
                  <input
                    // value={userName}
                    // onChange={(e) => setUserName(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder=" "
                  />
                </div>
                <div className="mb-3 col-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-white"
                  >
                    Inter City Bus
                  </label>
                  <input
                    // value={userName}
                    // onChange={(e) => setUserName(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder=""
                  />
                </div>
                <div className="mb-3 col-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-white"
                  >
                    Bicycle/Walk
                  </label>
                  <input
                    // value={userName}
                    // onChange={(e) => setUserName(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>
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
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    I use car
                  </label>
                </div>

              {/* ======[ transport row 2]======== */}

              {useCar ? (
                <div className="w-100  row">
                  <div className="mb-3 col-3 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label text-white"
                    >
                      Energy Source
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option  selected>
                        Choose from List
                      </option>
                      <option value="1">
                        Electricity
                      </option>
                      <option  value="2">
                        Petro/Petroleum Product{" "}
                      </option>
                      <option  value="3">
                        Electric
                      </option>
                    </select>
                  </div>
                  <div className="mb-3 col-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label text-white"
                    >
                      Annual Mileage (Km)
                    </label>
                    <input
                      // value={userName}
                      // onChange={(e) => setUserName(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder=" "
                    />
                  </div>
                  <div className="mb-3 col-3 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label text-white"
                    >
                      Annual Mileage (Km)
                    </label>
                    <input
                      // value={userName}
                      // onChange={(e) => setUserName(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder=" "
                    />
                  </div>
                </div>
              ) : (
                <p className="text-white">
                  Please Provide FLIGHTS PER YEAR FOR ALL HOUSEHOLD MEMBERS:
                </p>
              )}
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

export default Tansport;
