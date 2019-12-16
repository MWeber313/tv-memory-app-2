const graphql = require('graphql');
const Movies = require('../models/moviesModel.js');
const User = require('../models/userModel.js');
const {UserType, MovieType} = require('./types.js')

const {GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull} = graphql

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            description: 'Gets all users',
            resolve () {
                return User.find()
                .then(res => {
                    if (res.length) {
                        return res
                    }
                    return new Error('There was an error completing your request')
                })
            }
        },
        getUserById: {
            type: UserType,
            description: 'Gets user by user id',
            args: {id: {type: new GraphQLNonNull(GraphQLID)}},
            resolve(parent, args) {
                return User.findById(args.id)
                .then(res => {
                    if (res) {
                        return res
                    }
                    return new Error('No user by that id')
                })
                .catch(() => {
                    return new Error('There was an error completing your request')
                })
            }
        },
        getAllMovies: {
            type: new GraphQLList(MovieType),
            description: 'Gets all movies',
            resolve () {
                return Movies.find()
                .then(res => {
                    if (res.length) {
                        return res
                    }
                    return new Error('There was an error completing your request')
                })
            }
        },
        getMovieById: {
            type: MovieType,
            description: 'Gets movie by movie id',
            args: {id: {type: new GraphQLNonNull(GraphQLID)}},
            resolve(parent, args) {
                return Movies.findById(args.id)
                .then(res => {
                    if (res) {
                        return res
                    }
                    return new Error('No movie by that id')
                })
                .catch(() => {
                    return new Error('There was an error completing your request')
                })
            }
        },
    }
})

module.exports = RootQuery;