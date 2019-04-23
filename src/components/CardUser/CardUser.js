import React, { Component } from "react";
import "./CardUser.css";
import $ from 'jquery';


export default class CardUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            photoURL: "",
            labelSkills: "",
            fullSkills: "",
        }
//<img className="img-profile rounded-circle" src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" />
    }
    showSkillsData(elements){
        console.log("Holaa", $("#wer").is(":hidden"));
        if($("#wer").is(":hidden")){
            $("#wer").show("slow");  
            $(".profile-sidebar").hide();  
            $(".profile-skills-values").show("slow");
        }
        //$("#wer").toggle("slow");
        return false;
    }
    hideSkillsData(elements){
        console.log("Out", $("#wer").is(":hidden"));
        if(!$("#wer").is(":hidden")){ 
            $("#wer").hide(); 
            $(".profile-sidebar").show(); 
            $(".profile-skills-values").hide("slow");
        }
        //$("#wer").toggle("slow");
        return false;
    }

    SkillsData(objHtml){
        console.log("Out", objHtml);

        $(objHtml).find("img").hide();
    
        $(".card").find("#header-card-info-"+objHtml).toggle("slow");
        $(".card").find("#profile-skills-values-"+objHtml).toggle("slow");
        $(".card").find("#profile-sidebar-"+objHtml).toggle("slow");


        //$("#wer").toggle("slow");
        //$(".profile-skills-values").toggle();
        //$(".profile-sidebar").toggle(); 
        
        return false;
    }    
    render() {
        //onMouseOver={()=>this.showSkillsData(this)} onMouseOut={() => this.hideSkillsData()}
        return (
            <div className="row">
                <div className="col-lg-4" >
                    <div  className="card shadow mb-4"  onClick={()=>this.SkillsData("123")} >
                        <div className="card-header header-card-info py-3" id="header-card-info-123" style={{display: 'none'}}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                
                                    <img src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" className="card-header-img" alt=""   />                             
                                    <span className="mr-2 d-none d-lg-inline  header-card-text">FRANK JOSE POPO</span>   
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body justify-content-center">

                            <div className="profile-sidebar" id="profile-sidebar-123">
                        
                                <div className="profile-userpic text-center">
                                    <img  src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" className="img-responsive" alt=""/>
                                </div>
                    
                                <div className="profile-usertitle">
                                    <div className="profile-usertitle-name">
                                        Marcus Doe
                                    </div>
                                    <div className="profile-usertitle-job">
                                        Developer
                                    </div>
                                </div>

                                <div className="info text-center">
                                    <div className="profile-usertitle-skills">Areas de interes:</div>
                                    <div className="desc">Passionate designer</div>
                                    <div className="desc">Curious developer</div>
                                    <div className="desc">Tech geek</div>
                                </div>                                
                            </div>
                            <div className="profile-skills-values" id="profile-skills-values-123" style={{display: 'none'}}>
                                <div className="profile-usertitle-name">
                                        Habilidades
                                </div>
                                <div className="mb-1 small">Javascipt</div>
                                <div className="progress progress-sm mb-2">
                                    <div className="progress-bar" role="progressbar" style={{width: '75%',}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>        
                                <div className="mb-1 small">HTML</div>
                                <div className="progress progress-sm mb-2">
                                    <div className="progress-bar" role="progressbar" style={{width: '75%',}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>   
                                <div className="mb-1 small">CSS</div>
                                <div className="progress progress-sm mb-2">
                                    <div className="progress-bar" role="progressbar" style={{width: '75%',}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>           
                            </div>
                        </div>
                        <div className="card-footer py-3 text-center" >
                            <a href="#" className="m-0 font-weight-bold text-primary">Ver portafolio</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4" >
                    <div  className="card shadow mb-4"  onClick={()=>this.SkillsData("345")} >
                        <div className="card-header header-card-info py-3" id="header-card-info-345" style={{display: 'none'}}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                
                                    <img src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" className="card-header-img" alt=""   />                             
                                    <span className="mr-2 d-none d-lg-inline  header-card-text">FRANK JOSE POPO</span>   
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body justify-content-center">

                            <div className="profile-sidebar" id="profile-sidebar-345">
                        
                                <div className="profile-userpic text-center">
                                    <img  src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" className="img-responsive" alt=""/>
                                </div>
                    
                                <div className="profile-usertitle">
                                    <div className="profile-usertitle-name">
                                        Marcus Doe
                                    </div>
                                    <div className="profile-usertitle-job">
                                        Developer
                                    </div>
                                </div>

                                <div className="info text-center">
                                    <div className="profile-usertitle-skills">Areas de interes:</div>
                                    <div className="desc">Passionate designer</div>
                                    <div className="desc">Curious developer</div>
                                    <div className="desc">Tech geek</div>
                                </div>                                
                            </div>
                            <div className="profile-skills-values" id="profile-skills-values-345" style={{display: 'none'}}>
                                <div className="profile-usertitle-name">
                                        Habilidades
                                </div>
                                <div className="mb-1 small">Javascipt</div>
                                <div className="progress progress-sm mb-2">
                                    <div className="progress-bar" role="progressbar" style={{width: '75%',}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>        
                                <div className="mb-1 small">HTML</div>
                                <div className="progress progress-sm mb-2">
                                    <div className="progress-bar" role="progressbar" style={{width: '75%',}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>   
                                <div className="mb-1 small">CSS</div>
                                <div className="progress progress-sm mb-2">
                                    <div className="progress-bar" role="progressbar" style={{width: '75%',}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>           
                            </div>
                        </div>
                        <div className="card-footer py-3 text-center" >
                            <a href="#" className="m-0 font-weight-bold text-primary">Ver portafolio</a>
                        </div>
                    </div>
                </div>
                
                
        


                                   
            </div>

        );
    }


}