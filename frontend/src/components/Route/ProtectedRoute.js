import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loadUser } from "../../redux/actions/userAction";
import store from "../../redux/store";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const a = useSelector((state) => state);



  if (isAuthenticated && isAdmin === true && user.role !== "Admin") {
    return( <Outlet />);
  } else if (!isAuthenticated) {
    return( <Navigate to="/admin/login" />);
  }

  return children

};

export default ProtectedRoute;
