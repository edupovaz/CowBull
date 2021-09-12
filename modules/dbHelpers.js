const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

module.exports = {
    addFarm,
    addFridge,
    addGado,
    findFridge,
    findGado,
    findGadoById,
    find,
    update,
    remove
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

async function addGado(gado_data){
    const [id] = await db('gado').insert(gado_data)
    return id
}

async function findGado(){
    return db('gado')
}

async function findGadoById(id){
    return db('gado')
    .where({id})
    .first()
}

async function remove(id){
    return db('gado')
    .where({id})
    .del()
}

async function update(id,changes){
    return(
        db('gado')
        .where({id})
        .update(changes)
        .then(() => {
            return findGadoById(id)
        })
    )
}