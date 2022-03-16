const mongoose = require("mongoose");

const mensSchema = new mongoose.Schema(
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
    details2: { type: Array, required: true },
    value: { type: Array, required: true },
    rating: { type: Number, required: true },
    comfort: { type: Number, required: true }, //only coupons, exclusive, bogo and more
    quality: { type: Number, required: true }, //babies & kids, clothing and apparel
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("mens", mensSchema);

// "style": [],
// "_id": "6230898d51e8172e13feeeb4",
// "id": "m4",
// "title": "ADILETTE SLIDES",
// "subtitle": "Mens Original",
// "status": "new",
// "gender": "men",
// "price": "₹3 599.00",
// "pn": 3599,
// "Division": "shoes",
// "discount": 30,
// "type": "foot",
// "gallary": [
//     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e4850c6019841138e38a7fa00de8937_9366/Adilette_Slides_Black_280647_01_standard.jpg",
//     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/306114d8c6e94df18f8da46c00ca113e_9366/Adilette_Slides_Black_280647_03_standard.jpg",
//     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/43ff07ffb8174bed9c79a46c00ca16b4_9366/Adilette_Slides_Black_280647_02_standard_hover.jpg"
// ],
// "discription_head": "EVERYDAY SLIDES WITH HERITAGE STYLE.",
// "discription": "The Adilette debuted in 1970 as a shower slide for the German national football team during the world's biggest match in Mexico before being officially released back in '72. It's been a style mainstay of adidas ever since. These slides stay true to the original look with a contoured footbed and 3-Stripes across the bandage upper.",
// "details1": [
//     "Regular fit",
//     "Slip-on design",
//     "PU-coated synthetic bandage upper",
//     "Quick-dry lining"
// ],
// "details2": [
//     "Contoured footbed",
//     "Polyurethane outsole",
//     "Color: Core Black / White / Core Black",
//     "Product code: 280647"
// ],
// "value": [
//     "adidas India Marketing Private Limited, Office no. 6, 2nd Floor, Sector-B, Pocket no. 7, Plot no. 11, Vasant Kunj, New Delhi - 110070",
//     "2 N",
//     "Men",
//     "Italy"
// ],
// "rating": "4.5",
// "comfort": "4.1",
// "quality": "4.4"
