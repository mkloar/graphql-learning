const graphql = require('graphql')
const { UserType } = require('./models/user')
const { queryAllUsers, resolveCreateUser } = require('../db/user')
const { StatesOutcomeType } = require('./models/states-outcome')
const { queryAllStateOutcomes } = require('../db/search')


const resolvers = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        // query all
        Users: {
            type: graphql.GraphQLList(UserType),
            resolve: queryAllUsers
        },
        StatesOutcome: {
            type: graphql.GraphQLList(StatesOutcomeType),
            resolve: queryAllStateOutcomes
        }
    }
})

const mutations = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // query all
        createUser: {
            //type of object to return after create in SQLite
            type: UserType,
            //argument of mutation creactePost to get from request
            args: {
                name: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                },
                mail:{
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: resolveCreateUser
        }
    }
})

const rootSchema = new graphql.GraphQLSchema({
    query: resolvers,
    mutation: mutations
})

module.exports = {
    rootSchema
}