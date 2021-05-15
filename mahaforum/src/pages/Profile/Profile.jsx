import { Divider, TextField } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import ProfileCard from "../../components/ProfilePageComponents/ProfileCard";
import ProfileTabs from "../../components/ProfilePageComponents/ProfileTabs";
import Search from "../../components/shared/Search";
import app from '../../base'
import 'firebase/database'

const Profile = () => {
    const [modalShow, setModalShow] = useState(false);
    const ref = useRef(null)
    const [height, setHeight] = useState(false)
    const [data, setData] = useState({})
    useEffect( () => {
        const getData = async () => {
            const data = await app.database().ref(`users/${app.auth().currentUser.uid}`).get()
            setData(data.val())
        }
        getData()
    }, [height, modalShow])
    return (
        <>  
            <Search/>
            <ProfileCard clickFunction={setModalShow} ref={ref} {...data}/> 
            <div style={{borderRadius:"40px"}} className="shadow-sm p-3 mb-5 bg-body">
                <ProfileTabs {...data}/>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
         
   )
}

function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [biography, setBiography] = useState("")
    const [skill, setSkill] = useState("")
    const [portofolio, setPortofolio] = useState("")
    const postProfile = async () => {
        const user = app.auth().currentUser
        if(name.length!==0){
            await user.updateProfile({
                displayName: name,
            })
        }
        const postData = {}
        if(location.length !==0){
            postData["location"]=location
        }
        if(description.length !==0){
            postData["description"]=description
        }
        if(biography.length !==0){
            postData["biography"]=biography
        }
        if(skill.length !==0){
            postData["skill"]=skill
        }
        if(portofolio.length !== 0){
            postData["portofolio"]=portofolio
        }
        var updates = {}
        updates['/users/'+ user.uid] = postData  
        await app.database().ref().update(updates)
        alert("Successfully updated profile!")
        props.onHide()
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{maxHeight:"270.429px", overflow:"scroll"}}>
            <div style={{height:"1rem"}}>

            </div>
          <TextField
                    id="outlined-multiline-static"
                    label="Profile Name"
                    variant="outlined"
                    fullWidth
                    onChange={e=>setName(e.target.value)}
                />
            <div style={{height:"1rem"}}>

            </div>
        <TextField
                    id="outlined-multiline-static"
                    label="Profile Location"
                    variant="outlined"
                    fullWidth
                    onChange={e=>setLocation(e.target.value)}
                />
            <div style={{height:"1rem"}}>

            </div>
          <TextField
                    id="outlined-multiline-static"
                    label="Profile Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    onChange={e=>setDescription(e.target.value)}
                />
                
            <div style={{height:"1rem"}}>

            </div>
            <Divider style={{ background: 'black' }}  />
            <div style={{height:"1rem"}}>

            </div>
            <TextField
                    id="outlined-multiline-static"
                    label="Biography"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    onChange={e=>setBiography(e.target.value)}
                />
                
            <div style={{height:"1rem"}}>

            </div>
            <TextField
                    id="outlined-multiline-static"
                    label="Skill"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    onChange={e=>setSkill(e.target.value)}
                />
                
            <div style={{height:"1rem"}}>

            </div>
            <TextField
                    id="outlined-multiline-static"
                    label="Portofolio"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    onChange={e=>setPortofolio(e.target.value)}
                />
                
            <div style={{height:"1rem"}}>

            </div>
     </Modal.Body>
      <Modal.Footer>
        <Button onClick={postProfile} variant="success">Update Profile</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Profile
