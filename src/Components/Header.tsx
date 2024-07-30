import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import header from '../Styles/Header.module.scss'; // Import your SCSS file if needed

const Header: React.FC = () => {
    return (
        <header className={header.header}>
        <h3 className={header.headerTitle}>Game Dev.</h3>
            <nav className={header.headerNav}>
                <ul>
                    <li className={header.liClass}>
                        <NavLink 
                            to="/" 
                            end
                            className={({ isActive }) => isActive ? header.active : undefined}>
                            Home
                        </NavLink>
                    </li>
                    <li className={header.liClass}>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => isActive ? header.active : undefined}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
