import React from 'react';
import { FaLaptop } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className='nav'>
      <div className="mainNav">
        <div className="logo">
          <Link to='/'><FaLaptop /> eSchool</Link>
        </div>
        <div className="navBar">
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;