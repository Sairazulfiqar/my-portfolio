import React, { useState, useEffect } from 'react';
import "../App.css";
import {BsSun} from 'react-icons/bs';
import {FaRegMoon} from 'react-icons/fa';
import femdev from '../img/femdev.png';


const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [iconClass, setIconClass] = useState('btn__icon'); // Initial class for the icon
    // const [isAnimated, setIsAnimated] = useState(false); //Animation for the icon

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

        // // Set the class for the icon
        setIconClass(newDarkMode ? 'btn__icon FaRegMoon' : 'btn__icon BsSun');
        
        // // Trigger animation by setting isAnimated to true
        // setIsAnimated(true);

        // // Remove the animation class after a delay
        // setTimeout(() => {
        //     setIsAnimated(false);
        // }, 500);

        // Optionally, you can add a class for animation here as well.
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