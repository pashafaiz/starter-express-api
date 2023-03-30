// const { Router, json } = require('express');
const protect = require('../../middelware/intialeMiddelware/IntilestageMiddelware')
const express = require('express');
const router = express.Router();
router.use(express.json())

const { getintiale, deleteintiale, postintiale } = require('../../controllers/intialeController/IntilestageControllers');

router.get('/get',protect,getintiale)
router.post('/add',protect,postintiale)
router.delete('/:_id',protect,deleteintiale)




module.exports = router;
