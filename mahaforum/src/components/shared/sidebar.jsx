import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '105%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.black,
    color: '#0a0a0a',
  },
  textTitle: {
    color: '#4B35BD',
    fontWeight: "fontWeightBold",
  },
  active: {
    background: '#f4f4f4'
  }

}));



function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  return (
 <div>
    <div className={classes.textTitle}>
      <Typography variant="h5" align="center" onClick={()=>history.push('/')} style={{ margin: "2rem", fontWeight:"800", cursor:"pointer"}}>MahaForum</Typography>
    </div>
    <div className={classes.root}>
      <Box m={4}>
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/profile" color="#0a0a0a" style={{ textDecoration: 'none',  color: 'inherit' }}>
        <ListItem className={location.pathname==='/profile' ? classes.active : null} button>
          <ListItemIcon>
            <AccountCircleOutlinedIcon  fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        </Link>
        <Link to="/explore" style={{ textDecoration: 'none' , color: 'inherit',}}>
        <ListItem className={location.pathname==='/explore' ? classes.active : null} button>
          <ListItemIcon>
            <HomeOutlinedIcon fontSize="large"/>
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        </Link>
        <Link to="/professional" style={{ textDecoration: 'none' , color: 'inherit',}}>
        <ListItem className={location.pathname==='/professional' ? classes.active : null} button>
          <ListItemIcon>
            <LocationCityOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Professional" />
        </ListItem>
        </Link>
        <Link to="/creative" style={{ textDecoration: 'none', color: 'inherit', }}>
        <ListItem className={location.pathname==='/creative' ? classes.active : null} button>
          <ListItemIcon>
            <EmojiObjectsOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Creative" />
        </ListItem>
        </Link>
      </List>
      <Divider style={{ background: 'black' }}  />
      <List component="nav" aria-label="secondary mailbox folders">
        <Link to="/inbox" style={{ textDecoration: 'none', color: 'inherit', }}>
        <ListItem className={location.pathname==='/inbox' ? classes.active : null} button>
          <ListItemIcon>
            <TextsmsOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        </Link>
        <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit', }}>
        <ListItem className={location.pathname==='/settings' ? classes.active : null} button>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="large"/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        </Link>
      </List>
    </Box>
  </div>
</div>
  );
}

export default SideBar;