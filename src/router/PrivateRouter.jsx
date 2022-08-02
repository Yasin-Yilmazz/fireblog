import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouter = () => {
  const user = 'ömer';
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
