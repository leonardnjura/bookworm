require('dotenv').config(); // to access .env private secrets n stuff
const express = require('express');
const graphHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

const app = express();

/**
 * WITH INSPIRATION FROM
 * http://www.africanbookscollective.com/books
 * https://www.amazon.com/River-Source-Margaret-Ogola/dp/9966882057
 * https://openlibrary.org
 *  */

const { NODE_ENV } = process.env;
const isDevMode = NODE_ENV === 'development';
const isProductionMode = NODE_ENV === 'production';

app.use(cors());

app.use(
  '/graphql',
  graphHTTP({
    schema,
    graphiql: true
  })
);

// Hitting / will serve static assets if production
// remember to insert build script, :)
if (isProductionMode) {
  // set static folder
  app.use(express.static('build'));

  //serve index.html for any req
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// Hitting / will serve api if devvelopment
app.get('/', (req, res) => {
  res.json({ msg: 'welcome to bookworm graphql api' });
});

const PORT = process.env.PORT || 5000;

const mode = isDevMode ? 'DevMode' : 'ProductionMode';
app.listen(PORT, () => {
  console.log({ mode });
  console.log(`Bookworm server running on port ${PORT}..`);
});
