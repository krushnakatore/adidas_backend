const mongoose = require("mongoose");

const womensSchema = new mongoose.Schema(
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
    style: { type: Array, required: true }, //0-49 or 50-80%
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

module.exports = mongoose.model("womens", womensSchema);
// "_id": "6230891e51e8172e13feee9a",
// "id": "w1",
// "title": "ADICOLOR CLASSICS TREFOIL TEE",
// "subtitle": "womens original",
// "status": "new",
// "gender": "women",
// "price": "₹1 999.00",
// "pn": 1999,
// "Division": "clothing",
// "discount": 30,
// "type": "top",
// "gallary": [
//     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5723c82bd8f04f18b247ac29010d28b4_9366/Adicolor_Classics_Trefoil_Tee_White_GN2899_25_model.jpg",
//     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00bac092fc8047c798beac29010d1aa7_9366/Adicolor_Classics_Trefoil_Tee_White_GN2899_23_hover_model.jpg",
//     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/707f2410d5ce41c5a90bac29010d68cf_9366/Adicolor_Classics_Trefoil_Tee_White_GN2899_01_laydown.jpg"
// ],
// "discription_head": "AN EVERYDAY T-SHIRT WITH AUTHENTIC STYLE.",
// "discription": " The brand with the 3-Stripes strives to be better. To be the best. Created to be truly original, the Adicolor collection keeps heritage its heart. The iconic Trefoil logo celebrates that energy front and centre on this adidas classic t-shirt. Soft single jersey feels soft against your skin. Our cotton products support sustainable cotton farming. This is part of our ambition to end plastic waste.",
// "details1": [
//     "Regular fit",
//     "Ribbed crewneck",
//     " 92% cotton",
//     "8% elastane single jersey",
//     " Soft feel"
// ],
// "details2": [
//     "Big Trefoil logo on front",
//     "Single jersey",
//     " Color: White",
//     " Product code: GN2899"
// ],
// "style": [
//     "https://photorankmedia-a.akamaihd.net/media/v/c/7/vc726z4/normal.jpg"
// ],
// "value": [
//     "adidas India Marketing Private Limited, Office no. 6, 2nd Floor, Sector-B, Pocket no. 7, Plot no. 11, Vasant Kunj, New Delhi - 110070",
//     "1 N",
//     "Women",
//     "India"
// ],
// "rating": 4.5,
// "comfort": 4.5,
// "quality": 4.7,
// "fit": "perfect",
// "length": "perfect"
