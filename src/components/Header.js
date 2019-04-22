import React, {Component} from "react";
//import "../css/login.css"


export default class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: ""
        }

    }
    render(){
        return (
                <header className="header">
                    <div className="row ">
                        <div className="col-2 ">
                              <h4 className="logo">iMUAO  </h4>
                        </div>
                        <div className="col-8"></div>
                        
                    </div>
                </header>
            
        );
    }


}