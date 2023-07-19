const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("new home");
});

router.get("/news", (req, res) => {
  res.json("News");
});

router.get("/transaction", (req, res) => {
  res.json("Transaction");
});

router.get("/:id", (req, res) => {
  res.json("router params" + req.params.id);
});

module.exports = router;
