import { Row, Col } from "react-bootstrap"
import ProfileCard from "../../components/ProfilePageComponents/ProfileCard"
import ProfileTabs from "../../components/ProfilePageComponents/ProfileTabs"
import Search from "../../components/shared/Search"


const Profile = () => {
    return (
        <Row>
            <Col></Col>
            <Col xs={8}>
                <Search/>
                <ProfileCard/> 
                <ProfileTabs/>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Profile
