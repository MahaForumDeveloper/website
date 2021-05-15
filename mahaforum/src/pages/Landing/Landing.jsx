import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LandingPageFullscreen from '../../components/LandingPageComponents/fullscreen/LandingPageFullscreen';
import LandingPageMinimalized from '../../components/LandingPageComponents/minimalized/LandingPageMinimalized';
import './Landing.css';

const useScreen = () => {
    const isMinimalized = useMediaQuery({maxWidth:600});
    if(isMinimalized){
        return "minimalized"
    }
    return "fullscreen"
}

const Landing = () => {
    var layout;
    const screenType = useScreen();
    if (screenType==="minimalized"){
        layout = (
            
            <LandingPageMinimalized/>
        )
    } else {
        layout = (
            <LandingPageFullscreen/>
        )
    }

    return (
        <div>
            {layout}
        </div>
    )
}
export default Landing

