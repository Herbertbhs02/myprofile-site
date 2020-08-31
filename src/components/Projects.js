import React from 'react';
import '../Style/projects.css';
import logo192 from '../media/logo192.png';

 const Projects = ()=> {
  return (
       <div >
         
          <div className=" row projects container ">
              <div className="grey lighten-3 box left-align col 12s l6 ">
              <img className='reactlog' src={logo192} alt="logo192" />
                <h4><span style={{fontWeight:"bold"}}>Connect With Old Friends </span></h4>
                <p>I developed this website to help people to reconnect with old friends.</p> 
                <p><h4>Front-end developed with:</h4> React, JavaScript and Axios for asynchronous HTTP requests to REST endpoints.</p>
                <p><h4>Back-end developed with:</h4> Nodejs, Express, Mongoose, jwtToken--authentication, bcrypt--password encryption, mongoDB and axios </p>
                <p>Please click on the link below to see the website</p>
              <a href="https://www.connectbambi.com/" target="_blank">connectbambi</a>
              </div>
              
              <div className="grey lighten-3 box left-align col 12s l6  ">
              <h2>Web Tech blog</h2>
              <p><b>I developed the website using the following stack:</b></p>
              <p>“The website has been developed using Node.js, EJS, and mongoDB.</p>
                  <p><b>Dependencies used:</b> body-parser, ejs, express, lodash and mongoose.
                  Most of the javaScript logic is run on the server side, and that’s one of the advantages of using node.js to develop server side based web application."
                  </p>
                  <p>Please click on the link below to see the website</p>
            <a href="https://shielded-mesa-82632.herokuapp.com/" target="_blank">Tech News</a>
              </div>
              
              <div className="grey lighten-3 box left-align col 12s l6 ">
                           <h2>E-commerce Demo</h2>
         
              <p>Please click on the link below to see the website</p>
        <a href="https://pure-depths-67384.herokuapp.com/" target="_blank">e-commerce</a>
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

export default Projects;