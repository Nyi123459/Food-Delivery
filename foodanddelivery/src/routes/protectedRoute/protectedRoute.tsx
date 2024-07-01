// src/components/ProtectedRoute.tsx
import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/userContext";

type ProtectedRouteProps = {
  element: ReactElement;
  role?: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, role }) => {
  const { currentUser, isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (role && currentUser?.role !== role) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
