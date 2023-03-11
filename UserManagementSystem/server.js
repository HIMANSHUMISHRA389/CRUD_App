const express=require("express");
const dotenv=require("dotenv");


dotenv.config({path:"config.env"});

const app=express();
const PORT=process.env.PORT||8080

app.get('/',(req,res)=>{
    res.send("CRUD Application");
})

app.listen(PORT,()=>{
    console.log(`server is started at http://localhost:${PORT}`)
})