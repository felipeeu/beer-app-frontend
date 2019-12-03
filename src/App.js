import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {GlobalStyle} from './styles/globalStyle'
import {GroupsOfBeer} from './beer-groups/GroupsOfBeer';
import {StylesOfBeer} from './beer-styles/StylesOfBeer'
import {Cup} from './home/cup'
import {Title} from './home/title'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Title/>
    <Cup/>
    <Route path="/groups" exact component={GroupsOfBeer} />
    <Route path="/:groupName" exact component={StylesOfBeer} />
  </BrowserRouter>
);

export default App;