import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import "./Course.css";

const Course = () => {
  const course = useLoaderData();
  const { id, name, title, img, description, classes, times } = course;
  console.log(course);
  const ref = React.createRef();

  return (
    <div className="course">
      <div className="container">
        <div ref={ref}>
        <div className="flex">
          <h1 className="course-name">Course: {name}</h1>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf}>
                <FaRegFilePdf />
              </button>
            )}
          </Pdf>
        </div>
        <img className="courseImg" src={img} alt="" />
        <h4 className="course-title">{title}</h4>
        <p className="course-desc">{description}</p>
        <div className="course-meta">
          <h4 className="course-classes">Total Classes: {classes}</h4>
          <h4 className="course-times">Time: {times} hours</h4>
        </div>
       
        <button className="btn-course">
          <Link to={`/checkout/${id}`}>Go Premium</Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
