const mongoose = require('mongoose');
const addtocards = new mongoose.Schema({
    title: {  type: String },
    image: {  type: String },
    disPrice: { type: String },
    sellingPrice: { type: String },
    disPrsent: { type: String },
    color: { type: String },
    COD: { type: String },
    status: { type: String },
    size: { type: String },
    quentity: { type: String }
}, 
{
    timestamps: true 
});
module.exports = mongoose.model("addtocart",addtocards)

