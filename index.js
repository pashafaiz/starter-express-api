const express = require('express');
const app = express();
const { route } = require('./router/WishlistRouter');
const dotenv = require('dotenv').config();
const path=require('path');
const multer =require('multer');
const port = process.env.PORT || 5000;
app.use("/uploads/images", express.static(path.join("uploads", "images")));
const cors = require('cors');

const ConnectDB = require('./config/db');
const fileUpload = require('./utils/fileUpload');
ConnectDB();

app.use(express.urlencoded({ extended: false }));

app.get("/faiz",(req,res)=>{
    res.send("Helloo faizzzzz..............");
})
app.use(cors());
app.use('/api/allCategories',require('./dataRouter'));
 app.use('/api/addtocard', require('./router/AddRouter'));
 app.use('/api/address', require('./router/AddreshRouter'));
app.use('/api/wishlish',require('./router/WishlistRouter'));
 app.use('/api/shopeen', require('./router/SignupRouter'));
 app.use('/api/intiles',require('./router/intialeRouter/IntilestageRouter'));
 app.use('/api/todo',require('./router/intialeRouter/TodoRouter'))
 app.use('/api/doing',require('./router/intialeRouter/DoingRouter'));
 app.use('/api/complete',require('./router/intialeRouter/CompleteRouter'))
 

app.listen(port, () => {
    console.log(`port is colled ${port}`)
});


app.post("/create",
fileUpload("profile").array("photo",5),
(req,res)=>{
    console.log("=====>",req.body);
    res.json({  message: "image added...", image: `http://localhost:8000/uploads/images/profile/${req.files[0].filename}` })})
