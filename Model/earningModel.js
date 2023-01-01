const mongoose= require("mongoose")

const earningModel=mongoose.model("earnings",{
    item:{type:String},
    cat:{type:Number},
    amnt:{type:Number}
})
module.exports=earningModel; 