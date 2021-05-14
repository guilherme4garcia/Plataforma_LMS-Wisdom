/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

const Route = ({
  isLoginOrSignup = false,
  onlyTeacher = false,
  isPrivate = false,
  Component,
  ...rest
}) => {
  const { user } = useAuth();

  if (isPrivate && !user) {
    return (
      <Redirect
        to={{
          pathname: '/signin',
        }}
      />
    );
  }

  if (isLoginOrSignup && user) {
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
        }}
      />
    );
  }

  if (onlyTeacher && user.role !== 'PROFESSOR') {
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
        }}
      />
    );
  }

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};

export default Route;
