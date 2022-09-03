import React from "react";
import { Link } from "react-router-dom";
import { FaHeartbeat } from 'react-icons/fa'



function NavBar() {

    const navStyle = {
        color: "white"
    }
    return (   
        <nav >
            <h3 className="head"> <FaHeartbeat />TIBASASA!</h3>
                <Link style={navStyle} className="nav" to="/">Home</Link>
                <Link style={navStyle} className="nav" to="/doctors">Doctors</Link>
                <Link style={navStyle} className="nav" to="/forms">Form</Link>
                <Link style={navStyle} className="nav" to="/about">About</Link>
                <Link style={navStyle} className="nav" to="/contacts">Contacts</Link>
            </nav>

    )


}

export default NavBar;