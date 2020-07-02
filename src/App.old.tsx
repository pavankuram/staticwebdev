import React, { Component } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

import TextAnalyticsPanel from './textAnalytics';
import TextFieldsPanel from './textFields';

interface IProps {
}

interface IState {
  classes?: object
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }
    })
  )


export default function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <TextFieldsPanel />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <TextAnalyticsPanel />
        </Paper>
      </Grid>
      </Grid>
    </div>
  )
}
