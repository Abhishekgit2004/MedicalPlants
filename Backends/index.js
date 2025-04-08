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
        LearnModel.findOne({email: email})//whi bol rha hu jab login karte hai na tab ek cookie ko set karna pdta hai sikhna padega backend thoda weak hai
        .then(user=>{
                if(user){
                    if(user.password==password){
                        //iska video dekh le backend ka mast hai simmok pura all playlist 17 tak dekh le pura smjh jayega kya flow hota backend ka ok ok chal good night good night thanks
                       return res.cookie("accessToken","nsinxsnuisbcubsnxikwninxinxi",{httpOnly:true}).json(user.name) // yha pe ek object return kar jisme user detail ho fir forntend pe usko state me state kar ph ye singup me hai login me pass and email hai
                    }else{
                        res.json("not match")
                    }
                }else{
                    res.json("No record exists")
                }
        })
})

app.post("/",(req,res)=>{//signup me tu data ko save karta hai db me and login karne ke baad same data ko frontend ko bhejna pdta hai to show in ui login pe check hoga data exists hai to login nahi to fail
        LearnModel.create(req.body)
        .then(Learn=>res.json(Learn))
        .catch(err=>console.log(err))
})

app.listen(3000,()=>{
    console.log("server run on 3000")
})