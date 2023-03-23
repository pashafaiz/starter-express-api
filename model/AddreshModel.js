const mongoose = require('mongoose');
const address = new mongoose.Schema({
    FirstName: {  type: String },
    LastName: { type: String },
    PhoneNumber: {type: String},
    Streetaddress: {type: String},
    locality: { type: String},
    TownCity: {type: String},
    PostCode:{ type:String },
    state:{type:String},
    addresstype:{type:String},
    user_id:{type:String}
}, 
{
    timestamps: true
});

module.exports = mongoose.model('address', address);