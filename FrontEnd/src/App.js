import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { AuthProvider } from './hooks/AuthContext';
import { ClassProvider } from './services/dataHooks';

import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router history={history}>
      <AuthProvider>
        <ClassProvider>
          <Routes />
        </ClassProvider>
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
