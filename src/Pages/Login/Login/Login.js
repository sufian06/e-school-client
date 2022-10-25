import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      if(user) {
        navigate(from, {replace: true});
      }
    })
    .catch(error => {
      console.error(error);
    })
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
