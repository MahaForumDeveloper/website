import React, { useCallback, useEffect, useState } from 'react'
import {ReactComponent as Hero} from '../../icons/hero-signup.svg'
import "../Signup/signup.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import app from "../../base";
import { useHistory } from 'react-router';
import {Container} from 'react-bootstrap';

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async event => {
        event.preventDefault();
        console.log(password,email)
        try{
            await app
            .auth()
            .signInWithEmailAndPassword(email, password);
            history.push("/");
        }
        catch (err){
            alert(err);
        }
      }

    return (
        <Container fluid="sm">
        <div>
            <div className="row d-flex d-xl-flex">
                <div className="col-lg-7">
                    <Hero className="img-fluid"/>
                </div>
            <div className="col">
            <h2 style={{textAlign: "center", marginTop:"2rem"}}>Login</h2>
            <form onSubmit={handleLogin} >
                <div className="form-group d-flex flex-column" style={{width:"65%"}}>
                    <label className="text-muted">Email or phone number</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className="form-control" type="text" style={{borderRadius:"20px",border:"1px solid rgb(208,201,201)",height:"2.5rem"}}/></div>
                <div className="form-group d-flex flex-column" style={{width:"65%",margin:"20px auto"}}>
                    <label className="text-muted">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} className="form-control" type="password" style={{borderRadius:"205px"}}/>
                </div>
                <button className="btn btn-block" type="submit" style={{color:"white",borderRadius:"20px",border:"1px solid rgb(208,201,201)",height:"2.5rem", width:"55%",backgroundColor:"#6C63FF",margin:"30px auto"}}>Login</button>
                <p style={{textAlign:"center"}}>Don't have an account?<a style={{cursor:"pointer", color:"blue"}} onClick={()=>history.push('/signup')}> Sign up</a></p>
            </form>
        </div>
    </div>
        </div>
        </Container>
    )
}

export default Login
