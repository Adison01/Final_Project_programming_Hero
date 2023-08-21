import React from "react";

const Service = ({ service }) => {
  const { id, name, img, description, bgClass } = service;
  return (
    <div className={`card shadow-xl ${bgClass}`}>
      <figure className="px-10 pt-10">
        <img src={img} alt="img" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
