const express= require('express');
const {Categories,Westerndresscollections,Specialsareecollections,Dressesforyou } = require('./data')

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
router.get('/   ',(req,res)=>{
    res.json({status:true,Dressesforyou})
})


module.exports = router;
