const express = require("express");

const Mens = require("../models/mens.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const mens = await Mens.create(req.body);

    return res.status(200).send(mens);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const mens = await Mens.find().lean().exec();

    return res.status(200).send(mens);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

//pagination

router.get("/page", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 4;
    const skip = (page - 1) * limit;

    const mens = await Mens.find()
      .skip(skip)
      .limit(limit)
      .sort({ discounts: 1 });

    const totalPages = Math.ceil((await Mens.find().countDocuments()) / limit);

    return res.status(200).send(mens);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
