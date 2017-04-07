var express = require('express');
var router = express.Router();
var mongo=require("mongodb");
var server=mongo.Server("localhost",27017,{auto_reconnect:true});
var db=new mongo.Db("blog",server,{safe:true});
/*后台管理*/
router.get('/admin', function(req, res, next) {
	var loginAdmin = req.session["loginAdmin"]
	db.open(function (err,db) {
	    db.collection("admin", function (err,collection) {
	    	collection.find({}).toArray(function(err,admin){
	    		if(admin.length==0){
	    			res.render('admin/regist', {});
	    		}else if(admin.length!=0 && !loginAdmin){
	    			res.render('admin/login', {});
	    		}else if(admin.length!=0 && loginAdmin){
	    			res.render('admin/index', {});
	    		}
	    		db.close();
	        });
	    });
    });
});
/*注册界面*/
router.get('/loadregist', function(req, res, next) {
	res.render('admin/regist', {});	
});
/*登陆界面*/
router.get('/loadlogin', function(req, res, next) {
	res.render('admin/login', {});	
});
//注册
router.get('/regist', function(req, res, next) {
    var name=req.query["name"]
    var password=req.query["password"]
    db.open(function (err,db) {
	    db.collection("admin", function (err,collection) {
	    	collection.find({name:name}).toArray(function(err,admin){
	    		if(admin.length==0){
	    			collection.insert({name:name,password:password}, function (err,docs) {
		                console.log(docs);
		                res.json({
		                	code:0,
							message : "注册成功"
						})
		            });
	    		}else{
	    			if(admin[0].name==name){
		    			res.json({
		    				code:1,
							message : "该用户名已经被注册"
						})
		    		}else{
		    			collection.insert({name:name,password:password}, function (err,docs) {
			                console.log(docs);
			                res.json({
			                	code:0,
								message : "注册成功"
							})
			            });
		    		}
	    		}
	    		db.close();
	        });
	    });
    });
});
/*登陆*/
router.get('/login', function(req, res, next) {
    var name=req.query["name"]
    var password=req.query["password"]
    db.open(function (err,db) {
	    db.collection("admin", function (err,collection) {
            collection.find({name:name}).toArray(function(err,admin){
	    		if(admin.length==0){
	                res.json({
	                	code:1,
						message : "该用户名不存在"
					})
	    		}else{
	    			if(admin[0].password==password){
	    				req.session["loginAdmin"] = JSON.stringify(admin[0])
		    			res.json({
		    				code:0,
							message : "登陆成功"
						})
		    		}else{
		    			res.json({
		    				code:2,
							message : "密码错误"
						})
		    		}
	    		}
	    		db.close();
	        });
	    });
    });
});
router.get('/admincancel', function(req, res, next) {
	delete req.session["loginAdmin"];
	res.json({
		code:0
	})
});

module.exports = router;