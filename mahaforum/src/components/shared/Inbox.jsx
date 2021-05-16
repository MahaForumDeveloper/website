import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Grid, IconButton} from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const data = [
    {
        nama:'Firman'
    },
    {
        nama:'Raffly'
    },
    {
        nama:'Thoriq'
    },
    {
        nama:'Pahlevi'
    },
]


const useStyles = makeStyles(theme=>({
    inboxContainer:{
        borderTop: '1px solid black',
        fontSize: '1.2rem',
        marginLeft: '2rem',
        padding: '5px',
        margin: '2px 0',
        '& p':{
            fontWeight:'5000'
        }

    },
    buttonStyles:{
        color:'black'
    }
}))


const Inbox = () => {
    const classes = useStyles();

    return (
        <div className={classes.inboxContainer}>
            <Grid container>
                <Grid sm={8}>
                    <p style={{margin:'2px 0'}}>Inbox</p>
                </Grid>
                <Grid sm={2}>
                    <IconButton className={classes.buttonStyle}>
                        <SearchIcon />
                    </IconButton>
                </Grid>
                <Grid sm={2}>
                    <IconButton className={classes.buttonStyle}>
                        <MoreHorizOutlinedIcon />
                    </IconButton>
                </Grid>
                

            </Grid>



        {/* {
            data.map((data,idx)=>{

                return(
                    <Grid container key={idx} spacing={1}>
                        <Grid item spacing={2}>
                            <AccountCircleOutlinedIcon />
                        </Grid>
                        <Grid item spacing={2}>
                            {data.nama}
                        </Grid>
                    </Grid>
                )
            })
        } */}

        </div>
    );
}

export default Inbox;
