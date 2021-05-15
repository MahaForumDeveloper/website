import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './LandingPageFullscreen.css';
import LandingPagePict from '../../../icons/landingpage_pict.svg';
import { AuthContext } from '../../../Auth';

const LandingPageFullscreen = () => {
    const [izin, setIzin] = useState("/login")
    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) {
            setIzin("/profile")
        } 
    }, [])
    return(
        <div className="bgLandingPageFull">
            <div className="contentLandingPageFull">
                <div className="jumbotronFull">
                    <h2>Find Your Partner</h2>
                    <h5>Connecting all students in Indonesia and turn your ideas into reality with MahaForum</h5>
                    <div className="buttonFull">
                    <Link to={izin} className="buttonFull"><button>Get Started</button></Link>
                </div>
                </div>
            </div>
         <div>
                <img src={LandingPagePict} className="pictFull"></img>
            </div>
        </div>
    )
}

export default LandingPageFullscreen;