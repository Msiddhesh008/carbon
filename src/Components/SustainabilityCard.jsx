import React from "react";
import BlogImg from "../assets/Images/Rectangle.jpg";

const SustainabilityCard = ({imageSrc}) => {
  return (
    <div
      className="home-card"
    >
      <div className="row">
        <div className="col-4">
          <img
            src={imageSrc}
            alt=""
          />
        </div>
        <div className="col-8">
          <span className="fw-bold">Use public transportation...</span>
          <p>
            Leave your car behind and take a greener route, walking, biking or
            public transport.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityCard;
