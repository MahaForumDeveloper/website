import { Divider, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import ProfileCard from "../../components/ProfilePageComponents/ProfileCard";
import ProfileTabs from "../../components/ProfilePageComponents/ProfileTabs";
import Search from "../../components/shared/Search";
import app from '../../base'
import 'firebase/database'
import 'firebase/storage'
import { useParams } from 'react-router';

const Profile = () => {
    const {user} = useParams();
    const [modalShow, setModalShow] = useState(false);
    const ref = useRef(null)
    const [height, setHeight] = useState(false)
    const [data, setData] = useState({})
    useEffect( () => {
        const getData = async () => {
            const data = await app.database().ref(`users/${user}`).get()
            setData(data.val())
        }
        getData()
    }, [height, modalShow, user])
    return (
        <>  
            <Search initial={[]} setData={()=>{}}/>
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
    const [photo, setPhoto] = useState(null)
    const [projectType, setProjectType] = useState("")
    const [institution, setInstitution] = useState("")
    const [criterias, setCriterias] = useState("")
    const [type, setType] = useState("")
    const [contact, setContact] = useState("")
    const [prototype, setPrototype] = useState("")

    const postProfile = async () => {
        const user = app.auth().currentUser
        const postData = (await app.database().ref().child('users').child(user.uid).get()).val()
        let projectData = (await app.database().ref().child('projectPost').child(user.uid).get()).val()
        if(projectType!==""){
            projectData = {...projectData, postType:projectType}
        }
        if(institution!==""){
            projectData = {...projectData, institution}
        } 
        if(criterias!==""){
            projectData = {...projectData, criterias}
        }
        if(type!==""){
            projectData = {...projectData, type}
        }
        if(contact!==""){
            projectData = {...projectData, contact:`https://api.whatsapp.com/send?phone=${"62"+contact.substring(1,contact.length-1)}`}
        }
        if(prototype!==""){
            projectData = {...projectData, prototype}
        }
        if(name !== ""){
            await user.updateProfile({
                displayName: name,
            })
            postData["displayName"] = name
            projectData = {...projectData, name}
        }else{
            projectData = {...projectData, name:app.auth().currentUser.displayName}
        }
        if(photo){
            await app.storage().ref().child(`${app.auth().currentUser.uid}.jpg`).child(`${photo.name}`).put(photo)
            const link = await app.storage().ref().child(`${app.auth().currentUser.uid}.jpg`).child(`${photo.name}`).getDownloadURL()
            await user.updateProfile({
                photoURL:link,
            })
            postData["photoURL"]=link
        }
        if(location !== ""){
            postData["location"]=location
        }
        if(description !== ""){
            postData["description"]=description
        }
        if(biography !== ""){
            postData["biography"]=biography
        }
        if(skill !== ""){
            postData["skill"]=skill
        }
        if(portofolio !== ""){
            postData["portofolio"]=portofolio
        }
        
        var updates = {}
        updates['/users/'+ user.uid] = postData  
        updates['/projectPost/'+user.uid] = projectData
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
          <h3>Profile Card</h3>
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
            <div style={{padding:"0.5rem", border:"1px solid rgb(182, 178, 178)", borderRadius:".3rem"}}>
                <label for="avatar" style={{color:"rgb(182, 178, 178)"}}>Profile Picture:</label>
                <div style={{height:"1rem"}}>
                </div>
                <input type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={e=>setPhoto(e.target.files[0])}
                    ></input>
            </div>
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
            <h3>Profile Tabs</h3>
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
            <Divider style={{ background: 'black' }}  />
            <div style={{height:"1rem"}}>

            </div>
            <h3>Project Post</h3>
            <div style={{height:"1rem"}}>

            </div>
            <FormControl style={{ padding:".5rem", border:"1px solid rgb(182, 178, 178)", borderRadius:".3rem",width:"100%", marginBottom:"1rem"}}>
                <InputLabel style={{padding:".5rem"}} id="demo-simple-select-label">Post Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projectType}
                onChange={e=>setProjectType(e.target.value)}
                fullWidth
                >
                    <MenuItem value={"Professional"}>Professional</MenuItem>
                    <MenuItem value={"Creative"}>Creative</MenuItem>
                </Select>
            </FormControl>
            <TextField
                    id="outlined-multiline-static"
                    label="Institution"
                    variant="outlined"
                    fullWidth
                    onChange={e=>setInstitution(e.target.value)}
                />
            <div style={{height:"1rem"}}>

            </div>
            <TextField
                    id="outlined-multiline-static"
                    label="Criterias"
                    multiline
                    rows={2}
                    variant="outlined"
                    fullWidth
                    onChange={e=>setCriterias(e.target.value)}
                />
            <div style={{height:"1rem"}}>

            </div>
            <TextField
                    id="outlined-multiline-static"
                    label="Project Type"
                    variant="outlined"
                    fullWidth
                    onChange={e=>setType(e.target.value)}
                />
            <div style={{height:"1rem"}}>

            </div>
            <TextField
                    id="outlined-multiline-static"
                    label="Contact number"
                    variant="outlined"
                    fullWidth
                    onChange={e=>setContact(e.target.value)}
                />
            <div style={{height:"1rem"}}>

            </div>
            {
                (projectType === "Professional")
                &&
                    <TextField
                            id="outlined-multiline-static"
                        label="Prototype URL"
                        variant="outlined"
                        fullWidth
                        onChange={e=>setPrototype(e.target.value)}
                    />
            } 
     </Modal.Body>
      <Modal.Footer>
        <Button onClick={postProfile} variant="success">Update Profile</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Profile
