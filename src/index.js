import React from 'react';
import ReactDOM from 'react-dom';
import Home from './rotas/Home';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Favoritos from './rotas/Favoritos';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif, Roboto, Ubuntu, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }

  li {
    list-style: none;
  }
`
const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)