import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="container">
      <form>
        <div className="formInner">
          <div className="singleInput">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter Name" />
          </div>
          <div className="singleInput">
            <label htmlFor="">Photo URL</label>
            <input type="text" name="image" placeholder="Enter Image Link" />
          </div>
          <div className="singleInput">
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder="Your Email" />
          </div>
          <div className="singleInput">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <button className="btn-submit">Register</button>
        <p className="infoText">Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
