import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      bgClass: "base-100",
    },
    {
      id: 2,
      name: "Cavity Filling",
      img: cavity,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      bgClass: "base-100",
    },
    {
      id: 3,
      name: "Teeth Whitening",
      img: whitening,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      bgClass: "base-100",
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <p className="text-xl font-bold text-primary uppercase">
          <small> Our Services </small>
        </p>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
