import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  spacing: value => value ** theme.spacing(2),
  root: {
    background: '#3f51b5'
  },
  space: {
    height: '50px'
  },
  color: {
    color: '#fff'
  },
  padding: {
    paddingBottom: '1vh'
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Box mt={2} className={classes.root}>
        <Grid container direction="column" className={classes.spacing}>
          <Grid item>
            <Box className={classes.space}></Box>
          </Grid>
          <Grid item className={classes.padding}>
            <Typography
              variant={'body1'}
              align={'center'}
              className={classes.color}
            >
              Developed by Ganesh
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer;
