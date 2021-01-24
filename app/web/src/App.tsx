import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import GlobalStyle from './assets/styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </>
  );
};

export default App;
