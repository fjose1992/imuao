import React, { Component } from 'react';
import './App.css';
import loadable from "react-loadable"
import {HashRouter, Route, Switch} from "react-router-dom";
import * as firebase from 'firebase';

const loading = () =>  <div>Cargando...</div>;
const login = loadable({
  loader: ()=> import("./view/login"),
  loading
})

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDX3XfOXAfEbLOyXY-khxYBlcMD3996XE0",
  authDomain: "imuao-administrador.firebaseapp.com",
  databaseURL: "https://imuao-administrador.firebaseio.com",
  projectId: "imuao-administrador",
  storageBucket: "imuao-administrador.appspot.com",
  messagingSenderId: "1000065554199"
};
firebase.initializeApp(config);


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
