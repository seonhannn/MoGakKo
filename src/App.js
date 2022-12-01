import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from './pages/Community';
import {createGlobalStyle} from "styled-components";
import CommunityWrite from './pages/CommunityWrite';
import Profile from './pages/Profile';

const GlobalStyle = createGlobalStyle`
  * {
    letter-spacing: -2px;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Community></Community>}></Route>
          <Route path='/communityWrite/*' element={<CommunityWrite></CommunityWrite>}></Route>
          <Route path='/profile/*' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
