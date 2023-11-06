import React from "react";
import { NavLink } from 'react-router-dom'

function Nav(){
    return (
        <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to = "/cats">Cats</NavLink>
        <NavLink to = "/dogs">Dogs</NavLink>

     </nav>

    );

}

export default Nav;