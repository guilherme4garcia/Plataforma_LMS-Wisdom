/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

const Route = ({ isPrivate = false, Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate && !user) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          );
        }

        return <Component />;
      }}
    />
  );
};

export default Route;
