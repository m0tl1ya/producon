import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));



export default function SearchConditionInput() {
    const classes = useStyles();


  return (
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
          />
        </form>
  );
}