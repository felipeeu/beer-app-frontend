import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {GlobalStyle} from './styles/globalStyle'
import { Home } from './pages/Home';
import {Styles} from './pages/Styles'


const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Route path="/" exact component={Home} />
    <Route path="/:groupName" exact component={Styles} />
  </BrowserRouter>
);

export default App;