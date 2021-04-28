import React from 'react'
import { Card } from 'react-bootstrap'
import "./ProfileCard.css"
const ProfileCard = () => {
    return (
       <Card className="shadow-sm p-3 mb-5 bg-white rounded" >
            <div className="card-body d-flex flex-column align-items-start align-content-start">
                <div className="d-flex">
                    <img src="/images/user2.png" style={{margin:"0px", marginRight:"34px"}}/>
                    <div>
                        <h3>Satria Dwi Bagaskara</h3>
                        <h3><i className="fa fa-map-marker" style={{fontSize:"1.75rem"}}></i>  Sragen, Jawa Tengah</h3>
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
