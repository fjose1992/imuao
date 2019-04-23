import React, { Component } from "react";
import "./HeadBarInfo.css"


export default class HeadBarInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            breadcrumb: ""
        }

    }
    render() {
        return (
           <div>
               <h1 className="h3 mb-1 text-gray-800">{this.props.title} </h1>                                                
                        <div className="card mb-4 mt-3 py-3 border-bottom-primary">
                            <div className="headBarInfoBody" >
                            <i className="fas fa fa-home fa-3"></i> {this.props.breadcrumb} 
                            <i className="fas fa fa-chevron-right fa-3"></i>
                            </div>
                        </div>
            </div>

        );
    }


}