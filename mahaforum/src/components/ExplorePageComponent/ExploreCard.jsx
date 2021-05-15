import { Avatar, Card, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import app from '../../base';

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

const ExploreCard = ({userId, post}) => {
    const classes = useStyles()
    const [data, setData] = useState({})
    const history = useHistory()
    useEffect(() => {
        const getData = async () => {
            const tempData = await app.database().ref(`/users/${userId}`).get()
            setData(tempData.val())
            console.log(tempData.val())
        }
        getData()
    }, [])
    return (
        <Card className={classes.card}>
            <Container>
                <div className={classes.positioning}>
                    <IconButton className={classes.iconButton} >
                        <Avatar onClick={()=>history.push(`/profile/${userId}`)} fontSize='large' className={classes.icon} src={data.photoURL} />
                    </IconButton>
                    <h4 style={{marginTop:"0.5rem"}}>{data.displayName}</h4>
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
