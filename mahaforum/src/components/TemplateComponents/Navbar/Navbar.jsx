import React, {useState} from 'react';
import {NavbarRoutes} from '../../../routes/routes'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
            <nav className="navbar">
                <div className="">
                    <NavLink exact to='/' className='nav-logo'>
                        MahaForum
                        {/* <i className="fas fa-code"></i> */}
                    </NavLink>
                </div>

                <div className='navbar-content' >
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    {
                        NavbarRoutes.map((item, index)=>{
                            return (
                                <NavLink exact to = {NavbarRoutes[index].path} className='nav-links' onClick={handleClick} key={index}>{NavbarRoutes[index].label} </NavLink>
                                )
                            })
                        }
                    </ul>
                    <div className="nav-icon"  onClick={handleClick}>
                        <i className={click? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;
