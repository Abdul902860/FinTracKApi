const { json } = require("express");
const express=require("express");
const cors =require("cors");
const countriesModel=require("./Model/countriesModel");
const citiesModel=require("./Model/citiesModel");
const mongoose = require("mongoose")
const categoriesModel=require("./Model/categoriesModel");
const earningModel = require("./Model/earningModel");
const expenseModel = require("./Model/expenseModel");
const app=express();
app.use(json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/findb")
.then(()=>console.log("db is connected"))
.catch(()=>console.log());

app.get("/countries",async(req,res)=>{
    const result=await countriesModel.find({})
    res.json({result})
})

app.get("/cities",async(req,res)=>{
    const result=await citiesModel.find({})
    res.json({result})
})
app.get("/categories",async(req,res)=>{
    const result= await categoriesModel.find({})
    res.json(result);
})
app.get("/explist",async(req,res)=>{
    const result= await expenseModel.find({})
    res.json(result);
})

app.get("/catdd",async(req,res)=>{
    const result= await categoriesModel.find({})
    const newdata=result.map((item)=>( {
        value:item.id,label:item.name
    })
    )
        res.json(newdata);
})



app.post("/addearning",(req,res)=>{
    const payload=req.body;
    const  newEarning = new earningModel(payload)
    newEarning.save();
    res.send("successfully")
});

app.post("/expenses",(req,res)=>{
    const payload=req.body;
    const newExpense = new expenseModel(payload)
    newExpense.save();
    res.send("successfully")
});

app.get("/earnings",async(req,res)=>{
    const result= await earningModel.find({});
    res.json(result);
});

app.get("/expensess",async(req,res)=>{
    const result=await expenseModel.find({});
    res.json(result);
});

app.post("/deleteearning",(req,res)=>{
    const payload = {_id:req.body._id};
    earningModel.findOneAndDelete(payload,(err,docs)=>{
if(err){
    res.json(err);
}else{
    res.json(docs);
}
    });
    
})


app.get("/",(req,res)=>{
    res.json("Welcome  to Financial Tracking  app for your business app")
});
app.post("/addtrans",(req,res)=>{
    res.json()
},)

app.post("/citiesbyfilt",async(req,res)=>{
    const result = await citiesModel.find(req.body)
    res.json({result})
})

app.listen(3030,(req,res)=>{
    console.log("Server is running on port 3030");
});