import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Course.css";

const Course = () => {
  const course = useLoaderData();
  const { name, title, img, description, classes, times } = course;

  return (
    <div className="course">
      <div className="container">
        <h1 className="course-name">Course: {name}</h1>
        <img className="courseImg" src={img} alt="" />
        <h4 className="course-title">{title}</h4>
        <p className="course-desc">{description}</p>
        <div className="course-meta">
          <h4 className="course-classes">Total Classes: {classes}</h4>
          <h4 className="course-times">Time: {times} hours</h4>
        </div>
        <button className="btn-course">Go Premium</button>
      </div>
    </div>
  );
};

export default Course;
