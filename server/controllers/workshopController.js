const { json } = require("express");
const Category = require("../models/categoryModal");
const Workshop = require("../models/workshopModal");

const cloudinary = require("cloudinary").v2;

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder };

    if (quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

const createWorkshop = async (req, res) =>{
    try{

        const { name, time, location, takenBy, info, links, categoryId } = req.body;

        console.log("{ name, time, location, takenBy, info, links, categoryId } =>", { name, time, location, takenBy, info, links, categoryId } );

        console.log("req.files=>", req.files, req.body.imageFile);
        const file = req.files.imageFile || req.body.imageFile;

        const uploaded = await uploadFileToCloudinary(file, "senecaDesignHacks");
        console.log("uploaded==>", uploaded.secure_url);

        // if (!Array.isArray(links) || !links.every(link => typeof link === 'object' && link.title && link.link)) {
        //     return res.status(400).json({ message: 'Invalid links format' });
        // }



         // when sending from postman formdata you need to parse the object if you are sending
         // IMP
        
        const savedWorkshop = await Workshop.create({
            name,
            time,
            location,
            takenBy,
            info,
            links : JSON.parse(links),
            img : uploaded.secure_url ,
          });

        const updatedCat = await Category.findByIdAndUpdate(
            categoryId,
            { $push: { workshops: savedWorkshop._id } },
            { new: true }
          );
      
        console.log("savedWorkshop =>", savedWorkshop);
        console.log("updatedCat=>", updatedCat);

       

      return(
        res.status(200).json(
            {
                success : true ,
                message : "workshop created and cat updated",
                savedWorkshop,
                updatedCat ,
            }
        )
      )

    }
    catch(error){
        console.log("🚫 createWorkshop error=>", error);

        return res.status(500).json({
            success: false,
            message: "createWorkshop Failed",
        });
    }
}

const getAllWorkshops = async (req, res) =>{
    try{

        

    }
    catch(error){
        console.log("🚫 getAllWorkshops error=>", error);

        return res.status(500).json({
            success: false,
            message: "getAllWorkshops Failed",
        });
    }
}

const getDetailsOfSingleWorkshop = async(req, res) =>{
    try{

        const {id} = req.body ;

        const wpDetails = await Workshop.find(
            {_id : id}
        )

        return(
            res.status(200).json(
                {
                    success : true ,
                    message : "getDetailsOfSingleWorkshop done",
                    wpDetails
                }
            )
        )

    }
    catch(error){
        console.log("🚫 getDetailsOfSingleWorkshop error=>", error);

        return res.status(500).json({
            success: false,
            message: "getDetailsOfSingleWorkshop Failed",
        });
    }
}

module.exports = {createWorkshop, getAllWorkshops, getDetailsOfSingleWorkshop};