import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import colors from './utils/style/colors';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colors.secondary};
    }

    main {
      background-color: #fff;
      max-width: 1240px;
      width: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    ol,ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    a :visited {
      color: inherit;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
