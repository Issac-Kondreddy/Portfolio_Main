import React, { useState, useEffect } from 'react';
import '../styles/components/themeSwitcher.css';  // Ensure the path is correct

function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const isDark = theme === 'dark';

    return (
        <div className="theme-switcher">
            <span className="theme-text">{isDark ? 'Dark' : 'Light'} Mode</span>
            <label className="switch">
                <input type="checkbox" onChange={() => setTheme(isDark ? 'light' : 'dark')} checked={isDark} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default ThemeSwitcher;
