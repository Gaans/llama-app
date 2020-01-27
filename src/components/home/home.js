import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Home(props) {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Box mt={3} display={{ xs: 'block', xl: 'none' }}>
            <Container maxWidth="sm">
              <Containerllama />
            </Container>
          </Box>
          <Box mt={3} display={{ xs: 'none', xl: 'block' }}>
            <Container maxWidth="md">
              <Containerllama />
            </Container>
          </Box>
        </Grid>
        <Grid item>
          <Box mt={3} display={{ xs: 'block', xl: 'none' }}>
            <Container maxWidth="sm">
              <LifeWithLlama />
            </Container>
          </Box>
          <Box mt={3} display={{ xs: 'none', xl: 'block' }}>
            <Container maxWidth="md">
              <LifeWithLlama />
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

function LifeWithLlama(props) {
  return (
    <>
      <Typography variant={'h3'} align={'center'}>
        Life among the Llamas
      </Typography>
      <Box mt={2}>
        <iframe
          style={{ width: '100%', height: '50vh' }}
          title="life with llama"
          src="https://www.youtube.com/embed/M8T48gpE4n4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </>
  );
}

function Containerllama(props) {
  return (
    <>
      <Typography variant={'h3'} align={'center'}>
        What are Llamas ?
      </Typography>
      <Box mt={2}>
        <Typography variant={'h5'} align={'center'}>
          <i>"Camels without HUMPS"</i>
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant={'body1'} align={'justify'} component={'p'}>
          Llama, (Lama glama), South American member of the camel family,
          Camelidae (order Artiodactyla), closely related to the alpaca,
          guanaco, and vicuña, which are known collectively as lamoids. Unlike
          camels, lamoids do not have the characteristic camel humps; they are
          slender-bodied animals and have long legs and necks, short tails,
          small heads, and large, pointed ears. Gregarious animals, they graze
          on grass and other plants. When annoyed, they spit. Lamoids are able
          to interbreed and to produce fertile offspring.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant={'body1'} align={'justify'} component={'p'}>
          Llamas appear to have originated from the central plains of North
          America about 40 million years ago. They migrated to South America
          about three million years ago during the Great American Interchange.
          By the end of the last ice age (10,000–12,000 years ago), camelids
          were extinct in North America.[2] As of 2007, there were over seven
          million llamas and alpacas in South America, and due to importation
          from South America in the late 20th century, there are now over
          158,000 llamas and 100,000 alpacas in the United States and Canada.
        </Typography>
      </Box>
    </>
  );
}

export default Home;
