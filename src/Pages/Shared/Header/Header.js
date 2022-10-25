import React, { useContext } from 'react';
import { FaLaptop } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => { })
    .catch(error => console.error(error))
  }

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
            <li>
              <>
              {
                user?.uid ? 
                <>
                <span>{user?.displayName}</span>
                  <button onClick={handleLogOut} className='btn-logout'>Log out</button>
                </>
                :
                <div className='loginRegister'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </div>
              }
              </>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;