import React from "react";

import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ course }) => {
  const { name, img, title } = course;
  return (
    <div className="card">
      <h3>
        <span>Course Name:</span> {name}
      </h3>

      <img className="cardImg" src={img} alt="" />
      <p className="title">{title}</p>
      <button className="btn-card">
        <Link to={`/course/${course.name}`}>See Details</Link>
      </button>
    </div>
  );
};

export default Card;
