import React from "react";
import about from "../image/about.jpg";

export default function About() {
  return (
    <section className="bg-dark" id="about">
      <div className="container">
        <div className="row py-5 align-items-center">
          <div className="col-lg-6">
            <div className="overflow-hidden rounded-5">
              <img
                src={about}
                alt="About Us"
                className="mw-100 rounded-5 about-image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="text-white fs-1 mb-4 mt-4 mt-lg-0">About Us</h2>
            <p className="text-white fw-light fs-5 text-justify">
              Arkara Cafe (PT Arkara Kreatif Kulina) is a Cilegon-based f&b
              startup company combining the concept of grab and go with a
              creative & collaborative open door space location. Our focus is to
              provide a casual-modern culinary experience for our customers with
              FAST (Fun, Affordable, Scalable, Tasteful) principles. Our
              signature food includes the tasteful gyu.kara, katsu.kara,
              chickenpop.kara and kulit.kara, complementing with
              tehbutterflykara, salar, skoll, and salle coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
