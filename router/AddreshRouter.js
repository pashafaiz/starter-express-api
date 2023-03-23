const express= require('express');
const protect = require('../middelware/AddresMiddelware')

const { getaddress, postaddress, deleteaddress } = require("../controllers/AddreshControllers");
const router = express.Router();

router.use(express.json())

router.get('/get',protect,getaddress)    
router.post('/add',protect,postaddress)
router.delete('/:_id',protect,deleteaddress)


module.exports = router;
 