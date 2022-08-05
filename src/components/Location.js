import React from "react";
import Maps from "./Maps";

export default function Location() {
  return (
    <section className="" id="location">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="fs-1 text-center my-5">Our Location</h2>
          </div>
        </div>
        <div className="row">
          <div className="col p-0">
            <Maps />
          </div>
        </div>
      </div>
    </section>
  );
}
