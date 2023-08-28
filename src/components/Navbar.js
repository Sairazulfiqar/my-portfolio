import React, {usestate} from 'react';
import "./Navbar.css";

//Importar iconos//
import {HiOutlineHome} from 'react-icons/hi';
import {HiOutlineChartBar} from 'react-icons/hi';
import {LuGraduationCap} from 'react-icons/lu';
import {PiSuitcaseSimple} from 'react-icons/pi';
import {BiMessageRounded} from 'react-icons/bi';
// //Import link from react library to have a smoth scroll through the page
import {Link} from 'react-scroll';

export const Navbar = () => {

    return(
        <nav className='Navbar'>
            <Link to='Home'> <HiOutlineHome/> </Link>
            <Link to='Skills'><HiOutlineChartBar/> </Link>  
            <Link to='Education'><LuGraduationCap/> </Link> 
            <Link to='Work'><PiSuitcaseSimple/></Link>
            <Link to='Contact'><BiMessageRounded/> </Link>
        </nav>
    )
};

export default Navbar;