/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Delta:token');
    const user = localStorage.getItem('@Delta:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Delta:token', token);
    localStorage.setItem('@Delta:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Delta:token: token');
    localStorage.removeItem('@Delta:user: user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AutoProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
