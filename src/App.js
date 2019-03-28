import React, { Component } from 'react';
import './App.css';
import loadable from "react-loadable"
import {HashRouter, Route, Switch} from "react-router-dom";

const loading = () =>  <div>Cargando...</div>;
const login = loadable({
  loader: ()=> import("./view/login"),
  loading
})


const home = loadable({
  loader: ()=> import("./view/home"),
  loading
})

class App extends Component {  

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact name="Login - IMUAO" path="/login" component={login} />
          <Route exact name="Home - IMUAO" path="/home" component={home} />
        </Switch>
      </HashRouter>
      );
  }
}

export default App;
