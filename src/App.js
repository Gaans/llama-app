import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Header
import Header from './components/header/header';
import Home from './components/home/home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Grid container className={classes.root} direction="column">
        <Grid item>
          {/*Header menu*/}
          <Header />
        </Grid>
        <Grid item>
          {/* contents*/}
          <Switch>
            <Route path="/">{<Home />}</Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
