import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;