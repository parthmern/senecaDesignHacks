const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
  },
  location: {
    type: String,
  },
  takenBy: {
    type: String,
  },
  info: {
    type: String,
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
});

const Workshop = mongoose.model("Workshop", workshopSchema);
module.exports = Workshop;
