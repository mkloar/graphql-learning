const express = require('express')
const ExpressGraphQL = require('express-graphql')
const app = express()
const { schema } = require('./graphql/user')

app.use(express.json())
app.use('/graphql', ExpressGraphQL({graphiql: true, schema: schema}))

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})