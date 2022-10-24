import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses)
  return (
    <div>
      <h1>Courses: {courses.length}</h1>
    </div>
  );
};

export default Courses;