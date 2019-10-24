import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>APP</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
