import express from 'express'
import mongoose from 'mongoose'
import { router } from './Router/userRouter.js'
import cors from 'cors'
import { taskrouter } from './Router/taskRouter.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })


const PORT = process.env.PORT || 3000;

const db = mongoose.connection;
db.on('error',(e)=>console.log(e))
db.once('open',()=>console.log('Database Connected'))

app.use(cors())
app.use(express.json())

app.use(router)
app.use(taskrouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port No ${PORT}`)
})