import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import {Redirect} from 'react-router-dom';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      


      if(user){
        sessionStorage.setItem("userData", JSON.stringify(user));
        return (
          
        <Redirect to={{
                        pathname:'/home',
                        
                    }}/> );
        

      }else{
        return (<button onClick={signInWithGoogle}>Sign in with Google</button>);
      }
      
    }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);