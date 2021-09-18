const express = require('express');
const Farm = require('./modules/dbHelpers')
const server = express()
const PORT = 5000;
const cors = require('cors')

server.use(express.json())

server.use(cors({origin: 'http://localhost:3000'}));


server.get('/', (req,res) => {
    res.json({message: "RUNNING"})
    
})

server.post('/api/farm', (req,res) =>{
    Farm.addFarm(req.body).then(Farm => {
        res.status(200).json(Farm)
    })
    .catch(error => {
        res.status(500).json({message: "cannot add farm"})
    })
})

server.get('/api/farm', (req, res) => {
    Farm.find().then(farm => {
        res.status(200).json(farm)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrive farm"})
    })
})

server.post('/api/fridge', (req,res) => {
    Farm.addFridge(req.body).then(Fridge => {
        res.status(200).json(Fridge)
    })
    .catch(error => {
        res.status(500).json({message: "cannot add fridge"})
    })
})

server.get('/api/fridge', (req, res) => {
    Farm.findFridge().then(fridge => {
        res.status(200).json(fridge)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrive farm"})
    })
})

server.get('/api/gado', (req,res) =>{
    Farm.findGado().then(gado => {
        res.status(200).json(gado)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrive gado"})
    })
})

server.post('/api/gado', (req,res) =>{
    Farm.addGado(req.body).then(gado => {
        res.status(200).json(gado)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrive farm"})
    })
})

server.get('/api/gado/:id', (req,res) =>{
    const { id } = req.params

    Farm.findGadoById(id)
    .then(gado =>{
        if(gado){
            res.status(200).json(gado)
        }else{
            res.status(404).json({message: "Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to perform operation"})
    })
})

server.delete('/api/gado/:id', (req,res) =>{
    const {id} = req.params

    Farm.remove(id)
    .then(count =>{
        if(count > 0){
            res.status(200).json({message: "successfully deleted"})
        }else{
            res.status(404).json({message: "Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to perform operation"})
    })
})

server.patch('/api/gado/:id', (req,res) =>{
    const { id } = req.params
    const changes = req.body

    Farm.update(id,changes)
    .then(gado => {
        if(gado){
            res.status(200).json(gado)
        }else{
            res.status(404).json({message:"Record not found"})
        }
    })
    .catch(error => {
        res.status(500).json({message:"Unable to perform operation"})
    })
})

server.listen(PORT, () => {
    console.log(`\n *** Server running on port ${PORT}`) 
})

server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});