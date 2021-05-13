import React from 'react';
import { Card, Typography, Grid} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles( (theme) => ({
    notification:{
        borderTop: '1px solid black',
        margin:'2px 0',
        marginLeft:'2rem',
        fontSize:'1.2rem',
        padding:'5px',

        // Blank area using margin

        marginBottom:'200px',

    },
}))

const Notification = () => {
    const classes = useStyles()

    return (
        <div className={classes.notification} >
            <p>Notification</p>
        </div>
    );
}

export default Notification;
