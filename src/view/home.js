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
            fromBarFilter: true,
            search: '',
            skillEnfacis: '',
            filterHabilidades: ''
        };
        this.updateSearchText = this.updateSearchText;
        this.updateSkillEnfacis = this.updateSkillEnfacis.bind(this);
    }

    //Se encarga de asigar al state del valor de la barra de busqueda
    updateSearchText = (searchParameter) => {
        
        this.setState({ 
            search:searchParameter
         });

    }
    //Se encarga de asigar el state del valor asigando en el panel de filtros
    updateSkillEnfacis = (data, data2) => {
        
        console.log("REFS:",data2);
        this.setState({ 
            skillEnfacis: data,
            filterHabilidades: data2,
            fromBarFilter: false,
        });
    }

    /**
     * Este metodo se ejecuta antes de que el componente sea montado
     */
    componentWillMount(){                
        firebaseAppImuao.database().ref().child('users').on('value', snapshot => {
            this.setState({
                list: Object.values(snapshot.val()),
            });
        });                

    }

    filterByProperty(array, prop, value){
    var filtered = [];
    for(var i = 0; i < array.length; i++){

        var obj = array[i];

        for(var key in obj){
            if(typeof(obj[key] == "object")){
                var item = obj[key];
                if(item[prop] == value){
                    filtered.push(item);
                }
            }
        }

    }    

    return filtered;

}
    

    render() {
        let data = JSON.parse(sessionStorage.getItem('userData'));
        
        //Este Arrow function permite filtrar la informacion por el nombre desde la barra de busqueda
        if(this.state.fromBarFilter){        
            var usersList = this.state.list.filter(
                (userD) => {
                    
                    return userD.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            );
        }
        if(!this.state.fromBarFilter){     

            var usersList = [];
            this.state.list.map((dataUserList) => {
                var SkillsList = Object.keys(dataUserList.skills).map(function (value){ return value.toLowerCase();});
            
                var flagFilter = SkillsList.indexOf(this.state.skillEnfacis.toLowerCase());
                var flagFilter2 = SkillsList.indexOf(this.state.filterHabilidades.toLowerCase());
                if(flagFilter !== -1 || flagFilter2 !== -1){
                    usersList.push(dataUserList);
                }

            })
            console.log("Filtered:", usersList);
            console.log("TODO", this.state.list);
        
        }
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
                        <AsideFilter filterBySkilss={this.updateSkillEnfacis}/> 
                        <div className="row">
                            {CardUserData}
                        </div>                                                   
                        
                    </div>
                    
                </div>
            </div>
        );
    }


}

