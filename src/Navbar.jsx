import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="pa3 pa4-ns">
                <div className="tc pb3">
                    <Link className="link dim black b f6 f5-ns dib mr3" to='/'>Főoldal</Link>
                    <NavLink className="link dim gray f6 f5-ns dib mr3" to='/ermesek'>Az olimpiai érmesek</NavLink>
                    <NavLink className="link dim gray f6 f5-ns dib mr3" to='/mermesek'>A magyar érmesek</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar