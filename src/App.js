import React from 'react';
import Community from './pages/Community';
import MyProfile from './pages/MyProfile';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    letter-spacing: -2px;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Community></Community>
    </div>
  );
}

export default App;
