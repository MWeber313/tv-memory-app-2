const db = require('../../config/db-config.js')

module.exports = {
    find,
    findById,
    findByUserId,
    insert,
    update,
    remove
}

function find() {
    return db('movies')
}

function findById(id) {
    return db('movies')
    .where({id})
    .first()
}

function findByUserId(userId) {
    return db('movies')
    .where({userId})
}

async function insert(user) {
    const [id] = await db('movies').insert(user, 'id')
    return findById(id)
}

function update(id, changes) {
    return db('movies')
    .where({id})
    .update(changes);
}

function remove(id) {
    return db('movies')
    .where({id})
    .delete()
}