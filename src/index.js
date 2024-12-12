const express = require("express")
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const Apod = require('./models/data.model.js')
const mongodb = require('./dbconnect/mongodb.js')
const path = require('path')

const app = express()
app.use(express.json());

PORT = 3000

app.get('/picture', (req, res) =>{
    res.sendFile(__dirname + '/pic/2.jpg')
})

app.get('/',(req, res) =>{
    res.send(
        {
            'status': "ok"
        }
    )
})

app.get('/api/apod', async(req, res) =>{
    try{
        const data = await mongodb.coll.find({}).toArray()
        res.status(200).send(data)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})
app.post('/api/apod', async(req, res) => {
    try {
        const data = await mongodb.coll.insertOne(req.body)
        res.status(200).json(data)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

const apodRouter = require('./routes/routes.js')
const picRouter = require('./routes/picroutes.js')
const vidRouter = require('./routes/vidroutes.js')

app.use('/api/apod', apodRouter)
app.use('/picture', picRouter)
app.use('/video', vidRouter)

app.listen(PORT, async() => {
    console.log('Ready!')
})




