import React from "react";
import treatment from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div className="hero bg-base-150 mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-md rounded-lg shadow-2xl"
          alt="treatment"
        />
        <div>
          <h1 className="text-5xl font-bold">
            {" "}
            Exceptional Dental <br />
            Care, on Your Terms
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in.
            <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi.
            <br />
            In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
