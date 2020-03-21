const graphql = require('graphql')
const { queryAllUsers, createUsersTable } = require('../db/user')

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
        Posts: {
            type: graphql.GraphQLList(UserType),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                    // raw SQLite query to select from table
                    queryAllUsers().then((err, rows) => {
                        if (err) {
                            reject([])
                        }
                        resolve(rows)
                    })
                });
            }
        }
    }
})

const schema = new graphql.GraphQLSchema({
    query: queryType
})

module.exports = {
    schema
}