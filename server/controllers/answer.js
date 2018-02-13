var express = require('express');
var router = express.Router();
var mAnswer = require('../models/Answer');
router.post('/create',async (req,res)=>{
    let resp = await mAnswer.create(req.body);
    res.json(resp);
});

module.exports = router;