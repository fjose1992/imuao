import React, { Component } from "react";
import "./asideFilter.css";
import $ from 'jquery';



export default class AsideFilter extends Component {

    constructor(props) {
        super(props);
       
    }


    filterBySkilss2(event){
        event.preventDefault();
        console.log("REF2:", this.refs.front.value);
        var filterEnfasis = "";
        if(this.refs.front.checked){
            filterEnfasis = "FrontEnd";
        }
        if(this.refs.back.checked){
            filterEnfasis = "BackEnd";
        }
        if(this.refs.ui.checked){
            filterEnfasis = "UI";
        }
        if(this.refs.ux.checked){
            filterEnfasis = "UX";
        }

        
        this.props.filterBySkilss(filterEnfasis);
        this.closeNav();
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
                <form onSubmit={this.filterBySkilss2.bind(this)}>
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
                                    <label className="form-check-label" htmlFor="exampleCheck1">Game Design</label>
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
                                    <input type="radio" className="form-check-input"  name="front" ref="front"  />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Front-End</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" name="front" ref="back" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Back-End</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" name="front" ref="ui" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">UI</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" name="front" ref="ux" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">UX</label>
                                </div>                                                        
                        </div>
                        </div>
                    </div>
                
                <button type="submit" className="btn btn-primary btn-icon-split" style={{marginLeft: "65px"}}>
                    <span className="icon text-gray-600">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Búscar</span>
                  </button>
                  </form>
            </div>

        );
    }


}