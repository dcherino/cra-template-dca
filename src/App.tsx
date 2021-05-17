import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import theme from './theme';
import logo from './logo.svg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1>Create React App</h1>
        <img src={logo} alt="React logo" />
      </div>
    </ThemeProvider>
  );
}

export default App;
