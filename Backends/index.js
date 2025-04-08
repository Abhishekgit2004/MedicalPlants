const express=require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const LearnModel=require("./models/Learn")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/plant");

app.post("/login",(req,res)=>{
        const {email,password,name}=req.body;
        LearnModel.findOne({email: email})
        .then(user=>{
                if(user){
                    if(user.password==password){
                        
                       return res.cookie("accessToken","nsinxsnuisbcubsnxikwninxinxi",{httpOnly:true}).json(user.name) 
                    }else{
                        res.json("not match")
                    }
                }else{
                    res.json("No record exists")
                }
        })
})

app.post("/",(req,res)=>{
        LearnModel.create(req.body)
        .then(Learn=>res.json(Learn))
        .catch(err=>console.log(err))
})

app.listen(3000,()=>{
    console.log("server run on 3000")
})