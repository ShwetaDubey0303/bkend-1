let express=require("express")
const {getdet,add,getbyid,getbyage}=require("../Contoller/Percon")
let route=new express.Router()
route.get("/getdet",getdet)
route.post("/addper",add)
 route.get("/getper/:pid",getbyid)
 route.get("/getbyage/:age",getbyage)
module.exports=route