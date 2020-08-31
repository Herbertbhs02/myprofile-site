import React from 'react';
//import {Link} from 'react-router-dom';
import sev_Logo from '../media/sev_Logo.png';
import Links from './Links';
import Social from './Social'


 const Navbar = ()=> {
  return (
   <div className="navbar-fixed">
    <nav className="nav-wrapper  transparent">
      <div className="">
      <img src={sev_Logo} alt="logo"class="left logo"/>
      <Social/>
      <Links/>
      </div> 
    </nav>
    </div>
  );
}
export default Navbar