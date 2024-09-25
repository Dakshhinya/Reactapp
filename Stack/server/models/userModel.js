const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
},
desc:{
    type:String,
    required: true
},
adress:{
    type:String,
    required:true
}
})

const User=mongoose.model("User",userSchema)
module.exports=User;

