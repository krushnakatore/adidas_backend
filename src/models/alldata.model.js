const mongoose = require("mongoose");

const alldataSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true }, //only coupons, exclusive, bogo and more
    status: { type: String, required: true },
    gender: { type: String, required: true },
    price: { type: String, required: true },
    pn: { type: Number, required: true },
    Division: { type: String, required: true },
    discount: { type: Number, required: true },
    type: { type: String, required: true },
    gallary: { type: Array, required: true }, //only coupons, exclusive, bogo and more
    discription_head: { type: String, required: true }, //babies & alldata, clothing and apparel
    discription: { type: String, required: true },
    details1: { type: Array, required: true },
    details2: { type: Array, required: true },
    style: { type: Array, required: false }, //0-49 or 50-80%
    value: { type: Array, required: true },
    rating: { type: Number, required: true },
    comfort: { type: Number, required: true }, //only coupons, exclusive, bogo and more
    quality: { type: Number, required: true }, //babies & alldata, clothing and apparel
    fit: { type: String, required: false },
    length: { type: String, required: false },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("alldata", alldataSchema);
