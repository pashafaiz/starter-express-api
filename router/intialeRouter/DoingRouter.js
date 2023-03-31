const protect = require('../../middelware/intialeMiddelware/DoingMiddelware')
const express = require('express');
const router = express.Router();
router.use(express.json())

const { getDoing, postDoing, deleteDoing} = require('../../controllers/intialeController/DoingController');


router.get('/get',protect,getDoing)
router.post('/add',protect,postDoing)
router.delete('/:_id',protect,deleteDoing)




module.exports = router;
