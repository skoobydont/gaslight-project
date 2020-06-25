require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/routes')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())

app.use('/users', router)

app.listen(process.env.DATABASE_PORT, () => console.log(`I am Server & started on ${process.env.DATABASE_PORT}`))