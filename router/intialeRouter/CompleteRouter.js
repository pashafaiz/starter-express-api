const protect = require('../../middelware/intialeMiddelware/CompleteMiddelware')
const express = require('express');
const router = express.Router();
router.use(express.json())

const {  getComplete, deleteComplete, postComplete} = require('../../controllers/intialeController/CompleteController');


router.get('/get',protect,getComplete)
router.post('/add',protect,postComplete)
router.delete('/:_id',protect,deleteComplete)




module.exports = router;
