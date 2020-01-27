import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function Location() {
  return (
    <>
      <Box mt={3} display={{ xs: 'block', xl: 'none' }}>
        <Container maxWidth="sm">
          <LocationContent />
        </Container>
      </Box>
      <Box mt={3} display={{ xs: 'none', xl: 'block' }}>
        <Container maxWidth="md">
          <LocationContent />
        </Container>
      </Box>
    </>
  );
}

function LocationContent() {
  const classes = useStyles();
  return (
    <>
      <Box mt={3}>
        <Typography variant={'h4'} align="center">
          Top 5 places to see Llama
        </Typography>
      </Box>
      <Box mt={3}>
        <Container>
          <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Atacama Desert,Chile
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box m={1} display={{ xs: 'none', md: 'block' }}>
                  <img
                    src="./images/atacama.jpeg"
                    alt="llam location"
                    style={{ width: '100%' }}
                  />
                </Box>
                <Box m={1}>
                  <Typography>
                    This gorgeous expanse of colorful volcanic landscape lies
                    between the border of Chile and the Pacific Ocean. In
                    addition to the stunning scenery, it's filled with adorable
                    indigenous creatures like guanacos and vicunas, which belong
                    to the camelid family just like llamas. They share a similar
                    visage to their more well-known cousins, and the desert is a
                    wonderful place to see these amazing creatures in their
                    natural habitat.
                  </Typography>
                </Box>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Laguna Colorada, Bolivia
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box m={1} display={{ xs: 'none', md: 'block' }}>
                  <img
                    src="./images/bolivia.jpeg"
                    alt="llam location"
                    style={{ width: '100%' }}
                  />
                </Box>
                <Box m={1}>
                  <Typography>
                    If the desert is too hot and dry for you, try a lake day
                    instead by visiting the alpacas of Laguna Colorada in
                    Bolivia. Sometimes called "The Red Lagoon," this shallow
                    salt lake has been touted as one of South America's most
                    beautiful natural wonders. The water's red hue is caused by
                    sediments and a particular type of algae. Along with the
                    adorable alpacas, it's also home to thousands of flamingos.
                  </Typography>
                </Box>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className={classes.heading}>Cusco, Peru</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box m={1} display={{ xs: 'none', md: 'block' }}>
                  <img
                    src="./images/peru.jpeg"
                    alt="llam location"
                    style={{ width: '100%' }}
                  />
                </Box>
                <Box m={1}>
                  <Typography>
                    Peruvian culture is well known for having llamas at the
                    forefront. They've been an integral part of society in the
                    country for centuries. Llamas were one of the only
                    domesticated animals used by the Incas, and ancient
                    traditions involving llamas have been passed down for
                    generations. If you're looking to get up close and snap a
                    few photos with these fluffy Peruvian mascots, Cusco is a
                    great place to start.
                  </Typography>
                </Box>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className={classes.heading}>
                  Torres del Paine National Park, Chile
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box m={1} display={{ xs: 'none', md: 'block' }}>
                  <img
                    src="./images/peru1.jpeg"
                    alt="llam location"
                    style={{ width: '100%' }}
                  />
                </Box>
                <Box m={1}>
                  <Typography>
                    Located in Chilean Patagonia, Torres del Paine National Park
                    is the perfect place to camp, hike or picnic alongside the
                    guanacos. The park has an endless stream of activities to
                    offer including guided hikes in the glaciers and kayak
                    tours, which all offer great opportunities to get to know
                    the creatures who reside there.
                  </Typography>
                </Box>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className={classes.heading}>
                  Hanmer Springs, New Zealand
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box m={1} display={{ xs: 'none', md: 'block' }}>
                  <img
                    src="./images/newzealand.jpeg"
                    alt="llam location"
                    style={{ width: '100%' }}
                  />
                </Box>
                <Box m={1}>
                  <Typography>
                    Take a hike with a llama in Hanmer Springs! This area on New
                    Zealand's South Island offers many other activities,
                    including mountain biking and hot pools. It's difficult to
                    imagine a scenario more ideal than relaxing in a natural hot
                    pool after a long day of petting llamas and admiring
                    breathtaking New Zealand views.
                  </Typography>
                </Box>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Container>
      </Box>
    </>
  );
}

export default Location;
