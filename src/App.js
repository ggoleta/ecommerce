import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './Styles/global';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
