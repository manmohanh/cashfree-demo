import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import paymentRoutes from './routes/payment.js'

dotenv.config()
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api",paymentRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})