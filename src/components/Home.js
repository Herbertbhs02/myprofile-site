import React, { Component } from 'react';
import profilePicture4 from '../media/profilePicture4.png';
import motherBoard from '../media/motherBoard.jpg';
import city from '../media/city.jpg';
import nodeLogo from '../media/nodeLogo.png';
import reactLogo from '../media/reactLogo.png';
import js from '../media/js.png';
import milkyway from '../media/milkyway.jpg';
import '../Style/home.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Home extends Component {

    componentDidMount() {
        //code to activate tooltip message on hover
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems, {});
  
      });
  }


    render() {
        return (
            <div className="">
               <div className="row grey lighten-3 black-text">
                  <div className="col 12 l8">
                  <img src={profilePicture4} alt="Photo"className="profilePicture"/>
                  </div>
                  <div class="col s12 l4 pull-l3">
                  <h3 class="">Herbert Ssevume</h3>
                  <h5>Web Developer</h5>
                  <blockquote className="blockquote">
                  <p className="left-align">I am a freelance front-end and back-end web developer based in Basingstoke UK. 
                  I am currently working on  my personal projects but also working as a freelance web developer.</p>
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
               </div>
               <div class="col s12 l4 pull-l3">
               <h3 class="">Technology Stack</h3>
               <blockquote className="blockquote">
               <p className="left-align">HTML | CSS-Flexbox,Grid | Materialize | JavaScript | React | Redux | Nodejs | Express | MongoDB | Cypress--Automation Test | Github | AWS-Cloud.</p>
               </blockquote>
             </div>
            </div> 

            <div className="parallax-container parallax">
            <div class="parallax">
                <img src={motherBoard}  alt="" className="responsive-img" />
             </div>
          </div> 


            <div className="row">
                  <div className="col 12 l8">
                  <img src={profilePicture4} alt="Photo"className="profilePicture"/>
                  </div>
                  <div class="col s12 l4 pull-l3">
                  <h2 class="indigo-text text-darken-4">Herbert Ssevume</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                </div>
               </div>

               <div class="parallax-container parallax">
               <div class="parallax">
                   <img src={milkyway}  alt="" className="responsive-img" />
                </div>
             </div>
            </div>
        );
    }
}

export default Home