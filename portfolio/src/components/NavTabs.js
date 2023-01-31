import React from "react";
import '../styles/Navbar.css';


export default function NavTabs({ setcurrentPage }) {
    const handlePageChange = (page) => setcurrentPage(page);
    return (
        <nav class="navbar">
            <ul className="nav nav-tabs">
                <li className="nav-item">

                    <a href="#about"
                        onClick={() => handlePageChange('About')}
                    >About</a>
                </li>
                <li className="nav-item">

                    <a href="#Portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                    >Portfolio</a>
                </li>
                <li className="nav-item">

                    <a href="#Resume"
                        onClick={() => handlePageChange('Resume')}
                    >Resume</a>
                </li>
                <li className="nav-item">

                    <a href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                    >Contact</a>
                </li>
            </ul>
        </nav>
    );
}

