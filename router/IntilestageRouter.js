// const { Router, json } = require('express');
const express = require('express');
const router = express.Router();
router.use(express.json)

const { getintiale, deleteintiale, postintiale } = require('../controllers/IntilestageControllers');

router.get('/get',getintiale)
router.post('/add',postintiale)
router.delete('/delete',deleteintiale)




module.exports = router;
