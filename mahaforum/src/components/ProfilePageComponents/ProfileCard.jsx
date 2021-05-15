import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import app from '../../base'
import "./ProfileCard.css"
import SettingsIcon from '@material-ui/icons/Settings';
import { IconButton } from '@material-ui/core';

const ProfileCard = ({ref, clickFunction, description, location, photoURL, displayName}) => {
    return (
       <Card className="shadow-sm p-3 mb-5 bg-white" style={{borderRadius:"40px"}} ref={ref}>
            <IconButton onClick={()=>clickFunction(true)} style={{position:"absolute", right:"1.5rem"}} >
                <SettingsIcon/>
            </IconButton>
            <div className="card-body d-flex flex-column align-items-start align-content-start">
                <div className="d-flex">
                    <img src={photoURL ? photoURL : "/images/user2.png"} style={{border:"2px solid black",borderRadius:"50%",width:"120px",height:"120px",margin:"0px", marginRight:"34px"}}/>
                    <div>
                        <h4>{displayName}</h4>
                        <h5><i className="fa fa-map-marker" style={{fontSize:"1.2rem"}}></i> {location}</h5>
                        <p style={{fontSize:"0.8rem"}}>{description}</p>
                    </div>
                </div>
            </div> 
       </Card> 
    )
}

export default ProfileCard
