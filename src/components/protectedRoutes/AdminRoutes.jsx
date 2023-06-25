import React, { useContext } from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

export const ProtectedRouteAdmin = ({ children }) => {
  const navigate = useNavigate()
  const { authUser } = useAuth();

  if(authUser && authUser.role !== 'admin') {
    return <Navigate to="/" replace />;
  } 
  return children;
};

export default ProtectedRouteAdmin;