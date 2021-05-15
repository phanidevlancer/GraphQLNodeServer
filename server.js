const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {buildSchema} = require('graphql');


// GraphQL Schema
var schema = buildSchema(`
    type Query{
        message: String
    }
`);

// Root resolver
var root = {
    message: () => 'Hello World!'
};

// Create an express server and a GraphQL endpoint

var app = express();
app.use('/graphql', graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true
}));

app.listen(4000, () => {
    console.log('Server started on port 4000')
});