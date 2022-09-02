import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <header>
            <h3>TIBASASA!</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/forms">Forms</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>
        </header>

    )


}

export default NavBar;