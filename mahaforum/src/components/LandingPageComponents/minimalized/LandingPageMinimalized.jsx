import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './LandingPageMinimalized.css';
import LandingPagePict from '../../../icons/landingpage_pict.svg';
import { AuthContext } from '../../../Auth';
import app from '../../../base';

const LandingPageMinimalized = () => {
    const [izin, setIzin] = useState("/login")
    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) {
            setIzin(`/profile/${app.auth().currentUser.uid}`)
        } else {
            setIzin('/login')
        } 
    }, [])

    return(
        <div className="bgLandingPageMini">
            <div className="titleMini">
                <h1>MahaForum</h1>
            </div>
            <div className="jumbotronMini">
                <h2>Find Your Partner</h2>
                <h5>Connecting all students in Indonesia and turn your ideas into reality with MahaForum</h5>
            </div>
            <div className="buttonMini">
                <Link to={izin} className="buttonMini"><button>Get Started</button></Link>
            </div>
            <div>
                <img src={LandingPagePict} className="pictMini"></img>
            </div>
        </div>
    )
}

export default LandingPageMinimalized;