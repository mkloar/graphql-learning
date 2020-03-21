const graphql = require('graphql')
const { queryAllUsers, createUsersTable, resolveCreateUser } = require('../db/user')

createUsersTable()

const UserType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLID },
        name: { type: graphql.GraphQLString },
        mail: { type: graphql.GraphQLString },
        createDate: { type: graphql.GraphQLString }
    }
})

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        // query all
        Users: {
            type: graphql.GraphQLList(UserType),
            resolve: queryAllUsers
        }
    }
})

const mutationType = new graphql.GraphQLObjectType({
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

const schema = new graphql.GraphQLSchema({
    query: queryType,
    mutation: mutationType
})

module.exports = {
    schema
}