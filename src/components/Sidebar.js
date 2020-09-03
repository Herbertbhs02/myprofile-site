import React, { useEffect  } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {NavLink} from 'react-router-dom';
import '../Style/sidebar.css';

const Sidebar = ()=>{
  
  useEffect(() => {
    //code to activate sidenav bar.
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
  
  });

  return (
    <div>
     <a href="#" data-target="slide-out" class="  sidenav-trigger "><i class="material-icons icon-blue ">menu</i></a>
     <ul id="slide-out" className="sidenav navbar-fixed ">
       <li><NavLink to='/' className="btn sidenav-close">Home</NavLink></li>
       <li><NavLink to='/Projects' className="btn sidenav-close">Projects</NavLink></li>
       <li><NavLink to='/Contact' className="btn sidenav-close">Contact</NavLink></li>
     </ul>
    </div>
    
  );
}
export default Sidebar