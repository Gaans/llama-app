import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  image: {
    display: 'block',
    background: 'url(/llama.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    flexGrow: 1,
    width: '100%',
    height: '50vh'
  },
  text: {
    position: 'absolute',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h1.fontSize,
      transform: 'translate(12vw,-30vh)'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.h3.fontSize,
      transform: 'translate(8vw,-30vh)'
    },
    background: 'rgba(38,38,38,0.3)',
    textAlign: 'center'
  }
}));

function Home(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.image}></div>
      <Typography
        className={classes.text}
        fontWeight={500}
        variant={'h2'}
        noWrap
      >
        The <br />
        Majestic Llama
      </Typography>
    </>
  );
}

export default Home;
