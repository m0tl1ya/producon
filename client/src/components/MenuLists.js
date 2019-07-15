import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const structure = [
  { id: 'A', label: 'Dashboard', link: '/app/dashboard' },
  { id: 1, label: 'Typography', link: '/app/typography'},
  { id: 2, label: 'Tables', link: '/app/tables'},
];


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  list: {
    color: '#3B5998'
  },
}));

export default function MenuLists() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
    <List component="nav" aria-label="Secondary mailbox folders">
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Master" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Link to="/user-list" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemText className={classes.list} primary="User List" />
          </ListItem>
        </Link>
        <Link to="/product-list" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemText className={classes.list} primary="Product List" />
          </ListItem>
        </Link>
      </Collapse>
    </List>
    </div>
  );
}