const express = require('express')

const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')

const app = express();

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit:'10mb'}))

//Route 1
// app.get('/product', (req, res) => {
//     res.send('Hello Endpoint 555')
// })

// Route 2
// const authRouter = require('./Routes/auth')
// const productRouter = require('./Routes/product')
// app.use('/api',productRouter)
// app.use('/api',authRouter)

//Route 3
readdirSync('./Routes').map((r)=>app.use('/api',require('./Routes/'+r)))

app.listen(5000, () => console.log('Server Running port 5000'))