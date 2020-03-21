const sqlite3 = require('sqlite3').verbose()
const { DATABASE_NAME } = require('./utils')
const knex = require('knex')

const database = new sqlite3.Database(DATABASE_NAME)

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: DATABASE_NAME
    }
})

const createUsersTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS user (
            id integer PRIMARY KEY,
            name text,
            mail text,
            createDate text
        )
    `;

    return database.run(query)
}

const queryAllUsers = async() => {
    const query = "Select * from user"

    let data = []

    await database.all(query, (err, row) => {
        data = row
    })

    return data
}

const resolveCreateUser = async(root, {name, mail}) => {
    let newUser = {
        name,
        mail,
        createDate: new Date()
    }

    await db('user').insert(newUser)
    return newUser
}


module.exports = {
    createUsersTable,
    queryAllUsers,
    resolveCreateUser
}