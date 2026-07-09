import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js' // As we exported it as default, we can change its name but the address should be the same!
import authRouter from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err)
})

const app = express()

app.use(express.json())

app.listen(8000, ()=>{
    console.log("The server is running on port 8000")
})

//define all routes here
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

// Test API
// app.get('/test', (req, res)=> {
//     res.json({message: "Hello World!"})
// }); 