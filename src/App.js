import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {GlobalStyle} from './styles/globalStyle'
import { Home } from './pages/Home';


const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Route path="/" exact component={Home} />
  </BrowserRouter>
);

export default App;