import React from "react";
import '../Header/header.module.css';

const Navigation = () => {
    return (
    <nav>
        <ul>
            <li> <a className="nav-links" href="#About-Me">About Me</a></li>
            <li> <a className="nav-links" href="#Portfolio">Portfolio</a></li>
            <li> <a className="nav-links" href="#Contact-Me">Contact Me</a></li>
            <li> <a className="nav-links" href="#Resume">Resume</a></li>
        </ul>
    </nav>
    )
}

export default Navigation;
