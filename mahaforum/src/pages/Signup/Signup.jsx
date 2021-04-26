import React, { useState } from 'react'
import {ReactComponent as Hero} from '../../icons/hero-signup.svg'
import "./signup.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import app from "../../base";
import { useHistory } from 'react-router';
import { Container } from 'react-bootstrap';

const Signup = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")
    const handleSignUp = async event => {
        event.preventDefault();
        if(confirmPassword !== password){
            alert("Password confirmation doesn't match!")
            return;
        }
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(email, password);
          var user = app.auth().currentUser;
          user.updateProfile({
              displayName:fullname,
          })
          alert("Successfully created account!")
          history.push("/login");
        } catch (err) {
            alert(err);
        }
    }
    return (
        <Container>

            <div>
                <div className="row d-flex d-xl-flex">
                    <div className="col-lg-7">
                        <Hero className="img-fluid"/>
                    </div>
                <div className="col">
                <h3 style={{textAlign: "center"}}>Signup</h3>
                <form onSubmit={handleSignUp}>
                    <div className="form-group d-flex flex-column" style={{width:"65%",margin:"7px auto"}}>
                        <label style={{fontSize:"0.9rem"}} className="text-muted">Fullname</label>
                        <input onChange={e=>setFullname(e.target.value)} className="form-control" type="text" style={{borderRadius:"20px",border:"1px solid rgb(208,201,201)",height:"2.5rem"}}/></div>
                    <div className="form-group d-flex flex-column" style={{width:"65%",margin:"7px auto"}}>
                        <label style={{fontSize:"0.9rem"}} className="text-muted">Email</label>
                        <input onChange={e=>setEmail(e.target.value)} className="form-control" type="email" style={{borderRadius:"205px"}}/>
                    </div>
                    <div className="form-group d-flex flex-column" style={{width:"65%",margin:"7px auto"}}>
                        <label style={{fontSize:"0.9rem"}} className="text-muted">Password</label>
                        <input onChange={e=>setPassword(e.target.value)} className="form-control" type="password" style={{borderRadius:"205px"}}/>
                    </div>
                    <div className="form-group d-flex flex-column" style={{width:"65%",margin:"7px auto"}}>
                        <label style={{fontSize:"0.9rem"}} className="text-muted">Confirm password</label>
                        <input onChange={e=>setConfirmPassword(e.target.value)} className="form-control" type="password" style={{borderRadius:"205px"}}/>
                    </div>
                    <button className="btn btn-block" type="submit" style={{color:"white",borderRadius:"20px",border:"1px solid rgb(208,201,201)",height:"2.5rem", width:"55%",backgroundColor:"#6C63FF",margin:"30px auto"}}>Signup</button>
                    <p style={{textAlign:"center"}}>Already have an account? <a style={{cursor:"pointer", color:"blue"}} onClick={()=>history.push('/login')}>Login</a></p>
                </form>
            </div>
        </div>
            </div>
        </Container>
    )
}

export default Signup
