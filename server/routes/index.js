var express = require('express');
var router = express.Router();
var fs = require("fs");
var PATH = "./public/jsonData/";
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
/*获取约跑步列表*/
router.get('/sportList', function (req, res, next) {
    fs.readFile(PATH+"sportList.json","utf-8",function (err,data) {
        if(err){
            return res.send({
                status:0,
                info:"读取文件异常"
            });
        }
        var obj = JSON.parse(data);
        var arr = obj.data;
        res.send(arr);
    });
});
/*获取约出行列表*/
router.get('/travelList', function (req, res, next) {
    fs.readFile(PATH+"travelList.json","utf-8",function (err,data) {
        if(err){
            return res.send({
                status:0,
                info:"读取文件异常"
            });
        }
        var obj = JSON.parse(data);
        var arr = obj.data;
        res.send(arr);
    });
});
/*获取约跑步详情*/
router.get('/sportDetail', function (req, res, next) {
    var  dataObj=req.query;
    fs.readFile(PATH+"sportDetail.json","utf-8",function (err,data) {
        if(err){
            return res.send({
                status:0,
                info:"读取文件异常"
            });
        }
        var obj = JSON.parse(data);
        var arr = obj.data;
        if (dataObj.sportId == arr.objectId) {
            res.send(arr);
        }
    });
});
/*获取约出行详情*/
router.get('/travelDetail', function (req, res, next) {
    var  dataObj=req.query;
    fs.readFile(PATH+"travelDetail.json","utf-8",function (err,data) {
        if(err){
            return res.send({
                status:0,
                info:"读取文件异常"
            });
        }
        var obj = JSON.parse(data);
        var arr = obj.data;
        if (dataObj.travelId == arr.objectId) {
            res.send(arr);
        }
    });
});
/*获取出行活动点击次数*/
router.get("/travelClickNum", function (req, res) {
    var dataObj = req.query;
    fs.readFile(PATH+"myTravel.json", "utf-8", function (err, data) {
        if(err){
            return res.send({
                status:0,
                info:"读取文件异常"
            });
        }
        var myTravel = JSON.parse(data);
        for (var i = 0; i < myTravel.data.length; i++) {
            if (dataObj.travelId == myTravel.data[i].objectId) {
                res.send(myTravel.data[i].clicks);
            }
        }

    });
});
module.exports = router;
