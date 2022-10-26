import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../Shared/Card/Card";
import './Courses.css';

const Courses = () => {
  const courses = useLoaderData();
  
  const handleItemClick = () => {
    console.log('clicked')
  }
  return (
    <div className="container">
      <div className="coursesContainer">
        <div className="courses">
          {
            courses.map(course => <Card key={course.id} handleItemClick={handleItemClick} course={course} />)
          }
        </div>
        <div className="coursesItem">
          {courses.map((course) => (
            <p key={course.id}>
              <Link className="courseLink" to={`/course/${course.name}`}>{course.name}</Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
