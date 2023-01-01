const mongoose=require("mongoose");
const countriesModel=mongoose
.model("countries",{ 
    id:({type:Number}),
    name:({type:String})
})
module.exports=countriesModel;