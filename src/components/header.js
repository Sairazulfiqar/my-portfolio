import React, { useState, useEffect } from 'react';
import "../index.css";
import {BsSun} from 'react-icons/bs';
import {FaRegMoon} from 'react-icons/fa';
import femdev from '../img/femdev.png';


export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkmode');
        if (storedDarkMode !== null) {
            setDarkMode(storedDarkMode === 'true');
        }
    }, []);

    const handleDarkModeToggle = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkmode', newDarkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('darkmode');
        } else {
            document.body.classList.remove('darkmode');
        }
    }, [darkMode]);

    return (
        <div className='Header-main'>
            <div className='femdevv'>
                <img src={femdev} id='femdev' alt='femdev'/>

            </div>
            <div className="button1" onClick={handleDarkModeToggle}>
                <span className="btn__indicator">
                    <div className="btn__icon-container">
                        {/* Use the iconClass state to set the icon's class */}
                        <i className="btn__icon animated">
                            {darkMode ? <FaRegMoon /> : <BsSun />}
                        </i>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Header;