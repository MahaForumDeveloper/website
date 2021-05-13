import React from 'react'
import { Row, Col } from "react-bootstrap"
import SideBar from "../../components/shared/sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import RightNav from "../../components/ProfilePageComponents/RightMenu/RightNav"
import { useLocation } from 'react-router';
import { ThreeColsLayoutRoutes} from '../../routes/routes'
import ReviewMenu from '../ProfilePageComponents/RightMenu/ReviewMenu';
import Inbox from './Inbox'
import Notification from './Notification'


const ThreeColsLayout = ThreeColsLayoutRoutes.map(x=>x.path)

const Layout = ({children}) => {
    const location = useLocation();
    if(location.pathname === '/profile' || location.pathname === '/Profile')
    {
        return (
       <Row style={{minHeight:"100vh"}}>
            <Col style={{padding:"0",borderRight:"1.5px solid black"}}>
                <SideBar/>
            </Col>
            <Col xs={7}>
                {children}
            </Col >
            <Col style={{padding:"0"}}>
                <RightNav />
                <ReviewMenu />
            </Col>
        </Row>
        ) 
    }
    if(ThreeColsLayout.includes(location.pathname))
    {
        return (
            <Row style={{minHeight:"100vh"}}>
                <Col style={{padding:"0",borderRight:"1.5px solid black"}}>
                    <SideBar/>
                </Col>
                <Col xs={7}>
                    {children}
                </Col >
                <Col style={{padding:"0"}}>
                    <RightNav />
                    <Notification />
                    <Inbox />
                </Col>
            </Row>
        )
    }
    return <>
       {children} 
    </> 
}
export default Layout
