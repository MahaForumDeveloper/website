import React from 'react'
import { Spinner } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'

const Loading = () => {
    return (
        <>
            <div style={{height:"100vh"}} className="d-flex flex-column align-items-center justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <br/>
                <h4>
                    <Typewriter 
                    onInit={typewriter=>{
                        typewriter
                        .typeString("Loading...")
                        .pauseFor(1000)
                        .deleteAll()
                        .start()
                    }}
                    options={{
                        loop:true,
                        autoStart:true
                    }}
                    />
                </h4>
            </div>
    </>
    )
}

export default Loading
