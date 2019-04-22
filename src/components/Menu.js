import React, {Component} from "react";
//import "../css/login.css"
export default class Menu extends Component{

    render(){
        let child = <span></span>;
        return (
            <nav className="navbar navbar-inverse sidebar" role="navigation">
            <div className="container-fluid">                
                <div className=" navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        
                      
                        <li><a href="#">Inicio   
                            <span  className="pull-right hidden-xs showopacity glyphicon glyphicon-home" ></span>                     
                        </a></li>
                        <li ><a href="#">Busquedas   
                            <span  class="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span>                     
                        </a></li>
                        <li ><a href="#">Conectar   
                            <span  class="pull-right hidden-xs showopacity glyphicon glyphicon-envelope"></span>                     
                        </a></li>
                        <li ><a href="#">Mis favoritos
                            <span class="pull-right hidden-xs showopacity glyphicon glyphicon-envelope"></span>
                        </a></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        );
    }


}