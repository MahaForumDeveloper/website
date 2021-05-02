import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '120%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.black,
    color: '#0a0a0a',
  },
  textTitle: {
    color: '#4B35BD',
    fontWeight: "fontWeightBold",
  }
}));



function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const SideBar = () => {
  const classes = useStyles();

  return (
 <div>
    <div className={classes.textTitle}>
      <Typography variant="h4" align="center" style={{ margin: "2rem", }}>MahaForum</Typography>
    </div>
    <div className={classes.root}>
      <Box m={4}>
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/profile" color="#0a0a0a" style={{ textDecoration: 'none',  color: 'inherit', }}>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleOutlinedIcon  fontSize="large" />
          </ListItemIcon>
          <ListItemText ml={0.5} primary="Profile" />
        </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' , color: 'inherit',}}>
        <ListItem button>
          <ListItemIcon>
            <HomeOutlinedIcon fontSize="large"/>
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' , color: 'inherit',}}>
        <ListItem button>
          <ListItemIcon>
            <LocationCityOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Professional" />
        </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', }}>
        <ListItem button>
          <ListItemIcon>
            <EmojiObjectsOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Creative" />
        </ListItem>
        </Link>
      </List>
      <Divider style={{ background: 'black' }}  />
      <List component="nav" aria-label="secondary mailbox folders">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', }}>
        <ListItem button>
          <ListItemIcon>
            <TextsmsOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', }}>
        <ListItem button>
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