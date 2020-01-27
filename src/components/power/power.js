import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

function Power(props) {
  return (
    <>
      <Box mt={3} display={{ xs: 'block', xl: 'none' }}>
        <Container maxWidth="sm">
          <Powerpara />
        </Container>
      </Box>
      <Box mt={3} display={{ xs: 'none', xl: 'block' }}>
        <Container maxWidth="md">
          <Powerpara />
        </Container>
      </Box>
    </>
  );
}

function Powerpara() {
  return (
    <>
      <Typography variant={'h4'} align="center">
        Llama Power
      </Typography>
      <Box mt={3}>
        <Typography variant={'h6'} align="justify">
          <em> What if Llama was a pokemon ? </em>
        </Typography>
        <Typography variant={'overline'} align="justify">
          Grab your Poké Ball, get ready to know llama powers. They are easy to
          catch!!.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant={'body1'} align="justify">
          Llama is a ground type Pokémon introduced in Generation V.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant={'h5'} align="justify">
          Physiology
        </Typography>
        <Typography variant={'body1'} align="justify">
          Llama is a medium-sized camel Pokémon. Llama have three, blue circles
          on each side of its body. Llama have four, short, orange legs, three
          orange hairs on its head and has an orange tail
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant={'h5'} align="justify">
          Power
        </Typography>
        <Typography variant={'body1'} align="justify">
          Llama has the abilities <b>Magma Armor</b> and <b>Solid Rock</b> along
          with the hidden ability Spit up. Magma Armor prevents Llama from being
          frozen while Solid Rock reduces a super effective move's power on
          Llama. <b>Spit Up</b> is used after stockpiling, Spit Up inflicts
          damage to the target and has no secondary effect. Its power depends on
          the number of times Stockpile was used.
        </Typography>
      </Box>
      <Box mt={3}>
        <img src="./images/llamaspit.jpg" alt="Llama spit" width="100%" />
      </Box>
      <Box mt={2}>
        <Typography>
          After Spit Up is used (even if the opponent protects itself from Spit
          Up), the stockpile count will be reset. Spit Up cannot cause a
          critical hit, and its damage is not varied by a random number during
          damage calculation. Spit Up can be used as part of a Pokémon Contest
          combination, giving extra four appeal points if Stockpile was used in
          the prior turn.
        </Typography>
      </Box>
    </>
  );
}

export default Power;
