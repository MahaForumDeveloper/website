import { Card, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react';
import { Container } from 'react-bootstrap';

const useStyles = makeStyles( (theme)=> ({
    card:{
        marginTop:21
    },
   input:{
       display:"flex",
       margin:5
   },
   button:{
       color:"black",
       position:"absolute",
       right:70,
   },
   gap:{
       height:60,
   },
   inputField:{
       marginTop:10,
       marginLeft:10,
       width:"90%",
       textAlign:"justify",
   },
   iconButton:{
        display:"block",
       color:"black"
   },
   icon:{
       fontSize:40
   },
   positioning:{
       marginTop:5,
       marginBottom:5,
       display:"flex",
       alignItems:"center"
   }
}))

const ExploreCard = ({userDisplayName, userPhoto, post}) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <Container>
                <div className={classes.positioning}>
                    <IconButton className={classes.iconButton} >
                            <AccountCircleOutlinedIcon fontSize='large' className={classes.icon} />
                    </IconButton>
                    <h4 style={{marginTop:"0.5rem"}}>{userDisplayName}</h4>
                </div>  
                <div className={classes.inputField}>
                    {post}
                </div>
            </Container>
            <div className={classes.positioning}>
                <div className={classes.gap}></div>
                <IconButton className={classes.button} >
                        <FavoriteBorderIcon fontSize='large' className={classes.icon} />
                </IconButton>
            </div>
        </Card>
   )
}

export default ExploreCard
