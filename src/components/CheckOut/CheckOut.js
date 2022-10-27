import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CheckOut = ({course}) => {
  console.log();
  const { user } = useContext(AuthContext);
  return (
    <div className="container">
      <div className="view">
        <h2>Thank you for be the premium user.</h2>
        <h4>{user.displayName}</h4>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default CheckOut;
