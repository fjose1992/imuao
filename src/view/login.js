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
        return( <div className="container">

                    <div className="row justify-content-center">
                
                      <div className="col-xl-10 col-lg-12 col-md-9">
                
                        <div className="card o-hidden border-0 shadow-lg my-5">
                          <div className="card-body p-0">
                            <div className="row">
                              <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                              <div className="col-lg-6">
                                <div className="p-5">
                                  <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Bienvenido a IMUAO</h1>
                                  </div>
                                  <div className="user">
                                    <div className="form-group">
                                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="user@uao.edu.co"/>
                                    </div>
                                    <div className="form-group">
                                      <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Contraseña"/>
                                    </div>
                                    <div className="form-group">
                                      
                                    </div>
                                    <a href="index.html" className="btn btn-primary btn-user btn-block">
                                      Ingresar
                                    </a>
                                    <hr/>
                                    <button onClick={signInWithGoogle} className="btn btn-google btn-user btn-block">
                                      <i className="fab fa-google fa-fw"></i> Login con Google
                                    </button>
                                  </div>
                                  <hr/>
                                  <div className="text-center">
                                    <a className="small" href="forgot-password.html">Olvido su contraseña?</a>
                                  </div>
                                  <div className="text-center">
                                    <a className="small" href="register.html">Crear una cuenta!</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                
                      </div>
                
                    </div>
    
                  </div>
    )
        //return (<button onClick={signInWithGoogle}>Sign in with Google</button>);
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