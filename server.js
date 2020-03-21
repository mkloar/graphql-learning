const express = require('express')
const ExpressGraphQL = require('express-graphql')
const app = express()

app.use(express.json())
app.use('/graphql', ExpressGraphQL({graphiql: true}))

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})