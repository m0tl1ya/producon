import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuLists from './MenuLists';

import logo from '../logo.svg';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
  },
  appBar: {
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  // const theme = useTheme();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    console.log(open)

    setState(open);
  };

  const sideList = () => (
    // <div
    //   className={classes.list}
    //   role="presentation"
    //   onClick={toggleDrawer(false)}
    //   onKeyDown={toggleDrawer(false)}
    // >
    //   <List>
    //     {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //       <ListItem button key={text}>
    //         <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //         <ListItemText primary={text} />
    //       </ListItem>
    //     ))}
    //   </List>
    //   <Divider />
    //   <List>
    //     {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //       <ListItem button key={text}>
    //         <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //         <ListItemText primary={text} />
    //       </ListItem>
    //     ))}
    //   </List>
    // </div>
    <MenuLists />
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            className={clsx(classes.menuButton, state && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Producon
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton
              edge="end"
              aria-label="Account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>

    </div>
  );
}