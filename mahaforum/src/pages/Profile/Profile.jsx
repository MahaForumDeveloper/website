import { Row, Col } from "react-bootstrap"
import ProfileCard from "../../components/ProfilePageComponents/ProfileCard"
import ProfileTabs from "../../components/ProfilePageComponents/ProfileTabs"
import Search from "../../components/shared/Search"
import SideBar from "../../components/shared/sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewMenu from "../../components/ProfilePageComponents/RightMenu/ReviewMenu"
import RightNav from "../../components/ProfilePageComponents/RightMenu/RightNav"

const Profile = () => {
    return (
        <Row>
            <Col style={{padding:"0",borderRight:"1.5px solid black"}}>
                <SideBar/>
            </Col>
            <Col xs={7}>
                <Search/>
                <ProfileCard/> 
                <div style={{borderRadius:"40px"}} className="shadow-sm p-3 mb-5 bg-body">
                    <ProfileTabs/>
                </div>
            </Col >
            <Col style={{padding:"0"}}>
                <RightNav />
                <ReviewMenu style={{borderRadius:"40px"}} />
            </Col>
        </Row>
    )
}

export default Profile
