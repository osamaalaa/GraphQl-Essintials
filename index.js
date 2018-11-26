// import express from 'express';
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./data/schema');
const app = express();
// const resolvers = require('./resolvers');

app.get('/', (req, res)=>{
  res.send('GraphQl is amazing!');

});

// const root = resolvers;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true,



}));
app.listen(8000, () => console.log('Running server on port 8000'));
