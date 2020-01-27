import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './App.css';

//Header
import Header from './components/header/header';
import Home from './components/home/home';
import Fact from './components/facts/facts';
import Power from './components/power/power';
import Location from './components/location/location';
import About from './components/about/about';
import Footer from './components/footer/footer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  },
  image: {
    display: 'block',
    background: 'url(./images/llama.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    flexGrow: 1,
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    height: '50vh'
  },
  text: {
    position: 'absolute',
    color: 'white',
    [theme.breakpoints.between('xs', 'xs')]: {
      position: 'relative',
      fontSize: theme.typography.h4.fontSize,
      transform: 'translate(0vw,-100%)'
    },
    [theme.breakpoints.between('sm', 'sm')]: {
      fontSize: theme.typography.h3.fontSize,
      transform: 'translate(3%,-100%)'
    },
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: theme.typography.h2.fontSize,
      transform: 'translate(3%,-100%)'
    },
    background: 'rgba(38,38,38,0.3)',
    textAlign: 'center'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <Grid container className={classes.root} direction="column">
          <Grid item>
            {/*Header menu*/}
            <Header />
          </Grid>
          <Grid item>
            {/* contents*/}
            <div className={classes.imageContainer}>
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
            </div>

            <Switch>
              <Route path="/facts" component={Fact} />
              <Route path="/power" component={Power} />
              <Route path="/location" component={Location} />
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />>
            </Switch>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
