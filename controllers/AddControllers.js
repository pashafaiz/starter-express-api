const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const addcard = require('../model/AddModel')
const asyncHandler = require('express-async-handler');



const getaddtocard = async(req, res) => {
let data = await addcard.find({ user_id: req.user});

if(!data.length){
    res.status(200).json({ status: false, massage: "cart is empty"})
}
console.log("====>", data);
res.status(200).json({ status: true, data})

}



const postaddtocard = async (req, res) => {

    const { title, image, disPrice, sellingPrice,disPrsent,color,COD, status, size, quentity } = req.body
    if (!title && !image && !disPrice && !sellingPrice && !disPrsent && !color && !COD && !status && !size && !quentity ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await addcard.create({ 
        title,
        image,
        disPrice,
        sellingPrice,
        disPrsent,
        color,
        COD,
        status,
        size,
        quentity,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}


const deleteaddtocard =  async(req,res)=>{
    let findid = await addcard.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
const deleteresult = await addcard.deleteMany({ _id: findid._id})   
    res.status(200).json({message : `delete data ${req.params.id}`});
 }




module.exports = {
    getaddtocard,
    postaddtocard,
    deleteaddtocard
}