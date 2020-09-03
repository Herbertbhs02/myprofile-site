import React from 'react';
import {NavLink} from 'react-router-dom';
//import M from 'materialize-css/dist/js/materialize.min.js';

 const Links =()=> {
  
  return (
    <div>
      <ul class="right hide-on-med-and-down ">
      <li><NavLink to='/' className="btn">Home</NavLink></li>
      <li><NavLink to='/Projects' className="btn">Projects</NavLink></li>
      <li><NavLink to='/Contact' className="btn ">Contact</NavLink></li>
    </ul> 
  </div>
    
  );
}
export default Links