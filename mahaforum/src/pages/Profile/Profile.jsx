import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from "react";
import ProfileCard from "../../components/ProfilePageComponents/ProfileCard";
import ProfileTabs from "../../components/ProfilePageComponents/ProfileTabs";
import Search from "../../components/shared/Search";

const Profile = () => {
    const ref = useRef(null)
    const [height, setHeight] = useState(false)
    useEffect( () => {
        console.log(ref.current)
    }, [height])
    return (
        <>  
            <Search/>
            <ProfileCard ref={ref}/> 
            <div style={{borderRadius:"40px"}} className="shadow-sm p-3 mb-5 bg-body">
                <ProfileTabs/>
            </div>
        </>
         
   )
}

export default Profile
