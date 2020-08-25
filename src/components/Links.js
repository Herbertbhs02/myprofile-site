import React from 'react';
import {NavLink} from 'react-router-dom';

 const Links =()=> {
  return (
    <ul className="right ">
      <li><NavLink to='/' className="btn">Home</NavLink></li>
      <li><NavLink to='/Projects' className="btn">Projects</NavLink></li>
      <li><NavLink to='/Contact' className="btn">Contact</NavLink></li>
    </ul>
  );
}
export default Links