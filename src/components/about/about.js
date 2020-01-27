import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

function About(props) {
  return (
    <>
      <Box mt={3} display={{ xs: 'block', xl: 'none' }}>
        <Container maxWidth="sm">
          <Aboutpara />
        </Container>
      </Box>
      <Box mt={3} display={{ xs: 'none', xl: 'block' }}>
        <Container maxWidth="md">
          <Aboutpara />
        </Container>
      </Box>
    </>
  );
}

function Aboutpara() {
  //const classes = useStyles();
  return (
    <>
      <Box>
        <Typography variant={'h4'} align="center">
          About Me
        </Typography>
        <Box mt={3}>
          <Typography variant={'body2'} align="justify">
            Hi! I'm Ganesh, I am a Computer Science graduate student at UC
            Riverside. I have about 3 years work experience in Samsung R&amp;D,
            India. I have worked on designing and building many web dashboards
            and love to create responsive websites. I have passion to learn new
            technologies and implement them for a revelant problem.
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant={'body2'} align="justify">
            Today we are living in a world, which is ruled by web apps. Web apps
            are increasingly getting complex and added to that it has to be
            responsive. I believe front-end is equally a complex system to
            design and develop when compared to back-end. Plus Front-end web
            development is all about creativity and creative problem-solving.
          </Typography>
        </Box>
      </Box>
      <Box mt={2}>
        <Typography variant={'h4'} align="center">
          Technologies Used
        </Typography>
        <Box mt={3}>
          <Typography variant={'body2'} align="justify">
            This website is developed in React.js. Additionally react based
            library such as react-router and material-ui are also used.
            <br />
            The webpage is developed in React because it is a modern,elagant way
            to develop single page application.
            <br />
            The material-ui library provides react component that are compatible
            with Material design specs. It makes use of a lot of css flexbox.
            <br />
            React-router is library used for routing.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
