import React, { useState, useEffect } from "react";
import NavbarToggle from "./NavbarToggle";
import NavItem from "./NavItem";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [transparent, setTransparent] = useState(false);

  let lastScrollTop = 0;

  const controlNavbar = () => {
    let currentScrollTop = document.documentElement.scrollTop;

    // scroll down
    if (currentScrollTop > lastScrollTop) {
      setShow(true);
    } else {
      // scrollTop
      if (currentScrollTop === 0) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
      setShow(false);
    }

    lastScrollTop = currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${transparent && "bg-dark"} fixed-top py-3 ${show && "nav-hidden"}`}
    >
      <div className="container">
        <a className="navbar-brand fw-semibold fs-4" href="/">
          Arkara
        </a>
        <NavbarToggle />
        <div
          className="offcanvas offcanvas-end bg-dark"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title navbar-brand fw-semibold fs-4"
              id="offcanvasWithBothOptionsLabel"
            >
              Arkara
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav ms-auto">
              <NavItem to="#home">Home</NavItem>
              <NavItem to="#about">About</NavItem>
              <NavItem to="#menu">Menu</NavItem>
              <NavItem to="#location">Location</NavItem>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
