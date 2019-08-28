const express = require('express');
const graphHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const app = express();

app.use(cors())

app.use(
  '/graphql',
  graphHTTP({
    schema,
    graphiql: true
  })
);

/**
 * WITH INSPIRATION FROM
 * http://www.africanbookscollective.com/books
 * https://www.amazon.com/River-Source-Margaret-Ogola/dp/9966882057
 * https://openlibrary.org
 *  */

app.get('/', (req, res) => {
  res.json({ msg: 'welcome to bookworm graphql api' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Bookworm server running on port ${PORT}..`);
});
