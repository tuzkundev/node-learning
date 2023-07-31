const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = 3000;
const router = require("./routers/router.js");
const esports = require("./routers/esports.js");
const register = require("./routers/register.js");
const login = require("./routers/login.js");
const account = require("./routers/account.js");

app.use(morgan("combined"));

const isLogin = true;

const checkIsLogin = (req, res, next) => {
  if (isLogin) {
    //req.user = user;
    next();
  } else {
    res.send("Not login, please get out of my website");
  }
};

const checkIsAdmin = (req, res, next) => {
  //req.user.role;
  next();
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", checkIsLogin, checkIsAdmin, (req, res, next) => {
  res.send("Admin");
});

app.use("/api1/", checkIsLogin, router);

app.use("/esports/", checkIsLogin, checkIsAdmin, esports);

app.use("/register/", register);

app.use("/login", login);
app.use("/api/account", account);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
