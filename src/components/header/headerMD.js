import React from 'react';
import { Box, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  offset: theme.mixins.toolbar,
  spacing: value => value ** theme.spacing(2),
  link: {
    color: '#FFF',
    textDecoration: 'none'
  }
}));

function HeaderMD(props) {
  const classes = useStyles();
  const { title, buttons } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Box m={1}>
            <Link to="/">
              <Avatar alt="Llama" src="./images/iconAvatar.png" />
            </Link>
          </Box>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {Object.keys(buttons).map((buttonName, index) => {
            return (
              <Button key={index}>
                <Link className={classes.link} to={buttons[buttonName]}>
                  {buttonName}
                </Link>
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}

HeaderMD.defaultProps = {
  title: 'Majestic Llama',
  buttons: []
};

HeaderMD.propsTypes = {
  title: PropTypes.string,
  buttons: PropTypes.Object
};

export default HeaderMD;
