import React from 'react';
// import "./Navbar.css"
//Importar iconos//
import {BiHome} from 'react-icons/bi';
import {IoPersonOutline} from 'react-icons/io5';
import {BiMessageRounded} from 'react-icons/bi';
import {LuGraduationCap} from 'react-icons/lu'

//link
import {Link} from 'react-scroll';

export const Navbar = () => {
    return(
        <nav className="Nav-main">
            <div className="Navbar"> <BiHome/> </div>
            <div className='Navbar'> <IoPersonOutline/>  </div>
            <div className='Navbar'> <LuGraduationCap/>  </div>
            <div className='Navbar'> <BiMessageRounded/>  </div>
        </nav>
    )
};

export default Navbar;