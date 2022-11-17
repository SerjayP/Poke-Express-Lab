const express = require('express')
const app = express()
const PORT = 3000
const pokemon = require("./models/pokemon")

app.get('/pokemon', (req, res)=>{
    res.send(pokemon)
})

app.listen(PORT, ()=>{
    console.log("Listening to port:", PORT)
})