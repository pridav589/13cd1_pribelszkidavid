import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Főoldal</Link>
                <NavLink to='/ermesek'>Az olimpiai érmesek</NavLink>
                <NavLink to='/mermesek'>A magyar érmesek</NavLink>
            </nav>
        </div>
    )
}

export default Navbar