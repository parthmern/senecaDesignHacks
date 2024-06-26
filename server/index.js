const express = require("express");

const app = express();

const bodyParser = require('body-parser');  
const dbConnect = require("./config/dbConnect");
app.use(bodyParser.json() );  

app.get('/',(request,response)=>{
    response.send("server running .. ");
})

dbConnect();


app.listen(3000, ()=>{
    console.log("server started at port number 3000");
})

