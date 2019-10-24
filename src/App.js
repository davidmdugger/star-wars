import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';

// components
import People from './containers/People';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <h1>APP</h1>
        <People />
      </div>
    </ThemeProvider>
  );
}

export default App;
