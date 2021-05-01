import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./ProfileTabs.css"
// import {Container, Tabs, Tab, Card} from 'react-bootstrap'

const ProfileTabs = () => {
    return (
        <div style={{borderRadius:"40px"}} >
            <Col>
                <Row className="picker">
                    <h4>Biography</h4>
                    <h4>Skill</h4>
                    <h4>Portofolio</h4>
                </Row>
                <hr/>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum corrupti atque quod asperiores voluptates id! Eaque repellat sunt quia voluptatibus nam voluptatum ex, perferendis veniam maxime dolore, quam earum quos!</p>
                </div>
            </Col>
        </div>
    )
}

export default ProfileTabs
