let mongoose=require("mongoose")
let usersch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "age":Number

})
let usermodel=mongoose.model("person",usersch)
module.exports=usermodel