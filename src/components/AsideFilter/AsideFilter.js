import React, { Component } from "react";
import "./asideFilter.css";


export default class AsideFilter extends Component {

    constructor(props) {
        super(props);
       
    }


      
    closeNav() {
        document.getElementById("asideFilter").style.width = "0";
        //document.getElementById("container-fluid").style.marginRigth= "0";
        document.body.style.backgroundColor = "white";
      }
     
    render() {
        //onMouseOver={()=>this.showSkillsData(this)} onMouseOut={() => this.hideSkillsData()}
        return (
            <div id="asideFilter" className="asideFilter">
                <a href="#" className="closebtn" onClick={()=>this.closeNav()}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

        );
    }


}