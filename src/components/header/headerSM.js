import React from 'react';
import { Box, AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  offset: theme.mixins.toolbar,
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}));

function HeaderSM(props) {
  const classes = useStyles();
  const { buttons } = props;
  const [state, setState] = React.useState({
    left: false
  });
  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, left: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {Object.keys(buttons).map((buttonName, index) => (
          <ListItem button key={index}>
            <Link color="inherit" href={buttons[buttonName]}>
              <ListItemText primary={buttonName} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Box display={{ xs: 'block', md: 'none' }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" className={classes.title}>
            Majestic Llama
          </Typography>
          <Drawer open={state.left} onClose={toggleDrawer(false)}>
            {sideList('left')}
          </Drawer>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}

export default HeaderSM;
