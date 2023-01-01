const mongoose = require("mongoose")

const expenseModel=mongoose
.model("expenses",{
    item:{type:String},
    cat:{type:Number},
    amnt:{type:Number}

}

)
module.exports=expenseModel;