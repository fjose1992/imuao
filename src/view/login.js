import React, {Component} from "react";
import "../css/login.css";
import Header from "../components/Header"
import Menu from "../components/Menu"
import * as firebase from 'firebase';


export default class login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }

    }
    home = event =>{        
        var me = this;
        console.log("Logginnn...");
        
    }
    render(){
        return (
            <div>            
                <Header name="Jhon " lastName="Doe"/>
                <Menu/>
            </div>

             
    );
    }
    


}