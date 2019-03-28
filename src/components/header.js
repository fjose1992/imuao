import React, {Component} from "react";
//import "../css/login.css"
export default class header extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: ""
        }

    }
    render(){
        return (
                 <div>
                    <h1>header</h1>
                    <h2>{this.props.name} {this.props.lastName}</h2>
                 </div>
        );
    }


}