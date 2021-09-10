const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

module.exports = {
    add,
    find
}

async function add(farm_data){
    const [id] =await db('farm').insert(farm_data)

    return id
}

function find(){
    return db('farm')
}