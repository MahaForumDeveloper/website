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
            <Col xs={2}>
            <SideBar/>
            </Col>
            <Col xs={7}>
                <Search/>
                <ProfileCard/> 
                <div style={{borderRadius:"40px"}} className="shadow-sm p-3 mb-5 bg-body">
                    <ProfileTabs/>
                </div>
            </Col >
            <Col xs={3}>
                <RightNav />
                <ReviewMenu />
            </Col>
        </Row>
    )
}

export default Profile
