const mongoose = require('mongoose');

const intiale = new mongoose.Schema({
    Write:{type:String},
    Remove:{type:String},
},


{
    timestamps: true 
});
module.exports = mongoose.model("intiale add",intiale)
