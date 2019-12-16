const db = require('../../config/db-config.js')

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
}

function find() {
    return db('users')
}

function findById(id) {
    return db('users')
    .where({id})
    .first()
}

async function insert(user) {
    const [id] = await db('users').insert(user, 'id')
    return findById(id)
}

function update(id, changes) {
    return db('users')
    .where({id})
    .update(changes);
}

function remove(id) {
    return db('users')
    .where({id})
    .delete()
}