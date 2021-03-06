const express = require('express')
const router = require('./routes/routes')
const process = require('process')


require('dotenv').config()

const app = express()
const port = process.env.PORT;

//Middleware
app.use(express.json())//Convertimos todo lo que nos llegan a json

//Rutas
//Rutas
/* app.use('/', router) */
app.use('/api', router)

app.get('*', (req,res) =>{
    res.status(404).send('Sorry...404 not found')
})

app.listen(3000, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
})