const sqlite3 = require('sqlite3').verbose()
const { DATABASE_NAME } = require('./utils')

const database = new sqlite3.Database(DATABASE_NAME)

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

const queryAllUsers = () => {
    const query = "Select * from user;"

    return database.all(query)
}


module.exports = {
    createUsersTable,
    queryAllUsers
}