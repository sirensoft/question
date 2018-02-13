var express = require('express');
var router = express.Router();
var mTopic = require('../models/Topic');



router.get('/',async (req,res)=>{
    let raw = await mTopic.findAll();
    res.json(raw);
});

router.get('/:id',async (req,res)=>{
    let {id}=req.params;
    let raw = await mTopic.find(id);
    res.json(raw[0].topic)
});

module.exports = router;