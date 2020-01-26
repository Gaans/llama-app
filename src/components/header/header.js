import React from 'react';
import { Box } from '@material-ui/core';
import HeaderMD from './headerMD';
import HeaderSM from './headerSM';

function Header(props) {
  const buttonName = ['Facts', 'Location', 'Powers', 'Save', 'About'];
  return (
    <div>
      <Box display={{ xs: 'block', md: 'none' }}>
        <HeaderSM title="Majestic Llama" buttons={buttonName} />
      </Box>
      <Box display={{ xs: 'none', md: 'block' }} height="100%">
        <HeaderMD title="Majestic Llama" buttons={buttonName} />
      </Box>
    </div>
  );
}

export default Header;
