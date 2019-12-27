import React from 'react';
import logo from './logo.svg';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={4}>
          <Paper className={classes.paper}><Chart /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Chart2 /></Paper>
        </Grid>
      <Grid item xs={4}>
          <Paper className={classes.paper}><Chart3 /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}