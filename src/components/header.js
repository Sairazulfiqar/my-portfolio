import React from 'react';
import "../App.css";
import {BsSun} from 'react-icons/bs';
import {FaRegMoon} from 'react-icons/fa';
import femdev from '../img/femdev.png';

export const Header = () => {
    // const DarkModeToggle = () => {
    //     const { value, toggle } = useDarkMode(false)
    //     return (
    //         <button type='button' onClick={toggle}>
    //             {value ? '☀' : '☾'}
    //         </button>
    //     )
    // }
    return (
        <div className='Header-main'>
            <div className='femdevv'>
                <img src={femdev} alt='' id='femdev'/>
            </div>
            <div id='sunmoon'> <BsSun /> <FaRegMoon/> </div>
            
        </div>
    )
}

export default Header;

