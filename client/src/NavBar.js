import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";
import { FaHeartbeat } from 'react-icons/fa';

function NavBar(){
    return(
        <div className="container-fluid">
            <div className="navbar">
                <h3 className='head'><FaHeartbeat /> TIBASASA!</h3>
                <NavLink to='/'>Home</NavLink>
                <NavLink to= '/form'>Booking Form</NavLink>
                <NavLink to= '/doctors'>Doctors</NavLink>
                <NavLink to= '/contactUs'>Contact Us</NavLink>
                <NavLink to= '/about'>About Us</NavLink>
            </div>
        </div>
    )
}

export default NavBar;