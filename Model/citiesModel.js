const mongoose=require("mongoose");

const citiesModel=mongoose
.model("cities",{   
    id:{type:Number},
    name:{type:String},
    ctrid:{type:String}
});
module.exports=citiesModel;