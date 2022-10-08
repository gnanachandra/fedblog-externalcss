import React from 'react'
import './styles.css';
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div  className='navbar'>
        <div>
           <Link to="/"><img src="./logo.png" className='logo' alt="vvit-logo"/></Link>
        </div>
        <ul className='navlist'>
            <li className='nav-items'><Link to="/">What is CSS</Link></li>
            {/*<li className='nav-items'><Link to="/TypesOfCSS">Types of CSS</Link></li>*/}
            <li className='nav-items'><Link to="/ExternalCSS">ExternalCSS</Link></li>
        </ul>
    </div>
  )
}

export default Navbar