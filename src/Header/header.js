import React from 'react';
import style from '../Header/header.module.css';
import Navigation from '../Navigation/navigation';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';



const Header = () => {
    return (
        <>
            <Navbar className="header">
                <h1 className="name">James Martin</h1>
                <div className='links'>
                    <NavLink exact to='/about' className='link' href='/about'>About Me</NavLink>
                    <NavLink exact to='/portfolio' className='link' href='/portfolio'>Portfolio</NavLink>
                    <NavLink exact to='contact' className='link' href='/contact'>Contact Me</NavLink>
                    <NavLink exact to='resume' className='link' href='/resume'>Resume</NavLink>
                </div>
            </Navbar>
        </>
    )
}

export default Header;