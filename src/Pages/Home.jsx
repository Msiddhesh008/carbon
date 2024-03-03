import React from "react";
import Button from "../Components/Button";
import SustainabilityCard from "../Components/SustainabilityCard";
import { useNavigate } from "react-router-dom";
import Rectangle from "../assets/Images/Rectangle.jpg";
import Rectangle2 from "../assets/Images/Rectangle2.jpg";
import SideBar from "../Components/SideBar";
import { ToastContainer } from "react-toastify";

const Home = ({ register, setRegister }) => {
  const navigate = useNavigate();
  const handelTryNow = () => {
    navigate("/house");
  };

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
        className="inner-home-page p-5"
      >
        <h1 className="display-6 carbon-blue font-Montserrat">
          Reducing Carbon Footprints and Promoting Sustainability
        </h1>
        <div className="calc-btn">
          <span>
            EcoBilling creates a more sustainable future by empowering
          </span>
          <button className="carbon-blue calcbtn">Calculate Now</button>
        </div>
          <div className="row">
            <div className="col-6 footprint">
              <h1 className="carbon-black">
                Try using our <br />
                Carbon
                <br /> Footprint <br />
                Calculator!
              </h1>

              <span className="border-blue"></span>

              <p>
                Let’s Calculate your carbon footprint based on your daily
                lifestyle patterns!
              </p>

              <Button handler={handelTryNow} title="Try Now" />
            </div>

            <div className="col-6 ps-4">
              <span className="fs-4 ">
                Tips for <br />
                <span className="carbon-blue"> sustainability</span>
              </span>
              <div className="w-100 pt-4">
                <SustainabilityCard imageSrc={Rectangle} />
                <SustainabilityCard imageSrc={Rectangle2} />
              </div>
            </div>
          </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Home;
