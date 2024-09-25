const  mongoose =require('mongoose')


mongoose.connect(process.env.MONGOURL ||"mongodb+srv://Dakku:1705@portfolio.82zvv.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio")

const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log("DB Created")
})

connection.on('error',() =>console.log("DB error"))

module.exports=mongoose

