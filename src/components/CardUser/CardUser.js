import React, { Component } from "react";
import "./CardUser.css"


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
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">

                    <div className="card shadow mb-4">
                        <div className="card-header header-card-info py-3" >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                
                                    <img src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" className="card-header-img" alt=""/>                             
                                    <span className="mr-2 d-none d-lg-inline  header-card-text">FRANK JOSE POPO</span>   
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body justify-content-center">

                            <div className="profile-sidebar">
                        
                                <div className="profile-userpic text-center">
                                    <img src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" className="img-responsive" alt=""/>
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
                        </div>
                        <div className="card-footer py-3 text-center" >
                            <a href="#" className="m-0 font-weight-bold text-primary">Ver portafolio</a>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4">

                    <div className="card shadow mb-4">
                        <div className="card-header py-3" hidden>
                            <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                        </div>
                        <div className="card-body justify-content-center">

                            <div className="profile-sidebar">
                        
                                <div className="profile-userpic text-center">
                                    <img src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" className="img-responsive" alt=""/>
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

                        </div>
                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="card shadow mb-4">
                        <div className="card-header py-3" hidden>
                            <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                        </div>
                        <div className="card-body justify-content-center">

                            <div className="profile-sidebar">
                        
                                <div className="profile-userpic text-center">
                                    <img src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" className="img-responsive" alt=""/>
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

                        </div>
                    </div>
                </div>



                <div className="col-lg-4">

                    <div className="card shadow mb-4">
                        <div className="card-header py-3" hidden>
                            <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                        </div>
                        <div className="card-body justify-content-center">

                            <div className="profile-sidebar">
                        
                                <div className="profile-userpic text-center">
                                    <img src="http://www.visualmarketing.com.ar/wp-content/uploads/2013/08/team3.png" className="img-responsive" alt=""/>
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

                        </div>
                    </div>
                </div>                                
            </div>

        );
    }


}