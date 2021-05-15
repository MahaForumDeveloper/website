import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./ProfileTabs.css"
// import {Container, Tabs, Tab, Card} from 'react-bootstrap'

const ProfileTabs = (props) => {
    const [tabsContent, setTabsContent] = useState({Biography:props.biography,Description:props.description,Portofolio:props.portofolio})
     useEffect(() => {
        setTabsContent({Biography:props.biography,Description:props.description,Portofolio:props.portofolio})
    }, [props])
    const [picked, setPicked ] = useState("Biography")
    return (
       <div>
            <Col>
                <Row className="picker">
                    {Object.keys(tabsContent).map(x=><h4 className={(x===picked ? "active" : "")} onClick={()=>setPicked(x)}>{x}</h4>)
                         }
                </Row>
                <hr/>
                <div >
                    <p>{tabsContent[picked]}</p>
                </div>           
            </Col>
        </div>
    )
}

export default ProfileTabs
