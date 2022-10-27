import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const checkoutData = useLoaderData();
  const { name } = checkoutData;
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="container">
      <div className="view tac">
        <h4>User name: <span className="c-name">{user.displayName}</span></h4>
        <p>{user.email}</p>
        <h1 className="mt-1">Course Name: <span className="c-name">{name}</span></h1>
      </div>
    </div>
  );
};

export default CheckOut;
