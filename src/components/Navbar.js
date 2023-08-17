import React from 'react';
import "./Navbar.css";

//Importar iconos//
import {HiOutlineHome} from 'react-icons/hi';
import {HiOutlineChartBar} from 'react-icons/hi';
import {LuGraduationCap} from 'react-icons/lu';
import {PiSuitcaseSimple} from 'react-icons/pi';
import {BiMessageRounded} from 'react-icons/bi';
// import {BrowserRouter, Link} from 'react-router-dom';
import Home from './Home';

// //link
// import {Link} from 'react-scroll';

export const Navbar = () => {
    return(
        <nav className='Navbar'>

            {/* <Link onClick={this.handleScroll} to="Home"> <HiOutlineHome/> </Link> */}
            <div className='Nav-parts'> <a href='Skills'><HiOutlineChartBar/> </a>  </div>
            <div className='Nav-parts'> <a href='Education'><LuGraduationCap/> </a>  </div>
            <div className='Nav-parts'> <a href='Work'><PiSuitcaseSimple/></a>  </div>
            <div className='Nav-parts'> <a href='Contact'><BiMessageRounded/> </a> </div>
        </nav>
    )
};

export default Navbar;