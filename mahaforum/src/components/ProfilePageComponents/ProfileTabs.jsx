import React from 'react'
import {Container, Tabs, Tab, Card} from 'react-bootstrap'
const ProfileTabs = () => {
    return (
        <Card className="shadow-sm p-3 mb-5 bg-white rounded">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <hr/>
                <Tab eventKey="home" title="Home">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptate magni minima itaque tenetur necessitatibus. In magni dignissimos deleniti voluptate. Ab molestias saepe omnis soluta accusamus odit delectus repudiandae fugiat tempora iste placeat animi doloribus sint, sit, vel laboriosam? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos aut tempora eius culpa exercitationem ducimus laborum ea maiores saepe.</p>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos aut tempora eius culpa exercitationem ducimus laborum ea maiores saepe.</p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Container>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos aut tempora eius culpa exercitationem ducimus laborum ea maiores saepe.</p>
                    </Container>
                </Tab>
            </Tabs>
        </Card>
    )
}

export default ProfileTabs
