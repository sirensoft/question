var express = require('express');
var router = express.Router();
var Test = require('../models/test');

var mTest = new Test();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/data/:id',(req,res)=>{
  let id = req.params.id;
	res.json({id:id})
});

router.get('/topic',async (req,res)=>{
    let data = await mTest.findAnswer();
    res.json(data)
});

module.exports = router;
