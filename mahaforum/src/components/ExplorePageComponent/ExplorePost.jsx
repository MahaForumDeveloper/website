import { Button, Card, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import 'firebase/database';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import app from '../../base';

const useStyles = makeStyles( (theme)=> ({
   input:{
       margin:5
   },
   button:{
       margin:10,
       position:"absolute",
       right:70,
   },
   gap:{
       height:60,
   },
   inputField:{
       marginTop:10,
       marginLeft:10,
       width:"80%"
   },
   iconButton:{
       color:"black"
   },
   icon:{
       fontSize:40
   },
   positioning:{
       marginTop:10,
       display:"flex"
   }
}))

const ExploreCard = () => {
    const classes = useStyles()
    const [post, setPost] = useState("")
    const handlePost = async () => {
        const userDisplayName = app.auth().currentUser.displayName
        const userPhoto = app.auth().currentUser.photoURL
        if(post===""){alert('Cannot post nothing!')}
        else{
            const postRef = app.database().ref('requests')
            try {
                await postRef.push({post, userDisplayName, userPhoto})
                alert("Successfully posted!")
                setPost()
            } catch(err) {
                alert(err)
            }
        }
    }
    return (
        <Card>
            <Container className={classes.input}>
                <IconButton className={classes.iconButton} >
                        <AccountCircleOutlinedIcon fontSize='large' className={classes.icon} />
                </IconButton>
                <TextField
                    id="outlined-multiline-static"
                    label="Post"
                    multiline
                    rows={4}
                    variant="outlined"
                    className={classes.inputField}
                    onChange={e=>setPost(e.target.value)}
                />
            </Container>
            <div className={classes.positioning}>
                <div className={classes.gap}></div>
                <Button onClick={handlePost} className={classes.button} variant="outlined">Post</Button>
            </div>
        </Card>
   )
}

export default ExploreCard
