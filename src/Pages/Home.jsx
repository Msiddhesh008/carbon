import React from "react";
import Button from "../Components/Button";
import SustainabilityCard from "../Components/sustainabilityCard";
import { useNavigate } from "react-router-dom";
import Rectangle from "../assets/Images/Rectangle.jpg";
import Rectangle2 from "../assets/Images/Rectangle2.jpg";

const Home = () => {

  const navigate = useNavigate()
  const handelTryNow = () => {
    navigate("/house")
  }
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        padding: "4rem",
        overflowX:"hidden"
      }}
      className="position-relative "
    >
      <span className="logo">LOGO</span>

      <h1 className="display-5 pt-5 p-2 ps-0  carbon-blue font-Montserrat">
        Reducing Carbon Footprints and Promoting Sustainability
      </h1>
      <div className="w-100 d-flex justify-content-between align-items-center pe-5">
        <span
          style={{
            color: "#707070",
            fontSize: "18px",
          }}
          className=""
        >
          EcoBilling creates a more sustainable future by empowering
        </span>
        <button
          style={{
            border: "1px solid #00418B",
          }}
          className="carbon-blue btn rounded-0 ps-5 pe-5"
        >
          Calculate Now
        </button>
      </div>
      <div className="w-100 mt-3 d-flex">
        <div className="col-4 p-3  text-center gap-3 d-flex flex-column">

          <h1 className="display-4  carbon-black">
            Try using our Carbon
            <br /> Footprint Calculator!
          </h1>

          <span style={{
            border:"2px solid #00418B"
          }}></span>

          <p style={{
            fontSize:"18px"
          }}>Let’s Calculate your carbon footprint based on your daily lifestyle patterns!</p>

          <Button
          handler={handelTryNow}
          title="Try Now"
          />

        </div>


        <div className="col-8 ps-4">
          <span className="fs-4 ">Tips for <span className="carbon-blue"> sustainability</span></span>
          <div className="w-100 pt-4 d-flex justify-content-between flex-wrap gap-2">
            <SustainabilityCard imageSrc={Rectangle} />
            <SustainabilityCard imageSrc={Rectangle2} />
            <SustainabilityCard imageSrc={Rectangle2} />
            <SustainabilityCard imageSrc={Rectangle} />
            <SustainabilityCard imageSrc={Rectangle} />
            <SustainabilityCard imageSrc={Rectangle2} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
