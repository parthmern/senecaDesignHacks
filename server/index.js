const express = require("express");

const app = express();


const dbConnect = require("./config/dbConnect");

// 💙Middlewares -------------------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());


app.use(express.urlencoded({

extended: true

}));

const cookieParser = require("cookie-parser");
app.use(cookieParser());
const cors = require("cors");
const corsOptions = {
    origin: '*',
   
    allowedHeaders: ["Content-Type", "Authorization", "withCredentials"], // Include withCredentials in allowedHeaders
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


app.use(cors(corsOptions));

const fileUpload = require("express-fileupload");
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp",
    })
);


//===================


app.get('/',(request,response)=>{
    response.send("server running .. ");
})

dbConnect();
const cloudinaryConnect = require('./config/cloudinaryConnect');
cloudinaryConnect();


// routes
const eventRoute = require("./routes/eventRoute");
const categroryRoute = require("./routes/categoryRoute");

app.use("/event", eventRoute);
app.use("/category", categroryRoute);




app.listen(3000, ()=>{
    console.log("server started at port number 3000");
})

