import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/authSelector';

const PublicRoute = ({ children, restricted, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  const navigate = useNavigate();

  if (isAuthenticated && restricted) {
    navigate('/contacts');
    return null;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
