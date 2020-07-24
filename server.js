//setup
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
//routers
const router = require('./routes/routes')
const userRouter = require('./routes/user')
//env variables 
const port = process.env.PORT;
const uri = process.env.MONGOATLAS_URI;
//database connection
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
//db connection instace
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

//requirements
app.use(cors())
app.use(express.json())
//serve static files from react app
app.use(express.static(path.join(__dirname+'client/src')));

//catchall handler: serve react's index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/public/index.html'));
});

//routers
app.use('/test', router)
app.use('/users', userRouter)

app.listen(port, () => console.log(`I am Server & started`))