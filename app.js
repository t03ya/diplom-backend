require('dotenv').config();

const express = require('express')
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors({credentials: true, origin: true}))

const port = process.env.PORT || 80

app.use(express.json({ extended: true }))

// app.use('/api/auth', require('./routes/auth.routes'))
// app.use('/api/users', require('./routes/users.routes'))
// app.use('/api/cars', require('./routes/cars.routes'))
// app.use('/api/waybills', require('./routes/waybills.routes'))
// app.use('/api/drivers', require('./routes/drivers.routes'))

const mongoUri = "mongodb+srv://golovan:dedperded007@school-platform.57xhq.azure.mongodb.net/app?retryWrites=true&w=majority";

mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.listen(port, () => console.log(`Server has been started on port ${port}`))