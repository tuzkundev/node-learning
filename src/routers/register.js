const express = require("express");
const AccountModel = require("../models/account.model");

const registerRouter = express.Router();

registerRouter.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  AccountModel.findOne({ username: username })
    .then((data) => {
      if (data) {
        res.json("Tai khoan da ton tai");
      } else {
        return AccountModel.create({
          username: username,
          password: password,
        });
      }
    })
    .then((data) => {
      res.json("Tao tai khoan thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Tao tai khoan that bai");
    });

  console.log(username, password);
});

registerRouter.get("/", (req, res) => {
  res.json("register success");
});

module.exports = registerRouter;
