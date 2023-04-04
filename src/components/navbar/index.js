import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./index.css";


const NavBar = () => {


    return (
        <nav className="NavbarItems">
        <div className="left-side">
            <ul className="nav-link-ul">
                <li className="nav-links">Home</li>
                <li className="nav-links">Leaderboard</li>
                <li className="nav-links">New</li>
            </ul>
        </div>

        <div className="right-side">
            <ul className="nav-link-ul">
                <li className="nav-links">profile</li>
                <li className="nav-links">Logout</li>
            </ul>
        </div>
        </nav>
    );
};

export default NavBar;
