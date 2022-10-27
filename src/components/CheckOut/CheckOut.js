import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const checkoutData = useLoaderData();
  const { id, name, title, img, description, classes, times } = checkoutData;
  console.log(checkoutData);
  const { user } = useContext(AuthContext);
  return (
    <div className="container">
      <div className="view">
        <h2>Thank you for be the premium user.</h2>
        <h4>{user.displayName}</h4>
        <p>{user.email}</p>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default CheckOut;
