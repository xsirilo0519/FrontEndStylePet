import React from 'react'
import {MenuNoLogin,MenuLogin} from '../Structures/Menus'
import Menu from './Menu';
import '../Style/Navbar.css'
import logo from '../assets/paws.png'

function NavBar() {
    return (
        <div className="Navbar-container">
            <img src={logo} />
            <div className="Navbar-container-buttons">
           <Menu Menu={MenuNoLogin}></Menu>
           <Menu Menu={MenuLogin}></Menu> 
           </div>
        </div>
    );
}

export default NavBar;