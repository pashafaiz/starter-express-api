const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const wishlist = require('../model/WishlistModel');
const asyncHandler = require('express-async-handler');



const getwishlist = async(req, res) => {
    let data = await wishlist.find({ user_id: req.user});
    
    if(!data.length){
        res.status(200).json({ status: false, massage: "cart is empty"})
    }
    console.log("====>", data);
    res.status(200).json({ status: true, massage: data})
    
    }
    


const postwishlist =async(req, res) => {

    const { title, dis, price,img} = req.body
    if (!title && !dis && !price && !img ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await wishlist.create({ 
        title,
        dis,
        img,
        price,
        user_id:req.user

    });
    console.log("====>", data);
    res.status(200).json(data)
}

const deletewishlist =async(req,res)=>{
    const datas = await wishlist.findById(req.params._id);
    console.log("find id ===>",datas);

    console.log("=======>",req.params._id);
   if(!datas){
   res.ststus(400);
   res.json("user not found ")
   }
    const deleteResult = await wishlist.deleteMany({_id: datas._id});
    console.log("=====delete data=====>",deleteResult)
    res.status(200).json({massage:`delete data ${req.params._id}`}) 
}




module.exports = {
    getwishlist, postwishlist,deletewishlist
}