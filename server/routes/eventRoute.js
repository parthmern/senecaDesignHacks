const express = require("express");
const { createEvent, getAllEvents } = require("../controllers/eventController");

const router = express.Router();

router.post("/createEvent", createEvent);
router.get("/getAllEvents", getAllEvents);

module.exports = router ;