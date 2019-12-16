const graphql = require('graphql')
const User = require('../models/userModel.js');
const Movies = require('../models/moviesModel.js');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        username: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        movies: {
            type: MovieType,
            resolve(parent, args) {
                return Movies.findByUserId(parent.id)
            }
        }
    })
})

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields = () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        userId: {type: new GraphQLNonNull(GraphQLString)},
        user: { 
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId)
            }
        }
    })
})

module.exports = {
    UserType,
    MovieType
}