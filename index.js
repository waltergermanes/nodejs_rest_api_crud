const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./Middleware/errorHandler')
const app = express()

const PORT = process.env.PORT || 5000
app.use(express.json())
app.use('/', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`))