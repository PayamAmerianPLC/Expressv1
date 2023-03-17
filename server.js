const express = require("express")//import AOI
const app=express()// Drag Drop AOI/Argument aoi tagname is app
app.set('views', './views');
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    console.log("Here")    
    res.render("index")//Default folder is views
})

app.listen(3000)