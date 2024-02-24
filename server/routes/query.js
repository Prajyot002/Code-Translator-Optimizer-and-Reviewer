const express = require("express");

const { optimize, translate, review, generateTestCases } = require("../controller/query");

const router = express.Router();

router.route("/optimize").post(optimize);
router.route("/translate").post(translate);
router.route("/review").post(review);
router.route("/testcases").post(generateTestCases);


module.exports = router;
