import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useBuyer from "../hook/useBuyer";
import Loading from "../Loading/Loading";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

  if (loading || isBuyerLoading) {
    return <Loading />;
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default BuyerRoute;
