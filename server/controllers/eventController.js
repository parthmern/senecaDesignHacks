// create event

const events = require("../models/eventModel");

const createEvent = async (req, res) => {
  
  try {
    
    const {name, desc, links} = req.body; 
    console.log("{title, desc, links} =>", {name, desc, links});

    const createdEvent = await events.create(
        {
            name,
            desc, 
            links
        }
    )

    console.log("✅ createdEvent =>", createdEvent);

    return(
        res.status(200).json(
            {
                success : true ,
                createdEvent ,
            }
        )
    )

  } 
  catch (error) {
    console.log("🚫 createEvent error=>", error);

    return res.status(500).json({
      success: false,
      message: "createEvent Failed",
    });
  }
};



module.exports = {createEvent};