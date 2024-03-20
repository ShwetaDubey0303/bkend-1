let per=require("../Model/Usermodel")
let add=(req,res)=>{
    let data=new per(req.body)
    data.save().then(()=>{
        res.send("data added")
    }).catch((err)=>{
        res.send(err)
    })
    }
     let getdet=(req,res)=>{
     per.find().then((result)=>{
               res.json(result)
   }).catch((err)=>{
         res.send(err)
     })
 }
 
  let getbyid=(req,res)=>{
             per.findById({"_id":req.params.pid}).then((result)=>{
                 if(result)
                 {
                  res.json(result)
               }                 
               else{
                  res.send("check pid")
               }
             })
         }
 let getbyage=async(req,res)=>{
     let data=await per.find({"age":{$gt:req.params.age}})
     res.json(data)
 }
module.exports={add,getdet,getbyid,getbyage}