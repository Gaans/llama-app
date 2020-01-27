import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Card, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  item1: {
    order: 1,
    [theme.breakpoints.down('md')]: {
      order: 2
    }
  },
  item2: {
    order: 2,
    [theme.breakpoints.down('md')]: {
      order: 1
    }
  },
  item3: {
    order: 3
  }
}));

function Fact(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item className={classes.item1} xs={12} md={8}>
          <Box mt={3} display={{ xs: 'block', xl: 'none' }}>
            <Container maxWidth="sm">
              <LlamaFacts />
            </Container>
          </Box>
          <Box mt={3} display={{ xs: 'none', xl: 'block' }}>
            <Container maxWidth="md">
              <LlamaFacts />
            </Container>
          </Box>
        </Grid>
        <Grid item className={classes.item2} xs={12} md={4}>
          <Box mt={3} display={{ xs: 'none', md: 'block' }}>
            <LlamaTable />
          </Box>
          <Box
            mt={3}
            display={{ xs: 'block', md: 'none' }}
            justifyContent="center"
            alignItems="flex-end"
          >
            <Container maxWidth="sm">
              <LlamaTable />
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.item3}>
          <Container>
            <Box mt={2}>
              <iframe
                style={{ width: '100%', height: '50vh' }}
                title="life with llama"
                src="https://www.youtube.com/embed/zsBmZBoAnas"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

function LlamaFacts() {
  const facts = [
    'Llamas were first domesticated and used as pack animals 4,000 to 5,000 years ago in the Peruvian highlands.',
    'Llamas can grow as much as 6 feet tall though the average llama between 5 feet 6 inches and 5 feet 9 inches tall',
    'Llamas know their own limits. If you try to overload a llama with too much weight, the llama is likely to lie down or simply refuse to move.',
    'In the Andes Mountains of Peru, llama fleece has been shorn and used in textiles for about 6,000 years. Llama wool is light, warm, water-repellent, and free of lanolin.',
    'Llamas are smart and easy to train.',
    "Llamas have been used as guard animals for livestock like sheep or even alpacas in North America since the '80s. They require almost no training to be an effective guard.",
    "Llamas don't bite. They spit when they're agitated, but that's mostly at each other. Llamas also kick and neck wrestle each other when agitated.",
    'Llamas are vegetarians and have very efficient digestive systems.',
    'Llamas live to be about 20 years old. Though some only live for 15 years and others live to be 30 years old.',
    'Llamas are social animals and prefer to live with other llamas or herd animals. The social structure of llamas changes frequently and a male llama can move up the social ladder by picking, and winning, small fights with the leader of the group.',
    'The current population of llamas and alpacas in South America is estimated to be more than 7 million.'
  ];

  return (
    <>
      <Typography variant={'h4'} align="center">
        Interesting Facts
      </Typography>
      <Box mt={2}>
        <Grid container spacing={4}>
          {facts.map((fact, index) => {
            // eslint-disable-next-line no-lone-blocks
            {
              return (
                <Grid item xs={12} md={6}>
                  <Card key={index} style={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="body2" component="p" align="center">
                        {fact}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </>
  );
}

const tableStyle = makeStyles(theme => ({
  card: {
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}));

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData('Common name', 'Llama'),
  createData('Kingdom', 'Animalia'),
  createData('Phylum', 'Chordata'),
  createData('Class', 'Mammalia'),
  createData('Order', 'Artiodactyla'),
  createData('Family', 'Camelidae'),
  createData('Genus', 'Lama'),
  createData('Species', 'Lama glamma'),
  createData('Diet', 'Herbivore'),
  createData('Size', 'Height at the shoulder: 47 inches'),
  createData('Weight', '250 pounds')
];

function LlamaTable(props) {
  const classes = tableStyle();
  return (
    <div className={classes.card}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src="./images/llamaCard.png"
              className={classes.large}
            />
          }
          title="Llama"
          subheader="Appeared 40 million years ago"
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default Fact;
