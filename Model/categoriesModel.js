const mongoose=require("mongoose");

const categoriesModel=mongoose
.model("categories",{
    id:{type:Number},
    name:{type:String}

});
module.exports=categoriesModel;