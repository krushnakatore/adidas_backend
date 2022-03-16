const express = require("express");

const Alldata = require("../models/alldata.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const alldata = await Alldata.create(req.body);

    return res.status(200).send(alldata);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const alldata = await Alldata.find().lean().exec();

    return res.status(200).send(alldata);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/single/:id", async (req, res) => {
  let _id = req.params.id;
  try {
    const alldata = await Alldata.find({ id: _id }).lean().exec();

    return res.status(200).send(alldata);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
