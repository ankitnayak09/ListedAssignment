var express = require("express");
var cors = require("cors");
var indexRouter = require("./routes/index");
var dotenv = require("dotenv");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(dotenv.config());

app.use("/", indexRouter);

app.listen(process.env.PORT || 8000, () =>
	console.log("Server Listening on Port 8000")
);

module.exports = app;
