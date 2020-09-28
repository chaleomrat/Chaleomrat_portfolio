const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res)=>{
    res.render('index',{myData});

});
router.get('/aboutme',(req,res)=>{
    res.render('about',{myData});
});
router.get('/education',(req,res)=>{
    res.send("<h1>My Education</h1>");

});
router.get('/workexperience',(req,res)=>{
    res.send("<h1>Work Experience</h1>");

});

router.get('/skill',(req,res)=>{
    res.send("<h1>My skill</h1>");

});
 module.exports = router;