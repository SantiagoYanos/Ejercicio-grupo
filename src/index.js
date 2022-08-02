const express = require('express')
const app = express()

const mongoose = require('mongoose')

const morgan = require('morgan')

const dotenv = require('dotenv')

const alumnosRoute = require('./v1/routes/alumnosRoute.js')

const profesoresRoute = require('./v1/routes/profesoresRoute.js')

app.use(express.json())
app.use(morgan('dev'))
dotenv.config()

//Mongoose Connection

mongoose.connect(process.env.URL_MONGO, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{console.log('Conectado a MongoDB')})
.catch(err=>{console.log(err)})

//-------------------

app.use('/api/v1/alumnos', alumnosRoute)
app.use('/api/v1/profesores', profesoresRoute)

app.use('/', (req,res)=>
{
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000, ()=>
{
    console.log('Conectado al servidor')
})


//Mathias Ezequiel Latronico

//Johanna Carolina Padilla

//Santiago Yanosky