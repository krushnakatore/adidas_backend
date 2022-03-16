const express = require("express");

const Cart = require("../models/cart.model");

const Alldata = require("../models/alldata.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);

    return res.status(200).send(cart);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find().lean().exec();

    return res.status(200).send(cart);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const cart = await Cart.findByIdAndDelete({ _id: id }).lean().exec();

    return res.status(200).send(cart);
  } catch (e) {
    return res.status(400).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
