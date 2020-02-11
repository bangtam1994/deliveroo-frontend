import React from "react";
import imageRestaurant from "../images/header-image.jpg";

function Banner({ data }) {
  return (
    <div className="header2 white">
      <div className=" container d-flex">
        <div className="flex2">
          <h1> {data.restaurant.name}</h1>
          <p className="description">{data.restaurant.description}</p>
        </div>
        <div className="flex1 ">
          <img src={imageRestaurant} alt="image Pain Quotidien" />{" "}
        </div>
      </div>
    </div>
  );
}

export default Banner;
