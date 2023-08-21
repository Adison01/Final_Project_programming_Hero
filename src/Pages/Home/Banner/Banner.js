import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={chair}
          className="rounded-lg lg:w-1/2 shadow-2xl"
          alt="chair"
        />
        <div>
          <h1 className="text-4xl font-bold">
            Your New Smile Starts
            <br /> Here
          </h1>
          <p className="py-6 text-sm lg:w-1/2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
