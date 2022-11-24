import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useSeller from "../hook/useSeller";
import Loading from "../Loading/Loading";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isSeller, isSellerLoading] = useSeller(user?.email);

  if (loading || isSellerLoading) {
    return <Loading />;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
