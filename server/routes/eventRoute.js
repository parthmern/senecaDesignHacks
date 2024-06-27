const express = require("express");
const { createEvent, getAllEvents, getOneEventDetail } = require("../controllers/eventController");

const router = express.Router();

router.post("/createEvent", createEvent);
router.post("/getOneEventDetail", getOneEventDetail);
router.get("/getAllEvents", getAllEvents);

module.exports = router ;