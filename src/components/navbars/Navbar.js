import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LayersIcon from '@material-ui/icons/Layers';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    // minHeight: 70
  },
  brand: {
    lineHeight: 1,
    marginRight: 'auto'
  },
  link: {
    color:'inherit',
    fontSize:'16px',
textDecoration:'none',
borderWidth:0,
position:'relative',
'&:after':{
  position:'absolute',
  display:'inline-block',
  bottom:-3,
  left:0,
  right:100,
  content:'""',
  transition:'all .3s ease-in-out'
},
'&:hover:after':{
  right:0,
  borderBottom:'2px solid '+theme.palette.primary.light, 
},
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  primaryAction: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  }
}));

export default function Navigation(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: 'assets/logos/logo.png', width: 110 },
    'link1': 'Home',
    'link2': 'About Us',
    'link3': 'Services',
    'link4': 'Portfolio',
    'primary-action': 'Contact Us',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
  } else {
    brand = content.brand.text || '';
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <AppBar position="sticky" color="inherit">
        <Container maxWidth='lg'>
      <Toolbar className={classes.toolbar} variant='dense'>
        <Link to="#" color="primary" underline="none" variant="h5" className={classes.brand}>
          {brand}
        </Link>
        <Link to="#" color="textPrimary" variant="body2" className={classes.link}>
          {content['link1']}
        </Link>
        <Link to="#" color="textPrimary" variant="body2" className={classes.link}>
          {content['link2']}
        </Link>
        <Link to="#" color="textPrimary" variant="body2" className={classes.link}>
          {content['link3']}
        </Link>
        <Link to="#" color="textPrimary" variant="body2" className={classes.link}>
          {content['link4']}
        </Link>
        <Button size='small' variant="contained" color="primary" className={classes.primaryAction}>{content['primary-action']}</Button>
        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      </Container>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Box mb={1} ml={2} pb={2} border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
            <Link to="#" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
              {brand}
            </Link>
          </Box>
          <List>
            <ListItem button key={content['link1']}>
              <ListItemIcon className={classes.iconWrapper}>
                <LayersIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link1']} />
            </ListItem>
            <ListItem button key={content['link2']}>
              <ListItemIcon className={classes.iconWrapper}>
                <FilterHdrIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link2']} />
            </ListItem>
            <ListItem button key={content['link3']}>
              <ListItemIcon className={classes.iconWrapper}>
                <DirectionsBusIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link3']} />
            </ListItem>
            <ListItem button key={content['link4']}>
              <ListItemIcon className={classes.iconWrapper}>
                <NotificationImportantIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link4']} />
            </ListItem>
          </List>
          <Box mt={1} ml={2} pt={3} border={1} borderBottom={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
            <Button variant="contained" color="primary" fullWidth>{content['primary-action']}</Button>
          </Box>
        </div>
      </Drawer>
    </AppBar>
  );
}