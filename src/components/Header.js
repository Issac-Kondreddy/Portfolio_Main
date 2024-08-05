import React from 'react';
import '../styles/components/header.css';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
    return (
        <header className="header">
            <div className="header-nav">  {/* Wrapper for the nav only */}
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#publications">Publications</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a></li>
                    </ul>
                </nav>
            </div>
            <ThemeSwitcher />
        </header>
    );
}

export default Header;
