import React from "react";

export default function NavItem({ to, children }) {
  return (
    <a className="nav-link ms-lg-5 fw-semibold text-white fs-5" href={to}>
      {children}
    </a>
  );
}
