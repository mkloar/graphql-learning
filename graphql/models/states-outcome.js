const graphql = require('graphql')

const childrenSubType = new graphql.GraphQLObjectType({
    name: 'ChildrenSubType',
    fields: {
        name: { type: graphql.GraphQLString },
        value: { type: graphql.GraphQLString },
    }
})

const childrenType = new graphql.GraphQLObjectType({
    name: 'ChildrenType',
    fields: {
        name: { type: graphql.GraphQLString },
        value: { type: graphql.GraphQLString },
        children: { type: graphql.GraphQLList(childrenSubType) }
    }
})

const StatesOutcomeType = new graphql.GraphQLObjectType({
    name: 'StatesOutcome',
    fields: {
        id: { type: graphql.GraphQLID },
        name: { type: graphql.GraphQLString },
        value: { type: graphql.GraphQLString },
        year: { type: graphql.GraphQLString },
        children: { type: graphql.GraphQLList(childrenType) }
    }
})

module.exports = {
    StatesOutcomeType
}