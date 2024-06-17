// src/components/ProtectedRoute.tsx
import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/userContext";

type ProtectedRouteProps = {
  element: ReactElement;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
