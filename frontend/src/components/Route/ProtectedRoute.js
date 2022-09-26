import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ isPerson, children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);


  if (isAuthenticated && isPerson === true && user.role !== "Yetkili" && user.role !== "Admin") {
    return( <Outlet />);
  } else if (!isAuthenticated) {
  
    return( <Navigate to="/admin/login" />);
  }

  return children

};

export default ProtectedRoute;
