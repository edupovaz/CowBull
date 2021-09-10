const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

module.exports = {
    addFarm,
    addFridge,
    findFridge,
    find
}

async function addFarm(farm_data){
    const [id] = await db('farm').insert(farm_data)
    return id
}

async function addFridge(fridge_data){
    const [id] = await db('fridge').insert(fridge_data)
    return [id]
}

function find(){
    return db('farm')
}

function findFridge(){
    return db('fridge')
}