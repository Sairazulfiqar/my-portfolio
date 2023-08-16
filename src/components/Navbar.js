import React from 'react';
// import "./Navbar.css"
//Importar iconos//
import {BiHome} from 'react-icons/bi';
import {IoPersonOutline} from 'react-icons/io5';
import {BiMessageRounded} from 'react-icons/bi';
import {LuGraduationCap} from 'react-icons/lu'
import {Link} from 'react-router-dom';

// //link
// import {Links} from 'react-scroll';

export const Navbar = () => {
    return(
        <nav className='Navbar'>
            <div className='Nav-parts'> <BiHome/> </div>
            <div className='Nav-parts'> <IoPersonOutline/>  </div>
            <div className='Nav-parts'> <LuGraduationCap/>  </div>
            <div className='Nav-parts'> <BiMessageRounded/>  </div>
        </nav>
    )
};

export default Navbar;