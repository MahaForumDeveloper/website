import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import app from '../../base'
import "./ProfileCard.css"
const ProfileCard = () => {
    const [user, setUser] = useState("")
    useEffect(() => {
        setUser(app.auth().currentUser)
    }, [])
    return (
       <Card className="shadow-sm p-3 mb-5 bg-white" style={{borderRadius:"40px"}}>
            <div className="card-body d-flex flex-column align-items-start align-content-start">
                <div className="d-flex">
                    <img src="/images/user2.png" style={{width:"160px",height:"160px",margin:"0px", marginRight:"34px"}}/>
                    <div>
                        <h4>{user.displayName}</h4>
                        <h4><i className="fa fa-map-marker" style={{fontSize:"1.4rem"}}></i>  Sragen, Jawa Tengah</h4>
                        <p>I have over 4 years experience of WordPress. I am specialized in WordPress and WooCommerce, WordPress Theme Customization and Theme... More </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex">
                        <h1>Heading</h1>
                    </div>
                    <div className="col d-flex">
                        <h1>Heading</h1>
                    </div>
                </div>
            </div> 
       </Card> 
    )
}

export default ProfileCard