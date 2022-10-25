import React from "react";
import { useLoaderData } from "react-router-dom";
import './Course.css';

const Course = () => {
  const course = useLoaderData();
  const { name, title, img, description } = course;

  return (
    <div className="course">
      <div className="container">
        <h1>Course: {name}</h1>
        <h4>{title}</h4>
        <img className="courseImg" src={img} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Course;
