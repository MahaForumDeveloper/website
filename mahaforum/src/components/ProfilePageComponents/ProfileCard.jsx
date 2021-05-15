import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import app from '../../base'
import "./ProfileCard.css"
import SettingsIcon from '@material-ui/icons/Settings';
import { IconButton } from '@material-ui/core';

const ProfileCard = ({ref, clickFunction, description, location}) => {
    const [user, setUser] = useState("")
    useEffect(() => {
        setUser(app.auth().currentUser)
    }, [])
    return (
       <Card className="shadow-sm p-3 mb-5 bg-white" style={{borderRadius:"40px"}} ref={ref}>
            <IconButton onClick={()=>clickFunction(true)} style={{position:"absolute", right:"1.5rem"}} >
                <SettingsIcon/>
            </IconButton>
            <div className="card-body d-flex flex-column align-items-start align-content-start">
                <div className="d-flex">
                    <img src={user.photoURL ? user.photoURL : "/images/user2.png"} style={{width:"120px",height:"120px",margin:"0px", marginRight:"34px"}}/>
                    <div>
                        <h4>{user.displayName}</h4>
                        <h5><i className="fa fa-map-marker" style={{fontSize:"1.2rem"}}></i> {location}</h5>
                        <p style={{fontSize:"0.8rem"}}>{description}</p>
                    </div>
                </div>
            </div> 
       </Card> 
    )
}

export default ProfileCard
