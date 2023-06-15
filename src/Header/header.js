import React from 'react';
import style from '../Header/header.module.css';
import Navigation from '../Navigation/navigation';



const Header = () => {
    return (
        <>
            <div className="header">
                <h1 className= "centered">James Martin</h1>
                <nav>
                    <ul>
                        <li> <a className="nav-links" href="#About-Me">About Me</a></li>
                        <li> <a className="nav-links" href="#Portfolio">Portfolio</a></li>
                        <li> <a className="nav-links" href="#Contact-Me">Contact Me</a></li>
                        <li> <a className="nav-links" href="#Resume">Resume</a></li>
                    </ul>
                </nav>

            </div>


        </>
    )
}

export default Header;