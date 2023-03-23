const express = require('express');
const app = express();
const { route } = require('./router/WishlistRouter');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');

const ConnectDB = require('./config/db');
ConnectDB()

app.use(express.urlencoded({ extended: false }));

app.get("/faiz",(req,res)=>{
    res.send("Helloo faizzz..............");
})

 app.use('/api/addtocard', require('./router/AddRouter'));
 app.use('/api/address', require('./router/AddreshRouter'));
// app.use('/api/wishlish',require('./routes/wishlistroutes'));
//  app.use('/api/signup', require('./routes/sginuproutes'));


app.listen(port, () => {
    console.log(`port is colled ${port}`)
});