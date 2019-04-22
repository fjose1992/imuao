import React, {Component} from "react";
//import "../css/login.css"
import Header from "../components/Header"
import Menu from "../components/Menu"
export default class home extends Component{
    render(){
        return (
            <div>
                <Header name="Jhon " lastName="Doe"/>
                <Menu/>
            </div>    
        );
    }


}