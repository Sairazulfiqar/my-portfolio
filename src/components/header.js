import React, { useState, useEffect } from 'react';
import "../App.css";
import {BsSun} from 'react-icons/bs';
import {FaRegMoon} from 'react-icons/fa';
import femdev from '../img/femdev.png';

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const darkmode = localStorage.getItem('darkmode');
        if (!darkmode) {
            localStorage.setItem('darkmode', false);
            setDarkMode(false);
        } else {
            setDarkMode(darkmode === 'true');
        }
    }, []);

    const handleDarkModeToggle = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkmode', newDarkMode);

        const icon = document.querySelector('.btn__icon');
        icon.classList.add('animated');

        setTimeout(() => {
            icon.classList.remove('animated');
        }, 500);
    };

    useEffect(() => {
        const icon = document.querySelector('.btn__icon');
        if (darkMode) {
            document.body.classList.add('darkmode');
            icon.classList.remove('BsSun');
            icon.classList.add('FaRegMoon');
        } else {
            document.body.classList.remove('darkmode');
            icon.classList.remove('FaRegMoon');
            icon.classList.add('BsSun');
        }
    }, [darkMode]);

    return (
        <div className='Header-main'>
            <div className='femdevv'>
                <img src={femdev} alt='' id='femdev'/>
            </div>
            {/* <div id='sunmoon'>  <FaRegMoon/> </div> */}
            <div className="button1"onClick={handleDarkModeToggle}>
                <span className="btn__indicator">
                    <div className="btn__icon-container">
                        <i className="btn__icon"> <BsSun/> </i>
                    </div>
                </span>
            </div>

        </div>
    )
}

export default Header;

