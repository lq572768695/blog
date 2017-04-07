var express = require('express');
var router = express.Router();
var mongo=require("mongodb");
var server=mongo.Server("localhost",27017,{auto_reconnect:true});
var db=new mongo.Db("test",server,{safe:true});
/*首页*/
router.get('/', function(req, res, next) {
  res.render('index/index', {});
});

module.exports = router;
