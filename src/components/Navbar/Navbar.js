import React,{useState} from 'react';
import './Navbar.scss';
import logo from "../../clipminepage/clipmine_logo_beta_226x50.png" ;

const Navbar = ()=> {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobMenuOpen, setMobMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setMobMenuOpen(!isMobMenuOpen);
    }
    return (
        <header>
            <nav className="navbar">
                <img src={logo} alt='clipmine-logo' className='logo'/>
                <section className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className='menu-left'>
                        <li><a className="menu-item" href="#!" >Home</a></li>
                        <li><a className="menu-item" href="#!">Help</a></li>
                        <li><a className="menu-item" href="#!">Search</a></li>
                    </ul>
                    
                    <ul className='menu-right'>
                        <li><a className="menu-item" href='#!'>Blog</a></li>
                        <li><a className="menu-item" href="#!">Log In</a></li>
                        <li><a className="menu-item" href="#!">Sign Up</a></li>
                    </ul>
                    <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span className='bar'></span>
                    </button>
                </section>
            </nav>
            <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <a className="mob-menu-item" href="#!" >Home</a>
                <a className="mob-menu-item" href="#!" >Help</a>
                <a className="mob-menu-item" href="#!" >Search</a>
                <a className="mob-menu-item" href="#!" >Blog</a>
                <a className="mob-menu-item" href="#!" >Log In</a>
                <a className="mob-menu-item" href="#!" >Sign Up</a>
            </nav>

        </header>
        
    );
}

export default Navbar;