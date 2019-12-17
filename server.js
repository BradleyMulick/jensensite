const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8080
const path = require('path')
require("dotenv").config()
const morgan = require('morgan')


// MIDDLEEEEEEEWAREEEEEEEEEEEEEEEE...............
app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/productdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useFindAndModify: false 
    })
    .then(() => console.log("Connected to the db"))
    .catch(() => console.log(err))


// routes...........
app.use('/products', require('./routes/productRouter.js'))







app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})