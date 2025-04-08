const mongoose=require("mongoose")

const LearnSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const LearnModel=mongoose.model("plant",LearnSchema)

module.exports=LearnModel;