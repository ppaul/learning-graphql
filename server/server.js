const schema = require('./schema');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const app = express();

// Allow CORS
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
