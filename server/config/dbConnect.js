const mongoose = require("mongoose");

const dbConnect = async () =>{ 

    require("dotenv").config();
    const dbUrl = "mongodb+srv://pptl8685:V5vPTV2CairDz6eX@cluster0.ehycfhl.mongodb.net/senecaDesignHacks" ;

    try{
        const res = await mongoose.connect(dbUrl);
        console.log("dbConnect successfully =>", res?.connection?.name);

    }
    catch(error){
        console.log("dbConnect error =>", error);
    }

}

module.exports = dbConnect;