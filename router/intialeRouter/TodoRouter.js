
const protect = require('../../middelware/intialeMiddelware/TodoMiddelware')
const express = require('express');
const router = express.Router();
router.use(express.json())

const { gettodo,  posttodo ,deletetodo} = require('../../controllers/intialeController/TodoControllers');


router.get('/get',protect,gettodo)
router.post('/add',protect,posttodo)
router.delete('/:_id',protect,deletetodo)




module.exports = router;
