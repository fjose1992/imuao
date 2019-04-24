import React, { Component } from "react";
//import "../css/login.css"


export default class Portafolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            name: "",
            photoURL: "",
            email: "",
            labelSkills: "",
            skills: "",
            key: "",
            portafolio: "",
            phone: "",

        }

    }


    render() {
        var codeModal = "ModalProjects-" + this.props.code
        var skillsList = Object.entries(this.props.portafolio);
        
        var ListPortafolio = skillsList.map((listP, i) => {
                        
            var IdtCollapse = "collapseCard-"+i;
            var hReftCollapse = "#collapseCard-"+i;
            var collapseExpand = (i==0)? "true" : "false";
            var collapseExpand2 = (i==0)? "d-block card-header py-3" : "d-block card-header py-3 collapsed";
            var collapseExpand3 = (i==0)? "collapse show" : "collapse";

            var UrlRepoFlag = listP[1].name.search('github');
            var HtmlRepo = "";
            console.log("URL", listP[1].url);

            if(listP[1].url.indexOf('github.com') !== -1){
                HtmlRepo = <div>
                                <a target="_blank" rel="nofollow" href={listP[1].url}>{listP[1].name} →</a>
                                <a href={listP[1].url} target="_blank">
                                    <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" className="mx-auto d-block"  style={{width: "20%"}} />
                            </a> 
                          </div>  
            }
            if(listP[1].url.indexOf('youtube.com') !== -1){
                var res = listP[1].url.split("=");
                var srcVideo = "https://www.youtube.com/embed/"+res[1];
                HtmlRepo = <iframe className="mx-auto d-block" width="420" height="345" src={srcVideo}></iframe>                
            }
            if(listP[1].url.indexOf('youtu.be') !== -1){
                var res = listP[1].url.split("/");
                var srcVideo = "https://www.youtube.com/embed/"+res[3];
                HtmlRepo = <iframe className="mx-auto d-block" width="420" height="345" src={srcVideo}>  </iframe>                
            }
            if(listP[1].url.indexOf('youtube.com') == -1 && listP[1].url.indexOf('youtu.be') == -1 && listP[1].url.indexOf('github.com') == -1){ 
                HtmlRepo =  <div>
                                <a target="_blank" rel="nofollow" href={listP[1].url}>{listP[1].name} →</a>
                                <a href={listP[1].url} target="_blank">
                                    <img src="https://www.shareicon.net/download/2015/10/07/113807_browser_512x512.png" className="mx-auto d-block"  style={{width: "20%"}} />
                                </a> 
                            </div> 
            }

            
            return (<div className="card shadow mb-0" key={i}>
                        <a href={hReftCollapse} className={collapseExpand2} data-toggle="collapse" role="button" aria-expanded={collapseExpand} aria-controls={IdtCollapse}>
                            <h6 className="m-0 font-weight-bold text-primary">{listP[1].name}</h6>
                            <p>{listP[1].url}</p>
                        </a>
                        <div className={collapseExpand3} id={IdtCollapse} >
                            <div className="card-body">
                                {listP[1].description}
                                <br/>
                                <hr/>
                                {HtmlRepo}                            
                            </div>
                        </div>
                    </div>)
        });


        return (
            <div className="modal" id={codeModal}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Portafolio</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="profile-usertitle-name">
                                {this.props.name}                                
                            </div>
                            {ListPortafolio}
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}