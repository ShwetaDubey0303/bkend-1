let express=require("express")
let mongoose=require("mongoose")
const route= require("./Routes/Perroute")
let app=express()
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/v23hfsd2").then(()=>{
    console.log("ok")

})
app.use("/",route)
app.listen(5000)

