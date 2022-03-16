const mongoose = require("mongoose");

const kidsSchema = new mongoose.Schema(
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
    discription_head: { type: String, required: true }, //babies & kids, clothing and apparel
    discription: { type: String, required: true },
    details1: { type: Array, required: true },
    details2: { type: Array, required: true }, //0-49 or 50-80%
    value: { type: Array, required: true },
    rating: { type: Number, required: true },
    comfort: { type: Number, required: true }, //only coupons, exclusive, bogo and more
    quality: { type: Number, required: true }, //babies & kids, clothing and apparel
    fit: { type: String, required: true },
    length: { type: String, required: true },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("kids", kidsSchema);
// "id": "k2",
//     "title": "EQ21 RUN SHOES",
//     "subtitle": "Performance",
//     "status": "new",
//     "gender": "kids",
//     "price": "₹2 500.00",
//     "pn": 2500,
//     "Division": "shoes",
//     "discount": 40,
//     "type": "foot",
//     "gallary": [
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/fb3c5953e3f444d18f9aac5300adae30_9366/EQ21_Run_Shoes_Blue_FX2253_01_standard.jpg",
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/24ffcc67a8ef49eebc85ac5300adbad4_9366/EQ21_Run_Shoes_Blue_FX2253_02_standard_hover.jpg",
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7280ad06446a4424ad68ac5300adc01a_9366/EQ21_Run_Shoes_Blue_FX2253_03_standard.jpg"
//     ],
//     "discription_head": "LIGHTWEIGHT, CUSHIONED RUNNING SHOES FOR KIDS.",
//     "discription": "Running around the backyard. Climbing trees at the park. When the world is their gym, these kids' shoes keeps them comfortable. The flexible upper rides on Bounce, a lightweight midsole for dynamic movement. Stretchy laces make these trainers easy to slip on, even if they haven't learned about bunny loops. This product is made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester. ",
//     "details1": [
//       "Crewneck",
//       "100% recycled polyester",
//       "Soft and breathable",
//       "Reflective running t-shirt",
//       "Jacquard"
//     ],
//     "details2": [
//       "This product has been made with Primegreen, a series of high-performance recycled materials using no virgin polyester.",
//       "Color: Victory Crimson",
//       "Product code: H25050"
//     ],
//     "value": [
//       "adidas India Marketing Private Limited, Office no. 6, 2nd Floor, Sector-B, Pocket no. 7, Plot no. 11, Vasant Kunj, New Delhi - 110070",
//       "2 N",
//       "Unisex",
//       "Vietnam"
//     ],
//     "rating": 4.8,
//     "comfort": 4.5,
//     "quality": 4.5,
//     "fit": "perfect",
//     "length": "perfect"
