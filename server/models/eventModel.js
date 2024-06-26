const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        name : {
            type : String ,
            required : true ,
        },

        desc : {
            type : String ,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },

        img : {
            type : String ,
        },

        links: [
            {
                title: {
                    type: String,
                    
                },
                link: {
                    type: String,
                    
                }
            }
        ]

    }
)

module.exports = mongoose.model("Event", eventSchema);