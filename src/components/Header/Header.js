import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    // nav active style
    const activeStyle = {
        fontWeight: 500,
        color: "#FE7062"
    }
    return (
        <div className="nav-bar px-5">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <NavLink className="text-logo" to="/home"
                    ><img className="logo" src={logo} alt="" /></NavLink>
                    <NavLink to="/home"
                        activeStyle={activeStyle}
                    >Home</NavLink>
                    <NavLink to="/about"
                        activeStyle={activeStyle}
                    >About</NavLink>
                    <NavLink to="/services"
                        activeStyle={activeStyle}
                    >Courses</NavLink>
                    <NavLink to="/contact"
                        activeStyle={activeStyle}
                    >Contact</NavLink>
                </div>
                <div>
                    <Link to="/home"
                    ><i class="fas fa-shopping-cart cart"></i></Link>
                    <input className="search-field" type="text" placeholder="Search for..." />
                    <button className="btn-regular ms-2">Search</button>

                </div>
            </div>

        </div>
    );
};

export default Header;