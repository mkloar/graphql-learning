const graphql = require('graphql')

const UserType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLID },
        name: { type: graphql.GraphQLString },
        mail: { type: graphql.GraphQLString },
        createDate: { type: graphql.GraphQLString }
    }
})

module.exports = {
    UserType
}