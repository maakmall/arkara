import React from "react";
import Card from "./Card";

export default function Menu({ menu }) {
  return (
    <section className="menu bg-white min-vh-100" id="menu">
      <div className="container">
        <div className="row pt-5">
          <div className="col">
            <h2 className="fs-1 text-center mt-5">Our Menu</h2>
          </div>
        </div>
        <div className="row pt-5">
          {menu.map((item, index) => (
            <div className="col-lg-3 mb-4" key={index}>
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
