var express = require('express');
var router = express.Router();
var fs = require("fs");
var query = require("querystring");
var PATH = "./public/jsonData/";
//读取数据模块，供客户端调用
//查询接口，token校验
//公共接口，无需校验
/* GET users listing. */

/*获取用户信息*/
router.get("/userInfo", function (req, res) {
    var dataObj = req.query;
    fs.readFile(PATH + "userInfo.json", "utf-8", function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: "读取文件异常"
            });
        }
        var userInfo = JSON.parse(data);
        if (dataObj.userId == userInfo.data.objectId) {
            res.send(userInfo.data);
        }
    });
});
/*获取用户自己发布的约行*/
router.get("/myTravel", function (req, res) {
    var dataObj = req.query;
    fs.readFile(PATH + "myTravel.json", "utf-8", function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: "读取文件异常"
            });
        }
        var myTravel = JSON.parse(data);
        for (var i = 0; i < myTravel.data.length; i++) {
            if (dataObj.travelId == myTravel.data[i].objectId) {
                res.send(myTravel.data[i]);
            }
        }
    });
});
/*登录*/
router.post("/userLogin", function (req, res) {
    var dataStr = "";
    req.on("data", function (data) {
        dataStr += data;
    });
    req.on("end", function () {
        var dataObj = query.parse(dataStr);
        var bol=false;
        fs.readFile(PATH + "login.json", "utf-8", function (err, data) {
            if (err) {
                return res.send({
                    status: 0,
                    info: "读取文件异常"
                });
            }
            var userObj = JSON.parse(data);
            for (var i = 0; i < userObj.length; i++) {
                if (dataObj.username == userObj[i].username && dataObj.password == userObj[i].password) {
                    bol=true;
                    fs.readFile(PATH + "userInfo.json", "utf-8", function (err, data) {
                        if (err) {
                            return res.send({
                                status: 0,
                                info: "读取文件异常"
                            });
                        }
                        // console.log(dataObj);
                        var userInfo = JSON.parse(data);
                        var userBol=false;
                        for (var j = 0; j < userInfo.length; j++) {
                            if (dataObj.username == userInfo[j].data.username) {
                                userBol=true;
                                return res.send(userInfo[j]);
                            }
                        }

                    });
                }
            }
            if(!bol){
                return res.send("用户名或密码错误");
            }
        });
    });
});
/*注册*/
router.post("/userRegist", function (req, res, next) {
    var dataStr = "";
    req.on("data", function (data) {
        dataStr += data;
    });
    req.on("end", function () {
        var dataObj = query.parse(dataStr);
        console.log(dataObj);
        var bol=false;
        //版本二
        fs.readFile(PATH + "login.json", "utf-8", function (err, data) {
            if (err) {
                return res.send({
                    status: 0,
                    info: "读取文件异常"
                });
            }
            //用户信息数组

            var loginArr = JSON.parse(data);
            for (var i = 0; i < loginArr.length; i++) {
                //判断用户名是否注册
                if (dataObj.username != loginArr[i].username) {
                    bol=true;
                    //读取注册文件
                    fs.readFile(PATH + "userInfo.json", "utf-8", function (err, data) {
                        var infoArr = JSON.parse(data);
                        var addInfo = {
                            data: {
                                universities: "东理",
                                sex: "男",
                                nickname: "哈哈",
                                username: dataObj.username,
                                emailVerified: false,
                                mobilePhoneNumber: dataObj.username,
                                avatar: "http://ac-aFkydcqQ.clouddn.com/a96b23926358c9999112.jpg",
                                mobilePhoneVerified: true,
                                objectId: "5836c4ea67f3560065f52b5d",
                                createdAt: "2016-11-24T10:46:02.407Z",
                                updatedAt: "2017-02-21T14:54:27.169Z"
                            },
                            success: true
                        };
                        infoArr.push(addInfo);
                        fs.writeFile(PATH + "userInfo.json", JSON.stringify(infoArr), "utf-8", function () {
                            return res.send(addInfo);
                        })
                    });
                    //用户密码数组
                    loginArr.push(dataObj);
                    fs.writeFile(PATH + "login.json", JSON.stringify(loginArr), "utf-8", function () {
                        console.log("1");
                        // res.send("1")
                        return;
                    });
                    break;
                }
            }
            if(!bol){
                return res.send("该账号已存在，请直接登陆");
            }
        });
        //版本1
        /*fs.readFile(PATH + "userInfo.json", "utf-8", function (err, data) {
            if (err) {
                return res.send({
                    status: 0,
                    info: "读取文件异常"
                });
            }
            //用户信息数组
            var infoArr = JSON.parse(data);
            for (var i = 0; i < infoArr.length; i++) {
                //判断用户名是否注册
                if (dataObj.username != infoArr[i].data.username) {
                    bol=true;
                    //读取注册文件
                    fs.readFile(PATH + "login.json", "utf-8", function (err, data) {
                        //用户密码数组
                        var loginArr = JSON.parse(data);
                        loginArr.push(dataObj);
                        fs.writeFile(PATH + "login.json", JSON.stringify(loginArr), "utf-8", function () {
                            console.log("1");
                            // res.send("1")
                            return;
                        });
                        var addInfo = {
                            data: {
                                universities: "东理",
                                sex: "男",
                                nickname: "哈哈",
                                username: dataObj.username,
                                emailVerified: false,
                                mobilePhoneNumber: dataObj.username,
                                avatar: "http://ac-aFkydcqQ.clouddn.com/a96b23926358c9999112.jpg",
                                mobilePhoneVerified: true,
                                objectId: "5836c4ea67f3560065f52b5d",
                                createdAt: "2016-11-24T10:46:02.407Z",
                                updatedAt: "2017-02-21T14:54:27.169Z"
                            },
                            success: true
                        };
                        infoArr.push(addInfo);
                        fs.writeFile(PATH + "userInfo.json", JSON.stringify(infoArr), "utf-8", function () {
                            return res.send(addInfo);
                        })
                    });
                }
            }
            if(!bol){
                return res.send("该账号已存在，请直接登陆");
            }
        });*/
    });
});
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });
module.exports = router;
