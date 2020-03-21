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
    let result = await db.select().table('user')

    return result
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


createUsersTable()

module.exports = {
    createUsersTable,
    queryAllUsers,
    resolveCreateUser
}