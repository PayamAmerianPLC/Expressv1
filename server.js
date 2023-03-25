const express = require("express");//import AOI
const {Configuration, OpenAIApi } = require("openai");

require("dotenv").config;
const app=express()// Drag Drop AOI/Argument aoi tagname is app



app.use(express.json());

const configuration= new Configuration({
    apikey: process.env.OPEN_AI_KEY
})
const openai=new OpenAIApi(Configuration);
app.set('views', './views');
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    console.log("Here")    
    res.render("index",{Text:"Payam"})//Default folder is views
})
app.listen(3000)