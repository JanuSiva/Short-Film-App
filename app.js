const express = require('express')
const app = express()

const mongoose = require('mongoose')
const { on } = require('nodemon')

const filmsRoute = require('./routes/films')

app.use('/films',filmsRoute)

app.get('/', (req,res)=>{
    res.send('Homepage')
})

const MURL = 'mongodb+srv://student:1234@cluster0.lcrjebl.mongodb.net/MiniFilms?retryWrites=true&w=majority'

mongoose.connect(MURL,()=>{
    console.log( 'Your mongoDB connecter is on..')
})

app.listen(3000, ()=>{
    console.log('Your server is up and running...')
})