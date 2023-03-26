const express = require('express');
const app = express();
const { route } = require('./router/WishlistRouter');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');

const ConnectDB = require('./config/db');
ConnectDB()

app.use(express.urlencoded({ extended: false }));

// app.get("/faiz",(req,res)=>{
//     res.send("Helloo faizzz..............");
// })
app.use(cors())
app.use('/api/allCategories',require('./dataRouter'))
 app.use('/api/addtocard', require('./router/AddRouter'));
 app.use('/api/address', require('./router/AddreshRouter'));
app.use('/api/wishlish',require('./router/WishlistRouter'));
 app.use('/api/shopeen', require('./router/SignupRouter'));


app.listen(port, () => {
    console.log(`port is colled ${port}`)
});