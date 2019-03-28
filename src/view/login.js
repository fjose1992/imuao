import React, {Component} from "react";
import "../css/login.css";


export default class login extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: ""
        }

    }
    home = event =>{        
        this.props.history.push("/home");
    }
    render(){
        return (<div className="global-container">
                    <div className="card login-form">
                    <div className="card-body">
                        <h3 className="card-title text-center">Log in </h3>
                        <div className="card-text">
                            <form onSubmit={this.home}>
                                <div className="form-group">
                                    <label for="inputEmail1">Email address</label>
                                    <input type="text" className="form-control form-control-sm" id="inputEmail1" />
                                </div>
                                <div className="form-group">
                                    <label for="inputPassword">Contraseña</label>
                                    <input type="password" className="form-control form-control-sm" id="inputPassword" />
                                </div>

                                <input type="submit" />
                                
                            </form>
                           
                        </div>
                    </div>
                    </div>
                </div>
    );
    }
    


}