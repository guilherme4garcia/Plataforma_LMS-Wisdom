/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState, useContext } from 'react';

// import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Wisdom:token');
    const user = localStorage.getItem('@Wisdom:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ username, password }) => {
    // const response = await api.post('authenticate', {
    //   username,
    //   password,
    // });

    // const { jwtResponse, userAccount } = response.data;

    // const { token } = jwtResponse;

    if (username === 'professor@teste.com') {
      const userAccount = {
        id: 12345678910,
        name: 'Professor Teste',
        email: username,
        password,
        role: 'PROFESSOR',
      };

      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZWVyemluZ2VyZEBnbWFpbC5jb20iLCJleHAiOjE2MTg3NzQ0NzksImlhdCI6MTYxODc1NjQ3OX0.lqSwC29hXUHObAU4P2solyiM_bnnpdiTvx_Yhc8PfJlerUOblYq40rVCbnAj37HoW5nKvaArRVqpo3tfjCbR4Q';

      localStorage.setItem('@Wisdom:token', token);
      localStorage.setItem('@Wisdom:user', JSON.stringify(userAccount));

      setData({ token, user: userAccount });
    } else {
      const userAccount = {
        id: 1,
        name: 'Aluno Teste',
        email: username,
        password,
        role: 'ALUNO',
      };

      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZWVyemluZ2VyZEBnbWFpbC5jb20iLCJleHAiOjE2MTg3NzQ0NzksImlhdCI6MTYxODc1NjQ3OX0.lqSwC29hXUHObAU4P2solyiM_bnnpdiTvx_Yhc8PfJlerUOblYq40rVCbnAj37HoW5nKvaArRVqpo3tfjCbR4Q';

      localStorage.setItem('@Wisdom:token', token);
      localStorage.setItem('@Wisdom:user', JSON.stringify(userAccount));

      setData({ token, user: userAccount });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Wisdom:token');
    localStorage.removeItem('@Wisdom:user');

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
