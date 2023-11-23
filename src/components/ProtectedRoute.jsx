import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = window.sessionStorage.getItem('accessToken');

  if (!isAuthenticated) {
    console.log('Not authenticated');
    window.location.href = '/auth/login';
    return null;
  }

  return <Element {...rest} />;
};

export default ProtectedRoute;