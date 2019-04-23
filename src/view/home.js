import React, { Component } from "react";
//import "../css/login.css"
import Header from "../components/Header/Header"
import HeadBarInfo from "../components/HeadBarInfo/HeadBarInfo"
import CardUser from "../components/CardUser/CardUser"
import AsideFilter from "../components/AsideFilter/AsideFilter"


import * as firebase from 'firebase';
import fireBaseConfigIMUAO from '../fireBaseConfigIMUAO';

const firebaseAppImuao = firebase.initializeApp(fireBaseConfigIMUAO, "secondary");
var userImou = new Array();

export default class home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            list: ['1', '2', '3', '4', '5'],
        };
        
    }

    componentWillMount(){
        
        
        firebaseAppImuao.database().ref().child('users').once('value').then(function (snapshot){
            this.setState({
                list: Object.values(snapshot.val()),
            });
            //wer = Object.values(snapshot.val());
            //console.log("userImou:", userImou);

        });
        
        //console.log("UserData:",rootRef.child("Nombre"));
        //const users = rootRef.child();
    }

    
    render() {
        let data = JSON.parse(sessionStorage.getItem('userData'));
        
        console.log("Data", this.state.list);
        
        var CardUserData = this.state.list.map(function(user, i){
            return <CardUser name={user['name'] } />;
          });
          //console.log()

        return (
            
            <div id="content-wrapper" className="d-flex flex-column">
            <div className="overlay"></div>
                <div id="content">
                    <Header name={data.displayName} photoURL={data.photoURL} />
                    
                    <div className="container-fluid ">
                        <HeadBarInfo title="Repositorio de Ingenieros Multimedia" breadcrumb="Inicio"/>
                        <AsideFilter/> 
                        <div className="row">
                            {CardUserData}
                        </div>                                                   
                        
                    </div>
                    
                </div>
            </div>
        );
    }


}