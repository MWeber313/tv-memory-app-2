const express = require('express');

const graphqlHTTP = require('express-graphql');

const expressPlayground = require('graphql-playground-middleware-express');

const server = express();

server.get('/playground', expressPlayground({endpoint: '/graphql'}))

server.get('/', (req, res) => {
    res.send('The server is running as expected')
})

server.use('/graphql',
    graphqlHTTP({
        graphiql: false
    })
)