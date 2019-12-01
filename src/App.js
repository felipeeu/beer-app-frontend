import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {GlobalStyle} from './styles/globalStyle'
import { Home } from './pages/Home';
import {Styles} from './pages/Styles'
import {Cup} from './components/cup'
import {Title} from './components/title'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Title/>
    <Cup/>
    <Route path="/home" exact component={Home} />
    <Route path="/:groupName" exact component={Styles} />
  </BrowserRouter>
);

export default App;