import React, { Component } from 'react';
import profilePicture4 from '../media/profilePicture4.png';
import motherBoard from '../media/motherBoard.jpg';
import city from '../media/city.jpg';
import nodeLogo from '../media/nodeLogo.png';
import reactLogo from '../media/reactLogo.png';
import js from '../media/js.png';
import milkyway from '../media/milkyway.jpg';
import awslogo from '../media/awslogo.png';
import '../Style/home.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Home extends Component {

    componentDidMount() {
        //code to activate tooltip message on hover
        var elems = document.querySelectorAll('.parallax');
         M.Parallax.init(elems, {});
  }


    render() {
        return (
            <div >
               <div className="row grey lighten-3 black-text">
                  <div className="col 12 l8">
                  <img src={profilePicture4} alt=""className="profilePicture"/>
                  </div>
                  <div className="col s12 l4 pull-l3">
                  <h3 class="">Herbert Ssevume</h3>
                  <h5>Full Stack Web Developer</h5>
                  <blockquote className="blockquote">
                  <p className="left-align">I am a  web developer based in Basingstoke UK. 
                  Building user-friendly websites and applications is truly a passion of mine. In addition to my knowledge base,
                   I actively seek out new technologies and stay up-to-date on industry trends and advancements.</p>
                  </blockquote>
                </div>
               </div>

               <div class="parallax-container parallax">
                 <div class="parallax">
                     <img src={city}  alt="" className="responsive-img" />
                  </div>
               </div>
                
               <div className="row row grey lighten-3">
               <div className="col 12 l8 ">
                 <img src={reactLogo} alt="react"className="logo"/>
                 <img src={nodeLogo} alt="node"className="logo"/>
                 <img src={js} alt="js"className="logo"/>
                 <img src={awslogo} alt="js"className="logo"/>
               </div>
               <div class="col s12 l4 pull-l3">
                <h3 class="">Technology Stack</h3>
                 <blockquote className="blockquote">
                  <p className="left-align">HTML | CSS-Flexbox,Grid | Materialize | JavaScript | React | Redux | Nodejs | Express | ejs | MongoDB | Cypress--Automation Test | Github |
                   AWS-EC2, S3, Elastic Beanstalk, CodePipeline(CI/CD), Route 53, CodeBuild and VPC.</p>
                </blockquote>
             </div>
            </div> 

            <div className="parallax-container parallax">
            <div class="parallax">
                <img src={motherBoard}  alt="" className="responsive-img" />
             </div>
          </div> 


            <div className="row">
                  <div className="col 12 l4">
                    <h3 class="">Current Projects summery</h3>
                  </div>
                  
                  <div class=" left-align col s12 l7 ">
                   <blockquote className="blockquote">
                     <p><b>Connectbambi: </b>For re-connecting people with lost old friends</p>
                     <p><b>E-Commerce website: </b>Online shopping website</p>
                     <p><b>Church Website: </b>Website for the Church</p>
                     <p><b>Accountancy Firm Website: </b>Developed for an Accountancy firm</p>
                     <p><b>Tech Blog: </b>For people to share and discuss about the latest technological development</p>
                     
                     <div className="blue-grey darken-3 white-text"><b>Please click on the projects link in the nav bar which will route you to projects page.</b></div>
                   </blockquote>
                </div>
               </div>

               <div class="parallax-container parallax">
               <div class="parallax">
                   <img src={milkyway}  alt="" className="responsive-img" />
                </div>
             </div>

             <footer class="page-footer grey lighten-1 ">
               <div class="container">
               © 2020 Copyright SEVDIGITAL
               </div>
             </footer>
            </div>
        );
    }
}

export default Home