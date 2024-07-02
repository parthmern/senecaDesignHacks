const express = require("express");

const app = express();


const dbConnect = require("./config/dbConnect");


// 💙Middlewares -------------------------------------------------

// const cors = require("cors");
// const corsOptions = {
//     // origin: 'http://localhost:5173',
//     // credentials: true,
//     // methods: 'GET, POST, PUT, DELETE, OPTIONS',
//     // allowedHeaders: 'Content-Type, Authorization',

//     // origin:'http://localhost:5173/', 
//     // credentials:true,            //access-control-allow-credentials:true
//     // optionSuccessStatus:200
//     origin : "http://localhost:5173/",
//     methods: 'GET, POST, PUT, DELETE, OPTIONS',
// };


// app.use(cors(corsOptions));

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(express.json());


// // app.use(express.urlencoded({

// // extended: true

// // }));

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());






// const fileUpload = require("express-fileupload");
// app.use(
//     fileUpload({
//         useTempFiles: true,
//         tempFileDir: "/tmp",
//     })
// );


//===================

// first middlewares
app.use(express.json());
  

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// cookie parser - 
const cookieParser = require("cookie-parser");
app.use(cookieParser());


// CORS
const cors = require('cors');
const corsOptions ={
    origin:'*', 
    // credentials:true,            //access-control-allow-credentials:true
    // optionSuccessStatus:200
    
}
app.use(cors());


const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


//=========================


app.get('/',(request,response)=>{
    response.send("server running .. ");
})

dbConnect();
const cloudinaryConnect = require('./config/cloudinaryConnect');
cloudinaryConnect();


// routes
const eventRoute = require("./routes/eventRoute");
const categroryRoute = require("./routes/categoryRoute");
const workshopRoute = require("./routes/workshopRoute");

app.use("/event", eventRoute);
app.use("/category", categroryRoute);
app.use("/workshop", workshopRoute);


app.listen(3000, ()=>{
    console.log("server started at port number 3000");
})

