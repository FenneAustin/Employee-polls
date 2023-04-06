import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";



const NavBar = () => {

    return (
        <nav className="flex">
        <div className="flex">
            <ul className="flex">
                <li className="nav-links">Home</li>
                <li className="nav-links">Leaderboard</li>
                <li className="nav-links">New</li>
            </ul>
        </div>

        <div className="flex">
            <ul className="flex">
                <li className="nav-links">profile</li>
                <li className="nav-links">Logout</li>
            </ul>
        </div>
        </nav>
    );
};

export default NavBar;
