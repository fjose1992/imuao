import React, { Component } from "react";
import "./CardUser.css";
import $ from 'jquery';


export default class CardUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            name: "",
            photoURL: "",
            email: "",
            labelSkills: "",
            skills: "",
            key: ""

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
        return false;
    }
    hideSkillsData(elements){
        console.log("Out", $("#wer").is(":hidden"));
        if(!$("#wer").is(":hidden")){ 
            $("#wer").hide(); 
            $(".profile-sidebar").show(); 
            $(".profile-skills-values").hide("slow");
        }
        return false;
    }

    SkillsData(objHtml){
        console.log("Out", objHtml);

        $(objHtml).find("img").hide();
    
        $(".card").find("#header-card-info-"+objHtml).toggle("slow");
        $(".card").find("#profile-skills-values-"+objHtml).toggle("slow");
        $(".card").find("#profile-sidebar-"+objHtml).toggle("slow");

        
        return false;
    }    
    render() {
        //onMouseOver={()=>this.showSkillsData(this)} onMouseOut={() => this.hideSkillsData()}

        var header_card_info = "header-card-info-"+this.props.code;
        var profile_skills_values = "profile-skills-values-"+this.props.code;
        var profile_sidebar = "profile-sidebar-"+this.props.code;

        var skillsArray = Object.entries(this.props.skills);        
        var interesAreas = skillsArray.map((skill) =>{  
            var key = skill[1]+"-"+skill[0];       
            return (<div className="desc" key={key}>{skill[0]}</div>)            
        });

        var skillsBarValues = skillsArray.map((skill) =>{  
            var key = skill[0]+"-"+skill[1];       
            var porcentSkill = skill[1]+"%";

            return (<div key={key}>
                        <div className="mb-1 small">{skill[0]}</div>
                        <div className="progress progress-sm mb-2">
                            <div className="progress-bar" role="progressbar" style={{width: porcentSkill,}} aria-valuenow={skill[1]} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>    
                    )           
        });

        return (
            
                <div className="col-lg-4" >
                    <div  className="card shadow mb-4"  >
                        <div className="card-header header-card-info py-3" id={header_card_info} style={{display: 'none'}}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                
                                    <img src="https://dealeraccelerate-all.s3.amazonaws.com/fastlane/marketing_assets/375/male-profile-blank.jpg" className="card-header-img"  />                             
                                    <span className="mr-2 d-none d-lg-inline  header-card-text">{this.props.name}</span>   
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body justify-content-center" onClick={()=>this.SkillsData(this.props.code)} >

                            <div className="profile-sidebar" id={profile_sidebar}>
                        
                                <div className="profile-userpic text-center">
                                    <img  src="https://dealeraccelerate-all.s3.amazonaws.com/fastlane/marketing_assets/375/male-profile-blank.jpg" className="img-responsive" />
                                </div>
                    
                                <div className="profile-usertitle">
                                    <div className="profile-usertitle-name">
                                        {this.props.name}
                                    </div>
                                    <div className="profile-usertitle-job">
                                        {this.props.email}
                                    </div>
                                </div>

                                <div className="info text-center">
                                    <div className="profile-usertitle-skills">Areas de interes:</div>
                                    {interesAreas}
                                </div>                                
                            </div>
                            <div className="profile-skills-values" id={profile_skills_values} style={{display: 'none'}}>
                                <div className="profile-usertitle-name">
                                        Habilidades
                                </div>
                                {skillsBarValues}           
                            </div>
                        </div>
                        <div className="card-footer py-3 text-center" >
                            <a href="#" className="m-0 font-weight-bold text-primary">Ver portafolio</a>
                        </div>
                    </div>
                

               
                
                
        


                                   
            </div>

        );
    }


}