var express = require('express');
var router = express.Router();
var mTest = require('../models/test');

var mAnswer = require('../models/Answer'); 

router.get('/data/:id',(req,res)=>{
  let id = req.params.id;
	res.json({idx:id})
});

router.get('/list',async (req,res)=>{
    let data = await mTest.findAnswer();
    res.json(data)
});

router.get('/add',async (req,res)=>{
  let jdata =[{a:10,b:20},{a:45,b:'2015-01-14'},{g:'xxxxxx'}];
  jdata.push({
    s:10,
    name:'utehn',
    l:"sssss"
  })
  let resp = await mAnswer.add(jdata);
  res.json(resp)
})

module.exports = router;
