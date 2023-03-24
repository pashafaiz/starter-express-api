const express= require('express');
const {Categories,Westerndresscollections,Specialsareecollections } = require('./data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})    
router.get('/WDC',(req,res)=>{
    res.json({status:true,data:Westerndresscollections})
}) 
router.get('/SSC',(req,res)=>{
    res.json({status:true,data:Specialsareecollections})
})


module.exports = router;
