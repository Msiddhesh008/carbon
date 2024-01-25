import React from "react";
import BlogImg from "../assets/Images/Rectangle.jpg";

const SustainabilityCard = ({imageSrc}) => {
  return (
    <div
      style={{
        width: "48%",
      }}
      className="home-card d-flex p-2 gap-2 rounded-2"
    >
      <div className="col-4">
        <img
          className="w-100 h-100 rounded-2"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="col-8 d-flex flex-column justify-content-center">
        <span className="fw-bold">Use public transportation...</span>
        <p
          style={{
            fontSize: "14px",
          }}
        >
          Leave your car behind and take a greener route, walking, biking or
          public transport.
        </p>
      </div>
    </div>
  );
};

export default SustainabilityCard;
