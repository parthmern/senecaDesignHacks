// create event

const events = require("../models/eventModel");

const createEvent = async (req, res) => {
    try {
        const { name, desc, links } = req.body;
        console.log("{title, desc, links} =>", { name, desc, links });

        const createdEvent = await events.create({
            name,
            desc,
            links,
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
            {},
            {
                name : true, 
                desc : true, 
                links : true,
            }
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

module.exports = { createEvent, getAllEvents };
