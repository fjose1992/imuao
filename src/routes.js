import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Login from './view/login';
import Home from './view/home';



const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;