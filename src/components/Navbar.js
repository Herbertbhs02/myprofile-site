import React from 'react';
import sev_Logo from '../media/sev_Logo.png';
import Links from './Links';
import Social from './Social';
import Sidebar from './Sidebar';



 const Navbar = ()=> {
  return (
   <div className="navbar-fixed">
    <nav className="nav-wrapper transparent ">
      <div className="">
      <img src={sev_Logo} alt="logo"class="left logo"/>
      <Social/>
      <Links/>
      <Sidebar/>
      </div> 
    </nav>
    </div>
  );
}
export default Navbar