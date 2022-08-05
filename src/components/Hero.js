import React from "react";

export default function Hero() {
  return (
    <section
      className="hero min-vh-100 d-flex flex-column justify-content-center align-items-center"
      id="home"
    >
      <div className="container position-relative text-center">
        <h1 className="display-2 fw-normal text-white">Arkara Social Café</h1>
        <p className="lead text-white">
          Food & beverage. Live up Your Way and #SocializeTogether. <br />{" "}
          Online, Take Away & Dine-In 10.00-23.00.
        </p>
      </div>
    </section>
  );
}
