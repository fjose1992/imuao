import React, { Component } from "react";
//import "../css/login.css"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"


export default class home extends Component {
    
    constructor(props) {
        super(props);



      
    }


    render() {
        let data = JSON.parse(sessionStorage.getItem('userData'));
        console.log("UserData:", data);
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header name={data.displayName} photoURL={data.photoURL} />

                    
                </div>
            </div>
        );
    }


}