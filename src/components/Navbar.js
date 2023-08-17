import React from 'react';
import "./Navbar.css";

//Importar iconos//
import {HiOutlineHome} from 'react-icons/hi';
import {HiOutlineChartBar} from 'react-icons/hi';
import {LuGraduationCap} from 'react-icons/lu';
import {PiSuitcaseSimple} from 'react-icons/pi';
import {BiMessageRounded} from 'react-icons/bi';
// import {BrowserRouter, Link} from 'react-router-dom';
// import Home from './Home';

// //link
// import {Link} from 'react-scroll';

export const Navbar = () => {
    return(
        <nav className='Navbar'>
            <a href="#Home" className='Active'> <HiOutlineHome/> </a>
            <a href='#Skills'><HiOutlineChartBar/> </a>  
            <a href='#Education'><LuGraduationCap/> </a> 
            <a href='#Work'><PiSuitcaseSimple/></a>
            <a href='#Contact'><BiMessageRounded/> </a>
        </nav>
    )
};

export default Navbar;