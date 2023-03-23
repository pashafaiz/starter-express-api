const mongoose = require('mongoose');
const wishlist = new mongoose.Schema({
    title: {  type: String },
    dis: { type: String },
    price: {type: String},
    img: {type: String},
    user_id:{type:String}
}, 
{
    timestamps: true
});


module.exports = mongoose.model('wishlist', wishlist)