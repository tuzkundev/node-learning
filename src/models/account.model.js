const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/learning", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    // day la collection tren database, tao 1 cai collection tren database thi ket noi voi no
    collection: "account",
  }
);

const AccountModel = mongoose.model("account", AccountSchema);

module.exports = AccountModel;
