var express = require('express');
var router = express.Router();
var mTopic = require('../models/Topic');

router.get('/',(req,res)=>{
    res.json({id:"topic"});
});

router.post('/create',async (req,res)=>{
    console.log(req.body);
    const {topic,desc,created,updated} = req.body;
    let effect = await mTopic.create(topic,desc,created,updated)
    res.json(effect);
});

module.exports = router;