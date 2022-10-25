import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../Shared/Card/Card";
import './Courses.css';

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="container">
      <h1>Courses: {courses.length}</h1>
      <div className="coursesContainer">
        <div className="courses">
          {
            courses.map(course => <Card key={course.id} course={course} />)
          }
        </div>
        <div>
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
