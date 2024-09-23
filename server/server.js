const express =require('express')
const app=express()
const dbConn=require('./config/db')
const Projects=require('./route')
require('dotenv').config()

const port=process.env.PORT || 7778

// app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message:"Welcome"})
})
app.listen(port,()=>{
    console.log(`Server runs in:${port}`)
})
 