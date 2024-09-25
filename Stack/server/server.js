require('dotenv').config()
const express =require('express')
const cors =require('cors')
const app=express()
const dbConn=require('./config/db')
const Projects=require('./routes/projectRoute')
const User=require("./routes/userRoute")
app.use(express.json())
app.use(cors())
const port=process.env.PORT || 7778
app.use('/projects',Projects)
app.use('/User',User)
// app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message:"Welcome"})
})
app.listen(port,()=>{
    console.log(`Server runs in:${port}`)
})
 