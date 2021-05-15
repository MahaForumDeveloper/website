import React from 'react';
import { IconButton, Grid, Avatar} from '@material-ui/core'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import useStyles from './RightNavStyles.jsx'
import app from '../../../base.js';
import { useHistory } from 'react-router';


const RightNav = () => {
    const classes = useStyles();
    const history = useHistory();
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
                    <h5 className={classes.navTitleName}>{app.auth().currentUser.displayName[0]}</h5>
                    <h6 className={classes.navTitleJob}>As Professional</h6>
                </div>
            </Grid>
            <Grid item>
                <IconButton className={classes.navButton} >
                    <MoreHorizOutlinedIcon  />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default RightNav;
