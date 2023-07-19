const express = require("express");

const esportRouter = express.Router();

esportRouter.get("/", (req, res) => {
  res.send("Esports home");
});

esportRouter.post("/", (req, res) => {
  console.log(req.body);
  res.send("Esports home");
});

esportRouter.get("/lol", (req, res) => {
  res.send("T1 2 - 0 DK");
});

esportRouter.get("/lol/:id", (req, res) => {
  res.send("T1 2 - 0 DK", req.params.id);
});

esportRouter.get("/dota", (req, res) => {
  res.send("Make DOTO great again");
});

esportRouter.get("/csgo", (req, res) => {
  res.send("New update is bigger than anything I image");
});

module.exports = esportRouter;
