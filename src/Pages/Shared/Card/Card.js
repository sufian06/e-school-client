import React from 'react';
import './Card.css';

const Card = ({course}) => {
  const {name, img} = course;
  return (
    <div className='card'>
      <h3>Course Name: {name}</h3>
      <img className='cardImg' src={img} alt="" />
    </div>
  );
};

export default Card;