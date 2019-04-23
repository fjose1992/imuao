import React, { Component } from "react";
import "./asideFilter.css";
import $ from 'jquery';



export default class AsideFilter extends Component {

    constructor(props) {
        super(props);
       
    }


      
    closeNav() {
        $("#asideFilter").hide();
        $(".overlay").hide();
      }
     
    render() {
        //onMouseOver={()=>this.showSkillsData(this)} onMouseOut={() => this.hideSkillsData()}
        return (
            <div id="asideFilter" className="asideFilter">
                <a href="#" className="closebtn" onClick={()=>this.closeNav()}>&times;</a>
                



                <div className="card-body">
                  
                  
                    <h5 className="text">Filtros</h5>
                </div>

                <div className="card shadow mb-0">
                    <a href="#collapseCardHabilidades" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardHabilidades">
                    <h6 className="m-0 font-weight-bold text-primary">Habilidades</h6>
                    </a>
                    
                    <div className="collapse show" id="collapseCardHabilidades" >
                    <div className="card-body">
                        
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Unity 3D</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">React Js</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">PHP</label>
                            </div>                                                        
                    </div>
                    </div>
                </div>

                <div className="card shadow mb-4">
                    <a href="#collapseCardEnfasis" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardEnfasis">
                    <h6 className="m-0 font-weight-bold text-primary">Enfasis</h6>
                    </a>
                    
                    <div className="collapse show" id="collapseCardEnfasis" >
                    <div className="card-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Front-End</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Back-End</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">UI</label>
                            </div>                                                        
                    </div>
                    </div>
                </div>

                <a href="#" className="btn btn-secondary btn-icon-split" style={{marginLeft: "65px"}}>
                    <span className="icon text-gray-600">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Búscar</span>
                  </a>

            </div>

        );
    }


}