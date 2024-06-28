

const Category = require("../models/categoryModal");
const cloudinary = require("cloudinary").v2;

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder };

    if (quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

const createCategory = async (req, res) =>{
    try{

        const {name, info} = req.body ;
        console.log("{name, info}=>", {name, info});

        console.log("req.files=>", req.files, req.body.imageFile);
        const file = req.files.imageFile || req.body.imageFile;

        const uploaded = await uploadFileToCloudinary(file, "senecaDesignHacks");
        console.log("uploaded==>", uploaded.secure_url);


        const createdCategory = await Category.create(
            {
                name, 
                info,
                logo : uploaded.secure_url ,
            }
        )

        return(
            res.status(200).json(
                {
                    success : true ,
                    message : "createCategory done",
                    createdCategory
                }
            )
        )


    }
    catch(error){
        console.log("🚫 createCategory error=>", error);

        return res.status(500).json({
            success: false,
            message: "createCategory Failed",
        });
    }
}

const getAllCategories = async (req, res) =>{
    try{

        const allCats = await Category.find(
            {}
        );

        console.log("cat=>", allCats) ;

        return(
            res.status(200).json(
                {
                    message : "getAllCategories got",
                    success : true ,
                    allCats ,
                }
            )
        )

    }
    catch(error){
        console.log("🚫 getAllCategories error=>", error);

        return res.status(500).json({
            success: false,
            message: "getAllCategories Failed",
        });
    }
    
}


const getCategoryDetails = async (req, res) =>{
    try{

        const {id} = req.body;

        const catDetails = await Category.find(
            {_id : id}
        ).populate("workshops");

        console.log(catDetails);

        return(
            res.status(200).json(
                {
                    success : true, 
                    message : "getCategoryDetails true",
                    catDetails ,
                }
            )
        )

    }
    catch(error){
        console.log("🚫 getCategoryDetails error=>", error);

        return res.status(500).json({
            success: false,
            message: "getCategoryDetails Failed",
        });
    }
}




module.exports = {createCategory, getAllCategories, getCategoryDetails} ;