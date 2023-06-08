const express = require("express");
const router = express.Router();
const level = require("../service/level");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await level.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting level `, err.message);
    next(err);
  }
});

module.exports = router;