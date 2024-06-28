const express = require("express");
const { createCategory, getAllCategories, getCategoryDetails } = require("../controllers/categoryController");

const router = express.Router();

router.post("/createCategory", createCategory);
router.get("/getAllCategories", getAllCategories);
router.post("/getCategoryDetails", getCategoryDetails);

module.exports = router ;