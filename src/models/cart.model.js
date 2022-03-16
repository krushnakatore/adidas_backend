const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    id: { type: "String", required: true },
    title: { type: "String", required: true },
    subtitle: { type: "String", required: true }, //only coupons, exclusive, bogo and more
    status: { type: "String", required: false },
    gender: { type: "String", required: true },
    price: { type: "String", required: true },
    pn: { type: Number, required: true },
    Division: { type: "String", required: true },
    discount: { type: Number, required: true },
    type: { type: "String", required: true },
    gallary: { type: Array, required: true }, //only coupons, exclusive, bogo and more
    discription_head: { type: "String", required: true }, //babies & cart, clothing and apparel
    discription: { type: "String", required: true },
    details1: { type: Array, required: true },
    details2: { type: Array, required: true },
    style: { type: Array, required: false }, //0-49 or 50-80%
    value: { type: Array, required: true },
    rating: { type: Number, required: true },
    comfort: { type: Number, required: true }, //only coupons, exclusive, bogo and more
    quality: { type: Number, required: true }, //babies & cart, clothing and apparel
    fit: { type: "String", required: false },
    length: { type: "String", required: false },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
// Division: "clothing"
// comfort: 4.4
// details1: (6) ['Regular fit', ' Elastic waist with drawcord', '100% recycled polyester plain weave', 'Breathable mesh', 'Key pocket', 'Inner mesh briefs']
// details2: (4) ['360-degree reflectivity', 'Plain weave', 'Color: Black / White', 'Product code: GK5265']
// discount: 60
// discription: "Meet the workhorse of workout wear. Soft and breathable, these adidas running shorts are sporty and super comfortable. AEROREADY helps keep moisture off your skin and your mind on your run. Now you're ready for anything."
// discription_head: "BREATHABLE RUNNING SHORTS MADE TO GO THE DISTANCE"
// fit: "perfect"
// gallary: (3) ['https://assets.adidas.com/images/w_276,h_276,f_aut…01c644ca8069ac71011d23e2_9366/GK5265_21_model.jpg', 'https://assets.adidas.com/images/h_840,f_auto,q_au…arathon_20_Shorts_Black_GK5265_23_hover_model.jpg', 'https://assets.adidas.com/images/h_840,f_auto,q_au…9366/Marathon_20_Shorts_Black_GK5265_25_model.jpg']
// gender: "women"
// id: "w8"
// length: "perfect"
// pn: 900
// price: "₹900.00"
// quality: 4.6
// rating: 4.8
// status: "new"
// style: ['https://photorankmedia-a.akamaihd.net/media/v/c/7/vc726z4/normal.jpg']
// subtitle: "womens original"
// title: "MARATHON 20 SHORTS"
// type: "bottom"
// value: (4) ['adidas India Marketing Private Limited, Office no.…. 7, Plot no. 11, Vasant Kunj, New Delhi - 110070', '1 N', 'Women', 'Vietnam']
// _id: "62308d4a51e8172e13fe
