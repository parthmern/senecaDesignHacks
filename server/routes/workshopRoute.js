const express = require("express");
const { createWorkshop, getAllWorkshops, getDetailsOfSingleWorkshop } = require("../controllers/workshopController");


const router = express.Router();

router.post("/createWorkshop", createWorkshop);
router.get("/getAllWorkshops", getAllWorkshops);
router.post("/getDetailsOfSingleWorkshop", getDetailsOfSingleWorkshop);


module.exports = router ;