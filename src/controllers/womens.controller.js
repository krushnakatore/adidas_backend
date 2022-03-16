const express = require("express");

const Womens = require("../models/womens.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const womens = await Womens.create(req.body);

    return res.status(200).send(womens);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const womens = await Womens.find().lean().exec();

    return res.status(200).send(womens);
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

    const womens = await Womens.find()
      .skip(skip)
      .limit(limit)
      .sort({ discounts: 1 });

    const totalPages = Math.ceil(
      (await Womens.find().countDocuments()) / limit
    );

    return res.status(200).send(womens);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
