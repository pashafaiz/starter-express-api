const express= require('express');
const protect = require('../middelware/WishlistMiddelware')

const { getwishlist, postwishlist, deletewishlist } = require("../controllers/WishlistControllers");
const router = express.Router();
router.use(express.json())


router.get('/get',protect,getwishlist)    
router.post('/add',protect,postwishlist)
router.delete('/:_id',protect,deletewishlist)


module.exports = router;