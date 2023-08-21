import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
//style={{ background: `url(${appointment})` }}
//    <section className="mt-32" style={{ background: `url(${appointment})` }}>
const ContactUs = () => {
  return (
    <section
      className="mt-10 text-center pb-10"
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-primary py-5 pb-1">Contact Us</div>
      <h4 className="text-2xl text-white pb-5">Stay connected with us</h4>
      <input
        type="text"
        placeholder="email address"
        className="input input-bordered input-sm w-full max-w-xs"
      />
      <br />

      <input
        type="text"
        placeholder="subject"
        className="input input-bordered input-sm w-full max-w-xs"
      />
      <br />

      <textarea
        className="textarea textarea-primary input-bordered input-8xl w-full max-w-xs pb-10"
        placeholder="Your message"
      ></textarea>
      <br />
      <PrimaryButton>Submit</PrimaryButton>
    </section>
  );
};

export default ContactUs;
