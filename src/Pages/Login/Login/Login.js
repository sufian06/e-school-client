import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="formInner">
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
        <button type="submit" className="btn-submit">
          Login
        </button>
        <p className="infoText">
          Already have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
