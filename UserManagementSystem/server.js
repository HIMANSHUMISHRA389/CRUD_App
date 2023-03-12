const express=require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const bodyparser=require("body-parser");
const path=require("path");


dotenv.config({path:"config.env"});

const app=express();
const PORT=process.env.PORT||8080
//log request
app.use(morgan('tiny'));
app.get('/',(req,res)=>{
    res.render('index.ejs');
})


//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));


//set view engine
app.set('view engine','ejs');


//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));



app.listen(PORT,()=>{
    console.log(`server is started at http://localhost:${PORT}`)
})