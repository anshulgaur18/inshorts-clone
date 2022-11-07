import React from 'react';
import NavDrawer from "./NavDrawer";
import "./Navbar.css";

function Navbar({setCategory}) {
  return (
    <div className='navbar'>
        <div className="navIcon">
            <NavDrawer setCategory={setCategory}/>
        </div>
        <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo"  />
    </div>
  )
}

export default Navbar;