import React from 'react';
import { IconButton, Grid} from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import useStyles from './RightNavStyles.jsx'


const RightNav = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.navContainer} justify='center' alignItems='center' className={classes.navContainer}>
            <Grid item>
                <IconButton className={classes.navButton} >
                    <NotificationsActiveOutlinedIcon fontSize='large' className={classes.navIcon} />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton className={classes.navButton} >
                    <AccountCircleOutlinedIcon fontSize='large' className={classes.navIcon} />
                </IconButton>
            </Grid>
            <Grid item>
                <div className={classes.navTitleText}>
                    <h5 className={classes.navTitleName}>Satria D.</h5>
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
