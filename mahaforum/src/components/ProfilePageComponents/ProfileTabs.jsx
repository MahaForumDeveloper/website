import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./ProfileTabs.css"
// import {Container, Tabs, Tab, Card} from 'react-bootstrap'
const tabsContent = {
    Biography:"loremfsmadlfaslfmks dmfldksafmlkd sfml;samfk; asmlfksadmflksasdfsd;sdasdfasaasa;",
    Skill:"fdkmasdklfmsadlfksmda flsadkfmasfsdflk",
    Portofolio:"asdmfldkfmasdlfmsdk fmldafkmsadfmksdlmflkdmslfks mdklfmaskmflmsadflskmfksafdmalkfmsldfkmadlfsf"
}
const ProfileTabs = () => {
    const [picked, setPicked ] = useState("Biography")
    const [content, setContent] = useState(tabsContent[Object.keys(tabsContent)[0]])
    useEffect(() => {
      console.log(picked) 
    }, [picked])
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
