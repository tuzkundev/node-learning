const express = require("express");
const AccountModel = require("../models/account.model");

const accountRouter = express.Router();

// lay du lieu tu DB
accountRouter.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { filter = "" } = req.query;

  try {
    let where = {};

    // dung de filter
    if (filter !== "") {
      where = { username: { $regex: filter, $options: "i" } };
    }

    let query = AccountModel.find(where);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await AccountModel.countDocuments(where);
    const pages = Math.ceil(total / limit);

    if (page > pages) {
      return res.status(400).json({
        status: "fail",
        message: "Page not found",
      });
    }

    results = await query.limit(limit).skip(startIndex).exec();

    res.json({
      status: "success",
      filter,
      count: results.length,
      page,
      pages,
      data: results,
    });
  } catch (error) {
    console.log("-----------", error.message);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

// update db
accountRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const newPassword = req.body.newPassword;

  AccountModel.findByIdAndUpdate(id, { password: newPassword })
    .then((data) => {
      res.json("update thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Internal server");
    });
});

accountRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

  AccountModel.deleteOne({ _id: id })
    .then((data) => {
      res.json("xoa thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Internal server");
    });
});

module.exports = accountRouter;
