import React from 'react';
import { Box, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'relative',
    top: 'auto',
    bottom: '0'
  },
  developed: {
    flex: 1
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Box mt={2}>
        <AppBar className={classes.footer}>
          <Toolbar>
            <Typography
              variant="h6"
              align="center"
              className={classes.developed}
            >
              {'\u00a9 Developed by Ganesh'}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Footer;
