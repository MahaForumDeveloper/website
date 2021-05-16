import React, { useRef, useState } from 'react';
import { IconButton, Grid, Avatar, Button} from '@material-ui/core'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import useStyles from './RightNavStyles.jsx'
import app from '../../../base.js';
import { useHistory } from 'react-router';
import { Overlay } from 'react-bootstrap';


const RightNav = () => {
    const classes = useStyles();
    const history = useHistory();
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <Grid container justify='center' alignItems='center' className={classes.navContainer}>
            <Grid item>
                <IconButton className={classes.navButton} >
                    <NotificationsActiveOutlinedIcon fontSize='large' className={classes.navIcon} />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton className={classes.navButton} >
                    <Avatar onClick={()=>history.push(`/profile/${app.auth().currentUser.uid}`)} fontSize='large' className={classes.navIcon} src={app.auth().currentUser.photoURL} />
                </IconButton>
            </Grid>
            <Grid item>
                <div className={classes.navTitleText}>
                    <h5 className={classes.navTitleName}>{app.auth().currentUser.displayName}</h5>
                </div>
            </Grid>
            <Grid item>
                <IconButton ref={target} onClick={()=>setShow(!show)} className={classes.navButton} >
                    <MoreHorizOutlinedIcon  />
                </IconButton>
                <Overlay target={target.current} show={show} placement="bottom">
                    {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                        {...props}
                        style={{
                        backgroundColor: 'black',
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                        }}
                    >
                        <Button style={{color:"white"}} color="primary">Edit Project Post</Button>
                </div>
                )}
            </Overlay>
            </Grid>
        </Grid>
    );
}

export default RightNav;
