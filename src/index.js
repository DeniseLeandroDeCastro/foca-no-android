import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif, Roboto, Ubuntu  
  }

  li {
    list-style: none;
  }
`

ReactDOM.render(
  <GlobalStyle />,
  <App />,
  document.getElementById('root')
);
