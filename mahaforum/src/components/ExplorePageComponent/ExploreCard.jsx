import { Button, Card, IconButton, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {makeStyles} from '@material-ui/core/styles'
import { Container } from 'react-bootstrap';

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
                />
            </Container>
            <div className={classes.positioning}>
                <div className={classes.gap}></div>
                <Button className={classes.button} variant="outlined">Post</Button>
            </div>
        </Card>
   )
}

export default ExploreCard
