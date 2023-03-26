const express= require('express');
const {Categories,Westerndresscollections,Specialsareecollections,Dressesforyou ,Swaiper} = require('./data')

const router = express.Router();

router.use(express.json())


router.get('/',(req,res)=>{
    res.json({status:true,Categories})
})    
router.get('/WDC',(req,res)=>{
    res.json({status:true,data:Westerndresscollections})
}) 
router.get('/SSC',(req,res)=>{
    res.json({status:true,Specialsareecollections})
})
router.get('/DFU',(req,res)=>{
    res.json({status:true,Dressesforyou})
})
router.get('swiper',(req,res)=>{
    res.json({status:true,Swaiper})
})


module.exports = router;
