// create event

const events = require("../models/eventModel");
const cloudinary = require("cloudinary").v2;

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder };

    if (quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

const createEvent = async (req, res) => {
    try {
        const { name, desc, links, createdAt, info, location } = req.body;
        console.log("{name, desc, links, createdAt, info, location} =>", { name, desc, links, createdAt, info, location });

        console.log("req.files=>", req.files, req.body.imageFile);
        const file = req.files.imageFile || req.body.imageFile;

        const uploaded = await uploadFileToCloudinary(file, "senecaDesignHacks");
        console.log("uploaded==>", uploaded.secure_url);

        let parsedLinks;
        try {
            parsedLinks = JSON.parse(links); // Attempt to parse links
            console.log(parsedLinks);
        } catch (error) {
            console.log("Invalid JSON format in links:", links);
            return res.status(400).json({ message: 'Invalid links format' });
        }

        const createdEvent = await events.create({
            name,
            desc,
            img : uploaded.secure_url ,
            links : parsedLinks,
            createdAt, 
            info,
            location
        });

        console.log("✅ createdEvent =>", createdEvent);

        return res.status(200).json({
            success: true,
            createdEvent,
        });
    } catch (error) {
        console.log("🚫 createEvent error=>", error);

        return res.status(500).json({
            success: false,
            message: "createEvent Failed",
        });
    }
};

const getAllEvents = async (req, res) => {
    try {

        const allEvents = await events.find(
            {}
        )

        const totalEvents = allEvents.length ;

        return(
            res.status(200).json(
                {
                    success : true ,
                    message : "Got all events",
                    allEvents ,
                    totalEvents
                }
            )
        )


    } catch (error) {
        console.log("🚫 getAllEvents error=>", error);

        return res.status(500).json({
            success: false,
            message: "getAllEvents Failed",
        });
    }
};

const getOneEventDetail = async (req, res) =>{
    try{

        const {id} = req.body ;
        console.log("event id=>", id);

        const eventDetail = await events.find(
            {
                _id : id
            }
        );

        console.log(eventDetail);

        return(
            res.status(200).json(
                {
                    success : true ,
                    message : "event details fetched successsfully" ,
                    eventDetail ,
                }
            )
        )

    }
    catch(error){
        console.log("🚫 getAllEvents error=>", error);

        return res.status(500).json({
            success: false,
            message: "getAllEvents Failed",
        });
    }
}

module.exports = { createEvent, getAllEvents, getOneEventDetail };   
