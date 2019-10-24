import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    src: url('/static/oswald-v23-latin-regular.woff')format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }
  
  .icon {
    font-size: 40px;
  }
`;

