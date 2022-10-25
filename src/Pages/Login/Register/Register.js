import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import "./Register.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .then((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn-submit">Register</button>
        <p className="infoText">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
