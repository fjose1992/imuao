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
            list: [],
            search: '',
        };
        this.updateSearchText = this.updateSearchText;
    }

    //Se encarga de asigar al state lo que venga de la barra de busqueda
    updateSearchText = (search) => {this.setState({ search })}

    /**
     * Este metodo se ejecuta antes de que el componente sea montado
     */
    componentWillMount(){                

        firebaseAppImuao.database().ref().child('users').on('value', snapshot => {
            this.setState({
                list: Object.values(snapshot.val()),
                name: "FJOSE"
            });
        });                

    }

    

    render() {
        let data = JSON.parse(sessionStorage.getItem('userData'));
        
        //Este Arrow function permite filtrar la informacion por el nombre desde la barra de busqueda
        var usersList = this.state.list.filter(
            (userD) => {
                return userD.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        
        //Este se encarga de renderizar toda la informacion en el componente CardUser
        var CardUserData = usersList.map((user) =>{            
            return (<CardUser key={user.code.toString()} name={user.name.toString()} email={user.email.toString()} skills={user.skills} code={user.code.toString()} />)
          });
          

        return (
            
            <div id="content-wrapper" className="d-flex flex-column">
            <div className="overlay"></div>
                <div id="content">
                    <Header name={data.displayName} photoURL={data.photoURL} updateSearch={this.updateSearchText} />
                    <h1></h1>
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

