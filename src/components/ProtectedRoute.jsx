import React, { useRef, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const hasShownToast = useRef(false);

  useEffect(() => {
  
    const cameFromLogout = location.state?.fromLogout;

    if (!loading && !user && !hasShownToast.current && !cameFromLogout) {
      toast.error("You need to login first!");
      hasShownToast.current = true;
    }
  }, [loading, user, location.state]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
