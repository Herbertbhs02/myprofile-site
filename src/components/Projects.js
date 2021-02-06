import React from 'react';
import '../Style/projects.css';
import logo192 from '../media/logo192.png';

 const Projects = ()=> {
  return (
       <div >
         
          <div className=" row projects container ">
              <div className="grey lighten-3 box left-align col 12s l6 ">
              <img className='reactlog' src={logo192} alt="logo192" />
                <h5><span style={{fontWeight:"bold"}}>Connect With Old Friends </span></h5>
                <p>I developed this website to help people to reconnect with old friends.</p> 
                <p><h5>Front-end developed with:</h5> React.js</p>
                <p><h5>Back-end developed with:</h5> Nodejs, Express, Mongoose, jwtToken--authentication, bcrypt--password encryption and mongoDB. </p>
                <p>Please click on the link below to see the website</p>
              <a href="https://www.connectbambi.com/" target="_blank">connectbambi</a>
              </div>
              
              <div className="grey lighten-3 box left-align col 12s l6 ">
              <img className='reactlog' src={logo192} alt="logo192" />
                <h5><span style={{fontWeight:"bold"}}>Online shopping website </span></h5>
                <p>This is a demo website and its NOT used to sale any product. For testing purpose please use 4242....4242 as your credit card number.</p> 
                <p><h5>Front-end developed with:</h5> React.js and AWS_S3 bucket Route 53, and Codepipeline</p>
                <p><h5>Back-end developed with:</h5> Nodejs, Express, Mongoose mongoDB, EJS, AWS_Elastic Beanstalk and Codepipeline </p>
                <p>EJS is used to create Admin interface rendered from the server side.</p>
                <p>Please click on the link below to see the website</p>
              <a href="http://sevtech.uk/" target="_blank">e-commerce</a>
              </div>

              <div className="grey lighten-3 box left-align col 12s l6  ">
              <h5><b>Church Website</b></h5>
              <p><b>I developed the website using the following stack:</b></p>
              <p>“The website has been developed using Node.js, EJS, mongoDB and AWS_Elastic Beanstalk and Codepipeline.</p>
                  <p><b>Dependencies used:</b> body-parser, ejs, express,and mongoose.
                  Most of the javaScript logic is run on the server side, and that’s one of the advantages of using node.js to develop server side based web application."
                  </p>
                  <p>Please click on the link below to see the website</p>
            <a href="https://ihpmusa.org/" target="_blank">ihpmusa.org</a>
              </div>
            
              <div className="grey lighten-3 box left-align col 12s l6  ">
              <h5><b>Accountancy Firm Website</b></h5>
              <p><b>I developed the Frond end using React and materialize for styling.</b></p>
              <p><b>Hosted on AWS using AWS Amplify.</b></p>
              
                  
                  <p>Please click on the link below to see the website</p>
            <a href="https://main.dxngakmedy5lj.amplifyapp.com/" target="_blank">site link</a>
              </div>


              <div className="grey lighten-3 box left-align col 12s l6  ">
              <h5><b>Web Tech blog</b></h5>
              <p><b>I developed the website using the following stack:</b></p>
              <p>“The website has been developed using Node.js, EJS, and mongoDB.</p>
                  <p><b>Dependencies used:</b> body-parser, ejs, express, lodash and mongoose.
                  Most of the javaScript logic is run on the server side, and that’s one of the advantages of using node.js to develop server side based web application."
                  </p>
                  <p>Please click on the link below to see the website</p>
            <a href="https://shielded-mesa-82632.herokuapp.com/" target="_blank">Tech News</a>
              </div>
              
              <div className="grey lighten-3 box left-align col 12s l6 ">
                           <h5><b>Next Project</b></h5>
              <p>Still working on the next project</p>
        {/* <a href="https://pure-depths-67384.herokuapp.com/" target="_blank">link</a> */}
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