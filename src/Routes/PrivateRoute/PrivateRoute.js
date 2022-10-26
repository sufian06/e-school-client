import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading) {
    return 'Loading...'
  }

  if(!user) {
    return <Navigate to="/login" state={{from: location}} replace />
  }
  return children
};

export default PrivateRoute;