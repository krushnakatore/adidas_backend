const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(cors());

const mensController = require("./controllers/mens.controller");
const womensController = require("./controllers/womens.controller");
const kidsController = require("./controllers/kids.controller");
const alldataController = require("./controllers/alldata.controller");
const cartController = require("./controllers/cart.controller");

app.use("/mens", mensController);
app.use("/womens", womensController);
app.use("/kids", kidsController);
app.use("/alldata", alldataController);
app.use("/cart", cartController);

module.exports = app;
//
