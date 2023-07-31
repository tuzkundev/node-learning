const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/learning", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: string,
  password: string,
});

const UserModel = mongoose.model("user", UserSchema);
