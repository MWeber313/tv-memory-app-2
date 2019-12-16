const graphql = require('graphql')
const { GraphQLSchema } = graphql;
const RootQuery = require('./query.js');

module.exports = new GraphQLSchema({
    query: RootQuery,
})