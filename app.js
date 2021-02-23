const express = require("express");
const urlRoute = require("./routes/url");

const app = express();

app.use(express.json());

//routes middleware
app.use("/api/v1", urlRoute);

module.exports = app;
