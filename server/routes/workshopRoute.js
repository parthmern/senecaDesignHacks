const express = require("express");
const { createWorkshop, getAllWorkshops } = require("../controllers/workshopController");


const router = express.Router();

router.post("/createWorkshop", createWorkshop);
router.get("/getAllWorkshops", getAllWorkshops);


module.exports = router ;