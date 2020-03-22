const { db } = require('./index')

const createUsersTable = async() => {
    const query = `
        CREATE TABLE IF NOT EXISTS user (
            id integer PRIMARY KEY,
            name text,
            mail text,
            createDate text
        )
    `;

    await db.raw(query)
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