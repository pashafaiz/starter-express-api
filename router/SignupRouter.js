const express = require('express');
const router = express.Router();
router.use(express.json());

const { postsignup, LoginUser} = require('../controllers/SingupControllers')

router.post('/signup',postsignup)
router.post('/login',LoginUser)

module.exports = router