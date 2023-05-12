import React from 'react';
import { Link } from "react-router-dom";



const NavBar = () => {
    return ( 

    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/experience">Experience</Link>
      </li>
      <li>
        <Link to="/interests">Interests</Link>
      </li>
    </ul>
  );
}
 
export default NavBar;