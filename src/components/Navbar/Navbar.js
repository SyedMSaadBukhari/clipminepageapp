import React from 'react';
import './Navbar.scss';
import logo from "../../clipminepage/clipmine_logo_beta_226x50.png" ;

const Navbar = ()=> {
    return (
        <nav className="navbar">
            <img src={logo} alt='clipmine-logo' className='logo'/>
            <main className='menu'>
                <ul className="menu-left">
                    <li><a className="menu-item" href="#!" >Home</a></li>
                    <li><a className="menu-item" href="#!">Help</a></li>
                    <li><a className="menu-item" href="#!">Search</a></li>
                </ul>
                
                <ul className="menu-right">
                    <li><a className="menu-item" href='#!'>Blog</a></li>
                    <li><a className="menu-item" href="#!">Log In</a></li>
                    <li><a className="menu-item" href="#!">Sign Up</a></li>
                </ul>
            </main>
        </nav>
    );
}

export default Navbar;