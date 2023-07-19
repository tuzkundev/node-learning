const express = require("express");
const AccountModel = require("../models/account.model");

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  AccountModel.findOne({
    username: username,
    password: password,
  })
    .then((data) => {
      if (data) {
        res.json("Dang nhap thanh cong");
      } else {
        res.status(400).json("Ten dang nhap hoac tai khoan khong dung");
      }
    })
    .catch((err) => {
      res.status(500).json("INTERNAL SERVER");
    });
});

module.exports = loginRouter;
