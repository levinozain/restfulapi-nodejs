const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/:id',(req, res) => {
    let id = req.params.id
    let file = path.join(__dirname + `/../vid/${id}.mp4`)
    res.sendFile(file)
})

router.post('/',(req, res) =>{
    res.send({'post': 'this message send with post method'})
})

module.exports = router