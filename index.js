const express = require('express');
const Farm = require('./modules/dbHelpers')
const server = express()
const PORT = 5000;

server.use(express.json())


server.get('/', (req,res) => {
    res.json({message: "RUNNING"})
})

server.post('/api/farm', (req,res) =>{
    Farm.add(req.body).then(Farm => {
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

server.listen(PORT, () => {
    console.log(`\n *** Server running on port ${PORT}`) 
})