import React, {useContext, useState} from 'react';
import {NavbarRoutes} from '../../../routes/routes'
import {NavLink, useLocation} from 'react-router-dom'
import './Navbar.css'
import {AllOpenRoutes} from '../../../routes/routes';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../../Auth';

const AllOpenRoutesPath = AllOpenRoutes.map(route=>route.path)

const Navbar = () => {
    const location = useLocation();
    const {currentUser} = useContext(AuthContext);

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    if(AllOpenRoutesPath.includes(location.pathname)){
        return (
                <nav className="navbar">
                    <div className="">
                        <NavLink exact to='/' className='nav-logo'>
                            MahaForum
                        </NavLink>
                    </div>
    
                    <div className='navbar-content' >
                        <ul className={click? 'nav-menu active' : 'nav-menu'}>
                            
                        { currentUser ? <Button variant="outline-danger">Log out</Button> : 
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
    return <></>
}

export default Navbar;
