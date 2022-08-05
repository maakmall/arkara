import React from "react";

export default function Footer({ operasional }) {
  return (
    <footer className="bg-dark pt-5">
      <div className="container">
        <div className="row text-white">
          <div className="col-lg-4">
            <h4>Arkara</h4>
            <p className="fw-light my-4">
              Jl. Raya Cilegon No.km 18, Kedaleman, Kec. Cibeber, Kota Cilegon,
              Banten 42422.
            </p>
            <div className="fs-3">
              <a href="https://id.linkedin.com/company/arkara-coffee-eatery">
                <i className="bi bi-linkedin text-white me-3"></i>
              </a>
              <a href="https://www.instagram.com/arkara.co">
                <i className="bi bi-instagram text-white me-3"></i>
              </a>
              <a href="https://wa.me/081286183997">
                <i className="bi bi-whatsapp text-white"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <h4 className="mt-4 mt-lg-0">Jam Operasional</h4>
            <ul className="mt-4 list-unstyled">
              {operasional.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="d-flex justify-content-between fw-light"
                  >
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <h4 className="mt-4 mt-lg-0">Newsletter</h4>
            <p className="mt-4 fw-light">
              Dapatkan informasi dan promo terbaru dari kami.
            </p>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control rounded-4"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  aria-describedby="basic-addon2"
                />
                <button
                  className="input-group-text btn text-white bg-dark border-white fw-bold rounded-4"
                  id="basic-addon2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row text-white mt-4 pb-2">
          <div className="col-lg-12 text-center">
            <hr />
            <p className="fw-light pt-2">
              &copy; 2022 Arkara. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
