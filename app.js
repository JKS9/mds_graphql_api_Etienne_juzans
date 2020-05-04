const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');


const graphqlSchema = require('./graphql/schema.js')
const graphqlResolver = require('./graphql/resolver.js')

const app = express();

const PORT = 8080;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  })
  
);

mongoose.connect('mongodb+srv://JKS:11981997@cluster0-tgshq.gcp.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
    app.listen(PORT);
    console.log('Your first node api is running on port: ' + PORT);
}).catch(err => console.log(err));

module.exports = app;