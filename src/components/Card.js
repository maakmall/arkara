import React from "react";

export default function Card({ title, text, image }) {
  return (
    <div className="card border-0 shadow rounded-4 overflow-hidden">
      <img
        src={require(`./../image/menu/${image}`)}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
