require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"AvatarFactory":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b763fv75yFHS7XLcU6iAr+x', 'AvatarFactory');
// scripts/P9/context/AvatarSystem/AvatarFactory.js

var MVC = require("FWS_MVC");
var MathUtility = require("MathUtility");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //头像按钮
        AvatarButton: {
            "default": null,
            type: cc.Button
        },
        //空位文字
        kong: {
            "default": null,
            type: cc.Label
        },
        //倒计时的背景
        barBg: {
            "default": null,
            type: cc.Sprite
        },
        //倒计时的圈
        progressBar: {
            "default": null,
            type: cc.ProgressBar
        },
        //头像的载体
        Avatar: {
            "default": null,
            type: cc.Sprite
        },
        //名字的载体
        nameLabel: {
            "default": null,
            type: cc.Label
        },
        //房主的标记点
        dian: {
            "default": null,
            type: cc.Sprite
        },
        //圆形的节点
        mask: {
            "default": null,
            type: cc.Mask
        },
        //弃牌的背景
        qipaiBg: {
            "default": null,
            type: cc.Sprite
        },
        //弃牌的文字
        qiPaiLabel: {
            "default": null,
            type: cc.Label
        },
        //倒计时时半透明的灰色遮罩
        shadow: {
            "default": null,
            type: cc.Sprite
        },
        //倒计时的文字
        BarNum: {
            "default": null,
            type: cc.Label
        }
    },

    onLoad: function onLoad() {
        cc.log("schedule回调调用了");

        // var kk = new MathUtility();
        // this.BarNum.node.setPosition(cc.p(20,30));
        // this.Avatar.node.setPosition(cc.p(40,50));
        // var ss=kk.GetAngle(cc.p(-317,233),cc.p(317,233));
        // cc.log("我的天哪",ss);
        this.connect();
        //this.initTypeLocation();
    },
    onDestory: function onDestory() {
        cc.log("wo bei shan chu le ");
        this.disconnect();
    },
    //初始化
    initType: function initType() {
        this.AvatarButton.node.active = true;
        this.kong.node.active = true;
        this.barBg.node.active = true;
        this.progressBar.node.active = true;
        this.Avatar.node.active = true;
        this.nameLabel.node.active = true;
        this.dian.node.active = true;
        this.mask.node.active = true;
        this.qipaiBg.node.active = true;
        this.qiPaiLabel.node.active = true;
        this.shadow.node.active = true;
        this.BarNum.node.active = true;
    },
    //加入牌局时候的初始化
    initTypeJoinParty: function initTypeJoinParty() {
        cc.log("wanawdasjdkhaskdjha");
        //缩小
        this.AvatarButton.node.scale = 0.8;
        this.mask.node.active = false;
        this.nameLabel.node.active = false;
        this.barBg.node.active = false;
    },
    //上桌时候的初始化
    initTypeServe: function initTypeServe() {
        this.mask.node.active = false;
        this.nameLabel.node.active = false;
        this.barBg.node.active = false;
    },
    //空座位的初始化
    initTypeNull: function initTypeNull() {
        this.barBg.node.active = false;
        this.Avatar.node.active = false;
    },
    //倒计时时的初始化
    initTypeProgressBar: function initTypeProgressBar() {
        this.dian.node.active = false;
        this.qipaiBg.node.active = false;
    },
    //弃牌时的初始化
    initTypeChess: function initTypeChess() {
        this.barBg.node.active = false;
        this.dian.node.active = false;
        this.shadow.node.active = false;
    },
    //定座（正常行牌）时的初始化
    initTypeLocation: function initTypeLocation() {
        this.barBg.node.active = false;
        this.dian.node.active = false;
        this.mask.node.active = false;
    },
    click: function click() {
        cc.log("sadasdasda");
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    onFMessage_Avatar: function onFMessage_Avatar(msg) {
        if (msg.args.name == this.node.name) {
            if (msg.args.name == "initTypeLocation") {
                this.initType();
                this.initTypeLocation();
            }
            if (msg.args.name == "initTypeChess") {
                this.initType();
                this.initTypeChess();
            }
            if (msg.args.name == "initTypeProgressBar") {
                this.initType();
                this.initTypeProgressBar();
                this.kaqidingshiqi();
            }
            if (msg.args.name == "initTypeNull") {
                this.initType();
                this.initTypeNull();
            }
            if (msg.args.name == "initTypeServe") {
                this.initType();
                this.initTypeServe();
            }
            if (msg.args.name == "initTypeJoinParty") {
                this.initType();
                this.initTypeJoinParty();
            }
            msg.complete();
        }
    },
    _updateProgressBar: function _updateProgressBar(progressBar, dt) {
        cc.log("回调调用了");
        var progress = progressBar.progress;
        //var progress = 1;
        if (progress < 1.0 && this._pingpong) {
            cc.log("回调调用了11111");
            // progress += dt * this.speed;
            progress += 0.0071;
        } else {
            cc.log("回调调用了22222");
            // progress -= dt * this.speed;
            progress -= 0.0071;
            this._pingpong = progress <= 0;
        }
        // this.BarNum.string=parseInt(progress*10);
        this.BarNum.string = parseInt(dt);
        progressBar.progress = progress;
    },
    kaqidingshiqi: function kaqidingshiqi() {
        var dt = 15;
        this._pingpong = true;
        this.schedule(function () {
            cc.log("schedule回调调用了");
            dt -= 0.1;
            this._updateProgressBar(this.progressBar, dt);
        }, 0.1, 140);
    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","MathUtility":"MathUtility"}],"AvatarScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'eae29rZ60hB0LbDHpatQdny', 'AvatarScript');
// scripts/P9/context/AvatarSystem/AvatarScript.js

var MVC = require("FWS_MVC");
//上桌数
var shangZhuoNum;
var zhunBeiNum;
var zhunBeiArray = [];
var MathUtility = require("MathUtility");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        AvatarPrefab: {
            "default": null,
            type: cc.Prefab
        },
        scrollView: {
            "default": null,
            type: cc.ScrollView
        },
        // horizontalBar: {
        //     type: cc.ProgressBar,
        //     default: null
        // },
        //当前是几人桌
        seatNum: 9,
        //左侧的X坐标
        leftPositionX: -310,
        //右侧的X坐标
        rightPositionX: 310,
        //上面左侧的x坐标
        upPositionX_shuangl: -151,
        //上面右侧的x坐标
        upPositionX_shuangr: 151,
        //上面一个人时候x坐标
        upPositionX_dan: 0,
        //上面Y坐标
        upPositionY: 527,
        //下面x坐标
        downPositionX: 0,
        //下面y坐标
        downPositionY: -480,
        //左右Y坐标的最大值
        upMaxPosition: 310,
        //左右Y坐标的最小值
        downMaxPosition: -170,
        //观看的人数
        lookOnNum: 0,
        //上桌的人数
        playNum: 0,
        //上桌人数中最高的
        upBedTableMax: 215,
        //上桌人数中最低的
        downBedTableMax: 115,
        //圆心点
        PointP: cc.p(0, 670),
        //偏转角度
        angle: 0.0174532,
        //半径长度
        distance: 555
    },

    // use this for initialization
    onLoad: function onLoad() {
        // var newStar = cc.instantiate(this.scrollView);
        // this.node.addChild(newStar);
        shangZhuoNum = this.playNum;
        zhunBeiNum = 0;
        this.connect();
        this.newSeat();
        this.newBedTable();
    },
    onDestory: function onDestory() {

        this.disconnect();
    },
    //创建牌桌上的空位
    newSeat: function newSeat() {
        for (var i = 0; i < this.seatNum; i++) {
            var newStar = cc.instantiate(this.AvatarPrefab);
            newStar.name = "initTypeNull";
            this.node.addChild(newStar);
            newStar.setPosition(this.setSeatPosition(i));
        }
        var msg1 = new MVC.FMessage("Avatar", "root");
        msg1.args.name = "initTypeNull";
        msg1.send();
    },
    //返回设置拍桌上空座位的位置
    setSeatPosition: function setSeatPosition(i) {
        var pX = 0;
        var pY = 0;
        if (this.seatNum % 2 == 0) {
            cc.log("第一个");
            if (i == this.seatNum / 2 || i == 0) {
                pX = this.downPositionX;

                if (i == 0) {
                    pY = this.downPositionY;
                } else {
                    pY = this.upPositionY;
                }
            } else if (i > 0 && i < this.seatNum / 2) {
                pX = this.rightPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * i + this.downMaxPosition;
            } else {
                pX = this.leftPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * (this.seatNum - i) + this.downMaxPosition;
            }
        } else if (this.seatNum % 2 == 1) {
            cc.log("第二个");
            if (i == 0) {
                cc.log("i=0");
                pX = this.downPositionX;
                pY = this.downPositionY;
            } else if (i < this.seatNum / 2 + 1 && i > this.seatNum / 2 - 1) {
                if (i < this.seatNum / 2) {
                    pX = this.upPositionX_shuangr;
                } else {
                    pX = this.upPositionX_shuangl;
                }
                pY = this.upPositionY;
            } else if (i > 0 && i < this.seatNum / 2 - 1) {
                cc.log("i=zuo");
                pX = this.rightPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * i + this.downMaxPosition;
            } else {
                cc.log("i=you");
                pX = this.leftPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * (this.seatNum - i) + this.downMaxPosition;
            }
        }
        // cc.log("x",pX);
        // cc.log("y",pY);
        return cc.p(pX, pY);
    },
    newBedTable: function newBedTable() {
        var add = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

        if (add == 0 || add == null) {

            for (var i = 0; i < shangZhuoNum; i++) {
                var newStar = cc.instantiate(this.AvatarPrefab);
                newStar.name = "initTypeServe";
                newStar.tag = 100 + i;
                this.node.addChild(newStar);
                newStar.setPosition(this.setBedTable(i));
                var msg1 = new MVC.FMessage("Avatar", "root");
                msg1.args.name = "initTypeServe";
                msg1.send();
            }
        } else {
            var newStar = cc.instantiate(this.AvatarPrefab);
            newStar.name = "initTypeServe";
            newStar.tag = 100 + add;
            this.node.addChild(newStar);
            newStar.setPosition(this.setBedTable(add));
            var msg1 = new MVC.FMessage("Avatar", "root");
            msg1.args.name = "initTypeServe";
            msg1.send();
            //newStar.node.opacity = 0;
        }
    },
    setBedTable: function setBedTable(i) {
        //每个头像之间相差的角度（360度的记法）
        var jiaodu;
        //总数为单双时第一个头像的位置
        var startPositon;
        if (shangZhuoNum % 2 == 0) {
            jiaodu = 12.857;
            startPositon = 225 + jiaodu * parseInt((8 - shangZhuoNum) / 2);
        } else {
            jiaodu = 11.25;
            startPositon = 225 + jiaodu * parseInt((9 - shangZhuoNum) / 2);
        }
        cc.log("startPositon", i * jiaodu + startPositon);
        var Temporary = new MathUtility();
        cc.log(Temporary.GetPosition(this.PointP, i * jiaodu + startPositon, this.distance));
        return Temporary.GetPosition(this.PointP, i * jiaodu + startPositon, this.distance);
    },
    clicksignUpButton: function clicksignUpButton() {
        var msg = new MVC.FMessage("MTTSNGclicksignUpButton", "room");
        msg.args.name = "MTTSNGclicksignUpButton进入倒计时";
        msg.send();
        cc.log("clicksignUpButton");
    },
    click: function click() {
        if (shangZhuoNum < 9) {
            shangZhuoNum++;
            this.shangzhuoAction();

            this.removeLookOn(1);
        }
    },
    //游戏开始时上桌的动画
    clickkaiju: function clickkaiju() {
        for (var i = 0; i < shangZhuoNum; i++) {
            var actionBy = cc.moveTo(0.5, this.setSeatPosition(i));
            this.node.getChildByTag(100 + i).runAction(actionBy);
        }
    },
    //上桌的动画
    shangzhuoAction: function shangzhuoAction() {
        /*
            一个人的时候没有动画
            多人的时候先显示新加入的人，然后之前的人移动
        */
        //获取最后加入的人的位置
        this.newBedTable(shangZhuoNum - 1);
        // var _fadeTo = cc.fadeIn(0.5,0);
        // this.node.getChildByTag(shangzhuonum-1).runAction(_fadeTo);
        for (var i = 0; i < shangZhuoNum - 1; i++) {
            var actionBy = cc.moveTo(0.3, this.setBedTable(i));
            this.node.getChildByTag(100 + i).runAction(actionBy);
        }
    },
    //有人加入牌局的时候调用，创建头像对象，并且加入到数组中
    setLookOn: function setLookOn() {
        zhunBeiNum++;
        var her = cc.instantiate(this.AvatarPrefab);
        her.name = "initTypeJoinParty";
        her.tag = 200 + zhunBeiNum;
        her.setPositionY(0);
        //把这个对象加入到数组便于管理
        zhunBeiArray.push(her);
        this.scrollView.content.addChild(her);
        var msg1 = new MVC.FMessage("Avatar", "root");
        msg1.args.name = "initTypeJoinParty";
        msg1.send();
    },
    //遍历数组删除离开或者上桌的对象，并且remove该对象
    removeLookOn: function removeLookOn(tag) {
        //遍历数组并且删除相应的元素
        cc.log("遍历前", zhunBeiArray.length);
        for (var i = 0; i < zhunBeiArray.length; i++) {
            if (zhunBeiArray[i].tag == 200 + tag) {
                this.scrollView.content.removeChildByTag(200 + tag);
                zhunBeiArray.splice(i, 1);
            }
            cc.log(zhunBeiArray[i].tag);
        }

        cc.log("遍历后", zhunBeiArray.length);

        // for(var i =200+tag+1;i<zhunBeiNum;i++){
        //      this.scrollView.content.getChildByUuid(i).tag=i-1;
        // }
    }
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","MathUtility":"MathUtility"}],"FEnvironment":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2cf266tquRFf7SS29yUSWSf', 'FEnvironment');
// scripts/FWS/FEnvironment.js

/*
 * 环境参数
 * @Author: thor.liu 
 * @Date: 2016-12-05 14:26:34 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-13 18:48:21
 */

var FEnvironment = cc.Class({
  name: "FEnvironment",
  ctor: function ctor() {},

  statics: {

    //────────────────────────────────────────────────────────── 参数定义

    /**
     * TCP服务器IP地址
     */
    tcpServerIP: "127.0.0.1",
    /**
     * TCP服务器端口
     */
    tcpServerPort: 4000,
    /**
     * WEB服务基础地址 (功能接口的基础地址)
     */
    httpApiBaseUrl: "http://localhost:8080/api/",

    /**
     * WEB页基础地址 (WEB界面或者网页的基础地址)
     */
    webPageBaseUrl: "http://api.nicefold.com/",

    //────────────────────────────────────────────────────────── 当前用户信息

    userInfo: {
      id: "", //当前用户id
      token: "", //当前用户身份标志
      display: { //<当前用户的显示信息> 
        name: "", //当前用户的昵称
        avatar: "" //当前用户的头像地址
        //...
      }
    },

    //────────────────────────────────────────────────────────── 方法定义

    getWebApiUrl: function getWebApiUrl(apiUrl) {
      return FEnvironment + apiUrl;
    }
  }
});

module.exports = FEnvironment;

cc._RFpop();
},{}],"FLanguage":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f9edcnkxL9CVokpH+Cg2ZyG', 'FLanguage');
// scripts/FWS/Utils/FLanguage.js

/*
 * 多语言支持
 * @Author: thor.liu 
 * @Date: 2016-12-05 17:57:50 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-05 18:50:05
 */
var FLanguage = cc.Class({
    name: "FLanguage",
    ctor: function ctor() {},

    statics: {
        data: {},
        init: function init() {
            if (FLanguage.inited) return;
            FLanguage.inited = true;
            FLanguage.data = new Object();
        },

        /**
         * 加载一行文本
         */
        load: function load(ini_line) {
            if (ini_line) {

                //移除ini注释
                var line = ini_line.replace(/#[^\r\n]*/g, "");

                //移除前面的空白
                line = line.replace(/^\s+/g, "");

                //移除后面的空白
                line = line.replace(/\s+$/g, "");

                //转换\n
                line = line.replace(/(\\n)+/g, "\n");

                var i = line.indexOf("=");
                if (i > 0) {
                    var k = line.substr(0, i);
                    var v = line.substr(i + 1);
                    FLanguage.data[k] = v;
                }
            }
        },

        /**
         * 加载语言文件的内容
         */
        loadFile: function loadFile(ini_file) {
            if (ini_file && typeof ini_file == "string") {
                var lines = ini_file.split(/[\r\n]+/g);

                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    FLanguage.load(line);
                }
            }
        },

        /**
         * 获取指定key的文本
         */
        text: function text(targetKey, defaultKey) {
            if (targetKey && FLanguage.data[targetKey]) {
                return FLanguage.data[targetKey];
            }

            if (defaultKey && FLanguage.data[defaultKey]) {
                return FLanguage.data[defaultKey];
            }

            return "";
        },

        /**
         * 根据key以及参数格式化文本
         */
        format: function format() {
            if (arguments.length == 1) return FLanguage.text(arguments[0]);else if (arguments.length == 2) return FLanguage.text(arguments[0], arguments[1]);else {
                var targetKey = arguments[0];
                var defaultKey = arguments[1];
                var ret = FLanguage.text(targetKey, defaultKey);

                for (var i = 2; i < arguments.length; i++) {
                    var index = i - 1; //参数从{1}开始
                    var re = new RegExp("\\{" + index.toString() + "\\}", "gm");

                    ret = ret.replace(re, arguments[i]);
                }

                return ret;
            }
        }
    }
});

module.exports = FLanguage;

cc._RFpop();
},{}],"FLogInModel":[function(require,module,exports){
"use strict";
cc._RFpush(module, '97c78Pl8XRGgKJFylBfGBya', 'FLogInModel');
// scripts/FWS/Models/FLogInModel.js

var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var loginModel;
loginModel = cc.Class({
    "extends": MVC.FMessageConnection,

    onFMessage_Login: function onFMessage_Login(msg) {
        cc.log("我收到登录消息啦" + msg);
        msg.complete();
        var msg2 = new MVC.FMessage("loginResult", "loginScene");
        msg2.args.loginState = true;
        msg2.send();
    }

});

module.exports = loginModel;

cc._RFpop();
},{"FWS_MODEL":"FWS_MODEL","FWS_MVC":"FWS_MVC"}],"FSocketCSModel":[function(require,module,exports){
"use strict";
cc._RFpush(module, '74eb8wX0ldPO5GBa8l0B4Bi', 'FSocketCSModel');
// scripts/FWS/Models/FSocketCSModel.js

/*
 * 与CS服务模块的SOCKET通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 14:47:33 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:45:23
 */

var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");
var MSG = require("FWS_MSG");

var FSocketPack = require("FSocketPack");
var FSocketModelAbstract = require("FSocketModelAbstract");
var NOTIFY = FSocketPack.FHeaderMark.Notify;
var REQ = FSocketPack.FHeaderMark.Req;
var ACK = FSocketPack.FHeaderMark.Ack;
var MSGIDS = FSocketPack.MsgIDs[0];

module.exports = cc.Class({
    // name: "FSocketCSModel",
    "extends": FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    initHandlers: function initHandlers() {
        this.addPackHandler(NOTIFY | MSGIDS.Relogin, this.onNotifyRelogin);
        this.addPackHandler(ACK | MSGIDS.Verify, this.onAckVerify);
    },

    //────────────────────────────────────────────────────────── 数据包处理

    ///异地登录后通知下线
    onNotifyRelogin: function onNotifyRelogin(pack) {},

    ///身份验证结果
    onAckVerify: function onAckVerify(pack) {},

    //────────────────────────────────────────────────────────── 连接服务器

    /**
     * 连接服务器
     */
    onFMessage_serverConnect: function onFMessage_serverConnect(msg) {
        msg.complete();
    },

    /**
     * 连接服务器结果
     */
    onFMessage_socketOnConnect: function onFMessage_socketOnConnect(msg) {
        msg.complete();
    }

});

cc._RFpop();
},{"FSocketModelAbstract":"FSocketModelAbstract","FSocketPack":"FSocketPack","FWS_MODEL":"FWS_MODEL","FWS_MODEL_DATA":"FWS_MODEL_DATA","FWS_MSG":"FWS_MSG","FWS_MVC":"FWS_MVC"}],"FSocketController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e4d6dFXC0hAcYLOV6u5eYjZ', 'FSocketController');
// scripts/FWS/Controller/FSocketController.js

/*
 * @Author: thor.liu 
 * @Date: 2016-12-05 17:13:49 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-06 17:02:29
 */
var FWS_MSG = require("FWS_MSG");
var FWS_MVC = require("FWS_MVC");
var FWS_NATIVE_GATEWAY = require("FWS_NATIVE_GATEWAY");

//FWS_NATIVE_GATEWAY.FNativeGateway

var FSocketController = cc.Class({
    // name: "FSocketController",
    "extends": FWS_MVC.FMessageConnection,
    // ctor: function() {},

    onFMessage_socketConnect: function onFMessage_socketConnect(msg) {
        msg.complete();

        //TODO: 调用jsToCpp接口, 发起连接
    },

    onFMessage_socketClose: function onFMessage_socketClose(msg) {
        msg.complete();

        //TODO: 调用jsToCpp接口, 关闭连接
    },

    onFMessage_socketSend: function onFMessage_socketSend(msg) {
        msg.complete();

        //TODO: 调用jsToCpp接口, 发送数据
    }
});

/*
    [header]
    msgid

    [head]
    version
    retcode
    extra
    router
    body
*/

module.exports = FSocketController;

cc._RFpop();
},{"FWS_MSG":"FWS_MSG","FWS_MVC":"FWS_MVC","FWS_NATIVE_GATEWAY":"FWS_NATIVE_GATEWAY"}],"FSocketDistributer":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6740b7tuMpJe73O9ttD0ihv', 'FSocketDistributer');
// scripts/FWS/Models/FSocketDistributer.js

/*
 * 收到Socket数据包时的消息分发模块
 * @Author: thor.liu 
 * @Date: 2016-12-05 17:02:59 
 * @Last Modified by:   thor.liu 
 * @Last Modified time: 2016-12-05 17:02:59 
 */
var FWS_MSG = require("FWS_MSG");

var FSocketDistributer = cc.Class({
    name: "FSocketDistributer",
    ctor: function ctor() {},

    statics: {
        inited: false,
        init: function init() {
            if (FSocketDistributer.inited) return;
            FSocketDistributer.inited = true;
            FSocketDistributer.maps = new Object();
        },

        setMapQueue: function setMapQueue(msgid, category) {
            var msgid_setting = null;
            if (FSocketDistributer.maps[category]) {} else {
                FSocketDistributer.maps[category] = new Array();
            }

            msgid_setting = FSocketDistributer.maps[category];

            if (msgid_setting.indexOf(msgid) < 0) {
                msgid_setting.push(msgid);
            }
        },

        getMapQueue: function getMapQueue(msgid) {
            for (var c in FSocketDistributer.maps) {
                var a = FSocketDistributer.maps[c];
                if (a.indexOf(msgid) >= 0) return c;
            }
            return "";
        },

        put: function put(msgid, sn, body, head) {
            var c = FSocketDistributer.getMapQueue(msgid);

            var msg = FWS_MSG.FWSMessageFactory.socketOnReceive(c, msgid, sn, body);
            msg.send();
        }
    }
});

module.exports = FSocketDistributer;

cc._RFpop();
},{"FWS_MSG":"FWS_MSG"}],"FSocketModelAbstract":[function(require,module,exports){
"use strict";
cc._RFpush(module, '7f7ddr1O2BCTp/i5gNgVpYF', 'FSocketModelAbstract');
// scripts/FWS/Models/FSocketModelAbstract.js

var MVC = require("FWS_MVC");
var FSocketPack = require("FSocketPack");
var FSocketModelAbstract = cc.Class({
    "extends": MVC.FMessageConnection,

    addPackHandler: function addPackHandler(msgid, handler) {
        if (this.packHandlers) {} else {
            this.packHandlers = new Object();
        }

        if (this.packHandlers[msgid]) {
            MVC.FLog.warn("SocketModel", "重复的数据包处理函数 = {0}", msgid);
        }

        this.packHandlers[msgid] = handler;
    },

    applyPackHandler: function applyPackHandler(pack) {
        var msgid = pack.msgid;
        if (this.packHandlers) {
            if (this.packHandlers[msgid]) {
                var apiId = FSocketPack.getHeaderMsgId(msgid);
                MVC.FLog.info("Socket", "处理数据包 = {0} ({1})", FSocketPack.getMsgIdDesc(msgid), apiId);
                this.packHandlers[msgid](pack);

                return true;
            }
        }

        return false;
    },

    initHandlers: function initHandlers() {},

    onFMessage_socketOnReceive: function onFMessage_socketOnReceive(msg) {

        if (this._handlers_inited_) {} else {
            this._handlers_inited_ = true;
            this.initHandlers();
        }

        var handled = this.applyPackHandler(msg.args.pack);
        if (handled) {
            msg.complete();
        }
    },

    createPack: function createPack() {
        var c = FSocketPack;
        return new c();
    },

    sendPack: function sendPack(pack) {

        //TODO: 发送数据包
    }
});

module.exports = FSocketModelAbstract;

cc._RFpop();
},{"FSocketPack":"FSocketPack","FWS_MVC":"FWS_MVC"}],"FSocketPack":[function(require,module,exports){
"use strict";
cc._RFpush(module, '836d4U15GNGo66YnVNmuV6i', 'FSocketPack');
// scripts/FWS/Utils/FSocketPack.js

/*
 * Socket数据包信息
 * @Author: thor.liu 
 * @Date: 2016-12-06 16:46:25 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:19:30
 */

var FSocketPack = cc.Class({
    name: "FSocketPack",
    ctor: function ctor() {},

    statics: {

        version: 0,

        ///消息号类型
        FHeaderType: cc.Enum({
            Notify: 0x00000000, //广播消息
            Req: 0x10000000, //请求消息
            Ack: 0x20000000 //应答消息
        }),

        ///消息号掩码
        FHeaderMark: cc.Enum({
            Mask: 0xF0000000, //类型
            MSG: 0x0FFFFFFF //接口号
        }),

        ///协议消息号定义
        MsgIDs: [{
            Reply: 0, //回复

            HeartBeat: 5001, //心跳
            Ping: 5002, //链路检测包
            Relogin: 5003, //异地登录后的下线通知
            Verify: 5004 }],

        //客户端身份认证
        ///获取消息号的掩码部分
        getHeaderMark: function getHeaderMark(id) {
            return id & FSocketPack.FHeaderMark.Mask;
        },

        ///获取消息号的接口号部分
        getHeaderMsgId: function getHeaderMsgId(id) {
            return id & FSocketPack.FHeaderMark.MSG;
        },

        ///获取消息号的文本信息
        getMsgIdDesc: function getMsgIdDesc(id) {
            var a = FSocketPack.getHeaderMark(id);
            var b = FSocketPack.getHeaderMsgId(id);

            var sz_a = FSocketPack.getEnumByValue(FSocketPack.FHeaderType, a);
            var sz_b = FSocketPack.getEnumByValueEx(FSocketPack.MsgIDs, b);

            if (sz_a && sz_a.length) {
                return sz_a + " | " + sz_b;
            } else {
                return sz_b;
            }
        },

        ///获取枚举值的名称
        getEnumByValue: function getEnumByValue(e, v) {
            for (var k in e) {
                if (e[k] == v) return k;
            }
            return "";
        },

        ///获取枚举值的名称
        getEnumByValueEx: function getEnumByValueEx(es, v) {
            for (var i = 0; i < es.length; i++) {
                var e = es[i];
                for (var k in e) {
                    if (e[k] == v) return k;
                }
            }
            return "";
        }
    },

    properties: {
        //-----
        type: 0,
        msgid: 0,

        //-----
        retcode: 0,
        extra: "",
        router: "",

        //-----
        body: null
    }

});

module.exports = FSocketPack;

cc._RFpop();
},{}],"FSocketRSModel":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2c980qkEXhL8IqU2yvC0P2V', 'FSocketRSModel');
// scripts/FWS/Models/FSocketRSModel.js

/*
 * 与RS服务模块的Socket通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 14:47:56 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:46:41
 */

var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");
var MSG = require("FWS_MSG");

var FSocketPack = require("FSocketPack");
var FSocketModelAbstract = require("FSocketModelAbstract");
var NOTIFY = FSocketPack.FHeaderMark.Notify;
var REQ = FSocketPack.FHeaderMark.Req;
var ACK = FSocketPack.FHeaderMark.Ack;
var MSGIDS = FSocketPack.MsgIDs[0];

module.exports = cc.Class({
    // name: "FSocketRSModel",
    "extends": FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    initHandlers: function initHandlers() {},

    //────────────────────────────────────────────────────────── 创建房间

    onFMessage_roomCreate: function onFMessage_roomCreate(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 创建房间");
    },
    ack_roomCreate: function ack_roomCreate(msg) {},

    //────────────────────────────────────────────────────────── 加入房间
    onFMessage_roomJoin: function onFMessage_roomJoin(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 加入房间");
    },
    ack_roomJoin: function ack_roomJoin(msg) {},

    //────────────────────────────────────────────────────────── 关闭房间
    onFMessage_roomEnd: function onFMessage_roomEnd(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 关闭房间");
    },
    ack_roomEnd: function ack_roomEnd(msg) {},

    //────────────────────────────────────────────────────────── 加入游戏
    onFMessage_gameJoin: function onFMessage_gameJoin(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 加入游戏");
    },
    ack_gameJoin: function ack_gameJoin(msg) {},

    //────────────────────────────────────────────────────────── 旁观游戏
    onFMessage_gameWatch: function onFMessage_gameWatch(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 旁观游戏");
    },
    ack_gameWatch: function ack_gameWatch(msg) {}
});

cc._RFpop();
},{"FSocketModelAbstract":"FSocketModelAbstract","FSocketPack":"FSocketPack","FWS_MODEL":"FWS_MODEL","FWS_MODEL_DATA":"FWS_MODEL_DATA","FWS_MSG":"FWS_MSG","FWS_MVC":"FWS_MVC"}],"FWS_MODEL_DATA":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'eb13fTOaQdFaJOOpHqjVNY3', 'FWS_MODEL_DATA');
// scripts/FWS/FWS_MODEL_DATA.js

/*
 * 公共数据结构定义 
 * @Author: thor.liu 
 * @Date: 2016-12-05 19:09:15 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-13 18:45:19
 */
var FWS_MODEL = require("FWS_MODEL");
var FWS_MODEL_DATA = {};

//──────────────────────────────────────────────────────────

/**
 * 数据模型对象接口
 */
FWS_MODEL_DATA.IFModelFactory = cc.Class({
    name: "IFModelFactory",
    ctor: function ctor() {
        this._type = null;
    },
    createById: function createById(id) {
        return null;
    },
    create: function create() {
        if (this._type) {
            return new this._type();
        }
        return null;
    },
    reset: function reset(obj) {}
});

FWS_MODEL_DATA.FEntityFactory = cc.Class({
    name: "FEntityFactory",
    "extends": FWS_MODEL_DATA.IFModelFactory,

    ctor: function ctor() {
        this._pool = new Object();
        this._type = null;
    },

    createById: function createById(id) {
        if (this._pool[id]) return this._pool[id];
        var ret = this.create();
        ret.id = id;
        this._pool[id] = ret;
        return ret;
    }
});

/**
 * 用户对象工厂类
 */
FWS_MODEL_DATA.FUserFactory = cc.Class({
    name: "FUserFactory",
    "extends": FWS_MODEL_DATA.FEntityFactory,
    ctor: function ctor() {
        this._type = require("FWS_MODEL_DATA").FUser;
    }
});

/**
 * 玩家对象工厂类
 */
FWS_MODEL_DATA.FPlayerFactory = cc.Class({
    name: "FPlayerFactory",
    "extends": FWS_MODEL_DATA.IFModelFactory,
    ctor: function ctor() {
        this._type = require("FWS_MODEL_DATA").FPlayer;
    }
});

/**
 * 游戏对象工厂类
 */
FWS_MODEL_DATA.FGameFactory = cc.Class({
    name: "FGameFactory",
    "extends": FWS_MODEL_DATA.FEntityFactory,
    ctor: function ctor() {
        this._type = require("FWS_MODEL_DATA").FGame;
    }
});

/**
 * 游戏桌对象工厂类
 */
FWS_MODEL_DATA.FGameTableFactory = cc.Class({
    name: "FGameTableFactory",
    "extends": FWS_MODEL_DATA.IFModelFactory,
    ctor: function ctor() {
        this._type = require("FWS_MODEL_DATA").FGameTable;
    }
});

/**
 * 游戏局对象工厂类
 */
FWS_MODEL_DATA.FGameRoundFactory = cc.Class({
    name: "FGameRoundFactory",
    "extends": FWS_MODEL_DATA.IFModelFactory,
    ctor: function ctor() {
        this._type = require("FWS_MODEL_DATA").FGameRound;
    }
});

//──────────────────────────────────────────────────────────

/**
 * 用户对象: 表示一个用户的信息
 */
FWS_MODEL_DATA.FUser = cc.Class({
    name: "FUser",
    "extends": require("FWS_MODEL").FAbstractModel,

    ctor: function ctor() {
        this.setValue("data", new Object());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FUserFactory()
    },

    reset: function reset() {
        return FWS_MODEL_DATA.FUser.factory.reset(this);
    },

    properties: {
        /**
         * 用户id
         */
        id: {
            get: function get() {
                return this.getValue("id");
            },
            set: function set(v) {
                this.setValue("id", v);
            }
        },
        /**
         * 用户的显示信息(名称,头像等内容) 
         */
        display: {
            get: function get() {
                return this.getValue("display");
            },
            set: function set(v) {
                this.setValue("display", v);
            }
        },
        /**
         * 用户数据
         */
        data: {
            get: function get() {
                return this.getValue("data");
            },
            set: function set(v) {
                this.setValue("data", v);
            }
        }
    }
});

/**
 * 玩家对象: 表示一个游戏玩家的信息
 */
FWS_MODEL_DATA.FPlayer = cc.Class({
    name: "FPlayer",
    "extends": FWS_MODEL.FAbstractModel,

    ctor: function ctor() {
        this.setValue("data", new Object());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FPlayerFactory()
    },

    reset: function reset() {
        return FWS_MODEL_DATA.FPlayer.factory.reset(this);
    },

    properties: {
        user: {
            get: function get() {
                return this.getValue("user");
            },
            set: function set(v) {
                this.setValue("user", v);
            }
        },
        data: {
            get: function get() {
                return this.getValue("data");
            },
            set: function set(v) {
                this.setValue("data", v);
            }
        }
    }
});

/**
 * 游戏对象: 表示一个游戏的信息
 */
FWS_MODEL_DATA.FGame = cc.Class({
    name: "FGame",
    "extends": FWS_MODEL.FAbstractModel,

    ctor: function ctor() {
        this.setValue("data", new Object());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FGameFactory()
    },

    reset: function reset() {
        return FWS_MODEL_DATA.FGame.factory.reset(this);
    },

    properties: {

        //游戏房间id
        id: {
            get: function get() {
                return this.getValue("id");
            },
            set: function set(v) {
                this.setValue("id", v);
            }
        },

        //游戏房间名称
        name: {
            get: function get() {
                return this.getValue("name");
            },
            set: function set(v) {
                this.setValue("name", v);
            }
        },

        //游戏类型 (九人桌? 麻将? 别的?)
        gameType: {
            get: function get() {
                return this.getValue("gameType");
            },
            set: function set(v) {
                this.setValue("gameType", v);
            }
        },

        //游戏房间类型 (std/sng/mtt ?)
        roomType: {
            get: function get() {
                return this.getValue("roomType");
            },

            set: function set(v) {
                this.setValue("roomType", v);
            }
        },

        //房间所属者类型 (官方? 玩家自建? 合作方?)
        ownerType: {
            get: function get() {
                return this.getValue("ownerType");
            },
            set: function set(v) {
                this.setValue("ownerType", v);
            }
        },

        //房主的用户信息
        ownerUser: {
            get: function get() {
                return this.getValue("ownerUser");
            },
            set: function set(v) {
                this.setValue("ownerUser", v);
            }
        },

        //邀请码
        code: {
            get: function get() {
                return this.getValue("code");
            },
            set: function set(v) {
                this.setValue("code", v);
            }
        },

        data: {
            get: function get() {
                return this.getValue("data");
            },
            set: function set(v) {
                this.setValue("data", v);
            }
        }
    }
});

/**
 * 游戏桌对象: 表示一桌游戏的信息
 */
FWS_MODEL_DATA.FGameTable = cc.Class({
    name: "FGameTable",
    "extends": FWS_MODEL.FAbstractModel,

    ctor: function ctor() {
        this.setValue("data", new Object());
        this.setValue("seats", new FWS_MODEL.FDict());
        this.setValue("currentPlayerSeat", -1);
        this.setValue("watchers", new FWS_MODEL.FArray());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FGameTableFactory()
    },

    reset: function reset() {
        return FWS_MODEL_DATA.FGameTable.factory.reset(this);
    },

    //找桌上找指定的uid, 并返回座位号
    findPlayerOnSeats: function findPlayerOnSeats(uid) {
        var keys = this.seats.keys();
        for (var i = 0; i < keys.length; i++) {
            var k = this.keys[i];
            if (k) {
                var p = this.seats.getValue(k);
                if (p) {
                    if (p.user && p.user.id == uid) {
                        return k;
                    }
                }
            }
        }
        return -1;
    },

    //在旁观列表找指定的uid, 并返回座位号
    findPlayerOnWatchers: function findPlayerOnWatchers(uid) {
        for (var i = 0; i < this.watchers.length; i++) {
            var p = this.watchers[i];
            if (p && p.user) {
                if (p.user.id == uid) return i;
            }
        }
    },

    //设置玩家至座位上
    setPlayerToSeat: function setPlayerToSeat(player, seat) {
        var i = this.watchers.indexOf(player);
        this.watchers.remove(i);

        this.seats.setValue(seat, player);
    },

    //设置玩家为旁观
    setPlayerToWatches: function setPlayerToWatches(player) {
        if (player && player.user) {
            var i = this.watchers.indexOf(player);
            this.watchers.remove(i);

            var k = this.findPlayerOnSeats(player.user.uid);
            this.seats.setValue(k, null);
        }
    },

    //移除玩家
    removePlayer: function removePlayer(player) {
        if (player && player.user) {
            var seat = this.findPlayerOnSeats(player.user.id);
            if (seat >= 0) this.seats.setValue(seat, null);

            var i = this.findPlayerOnWatchers(player.user.id);
            if (i >= 0) this.watchers.remove(i);
        }
    },

    //获取指定id的玩家对象
    getPlayerByUid: function getPlayerByUid(uid) {
        var seat = this.findPlayerOnSeats(uid);
        if (seat >= 0) {
            return this.seats.at(seat);
        }

        var i = this.findPlayerOnWatchers(uid);
        if (i >= 0) {
            return this.watchers.at(i);
        }
        return null;
    },

    properties: {
        /**
         * 桌号
         */
        id: {
            get: function get() {
                return this.getValue("id");
            },
            set: function set(v) {
                this.setValue("id", v);
            }
        },

        /**
         * 座位
         */
        seats: {
            get: function get() {
                return this.getValue("seats");
            }
        },

        /**
         * 旁观玩家列表
         */
        watchers: {
            get: function get() {
                return this.getValue("watchers");
            }
        },

        /**
         * 当前玩家的座位号
         */
        currentPlayerSeat: {
            get: function get() {
                return this.getValue("currentPlayerSeat");
            },
            set: function set(v) {
                this.setValue("currentPlayerSeat");
            }
        },

        /**
         * 数据
         */
        data: {
            get: function get() {
                return this.getValue("data");
            },
            set: function set(v) {
                this.setValue("data", v);
            }
        }
    }
});

/**
 * 游戏局对象: 表示一局游戏的信息 (九人桌的一手牌, 麻将的一局牌)
 */
FWS_MODEL_DATA.FGameRound = cc.Class({
    name: "FGameRound",
    "extends": FWS_MODEL.FAbstractModel,

    ctor: function ctor() {
        this.setValue("data", new Object());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FGameRoundFactory()
    },

    reset: function reset() {
        return FWS_MODEL_DATA.FGameRound.factory.reset(this);
    },

    properties: {
        id: {
            get: function get() {
                return this.getValue("id");
            },
            set: function set(v) {
                this.setValue("id", v);
            }
        }
    }
});

/**
 * 游戏对象模型
 */
FWS_MODEL_DATA.FGameModel = cc.Class({
    name: "FGameModel",
    "extends": FWS_MODEL.FAbstractModel,

    ctor: function ctor() {
        this.setValue("games", new FWS_MODEL.FDict());
    },

    statics: {
        current: function current() {
            if (FWS_MODEL_DATA.FGameModel._current) {} else FWS_MODEL_DATA.FGameModel._current = new FWS_MODEL_DATA.FGameModel();

            return FWS_MODEL_DATA.FGameModel._current;
        }
    },

    properties: {

        /**
         * 当前玩家
         */
        currentUser: {
            get: function get() {
                return this.getValue("currentUser");
            },
            set: function set(v) {
                this.setValue("currentUser", v);
            }
        },
        /**
         * 当前游戏
         */
        currentGame: {
            get: function get() {
                return this.getValue("currentGame");
            },
            set: function set(v) {
                this.setValue("currentGame", v);
            }
        },
        /**
         * 当前游戏桌
         */
        currentGameTable: {
            get: function get() {
                return this.getValue("currentGameTable");
            },
            set: function set(v) {
                this.setValue("currentGameTable", v);
            }
        },

        /**
         * 所有游戏
         */
        games: {
            get: function get() {
                return this.getValue("games");
            }
        }
    }
});

//──────────────────────────────────────────────────────────

module.exports = FWS_MODEL_DATA;

cc._RFpop();
},{"FWS_MODEL":"FWS_MODEL","FWS_MODEL_DATA":"FWS_MODEL_DATA"}],"FWS_MODEL":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f7cd5eW01tKaYQYjWlxJRky', 'FWS_MODEL');
// scripts/FWS/FWS_MODEL.js

var FWS_MODEL = {};

//──────────────────────────────────────────────────────────

/**
 * 数据绑定功能, 暂时只支持单向数据绑定
 */
FWS_MODEL.FBind = cc.Class({
    name: "FBind",
    statics: {

        init: function init() {

            if (FWS_MODEL.FBind._BIND_MODELS_) return;
            FWS_MODEL.FBind._BIND_MODELS_ = new Array();
            FWS_MODEL.FBind._BIND_ARRAYS_ = new Array();
            FWS_MODEL.FBind._BIND_DICTS_ = new Array();
        },
        notifyArrayChanged: function notifyArrayChanged(source, action, index, member) {
            FWS_MODEL.FBind.init();
            for (var i = 0; i < FWS_MODEL.FBind._BIND_ARRAYS_.length; i++) {
                var link = FWS_MODEL.FBind._BIND_ARRAYS_[i];
                if (link.source === source) {
                    if (link.target instanceof FWS_MODEL.FArray) {
                        if (action == "add") {
                            link.target.add(member);
                        } else if (action == "insert") {
                            link.target.insert(member, index);
                        } else if (action == "remove") {
                            link.target.remove(index);
                        } else if (action == "modify") {
                            link.target.modify(index, member);
                        } else if (action == "clear") {
                            link.target.clear();
                        }
                    } else {
                        if (link.target.onBindArrayChanged && typeof link.target.onBindArrayChanged == "function") {
                            link.target.onBindArrayChanged(action, index, member);
                        }
                    }
                }
            }
        },
        notifyDictChanged: function notifyDictChanged(source, k, v) {
            FWS_MODEL.FBind.init();
            for (var i = 0; i < FWS_MODEL.FBind._BIND_DICTS_.length; i++) {
                var link = FWS_MODEL.FBind._BIND_DICTS_[i];
                if (link.source === source) {
                    if (link.target instanceof FWS_MODEL.FDict) {
                        if (k) link.target.setValue(k, v);else link.target.clear();
                    } else {
                        if (link.target.onBindDictChanged && typeof link.target.onBindDictChanged == "function") {
                            link.target.onBindDictChanged(k, v);
                        }
                    }
                }
            }
        },
        notifyDataValueChanged: function notifyDataValueChanged(source, propertyName, oldValue, newValue) {
            FWS_MODEL.FBind.init();
            for (var i = 0; i < FWS_MODEL.FBind._BIND_MODELS_.length; i++) {
                var link = FWS_MODEL.FBind._BIND_MODELS_[i];
                if (link.source === source) {
                    if (link.map[propertyName]) {
                        var targetPropertyName = link.map[propertyName];
                        link.target[targetPropertyName] = newValue;
                    }
                }
            }
        },
        find: function find(source, target, ary) {
            FWS_MODEL.FBind.init();
            for (var i = 0; i < ary.length; i++) {
                var link = ary[i];
                if (link.source === source) {
                    if (link.target === target) {
                        return link;
                    }
                }
            }
        },
        bindModel: function bindModel(source, target, propertiesMap) {
            FWS_MODEL.FBind.init();
            if (propertiesMap && source && target) {
                var found = FWS_MODEL.FBind.find(source, target, FWS_MODEL.FBind._BIND_MODELS_);
                if (found) return;

                var link = new Object();
                link.source = source;
                link.target = target;
                link.map = propertiesMap;
                FWS_MODEL.FBind._BIND_MODELS_.push(link);
            }
        },
        bindArray: function bindArray(source, target) {
            FWS_MODEL.FBind.init();
            if (source && target) {
                var found = FWS_MODEL.FBind.find(source, target, FWS_MODEL.FBind._BIND_ARRAYS_);
                if (found) return;
                var link = new Object();
                link.source = source;
                link.target = target;
                FWS_MODEL.FBind._BIND_ARRAYS_.push(link);
            }
        },
        bindDict: function bindDict(source, target) {
            FWS_MODEL.FBind.init();
            if (source && target) {
                var found = FWS_MODEL.FBind.find(source, target, FWS_MODEL.FBind._BIND_DICTS_);
                if (found) return;
                var link = new Object();
                link.source = source;
                link.target = target;
                FWS_MODEL.FBind._BIND_DICTS_.push(link);
            }
        },

        unbindModel: function unbindModel(source, target) {
            FWS_MODEL.FBind.init();
            for (var i = FWS_MODEL.FBind._BIND_MODELS_.length - 1; i >= 0; i--) {
                var link = FWS_MODEL.FBind._BIND_MODELS_[i];
                if (link.source === source && link.target === target) {
                    FWS_MODEL.FBind._BIND_MODELS_.splice(i, 1);
                }
            }
        },
        unbindArray: function unbindArray(source, target) {
            FWS_MODEL.FBind.init();
            for (var i = FWS_MODEL.FBind._BIND_ARRAYS_.length - 1; i >= 0; i--) {
                var link = FWS_MODEL.FBind._BIND_ARRAYS_[i];
                if (link.source === source && link.target === target) {
                    FWS_MODEL.FBind._BIND_ARRAYS_.splice(i, 1);
                }
            }
        },
        unbindDict: function unbindDict(source, target) {
            FWS_MODEL.FBind.init();
            for (var i = FWS_MODEL.FBind._BIND_DICTS_.length - 1; i >= 0; i--) {
                var link = FWS_MODEL.FBind._BIND_DICTS_[i];
                if (link.source === source && link.target === target) {
                    FWS_MODEL.FBind._BIND_DICTS_.splice(i, 1);
                }
            }
        }
    }
});

/**
 * 一个支持属性变动事件的数据类
 */
FWS_MODEL.FAbstractModel = cc.Class({
    name: "FAbstractModel",
    ctor: function ctor() {
        this._propertyValues_ = new Object();
    },
    setValue: function setValue(propertyName, propertyValue) {
        if (this._propertyValues_[propertyName] === propertyValue) return;

        var oldValue = this._propertyValues_[propertyName];
        var newValue = propertyValue;

        this._propertyValues_[propertyName] = propertyValue;

        FWS_MODEL.FBind.notifyDataValueChanged(this, propertyName, oldValue, newValue);
    },
    getValue: function getValue(propertyName, defaultValue) {
        if (this._propertyValues_[propertyName]) {
            return this._propertyValues_[propertyName];
        }

        if (defaultValue) return defaultValue;

        return null;
    },
    toString: function toString() {
        return JSON.stringify(this._propertyValues_);
    }
});

/**
 * 一个支持数据成员变动通知的数组
 */
FWS_MODEL.FArray = cc.Class({
    name: "FArray",
    ctor: function ctor() {
        var src = null;
        if (arguments.length > 0) src = arguments[0];
        this._array_ = new Array();
        if (src) {
            for (var i = 0; i < src.length; i++) {
                this._array_.push(src[i]);
            }
        }
    },
    add: function add(item) {
        this._array_.push(item);
        FWS_MODEL.FBind.notifyArrayChanged(this, "add", this._array_.length - 1, item);
    },
    insert: function insert(item, index) {
        if (index < 0 || index >= this._array_.length - 1) return;
        this._array_.splice(index, 0, item);
        FWS_MODEL.FBind.notifyArrayChanged(this, "insert", index, item);
    },
    remove: function remove(index) {
        if (index < 0 || index >= this._array_.length - 1) return;
        var item = this._array_[index];
        this._array_.splice(index, 1);
        FWS_MODEL.FBind.notifyArrayChanged(this, "remove", index, item);
    },
    clear: function clear() {
        this._array_.splice(0, this._array_.length);
        FWS_MODEL.FBind.notifyArrayChanged(this, "clear", 0, null);
    },
    at: function at(index) {
        if (index < 0 || index >= this._array_.length - 1) return null;
        return this._array_[index];
    },
    modify: function modify(index, item) {
        if (this._array_[index] === item) retu;
        if (index < 0 || index >= this._array_.length - 1) return;
        this._array_[index] = item;
        FWS_MODEL.FBind.notifyArrayChanged(this, "modify", index, item);
    },
    indexOf: function indexOf(item) {
        return this._array_.indexOf(item);
    },
    length: function length() {
        return this._array_.length;
    },
    toArray: function toArray() {
        return this._array_.slice(0);
    },
    toString: function toString() {
        return this._array_.toString();
    }
});

/**
 * 一个支持键值变化事件的数据类
 */
FWS_MODEL.FDict = cc.Class({
    name: "FDict",
    ctor: function ctor() {
        var srcObj = null;
        if (arguments.length > 0) srcObj = arguments[0];
        this._obj_ = new Object();
        for (var k in srcObj) {
            this._obj_[k] = srcObj[k];
        }
    },
    setValue: function setValue(k, v) {
        if (this._obj_[k] === v) return;
        this._obj_[k] = v;
        FWS_MODEL.FBind.notifyDictChanged(this, k, v);
    },
    getValue: function getValue(k) {
        if (this._obj_[k]) return this._obj_[k];
        return null;
    },
    findValue: function findValue(v) {
        for (var k in this._obj_) {
            if (this._obj_[k] == v) return k;
        }
        return null;
    },
    clear: function clear() {
        for (var k in this._obj_) {
            delete this._obj_[k];
        }
        FWS_MODEL.FBind.notifyDictChanged(this, null, null);
    },
    count: function count() {
        var ret = 0;
        for (var k in this._obj_) {
            ret++;
        }
        return ret;
    },
    keys: function keys() {
        var ret = new Array();
        for (var k in this._obj_) {
            ret.push(k);
        }
        return ret;
    },
    values: function values() {
        var ret = new Array();
        for (var k in this._obj_) {
            ret.push(this._obj_[k]);
        }
        return ret;
    },
    toString: function toString() {
        return JSON.stringify(this._obj_);
    }
});

//──────────────────────────────────────────────────────────

module.exports = FWS_MODEL;

cc._RFpop();
},{}],"FWS_MSG":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2967eBDa49G5LRIXG2CJUCW', 'FWS_MSG');
// scripts/FWS/FWS_MSG.js

var FWS_MSG = {};
var FWS_MVC = require("FWS_MVC");

FWS_MSG.FWSMessageFactory = cc.Class({
    name: "FWSMessageFactory",
    statics: {

        //────────────────────────────────────────────────────────── Socket
        /**
         * 连接请求
         */
        socketConnect: function socketConnect(type, ip, port) {
            var ret = new FWS_MVC.FMessage("socketConnect", "socket");
            ret.args.type = type;
            ret.args.ip = ip;
            ret.args.port = port;
            return ret;
        },

        /**
         * 关闭连接
         */
        socketClose: function socketClose(type) {
            var ret = new FWS_MVC.FMessage("socketClose", "socket");
            ret.args.type = type;
            return ret;
        },

        /**
         * 发送数据
         */
        socketSend: function socketSend(pack) {
            var ret = new FWS_MVC.FMessage("socketSend", "socket");
            ret.args.pack = pack;
            return ret;
        },

        /**
         * 接收数据时
         */
        socketOnReceive: function socketOnReceive(pack) {
            var ret = new FWS_MVC.FMessage("socketOnReceive", "socket");
            ret.args.pack = pack;
            return ret;
        },

        /**
         * 连接成功或者连接失败时
         */
        socketOnConnect: function socketOnConnect(type, success) {
            var ret = new FWS_MVC.FMessage("socketOnConnect", "socket");
            ret.args.type = type;
            ret.args.retcode = success ? 0 : -1;
            return ret;
        },

        /**
         * 连接被关闭时
         */
        socketOnClose: function socketOnClose(type) {
            var ret = new FWS_MVC.FMessage("socketOnClose", "socket");
            ret.args.type = type;
            return ret;
        },

        //────────────────────────────────────────────────────────── Common

        /**
         * 连接服务器
         */
        serverConnect: function serverConnect() {
            return new FWS_MVC.FMessage("serverConnect", "ui");
        },
        /**
         * 连接服务器成功或者失败
         */
        serverConnectResult: function serverConnectResult(retcode) {
            var ret = new FWS_MVC.FMessage("serverConnectResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        //────────────────────────────────────────────────────────── User

        /**
         * 标准注册
         */
        userReg: function userReg() {
            var ret = FWS_MVC.FMessage("userReg", "");
            return ret;
        },
        /**
         * 标准注册结果
         */
        userRegResult: function userRegResult(retcode) {
            var ret = FWS_MVC.FMessage("userRegResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        /**
         * 标准登录
         */
        userLogin: function userLogin(uid, pwd) {
            var ret = FWS_MVC.FMessage("userLogin", "");
            return ret;
        },
        /**
         * 标准登录结果
         */
        userLoginResult: function userLoginResult(retcode) {
            var ret = FWS_MVC.FMessage("userLoginResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        //────────────────────────────────────────────────────────── Room

        /**
         * 创建房间
         * @param name 房间名称
         * @param roomType 房间类型
         * @param room 房间数据 (P9STDGameData/P9MTTGameData)
         */
        roomCreate: function roomCreate(name, roomType, room) {
            var ret = new FWS_MVC.FMessage("roomCreate", "");
            ret.args.name = name;
            ret.args.roomType = roomType;
            ret.args.room = room;
            return ret;
        },
        roomCreateResult: function roomCreateResult(retcode, game) {
            var ret = new FWS_MVC.FMessage("roomCreateResult", "ui");
            ret.args.retcode = retcode;
            ret.args.game = game;
            return ret;
        },

        /**
         * 加入房间
         */
        roomJoin: function roomJoin(code) {
            var ret = new FWS_MVC.FMessage("roomJoin", "");
            ret.args.code = code;
            return ret;
        },
        roomJoinResult: function roomJoinResult(retcode, game) {
            var ret = new FWS_MVC.FMessage("roomJoinResult", "ui");
            ret.args.retcode = retcode;
            ret.args.game = game;
            return ret;
        },

        /**
         * 关闭房间
         */
        roomEnd: function roomEnd() {
            var ret = new FWS_MVC.FMessage("roomEnd", "");
            return ret;
        },
        roomEndResult: function roomEndResult(retcode) {
            var ret = new FWS_MVC.FMessage("roomEndResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },
        roomOnEnd: function roomOnEnd() {
            var ret = new FWS_MVC.FMessage("roomOnEnd", "ui");
            return ret;
        },

        roomOnGotoTable: function roomOnGotoTable() {
            var ret = new FWS_MVC.FMessage("roomOnGotoTable", "ui");
            return ret;
        },

        /**
         * 开始房间
         */
        roomStart: function roomStart() {
            var ret = new FWS_MVC.FMessage("roomStart", "");
            return ret;
        },
        roomStartResult: function roomStartResult(retcode) {
            var ret = new FWS_MVC.FMessage("roomStartResult", "ui");
            ret.args.retcode = retcode;
        },
        roomOnStart: function roomOnStart() {
            var ret = new FWS_MVC.FMessage("roomOnStart", "ui");
            return ret;
        },

        //────────────────────────────────────────────────────────── Game       

        /**
         * 加入游戏(上桌,报名)
         */
        gameJoin: function gameJoin() {
            var ret = new FWS_MVC.FMessage("gameJoin", "");
            return ret;
        },
        gameJoinResult: function gameJoinResult(retcode) {
            var ret = new FWS_MVC.FMessage("gameJoinResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },
        gameOnJoin: function gameOnJoin() {
            var ret = new FWS_MVC.FMessage("gameOnJoin", "ui");
            return ret;
        },

        /**
         * 旁观游戏
         */
        gameWatch: function gameWatch() {
            var ret = new FWS_MVC.FMessage("gameWatch", "");
            return ret;
        },
        gameWatchResult: function gameWatchResult(retcode) {
            var ret = new FWS_MVC.FMessage("gameWatchResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },
        gameOnWatch: function gameOnWatch() {
            var ret = new FWS_MVC.FMessage("gameOnWatch", "ui");
            return ret;
        },

        /**
         * 恢复游戏
         */
        gameResume: function gameResume() {
            var ret = new FWS_MVC.FMessage("gameResume", "");
            return ret;
        },
        gameResumeResult: function gameResumeResult(retcode) {
            var ret = new FWS_MVC.FMessage("gameResumeResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        /**
         * 游戏就绪
         */
        gameReady: function gameReady() {
            var ret = new FWS_MVC.FMessage("gameReady", "");
            return ret;
        },
        gameOnReady: function gameOnReady() {
            var ret = new FWS_MVC.FMessage("gameOnReady", "ui");
            return ret;
        },

        /**
         * 游戏开始时
         */
        gameOnStart: function gameOnStart(startData) {
            var ret = new FWS_MVC.FMessage("gameOnStart", "ui");
            ret.args.startData;
            return ret;
        },

        /**
         * 游戏结束时
         */
        gameOnResult: function gameOnResult(resultData) {
            var ret = new FWS_MVC.FMessage("gameOnResult", "ui");
            ret.args.resultData = resultData;
            return ret;
        },

        /**
         * 询问玩家动作
         */
        gameActionReq: function gameActionReq(actionReqData) {
            var ret = new FWS_MVC.FMessage("gameActionReq", "ui");
            ret.args.actionReqData = actionReqData;
            return ret;
        },

        /**
         * 玩家动作选择
         */
        gameActionAck: function gameActionAck(actionAckData) {
            var ret = new FWS_MVC.FMessage("gameActionAck", "ui");
            ret.args.actionAckData = actionAckData;
            return ret;
        },

        /**
         * 玩家动作结果
         */
        gameActionAckResult: function gameActionAckResult(retcode) {
            var ret = new FWS_MVC.FMessage("gameActionAckResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        /**
         * 玩家动作通知
         */
        gameActionNotify: function gameActionNotify(actionNotifyData) {
            var ret = new FWS_MVC.FMessage("gameActionNotify", "ui");
            ret.args.actionNotifyData = actionNotifyData;
            return ret;
        },

        /**
         * 游戏事件通知
         */
        gameEventNotify: function gameEventNotify(eventType, eventNotifyData) {
            var ret = new FWS_MVC.FMessage("gameEventNotify", "ui");
            ret.args.eventType = eventType;
            ret.args.eventNotifyData = eventNotifyData;
            return ret;
        }
    }
});

//──────────────────────────────────────────────────────────

module.exports = FWS_MSG;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"FWS_MVC":[function(require,module,exports){
"use strict";
cc._RFpush(module, '54a05qGQfFAD6yGt2ZmiIVC', 'FWS_MVC');
// scripts/FWS/FWS_MVC.js

/*
 * 公共代码的MVC框架
 * @Author: thor.liu 
 * @Date: 2016-11-25 10:40:31 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-05 17:19:42
 */

var FWS_MVC = {};

/**
 * 日志功能
 */
FWS_MVC.FLog = cc.Class({
    name: "FLog",
    statics: {
        /**
         * 输出信息类日志
         */
        info: function info(tags, template) {
            var args = new Array();
            args.push("INFO");
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            FWS_MVC.FLog.output(args);
        },
        /**
         * 输出警告类日志
         */
        warn: function warn(tags, template) {
            var args = new Array();
            args.push("WARN");
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            FWS_MVC.FLog.output(args);
        },
        /**
         * 输出错误类日志
         */
        err: function err(tags, template) {
            var args = new Array();
            args.push("ERROR");
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            FWS_MVC.FLog.output(args);
        },
        /**
         * 输出数据类日志
         */
        data: function data(tags, template) {
            var args = new Array();
            args.push("DATA");
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            FWS_MVC.FLog.output(args);
        },
        /**
         * 输出日志信息至控制台, 或者之后看情况去写日志文件, 或者发给日志服务
         */
        output: function output(args) {
            if (args.length < 3) return;
            var type = args[0];
            var tags = args[1];
            var format = args[2] + "";

            for (var i = 3; i < args.length; i++) {
                format = format.replace("{" + (i - 3) + "}", args[i]);
            }

            var output = "(" + tags + ") " + format;

            if (type == "INFO") {
                cc.info(output);
            } else if (type == "ERROR") {
                cc.error(output);
            } else if (type == "WARN") {
                cc.warn(output);
            } else {
                cc.log(output);
            }
            //TODO: 写一个文本文件
        }
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 消息通知
 */
FWS_MVC.FMessage = cc.Class({
    name: "FMessage",
    ctor: function ctor() {

        var msgType = arguments[0];
        var msgCategory = arguments[1];

        this._type = msgType;
        this._category = msgCategory;
        this._index = FWS_MVC.FMessage._nextIndex;
        FWS_MVC.FMessage._nextIndex++;

        this._isSended = false;
        this._isCompleted = false;
        this.args = new Object();
    },

    statics: {
        _nextIndex: 0
    },

    /**
     * 获取消息类型
     */
    type: function type() {
        return this._type;
    },

    /**
     * 获取消息分类
     */
    category: function category() {
        return this._category;
    },
    /**
     * 获取消息是否已经完成
     */
    isCompleted: function isCompleted() {
        return this._isCompleted;
    },
    /**
     * 获取消息是否已经发送
     */
    isSended: function isSended() {
        return this._isSended;
    },
    /**
     * 发送消息到消息路由
     */
    send: function send() {
        if (this._isSended) return;
        this._isSended = true;

        FWS_MVC.FMessageRouter.send(this);
    },
    /**
     * 通知消息已经完成
     */
    complete: function complete() {
        if (!this._isSended) return;
        if (this._isCompleted) return;
        this._isCompleted = true;

        FWS_MVC.FMessageRouter.complete(this);
    },
    /**
     * 获取消息的文本信息
     */
    toString: function toString() {
        return "<FMessage " + this._type + "(" + this._category + " : " + this._index + ") " + JSON.stringify(this.args) + ">";
    }

}),

//──────────────────────────────────────────────────────────

/**
 * 消息队列
 */
FWS_MVC.FMessageQueue = cc.Class({
    name: "FMessageQueue",
    ctor: function ctor() {
        var msgCategory = arguments[0];
        this._category = msgCategory;
        this._messages = new Array();
    },
    /**
     * 获取消息队列所绑定的消息分类
     */
    category: function category() {
        return this._category;
    },
    /**
     * 获取消息队列的当前消息, 也就是队列中最前面的那个消息
     */
    current: function current() {
        if (this._messages.length > 0) return this._messages[0];
        return null;
    },
    /**
     * 获取消息队列中所包含的消息数量
     */
    count: function count() {
        return this._messages.length;
    },
    /**
     * 添加一个消息至消息队列的尾部
     */
    add: function add(msg) {

        if (!(msg instanceof FWS_MVC.FMessage)) {
            FWS_MVC.FLog.err("FMessageQueue", "{0}不是一个正确的消息通知对象", msg);
        } else if (this._messages.indexOf(msg) >= 0) {
            FWS_MVC.FLog.err("FMessageQueue", "消息队列中已经包含了{0}", msg);
        } else {
            this._messages.push(msg);
        }
    },
    /**
     * 移除并返回消息队列中最前面的那个消息
     */
    remove: function remove() {
        if (this._messages.length > 0) return this._messages.shift();
        return null;
    },
    /**
     * 清空消息队列中的所有消息
     */
    clear: function clear() {
        if (this._messages.length > 0) this._messages.splice(0, this._messages.length);
    },
    /**
     * 获取消息队列的文本信息
     */
    toString: function toString() {
        return "<FMessageQueue " + this._messages.toString() + ">";
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 消息连接类
 */
FWS_MVC.FMessageConnection = cc.Class({
    // name: "FMessageConnection",
    "extends": cc.Component,

    /**
     * 连接模块至消息路由
     */
    connect: function connect() {
        FWS_MVC.FMessageRouter.connect(this);
    },

    /**
     * 从消息路由断开连接 
     */
    disconnect: function disconnect() {
        FWS_MVC.FMessageRouter.disconnect(this);
    },

    /**
     * 收到消息通知时, 直接按消息的类型加onFMessage_的前缀定义函数名作侦听, 例如: onFMessage_Login: function(msg) {...}
     */
    onFMessage: function onFMessage(msg) {
        var handler = "onFMessage_" + msg.type();
        if (typeof this[handler] == "function") {
            this[handler](msg);
            return true;
        }

        return false;
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 消息路由 (全局唯一)
 */
FWS_MVC.FMessageRouter = cc.Class({
    name: "FMessageRouter",

    statics: {

        /**
         * 初始化消息路由
         */
        init: function init() {
            if (FWS_MVC.FMessageRouter.queues) return;
            FWS_MVC.FMessageRouter.queues = new Object();
            FWS_MVC.FMessageRouter.connections = new Array();
            FWS_MVC.FMessageRouter.inited = true;
            FWS_MVC.FMessageRouter.updateHandler = setInterval(FWS_MVC.FMessageRouter.update, 100);
        },

        /**
         * 创建一个指定消息分类的消息队列
         */
        createQueue: function createQueue(category) {
            FWS_MVC.FMessageRouter.init();

            if (FWS_MVC.FMessageRouter.queues[category]) return;

            FWS_MVC.FMessageRouter.queues[category] = new FWS_MVC.FMessageQueue(category);
        },

        /**
         * 移除一个指定消息分类的消息队列
         */
        removeQueue: function removeQueue(category) {
            FWS_MVC.FMessageRouter.init();

            if (FWS_MVC.FMessageRouter.queues[category]) delete FWS_MVC.FMessageRouter.queues[category];
        },

        /**
         * 移除所有的消息队列
         */
        removeAllQueue: function removeAllQueue() {
            FWS_MVC.FMessageRouter.init();

            for (var category in FWS_MVC.FMessageRouter.queues) {
                delete FWS_MVC.FMessageRouter.queues[category];
            }
        },

        /**
         * 清空指定消息分类的消息队列的内容
         */
        cleanQueue: function cleanQueue(category) {
            FWS_MVC.FMessageRouter.init();

            for (var cat in FWS_MVC.FMessageRouter.queues) {
                if (cat != category) continue;
                var q = FWS_MVC.FMessageRouter.queues[category];
                q.clear();
            }
        },

        /**
         * 清空所有消息队列的内容
         */
        cleanAllQueue: function cleanAllQueue() {
            FWS_MVC.FMessageRouter.init();

            for (var category in FWS_MVC.FMessageRouter.queues) {
                var q = FWS_MVC.FMessageRouter.queues[category];
                q.clear();
            }
        },

        /**
         * 连接一个模块到消息路由
         */
        connect: function connect(connection) {
            FWS_MVC.FMessageRouter.init();

            if (connection) {
                if (FWS_MVC.FMessageRouter.connections.indexOf(connection) >= 0) {
                    FWS_MVC.FLog.warn("FMessageRouter", "在消息路由中发现重复连接的模块{0}", connection);
                } else {
                    FWS_MVC.FMessageRouter.connections.push(connection);
                }
            }
        },

        /**
         * 从消息路由断开一个连接
         */
        disconnect: function disconnect(connection) {
            FWS_MVC.FMessageRouter.init();
            if (connection) {
                var i = FWS_MVC.FMessageRouter.connections.indexOf(connection);
                if (i >= 0) {
                    FWS_MVC.FMessageRouter.connections.splice(i, 1);
                }
            }
        },

        /**
         * 断开消息路由中的所有连接
         */
        disconnectAll: function disconnectAll() {
            FWS_MVC.FMessageRouter.init();

            if (FWS_MVC.FMessageRouter.connections.length > 0) {
                FWS_MVC.FMessageRouter.connections.splice(0, FWS_MVC.FMessageRouter.connections.length);
            }
        },

        /**
         * 向消息路由发送一个消息 (并不是马上发布到各模块, 只是入队列)
         */
        send: function send(msg) {
            FWS_MVC.FMessageRouter.init();

            FWS_MVC.FLog.data("消息", "发送: {0}", msg);

            if (msg instanceof FWS_MVC.FMessage) {
                for (var category in FWS_MVC.FMessageRouter.queues) {
                    var q = FWS_MVC.FMessageRouter.queues[category];
                    q.add(msg);

                    if (q.count() == 1) {
                        FWS_MVC.FMessageRouter.push(msg);
                    }
                    return;
                }

                FWS_MVC.FMessageRouter.push(msg);
            }
        },

        /**
         * 推送一个消息到所有连接
         */
        push: function push(msg) {
            FWS_MVC.FMessageRouter.init();

            FWS_MVC.FLog.info("消息", "推送: {0}", msg);

            var cloneArray = FWS_MVC.FMessageRouter.connections.slice(0);
            var counter = 0;
            for (var i = 0; i < cloneArray.length; i++) {
                var conn = cloneArray[i];
                if (typeof conn.onFMessage == "function") {
                    if (conn.onFMessage(msg)) {
                        counter++;
                    }
                }
            }

            if (counter == 0) {
                msg.complete();
                FWS_MVC.FLog.warn("消息", "丢弃了一个未处理的消息通知: {0}", msg);
            }
        },

        /**
         * 标记一个消息已经完成
         */
        complete: function complete(msg) {
            FWS_MVC.FMessageRouter.init();
            FWS_MVC.FLog.data("消息", "完成消息: {0}", msg);
        },

        /**
         * 更新操作
         */
        update: function update() {
            for (var category in FWS_MVC.FMessageRouter.queues) {
                var queue = FWS_MVC.FMessageRouter.queues[category];

                if (queue.current() && queue.current().isCompleted()) {
                    queue.remove();
                    if (queue.current()) FWS_MVC.FMessageRouter.push(queue.current());
                }
            }
        }
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 树形节点结构
 */
FWS_MVC.FNode = cc.Class({
    name: "FNode",
    ctor: function ctor() {
        var nodeid = arguments[0];
        this._id = nodeid;
        this._nodes = new Array();
        this._data = null;
        this._parent = null;
    },

    toString: function toString() {
        return "<" + cc.js.getClassName(this) + " " + this.id() + ">";
    },

    /**
     * 获取节点的标识
     */
    id: function id() {
        return this._id;
    },

    /**
     * 获取所属的父节点
     */
    parent: function parent() {
        return this._parent;
    },

    /**
     * 获取节点的全路径
     */
    path: function path() {
        var ary = new Array();

        var n = this;

        while (n) {
            ary.splice(0, 0, n.id());
            n = n.parent();
        }

        return ary.join("/");
    },

    /**
     * 获取子节点的数组
     */
    nodes: function nodes() {
        return this._nodes.slice(0);
    },

    /**
     * 获取一个指定id的子节点
     */
    find: function find(nodeid) {
        if (this._id == nodeid) return this;
        for (var i = 0; i < this._nodes.length; i++) {
            var n = this._nodes[i];
            if (n.id() == nodeid) return n;
            var cn = n.find(nodeid);
            if (cn) return cn;
        }
        return null;
    },

    /**
     * 获取一个指定索引的子节点
     */
    at: function at(index) {
        if (index >= 0 && index < this._nodes.length) {
            return this._nodes[index];
        }
        return null;
    },

    /**
     * 添加一个子节点
     */
    add: function add(node) {
        if (this._nodes.indexOf(node) >= 0) return null;
        if (node.parent()) return null;
        node._parent = this;
        this._nodes.push(node);
        return node;
    },

    /**
     * 移除一个子节点
     */
    remove: function remove(node) {
        var i = this._nodes.indexOf(node);
        if (i >= 0) {
            this._nodes.splice(i, 1);
            node._parent = null;
            return node;
        }
        return null;
    },

    /**
     * 移除所有节点
     */
    removeAll: function removeAll() {
        if (this._nodes.length > 0) {
            for (var i = 0; i < this._nodes.length; i++) {
                this._nodes[i].removeAll();
                this._nodes[i]._parent = null;
            }
            this._nodes.splice(0, this._nodes.length);
        }
    },

    /**
     * 移除当前节点
     */
    removeSelf: function removeSelf() {
        if (this._parent) {
            this._parent.remove(this);
            this._parent = null;
        }
    },

    /**
     * 获取子节点的数量 
     */
    count: function count() {
        return this._nodes.length;
    },

    /**
     * 搜索指定子节点的索引
     */
    indexOf: function indexOf(node) {
        return this._nodes.indexOf(node);
    },

    /**
     * 获取节点的深度级别
     */
    level: function level() {
        var ret = 0;

        var temp = this;
        while (temp.parent()) {
            temp = temp.parent();

            ret++;
        }

        return ret;
    },

    /**
     * 获取根节点
     */
    root: function root() {
        var temp = this;

        while (temp.parent()) {
            temp = temp.parent();
        }

        return temp;
    },

    /**
     * 获取第一个子节点
     */
    firstChild: function firstChild() {
        if (this._nodes.length == 0) return null;

        return this._nodes[0];
    },

    /**
     * 获取同级的第一个节点
     */
    first: function first() {

        if (this._parent == null) return null;
        if (this._parent._nodes.length == 0) return null;

        return this._parent._nodes[0];
    },

    /**
     * 获取同级的最后一个节点
     */
    last: function last() {

        if (this._parent == null) return null;
        if (this._parent._nodes.length == 0) return null;

        return this._parent._nodes[this._parent._nodes.length - 1];
    },

    /**
     * 获取同级的上一个节点
     */
    prev: function prev() {

        if (this._parent == null) return null;
        var i = this._parent._nodes.indexOf(this);
        if (i <= 0) return null;

        return this._parent._nodes[i - 1];
    },

    /**
     * 获取同级的下一个节点
     */
    next: function next() {

        if (this._parent == null) return null;
        var i = this._parent._nodes.indexOf(this);
        if (i >= this._parent._nodes.length) return null;
        if (i < 0) return null;

        return this._parent._nodes[i + 1];
    },

    /**
     * 获取节点至根的逐级节点
     */
    parentNodes: function parentNodes() {
        var ret = new Array();

        var temp = this;

        while (temp) {
            ret.splice(0, 0, temp);
            temp = temp.parent();
        }
        return ret;
    },

    /**
     * 获取与另一个节点的共同父级节点
     */
    parentBy: function parentBy(node) {
        var p1 = this.parentNodes();
        var p2 = node.parentNodes();

        var ret = null;

        for (var i = 0; i < p1.length; i++) {
            var n1 = p1[i];
            var n2 = null;

            if (i < p2.length) {
                n2 = p2[i];
            }

            if (n1 == n2) ret = n1;else break;
        }

        return ret;
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 状态节点
 */
FWS_MVC.FContext = cc.Class({
    name: "FContext",
    "extends": FWS_MVC.FNode,

    ctor: function ctor() {
        var id = arguments[0];
        this.modules = new Array();
    },

    setModules: function setModules() {
        if (this.modules) {} else this.modules = new Array();

        for (var i = 0; i < arguments.length; i++) {
            var m = arguments[i];
            if (this.modules.indexOf(m) >= 0) continue;
            this.modules.push(m);
        }
        return this;
    },

    onEnterNode: function onEnterNode() {
        FWS_MVC.FLog.data("状态", "onEnterNode: {0}", this.path());

        for (var i = 0; i < this.modules.length; i++) {
            var m = this.modules[i];

            try {
                m.onEnterNode();
            } catch (err) {}

            m.connect();
        }
    },

    onLeaveNode: function onLeaveNode() {
        FWS_MVC.FLog.data("状态", "onLeaveNode: {0}", this.path());

        for (var i = 0; i < this.modules.length; i++) {
            var m = this.modules[i];

            try {
                m.onLeaveNode();
            } catch (err) {}

            m.disconnect();
        }
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 状态管理器
 */
FWS_MVC.FContextManager = cc.Class({
    name: "FContextManager",

    statics: {
        init: function init(rootContext) {
            FWS_MVC.FContextManager._root = rootContext;
            FWS_MVC.FContextManager._current = null;
            FWS_MVC.FContextManager._history = new Array();
        },
        root: function root() {
            return FWS_MVC.FContextManager._root;
        },
        current: function current() {
            return FWS_MVC.FContextManager._current;
        },
        back: function back() {
            if (FWS_MVC.FContextManager._history.length <= 1) return;
            var c = FWS_MVC.FContextManager._history.pop();
            c = FWS_MVC.FContextManager._history[FWS_MVC.FContextManager._history.length - 1];
            FWS_MVC.FContextManager.goto(c);
        },
        gotoID: function gotoID(id) {
            if (FWS_MVC.FContextManager._root) {
                var t = FWS_MVC.FContextManager._root.find(id);
                if (t) {
                    FWS_MVC.FContextManager.goto(t);
                }
            }
        },
        goto: function goto(context) {
            if (context && context.root() == FWS_MVC.FContextManager._root && FWS_MVC.FContextManager._current != context) {
                var theParentNode = null;

                //关闭之前的无关节点
                if (FWS_MVC.FContextManager._current) {
                    theParentNode = FWS_MVC.FContextManager._current.parentBy(context);

                    var closeList = FWS_MVC.FContextManager._current.parentNodes();
                    var closeListCount = closeList.length;

                    for (var i = closeListCount - 1; i >= 0; i--) {
                        var closeContext = closeList[i];

                        if (closeContext == theParentNode) break;

                        if (closeContext.onLeaveNode && typeof closeContext.onLeaveNode == "function") {
                            closeContext.onLeaveNode();
                        }
                    }
                }
                //打开需要的新节点
                var found = false;
                var openList = context.parentNodes();
                var theParentNodeIsNull = true;
                if (theParentNode) theParentNodeIsNull = false;
                for (var i = 0; i < openList.length; i++) {
                    var openContext = openList[i];
                    if (theParentNodeIsNull) {
                        if (openContext.onEnterNode && typeof openContext.onEnterNode == "function") {
                            openContext.onEnterNode();
                            continue;
                        }
                    }

                    if (found) {
                        if (openContext != theParentNode || theParentNodeIsNull) {
                            if (openContext.onEnterNode && typeof openContext.onEnterNode == "function") {
                                openContext.onEnterNode();
                            }
                        }
                    } else {
                        if (openContext == theParentNode) {
                            found = true;
                        }
                    }
                }

                FWS_MVC.FContextManager._current = context;
                FWS_MVC.FContextManager._history.push(context);
                FWS_MVC.FLog.info("状态", "切换至: {0}", context.path());
            }
        }
    }
});

//──────────────────────────────────────────────────────────

module.exports = FWS_MVC;

cc._RFpop();
},{}],"FWS_NATIVE_GATEWAY":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'df8d7UHzl9JtooMq7UR0hPm', 'FWS_NATIVE_GATEWAY');
// scripts/FWS/FWS_NATIVE_GATEWAY.js

/*
 * 与原生模块, 或者C++模块的接口通道
 * @Author: thor.liu 
 * @Date: 2016-12-02 10:46:31 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-02 11:05:15
 */

/*
    参数以及返回内容
    {
        name: "socketConnect",
        index: 0,
        args: { //map
            ip: 192.18.1.1
            port: 1000
        }
    }
 */

var FWS_MVC = require("FWS_MVC");

var FWS_NATIVE_GATEWAY = {
    FNativeGateway: cc.Class({
        name: "FNativeGateway",
        ctor: function ctor() {},
        statics: {
            ///调用native
            to: function to(name, args) {
                if (FWS_NATIVE_GATEWAY.FNativeGateway.nextIndex) {
                    FWS_NATIVE_GATEWAY.FNativeGateway.nextIndex++;
                } else {
                    FWS_NATIVE_GATEWAY.FNativeGateway.nextIndex = 0;
                }

                var obj = {};
                obj.name = "aaa";
                // obj.index = FWS_NATIVE_GATEWAY.FNativeGateway.nextIndex;
                // obj.args = args;

                // var str = JSON.stringify(obj);

                //sangsang add
                // obj.str = str;
                // //TODO: 调用桑桑接口
                jsCppConnect.testlog("发送了");

                jsCppConnect.jsToCpp(obj);
            },
            ///来自native调用
            from: function from(msg) {
                // let req = JSON.parse(strJson);
                // if (req.name && req.args && reg.index) {
                //     let handler = FWS_NATIVE_GATEWAY.FNativeGateway["from_" + req.name];
                //     if (handler && typeof(handler) == "function") {
                //
                //     } else {
                //         FWS_MVC.FLog.err("FNativeGateway", "未识别的调用 {0}", strJson);
                //     }
                // }
                var obj = new Object();
                obj.name = "我接收到消息了";
                obj.msg = msg;
                jsCppConnect.testlog("我接收到消息了");

                jsCppConnect.jsToCpp(obj);
            }
        }
    })
};

window.cppTojs = function (obj) {
    FWS_NATIVE_GATEWAY.FNativeGateway.from(obj);
};

module.exports = FWS_NATIVE_GATEWAY;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"FWebConnectController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '48694Z+gTJE+44/7xM7+TPq', 'FWebConnectController');
// scripts/FWS/Controller/FWebConnectController.js

var FWS_MVC = require("FWS_MVC");
var FWebConnectController = cc.Class({
    "extends": FWS_MVC.FMessageConnection,

    properties: {
        URL: "https://game.smzy.cc/user/"
    },

    onFMessage_SendWebMSG: function onFMessage_SendWebMSG(msg) {

        var xhr = cc.loader.getXMLHttpRequest();
        var url = this.URL + this.getMsgData(msg);
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 207) {

                var httpStatus = xhr.statusText;
                var response = xhr.responseText.substring(0, 100) + "...";
                this.onReceiveMsg(httpStatus, response);
            }
        };
        xhr.send();
        msg.complete();
    },

    getMsgData: function getMsgData(msg) {

        var data;
        if (msg.args.msgType === "register") {
            data = "register?" + "appid=" + msg.args.appid + "&" + "time=" + msg.args.time + "&" + "mobile" + msg.args.mobile + "&" + "type" + msg.args.type + "&" + "sms" + msg.args.sms + "&" + "password" + msg.args.password;
        } else if (msg.args.msgType === "sendsms") {
            data = "sendsms?" + "appid=" + msg.args.appid + "&" + "time=" + msg.args.time + "&" + "mobile" + msg.args.mobile;
        } else if (msg.args.msgType === "login") {
            data = "login?" + "appid=" + msg.args.appid + "&" + "sign=" + msg.args.sign + "&" + "time=" + msg.args.time + "&" + "mobile=" + msg.args.mobile + "&" + "type=" + msg.args.type + "&" + "password=" + msg.args.password + "&" + "appdevtoken=" + msg.args.appdevtoken + "&" + "version=" + msg.args.version;
        }
        return data;
    },

    onReceiveMsg: function onReceiveMsg(httpStatus, response) {
        if (httpStatus == 4) {
            console.log(response);
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },
module.exports = FWebConnectController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"HelloWorld":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fa5efIIqXpEa4NJXvEDbBFD', 'HelloWorld');
// cppJsTestScene/HelloWorld.js

cc.Class({
    "extends": cc.Component,

    properties: {
        label: {
            "default": null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.label.string = this.text;

        window.HelloWorld = this;
    },
    clickForCppToJs: function clickForCppToJs() {},
    clickForSendMsg: function clickForSendMsg() {

        // var msg = new MVC.FMessage("SendWebMSG","root");
        // msg.args.msgType = "login";
        // msg.args.appid = "appid";
        // msg.args.time = "time";
        // msg.args.mobile = "mobile";
        // msg.args.type = "type";
        // msg.args.sms = "sms";
        // msg.args.password = "password";

        // msg.send();
        this.label.string = "sssss";

        var msg = {
            name: "meinv"
        };
        jsCppConnect.testlog("aaa5");

        jsCppConnect.jsToCpp(msg);
    },
    clickForConnect: function clickForConnect() {},
    cppTOjs: function cppTOjs(msg) {
        this.label.string = msg;
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"LoadingController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '95f0fnkyxxFzKYLrZyamcpo', 'LoadingController');
// scripts/P9/context/0Loading/LoadingController.js

var MVC = require("FWS_MVC");
var LoadingController;
LoadingController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:此类是对将来可能加进来的其他创建方法存在的
    //TODO:这期间加载最新客户端版本号  最忌支持的客户端版本号 其他参数 判定本地是否有登陆信息
    //TODO:等待服务器消息 是进入主页面 还是断线续玩
    onEnterNode: function onEnterNode() {

        cc.log("party_CreatePartyController");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = LoadingController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"LoadingScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'eb4bcBcPD1Hkbi4xboj7JUi', 'LoadingScript');
// scripts/P9/context/0Loading/LoadingScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        label: {
            "default": null,
            type: cc.Label
        }
    },
    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
        this.scheduleOnce(function () {
            // MVC.FContextManager.gotoID("login");
            // var obj = new Object();
            // obj.data = "我是数据"
            // gateWay.to("第一次测试！！！");
        }, 2);
    },
    onDestory: function onDestory() {
        this.disconnect();
    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"LoadingView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '73be8QAwkFIWqaIUoNodo9U', 'LoadingView');
// scripts/P9/context/0Loading/LoadingView.js

var MVC = require("FWS_MVC");
var LoadingView;
LoadingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *TODO:有需要的话根据回复的数据的不同 加载进度
     * */
    onEnterNode: function onEnterNode() {
        //第一个SCENE不需要加载 自动加载的
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = LoadingView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"LoginController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0d115J/7oJIWZvX9uFzwgQF', 'LoginController');
// scripts/P9/context/1Login/LoginController.js

var MVC = require("FWS_MVC");
var Project = require("Project");
var LoginController;
LoginController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("LoginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("LoginController onLeaveNode");
    },
    onFMessage_clickLoginButton: function onFMessage_clickLoginButton(msg) {
        if (msg.args.name == "登录") {
            //进入分享节点
            cc.log("goto main 前");
            MVC.FContextManager.gotoID("main");
            cc.log("goto main 后");
            //发送消息给网络模块
        } else if (msg.args.name == "注册") {
                //进入分享节点
                // MVC.FContextManager.gotoID("Share");
                //发送消息给网络模块
            }
    }

});
module.exports = LoginController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"LoginView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '05986U9/gJLuojTId6uZEtB', 'LoginView');
// scripts/P9/context/1Login/LoginView.js

var MVC = require("FWS_MVC");
var LoginView;
var playerHeadLayer;
LoginView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("LoginScene");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = LoginView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"MD5":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0205dfOf1tJyYnG8QG03Hgh', 'MD5');
// scripts/FWS/Utils/MD5.js

var hexcase = 0;function hex_md5(a) {
  if (a == "") return a;return rstr2hex(rstr_md5(str2rstr_utf8(a)));
}function hex_hmac_md5(a, b) {
  return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a), str2rstr_utf8(b)));
}function md5_vm_test() {
  return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
}function rstr_md5(a) {
  return binl2rstr(binl_md5(rstr2binl(a), a.length * 8));
}function rstr_hmac_md5(c, f) {
  var e = rstr2binl(c);if (e.length > 16) {
    e = binl_md5(e, c.length * 8);
  }var a = Array(16),
      d = Array(16);for (var b = 0; b < 16; b++) {
    a[b] = e[b] ^ 909522486;d[b] = e[b] ^ 1549556828;
  }var g = binl_md5(a.concat(rstr2binl(f)), 512 + f.length * 8);return binl2rstr(binl_md5(d.concat(g), 512 + 128));
}function rstr2hex(c) {
  try {
    hexcase;
  } catch (g) {
    hexcase = 0;
  }var f = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";var b = "";var a;for (var d = 0; d < c.length; d++) {
    a = c.charCodeAt(d);b += f.charAt(a >>> 4 & 15) + f.charAt(a & 15);
  }return b;
}function str2rstr_utf8(c) {
  var b = "";var d = -1;var a, e;while (++d < c.length) {
    a = c.charCodeAt(d);e = d + 1 < c.length ? c.charCodeAt(d + 1) : 0;if (55296 <= a && a <= 56319 && 56320 <= e && e <= 57343) {
      a = 65536 + ((a & 1023) << 10) + (e & 1023);d++;
    }if (a <= 127) {
      b += String.fromCharCode(a);
    } else {
      if (a <= 2047) {
        b += String.fromCharCode(192 | a >>> 6 & 31, 128 | a & 63);
      } else {
        if (a <= 65535) {
          b += String.fromCharCode(224 | a >>> 12 & 15, 128 | a >>> 6 & 63, 128 | a & 63);
        } else {
          if (a <= 2097151) {
            b += String.fromCharCode(240 | a >>> 18 & 7, 128 | a >>> 12 & 63, 128 | a >>> 6 & 63, 128 | a & 63);
          }
        }
      }
    }
  }return b;
}function rstr2binl(b) {
  var a = Array(b.length >> 2);for (var c = 0; c < a.length; c++) {
    a[c] = 0;
  }for (var c = 0; c < b.length * 8; c += 8) {
    a[c >> 5] |= (b.charCodeAt(c / 8) & 255) << c % 32;
  }return a;
}function binl2rstr(b) {
  var a = "";for (var c = 0; c < b.length * 32; c += 8) {
    a += String.fromCharCode(b[c >> 5] >>> c % 32 & 255);
  }return a;
}function binl_md5(p, k) {
  p[k >> 5] |= 128 << k % 32;p[(k + 64 >>> 9 << 4) + 14] = k;var o = 1732584193;var n = -271733879;var m = -1732584194;var l = 271733878;for (var g = 0; g < p.length; g += 16) {
    var j = o;var h = n;var f = m;var e = l;o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);o = safe_add(o, j);n = safe_add(n, h);m = safe_add(m, f);l = safe_add(l, e);
  }return Array(o, n, m, l);
}function md5_cmn(h, e, d, c, g, f) {
  return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d);
}function md5_ff(g, f, k, j, e, i, h) {
  return md5_cmn(f & k | ~f & j, g, f, e, i, h);
}function md5_gg(g, f, k, j, e, i, h) {
  return md5_cmn(f & j | k & ~j, g, f, e, i, h);
}function md5_hh(g, f, k, j, e, i, h) {
  return md5_cmn(f ^ k ^ j, g, f, e, i, h);
}function md5_ii(g, f, k, j, e, i, h) {
  return md5_cmn(k ^ (f | ~j), g, f, e, i, h);
}function safe_add(a, d) {
  var c = (a & 65535) + (d & 65535);var b = (a >> 16) + (d >> 16) + (c >> 16);return b << 16 | c & 65535;
}function bit_rol(a, b) {
  return a << b | a >>> 32 - b;
};

module.exports = hex_md5;

cc._RFpop();
},{}],"MTTSNGWaitingScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '57ec4IV+ARC37OHDLqpDcUD', 'MTTSNGWaitingScript');
// scripts/P9/context/MTTSNGloading/MTTSNGWaitingScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //返回按钮
        backButton: {
            "default": null,
            type: cc.Button
        },
        moreButton: {
            "default": null,
            type: cc.Button
        },
        signUpButton: {
            "default": null,
            type: cc.Button
        },
        stateButton: {
            "default": null,
            type: cc.Button
        },
        rewardsButton: {
            "default": null,
            type: cc.Button
        },
        playerButton: {
            "default": null,
            type: cc.Button
        },
        TableButton: {
            "default": null,
            type: cc.Button
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },

    clickbackButton: function clickbackButton() {
        cc.log("clickbackButton");
    },
    clickmoreButton: function clickmoreButton() {
        cc.log("clickmoreButton");
    },
    clicksignUpButton: function clicksignUpButton() {
        var msg = new MVC.FMessage("MTTSNGclicksignUpButton", "room");
        msg.args.name = "MTTSNGclicksignUpButton进入倒计时";
        msg.send();
        cc.log("clicksignUpButton");
    },
    clickstateButton: function clickstateButton() {
        cc.log("clickstateButton");
    },
    clickrewardsButton: function clickrewardsButton() {
        cc.log("clickrewardsButton");
    },
    clickplayerButton: function clickplayerButton() {
        cc.log("clickplayerButton");
    },
    clickpTableButton: function clickpTableButton() {
        cc.log("clickpTableButton");
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"MTTpartyScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'ba344Pn4WJNXq+9DJERXxYe', 'MTTpartyScript');
// scripts/P9/Maanna/MTTpartyScript.js

var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {

        scrollView: {
            "default": null,
            type: cc.ScrollView

        },

        viewone: {
            "default": null,
            type: cc.Node
        },

        viewtwo: {
            "default": null,
            type: cc.Node
        },

        viewthree: {
            "default": null,
            type: cc.Node
        }

    },

    onLoad: function onLoad() {
        this.connect();
        // this.scrollView.enabled = false;
    },

    onDestory: function onDestory() {
        this.disconnect();
    },

    //高级设置
    moreoptioncall: function moreoptioncall() {

        this.scrollView.enabled = true;
        this.viewtwo.active = true;
        this.scrollView.scrollToBottom(0.1);
        this.viewthree.color = new cc.Color(0, 0, 0);
    },

    //收起
    packupcall: function packupcall() {
        this.scrollView.scrollToTop(0.1);
        this.scrollView.enabled = true;
        this.viewtwo.active = false;
        this.viewthree.color = new cc.Color(20, 32, 78);
    },

    //创建MTT
    MTTButtonClick: function MTTButtonClick() {
        var msg = new MVC.FMessage("clickMTTButton", "createPartySet");
        msg.args.name = "创建MTT比赛";
        msg.send();
    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"MainController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '22564Jpmu5JKalojvr5zdhg', 'MainController');
// scripts/P9/context/2main/MainController.js

var MVC = require("FWS_MVC");
var Project = require("Project");
var MainController;
MainController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("MainController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("MainController onLeaveNode");
    },
    onFMessage_clickaddPartyButton: function onFMessage_clickaddPartyButton(msg) {
        MVC.FContextManager.gotoID("loadingParty");
        msg.complete();
    },
    onFMessage_clicksetPartyButton: function onFMessage_clicksetPartyButton(msg) {
        MVC.FContextManager.gotoID("createPartySet");
        msg.complete();
    },
    onFMessage_clickMy: function onFMessage_clickMy(msg) {
        MVC.FContextManager.gotoID("my");
        msg.complete();
    }

});
module.exports = MainController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"MainView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e8e28Xn7rlH6ZKNJUSEwMk+', 'MainView');
// scripts/P9/context/2main/MainView.js

var MVC = require("FWS_MVC");
var MainView;
var playerHeadLayer;
MainView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("MainScene");
        //loadscene。。。

        //loadscene。。。
        // cc.loader.loadRes("TestProfab/main", function (err, prefab) {
        //     cc.log(err);
        //     playerHeadLayer = cc.instantiate(prefab);
        //     cc.director.getScene().addChild(playerHeadLayer);
        // });
        // cc.director.loadScene("roomScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = MainView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"MathUtility":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4fe8buzw8VHFJXaSB4W//bk', 'MathUtility');
// scripts/P9/context/AvatarSystem/MathUtility.js

var MathUtility;

MathUtility = cc.Class({
						"extends": cc.Component,
						/// <summary>
						/// 计算两点的距离
						/// </summary>
						/// <param name="p1"></param>
						/// <param name="p2"></param>
						/// <returns></returns>
						GetDistance: function GetDistance(PointP1, PointP2) {

												var dx = Math.abs(PointP1.x - PointP2.x);
												var dy = Math.abs(PointP1.y - PointP2.y);
												return Math.sqrt(dx * dx + dy * dy);
						},
						/// <summary>
						/// 计算两点的角度
						/// </summary>
						/// <param name="p1"></param>
						/// <param name="p2"></param>
						/// <returns></returns>
						GetAngle: function GetAngle(PointP1, PointP2) {
												var use360 = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

												var dx = PointP2.y - PointP1.y;
												var dy = PointP2.x - PointP1.x;

												var r = Math.atan2(dy, dx) * (180 / Math.PI);

												if (use360) {
																		r += 360;
																		r %= 360;
																		r = 360 - r + 90;
																		r = r % 360;
												}
												return r;
						},
						/// <summary>
						/// 根据一个点,角度和长度计算最终的位置
						/// </summary>
						/// <param name="p"></param>
						/// <param name="angle"></param>
						/// <param name="distance"></param>
						/// <returns></returns>
						GetPosition: function GetPosition(PointP, angle, distance) {
												var a = angle / (180 / Math.PI);
												var cx = distance * Math.cos(a);
												var cy = distance * Math.sin(a);

												return cc.p(PointP.x + cx, PointP.y + cy);
						}
});
module.exports = MathUtility;

cc._RFpop();
},{}],"NewScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8e7f8ww/UtB7IIvCE4QMJlB', 'NewScript');
// scripts/P9/gjComment/NewScript.js

cc.Class({
    "extends": cc.Component,

    properties: {
        prefab: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {

        this.node.setContentSize(cc.director.getVisibleSize());
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"P9CreateSettings":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f5914Py9TpF/pSQgmCscTsg', 'P9CreateSettings');
// scripts/P9/Data/P9CreateSettings.js


var MVC = require("FWS_MVC");
var P9CreateSettings = cc.Class({
    "extends": MVC.FMessageConnection,
    ctor: function ctor() {
        P9CreateSettings.P9CreateSettingsSTD = new P9CreateSettings.P9CreateSettingsSTD();
        P9CreateSettings.P9CreateSettingsSTD.init_SB_BB_EntryFee();
        P9CreateSettings.P9CreateSettingsSTD.init_PlayerNum();
        P9CreateSettings.P9CreateSettingsSTD.init_PartyTime();
        P9CreateSettings.P9CreateSettingsSTD.init_Ante();
        P9CreateSettings.P9CreateSettingsSTD.init_DeepRaise();

        P9CreateSettings.P9CreateSettingsSNG = new P9CreateSettings.P9CreateSettingsSNG();
        P9CreateSettings.P9CreateSettingsSNG.init_Speed();
        P9CreateSettings.P9CreateSettingsSNG.init_SingleDeskPlayerNum();

        P9CreateSettings.P9CreateSettingsMTT = new P9CreateSettings.P9CreateSettingsMTT();
        P9CreateSettings.P9CreateSettingsMTT.init_SingleDeskPlayerNum();
        P9CreateSettings.P9CreateSettingsMTT.init_Speed();
        P9CreateSettings.P9CreateSettingsMTT.init_StopEnrolment();
    },
    onEnterNode: function onEnterNode() {},
    onFMessage_GetP9CreateSettingsSTDDataAck: function onFMessage_GetP9CreateSettingsSTDDataAck(msg) {
        msg.complete();
        var msg1 = new MVC.FMessage("GetP9CreateSettingsSTDDataReq", "root");
        msg1.args.SB_BB_EntryFee = P9CreateSettings.P9CreateSettingsSTD.SB_BB_EntryFee;
        msg1.args.PlayerNum = P9CreateSettings.P9CreateSettingsSTD.PlayerNum;
        msg1.args.PartyTime = P9CreateSettings.P9CreateSettingsSTD.PartyTime;
        msg1.args.Ante = P9CreateSettings.P9CreateSettingsSTD.Ante;
        msg1.args.DeepRaise = P9CreateSettings.P9CreateSettingsSTD.DeepRaise;

        msg1.send();
    },
    onFMessage_GetP9CreateSettingsMTTAck: function onFMessage_GetP9CreateSettingsMTTAck(msg) {
        msg.complete();
        var msg1 = new MVC.FMessage("GetP9CreateSettingsMTTReq", "root");
        msg1.args.SingleDeskPlayerNum = P9CreateSettings.P9CreateSettingsMTT.SingleDeskPlayerNum;
        msg1.args.Speed = P9CreateSettings.P9CreateSettingsMTT.Speed;

        msg1.send();
    },
    onFMessage_GetP9CreateSettingsSNGAck: function onFMessage_GetP9CreateSettingsSNGAck(msg) {
        msg.complete();
        var msg1 = new MVC.FMessage("GetP9CreateSettingsSNGReq", "root");
        msg1.args.SingleDeskPlayerNum = P9CreateSettings.P9CreateSettingsSNG.SingleDeskPlayerNum;
        msg1.args.Speed = P9CreateSettings.P9CreateSettingsSNG.Speed;

        msg1.send();
    }
});

P9CreateSettings.P9CreateSettingsSTD = cc.Class({

    properties: {
        SB_BB_EntryFee: [],
        PlayerNum: [],
        PartyTime: [],
        Ante: [],
        DeepRaise: []

    },

    init_SB_BB_EntryFee: function init_SB_BB_EntryFee() {
        this.SB_BB_EntryFee[0] = {
            SB: 1,
            BB: 2,
            EntryFee: 200
        };
        this.SB_BB_EntryFee[1] = {
            SB: 2,
            BB: 4,
            EntryFee: 400
        };
        this.SB_BB_EntryFee[2] = {
            SB: 5,
            BB: 10,
            EntryFee: 1000
        };
        this.SB_BB_EntryFee[3] = {
            SB: 10,
            BB: 20,
            EntryFee: 2000
        };
        this.SB_BB_EntryFee[4] = {
            SB: 25,
            BB: 50,
            EntryFee: 5000
        };
        this.SB_BB_EntryFee[5] = {
            SB: 50,
            BB: 100,
            EntryFee: 10000
        };
    },
    init_PlayerNum: function init_PlayerNum() {
        for (var i = 0; i < 7; i++) {
            this.PlayerNum[i] = 2 + i;
        }
    },
    init_PartyTime: function init_PartyTime() {
        // for (var i=0;i<9;i++){
        //     this.PartyTime[i]=0.5+i*0.5;
        // }
        this.PartyTime[0] = 0.5;
        this.PartyTime[1] = 1;
        this.PartyTime[2] = 1.5;
        this.PartyTime[3] = 2;
        this.PartyTime[4] = 2.5;
        this.PartyTime[5] = 4;
        this.PartyTime[6] = 6;
    },

    init_Ante: function init_Ante() {
        // for (var i=0;i<5;i++){
        //    this.Ante[i]=i;
        // }
        this.Ante[0] = 1;
        this.Ante[1] = 2;
        this.Ante[2] = 3;
        this.Ante[3] = 4;
    },
    init_DeepRaise: function init_DeepRaise() {
        // for (var i=0;i<3;i++){
        //     this.DeepRaise[i]=2+i*2;
        // }
        this.DeepRaise[0] = 2;
        this.DeepRaise[1] = 4;
        this.DeepRaise[2] = 8;
    }

});

P9CreateSettings.P9CreateSettingsSNG = cc.Class({

    properties: {
        SingleDeskPlayerNum: [],
        Speed: [],
        StopEnrolment: []
    },

    init_Speed: function init_Speed() {
        this.Speed[0] = {
            SpeedName: "慢速",
            VirtualApplicationFee: 1000,
            InitialIntegral: 4000,
            BlindUpTime: "15'",
            TheFirstPrize: 4500,
            TheSecondPrize: 2700,
            TheThirdPrize: 1800
        };
        this.Speed[1] = {
            SpeedName: "普通",
            VirtualApplicationFee: 1000,
            InitialIntegral: 3000,
            BlindUpTime: "10'",
            TheFirstPrize: 4500,
            TheSecondPrize: 2700,
            TheThirdPrize: 1800
        };
        this.Speed[2] = {
            SpeedName: "高速",
            VirtualApplicationFee: 1000,
            InitialIntegral: 2000,
            BlindUpTime: "5'",
            TheFirstPrize: 4500,
            TheSecondPrize: 2700,
            TheThirdPrize: 1800
        };
        this.Speed[3] = {
            SpeedName: "超高速",
            VirtualApplicationFee: 1000,
            InitialIntegral: 1000,
            BlindUpTime: "3'",
            TheFirstPrize: 4500,
            TheSecondPrize: 2700,
            TheThirdPrize: 1800
        };
    },
    init_SingleDeskPlayerNum: function init_SingleDeskPlayerNum() {
        for (var i = 0; i < 5; i++) {
            this.SingleDeskPlayerNum[i] = 2 + i;
        }
    }

});
P9CreateSettings.P9CreateSettingsMTT = cc.Class({

    properties: {
        SingleDeskPlayerNum: [],
        Speed: []

    },
    onEnterNode: function onEnterNode() {
        this.init_SingleDeskPlayerNum();
        this.init_Speed();
    },
    init_SingleDeskPlayerNum: function init_SingleDeskPlayerNum() {
        for (var i = 0; i < 5; i++) {
            this.SingleDeskPlayerNum[i] = 2 + i;
        }
    },
    init_StopEnrolment: function init_StopEnrolment() {

        this.StopEnrolment[0] = 6;
        this.StopEnrolment[1] = 8;
        this.StopEnrolment[2] = 10;
        this.StopEnrolment[3] = 12;
        this.StopEnrolment[4] = 15;
    },

    init_Speed: function init_Speed() {
        this.Speed[0] = {
            SpeedName: "慢速",
            VirtualApplicationFee: 1000,
            BlindUpTime: "15'",
            InitialInjection: "10/20",
            InitialIntegral: 4000
        }, this.Speed[1] = {
            SpeedName: "普通",
            VirtualApplicationFee: 1000,
            BlindUpTime: "10'",
            InitialInjection: "10/20",
            InitialIntegral: 3000
        }, this.Speed[2] = {
            SpeedName: "高速",
            VirtualApplicationFee: 1000,
            BlindUpTime: "5'",
            InitialInjection: "10/20",
            InitialIntegral: 2000
        }, this.Speed[3] = {
            SpeedName: "超高速",
            VirtualApplicationFee: 1000,
            BlindUpTime: "3'",
            InitialInjection: "10/20",
            InitialIntegral: 1000
        };
    }

});

module.exports = P9CreateSettings;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"P9GameData":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5109fHWLFFHja5IXhdsEl1u', 'P9GameData');
// scripts/P9/Data/P9GameData.js

/*
 * 九人桌游戏相关的特有数据结构
 * @Author: thor.liu 
 * @Date: 2016-12-03 13:26:32 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-12 14:44:50
 */
var P9GameData = {};

var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");

///游戏房间类型
P9GameData.P9RoomType = cc.Enum({
    STD: 0,
    SNG: 1,
    MTT: 2
});

///扑克牌的花色
P9GameData.PKCardColor = cc.Enum({
    //方片
    Diamond: 0,
    //草花
    Club: 1,
    //红心
    Hearts: 2,
    //黑桃
    Spade: 3
});

///扑克牌的点数
P9GameData.PKCardAmount = cc.Enum({
    AmountA: 0,
    Amount2: 1,
    Amount3: 2,
    Amount4: 3,
    Amount5: 4,
    Amount6: 5,
    Amount7: 6,
    Amount8: 7,
    Amount9: 8,
    Amount10: 9,
    AmountJ: 10,
    AmountQ: 11,
    AmountK: 12
});

///牌型组合类型
P9GameData.P9CardGroupType = cc.Enum({
    ///单牌
    Single: 0,
    ///1对
    Pair1: 1,
    ///2对
    Pair2: 2,
    ///3条
    ThreeSame: 3,
    ///顺
    Straight: 4,
    ///同花
    Flush: 5,
    ///葫芦
    FlushHouse: 6,
    ///4条
    FourSame: 7,
    ///同花顺
    StraightFlush: 8,
    ///皇家同花顺
    StraightKing: 9
});

///游戏动作类型定义
P9GameData.P9GameActionType = cc.Enum({
    ///无
    None: 0,
    ///Ante
    Ante: 1,
    ///小盲
    SB: 2,
    ///大盲
    BB: 3,
    ///下注
    Bet: 4,
    ///跟注
    Call: 5,
    ///弃牌
    Fold: 6,
    ///过牌
    Check: 7,
    ///加注
    Raise: 8,
    ///全下
    Allin: 9,
    ///亮牌
    Showcard: 10,
    ///Straddle
    Straddle: 11,
    ///强制大盲注
    ForceBB: 12,
    ///加时
    TimeBank: 13,

    ///一手结果加分
    ShowChips: 102
});

///游戏事件类型
P9GameData.P9GameEventType = cc.Enum({
    ///无
    None: 0,
    ///发手牌
    HandCards: 1,
    ///发公共牌
    PublicCards: 2
});

//──────────────────────────────────────────────────────────

//扑克牌数据
P9GameData.PKCard = cc.Class({
    name: "PKCard",

    ctor: function ctor() {
        this._id = -1;
    },

    toString: function toString() {
        var szStyles = ["♦️", "♣️", "♥️", "♠️"];
        var szAmounts = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

        if (this._id < 0) return "<?>";

        var c = this.color;
        var a = this.amount;

        return "<" + szStyles[c] + szAmounts[a] + ">";
    },

    statics: {
        /**
         * 创建指定ID的牌
         */
        create: function create(cardId) {
            var ret = new P9GameData.PKCard();
            ret.id = cardId;
            return ret;
        },
        /**
         * 创建指定花色和点数的牌
         */
        createByColorAmount: function createByColorAmount(c, a) {
            var cardId = (c + 1) * 100 + a;
            var ret = new P9GameData.PKCard();
            ret.id = cardId;
            return ret;
        }
    },

    properties: {
        ///获取或设置牌的ID
        id: {
            get: function get() {
                return this._id;
            },
            set: function set(v) {
                this._id = v;
            }
        },
        ///获取牌的花色
        color: {
            get: function get() {
                if (this._id >= 0) {
                    var ret = this._id;
                    ret = Math.floor(ret / 100);
                    return ret - 1;
                }
                return -1;
            }
        },
        ///获取牌的点数
        amount: {
            get: function get() {
                if (this._id >= 0) {
                    var ret = this._id;
                    ret = Math.floor(ret % 100);
                    return ret;
                }
                return -1;
            }
        },
        ///获取牌的排序编号
        order: {
            get: function get() {
                var ret = this._id;
                if (ret < 0) return ret;

                var iColor = this.color;
                var iAmount = this.amount;

                var iColorValue = 0;
                var iAmountValue = 0;

                if (iAmount == 0) iAmount = 20;

                switch (iColor) {
                    case P9GameData.PKCardColor.Club:
                        iColorValue = 1;
                        break;

                    case P9GameData.PKCardColor.Diamond:
                        iColorValue = 2;
                        break;

                    case P9GameData.PKCardColor.Hearts:
                        iColorValue = 3;
                        break;

                    case P9GameData.PKCardColor.Spade:
                        iColorValue = 4;
                        break;
                }

                return iAmount * 1000 + iColorValue;
            }
        }
    }

});

//九人桌游戏房间数据
P9GameData.P9GameData = cc.Class({
    name: "P9GameData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {},

    properties: {
        ///游戏房间类型
        roomType: {
            get: function get() {
                this.getValue("roomType");
            },
            set: function set(v) {
                this.setValue("roomType", v);
            }
        }
    }
});

//九人桌游戏桌数据
P9GameData.P9GameTableData = cc.Class({
    name: "P9GameTableData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("publicCards", new MODEL.FArray());
        this.setValue("totalChips", 0);
        this.setValue("pots", new MODEL.FArray());
    },
    properties: {
        ///公共牌
        publicCards: {
            get: function get() {
                return this.getValue("publicCards");
            }
        },
        ///当前游戏的总奖池
        totalChips: {
            get: function get() {
                return this.getValue("totalChips");
            },
            set: function set(v) {
                this.setValue("totalChips", v);
            }
        },
        ///当前游戏的所有奖池 (P9GamePotData组成的FArray)
        pots: {
            get: function get() {
                return this.getValue("pots");
            }
        }
    }
});

//九人桌游戏奖池数据
P9GameData.P9GamePotData = cc.Class({
    name: "P9GamePotData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("chips", 0);
        this.setValue("seats", new MODEL.FArray());
    },
    properties: {
        //奖池中的筹码数量
        chips: {
            get: function get() {
                return this.getValue("chips");
            },
            set: function set(v) {
                this.setValue("chips", v);
            }
        },
        //奖池涉及的玩家坐位号
        seats: {
            get: function get() {
                return this.getValue("seats");
            }
        }
    }
});

//九人桌游戏结算数据
P9GameData.P9GameResultData = cc.Class({
    name: "P9GameResultData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("players", new MODEL.FArray());
    },
    properties: {
        players: {
            get: function get() {
                return this.getValue("players");
            }
        }
    }
});

//九人桌游戏结算时每个玩家的数据
P9GameData.P9GameResultPlayerData = cc.Class({
    name: "P9GameResultPlayerData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("seat", 0);
        this.setValue("winChips", 0);
    },
    properties: {
        //座位号
        seat: {
            get: function get() {
                return this.getValue("seat");
            },
            set: function set(v) {
                this.setValue("seat", v);
            }
        },
        //赢的筹码数
        winChips: {
            get: function get() {
                return this.getValue("winChips");
            },
            set: function set(v) {
                this.setValue("winChips", v);
            }
        }
    }
});

//九人桌玩家数据
P9GameData.P9PlayerData = cc.Class({
    name: "P9PlayerData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("handCards", new MODEL.FArray());
        this.setValue("cardGroup", new MODEL.FArray());
        this.setValue("cardGroupType", P9GameData.P9CardGroupType.None);
        this.setValue("currentRoundActionType", P9GameData.P9GameActionType.Single);
        this.setValue("currentRoundChips", 0);
    },
    properties: {
        ///手牌数据
        handCards: {
            get: function get() {
                return this.getValue("handCards");
            }
        },
        ///牌型组合
        cardGroup: {
            get: function get() {
                return this.getValue("cardGroup");
            }
        },
        ///牌型组合类型
        cardGroupType: {
            get: function get() {
                return this.getValue("cardGroupType");
            },
            set: function set(v) {
                this.setValue("cardGroupType", v);
            }
        },
        ///当前这一轮的动作类型
        currentRoundActionType: {
            get: function get() {
                return this.getValue("currentRoundActionType");
            },
            set: function set(v) {
                this.setValue("currentRoundActionType", v);
            }
        },
        ///当前这一轮出的筹码数
        currentRoundChips: {
            get: function get() {
                return this.getValue("currentRoundChips");
            },
            set: function set(v) {
                this.setValue("currentRoundChips", v);
            }
        }
    }
});

//九人桌牌谱数据
P9GameData.P9GameRoundData = cc.Class({
    name: "P9GameRoundData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {},
    properties: {}
});

//──────────────────────────────────────────────────────────

//发牌事件
P9GameData.P9GameEventGetCards = cc.Class({
    name: "P9GameEventGetCards",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("cards", new MODEL.FArray());
        this.setValue("seat", -1);
    },
    properties: {
        //本次发牌包含了哪几张扑克牌的对象
        cards: {
            get: function get() {
                return this.getValue("cards");
            }
        },
        //本次发牌是发给谁(座位号), 如果是负数, 表示是发的公共牌
        seat: {
            get: function get() {
                return this.getValue("seat");
            },
            set: function set(v) {
                this.setValue("seat", v);
            }
        }
    }
});

//动作询问
P9GameData.P9GameActionReqData = cc.Class({
    name: "P9GameActionReqData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("actionTypes", new MODEL.FArray());
        this.setValue("timer", 0);
        this.setValue("minChips", 0);
        this.setValue("maxChips", 0);
        this.setValue("seat", 0);
    },

    properties: {
        //可选的动作类型
        actionTypes: {
            get: function get() {
                return this.getValue("actionTypes");
            }
        },
        //到计时秒数
        timer: {
            get: function get() {
                return this.getValue("timer");
            },
            set: function set(v) {
                this.setValue("timer", v);
            }
        },
        //最小筹码
        minChips: {
            get: function get() {
                return this.getValue("minChips");
            },
            set: function set(v) {
                this.setValue("minChips", v);
            }
        },
        //最大筹码
        maxChips: {
            get: function get() {
                return this.getValue("maxChips");
            },
            set: function set(v) {
                this.setValue("maxChips", v);
            }
        },
        //座位号
        seat: {
            get: function get() {
                return this.getValue("seat");
            },
            set: function set(v) {
                this.setValue("seat", v);
            }
        }
    }
});

//──────────────────────────────────────────────────────────

P9GameData.P9UserFactory = cc.Class({
    name: "P9UserFactory",
    "extends": DATA.FUserFactory,
    ctor: function ctor() {},
    create: function create() {
        var ret = this._super();
        if (ret) {
            // ret.data.userData = new P9GameData.P9UserData();
        }
        return ret;
    }
});

P9GameData.P9PlayerFactory = cc.Class({
    name: "P9PlayerFactory",
    "extends": DATA.FPlayerFactory,
    ctor: function ctor() {},
    create: function create() {
        var ret = this._super();
        if (ret) {
            ret.data.playerData = new P9GameData.P9PlayerData();
        }
        return ret;
    }
});

P9GameData.P9GameFactory = cc.Class({
    name: "P9GameFactory",
    "extends": DATA.FGameFactory,
    ctor: function ctor() {},
    create: function create() {
        var ret = this._super();
        if (ret) {
            ret.data.gameData = new P9GameData.P9GameData();
        }
        return ret;
    }
});

P9GameData.P9GameTableFactory = cc.Class({
    name: "P9GameTableFactory",
    "extends": DATA.FGameTableFactory,
    ctor: function ctor() {},
    create: function create() {
        var ret = this._super();
        if (ret) {
            ret.data.tableData = new P9GameData.P9GameTableData();
        }
        return ret;
    }
});

P9GameData.P9GameRoundFactory = cc.Class({
    name: "P9GameRoundFactory",
    "extends": DATA.FGameRoundFactory,
    ctor: function ctor() {}
});

//──────────────────────────────────────────────────────────

module.exports = P9GameData;

cc._RFpop();
},{"FWS_MODEL":"FWS_MODEL","FWS_MODEL_DATA":"FWS_MODEL_DATA","FWS_MVC":"FWS_MVC"}],"P9RoomData":[function(require,module,exports){
"use strict";
cc._RFpush(module, '47557TBeV9OBL8QaY8GaWTl', 'P9RoomData');
// scripts/P9/Data/P9RoomData.js

/*
 * 九人桌的房间相关的特有数据结构
 * @Author: thor.liu 
 * @Date: 2016-12-03 13:26:13 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-08 19:57:20
 */

var P9RoomData = {};

var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");

///标准局参数(STD)
P9RoomData.P9STDGameData = cc.Class({
    name: "P9STDGameData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {

        this.sb = 10;
        this.bb = 20;
        this.enterChip = 2000;
        this.playerCount = 9;
        this.roomTime = 2;
        this.authorize = false;
        this.safe = false;
        this.ante = 0;
        this.straddle = 0;
        this.deepMode = 0;
        this.allin = false;
    },

    properties: {
        //小盲
        sb: {
            get: function get() {
                return this.getValue("sb");
            },
            set: function set(v) {
                this.setValue("sb", v);
            }
        },
        //大盲
        bb: {
            get: function get() {
                return this.getValue("bb");
            },
            set: function set(v) {
                this.setValue("bb", v);
            }
        },
        //带入记分牌
        enterChip: {
            get: function get() {
                return this.getValue("enterChip");
            },
            set: function set(v) {
                this.setValue("enterChip", v);
            }
        },
        //参与人数
        playerCount: {
            get: function get() {
                return this.getValue("playerCount");
            },
            set: function set(v) {
                this.setValue("playerCount", v);
            }
        },
        //牌局时长
        roomTime: {
            get: function get() {
                return this.getValue("roomTime");
            },
            set: function set(v) {
                this.setValue("roomTime", v);
            }
        },
        //授权
        authorize: {
            get: function get() {
                return this.getValue("authorize");
            },
            set: function set(v) {
                this.setValue("authorize", v);
            }
        },
        //保险开关
        safe: {
            get: function get() {
                return this.getValue("safe");
            },
            set: function set(v) {
                this.setValue("safe", v);
            }
        },
        //Ante
        ante: {
            get: function get() {
                return this.getValue("ante");
            },
            set: function set(v) {
                this.setValue("ante", v);
            }
        },
        //Straddle
        straddle: {
            get: function get() {
                return this.getValue("straddle");
            },
            set: function set(v) {
                this.setValue("straddle", v);
            }
        },
        //深筹模式
        deepMode: {
            get: function get() {
                return this.getValue("deepMode");
            },
            set: function set(v) {
                this.setValue("deepMode", v);
            }
        },
        //Allin 禁音
        allin: {
            get: function get() {
                return this.getValue("allin");
            },
            set: function set(v) {
                this.setValue("allin", v);
            }
        }
    }
});

//比赛局参数(SNG, MTT)
P9RoomData.P9MTTGameData = cc.Class({
    name: "P9MTTGameData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {},

    properties: {

        //单桌人数
        tablePlayerCount: {
            get: function get() {
                return this.getValue("tablePlayerCount");
            },
            set: function set(v) {
                this.setValue("tablePlayerCount", v);
            }
        },
        //速度
        speed: {
            get: function get() {
                return this.getValue("speed");
            },
            set: function set(v) {
                this.setValue("speed", v);
            }
        },
        //授权
        authorize: {
            get: function get() {
                return this.getValue("authorize");
            },
            set: function set(v) {
                this.setValue("authorize", v);
            }
        },
        //延时报名
        delayJoin: {
            get: function get() {
                return this.getValue("delayJoin");
            },
            set: function set(v) {
                this.setValue("delayJoin", v);
            }
        },
        //深筹模式
        deepMode: {
            get: function get() {
                return this.getValue("deepMode");
            },
            set: function set(v) {
                this.setValue("deepMode", v);
            }
        },

        //(MTT专用) 开赛时间
        startTime: {
            get: function get() {
                return this.getValue("startTime");
            },
            set: function set(v) {
                this.setValue("startTime", v);
            }
        },

        //(SNG专用) 参数人数
        maxPlayerCount: {
            get: function get() {
                return this.getValue("maxPlayerCount");
            },
            set: function set(v) {
                this.setValue("maxPlayerCount", v);
            }
        }
    }
});

//──────────────────────────────────────────────────────────

module.exports = P9RoomData;

cc._RFpop();
},{"FWS_MODEL":"FWS_MODEL","FWS_MODEL_DATA":"FWS_MODEL_DATA","FWS_MVC":"FWS_MVC"}],"P9SocketGSModel":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e50ceKCz+JD+7l0PsrcB/Fl', 'P9SocketGSModel');
// scripts/P9/Models/P9SocketGSModel.js

/*
 * 与九人桌游戏服务的Socket通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 15:08:00 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:50:07
 */
var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");
var MSG = require("FWS_MSG");

var FSocketPack = require("FSocketPack");
var FSocketModelAbstract = require("FSocketModelAbstract");
var NOTIFY = FSocketPack.FHeaderMark.Notify;
var REQ = FSocketPack.FHeaderMark.Req;
var ACK = FSocketPack.FHeaderMark.Ack;
var MSGIDS = FSocketPack.MsgIDs[0];

module.exports = cc.Class({
    // name: "P9SocketGSModel",
    "extends": FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    initHandlers: function initHandlers() {},

    //────────────────────────────────────────────────────────── 游戏事件

    //TODO: start
    //TODO: handcards
    //TODO: publiccards
    //TODO: pot
    //TODO: action
    //TODO: timebank
    //TODO: safe...

    //────────────────────────────────────────────────────────── 就绪
    onFMessage_gameReady: function onFMessage_gameReady(msg) {
        msg.complete();
    },

    //────────────────────────────────────────────────────────── 玩家动作
    onFMessage_gameActionAck: function onFMessage_gameActionAck(msg) {
        msg.complete();
    }

});

cc._RFpop();
},{"FSocketModelAbstract":"FSocketModelAbstract","FSocketPack":"FSocketPack","FWS_MODEL":"FWS_MODEL","FWS_MODEL_DATA":"FWS_MODEL_DATA","FWS_MSG":"FWS_MSG","FWS_MVC":"FWS_MVC"}],"P9TestCreatorModel":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3067atl+pVBf6DPtYzNZ5we', 'P9TestCreatorModel');
// scripts/P9/Models/P9TestCreatorModel.js

/*
 * 在Creator下的测试模块, 发假消息用的
 * @Author: thor.liu 
 * @Date: 2016-12-03 15:08:27 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-12 13:12:21
 */

var MVC = require("FWS_MVC");
var MSG = require("FWS_MSG");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");
var GameData = require("P9GameData");
var RoomData = require("P9RoomData");

var P9TestCreatorModel = cc.Class({
    // name: "P9TestCreatorModel",
    "extends": MVC.FMessageConnection,
    // ctor: function() {},

    onEnterNode: function onEnterNode() {
        MVC.FLog.info("test", "onEnterNode");

        var table = DATA.FGameTable.factory.create();
        DATA.FGameModel.current().currentGameTable = table;
        var test_users = [{ id: "10001", name: "张建民", img: "10001.jpg" }, { id: "10002", name: "张灿阳", img: "10002.jpg" }, { id: "10003", name: "杨飞", img: "10003.jpg" }, { id: "10004", name: "刘强", img: "10004.jpg" }, { id: "10005", name: "桑桑", img: "10005.jpg" }, { id: "10006", name: "高健", img: "10006.jpg" }, { id: "10007", name: "钧浩", img: "10007.jpg" }, { id: "10008", name: "安娜", img: "10008.jpg" }, { id: "10009", name: "球球", img: "10009.jpg" }];

        table.id = "12";

        var tableData = new GameData.P9GameTableData();

        table.data = tableData;

        for (var i = 0; i < 9; i++) {
            var user = new DATA.FUser();
            user.id = test_users[i].id;
            user.name = test_users[i].name;
            user.avatar = test_users[i].img;

            var player = DATA.FPlayer.factory.create();
            player.user = user;

            table.setPlayerToSeat(player, i);
        }

        MVC.FLog.info("test", "table={0}", table);
    },

    //────────────────────────────────────────────────────────── Common

    onFMessage_serverConnect: function onFMessage_serverConnect(msg) {
        msg.complete();

        MSG.FWSMessageFactory.serverConnectResult(0).send();
    },

    //────────────────────────────────────────────────────────── User

    //────────────────────────────────────────────────────────── Room

    ///请求创建房间时
    onFMessage_roomCreate: function onFMessage_roomCreate(msg) {
        msg.complete();

        var game = DATA.FGame.factory.create();
        game.name = msg.args.name;
        game.roomType = msg.args.roomType;
        game.data = msg.args.room;

        MSG.FWSMessageFactory.roomCreateResult(0, game).send(); //假装创建房间成功
    },

    ///请求加入房间时
    onFMessage_roomJoin: function onFMessage_roomJoin(msg) {
        msg.complete();

        var game = DATA.FGame.factory.create();
        game.name = "测试房间";
        game.roomType = GameData.P9RoomType.STD;
        game.data = new RoomData.P9STDGameData();

        MSG.FWSMessageFactory.roomJoinResult(0, game).send(); //假装加入房间成功
    },

    //────────────────────────────────────────────────────────── Game

    ///请求加入游戏时
    onFMessage_gameJoin: function onFMessage_gameJoin(msg) {
        msg.complete();

        MSG.FWSMessageFactory.gameJoinResult(0).send(); //假装进入游戏成功
        MSG.FWSMessageFactory.roomOnGotoTable().send(); //假装切换到桌子的通知
    },

    ///请求就绪时
    onFMessage_gameReady: function onFMessage_gameReady(msg) {
        msg.complete();

        MSG.FWSMessageFactory.gameOnStart().send(); //假装游戏开始的通知

        //假装游戏事件通知 (发手牌)
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 9; j++) {
                var eventData = new GameData.P9GameEventGetCards();
                eventData.seat = i;
                var cardId = (i + 1) * 100 + j;
                if (j == 0) cardId = -1;
                var card = GameData.PKCard.create(cardId);
                eventData.cards.add(card);
                MSG.FWSMessageFactory.gameEventNotify(GameData.P9GameEventType.HandCards, eventData).send();
            }
        }

        //假装动作询问通知
        var reqData = new GameData.P9GameActionReqData();
        reqData.timer = 30;
        reqData.minChips = 0;
        reqData.maxChips = 100;
        reqData.seat = 0;
        reqData.actionTypes.add(GameData.P9GameActionType.Call);
        reqData.actionTypes.add(GameData.P9GameActionType.Bet);
        reqData.actionTypes.add(GameData.P9GameActionType.Fold);
        reqData.actionTypes.add(GameData.P9GameActionType.Check);
        reqData.actionTypes.add(GameData.P9GameActionType.Allin);

        MSG.FWSMessageFactory.gameActionReq().send();
    },

    ///回复游戏动作时
    onFMessage_gameActionAck: function onFMessage_gameActionAck(msg) {
        msg.complete();

        MSG.FWSMessageFactory.gameActionNotify().send(); //假装动作结果通知
        MSG.FWSMessageFactory.gameOnResult().send(); //假装游戏结果通知
    }
});

module.exports = P9TestCreatorModel;

cc._RFpop();
},{"FWS_MODEL":"FWS_MODEL","FWS_MODEL_DATA":"FWS_MODEL_DATA","FWS_MSG":"FWS_MSG","FWS_MVC":"FWS_MVC","P9GameData":"P9GameData","P9RoomData":"P9RoomData"}],"PartyController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '7e4d2eFaw1Pha2ZUWLt8tS/', 'PartyController');
// scripts/P9/context/3party/PartyController.js

var MVC = require("FWS_MVC");
var PartyController;
PartyController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        cc.log("PartyController --- onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    //加入牌局
    onFMessage_onJoinPartyClick: function onFMessage_onJoinPartyClick(msg) {
        //判断数字输入的位数是否正确

        //如果不正确发 位数不正确消息

        //如果正确goto joinParty
        MVC.FContextManager.gotoID("loadingParty");
        msg.complete();
    },
    //创建牌局
    onFMessage_onCreatPartyClick: function onFMessage_onCreatPartyClick(msg) {
        //
        cc.log("PartyController --- onFMessage_createPartyButtonClick");

        MVC.FContextManager.gotoID("createPartySet");
        msg.complete();
    }
});
module.exports = PartyController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"PartyScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c3e76HaPwpKMYFCnrvL3o4b', 'PartyScript');
// scripts/P9/context/3party/PartyScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // blindresult:0,

        bg: {
            "default": null,
            type: cc.Sprite
        },

        Sliderone: {
            "default": null,
            type: cc.Slider
        },
        //小盲大盲
        blindlabel: {
            "default": null,
            type: cc.Label
        },
        //带入记分牌
        scorecardlabel: {
            "default": null,
            type: cc.Label
        }

    },

    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },

    //高级选项
    moreoption: function moreoption() {

        // var winSizeW=this.node.getContentSize().height*0.3;
        // var moveup = cc.moveBy(0.1, cc.p(0, winSizeW));
        // this.bg.node.runAction(moveup);

    },

    //创建标准局
    standardButtonClick: function standardButtonClick() {

        var msg = new MVC.FMessage("clickstandardButton", "createPartySet");
        msg.args.name = "创建标准牌局";
        // msg.args.blind = this.blindValue.get();
        msg.send();
    },

    //创建SNG
    SNGButtonClick: function SNGButtonClick() {
        var msg = new MVC.FMessage("clickSNGButton", "createPartySet");
        msg.args.name = "创建SNG比赛";
        msg.send();
    },
    //创建MTT
    MTTButtonClick: function MTTButtonClick() {
        var msg = new MVC.FMessage("clickMTTButton", "createPartySet");
        msg.args.name = "创建MTT比赛";
        msg.send();
    },

    Buyshouquan: function Buyshouquan() {
        var msg = new MVC.FMessage("clickbuyshouquan", "party");
        msg.args.name = "创建MTT比赛";
        msg.send();
    },

    //第一个Slider 大小盲注 带入记分牌
    BlindSlider: function BlindSlider() {

        var percent = this.Sliderone.progress;

        if (1 / 6 < percent && percent < 2 / 6) {
            this.blindlabel.string = '2/4';
            this.scorecardlabel.string = '400';
        }
        if (2 / 6 < percent && percent < 3 / 6) {
            this.blindlabel.string = '4/8';
            this.scorecardlabel.string = '1000';
        }
        if (3 / 6 < percent && percent < 4 / 6) {
            this.blindlabel.string = '5/10';
            this.scorecardlabel.string = '2000';
        }
        if (4 / 6 < percent && percent < 5 / 6) {
            this.blindlabel.string = '10/20';
            this.scorecardlabel.string = '5000';
        }
        if (5 / 6 < percent && percent < 1) {
            this.blindlabel.string = '25/50';
            this.scorecardlabel.string = '10000';
        }

        //   this.blindresult=this.blindlabel.string;
        //   this.blindValue.set(blindresult);
    },
    //参与人数Slider
    PeopleNumberSlider: function PeopleNumberSlider() {},
    //牌局时长
    TimeSlider: function TimeSlider() {}

});
// use this for initialization

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"PartyView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3b895RM9N5POZV8Hark42HG', 'PartyView');
// scripts/P9/context/3party/PartyView.js

var MVC = require("FWS_MVC");
var PartyView;
var partyLayer;
PartyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/partyLayer", function (err, prefab) {
            cc.log(err);
            partyLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(partyLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        partyLayer.removeFromParent(true);
    }

});
module.exports = PartyView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_CreatePartyController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '7ab16vBD9BIHaL2uH7uUfD/', 'Party_CreatePartyController');
// scripts/P9/context/3party/1createParty/1party_CreateParty/Party_CreatePartyController.js

var MVC = require("FWS_MVC");
var party_CreatePartyController;
party_CreatePartyController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:此类是对将来可能加进来的其他创建方法存在的
    onEnterNode: function onEnterNode() {

        cc.log("party_CreatePartyController");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = party_CreatePartyController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_CreatePartyLoadingController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a9651V0KLpNzYdl5eObstQe', 'Party_CreatePartyLoadingController');
// scripts/P9/context/3party/1createParty/3party_CreatePartyLoading/Party_CreatePartyLoadingController.js

var MVC = require("FWS_MVC");
var party_CreatePartyLoadingController;
party_CreatePartyLoadingController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    //TODO：等待服务器回复party创建成功 然后再选择 进入标准局的等待 还是进入比赛详情页

    onFMessage_showPartyTypeReq: function onFMessage_showPartyTypeReq(msg) {
        //判断消息结果

        if (msg.args.type == "STD") {
            cc.log("onFMessage_showPartyTypeReq = STD");
            MVC.FContextManager.gotoID("roomWaiting");
        } else if (msg.args.type == "MTT") {
            MVC.FContextManager.gotoID("chackSportsPartyinfo");
        }
        msg.complete();
    }
});
module.exports = party_CreatePartyLoadingController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_CreatePartyLoadingView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f609dsasYVCxJRDZvcT8hcP', 'Party_CreatePartyLoadingView');
// scripts/P9/context/3party/1createParty/3party_CreatePartyLoading/Party_CreatePartyLoadingView.js

var MVC = require("FWS_MVC");
var party_CreatePartyLoadingView;
var partyCreatePartyLoadingLayer;
party_CreatePartyLoadingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/partyCreatePartyLoadingLayer", function (err, prefab) {
            cc.log(err);
            partyCreatePartyLoadingLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(partyCreatePartyLoadingLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        partyCreatePartyLoadingLayer.removeFromParent(true);
    }

});
module.exports = party_CreatePartyLoadingView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_CreatePartySetController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2c9aeNdugBK7bQTCIAOHYHh', 'Party_CreatePartySetController');
// scripts/P9/context/3party/1createParty/2party_CreatePartySet/Party_CreatePartySetController.js

var MVC = require("FWS_MVC");
var party_CreateSetController;
party_CreateSetController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    //加入牌局
    onFMessage_onJoinPartyClick: function onFMessage_onJoinPartyClick(msg) {
        //判断数字输入的位数是否正确

        //如果不正确发 位数不正确消息

        //如果正确goto joinParty
        MVC.FContextManager.gotoID("loadingParty");
        msg.complete();
    },
    //创建牌局
    onFMessage_onCreatPartyClick: function onFMessage_onCreatPartyClick(msg) {
        //
        cc.log("PartyController --- onFMessage_createPartyButtonClick");

        MVC.FContextManager.gotoID("createPartySet");
        msg.complete();
    }
});

module.exports = party_CreateSetController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_CreatePartySetView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '90891haca9NXo+f//tF7DQ4', 'Party_CreatePartySetView');
// scripts/P9/context/3party/1createParty/2party_CreatePartySet/Party_CreatePartySetView.js

var MVC = require("FWS_MVC");
var partyCreateSetLayer;
var party_CreateSetView;
party_CreateSetView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("partyCreateSetLayer2");
        cc.loader.loadRes("TestProfab/createpartysetLayer", function (err, prefab) {
            cc.log(err);
            cc.log("myTurnLayer2");

            partyCreateSetLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(partyCreateSetLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("myTurnLayer");

        partyCreateSetLayer.removeFromParent(true);
    }

});
module.exports = party_CreateSetView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_CreatePartyView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '454f0qgG5hC0o3OfQWoqmTT', 'Party_CreatePartyView');
// scripts/P9/context/3party/1createParty/1party_CreateParty/Party_CreatePartyView.js

var MVC = require("FWS_MVC");
var party_CreatePartyView;
party_CreatePartyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = party_CreatePartyView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_chackSportsPartyinfoController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3fe22cof15KC57YazgIrSQx', 'Party_chackSportsPartyinfoController');
// scripts/P9/context/3party/2joinParty/2party_chackSportsPartyinfo/Party_chackSportsPartyinfoController.js

var MVC = require("FWS_MVC");
var Project = require("Project");
var party_chackSportsPartyinfoController;
party_chackSportsPartyinfoController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("party_chackSportsPartyinfoController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("party_chackSportsPartyinfoController onLeaveNode");
    },
    onFMessage_MTTSNGclicksignUpButton: function onFMessage_MTTSNGclicksignUpButton(msg) {
        MVC.FContextManager.gotoID("loadingGame");
        msg.complete();
    }

});
module.exports = party_chackSportsPartyinfoController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"Party_chackSportsPartyinfoView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '21eebq7U7RMMrYVowyFWktG', 'Party_chackSportsPartyinfoView');
// scripts/P9/context/3party/2joinParty/2party_chackSportsPartyinfo/Party_chackSportsPartyinfoView.js

var MVC = require("FWS_MVC");
var party_chackSportsPartyinfoView;
var playerHeadLayer;
party_chackSportsPartyinfoView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //加载结算场景
        //cc.director.loadScene("MTTSNGWaiting");
        //loadscene。。。
        cc.loader.loadRes("TestProfab/MTTSNGWaiting", function (err, prefab) {
            cc.log(err);
            playerHeadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(playerHeadLayer);
        });
        // cc.director.loadScene("roomScene");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = party_chackSportsPartyinfoView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_joinPartyController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8eed8HIHaNK5oL8Z29Vb6ZQ', 'Party_joinPartyController');
// scripts/P9/context/3party/2joinParty/1party_joinParty/Party_joinPartyController.js

var MVC = require("FWS_MVC");
var party_joinPartyController;
party_joinPartyController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        // MVC.FContextManager.gotoID("loadingParty");

        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = party_joinPartyController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_joinPartyView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9417f1mUONB/5zIFD1EYhXf', 'Party_joinPartyView');
// scripts/P9/context/3party/2joinParty/1party_joinParty/Party_joinPartyView.js

var MVC = require("FWS_MVC");
var party_joinPartyView;
var partyJoinPartyLayer;
party_joinPartyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer");
        // cc.loader.loadRes("TestProfab/partyJoinPartyLayer", function (err, prefab) {
        //     cc.log(err);
        //     partyJoinPartyLayer = cc.instantiate(prefab);
        //     cc.director.getScene().addChild(partyJoinPartyLayer);
        // });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        partyJoinPartyLayer.removeFromParent(true);
    }

});
module.exports = party_joinPartyView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_loadingPartyController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '33dd7A2ufVELoBEf6h0CUTX', 'Party_loadingPartyController');
// scripts/P9/context/3party/2joinParty/1party_loadingParty/Party_loadingPartyController.js

var MVC = require("FWS_MVC");
var party_loadingPartyController;
party_loadingPartyController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    onFMessage_joinPartyInfoReq: function onFMessage_joinPartyInfoReq(msg) {
        //

        if (msg.args.type == "STD") {
            cc.log("onFMessage_showPartyTypeReq = STD");
            MVC.FContextManager.gotoID("roomWaiting");
        } else if (msg.args.type == "MTT") {
            cc.log("onFMessage_showPartyTypeReq = MTT");

            MVC.FContextManager.gotoID("chackSportsPartyinfo");
        }
        msg.complete();
    }
});
module.exports = party_loadingPartyController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Party_loadingPartyView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f9c7adTfZpCdqrhVzsFogbp', 'Party_loadingPartyView');
// scripts/P9/context/3party/2joinParty/1party_loadingParty/Party_loadingPartyView.js

var MVC = require("FWS_MVC");
var party_loadingPartyView;
var partyLoadingPartyLayer;
party_loadingPartyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer1111");
        cc.loader.loadRes("TestProfab/partyLoadingPartyLayer", function (err, prefab) {
            cc.log(err);
            partyLoadingPartyLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(partyLoadingPartyLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        partyLoadingPartyLayer.removeFromParent(true);
    }

});
module.exports = party_loadingPartyView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Project":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0f036k96KRF74iGutVDBA7m', 'Project');
// scripts/Project.js

/*
 * 工程定义
 * @Author: thor.liu 
 * @Date: 2016-12-02 10:35:07 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-08 15:00:34
 */
var Project = {
    FWS: {},
    P9: {
        Config: {},
        DATA: {}

    },
    GameModel: require("FWS_MODEL_DATA").FGameModel
};

//────────────────────────────────────────────────────────── Modules

Project.FWS.MVC = require("FWS_MVC");
Project.FWS.MODEL = require("FWS_MODEL");
Project.FWS.DATA = require("FWS_MODEL_DATA");
Project.FWS.MSG = require("FWS_MSG");
Project.FWS.LANG = require("FLanguage");

Project.P9.DATA.GAME = require("P9GameData");
Project.P9.DATA.ROOM = require("P9RoomData");

Project.FWS.DATA.FUser.factory = new Project.P9.DATA.GAME.P9UserFactory();
Project.FWS.DATA.FPlayer.factory = new Project.P9.DATA.GAME.P9PlayerFactory();
Project.FWS.DATA.FGame.factory = new Project.P9.DATA.GAME.P9GameFactory();
Project.FWS.DATA.FGameTable.factory = new Project.P9.DATA.GAME.P9GameTableFactory();
Project.FWS.DATA.FGameRound.factory = new Project.P9.DATA.GAME.P9GameRoundFactory();

// // 测试: 所有的扑克牌
// for (var c = 0; c <= 3; c++) {
//     for (var a = 0; a <= 12; a++) {
//         var card = Project.P9.DATA.GAME.PKCard.createByColorAmount(c, a);
//         Project.FWS.MVC.FLog.data("test", "card = {0}, id = {1}, color = {2}, amount = {3}, order = {4}", card, card.id, card.color, card.amount, card.order);
//     }
// }

var FSocketCSModel = require("FSocketCSModel");
var FSocketRSModel = require("FSocketRSModel");
var FWebConnectController = require("FWebConnectController");

var P9SocketGSModel = require("P9SocketGSModel");
var P9TestCreatorModel = require("P9TestCreatorModel");

var P9CreateSettings = require("P9CreateSettings");

//────────────────────────────────────────────────────────── loading
var loadingController = require("LoadingController");
var loadingView = require("LoadingView");

//────────────────────────────────────────────────────────── login
var loginController = require("LoginController");
var loginView = require("LoginView");

//────────────────────────────────────────────────────────── main

var mainController = require("MainController");
var mainView = require("MainView");

// //────────────────────────────────────────────────────────── party
//
var partyView = require("PartyView");
var partyController = require("PartyController");
//创建牌局
// const party_CreatePartyView = require("Party_CreatePartyView");
// const party_CreatePartyController = require("Party_CreatePartyController");
var party_CreatePartyLoadingView = require("Party_CreatePartyLoadingView");
var party_CreatePartyLoadingController = require("Party_CreatePartyLoadingController");
var party_CreatePartySetView = require("Party_CreatePartySetView");
var party_CreatePartySetController = require("Party_CreatePartySetController");
// //加入牌局
var party_JoinPartyView = require("Party_joinPartyView");
var party_JoinPartyController = require("Party_joinPartyController");
var party_JoinPartyLoadingView = require("Party_loadingPartyView");
var party_JoinPartyLoadingController = require("Party_loadingPartyController");
var party_chackSportsPartyinfoView = require("Party_chackSportsPartyinfoView");
var party_chackSportsPartyinfoController = require("Party_chackSportsPartyinfoController");

//────────────────────────────────────────────────────────── room

var roomView = require("roomView");
var roomController = require("roomController");

var room_loadingController = require("room_loadingController");
var room_loadingView = require("room_loadingView");

var room_startGameController = require("room_startGameController");
var room_startGameView = require("room_startGameView");

var room_roomWaitingController = require("Room_roomWaitingController");
var room_roomWaitingView = require("Room_roomWaitingView");

var room_VillageController = require("room_VillageConroller");
var room_VillageView = require("room_VillageView");

var room_handSignController = require("room_handSignController");
var room_handSignView = require("room_handSignView");

var room_communityCardController = require("room_communityCardController");
var room_communityCardView = require("room_communityCardView");

var room_myTurnController = require("room_myTurnController");
var room_myTurnView = require("room_myTurnView");

var room_othersTurnController = require("room_othersTurnController");
var room_othersTurnView = require("room_othersTurnView");

var room_safestController = require("room_safestController");
var room_safestView = require("room_safestView");

var room_statementsController = require("room_statementsController");
var room_statementsView = require("room_statementsView");

var room_partyRoomOverController = require("room_partyRoomOverController");
var room_partyRoomOverView = require("room_partyRoomOverView");

//────────────────────────────────────────────────────────── my
var myView = require("myView");
var myController = require("myController");
//钱包
var walletView = require("walletView");
var walletController = require("walletController");
//商城
var mallView = require("mallView");
var mallController = require("mallController");
// //我的战队
// const myteamView = require("myteamView");
// const myteamController = require("myteamController");
// //联系人
// const contactsView = require("contactsView");
// const contactsController = require("contactsController");
// //消息
// const messageView = require("messageView");
// const messageController = require("messageController");
// //所获成就
// const achievementView = require("achievementView");
// const achievementController = require("achievementController");
// //牌局统计
// const gamestatisticsView = require("gamestatisticsView");
// const gamestatisticsController = require("gamestatisticsController");
// //我的牌谱
// const mybrandView = require("mybrandView");
// const mybrandController = require("mybrandController");
// //邀请码
// const invitationcodeView = require("invitationcodeView");
// const invitationcodeController = require("invitationcodeController");
// //系统设置
// const settingView = require("settingView");
// const settingController = require("settingController");
// //规则说明
// const ruleView = require("ruleView");
// const ruleController = require("ruleController");
// //编辑
// const editView = require("editView");
// const editController = require("editController");
// //大师等级
// const masterlevelView = require("masterlevelView");
// const masterlevelController = require("masterlevelController");
// //会籍
// const membershipView = require("membershipView");
// const membershipController = require("membershipController");

// const MTTSNGWaitingView = require("MTTSNGWaitingView");
// const MTTSNGWaitingController = require("MTTSNGWaitingController");

// const SettlementView = require("SettlementView");
// const SettlementController = require("SettlementController");

//────────────────────────────────────────────────────────── Contexts

Project.Contexts = cc.Class({
    name: "Contexts",
    statics: {
        init: function init() {
            if (Project.Contexts.inited) return;
            Project.Contexts.inited = true;

            //TODO: 加载jsCpp通道

            //根
            Project.Contexts.root = new Project.FWS.MVC.FContext("root");
            Project.Contexts.root.setModules(new FSocketCSModel(), new FSocketRSModel(), new P9SocketGSModel(), new P9TestCreatorModel(), //在creator下测试时的模拟消息交互
            new P9CreateSettings(), new FWebConnectController());

            //TODO: 根 > 加载
            Project.Contexts.loading = Project.Contexts.root.add(new Project.FWS.MVC.FContext("loading").setModules(new loadingController(), new loadingView()));

            //TODO: 根 > 登录
            Project.Contexts.login = Project.Contexts.root.add(new Project.FWS.MVC.FContext("login").setModules(
            //登录view 创建登录注册页 添加        onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //登录controller 负责接收消息 运行goto（节点跳转）
            new loginController(), new loginView()));

            //TODO: 根 > 主界面
            Project.Contexts.main = Project.Contexts.root.add(new Project.FWS.MVC.FContext("main").setModules(

            //主界面view       onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用

            //主界面controller 负责接收消息 运行goto（节点跳转）
            new mainController(), new mainView()));

            //TODO: 根 > 主界面 > 牌局
            Project.Contexts.party = Project.Contexts.main.add(new Project.FWS.MVC.FContext("party").setModules(
            //牌局view       onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //牌局controller 负责接收消息 运行goto（节点跳转）
            new partyView(), new partyController()));
            //TODO: 根 > 主界面 > 牌局 > 加入牌局

            Project.Contexts.joinParty = Project.Contexts.party.add(new Project.FWS.MVC.FContext("joinParty").setModules(
            //加入牌局view       onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //加入牌局controller 负责接收消息 运行goto（节点跳转）
            new party_JoinPartyView(), new party_JoinPartyController()));

            //TODO: 根 > 主界面 > 牌局 > 加入牌局 > 加入牌局loading
            Project.Contexts.loadingParty = Project.Contexts.party.add(new Project.FWS.MVC.FContext("loadingParty").setModules(
            //加入牌局loadingview       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //加入牌局loadingcontroller
            /*  : 负责接收进入牌局的数据
                : 负责判断 进入哪种怕局等待页
            */
            new party_JoinPartyLoadingView(), new party_JoinPartyLoadingController()));

            //TODO: 根 > 主界面 > 牌局 > 加入牌局 > 查看竞技场信息
            Project.Contexts.chackSportsPartyinfo = Project.Contexts.party.add(new Project.FWS.MVC.FContext("chackSportsPartyinfo").setModules(
            //查看竞技场信息view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //查看竞技场信息controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            // new MTTSNGWaitingView(),
            // new MTTSNGWaitingController()

            new party_chackSportsPartyinfoView(), new party_chackSportsPartyinfoController()));

            //TODO: 根 > 主界面 > 牌局 > 创建牌局
            // Project.Contexts.createParty = Project.Contexts.party.add(new Project.FWS.MVC.FContext("createParty").setModules(
            //     //创建标准局view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //     //创建标准局controller
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            //
            //     new party_CreatePartyView(),
            //     new party_CreatePartyController()
            // ));

            //TODO: 根 > 主界面 > 牌局 > 创建牌局设置
            Project.Contexts.createPartySet = Project.Contexts.party.add(new Project.FWS.MVC.FContext("createPartySet").setModules(
            //创建标准牌局设置 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //创建标准牌局设置 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            new party_CreatePartySetView(), new party_CreatePartySetController()));

            //TODO: 根 > 主界面 > 牌局 > 创建牌局loading
            Project.Contexts.createPartyLoading = Project.Contexts.party.add(new Project.FWS.MVC.FContext("createPartyLoading").setModules(
            //创建牌局loading view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //创建牌局loading controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new party_CreatePartyLoadingView(), new party_CreatePartyLoadingController()));

            //TODO: 根 > 房间
            Project.Contexts.room = Project.Contexts.root.add(new Project.FWS.MVC.FContext("room").setModules(
            //房间 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //房间 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new roomView(), new roomController()));
            //TODO: 根 > 房间 > 房间等待... (STD) (判断是否上桌)
            Project.Contexts.roomWaiting = Project.Contexts.room.add(new Project.FWS.MVC.FContext("roomWaiting").setModules(
            //房间等待 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //房间等待 controller
            /*  : 负责接收消息 运行goto（节点跳转）
            //  */
            // new createPartyWaitingView(),
            // new createPartyWaitingController()

            new room_roomWaitingController(), new room_roomWaitingView()));

            //TODO: 根 > 房间 > loading
            Project.Contexts.loadingGame = Project.Contexts.room.add(new Project.FWS.MVC.FContext("loadingGame").setModules(
            //开始游戏 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //开始游戏 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_loadingController(), new room_loadingView()));
            //TODO: 根 > 房间 > 开始游戏
            Project.Contexts.startGame = Project.Contexts.room.add(new Project.FWS.MVC.FContext("startGame").setModules(
            //开始游戏 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //开始游戏 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            new room_startGameController(), new room_startGameView()));

            //TODO: 根 > 房间 > 开始游戏 > 定庄
            Project.Contexts.Village = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("Village").setModules(
            //定庄 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //定庄 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_VillageController(), new room_VillageView()));
            //TODO: 根 > 房间 > 开始游戏 > 发手牌
            Project.Contexts.handSign = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("handSign").setModules(
            //发手牌 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //发手牌 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_handSignController(), new room_handSignView()));
            //TODO: 根 > 房间 > 开始游戏 >  发公共牌
            Project.Contexts.communityCard = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("communityCard").setModules(
            //发公共牌 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //发公共牌 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_communityCardController(), new room_communityCardView()));
            //TODO: 根 > 房间 > 开始游戏 >  轮到别人动作
            Project.Contexts.othersAction = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("othersAction").setModules(
            //轮到别人动作 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //轮到别人动作 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_othersTurnController(), new room_othersTurnView()));
            //TODO: 根 > 房间 > 开始游戏 >  轮到自己动作
            Project.Contexts.myAction = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("myAction").setModules(
            //轮到自己动作 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //轮到自己动作 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            new room_myTurnController(), new room_myTurnView()));
            //TODO: 根 > 房间 > 开始游戏 >  保险
            Project.Contexts.safest = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("safest").setModules(
            //保险 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //保险 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_safestController(), new room_safestView()));
            //TODO: 根 > 房间 > 结算
            Project.Contexts.statements = Project.Contexts.room.add(new Project.FWS.MVC.FContext("statements").setModules());
            //TODO: 根 > 房间 > 牌局房间结束

            //保险 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //保险 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            // new room_statementsController(),
            // new room_statementsView()
            // new SettlementView(),
            // new SettlementController()
            Project.Contexts.partyRoomOver = Project.Contexts.room.add(new Project.FWS.MVC.FContext("partyRoomOver").setModules(
            //牌局房间结束 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //牌局房间结束 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            new room_partyRoomOverController(), new room_partyRoomOverView()));

            //根 > 我的
            Project.Contexts.my = Project.Contexts.root.add(new Project.FWS.MVC.FContext("my").setModules(new myView(), new myController()

            //我的
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            ));
            // //根 > 我的 > 个人设置
            Project.Contexts.edit = Project.Contexts.my.add(new Project.FWS.MVC.FContext("edit").setModules());
            // //根 > 我的 > 牌谱

            // new editView(),
            // new editController()

            //我的
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.mybrand = Project.Contexts.my.add(new Project.FWS.MVC.FContext("mybrand").setModules());
            // //根 > 我的 > 牌谱 > 我的牌谱
            // //根 > 我的 > 牌谱 > 收藏的牌谱
            // //根 > 我的 > 大师等级

            // new mybrandView(),
            // new mybrandController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.masterlevel = Project.Contexts.my.add(new Project.FWS.MVC.FContext("masterlevel").setModules());
            // //根 > 我的 > 会籍

            // new masterlevelView(),
            // new masterlevelController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.membership = Project.Contexts.my.add(new Project.FWS.MVC.FContext("membership").setModules());
            // //根 > 我的 > 会籍 > 会籍绑定
            // //根 > 我的 > 会籍 > 升级会员
            // //根 > 我的 > 钱包

            // new membershipView(),
            // new membershipController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.wallet = Project.Contexts.my.add(new Project.FWS.MVC.FContext("wallet").setModules());
            //根 > 我的 > 钱包 > 商城
            //根 > 我的 > 商城

            // new walletView(),
            // new walletController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.mall = Project.Contexts.my.add(new Project.FWS.MVC.FContext("mall").setModules());
            // //根 > 我的 > 我的战队
            // Project.Contexts.myteam = Project.Contexts.my.add(new Project.FWS.MVC.FContext("myteam").setModules(
            //     new myteamView(),
            //     new myteamController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 联系人 > 我关注的
            // Project.Contexts.contactsfollow= Project.Contexts.my.add(new Project.FWS.MVC.FContext("contactsfollow").setModules(
            //     new contactsView(),
            //     new contactsController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 联系人 > 粉丝
            // Project.Contexts.contactsfan= Project.Contexts.my.add(new Project.FWS.MVC.FContext("contactsfan").setModules(
            //     new contactsView(),
            //     new contactsController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 我关注的
            // //根 > 我的 > 我的粉丝
            // //根 > 我的 > 消息
            // Project.Contexts.message = Project.Contexts.my.add(new Project.FWS.MVC.FContext("message").setModules(
            //     new messageView(),
            //     new messageController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 消息 > 聊天
            // //根 > 我的 > 消息 > 消息
            // //根 > 我的 > 所获成就
            // Project.Contexts.achievement = Project.Contexts.my.add(new Project.FWS.MVC.FContext("achievement").setModules(
            //     new achievementView(),
            //     new achievementController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 所获成就 > STD
            // //根 > 我的 > 所获成就 > SNG
            // //根 > 我的 > 所获成就 > MTT
            //
            // //根 > 我的 > 牌局统计
            // Project.Contexts.gamestatistics = Project.Contexts.my.add(new Project.FWS.MVC.FContext("gamestatistics").setModules(
            //     new gamestatisticsView(),
            //     new gamestatisticsController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 邀请码
            // Project.Contexts.invitationcode = Project.Contexts.my.add(new Project.FWS.MVC.FContext("invitationcode").setModules(
            //     new invitationcodeView(),
            //     new invitationcodeController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 邀请码 > 邀请好友
            // //根 > 我的 > 邀请码 > 邀请好友
            // //根 > 我的 > 系统设置
            // Project.Contexts.setting = Project.Contexts.my.add(new Project.FWS.MVC.FContext("setting").setModules(
            //     new settingView(),
            //     new settingController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 系统设置 > 切换账号
            // //根 > 我的 > 系统设置 > 评分
            // //根 > 我的 > 系统设置 > 帮助与反馈
            // //根 > 我的 > 系统设置 > 关于我们
            // //根 > 我的 > 规则说明
            // Project.Contexts.rule = Project.Contexts.my.add(new Project.FWS.MVC.FContext("rule").setModules(
            //     new ruleView(),
            //     new ruleController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 规则说明 > 基本规则
            // //根 > 我的 > 规则说明 > 盲注级别表
            // //根 > 我的 > 规则说明 > 保险说明
            // //根 > 我的 > 规则说明 > 免责说明
            //

            // //根 > 主界面 > 创建牌局
            // //根 > 房间
            //
            // //根 > 加载
            // // Project.Contexts.loading = Project.Contexts.root.add(new Project.FWS.MVC.FContext("loading"));
            // //根 > 主界面
            // Project.Contexts.main = Project.Contexts.root.add(new Project.FWS.MVC.FContext("main"));
            // //根 > 主界面 > 菜单
            // Project.Contexts.menu = Project.Contexts.main.add(new Project.FWS.MVC.FContext("menu"));
            // //根 > 主界面 > 帐户信息
            // //根 > 主界面 > 创建房间
            // Project.Contexts.roomCreate = Project.Contexts.main.add(new Project.FWS.MVC.FContext("roomCreate"));
            // //根 > 主界面 > 加入房间
            // Project.Contexts.roomJoin = Project.Contexts.main.add(new Project.FWS.MVC.FContext("roomJoin"));
            // //根 > 主界面 > 公告
            // //根 > 主界面 > 背包
            // //根 > 主界面 > 商城
            // //根 > 主界面 > 任务
            // //根 > 主界面 > 规则
            // //根 > 主界面 > 帮助
            // //根 > 主界面 > 分享
            // //根 > 主界面 > 设置
            //
            // //根 > 房间
            // Project.Contexts.room = Project.Contexts.root.add(new Project.FWS.MVC.FContext("room"));
            // //根 > 房间 > 加载
            // //根 > 房间 > 邀请
            // //根 > 房间 > 游戏
            // Project.Contexts.game = Project.Contexts.room.add(new Project.FWS.MVC.FContext("game"));
            // //根 > 房间 > 游戏 > 等待
            // //根 > 房间 > 游戏 > 定庄
            // //根 > 房间 > 游戏 > 发牌
            // //根 > 房间 > 游戏 > 换牌
            // //根 > 房间 > 游戏 > 定缺
            // //根 > 房间 > 游戏 > 行牌
            // //根 > 房间 > 游戏 > 结算
            // //根 > 房间 > 结束

            //-----

            // new mallView(),
            // new mallController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.FWS.MVC.FMessageRouter.createQueue("ui");
            Project.FWS.MVC.FContextManager.init(Project.Contexts.root);
        },
        //开始
        start: function start() {
            Project.Contexts.init();
            Project.FWS.MVC.FContextManager.gotoID("loading");
        }
    }
});

Project.Contexts.start();

//------ 测试代码: 不填参数的情况下跑一遍主线消息流程

// //连接服务器
// Project.FWS.MSG.FWSMessageFactory.serverConnect().send();
// //创建房间 (此处也可能是加入房间)
// Project.FWS.MSG.FWSMessageFactory.roomCreate().send();
// //加入游戏
// Project.FWS.MSG.FWSMessageFactory.gameJoin().send();
// //游戏就绪
// Project.FWS.MSG.FWSMessageFactory.gameReady().send();
// //应答动作
// Project.FWS.MSG.FWSMessageFactory.gameActionAck().send();

//------ 创建游戏房间

// //房间名称
// var roomName = "我的MTT游戏";
// //房间类型
// var roomType = Project.P9.DATA.GAME.P9RoomType.MTT;
// //房间选项参考P9RoomData.js中的P9STDGameData和P9MTTGameData的属性定义...
// var roomData = new Project.P9.DATA.ROOM.P9MTTGameData();
// roomData.tablePlayerCount = 9;
// //...

// Project.FWS.MSG.FWSMessageFactory.roomCreate(roomName, roomType, roomData).send();

module.exports = Project;

cc._RFpop();
},{"FLanguage":"FLanguage","FSocketCSModel":"FSocketCSModel","FSocketRSModel":"FSocketRSModel","FWS_MODEL":"FWS_MODEL","FWS_MODEL_DATA":"FWS_MODEL_DATA","FWS_MSG":"FWS_MSG","FWS_MVC":"FWS_MVC","FWebConnectController":"FWebConnectController","LoadingController":"LoadingController","LoadingView":"LoadingView","LoginController":"LoginController","LoginView":"LoginView","MainController":"MainController","MainView":"MainView","P9CreateSettings":"P9CreateSettings","P9GameData":"P9GameData","P9RoomData":"P9RoomData","P9SocketGSModel":"P9SocketGSModel","P9TestCreatorModel":"P9TestCreatorModel","PartyController":"PartyController","PartyView":"PartyView","Party_CreatePartyLoadingController":"Party_CreatePartyLoadingController","Party_CreatePartyLoadingView":"Party_CreatePartyLoadingView","Party_CreatePartySetController":"Party_CreatePartySetController","Party_CreatePartySetView":"Party_CreatePartySetView","Party_chackSportsPartyinfoController":"Party_chackSportsPartyinfoController","Party_chackSportsPartyinfoView":"Party_chackSportsPartyinfoView","Party_joinPartyController":"Party_joinPartyController","Party_joinPartyView":"Party_joinPartyView","Party_loadingPartyController":"Party_loadingPartyController","Party_loadingPartyView":"Party_loadingPartyView","Room_roomWaitingController":"Room_roomWaitingController","Room_roomWaitingView":"Room_roomWaitingView","mallController":"mallController","mallView":"mallView","myController":"myController","myView":"myView","roomController":"roomController","roomView":"roomView","room_VillageConroller":"room_VillageConroller","room_VillageView":"room_VillageView","room_communityCardController":"room_communityCardController","room_communityCardView":"room_communityCardView","room_handSignController":"room_handSignController","room_handSignView":"room_handSignView","room_loadingController":"room_loadingController","room_loadingView":"room_loadingView","room_myTurnController":"room_myTurnController","room_myTurnView":"room_myTurnView","room_othersTurnController":"room_othersTurnController","room_othersTurnView":"room_othersTurnView","room_partyRoomOverController":"room_partyRoomOverController","room_partyRoomOverView":"room_partyRoomOverView","room_safestController":"room_safestController","room_safestView":"room_safestView","room_startGameController":"room_startGameController","room_startGameView":"room_startGameView","room_statementsController":"room_statementsController","room_statementsView":"room_statementsView","walletController":"walletController","walletView":"walletView"}],"Room_roomWaitingController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9e1d7MILG1JdpO8TL4ir/Jy', 'Room_roomWaitingController');
// scripts/P9/context/4room/a2room-roomWaiting/Room_roomWaitingController.js

var MVC = require("FWS_MVC");
var Room_roomWaitingController;
Room_roomWaitingController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("onEnterNode Room_roomWaitingController");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    //界面显示
    onMessageshow: function onMessageshow(msg) {
        //显示房间名
        //显示房间号
        //显示人数
        //显示进局人数
        //显示牌局时间
        //按钮状态
    },
    //聊天
    onMessagejoinBtn: function onMessagejoinBtn(msg) {},
    //入局玩家头像
    onMessagehead: function onMessagehead(msg) {},
    //超时警告
    onMessageovertime: function onMessageovertime(msg) {}

});
module.exports = Room_roomWaitingController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Room_roomWaitingScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4fb36kecjRBXrWSs7ln5S05', 'Room_roomWaitingScript');
// scripts/P9/context/4room/a2room-roomWaiting/Room_roomWaitingScript.js

//等待牌局界面，牌桌动画以及牌桌初始化
var MVC = require("FWS_MVC");
var openautobuy = false;

var colorblue = new cc.Color(0, 112, 255);
var colorgray = new cc.Color(111, 111, 111);

cc.Class({
    "extends": cc.Component,

    properties: {
        //标题区
        titleSprite: {
            "default": null,
            type: cc.Sprite
        },
        //内容背景
        backgroundLayer: {
            "default": null,
            type: cc.Sprite
        },
        //牌局信息区
        gameprofile: {
            "default": null,
            type: cc.Sprite
        },
        //人数 文字
        personcountLabel: {
            "default": null,
            type: cc.Label
        },
        //入局人数/人数 文字
        personLabel: {
            "default": null,
            type: cc.Label
        },
        //牌局时长 文字
        timeLabel: {
            "default": null,
            type: cc.Label
        },
        //分享按钮
        shareBtn: {
            "default": null,
            type: cc.Button
        },
        //分享 文字
        shareLabel: {
            "default": null,
            type: cc.Label
        },
        //牌局编号
        roomnumberLabel: {
            "default": null,
            type: cc.Label
        },
        //开局按钮
        startBtn: {
            "default": null,
            type: cc.Button
        },
        //开局 文字
        startLabel: {
            "default": null,
            type: cc.Label
        },
        //立即上桌按钮
        joinBtn: {
            "default": null,
            type: cc.Button
        },
        //立即上桌 文字
        joinLabel: {
            "default": null,
            type: cc.Label
        },
        //等待玩家入局 文字
        waitplayerLabel: {
            "default": null,
            type: cc.Label
        },
        //超时 文字
        overtimeLabel: {
            "default": null,
            type: cc.Label
        },
        //牌桌
        table: {
            "default": null,
            type: cc.Sprite
        },
        //聊天 层
        chatLayer: {
            "default": null,
            type: cc.Sprite
        },

        /*---------------------弹出层，设置带入记分牌----------------------*/
        //设置带入记分牌层
        setscoreLayer: {
            "default": null,
            type: cc.Layout
        },
        //标题 文字
        titleLabel: {
            "default": null,
            type: cc.Label
        },
        //退出按钮
        quitBtn: {
            "default": null,
            type: cc.Button
        },
        //slider
        slider: {
            "default": null,
            type: cc.Slider
        },
        //slider背景条
        sliderbackground: {
            "default": null,
            type: cc.Sprite
        },
        //带入数量
        scoreLabel: {
            "default": null,
            type: cc.Label
        },
        //设置带入记分牌 文字
        settakeinLabel: {
            "default": null,
            type: cc.Label
        },
        //slider最小值
        mintakeinLabel: {
            "default": null,
            type: cc.Label
        },
        //slider最大值
        maxtakeinLabel: {
            "default": null,
            type: cc.Label
        },
        //开启自动买入 文字
        openautobuyLabel: {
            "default": null,
            type: cc.Label
        },
        //开启自动买入 按钮
        openBtn: {
            "default": null,
            type: cc.Button
        },
        //自动买入按钮开关
        circleSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动买入按钮开关背景
        openBtnbgSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动买入层
        autobuysettingLayer: {
            "default": null,
            type: cc.Layout
        },
        //当我的计分板少于/等于 文字
        scoreless1Label: {
            "default": null,
            type: cc.Label
        },
        //个大盲注时
        scoreless2Label: {
            "default": null,
            type: cc.Label
        },
        //系统自动为我补充
        supplement1Label: {
            "default": null,
            type: cc.Label
        },
        //个buy-in
        supplement2Label: {
            "default": null,
            type: cc.Label
        },
        //减号按钮
        minusBtn: {
            "default": null,
            type: cc.Button
        },
        //buy-in数量
        buyincountLabel: {
            "default": null,
            type: cc.Label
        },
        //加好按钮
        addBtn: {
            "default": null,
            type: cc.Button
        },
        //确定带入按钮
        confirmtakeBtn: {
            "default": null,
            type: cc.Button
        },
        //确定带入 文字
        confirmtakeLabel: {
            "default": null,
            type: cc.Label
        },

        /*----------------------分享层-------------------------*/
        //分享层
        shareLayerBtn: {
            "default": null,
            type: cc.Button
        },
        //微信分享按钮
        shareVXBtn: {
            "default": null,
            type: cc.Button
        },
        //QQ分享按钮
        shareQQBtn: {
            "default": null,
            type: cc.Button
        },
        //微信分享 文字
        VXLabel: {
            "default": null,
            type: cc.Label
        },
        //QQ分享 文字
        QQLabel: {
            "default": null,
            type: cc.Label
        },

        /*-----------------------玩家 自动动作层-------------------------*/

        //自动操作设定层
        autoLayout: {
            "default": null,
            type: cc.Layout
        },
        //自动弃牌 图片
        autofoldSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动弃牌 文字
        autofoldLabel: {
            "default": null,
            type: cc.Label
        },
        //自动弃牌 按钮
        autofoldBtn: {
            "default": null,
            type: cc.Button
        },
        //自动过牌 图片
        autopassSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动过牌 文字
        autopassLabel: {
            "default": null,
            type: cc.Label
        },
        //自动过牌 按钮
        autopassBtn: {
            "default": null,
            type: cc.Button
        },

        /*-----------------------玩家局间动作层-------------------------*/
        actionLayout: {
            "default": null,
            type: cc.Layout
        },
        //2倍
        doublecountLabel: {
            "default": null,
            type: cc.Label
        },
        doubleLabel: {
            "default": null,
            type: cc.Label
        },
        doubleBtn: {
            "default": null,
            type: cc.Button
        },
        //3倍
        treblecountLabel: {
            "default": null,
            type: cc.Label
        },
        trebleLabel: {
            "default": null,
            type: cc.Label
        },
        trebleBtn: {
            "default": null,
            type: cc.Button
        },
        //4倍
        fourfoldcountLabel: {
            "default": null,
            type: cc.Label
        },
        fourfoldLabel: {
            "default": null,
            type: cc.Label
        },
        fourfoldBtn: {
            "default": null,
            type: cc.Button
        },
        //自由加注
        freefillBtn: {
            "default": null,
            type: cc.Button
        },
        freefillLabel: {
            "default": null,
            type: cc.Label
        },
        //弃牌
        foldSprite: {
            "default": null,
            type: cc.Sprite
        },
        foldLabel: {
            "default": null,
            type: cc.Label
        },
        foldBtn: {
            "default": null,
            type: cc.Button
        },
        //过牌
        passSprite: {
            "default": null,
            type: cc.Sprite
        },
        passLabel: {
            "default": null,
            type: cc.Label
        },
        passBtn: {
            "default": null,
            type: cc.Button
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.log("onload加载");

        this.autoLayout.node.active = false;

        this.actionLayout.node.active = false;

        this.shareLayerBtn.node.active = false;

        this.autobuysettingLayer.node.active = false;

        this.waitplayerLabel.node.active = false;

        this.overtimeLabel.node.active = false;

        this.setscoreLayer.node.active = false;

        this.backgroundLayer.node.cascadeOpacity = false;

        this.table.node.setLocalZOrder(3);
        this.titleSprite.node.setLocalZOrder(4);
        this.backgroundLayer.node.setLocalZOrder(4);
        //建立连接
        this.connect();
    },
    onDestroy: function onDestroy() {
        cc.log("销毁了 断开连接");
        this.disconnect();
    },
    //slider滑动
    sliderclick: function sliderclick() {
        cc.log("11111111111111111111111111111111111111111111");

        var index = this.slider.progress * 100;
        cc.log(index);

        var width = this.sliderbackground.node.width;
        cc.log(width);

        //四个位置的按钮动画
        var to0Action = cc.moveTo(0.1, cc.p(-240, 0));
        var to33Action = cc.moveTo(0.1, cc.p(-80, 0));
        var to67Action = cc.moveTo(0.1, cc.p(80, 0));
        var to100Action = cc.moveTo(0.1, cc.p(240, 0));

        var handle = this.slider.handle.node;

        //滑动区间判定
        if (index <= 0) {
            handle.runAction(to0Action);
        } else if (index > 100) {
            handle.runAction(to100Action);
        } else if (index > 0 && index <= 17) {
            handle.runAction(to0Action);
        } else if (index > 17 && index <= 50) {
            handle.runAction(to33Action);
        } else if (index > 50 && index <= 83) {
            handle.runAction(to67Action);
        } else if (index > 83 && index <= 100) {
            handle.runAction(to100Action);
        }
    },
    //分享按钮点击
    shareBtnclick: function shareBtnclick() {
        this.shareLayerBtn.node.active = true;
        this.shareLayerBtn.node.setLocalZOrder(6);
    },
    //牌桌动画回调
    onStop: function onStop(event) {
        cc.log("牌桌动画结束回调");

        this.autoLayout.node.active = true;
    },
    //开局按钮点击
    startBtnclick: function startBtnclick() {
        cc.log("开局");
        //隐藏无关节点
        this.shareBtn.node.active = false;
        this.startBtn.node.active = false;
        this.joinBtn.node.active = false;
        this.gameprofile.node.active = false;
        this.titleSprite.node.active = false;

        var table = this.table.node;

        //聊天动画回调
        var chatfinished = cc.callFunc(function () {
            //获取桌子动画并播放
            var animCtrl = table.getComponent(cc.Animation);
            animCtrl.on('stop', this.onStop, this);
            animCtrl.play("table");
        }, this, null);
        var chatLayerAction = cc.sequence(cc.moveTo(1, cc.p(0, -1000)), chatfinished);
        this.chatLayer.node.runAction(chatLayerAction);
    },
    //立即上桌按钮点击
    joinBtnclick: function joinBtnclick() {
        var layer = this.setscoreLayer;
        layer.node.active = true;
        layer.node.setLocalZOrder(5);
    },
    //退出设置记分牌layer
    quitBtnclick: function quitBtnclick() {
        this.setscoreLayer.node.active = false;
    },
    //自动买入按钮开启
    openBtnclick: function openBtnclick() {
        cc.log(openautobuy);
        cc.log("openBtnclick");
        var movewidth = this.circleSprite.node.width / 2;
        var leftmoveaction = cc.moveTo(0.2, cc.p(-movewidth, 0));
        var rightmoveaction = cc.moveTo(0.2, cc.p(movewidth, 0));

        // var colorblue = new cc.Color(0, 112, 255);
        // var colorgray = new cc.Color(111, 111, 111);

        if (openautobuy === false) {
            cc.log("openautobuy = " + openautobuy);

            this.autobuysettingLayer.node.active = true;

            this.openBtnbgSprite.node.color = colorblue;
            this.circleSprite.node.runAction(rightmoveaction);

            cc.log("发鬼地方", this.openBtnbgSprite.node.color);
            openautobuy = true;
        } else {
            cc.log("openautobuy = " + openautobuy);

            this.autobuysettingLayer.node.active = false;

            this.openBtnbgSprite.node.color = colorgray;

            this.circleSprite.node.runAction(leftmoveaction);

            // cc.log(this.openBtnbgSprite.node.color);

            cc.log("发鬼地方", this.openBtnbgSprite.node.color);
            openautobuy = false;
        }
    },
    //减号按钮点击
    minusBtnclick: function minusBtnclick() {},
    //加号按钮点击
    addBtnclick: function addBtnclick() {},
    //确定带入按钮点击
    confirmtakeBtnclick: function confirmtakeBtnclick() {},
    //退出分享页面
    shareLayerBtnclick: function shareLayerBtnclick() {
        this.shareLayerBtn.node.active = false;
    },
    //自动弃牌按钮点击
    autofoldBtnclick: function autofoldBtnclick() {
        this.autoLayout.node.active = false;

        this.actionLayout.node.active = true;
        this.actionLayout.node.setLocalZOrder(8);
    },
    //自动过牌按钮点击
    autopassBtnclick: function autopassBtnclick() {
        // this.autopassSprite.spriteFrame = ;

    },
    //2X按钮点击
    doubleBtnclick: function doubleBtnclick() {},
    //3X按钮点击
    trebleBtnclick: function trebleBtnclick() {},
    //4X按钮点击
    fourfoldBtnclick: function fourfoldBtnclick() {},
    //自由加注按钮点击
    freefillBtnclick: function freefillBtnclick() {},
    //弃牌按钮点击
    foldBtnclick: function foldBtnclick() {},
    //过牌按钮点击
    passBtnclick: function passBtnclick() {}

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"Room_roomWaitingView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f8922SMAoFIBKS+ZRZv8WFN', 'Room_roomWaitingView');
// scripts/P9/context/4room/a2room-roomWaiting/Room_roomWaitingView.js

var MVC = require("FWS_MVC");
var Room_roomWaitingView;
var roomWaitingLayer;
Room_roomWaitingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //
        cc.log("roomWaitingLayer");
        //发一条消息 让roomWaitingLayer 显示
        var msg1 = new MVC.FMessage("showWaitingLayer", "roomWaiting");
        msg1.send();
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        // roomWaitingLayer.removeFromParent(true);
    }

});
module.exports = Room_roomWaitingView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"SNGpartyScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '42603/k/bhE87spYREAAd41', 'SNGpartyScript');
// scripts/P9/Maanna/SNGpartyScript.js

var MVC = require("FWS_MVC");
var Project = require("Project");
var P9RoomData = require("P9RoomData");
var P9CreateSettings = require("P9CreateSettings");

var SingleDeskPlayerNum = [];
var Speedvalue = [];

var singleseskplayernum;
var speedtype;

cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {

        scrollView: {
            "default": null,
            type: cc.ScrollView

        },
        pageView: {
            "default": null,
            type: cc.pageView
        },
        viewone: {
            "default": null,
            type: cc.Node
        },
        viewtwo: {
            "default": null,
            type: cc.Node
        },
        viewthree: {
            "default": null,
            type: cc.Node
        },
        playercountSlider: {
            "default": null,
            type: cc.Slider

        },
        speedSlider: {
            "default": null,
            type: cc.Slider

        }

    },

    onLoad: function onLoad() {
        this.connect();
        // this.scrollView.enabled = false;

        var gamedatamsg = new MVC.FMessage("GetP9CreateSettingsSNGAck", "root");
        gamedatamsg.send();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },

    //高级设置
    moreoptioncall: function moreoptioncall() {

        this.scrollView.enabled = true;
        this.viewtwo.active = true;
        this.scrollView.scrollToBottom(0.1);
        this.viewthree.color = new cc.Color(0, 0, 0);
    },
    //收起
    packupcall: function packupcall() {
        this.scrollView.scrollToTop(0.1);
        this.scrollView.enabled = true;
        this.viewtwo.active = false;
        this.viewthree.color = new cc.Color(20, 32, 78);
    },
    //创建SNG
    SNGButtonClick: function SNGButtonClick() {
        var msg = new MVC.FMessage("clickSNGButton", "createPartySet");
        msg.args.name = "创建SNG比赛";
        msg.send();
    },
    //创建MTT
    MTTButtonClick: function MTTButtonClick() {
        var msg = new MVC.FMessage("clickMTTButton", "createPartySet");
        msg.args.name = "创建MTT比赛";
        msg.send();
    },

    onFMessage_GetP9CreateSettingsSNGReq: function onFMessage_GetP9CreateSettingsSNGReq(msg) {
        msg.complete();
        var data = msg.args;

        //循环遍历PlayerNum
        for (var i = 0; i < data.SingleDeskPlayerNum.length; i++) {
            SingleDeskPlayerNum.push(data.SingleDeskPlayerNum[i]);
            // 界面显示牌局人数

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.SingleDeskPlayerNum[i];
            label.fontSize = 20;
            var sliderlength = this.playercountSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.playercountSlider.node.getPositionX();
            var sliderpositionY = this.playercountSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.SingleDeskPlayerNum.length - 1)), sliderpositionY + 10);
            this.viewone.addChild(label.node);
        }

        for (var i = 0; i < data.Speed.length; i++) {
            Speedvalue.push(data.Speed[i]);
            // 界面显示牌局人数

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.Speed[i].SpeedName;
            cc.log("speed.....", label.string);
            label.fontSize = 20;
            var sliderlength = this.speedSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.speedSlider.node.getPositionX();
            var sliderpositionY = this.speedSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.Speed.length - 1)), sliderpositionY + 10);
            this.viewone.addChild(label.node);
        }
    },
    playercountSlidercall: function playercountSlidercall() {

        var percent = this.playercountSlider.progress;
        for (var a = 0; a < SingleDeskPlayerNum.length; a++) {

            var singleDeskPlayerNum = SingleDeskPlayerNum[a];
            if (a == 0) {
                if (percent < 1 / ((SingleDeskPlayerNum.length - 1) * 2)) {

                    this.singleseskplayernum = singleDeskPlayerNum;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((SingleDeskPlayerNum.length - 1) * 2) < percent && percent < (2 * a + 1) / ((SingleDeskPlayerNum.length - 1) * 2)) {

                    this.singleseskplayernum = singleDeskPlayerNum;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9MTTGameData.tablePlayerCount = this.singleseskplayernum;

                cc.log("renshu", Project.P9.DATA.ROOM.P9MTTGameData.tablePlayerCount);
            }
        }
    },

    speedSlidercall: function speedSlidercall() {

        var percent = this.speedSlider.progress;
        for (var a = 0; a < Speedvalue.length; a++) {

            var speed = Speedvalue[a];
            if (a == 0) {
                if (percent < 1 / ((SingleDeskPlayerNum.length - 1) * 2)) {

                    this.speedtype = speed;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((SingleDeskPlayerNum.length - 1) * 2) < percent && percent < (2 * a + 1) / ((SingleDeskPlayerNum.length - 1) * 2)) {

                    this.speedtype = speed;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9MTTGameData.speed = this.speedtype;

                cc.log("renshu", Project.P9.DATA.ROOM.P9MTTGameData.speed);
            }
        }
    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","P9CreateSettings":"P9CreateSettings","P9RoomData":"P9RoomData","Project":"Project"}],"SettlementController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e5be6+2Zg9Jhq8QHgv98zp3', 'SettlementController');
// scripts/P9/context/Settlement/SettlementController.js

var MVC = require("FWS_MVC");
var Project = require("Project");
var SettlementController;
SettlementController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("SettlementController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("SettlementController onLeaveNode");
    },

    //TODO:负责将 view层的事件 转换成 页面切换等动作
    onFMessage_clickPartyButton: function onFMessage_clickPartyButton(msg) {
        //进入分享节点
        MVC.FContextManager.gotoID("Share");
        //发送消息给网络模块
    }

});
module.exports = SettlementController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"SettlementScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b1d27qa6w9M5bVeFSN4b5Js', 'SettlementScript');
// scripts/P9/context/Settlement/SettlementScript.js

cc.Class({
    "extends": cc.Component,

    properties: {
        //牌局统计按钮
        leftButton: {
            "default": null,
            type: cc.Button
        },
        //我的统计按钮
        rightButton: {
            "default": null,
            type: cc.Button
        },
        //推出的X按钮
        exitButton: {
            "default": null,
            type: cc.Button
        },
        //分享按钮左
        shareButton1: {
            "default": null,
            type: cc.Button
        },
        //分享按钮右
        shareButton2: {
            "default": null,
            type: cc.Button
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    clickleftButton: function clickleftButton() {
        cc.log("clickleftButton");
    },
    clickrightButton: function clickrightButton() {
        cc.log("clickrightButton");
    },
    clickexitButton: function clickexitButton() {
        cc.log("clickexitButton");
    },
    clickshareButton1: function clickshareButton1() {
        cc.log("clickshareButton1");
    },
    clickshareButton2: function clickshareButton2() {
        cc.log("clickshareButton2");
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"SettlementView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c71c4KD29hGt7rYf8H0wwUm', 'SettlementView');
// scripts/P9/context/Settlement/SettlementView.js

var MVC = require("FWS_MVC");
var SettlementView;
var playerHeadLayer;
SettlementView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        cc.loader.loadRes("TestProfab/Settlement", function (err, prefab) {
            cc.log(err);
            playerHeadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(playerHeadLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = SettlementView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"StringUtils":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f73beFCCJpMOoz4Ompgz+cr', 'StringUtils');
// scripts/FWS/Utils/StringUtils.js

var StringUtils = cc.Class({
    name: "StringUtils",
    statics: {
        //去除前面的空白字符
        ltrim: function ltrim(src) {
            if (src) {
                return src.replace(/^\s+/g, "");
            } else {
                return "";
            }
        },
        //去除后面的空白字符
        rtrim: function rtrim(src) {
            if (src) {
                return src.replace(/\s+$/g, "");
            } else {
                return "";
            }
        },
        //去除前面和后面的空白字符
        trim: function trim(src) {
            return StringUtils.ltrim(StringUtils.rtrim(src));
        },
        //格式化字符串:  "{0},{1},{2}...", ...
        format: function format() {
            if (arguments.length > 0 && arguments[0]) {
                var ret = arguments[0] + "";
                for (var i = 0; i < arguments.length; i++) {
                    var a = arguments[i];
                    var re = new RegExp("\\{" + (i - 1) + "\\}", "gm");
                    ret = ret.replace(re, a);
                }
                return ret;
            } else {
                return "";
            }
        },
        //格式化字符串: "{key1},{key2},{key3}..."
        formatEx: function formatEx(template, data) {
            if (template) {
                var ret = template + "";
                if (data) {
                    for (var k in data) {
                        var v = data[k];
                        var re = new RegExp("\\{" + k + "\\}", "gm");
                        ret = ret.replace(re, v);
                    }
                }
                return ret;
            }
            return "";
        }
    }
});

module.exports = StringUtils;

cc._RFpop();
},{}],"achievementController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '79d7dYiYLhANYVhaKqdXkJZ', 'achievementController');
// scripts/P9/context/my/achievement/achievementController.js

//所获成就
var MVC = require("FWS_MVC");
var Project = require("Project");
var achievementController;
achievementController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = achievementController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"achievementScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '80abdv+XQJEVbXUh0iahpVr', 'achievementScript');
// scripts/P9/context/my/achievement/achievementScript.js

//所获成就
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"achievementView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'da5bekghPRMhqDVOgZAgB6C', 'achievementView');
// scripts/P9/context/my/achievement/achievementView.js

//所获成就
var MVC = require("FWS_MVC");
var Project = require("Project");
var achievementView;
achievementView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("achievementScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = achievementView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"actionLayoutScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '999b4KzHVpECola0SZ/Ucxq', 'actionLayoutScript');
// scripts/P9/Liujunhao/roomWaitting/actionLayoutScript.js

//玩家操作prefab
var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //2X 图片
        doubleSprite: {
            "default": null,
            type: cc.Sprite
        },
        //2X 文字
        doubleLabel: {
            "default": null,
            type: cc.Label
        },
        //2X 按钮
        doubleBtn: {
            "default": null,
            type: cc.Button
        },
        //2X 数字
        doublecountLabel: {
            "default": null,
            type: cc.Label
        },
        //3X 图片
        trebleSprite: {
            "default": null,
            type: cc.Sprite
        },
        //3X 文字
        trebleLabel: {
            "default": null,
            type: cc.Label
        },
        //3X 按钮
        trebleBtn: {
            "default": null,
            type: cc.Button
        },
        //3X 数字
        treblecountLabel: {
            "default": null,
            type: cc.Label
        },
        //4X 图片
        fourfoldSprite: {
            "default": null,
            type: cc.Sprite
        },
        //4X 文字
        fourfoldLabel: {
            "default": null,
            type: cc.Label
        },
        //4X 按钮
        fourfoldBtn: {
            "default": null,
            type: cc.Button
        },
        //4X 数字
        fourfoldcountLabel: {
            "default": null,
            type: cc.Label
        },
        //自由加注 图片
        freefillSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自由加注 文字
        freefillLabel: {
            "default": null,
            type: cc.Label
        },
        //自由加注 按钮
        freefillBtn: {
            "default": null,
            type: cc.Button
        },
        //弃牌 图片
        foldSprite: {
            "default": null,
            type: cc.Sprite
        },
        //弃牌 文字
        foldLabel: {
            "default": null,
            type: cc.Label
        },
        //弃牌 按钮
        foldBtn: {
            "default": null,
            type: cc.Button
        },

        //过牌 图片
        passSprite: {
            "default": null,
            type: cc.Sprite
        },
        //过牌 文字
        passLabel: {
            "default": null,
            type: cc.Label
        },
        //过牌 按钮
        passBtn: {
            "default": null,
            type: cc.Button
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    //2X 按钮点击
    doubleBtnclick: function doubleBtnclick() {},
    //3X 按钮点击
    trebleBtnclick: function trebleBtnclick() {},
    //4X 按钮点击
    fourfoldBtnclick: function fourfoldBtnclick() {},
    //自由加注 按钮点击
    freefillBtnclick: function freefillBtnclick() {},
    //弃牌 按钮点击
    foldBtnclick: function foldBtnclick() {},
    //过牌 按钮点击
    passBtnclick: function passBtnclick() {}

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"adsfggsggg":[function(require,module,exports){
"use strict";
cc._RFpush(module, '04818OvTdZGuIjxJxzmzXdq', 'adsfggsggg');
// resources/script/adsfggsggg.js


var MVC = require("FWS_MVC");
var GateWAY = require("FWS_NATIVE_GATEWAY");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        label: {
            "default": null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
        this.scheduleOnce(function () {
            // MVC.FContextManager.gotoID("login");

        }, 2);
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    clickForCppToJs: function clickForCppToJs() {},
    clickForSendMsg: function clickForSendMsg() {
        var obj = {};
        obj.version = "1";
        obj.appid = "11";
        obj.msgId = '111';
        obj.sequence = '1111';
        obj.retcode = '1111';
        obj.extra = "11111";
        obj.router = "1111111";
        obj.timestamp = "191919";
        obj.body = "1111111111111111";
        obj.type = "1";

        jsCppConnect.testlog("发送了网络消息");
        jsCppConnect.jsToCpp(obj);
    },
    clickForConnect: function clickForConnect() {},
    cppTOjs: function cppTOjs(msg) {
        this.label.string = msg;
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","FWS_NATIVE_GATEWAY":"FWS_NATIVE_GATEWAY"}],"autoLayoutScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '7e3b37COrFLZZGaFHA8O6eH', 'autoLayoutScript');
// scripts/P9/Liujunhao/roomWaitting/autoLayoutScript.js

//自动操作prefab
var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //自动弃牌 图片
        autofoldSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动弃牌 文字
        autofoldLabel: {
            "default": null,
            type: cc.Label
        },
        //自动弃牌 按钮
        autofoldBtn: {
            "default": null,
            type: cc.Button
        },
        //自动过牌 图片
        autopassSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动过牌 文字
        autopassLabel: {
            "default": null,
            type: cc.Label
        },
        //自动过牌 按钮
        autopassBtn: {
            "default": null,
            type: cc.Button
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    //自动弃牌 按钮点击
    autofoldBtnclick: function autofoldBtnclick() {},
    //自动过牌 按钮点击
    autopassBtnclick: function autopassBtnclick() {}

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"backOfmy":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'dafc5SZw75HsLUVQmKBWY6F', 'backOfmy');
// scripts/P9/context/my/backOfmy.js

var MVC = require("FWS_MVC");
var Project = require("Project");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {},
    backBtn: function backBtn() {
        MVC.FContextManager.gotoID("my");
        cc.director.loadScene("myScene");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"backgroundLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b37282ySC5Pn56DkFgenwDl', 'backgroundLayerScript');
// scripts/P9/Liujunhao/roomWaitting/backgroundLayerScript.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"contactsController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '35b50umwodB1K9NRQOGhfk4', 'contactsController');
// scripts/P9/context/my/contacts/contactsController.js

//联系人
var MVC = require("FWS_MVC");
var Project = require("Project");
var contactsController;
contactsController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = contactsController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"contactsScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '08692/WNxJE05VTTsEqZm1G', 'contactsScript');
// scripts/P9/context/my/contacts/contactsScript.js

//联系人
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"contactsView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8178cMosBFIq4ipREh0EikA', 'contactsView');
// scripts/P9/context/my/contacts/contactsView.js

//联系人
var MVC = require("FWS_MVC");
var Project = require("Project");
var contactsView;
contactsView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("contactsScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = contactsView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"deskScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c0adfsgrohKTq0BFydiQAGb', 'deskScript');
// scripts/P9/context/4room/deskScript.js

var MVC = require("FWS_MVC");
var roomType = cc.Enum({
    NONE: 0,
    MTT: 1,
    SNG: 2,
    STD: 3
});
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        roomType: roomType.NONE,
        //奖池
        jackpot: 0,
        //palyer的模型(头像等)
        player: {
            "default": null,
            type: cc.Node
        }

    },
    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"editController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8f9b42nDXVMLqtHZWrcyCM1', 'editController');
// scripts/P9/context/my/edit/editController.js

//编辑
var MVC = require("FWS_MVC");
var Project = require("Project");
var editController;
editController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = editController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"editScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '14249j6sK1ARLF1GLbnqyUz', 'editScript');
// scripts/P9/context/my/edit/editScript.js

//编辑
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"editView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3fd74lpqOJBBZ/MRweBy4pi', 'editView');
// scripts/P9/context/my/edit/editView.js

//编辑
var MVC = require("FWS_MVC");
var Project = require("Project");
var editView;
editView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("editScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = editView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"gamestatisticsController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '88775e0HupNj6E5Vuj9x4Fs', 'gamestatisticsController');
// scripts/P9/context/my/gamestatistics/gamestatisticsController.js

//牌局统计
var MVC = require("FWS_MVC");
var Project = require("Project");
var gamestatisticsController;
gamestatisticsController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = gamestatisticsController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"gamestatisticsScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '82847CA0P9LbZEcqJX2VtBa', 'gamestatisticsScript');
// scripts/P9/context/my/gamestatistics/gamestatisticsScript.js

//牌局统计
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"gamestatisticsView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '62b539S1l1AfqjaClT8bjaO', 'gamestatisticsView');
// scripts/P9/context/my/gamestatistics/gamestatisticsView.js

//牌局统计
var MVC = require("FWS_MVC");
var Project = require("Project");
var gamestatisticsView;
gamestatisticsView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("gamestatisticsScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = gamestatisticsView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"gjSceneController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c9984RnwyZDLI7TgVl/V9u6', 'gjSceneController');
// scripts/P9/gjDir/gjSceneController.js

var MVC = require("FWS_MVC");
var Project = require("Project");
var gjSceneController;
gjSceneController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("gjSceneController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("gjSceneController onLeaveNode");
    },
    onFMessage_button: function onFMessage_button(msg) {
        MVC.FContextManager.gotoID("test");
        msg.complete();
    }

});
module.exports = gjSceneController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"gjSceneScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3b4c4KheDpMUpW2BNO5aySz', 'gjSceneScript');
// scripts/P9/gjDir/gjSceneScript.js

var MVC = require("FWS_MVC");
var jiarunum;
var shangzhuonum;
cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {
        spr: {
            "default": null,
            type: cc.Sprite
        },
        sPrefab: {
            "default": null,
            type: cc.Prefab
        },
        jiaru: {
            "default": null,
            type: cc.Button
        },
        shangzhuo: {
            "default": null,
            type: cc.Button
        },
        scrollView: {
            "default": null,
            type: cc.ScrollView
        },
        speed: 1,
        horizontalBar: {
            type: cc.ProgressBar,
            "default": null
        },
        BarNum: {
            "default": null,
            type: cc.Label
        },
        seatNum: 9,
        leftPositionX: -310,
        rightPositionX: 310,
        upPositionX_shuangl: -151,
        upPositionX_shuangr: 151,
        upPositionX_dan: 0,
        upPositionY: 527,
        downPositionX: 0,
        downPositionY: -480,
        upMaxPosition: 310,
        downMaxPosition: -170,
        lookOnNum: 0,
        playNum: 0,
        upBedTableMax: 215,
        downBedTableMax: 115

    },
    clickjiaru: function clickjiaru() {
        jiarunum++;
        this.setLookOn();
        cc.log(this.scrollView.content);
    },
    clickshangzhuo: function clickshangzhuo() {
        if (jiarunum > 0) {
            jiarunum--;
            shangzhuonum++;
        }
        cc.log("clickshangzhuo");
    },
    setLookOn: function setLookOn() {
        var her = cc.instantiate(this.sPrefab);
        her.setPositionY(0);
        this.scrollView.content.addChild(her);
    },
    // use this for initialization
    onLoad: function onLoad() {

        var dt = 15;
        this.schedule(function () {
            dt -= 0.1;
            this._updateProgressBar(this.horizontalBar, dt);
        }, 0.1, 140);

        this._pingpong = true;
        var s = cc.director.getVisibleSize();
        cc.log(s);
        jiarunum = this.lookOnNum;
        shangzhuonum = this.playNum;
        for (var i = 0; i < shangzhuonum; i++) {
            var newStar = cc.instantiate(this.sPrefab);
            // 将新增的节点添加到 Canvas 节点下面
            this.node.addChild(newStar);
            // 为星星设置一个随机位置
            cc.log(i);
            cc.log(this.setBedTable(i));
            newStar.setPosition(this.setBedTable(i));
        }
        this.newSeat();
        this.connect();
        // var pro = CCProgressTimer.argscreate(this.spr);
        //     pro.setType(kCCProgressTimerTypeRadial);
        //     pro.setPercentage(0);
    },
    onDestory: function onDestory() {

        this.disconnect();
    },
    newSeat: function newSeat() {
        for (var i = 0; i < this.seatNum; i++) {
            var newStar = cc.instantiate(this.sPrefab);
            // 将新增的节点添加到 Canvas 节点下面
            this.node.addChild(newStar);
            // 为星星设置一个随机位置
            newStar.setPosition(this.setSeatPosition(i));
        }
        // // 将 Game 组件的实例传入星星组件
        // newStar.getComponent('Star').game = this;
    },
    setSeatPosition: function setSeatPosition(i) {
        var pX = 0;
        var pY = 0;
        if (this.seatNum % 2 == 0) {
            cc.log("第一个");
            if (i == this.seatNum / 2 || i == 0) {
                pX = this.downPositionX;

                if (i == 0) {
                    pY = this.downPositionY;
                } else {
                    pY = this.upPositionY;
                }
            } else if (i > 0 && i < this.seatNum / 2) {
                pX = this.rightPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * i + this.downMaxPosition;
            } else {
                pX = this.leftPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * (this.seatNum - i) + this.downMaxPosition;
            }
        } else if (this.seatNum % 2 == 1) {
            cc.log("第二个");
            if (i == 0) {
                cc.log("i=0");
                pX = this.downPositionX;
                pY = this.downPositionY;
            } else if (i < this.seatNum / 2 + 1 && i > this.seatNum / 2 - 1) {
                if (i < this.seatNum / 2) {
                    pX = this.upPositionX_shuangr;
                } else {
                    pX = this.upPositionX_shuangl;
                }
                pY = this.upPositionY;
            } else if (i > 0 && i < this.seatNum / 2 - 1) {
                cc.log("i=zuo");
                pX = this.rightPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * i + this.downMaxPosition;
            } else {
                cc.log("i=you");
                pX = this.leftPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * (this.seatNum - i) + this.downMaxPosition;
            }
        }
        // cc.log("x",pX);
        // cc.log("y",pY);
        return cc.p(pX, pY);
    },
    setBedTable: function setBedTable(i) {
        var winSizeX = cc.director.getVisibleSize().width;
        var winSizeY = cc.director.getVisibleSize().height;
        var BedTableXD = winSizeX / 8;
        var BedTableXS = winSizeX / 9;

        var pX = 0;
        var pY = 0;
        if (shangzhuonum % 2 == 0) {
            switch (shangzhuonum) {
                case 2:
                    pX = -BedTableXD / 2 + BedTableXD * i;
                    pY = this.setY(2, i);
                    break;
                case 4:
                    pX = -BedTableXD * 3 / 2 + BedTableXD * i;
                    pY = this.setY(4, i);
                    break;
                case 6:
                    pX = -BedTableXD * 5 / 2 + BedTableXD * i;
                    pY = this.setY(6, i);
                    break;
                case 8:
                    pX = -BedTableXD * 7 / 2 + BedTableXD * i;
                    pY = this.setY(8, i);
                    break;
            }
        } else {
            switch (shangzhuonum) {
                case 1:
                    pX = BedTableXS * i;
                    pY = this.setY(1, i);
                    break;
                case 3:
                    pX = -BedTableXS * 3 / 2 + BedTableXS * i;
                    pY = this.setY(3, i);
                    break;
                case 5:
                    pX = -BedTableXS * 5 / 2 + BedTableXS * i;
                    pY = this.setY(5, i);
                    break;
                case 7:
                    pX = -BedTableXS * 7 / 2 + BedTableXS * i;
                    pY = this.setY(7, i);
                    break;
                case 9:
                    pX = -BedTableXS * 9 / 2 + BedTableXS * i;
                    pY = this.setY(9, i);
                    break;
            }
        }
        return cc.p(pX, pY);
    },
    clicksignUpButton: function clicksignUpButton() {
        var msg = new MVC.FMessage("MTTSNGclicksignUpButton", "room");
        msg.args.name = "MTTSNGclicksignUpButton进入倒计时";
        msg.send();
        cc.log("clicksignUpButton");
    },

    setY: function setY(num, i) {
        var BedTableY = 20;
        var up_maxH = 115;
        var y = 0;
        var Y = new Array();
        Y[0] = up_maxH + BedTableY * 0;
        Y[1] = up_maxH + BedTableY * 1 - 10;
        Y[2] = up_maxH + BedTableY * 2 - 15;
        Y[3] = up_maxH + BedTableY * 3 - 10;
        Y[4] = up_maxH + BedTableY * 4;
        // for(var j = 0 ; j <5 ;j++){
        //         Y[j]=up_maxH+BedTableY*j;
        // }
        switch (num) {
            case 1:
                y = Y[0];
                break;
            case 2:
                y = Y[1];
                break;
            case 3:
                if (i == 1) {
                    y = Y[0];
                } else {
                    y = Y[1];
                }
                break;
            case 4:
                if (i == 0 || i == 3) {
                    y = Y[2];
                } else {
                    y = Y[1];
                }
                break;
            case 5:
                if (i == 0 || i == 4) {
                    y = Y[2];
                } else if (i == 1 || i == 3) {
                    y = Y[1];
                } else {
                    y = Y[0];
                }
                break;
            case 6:
                if (i == 0 || i == 5) {
                    y = Y[3];
                } else if (i == 1 || i == 4) {
                    y = Y[2];
                } else {
                    y = Y[1];
                }
                break;
            case 7:
                if (i == 0 || i == 6) {
                    y = Y[3];
                } else if (i == 1 || i == 5) {
                    y = Y[2];
                } else if (i == 2 || i == 4) {
                    y = Y[1];
                } else {
                    y = Y[0];
                }
                break;
            case 8:
                if (i == 0 || i == 7) {
                    y = Y[4];
                } else if (i == 1 || i == 6) {
                    y = Y[3];
                } else if (i == 2 || i == 5) {
                    y = Y[2];
                } else {
                    y = Y[1];
                }
                break;
            case 9:

                if (i == 0 || i == 8) {
                    y = Y[4];
                } else if (i == 1 || i == 7) {
                    y = Y[3];
                } else if (i == 2 || i == 6) {
                    y = Y[2];
                } else if (i == 3 || i == 5) {
                    cc.log(num);
                    y = Y[1];
                } else {
                    y = Y[0];
                }
                break;
        }
        // cc.log(y);
        return y;
    },
    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        //this._updateProgressBar(this.horizontalBar, dt);
    },
    _updateProgressBar: function _updateProgressBar(progressBar, dt) {
        var progress = progressBar.progress;
        //var progress = 1;
        if (progress < 1.0 && this._pingpong) {
            // progress += dt * this.speed;
            progress += 0.0071;
        } else {
            // progress -= dt * this.speed;
            progress -= 0.0071;
            this._pingpong = progress <= 0;
        }
        cc.log(progress);
        if (progress) {}
        // this.BarNum.string=parseInt(progress*10);
        this.BarNum.string = parseInt(dt);
        progressBar.progress = progress;
    }
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"gjSceneView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e7bb62RUdZPW7SyRa00Tmw9', 'gjSceneView');
// scripts/P9/gjDir/gjSceneView.js

var MVC = require("FWS_MVC");
var gjSceneView;
var playerHeadLayer;
gjSceneView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("gjScene");
        //loadscene。。。

        //loadscene。。。
        cc.loader.loadRes("TestProfab/playerHeadLayer", function (err, prefab) {
            cc.log(err);
            playerHeadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(playerHeadLayer);
        });
        // cc.director.loadScene("roomScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = gjSceneView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"invitationcodeController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9feb0HEZv9INJsyRUXm4gWp', 'invitationcodeController');
// scripts/P9/context/my/invitationcode/invitationcodeController.js

//邀请码
var MVC = require("FWS_MVC");
var Project = require("Project");
var invitationcodeController;
invitationcodeController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = invitationcodeController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"invitationcodeScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '462a4YPyH9EFKA27pB+MdB8', 'invitationcodeScript');
// scripts/P9/context/my/invitationcode/invitationcodeScript.js

//邀请码
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"invitationcodeView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'be954JxMzhBDJKXNtdZOYb3', 'invitationcodeView');
// scripts/P9/context/my/invitationcode/invitationcodeView.js

//邀请码
var MVC = require("FWS_MVC");
var Project = require("Project");
var invitationcodeView;
invitationcodeView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("invitationcodeScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = invitationcodeView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"joinGameLoadingLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e3a89wIs6VLILsORDPv2xTb', 'joinGameLoadingLayerScript');
// scripts/P9/context/3party/2joinParty/1party_loadingParty/joinGameLoadingLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
        this.scheduleOnce(function () {
            //假装发送进入哪种牌桌的消息
            //目前需要手动改
            var msg1 = new MVC.FMessage("joinPartyInfoReq", "Net");
            msg1.args.type = "MTT";

            msg1.send();
        }, 4);
    },
    onDestory: function onDestory() {
        this.disconnect();
    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"loginScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e2927jriIJEIZ/2TfICDTEY', 'loginScript');
// scripts/P9/context/Login/loginScript.js

//必须要加载这个模块
var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        setUpLabel: {
            "default": null,
            type: cc.Label
        },
        setPhone: {
            "default": null,
            type: cc.EditBox
        },
        setPassWord: {
            "default": null,
            type: cc.EditBox
        },
        loginBtn: {
            "default": null,
            type: cc.Button
        },
        postBtn: {
            "default": null,
            type: cc.Button
        },
        loginBtn_label: {
            "default": null,
            type: cc.Label
        },
        postBtn_label: {
            "default": null,
            type: cc.Label
        },
        move_box: {
            "default": null,
            type: cc.Sprite
        },
        kaiguan: true
    },

    // use this for initialization
    onLoad: function onLoad() {
        var bggh = this.node.getContentSize().width;
        cc.log(bggh);
        //加载的时候要与消息路由连接
        this.connect();
    },
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    },

    clickUp: function clickUp() {
        var msg = new MVC.FMessage("clickLoginButton", "main");
        if (this.setUpLabel.string == "注册") {
            // msg.args.name = "注册";
            cc.log("注册");
            // msg.send();
        } else if (this.setUpLabel.string == "登录") {
                msg.args.name = "登录";
                cc.log("登录");
                msg.send();
            }
    },
    clickDown: function clickDown() {
        var time = 0.3;
        var winSizeW = this.node.getContentSize().width;
        if (this.kaiguan) {
            var moveLeft = cc.moveBy(time, cc.p(-winSizeW, 0));
            this.move_box.node.runAction(moveLeft);
            this.setUpLabel.string = "注册";
            this.loginBtn_label.string = "注册";
            this.postBtn_label.string = "登录";
            this.kaiguan = false;
        } else {
            this.setUpLabel.string = "登录";
            this.loginBtn_label.string = "登录";
            this.postBtn_label.string = "注册";
            var moveLeft = cc.moveBy(time, cc.p(winSizeW, 0));
            this.move_box.node.runAction(moveLeft);
            this.kaiguan = true;
        }
    },
    onFMessage_clickLoginButton: function onFMessage_clickLoginButton(msg) {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"mainScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e8393rhfIJKHa3s03IiSdiR', 'mainScript');
// scripts/P9/context/main/mainScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {
        addPartyButton: {
            "default": null,
            type: cc.Button
        },
        setPartyButton: {
            "default": null,
            type: cc.Button
        },
        My: {
            "default": null,
            type: cc.Button
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    clickaddPartyButton: function clickaddPartyButton() {
        var msg = new MVC.FMessage("clickaddPartyButton", "main");
        msg.args.name = "进入牌桌";
        msg.send();
        cc.log("clickaddPartyButton");
    },
    clicksetPartyButton: function clicksetPartyButton() {
        var msg = new MVC.FMessage("clicksetPartyButton", "main");
        msg.args.name = "进入牌局设置";
        msg.send();
        cc.log("clicksetPartyButton");
    },
    clickMy: function clickMy() {
        var msg = new MVC.FMessage("clickMy", "main");
        msg.args.name = "我的";
        msg.send();
        cc.log("clickMy");
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"mallController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9680e602PVPsLzaq7aVBlje', 'mallController');
// scripts/P9/context/my/mall/mallController.js

//商城
var MVC = require("FWS_MVC");
var Project = require("Project");
var mallController;
mallController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = mallController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"mallScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '22617cn2y9LN7b5vUhLHOOz', 'mallScript');
// scripts/P9/context/my/mall/mallScript.js

//商城
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"mallView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd726fMz63BEVKNeUseyOKkd', 'mallView');
// scripts/P9/context/my/mall/mallView.js

//商城
var MVC = require("FWS_MVC");
var Project = require("Project");
var mallView;
mallView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("mallScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = mallView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"masterlevelController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '250b4JJQnZN34I7s7456vz4', 'masterlevelController');
// scripts/P9/context/my/masterlevel/masterlevelController.js

//大师等级
var MVC = require("FWS_MVC");
var Project = require("Project");
var masterlevelController;
masterlevelController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = masterlevelController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"masterlevelScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3ec204VP55IGpYLV/3UesK7', 'masterlevelScript');
// scripts/P9/context/my/masterlevel/masterlevelScript.js

//大师等级
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"masterlevelView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '40dd8Ga2fRGEZHsOp6Tt9PE', 'masterlevelView');
// scripts/P9/context/my/masterlevel/masterlevelView.js

//大师等级
var MVC = require("FWS_MVC");
var Project = require("Project");
var masterlevelView;
masterlevelView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("masterlevelScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = masterlevelView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"membershipController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '69f76ArNzlNmoHJUaB1wuxZ', 'membershipController');
// scripts/P9/context/my/membership/membershipController.js

//会籍
var MVC = require("FWS_MVC");
var Project = require("Project");
var membershipController;
membershipController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = membershipController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"membershipScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b22f89MRcBJg7wnKDSY+7iw', 'membershipScript');
// scripts/P9/context/my/membership/membershipScript.js

//会籍
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"membershipView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5d7c36Ez31IGLRolfpYm584', 'membershipView');
// scripts/P9/context/my/membership/membershipView.js

//会籍
var MVC = require("FWS_MVC");
var Project = require("Project");
var membershipView;
membershipView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("membershipScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = membershipView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"messageController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4eb65oAfVtCk5yZuCH0v/6E', 'messageController');
// scripts/P9/context/my/message/messageController.js

//消息
var MVC = require("FWS_MVC");
var Project = require("Project");
var messageController;
messageController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = messageController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"messageScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e749c29s6BFwp/ol6Wo5W5v', 'messageScript');
// scripts/P9/context/my/message/messageScript.js

//消息
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"messageView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a1f8e8G6sZMmZSGlKy7XT45', 'messageView');
// scripts/P9/context/my/message/messageView.js

//消息
var MVC = require("FWS_MVC");
var Project = require("Project");
var messageView;
messageView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("messageScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = messageView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"myController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd6d838bscdFwKaVI8B/Cy0H', 'myController');
// scripts/P9/context/my/myController.js

var MVC = require("FWS_MVC");
var Project = require("Project");
var myController;
myController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    },
    //切换钱包界面
    onFMessage_walletBtnclick: function onFMessage_walletBtnclick(msg) {
        MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
        MVC.FContextManager.gotoID("wallet");
        msg.complete();
    },
    //切换商城界面
    onFMessage_mallBtnclick: function onFMessage_mallBtnclick(msg) {
        MVC.FLog.data("商城跳转", "接收消息 {0}", msg);
        MVC.FContextManager.gotoID("mall");
        msg.complete();
    }
    // onFMessage_clickLoginButton: function(msg) {
    //     if( msg.args.name == "登录"){
    //         //进入分享节点
    //         cc.log("goto main 前");
    //         MVC.FContextManager.gotoID("main");
    //         cc.log("goto main 后");
    //         //发送消息给网络模块
    //     }else if(msg.args.name == "注册"){
    //         //进入分享节点
    //         // MVC.FContextManager.gotoID("Share");
    //         //发送消息给网络模块
    //     }

    // }

});
module.exports = myController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"myScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '188413BvmdJvK1euMb+9Rf1', 'myScript');
// scripts/P9/context/my/myScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },
    //加载脚本内容
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    },
    //跳转钱包页面
    walletBtnclick: function walletBtnclick() {
        var loadwalletmsg = new MVC.FMessage("walletBtnclick", "my");
        loadwalletmsg.args.name = "前往钱包页面";
        loadwalletmsg.send();

        MVC.FLog.data("钱包跳转", "发送消息 {0}", loadwalletmsg);
    },
    //跳转商城页面
    mallBtnclick: function mallBtnclick() {
        var loadmallmsg = new MVC.FMessage("mallBtnclick", "my");
        loadmallmsg.args.name = "前往商城页面";
        loadmallmsg.send();

        MVC.FLog.data("商城跳转", "发送消息 {0}", loadmallmsg);
    }
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"myView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a7cb97Bi8BGoKOuxy4RfqS2', 'myView');
// scripts/P9/context/my/myView.js

var MVC = require("FWS_MVC");
var myView;
myView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //加载结算场景
        // cc.director.loadScene("myScene");

        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = myView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"mybrandController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '46585/SRoxC/YjnQy6eHW3d', 'mybrandController');
// scripts/P9/context/my/mybrand/mybrandController.js

//我的牌谱
var MVC = require("FWS_MVC");
var Project = require("Project");
var mybrandController;
mybrandController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = mybrandController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"mybrandScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'bc667dehjFKoYma6TxPtY/e', 'mybrandScript');
// scripts/P9/context/my/mybrand/mybrandScript.js

//我的牌谱
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"mybrandView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '86330iQGO1A7p1ejUkrN5jx', 'mybrandView');
// scripts/P9/context/my/mybrand/mybrandView.js

//我的牌谱
var MVC = require("FWS_MVC");
var Project = require("Project");
var mybrandView;
mybrandView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("mybrandScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = mybrandView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"myteamController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c6e0cB0WH5MKIzflihpJvFE', 'myteamController');
// scripts/P9/context/my/myteam/myteamController.js

//我的战队
var MVC = require("FWS_MVC");
var Project = require("Project");
var myteamController;
myteamController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = myteamController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"myteamScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '749d4kMjjhPEYOoy4i7FsF6', 'myteamScript');
// scripts/P9/context/my/myteam/myteamScript.js

//我的战队
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"myteamView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2d640nE4jpOsbLpYl8cZkxV', 'myteamView');
// scripts/P9/context/my/myteam/myteamView.js

//我的战队
var MVC = require("FWS_MVC");
var Project = require("Project");
var myteamView;
myteamView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("myteamScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = myteamView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"partyCreatePartyLoadingLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '46e66cZQmFE2rlfEtkT0gc8', 'partyCreatePartyLoadingLayerScript');
// scripts/P9/context/3party/1createParty/3party_CreatePartyLoading/partyCreatePartyLoadingLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
        this.scheduleOnce(function () {
            //假装发送进入哪种牌桌的消息
            var msg1 = new MVC.FMessage("showPartyTypeReq", "Net");
            msg1.args.type = window.GameType;
            msg1.send();
        }, 2);
    },
    onDestory: function onDestory() {
        this.disconnect();
    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"partyCreateSetLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '50aa252jyZAipogbfRnFHDG', 'partyCreateSetLayerScript');
// scripts/P9/context/3party/1createParty/2party_CreatePartySet/partyCreateSetLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    onCreateStd: function onCreateStd() {
        //假设设置好了数据等东西  将这些东西发给网络层
        var msg1 = new MVC.FMessage("CreateStdPartyInfoAck", "Net");
        msg1.args.Type = "STD";
        msg1.send();
        //直接跳到loading
        window.GameType = "STD";
        MVC.FContextManager.gotoID("createPartyLoading");
    },
    onCreateMTT: function onCreateMTT() {
        //假设设置好了数据等东西  将这些东西发给网络层

        var msg1 = new MVC.FMessage("CreateStdPartyInfoAck", "Net");
        msg1.args.Type = "MTT";
        msg1.send();
        window.GameType = "MTT";

        //直接跳到loading
        MVC.FContextManager.gotoID("createPartyLoading");
    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"partyLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd616fBOOY1IM6Mzlg1oHH6B', 'partyLayerScript');
// scripts/P9/context/3party/partyLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    onCreatParty: function onCreatParty() {
        var msg1 = new MVC.FMessage("onCreatPartyClick", "createPartySet");
        msg1.send();
    },
    onJoinParty: function onJoinParty() {
        var msg1 = new MVC.FMessage("onJoinPartyClick", "createPartySet");
        msg1.send();
    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"partyView2":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'abaaafrrFlL+aEiKsPkBrwD', 'partyView2');
// scripts/P9/context/party/partyView2.js

var MVC = require("FWS_MVC");
var partyView;
var paytyLayer;
partyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        //loadscene。。。
        cc.log("partyScene is loading");

        //加载paiju场景
        cc.loader.loadRes("TestProfab/partyScene", function (err, prefab) {
            cc.log(err);
            paytyLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(paytyLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = partyView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"playerHeadScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3c1faM3kPNBgK405BVrj0mx', 'playerHeadScript');
// scripts/P9/context/4room/2room-StartGame/playerHeadScript.js

var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        icon: {
            "default": null,
            type: cc.Node
        },
        playerName: {
            "default": null,
            type: cc.Label
        },
        num: -1 },

    //-1代表没人
    //其他数据自动获取
    // use this for initialization
    onLoad: function onLoad() {
        if (this.num == -1) {
            // this.name.string = "没有人";

        } else if (this.num == 0) {
                // this.node.setPosition();
            } else if (this.num == 1) {} else if (this.num == 2) {} else if (this.num == 3) {} else if (this.num == 4) {} else if (this.num == 5) {}
    },
    //头像被点击了会发送一个消息 player详情的layer
    headOnClick: function headOnClick() {}

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"playerLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '35a31x64JhH9KMaFjjm3JTh', 'playerLayerScript');
// scripts/P9/SangHongLuDir/playerLayerScript.js

var MVC = require("FWS_MVC");
//单个玩家的数据结构
var player = {};
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //本桌支持最大人数
        maxplayerNum: 0,
        //任务头像模型
        playerModel: {
            "default": null,
            type: cc.Node
        },
        //哪些位置有人哪些位置没有人的数组 装的是每个人的结构体（头像，名字，详细信息）
        //自己获取？
        players: []
    },
    //需要确认onEnterNode和 onLoad谁先加载
    //如果onEnterNode先加载的话可以让这个函数先获取自己需要的东西 然后走onload
    onEnterNode: function onEnterNode() {
        console.log("!!!!!!playerLayerScirpt----onEnterNode");
    },
    // use this for initialization
    onLoad: function onLoad() {
        console.log("!!!!!!playerLayerScirpt----onLoad");
        this.connect();
        //向谁获取我上面的人的信息
    },
    onDestroy: function onDestroy() {
        this.disconnect();
    },
    onFMessage_initHeadLayerInfo: function onFMessage_initHeadLayerInfo(msg) {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"prefabBodyScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6c9440rH9ZNcqfcZ/Hn3mQR', 'prefabBodyScript');
// scripts/P9/SangHongLuDir/prefabBodyScript.js



cc.Class({
    "extends": cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.node.setContentSize(cc.director.getVisibleSize());
    }

});

cc._RFpop();
},{}],"roomController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'dc488GWMnBM3pnGC53jsV9B', 'roomController');
// scripts/P9/context/4room/roomController.js

var MVC = require("FWS_MVC");
var roomController;
roomController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        cc.log("roomController");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"roomScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4c75e0+lTlKQr/6wkIh0W/G', 'roomScript');
// scripts/P9/context/4room/roomScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        playerNum: {
            "default": null,
            type: cc.Label
        },
        partyType: {
            "default": null,
            type: cc.Label
        },
        roomNum: {
            "default": null,
            type: cc.Label
        },
        pond: {
            "default": null,
            type: cc.Label
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestroy: function onDestroy() {
        this.disconnect();
    },
    //这个也可以是手动获取room信息
    onFMessage_initRoomInfo: function onFMessage_initRoomInfo(msg) {
        //由谁给我发下我的信息 用于我的初始化
        this.playerNum.string = msg.args.playerNum + "";
        this.partyType.string = msg.args.partyType + "";
        this.roomNum.string = msg.args.roomNum + "";
        this.pond.string = msg.args.roomNum + "";
        //加载初始化的一些view信息：底池信息啊 等等

        //加载完了发送complete消息 告诉loadingView层 用于确认加载进度
        msg.complete();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"roomView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6d9b2e3CqVCjJf+7oZLe9xP', 'roomView');
// scripts/P9/context/4room/roomView.js

var MVC = require("FWS_MVC");
var roomView;
roomView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
    * 首先
    * */
    onEnterNode: function onEnterNode() {
        //加载roomScene（包括进入牌局等待）
        cc.log("roomScene");
        cc.director.loadScene("roomScene", function () {
            cc.loader.loadRes("TestProfab/roomWaitingLayer", function (err, prefab) {
                cc.log(err);
                //加载出来之后profab的销毁 有他自己决定
                var roomWaitingLayer = cc.instantiate(prefab);
                cc.director.getScene().addChild(roomWaitingLayer);
                cc.log("roomWaitingLayer on" + roomWaitingLayer.getPosition());
            });
        });

        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_VillageConroller":[function(require,module,exports){
"use strict";
cc._RFpush(module, '16b2f7WLSxMC6LQJREHxGvC', 'room_VillageConroller');
// scripts/P9/context/4room/3room-Village/room_VillageConroller.js

var MVC = require("FWS_MVC");
var roomLoadingView;
roomLoadingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     * 加载loadingView （转圈的那个页面） 所有的房间内的view 都在一个scene上解决
     * 使用方法：
     *       1，调用方法：
     *           a,通过director获取当前scene 向上面添加新的view
     *           b,通过发送消息给自己写的脚本（挂载在roomScene上的）发送消息来实现某些调用
     *
     *       2，要求：
     *           a,自己的显示需求(context节点的显示需求)单独写一个脚本 挂载在roomScene上
     *       3，
     *
     * */
    onEnterNode: function onEnterNode() {

        //loadscene。。。
        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomLoadingView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_VillageScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'ffe8ad6gqhMMogmzkHcBT09', 'room_VillageScript');
// scripts/P9/context/4room/3room-Village/room_VillageScript.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"room_VillageView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'eb737o0AJVEv4UyTYwGAqo5', 'room_VillageView');
// scripts/P9/context/4room/3room-Village/room_VillageView.js

var MVC = require("FWS_MVC");
var roomVillageView;
var DingZhuangTestLayer;
roomVillageView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.loader.loadRes("TestProfab/DingZhuangTestLayer", function (err, prefab) {
            cc.log(err);
            DingZhuangTestLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(DingZhuangTestLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        DingZhuangTestLayer.removeFromParent(true);
    }

});
module.exports = roomVillageView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_communityCardController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c33f6bk4EBOHatQrqfm2mtt', 'room_communityCardController');
// scripts/P9/context/4room/5room-communityCard/room_communityCardController.js

var MVC = require("FWS_MVC");
var roomCommunityCardController;
roomCommunityCardController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomCommunityCardController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_communityCardView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '86628hf+L9PdpmtrA/eiTxG', 'room_communityCardView');
// scripts/P9/context/4room/5room-communityCard/room_communityCardView.js

var MVC = require("FWS_MVC");
var roomCommunityCardView;
var FaShouPaiTestLayer;
roomCommunityCardView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.loader.loadRes("TestProfab/FaGongGongPaiTestLayer", function (err, prefab) {
            cc.log(err);
            FaShouPaiTestLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(FaShouPaiTestLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        FaShouPaiTestLayer.removeFromParent(true);
    }

});
module.exports = roomCommunityCardView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_handSignController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '528e91aDCFH0rVBMpy8yXMi', 'room_handSignController');
// scripts/P9/context/4room/4room-handSign/room_handSignController.js

var MVC = require("FWS_MVC");
var roomHandSignController;
var FaShouPaiTestLayer;
roomHandSignController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        FaShouPaiTestLayer.removeFromParent(true);
    }

});
module.exports = roomHandSignController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_handSignView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '58263dOk4hCvZJCOhF5gkk1', 'room_handSignView');
// scripts/P9/context/4room/4room-handSign/room_handSignView.js

var MVC = require("FWS_MVC");
var roomHandSignView;
var FaShouPaiTestLayer;
roomHandSignView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.loader.loadRes("TestProfab/FaShouPaiTestLayer", function (err, prefab) {
            cc.log(err);
            FaShouPaiTestLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(FaShouPaiTestLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        FaShouPaiTestLayer.removeFromParent(true);
    }

});
module.exports = roomHandSignView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_loadingController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a2f37ESFltHYYTl4v7RJDh2', 'room_loadingController');
// scripts/P9/context/4room/1room-loading/room_loadingController.js

var MVC = require("FWS_MVC");
var roomLoadingController;
roomLoadingController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     * 1，发送消息 gameReady消息
     *      消息名：gameReady
     *      节点：暂定 MSG(其实也无所谓 只要有方法就可以接收得到只是之后需要确认一下)
     * 2，等待gameOnStart消息
     *      a，goto startGame
     * */

    onEnterNode: function onEnterNode() {
        this.sendGameReadyMsg();
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    sendGameReadyMsg: function sendGameReadyMsg() {
        //暂时不知道发给谁 先不发
        // var msg = new MVC.FMessage("gameReady","MSG");
        // msg.send();
    },
    onFMessage_gameOnStart: function onFMessage_gameOnStart(msg) {
        MVC.FLog.data("room-LoadingController", "收到消息 {0}", msg);
        MVC.FContextManager.gotoID("startGame");
        msg.complete();
    }

});
module.exports = roomLoadingController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_loadingTestScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8b4401ZRv1FoJBmsnaWBTBP', 'room_loadingTestScript');
// scripts/P9/context/4room/1room-loading/room_loadingTestScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.scheduleOnce(function () {

            MVC.FContextManager.gotoID("startGame");
        }, 3);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_loadingView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8c3b1FTJ7JONq9zBVdIDJfy', 'room_loadingView');
// scripts/P9/context/4room/1room-loading/room_loadingView.js

var MVC = require("FWS_MVC");
var roomLoadingView;
var loadLayer;
roomLoadingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
    * 加载loadingView （转圈的那个页面） 所有的房间内的view 都在一个scene上解决
    * 使用方法：
    *       1，调用方法：
    *           a,通过director获取当前scene 向上面添加新的view
    *           b,通过发送消息给自己写的脚本（挂载在roomScene上的）发送消息来实现某些调用
    *
    *       2，要求：
    *           a,自己的显示需求(context节点的显示需求)单独写一个脚本 挂载在roomScene上
    *       3，
    * */
    onEnterNode: function onEnterNode() {
        //由于第一个scene还没加载的时候 不能调用loadScene方法
        // cc.director.loadScene("room-loadingScene");
        // 加载 Prefab
        //向谁获取我上面的人的信息

        cc.loader.loadRes("TestProfab/loadingGame", function (err, prefab) {
            cc.log(err);
            cc.log("loadingGame");
            loadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(loadLayer);
        });
        //loadscene。。。
        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        loadLayer.removeFromParent(true);
    },
    //等待接收加载loadingView的消息
    onFMessage_showLoadingView: function onFMessage_showLoadingView() {
        //获取loadingView

    }

});
module.exports = roomLoadingView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_myTurnController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9248cyzPZhBzIQkp2R2e571', 'room_myTurnController');
// scripts/P9/context/4room/6room-myTurn/room_myTurnController.js

var MVC = require("FWS_MVC");
var roomMyTurnController;
roomMyTurnController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomMyTurnController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_myTurnView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3935dJXwZNBY7rAkAL/drID', 'room_myTurnView');
// scripts/P9/context/4room/6room-myTurn/room_myTurnView.js

var MVC = require("FWS_MVC");
var roomMyTurnView;
var myTurnLayer;
roomMyTurnView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/myTurnLayer", function (err, prefab) {
            cc.log(err);
            myTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(myTurnLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        myTurnLayer.removeFromParent(true);
    }

});
module.exports = roomMyTurnView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_othersTurnController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '406e8HnaHJFBq1SmYxYOx9p', 'room_othersTurnController');
// scripts/P9/context/4room/7room-othersTurn/room_othersTurnController.js

var MVC = require("FWS_MVC");
var roomOthersTurnController;
roomOthersTurnController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomOthersTurnController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_othersTurnView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '713a4vpI1tKwIgX1FAWmOfa', 'room_othersTurnView');
// scripts/P9/context/4room/7room-othersTurn/room_othersTurnView.js

var MVC = require("FWS_MVC");
var roomOthersTurnView;
var otherTurnLayer;
roomOthersTurnView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/otherTurnLayer", function (err, prefab) {
            cc.log(err);
            otherTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(otherTurnLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        otherTurnLayer.removeFromParent(true);
    }

});
module.exports = roomOthersTurnView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_partyRoomOverController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd6214Tw83RLJo3cTEdIDPsl', 'room_partyRoomOverController');
// scripts/P9/context/4room/a1room-partyRoomOver/room_partyRoomOverController.js

var MVC = require("FWS_MVC");
var roomPartyRoomOverController;
roomPartyRoomOverController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomPartyRoomOverController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_partyRoomOverView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'def80cGkoFHeJkf76NxJ8r9', 'room_partyRoomOverView');
// scripts/P9/context/4room/a1room-partyRoomOver/room_partyRoomOverView.js

var MVC = require("FWS_MVC");
var Room_roomWaitingView;
var roomRoomWaitingViewLayer;
Room_roomWaitingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/roomRoomWaitingViewLayer", function (err, prefab) {
            cc.log(err);
            roomRoomWaitingViewLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(roomRoomWaitingViewLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        roomRoomWaitingViewLayer.removeFromParent(true);
    }

});
module.exports = Room_roomWaitingView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_playerHeadLyaerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '05110e7SutKxrcrzkiRA476', 'room_playerHeadLyaerScript');
// scripts/P9/context/4room/2room-StartGame/room_playerHeadLyaerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        headModel: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        //获取头像数量 加载相应头像（虽然是在这里addChild了 但是这是最好的办法了）
        //由于model没有还没完成 先用写好的东西代替

    },

    onFMessage_gameOnResult: function onFMessage_gameOnResult(msg) {
        //加载游戏结果layer

        msg.complete();
    }
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_playerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b7737TLqElMVouUcZxUucxF', 'room_playerScript');
// scripts/P9/context/4room/2room-StartGame/room_playerScript.js

var MVC = require("FWS_MVC");
var playerType = cc.Enum({
    noBody: 0,
    player: 1
});

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //头像
        icon: {
            "default": null,
            type: cc.Sprite
        },
        //名字
        playerName: {
            "default": null,
            type: cc.Label
        },
        //个人信息
        infoLayer: {
            "default": null,
            type: cc.Node
        },
        //我的属性
        //playerNum
        num: -1,
        type: playerType.noBody

    },
    onload: function onload() {
        if (this.type == playerType.noBody) {
            //有一套默认的显示方式
            this.playerName.string = "此桌没人";
            //代表此桌没人
        }
        //根据num来设置position
    },
    //TODO: 设置这个玩家的各种信息
    /*
    * 玩家类型
    *
    * */
    onFMessage_setPlayerInfo: function onFMessage_setPlayerInfo(msg) {}

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_playerView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2b2eaXBPOVP95jtyXn9W46o', 'room_playerView');
// scripts/P9/context/4room/2room-StartGame/room_playerView.js

var MVC = require("FWS_MVC");
var roomplayerView;
roomplayerView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = roomplayerView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_safestController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c0394dZ7DlEELy47TlcvmPh', 'room_safestController');
// scripts/P9/context/4room/8room-safest/room_safestController.js

var MVC = require("FWS_MVC");
var roomSafestController;
roomSafestController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomSafestController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_safestView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2af65Wk+JJC4bjwjPJA9CBp', 'room_safestView');
// scripts/P9/context/4room/8room-safest/room_safestView.js

var MVC = require("FWS_MVC");
var roomSafestView;
var otherTurnLayer;
roomSafestView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/safestLayer", function (err, prefab) {
            cc.log(err);
            otherTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(otherTurnLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        otherTurnLayer.removeFromParent(true);
    }

});
module.exports = roomSafestView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_startGameController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fcf572DCc5O/b7ZyJd4NQMB', 'room_startGameController');
// scripts/P9/context/4room/2room-StartGame/room_startGameController.js

var MVC = require("FWS_MVC");
var roomStartGameController;
roomStartGameController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
    * 说明：
    *   本节点是游戏进行中的数据相关逻辑
    * 流程：
    *   1，等待gameEventNotify 消息
    *       a，说明：负责由服务器发来的被动动作
    *           1），被动动作：服务器让我们执行我们才执行的动作
    *       b，职能：负责切换到某些节点上
    *       c，动作（context节点）包括：
    *           1），定庄
    *           2），发手牌
    *           3），发公共牌
    *   2，等待gameActionReq 消息
    *       a，说明：负责玩家要做的主动动作
    *           1），主动动作：到我自己的时候 我该做什么 轮到别人的时候我该做什么
    *           b，职能：负责切换到某个节点上
    *           c，动作（context）包括
    *               1），轮到自己
    *               2），轮到别人
    *       3，等待游戏房间结束动画播送完毕消息
    *           goto主界面
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    onFMessage_gameEventNotify: function onFMessage_gameEventNotify(msg) {
        if (msg.args.eventType == "DingZhuang") {
            //goto定庄
            MVC.FContextManager.gotoID("Village");
        } else if (msg.args.eventType == "FaShouPai") {
            MVC.FContextManager.gotoID("handSign");
        } else if (msg.args.eventType == "FaGongGongPai") {
            MVC.FContextManager.gotoID("communityCard");
        } else {
            //error event
        }
        msg.complete();
    },
    onFMessage_gameActionReq: function onFMessage_gameActionReq(msg) {
        if (msg.args.actionType == "myAction") {
            MVC.FContextManager.gotoID("myAction");
        } else if (msg.args.actionType == "othersAction") {
            MVC.FContextManager.gotoID("othersAction");
        } else {
            //error action
        }
        msg.complete();
    },
    onFMessage_gameEndingThingsOfView: function onFMessage_gameEndingThingsOfView(msg) {
        //房间结束动画等动作完成后
        MVC.FContextManager.gotoID("myAction");
        msg.complete();
    },
    onFMessage_safestReq: function onFMessage_safestReq(msg) {
        //切换到保险节点
        MVC.FContextManager.gotoID("safest");
        msg.complete();
    },
    onFMessage_gameOnResult: function onFMessage_gameOnResult(msg) {
        //切换到结算节点
        MVC.FContextManager.gotoID("statements");
        msg.complete();
    },
    onFMessage_roomOnEnd: function onFMessage_roomOnEnd(msg) {
        //切换到牌局结束节点
        MVC.FContextManager.gotoID("partyRoomOver");
        msg.complete();
    }

});
module.exports = roomStartGameController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_startGameView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'dee2csAYTVBzrPH8T/lmWED', 'room_startGameView');
// scripts/P9/context/4room/2room-StartGame/room_startGameView.js

var MVC = require("FWS_MVC");
var roomStartGameView;
var playerHeadLayer;
roomStartGameView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
    * 1，请求获取牌桌数据
    *   a, room类型
    *   b, 玩家人数
    *   c, .....
    * */
    onEnterNode: function onEnterNode() {
        //loadscene。。。
        cc.loader.loadRes("TestProfab/playerHeadLayer", function (err, prefab) {
            cc.log(err);
            playerHeadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(playerHeadLayer);
        });
        // cc.director.loadScene("roomScene");
        cc.log("roomScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomStartGameView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_statementsController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '155b0zhrwNPTKhr2o46fzKo', 'room_statementsController');
// scripts/P9/context/4room/9room-statements/room_statementsController.js

var MVC = require("FWS_MVC");
var roomStatementsController;
roomStatementsController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomStatementsController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"room_statementsView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f7eac5z/a5KQIr7WDq2iegR', 'room_statementsView');
// scripts/P9/context/4room/9room-statements/room_statementsView.js

var MVC = require("FWS_MVC");
var roomStatementsView;
var otherTurnLayer;
roomStatementsView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/statementsLayer", function (err, prefab) {
            cc.log(err);
            otherTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(otherTurnLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        otherTurnLayer.removeFromParent(true);
    }

});
module.exports = roomStatementsView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"ruleController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c646eHEuy1HZoA+bp1UuNUn', 'ruleController');
// scripts/P9/context/my/rule/ruleController.js

//规则说明
var MVC = require("FWS_MVC");
var Project = require("Project");
var ruleController;
ruleController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = ruleController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"ruleScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9a5e6XGH7FKnYcAYMVX9frF', 'ruleScript');
// scripts/P9/context/my/rule/ruleScript.js

//规则说明
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"ruleView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '67d1fUm0FVMOoFZkDD3JJGC', 'ruleView');
// scripts/P9/context/my/rule/ruleView.js

//规则说明
var MVC = require("FWS_MVC");
var Project = require("Project");
var ruleView;
ruleView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("ruleScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = ruleView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"setscoreLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'dd485+PZUBOXIDuYFYG9sSR', 'setscoreLayerScript');
// scripts/P9/Liujunhao/roomWaitting/setscoreLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //设置带入记分牌 文字
        titleLabel: {
            "default": null,
            type: cc.Label
        },
        //退出 按钮
        quitBtn: {
            "default": null,
            type: cc.Button
        },
        //滑动条
        slider: {
            "default": null,
            type: cc.Slider
        },
        //第一段 变色
        firstslider: {
            "default": null,
            type: cc.Sprite
        },
        //第二段 变色
        secondslider: {
            "default": null,
            type: cc.Sprite
        },
        //第三段 变色
        thirdslider: {
            "default": null,
            type: cc.Sprite
        },
        //带入数量 文字
        scoreLabel: {
            "default": null,
            type: cc.Label
        },
        //设置带入记分牌（小） 文字
        settakeinLabel: {
            "default": null,
            type: cc.Label
        },
        //最小带入 文字
        mintakein: {
            "default": null,
            type: cc.Label
        },
        //最大带入 文字
        maxtakein: {
            "default": null,
            type: cc.Label
        },
        //开启自动买入 文字
        openautobuyLabel: {
            "default": null,
            type: cc.Label
        },
        //开启自动买入 按钮
        openBtn: {
            "default": null,
            type: cc.Button
        },
        //自动买入变色背景
        openBtnbgSprite: {
            "default": null,
            type: cc.Sprite
        },
        //滑块
        circleSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动买入
        autobuysettingLayer: {
            "default": null,
            type: cc.Layout
        },
        //当我的计分板少于/等于 文字
        scoreless1Label: {
            "default": null,
            type: cc.Label
        },
        //个大盲注时 文字
        scoreless2Label: {
            "default": null,
            type: cc.Label
        },
        //系统自动为我补充 文字
        supplement1Label: {
            "default": null,
            type: cc.Label
        },
        //个buy-in 文字
        supplement2Label: {
            "default": null,
            type: cc.Label
        },
        //减号 按钮
        minusBtn: {
            "default": null,
            type: cc.Button
        },
        //加号 按钮
        addBtn: {
            "default": null,
            type: cc.Button
        },
        //补充buy-in数量
        buyincountLabel: {
            "default": null,
            type: cc.Label
        },
        //确定带入 按钮
        confirmtakeBtn: {
            "default": null,
            type: cc.Button
        },
        //确定带入 文字
        confirmtakeLabel: {
            "default": null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    //退出设置记分牌layer
    quitBtnclick: function quitBtnclick() {
        this.setscoreLayer.node.active = false;
    },
    //slider滑动
    sliderclick: function sliderclick() {
        cc.log("11111111111111111111111111111111111111111111");

        var index = this.slider.progress * 100;
        cc.log(index);

        var width = this.sliderbackground.node.width;
        cc.log(width);

        //四个位置的按钮动画
        var to0Action = cc.moveTo(0.1, cc.p(-width / 2, 0));
        var to33Action = cc.moveTo(0.1, cc.p(-width / 6, 0));
        var to67Action = cc.moveTo(0.1, cc.p(width / 6, 0));
        var to100Action = cc.moveTo(0.1, cc.p(width / 2, 0));

        var handle = this.slider.handle.node;

        //滑动区间判定
        if (index <= 0) {
            handle.runAction(to0Action);
        } else if (index > 100) {
            handle.runAction(to100Action);
        } else if (index > 0 && index <= 17) {
            handle.runAction(to0Action);
        } else if (index > 17 && index <= 50) {
            handle.runAction(to33Action);
        } else if (index > 50 && index <= 83) {
            handle.runAction(to67Action);
        } else if (index > 83 && index <= 100) {
            handle.runAction(to100Action);
        }
    },
    //自动买入按钮开启
    openBtnclick: function openBtnclick() {
        cc.log(openautobuy);
        cc.log("openBtnclick");

        var movewidth = this.circleSprite.node.width / 2;
        var leftmoveaction = cc.moveTo(0.2, cc.p(-movewidth, 0));
        var rightmoveaction = cc.moveTo(0.2, cc.p(movewidth, 0));

        var colorblue = new cc.Color(0, 112, 255);
        var colorgray = new cc.Color(111, 111, 111);

        if (openautobuy === false) {
            cc.log("openautobuy = " + openautobuy);

            this.autobuysettingLayer.node.active = true;

            this.openBtnbgSprite.node.color = colorblue;
            this.circleSprite.node.runAction(rightmoveaction);

            cc.log("发鬼地方", this.openBtnbgSprite.node.color);
            openautobuy = true;
        } else {
            cc.log("openautobuy = " + openautobuy);

            this.autobuysettingLayer.node.active = false;

            this.openBtnbgSprite.node.color = colorgray;

            this.circleSprite.node.runAction(leftmoveaction);

            // cc.log(this.openBtnbgSprite.node.color);

            cc.log("发鬼地方", this.openBtnbgSprite.node.color);
            openautobuy = false;
        }
    },
    //减号按钮点击
    minusBtnclick: function minusBtnclick() {},
    //加号按钮点击
    addBtnclick: function addBtnclick() {},
    //确定带入按钮点击
    confirmtakeBtnclick: function confirmtakeBtnclick() {}

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"settingController":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'aa7c5EwjcZISpAiFaH8JUw+', 'settingController');
// scripts/P9/context/my/setting/settingController.js

//系统设置
var MVC = require("FWS_MVC");
var Project = require("Project");
var settingController;
settingController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = settingController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"settingScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '501ffI4NORBmJM44gmtvF8w', 'settingScript');
// scripts/P9/context/my/setting/settingScript.js

//系统设置
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"settingView":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e55e2C6DiVDB4vKfdcKJKHb', 'settingView');
// scripts/P9/context/my/setting/settingView.js

//系统设置
var MVC = require("FWS_MVC");
var Project = require("Project");
var settingView;
settingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("settingScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = settingView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"shareLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'df999Tg6RlJDoNw0ZdCzdG3', 'shareLayerScript');
// scripts/P9/Liujunhao/roomWaitting/shareLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //退出分享页面按钮
        shareLayerBtn: {
            "default": null,
            type: cc.Button
        },
        //微信分享按钮
        shareVXBtn: {
            "default": null,
            type: cc.Button
        },
        //QQ分享按钮
        shareQQBtn: {
            "default": null,
            type: cc.Button
        },
        //邀请好友 文字
        invitefriendsLabel: {
            "default": null,
            type: cc.Label
        },
        //微信分享 文字
        VXLabel: {
            "default": null,
            type: cc.Label
        },
        //QQ分享 文字
        QQLabel: {
            "default": null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    //微信分享 按钮点击
    shareVXBtnclick: function shareVXBtnclick() {},
    //QQ分享 按钮点击
    shareQQBtnclick: function shareQQBtnclick() {},
    //退出分享界面 按钮点击
    shareLayerBtnclick: function shareLayerBtnclick() {}

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"standardpartyScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'de1f3kdQBJGZaduZf2oucoS', 'standardpartyScript');
// scripts/P9/Maanna/standardpartyScript.js

/*
选择创建标准局页面
 */
var MVC = require("FWS_MVC");
var Project = require("Project");
var P9RoomData = require("P9RoomData");
var P9CreateSettings = require("P9CreateSettings");
var valuearray_SB_BB_EntryFee = []; //存储SB_BB_EntryFee(大小盲 带入记分牌)的数组
var valuearray_PlayerNum = []; //存储PlayerNum上桌人数的数组
var valuearray_PartyTime = []; //存储牌局时长的数组
var valuearray_Ante = [];
var valuearray_DeepRaise = [];

var playernum;
var partytime;
var partyAnte;
var partyDeepRaise;
cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {
        bg: {
            "default": null,
            type: cc.Sprite
        },

        scrollView: {
            "default": null,
            type: cc.ScrollView

        },
        view1: {
            "default": null,
            type: cc.Node
        },
        view2: {
            "default": null,
            type: cc.Node
        },
        view3: {
            "default": null,
            type: cc.Node
        },

        BlindSlider: {
            "default": null,
            type: cc.Slider
        },
        PeopleNumberSlider: {
            "default": null,
            type: cc.Slider
        },
        TimeSlider: {
            "default": null,
            type: cc.Slider
        },
        AnteSlider: {
            "default": null,
            type: cc.Slider
        },
        DeepRaiseSlider: {
            "default": null,
            type: cc.Slider
        },
        //小盲
        sblabel: {
            "default": null,
            type: cc.Label
        },
        //大盲
        bblabel: {
            "default": null,
            type: cc.Label
        },
        //带入记分牌
        scorecardlabel: {
            "default": null,
            type: cc.Label
        },

        //
        //等分线
        line: {
            "default": null,
            type: cc.Sprite
        },
        //牌局时长
        roomTimelabel: {
            "default": null,
            type: cc.Label
        }

    },
    onLoad: function onLoad() {
        this.connect();

        // //请求获取游戏数据配置文件
        var gamedatamsg = new MVC.FMessage("GetP9CreateSettingsSTDDataAck", "root");

        gamedatamsg.send();
    },

    onDestory: function onDestory() {
        this.disconnect();
    },

    //高级选项
    moreoptioncall: function moreoptioncall() {

        this.scrollView.enabled = true;
        this.view2.active = true;
        this.scrollView.scrollToBottom(0.1);
        this.view3.color = new cc.Color(0, 0, 0);
    },
    //收起
    packupcall: function packupcall() {
        this.scrollView.scrollToTop(0.1);
        this.scrollView.enabled = true;
        this.view2.active = false;
        this.view3.color = new cc.Color(20, 32, 78);
    },

    //创建标准局
    standardButtonClick: function standardButtonClick() {

        var roomName = "我的MTT游戏";
        // //房间类型
        var roomType = Project.P9.DATA.GAME.P9RoomType.STD;
        // //房间选项参考P9RoomData.js中的P9STDGameData和P9MTTGameData的属性定义...
        var roomData = new Project.P9.DATA.ROOM.P9MTTGameData();
        Project.FWS.MSG.FWSMessageFactory.roomCreate(roomName, roomType, roomData).send();
    },

    //大小盲注记分牌Slider
    BlindSlidercall: function BlindSlidercall() {

        var percent = this.BlindSlider.progress;
        for (var a = 0; a < valuearray_SB_BB_EntryFee.length; a++) {

            var value_SB = valuearray_SB_BB_EntryFee[a].SB;
            var value_BB = valuearray_SB_BB_EntryFee[a].BB;
            var value_Entry = valuearray_SB_BB_EntryFee[a].EntryFee;
            if (a == 0) {
                if (percent < 1 / ((valuearray_SB_BB_EntryFee.length - 1) * 2)) {

                    this.sblabel.string = value_SB;
                    this.bblabel.string = value_BB;
                    this.scorecardlabel.string = value_Entry;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_SB_BB_EntryFee.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_SB_BB_EntryFee.length - 1) * 2)) {

                    this.sblabel.string = value_SB;
                    this.bblabel.string = value_BB;
                    this.scorecardlabel.string = value_Entry;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.sb = this.sblabel.string; //小盲
                Project.P9.DATA.ROOM.P9STDGameData.bb = this.bblabel.string; //大盲
                Project.P9.DATA.ROOM.P9STDGameData.enterChip = this.scorecardlabel.string; //记分牌

                cc.log(Project.P9.DATA.ROOM.P9STDGameData.sb, Project.P9.DATA.ROOM.P9STDGameData.bb, Project.P9.DATA.ROOM.P9STDGameData.enterChip);
            }
        }
    },
    PeopleNumberSlider1: function PeopleNumberSlider1() {

        var percent = this.PeopleNumberSlider.progress;
        for (var a = 0; a < valuearray_PlayerNum.length; a++) {

            var value_PlayerNum = valuearray_PlayerNum[a];
            cc.log(value_PlayerNum);
            if (a == 0) {
                if (percent < 1 / ((valuearray_PlayerNum.length - 1) * 2)) {

                    this.playernum = value_PlayerNum;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_PlayerNum.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_PlayerNum.length - 1) * 2)) {

                    this.playernum = value_PlayerNum;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.playerCount = this.playernum; //牌桌人数
                cc.log("人数：", Project.P9.DATA.ROOM.P9STDGameData.playerCount);
            }
        }
    },

    TimeSlider1: function TimeSlider1() {

        var percent = this.TimeSlider.progress;
        for (var a = 0; a < valuearray_PartyTime.length; a++) {

            var value_PlayerTime = valuearray_PartyTime[a];
            if (a == 0) {
                if (percent < 1 / ((valuearray_PartyTime.length - 1) * 2)) {

                    this.partytime = value_PlayerTime;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_PartyTime.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_PartyTime.length - 1) * 2)) {

                    this.partytime = value_PlayerTime;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.roomTime = this.partytime;

                cc.log("time", Project.P9.DATA.ROOM.P9STDGameData.roomTime);
            }
        }
    },

    AnteSlidercall: function AnteSlidercall() {
        var percent = this.AnteSlider.progress;
        for (var a = 0; a < valuearray_Ante.length; a++) {

            var value_PlayerAnte = valuearray_Ante[a];
            if (a == 0) {
                if (percent < 1 / ((valuearray_Ante.length - 1) * 2)) {

                    this.partyAnte = value_PlayerAnte;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_Ante.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_Ante.length - 1) * 2)) {

                    this.partyAnte = value_PlayerAnte;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.ante = this.partyAnte;

                cc.log("time", Project.P9.DATA.ROOM.P9STDGameData.ante);
            }
        }
    },

    DeepRaiseSlidercall: function DeepRaiseSlidercall() {
        var percent = this.DeepRaiseSlider.progress;
        for (var a = 0; a < valuearray_DeepRaise.length; a++) {

            var value_DeepRaise = valuearray_DeepRaise[a];
            if (a == 0) {
                if (percent < 1 / ((valuearray_DeepRaise.length - 1) * 2)) {

                    this.partyDeepRaise = value_DeepRaise;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_DeepRaise.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_DeepRaise.length - 1) * 2)) {

                    this.partyDeepRaise = value_DeepRaise;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.deepMode = this.partyDeepRaise;

                cc.log("time", Project.P9.DATA.ROOM.P9STDGameData.deepMode);
            }
        }
    },

    onFMessage_GetP9CreateSettingsSTDDataReq: function onFMessage_GetP9CreateSettingsSTDDataReq(msg) {
        msg.complete();

        var data = msg.args;
        //获取进度条进行几等分数据
        var length_SB_BB_EntryFee = data.SB_BB_EntryFee.length;
        var length_PlayerNum = data.PlayerNum.length;
        var length_PartyTime = data.PartyTime.length;
        var length_Ante = data.Ante.length;
        var length_DeepRaise = data.DeepRaise.length;

        //循环遍历SB_BB_EntryFee 并存入到数组中
        for (var i = 0; i < data.SB_BB_EntryFee.length; i++) {
            valuearray_SB_BB_EntryFee.push(data.SB_BB_EntryFee[i]);
        }
        //循环遍历PlayerNum
        for (var i = 0; i < length_PlayerNum; i++) {
            valuearray_PlayerNum.push(data.PlayerNum[i]);
            // 界面显示牌局人数

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.PlayerNum[i];
            label.fontSize = 20;
            var sliderlength = this.PeopleNumberSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.PeopleNumberSlider.node.getPositionX();
            var sliderpositionY = this.PeopleNumberSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (length_PlayerNum - 1)), sliderpositionY + 10);
            this.view1.addChild(label.node);
        }
        //循环遍历PartyTime
        for (var i = 0; i < data.PartyTime.length; i++) {
            valuearray_PartyTime.push(data.PartyTime[i]);

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.PartyTime[i];
            label.fontSize = 20;
            var sliderlength = this.TimeSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.TimeSlider.node.getPositionX();
            var sliderpositionY = this.TimeSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.PartyTime.length - 1)), sliderpositionY + 10);
            this.view1.addChild(label.node);
        }

        //循环遍历Ante
        for (var i = 0; i < data.Ante.length; i++) {
            valuearray_Ante.push(data.Ante[i]);

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.Ante[i];
            label.fontSize = 20;
            var sliderlength = this.AnteSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.AnteSlider.node.getPositionX();
            var sliderpositionY = this.AnteSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.Ante.length - 1)), sliderpositionY + 10);
            this.view2.addChild(label.node);
        }
        for (var i = 0; i < data.DeepRaise.length; i++) {

            valuearray_DeepRaise.push(data.DeepRaise[i]);

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.DeepRaise[i];
            label.fontSize = 20;
            var sliderlength = this.DeepRaiseSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.DeepRaiseSlider.node.getPositionX();
            var sliderpositionY = this.DeepRaiseSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.DeepRaise.length - 1)), sliderpositionY + 10);
            this.view2.addChild(label.node);
        }
    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","P9CreateSettings":"P9CreateSettings","P9RoomData":"P9RoomData","Project":"Project"}],"tableScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0e70fAtCR1GSrTzlEzCSRmP', 'tableScript');
// scripts/P9/Liujunhao/roomWaitting/tableScript.js

//牌桌prefab
var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        table: {
            "default": null,
            type: cc.Sprite
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    //动画播放
    tableAnimation: function tableAnimation() {

        var animCtrl = this.table.node.getComponent(cc.Animation);
        animCtrl.on('stop', this.onStop, this);
        animCtrl.play("table");
    },
    //动画结束回调
    onStop: function onStop() {
        //动画结束消息

    }

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"testLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '93646eHrhRBz5ZLJJFkxXT4', 'testLayerScript');
// scripts/P9/context/4room/testLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestroy: function onDestroy() {
        this.disconnect();
    },
    dingZhuang: function dingZhuang() {
        var msg2 = new MVC.FMessage("gameEventNotify", "startGame");
        msg2.args.eventType = "DingZhuang";
        msg2.send();
    },
    faShouPai: function faShouPai() {
        var msg2 = new MVC.FMessage("gameEventNotify", "startGame");
        msg2.args.eventType = "FaShouPai";
        msg2.send();
    },
    faGongGongPai: function faGongGongPai() {
        var msg2 = new MVC.FMessage("gameEventNotify", "startGame");
        msg2.args.eventType = "FaGongGongPai";
        msg2.send();
    },
    lunDaoZiJi: function lunDaoZiJi() {
        var msg2 = new MVC.FMessage("gameActionReq", "startGame");
        msg2.args.actionType = "myAction";
        msg2.send();
    },
    lunDaoBieRen: function lunDaoBieRen() {
        var msg2 = new MVC.FMessage("gameActionReq", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    },
    baoXian: function baoXian() {
        var msg2 = new MVC.FMessage("safestReq", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    },
    jieSuan: function jieSuan() {
        var msg2 = new MVC.FMessage("gameOnResult", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    },
    paiJuFangJianJieShu: function paiJuFangJianJieShu() {
        var msg2 = new MVC.FMessage("roomOnEnd", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    }
});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"test":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'be30amlP39IhrRWMEYP91ov', 'test');
// scripts/FWS/test.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"titleScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '29808aNbX1EQqov5SSK8LmL', 'titleScript');
// scripts/P9/Liujunhao/roomWaitting/titleScript.js

//顶部prefab
var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //房间标题 文字
        roomnameLabel: {
            "default": null,
            type: cc.Label
        },
        //返回 按钮
        backBtn: {
            "default": null,
            type: cc.Button
        },

        //解散牌局&减少座位 按钮
        controlroomBtn: {
            "default": null,
            type: cc.Button
        },
        //解散牌局&减少座位 层
        controroomSprite: {
            "default": null,
            type: cc.Sprite
        },
        //减少座位数 文字
        reduceseatLabel: {
            "default": null,
            type: cc.Label
        },
        //减少座位数 按钮
        reduceseatBtn: {
            "default": null,
            type: cc.Button
        },
        //解散当前局 文字
        dissolvegameLabel: {
            "default": null,
            type: cc.Label
        },
        //解散当前局 按钮
        dissolvegameBtn: {
            "default": null,
            type: cc.Button
        },
        //kill 解散牌局&减少座位 按钮
        killcontrolSpriteBtn: {
            "default": null,
            type: cc.Button
        }

    },

    // use this for initialization
    onLoad: function onLoad() {

        //建立连接
        this.connect();
    },
    onDestroy: function onDestroy() {
        cc.log("销毁了 断开连接");
        this.disconnect();
    },

    //返回 按钮点击
    backBtnclick: function backBtnclick() {
        //返回牌局页面消息
    },
    //解散牌局&减少座位 按钮点击
    controlroomBtnclick: function controlroomBtnclick() {},
    //减少座位数 按钮点击
    reduceseatBtnclick: function reduceseatBtnclick() {
        //
    },
    //解散牌局 按钮点击
    dissolvegameBtnclick: function dissolvegameBtnclick() {},
    ////kill 解散牌局&减少座位 按钮点击
    killcontrolSpriteBtnclick: function killcontrolSpriteBtnclick() {}

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"waittingLayerScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '90ff0dg29ZJ3bCKGPxRRwWn', 'waittingLayerScript');
// scripts/P9/Liujunhao/roomWaitting/waittingLayerScript.js

//等待主页面prefab
var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //分享按钮
        shareBtn: {
            "default": null,
            type: cc.Button
        },
        //房间号 文字
        roomnumberLabel: {
            "default": null,
            type: cc.Label
        },
        //分享 文字
        shareLabel: {
            "default": null,
            type: cc.Label
        },
        //牌局简介区域
        gameprofileSprite: {
            "default": null,
            type: cc.Sprite
        },
        //牌局人数 文字
        gamepersonLabel: {
            "default": null,
            type: cc.Label
        },
        //当前牌局人数/牌局人数 文字
        personLabel: {
            "default": null,
            type: cc.Label
        },
        //牌局时长 文字
        timeLabel: {
            "default": null,
            type: cc.Label
        },
        //立即上桌 按钮
        joinBtn: {
            "default": null,
            type: cc.Button
        },
        //立即上桌 文字
        joinLabel: {
            "default": null,
            type: cc.Label
        },
        //开局 按钮
        startBtn: {
            "default": null,
            type: cc.Button
        },
        //开局 文字
        startLabel: {
            "default": null,
            type: cc.Label
        },
        //等待玩家入局 文字
        waitPlayerLabel: {
            "default": null,
            type: cc.Label
        },
        //超时提示 文字
        overtimeLabel: {
            "default": null,
            type: cc.Label
        }

    },

    // use this for initialization
    onLoad: function onLoad() {

        //建立连接
        this.connect();
    },
    onDestroy: function onDestroy() {
        cc.log("销毁了 断开连接");
        this.disconnect();
    },
    //分享 按钮点击
    shareBtnclick: function shareBtnclick() {},
    //立即上桌 按钮点击
    joinBtnclick: function joinBtnclick() {},
    //开局 按钮点击
    startBtnclick: function startBtnclick() {}

});

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"walletController":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0ab82HFLpJOKLu0a2a2RWNp', 'walletController');
// scripts/P9/context/my/wallet/walletController.js

//钱包
var MVC = require("FWS_MVC");
var Project = require("Project");
var walletController;
walletController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    }
});
// //切换钱包界面
// onFMessage_walletBtnclick: function(msg) {
//     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
//     MVC.FContextManager.gotoID("wallet");

//     if(msg){
//         if(msg.args.name = "前往钱包页面"){
//             MVC.FContextManager.gotoID("wallet");
//             msg.complete();
//         }
//     }
// }
// onFMessage_clickLoginButton: function(msg) {
//     if( msg.args.name == "登录"){
//         //进入分享节点
//         cc.log("goto main 前");
//         MVC.FContextManager.gotoID("main");
//         cc.log("goto main 后");
//         //发送消息给网络模块
//     }else if(msg.args.name == "注册"){
//         //进入分享节点
//         // MVC.FContextManager.gotoID("Share");
//         //发送消息给网络模块
//     }

// }

module.exports = walletController;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}],"walletScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'ba453O39gJPl42Fin1NpLho', 'walletScript');
// scripts/P9/context/my/wallet/walletScript.js

//钱包
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{"FWS_MVC":"FWS_MVC"}],"walletView":[function(require,module,exports){
"use strict";
cc._RFpush(module, '24fa8HJFxtE5rFsPtfy5McT', 'walletView');
// scripts/P9/context/my/wallet/walletView.js

//钱包
var MVC = require("FWS_MVC");
var Project = require("Project");
var walletView;
walletView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("walletScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = walletView;

cc._RFpop();
},{"FWS_MVC":"FWS_MVC","Project":"Project"}]},{},["MD5","adsfggsggg","room_playerHeadLyaerScript","LoginView","contactsScript","walletController","LoginController","tableScript","Project","editScript","room_statementsController","room_VillageConroller","myScript","Party_chackSportsPartyinfoView","MainController","mallScript","walletView","masterlevelController","FWS_MSG","titleScript","room_safestView","room_playerView","FSocketRSModel","Party_CreatePartySetController","FEnvironment","myteamView","P9TestCreatorModel","Party_loadingPartyController","playerLayerScript","contactsController","room_myTurnView","gjSceneScript","PartyView","playerHeadScript","masterlevelScript","editView","Party_chackSportsPartyinfoController","room_othersTurnController","masterlevelView","SNGpartyScript","Party_CreatePartyView","invitationcodeScript","mybrandController","partyCreatePartyLoadingLayerScript","P9RoomData","FWebConnectController","roomScript","messageController","Room_roomWaitingScript","MathUtility","settingScript","partyCreateSetLayerScript","P9GameData","room_handSignController","FWS_MVC","MTTSNGWaitingScript","room_handSignView","membershipView","gamestatisticsView","FSocketDistributer","ruleView","membershipController","prefabBodyScript","roomView","room_othersTurnView","LoadingView","myteamScript","FSocketCSModel","achievementController","Party_CreatePartyController","autoLayoutScript","PartyController","FSocketModelAbstract","achievementScript","contactsView","gamestatisticsScript","FSocketPack","mybrandView","room_communityCardView","gamestatisticsController","room_loadingTestScript","room_loadingView","NewScript","Party_joinPartyController","editController","Party_CreatePartySetView","waittingLayerScript","room_myTurnController","testLayerScript","Party_joinPartyView","LoadingController","mallController","FLogInModel","actionLayoutScript","ruleScript","Room_roomWaitingController","invitationcodeController","messageView","room_loadingController","myView","Party_CreatePartyLoadingController","settingController","partyView2","SettlementScript","membershipScript","backgroundLayerScript","AvatarFactory","room_playerScript","MTTpartyScript","walletScript","mybrandScript","test","invitationcodeView","room_safestController","deskScript","room_communityCardController","PartyScript","ruleController","myteamController","SettlementView","gjSceneController","partyLayerScript","room_partyRoomOverController","myController","mallView","achievementView","backOfmy","roomController","setscoreLayerScript","standardpartyScript","room_startGameView","room_partyRoomOverView","FWS_NATIVE_GATEWAY","shareLayerScript","loginScript","joinGameLoadingLayerScript","FSocketController","P9SocketGSModel","settingView","SettlementController","messageScript","gjSceneView","mainScript","MainView","AvatarScript","FWS_MODEL_DATA","LoadingScript","room_VillageView","P9CreateSettings","Party_CreatePartyLoadingView","StringUtils","FWS_MODEL","room_statementsView","Room_roomWaitingView","Party_loadingPartyView","FLanguage","HelloWorld","room_startGameController","room_VillageScript"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IgMi5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L0F2YXRhclN5c3RlbS9BdmF0YXJGYWN0b3J5LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9BdmF0YXJTeXN0ZW0vQXZhdGFyU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvRldTL0ZFbnZpcm9ubWVudC5qcyIsImFzc2V0cy9zY3JpcHRzL0ZXUy9VdGlscy9GTGFuZ3VhZ2UuanMiLCJhc3NldHMvc2NyaXB0cy9GV1MvTW9kZWxzL0ZMb2dJbk1vZGVsLmpzIiwiYXNzZXRzL3NjcmlwdHMvRldTL01vZGVscy9GU29ja2V0Q1NNb2RlbC5qcyIsImFzc2V0cy9zY3JpcHRzL0ZXUy9Db250cm9sbGVyL0ZTb2NrZXRDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvRldTL01vZGVscy9GU29ja2V0RGlzdHJpYnV0ZXIuanMiLCJhc3NldHMvc2NyaXB0cy9GV1MvTW9kZWxzL0ZTb2NrZXRNb2RlbEFic3RyYWN0LmpzIiwiYXNzZXRzL3NjcmlwdHMvRldTL1V0aWxzL0ZTb2NrZXRQYWNrLmpzIiwiYXNzZXRzL3NjcmlwdHMvRldTL01vZGVscy9GU29ja2V0UlNNb2RlbC5qcyIsImFzc2V0cy9zY3JpcHRzL0ZXUy9GV1NfTU9ERUxfREFUQS5qcyIsImFzc2V0cy9zY3JpcHRzL0ZXUy9GV1NfTU9ERUwuanMiLCJhc3NldHMvc2NyaXB0cy9GV1MvRldTX01TRy5qcyIsImFzc2V0cy9zY3JpcHRzL0ZXUy9GV1NfTVZDLmpzIiwiYXNzZXRzL3NjcmlwdHMvRldTL0ZXU19OQVRJVkVfR0FURVdBWS5qcyIsImFzc2V0cy9zY3JpcHRzL0ZXUy9Db250cm9sbGVyL0ZXZWJDb25uZWN0Q29udHJvbGxlci5qcyIsImFzc2V0cy9jcHBKc1Rlc3RTY2VuZS9IZWxsb1dvcmxkLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8wTG9hZGluZy9Mb2FkaW5nQ29udHJvbGxlci5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvMExvYWRpbmcvTG9hZGluZ1NjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvMExvYWRpbmcvTG9hZGluZ1ZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzFMb2dpbi9Mb2dpbkNvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzFMb2dpbi9Mb2dpblZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9GV1MvVXRpbHMvTUQ1LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9NVFRTTkdsb2FkaW5nL01UVFNOR1dhaXRpbmdTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9NYWFubmEvTVRUcGFydHlTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzJtYWluL01haW5Db250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8ybWFpbi9NYWluVmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvQXZhdGFyU3lzdGVtL01hdGhVdGlsaXR5LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvZ2pDb21tZW50L05ld1NjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L0RhdGEvUDlDcmVhdGVTZXR0aW5ncy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L0RhdGEvUDlHYW1lRGF0YS5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L0RhdGEvUDlSb29tRGF0YS5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L01vZGVscy9QOVNvY2tldEdTTW9kZWwuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9Nb2RlbHMvUDlUZXN0Q3JlYXRvck1vZGVsLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvUGFydHlDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvUGFydHlTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS9QYXJ0eVZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS8xY3JlYXRlUGFydHkvMXBhcnR5X0NyZWF0ZVBhcnR5L1BhcnR5X0NyZWF0ZVBhcnR5Q29udHJvbGxlci5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzFjcmVhdGVQYXJ0eS8zcGFydHlfQ3JlYXRlUGFydHlMb2FkaW5nL1BhcnR5X0NyZWF0ZVBhcnR5TG9hZGluZ0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS8xY3JlYXRlUGFydHkvM3BhcnR5X0NyZWF0ZVBhcnR5TG9hZGluZy9QYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmdWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMWNyZWF0ZVBhcnR5LzJwYXJ0eV9DcmVhdGVQYXJ0eVNldC9QYXJ0eV9DcmVhdGVQYXJ0eVNldENvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS8xY3JlYXRlUGFydHkvMnBhcnR5X0NyZWF0ZVBhcnR5U2V0L1BhcnR5X0NyZWF0ZVBhcnR5U2V0Vmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzFjcmVhdGVQYXJ0eS8xcGFydHlfQ3JlYXRlUGFydHkvUGFydHlfQ3JlYXRlUGFydHlWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMmpvaW5QYXJ0eS8ycGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm8vUGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm9Db250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMmpvaW5QYXJ0eS8ycGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm8vUGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm9WaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMmpvaW5QYXJ0eS8xcGFydHlfam9pblBhcnR5L1BhcnR5X2pvaW5QYXJ0eUNvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS8yam9pblBhcnR5LzFwYXJ0eV9qb2luUGFydHkvUGFydHlfam9pblBhcnR5Vmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzJqb2luUGFydHkvMXBhcnR5X2xvYWRpbmdQYXJ0eS9QYXJ0eV9sb2FkaW5nUGFydHlDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMmpvaW5QYXJ0eS8xcGFydHlfbG9hZGluZ1BhcnR5L1BhcnR5X2xvYWRpbmdQYXJ0eVZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9Qcm9qZWN0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS9hMnJvb20tcm9vbVdhaXRpbmcvUm9vbV9yb29tV2FpdGluZ0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tL2Eycm9vbS1yb29tV2FpdGluZy9Sb29tX3Jvb21XYWl0aW5nU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS9hMnJvb20tcm9vbVdhaXRpbmcvUm9vbV9yb29tV2FpdGluZ1ZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9NYWFubmEvU05HcGFydHlTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L1NldHRsZW1lbnQvU2V0dGxlbWVudENvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L1NldHRsZW1lbnQvU2V0dGxlbWVudFNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvU2V0dGxlbWVudC9TZXR0bGVtZW50Vmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL0ZXUy9VdGlscy9TdHJpbmdVdGlscy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvYWNoaWV2ZW1lbnQvYWNoaWV2ZW1lbnRDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9hY2hpZXZlbWVudC9hY2hpZXZlbWVudFNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvYWNoaWV2ZW1lbnQvYWNoaWV2ZW1lbnRWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvTGl1anVuaGFvL3Jvb21XYWl0dGluZy9hY3Rpb25MYXlvdXRTY3JpcHQuanMiLCJhc3NldHMvcmVzb3VyY2VzL3NjcmlwdC9hZHNmZ2dzZ2dnLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvTGl1anVuaGFvL3Jvb21XYWl0dGluZy9hdXRvTGF5b3V0U2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9iYWNrT2ZteS5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L0xpdWp1bmhhby9yb29tV2FpdHRpbmcvYmFja2dyb3VuZExheWVyU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9jb250YWN0cy9jb250YWN0c0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L2NvbnRhY3RzL2NvbnRhY3RzU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9jb250YWN0cy9jb250YWN0c1ZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tL2Rlc2tTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L2VkaXQvZWRpdENvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L2VkaXQvZWRpdFNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvZWRpdC9lZGl0Vmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvZ2FtZXN0YXRpc3RpY3MvZ2FtZXN0YXRpc3RpY3NDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9nYW1lc3RhdGlzdGljcy9nYW1lc3RhdGlzdGljc1NjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvZ2FtZXN0YXRpc3RpY3MvZ2FtZXN0YXRpc3RpY3NWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvZ2pEaXIvZ2pTY2VuZUNvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9nakRpci9nalNjZW5lU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvZ2pEaXIvZ2pTY2VuZVZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L2ludml0YXRpb25jb2RlL2ludml0YXRpb25jb2RlQ29udHJvbGxlci5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvaW52aXRhdGlvbmNvZGUvaW52aXRhdGlvbmNvZGVTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L2ludml0YXRpb25jb2RlL2ludml0YXRpb25jb2RlVmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzJqb2luUGFydHkvMXBhcnR5X2xvYWRpbmdQYXJ0eS9qb2luR2FtZUxvYWRpbmdMYXllclNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvTG9naW4vbG9naW5TY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L21haW4vbWFpblNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvbWFsbC9tYWxsQ29udHJvbGxlci5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvbWFsbC9tYWxsU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9tYWxsL21hbGxWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9tYXN0ZXJsZXZlbC9tYXN0ZXJsZXZlbENvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L21hc3RlcmxldmVsL21hc3RlcmxldmVsU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9tYXN0ZXJsZXZlbC9tYXN0ZXJsZXZlbFZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L21lbWJlcnNoaXAvbWVtYmVyc2hpcENvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L21lbWJlcnNoaXAvbWVtYmVyc2hpcFNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvbWVtYmVyc2hpcC9tZW1iZXJzaGlwVmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvbWVzc2FnZS9tZXNzYWdlQ29udHJvbGxlci5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvbWVzc2FnZS9tZXNzYWdlU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9tZXNzYWdlL21lc3NhZ2VWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9teUNvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L215U2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9teVZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L215YnJhbmQvbXlicmFuZENvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L215YnJhbmQvbXlicmFuZFNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvbXlicmFuZC9teWJyYW5kVmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvbXl0ZWFtL215dGVhbUNvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L215dGVhbS9teXRlYW1TY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L215dGVhbS9teXRlYW1WaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMWNyZWF0ZVBhcnR5LzNwYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmcvcGFydHlDcmVhdGVQYXJ0eUxvYWRpbmdMYXllclNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzFjcmVhdGVQYXJ0eS8ycGFydHlfQ3JlYXRlUGFydHlTZXQvcGFydHlDcmVhdGVTZXRMYXllclNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5L3BhcnR5TGF5ZXJTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L3BhcnR5L3BhcnR5VmlldzIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzJyb29tLVN0YXJ0R2FtZS9wbGF5ZXJIZWFkU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvU2FuZ0hvbmdMdURpci9wbGF5ZXJMYXllclNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L1NhbmdIb25nTHVEaXIvcHJlZmFiQm9keVNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vcm9vbUNvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tL3Jvb21TY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tL3Jvb21WaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS8zcm9vbS1WaWxsYWdlL3Jvb21fVmlsbGFnZUNvbnJvbGxlci5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vM3Jvb20tVmlsbGFnZS9yb29tX1ZpbGxhZ2VTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzNyb29tLVZpbGxhZ2Uvcm9vbV9WaWxsYWdlVmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vNXJvb20tY29tbXVuaXR5Q2FyZC9yb29tX2NvbW11bml0eUNhcmRDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS81cm9vbS1jb21tdW5pdHlDYXJkL3Jvb21fY29tbXVuaXR5Q2FyZFZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzRyb29tLWhhbmRTaWduL3Jvb21faGFuZFNpZ25Db250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS80cm9vbS1oYW5kU2lnbi9yb29tX2hhbmRTaWduVmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vMXJvb20tbG9hZGluZy9yb29tX2xvYWRpbmdDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS8xcm9vbS1sb2FkaW5nL3Jvb21fbG9hZGluZ1Rlc3RTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzFyb29tLWxvYWRpbmcvcm9vbV9sb2FkaW5nVmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vNnJvb20tbXlUdXJuL3Jvb21fbXlUdXJuQ29udHJvbGxlci5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vNnJvb20tbXlUdXJuL3Jvb21fbXlUdXJuVmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vN3Jvb20tb3RoZXJzVHVybi9yb29tX290aGVyc1R1cm5Db250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS83cm9vbS1vdGhlcnNUdXJuL3Jvb21fb3RoZXJzVHVyblZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tL2Excm9vbS1wYXJ0eVJvb21PdmVyL3Jvb21fcGFydHlSb29tT3ZlckNvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tL2Excm9vbS1wYXJ0eVJvb21PdmVyL3Jvb21fcGFydHlSb29tT3ZlclZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzJyb29tLVN0YXJ0R2FtZS9yb29tX3BsYXllckhlYWRMeWFlclNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vMnJvb20tU3RhcnRHYW1lL3Jvb21fcGxheWVyU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS8ycm9vbS1TdGFydEdhbWUvcm9vbV9wbGF5ZXJWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS84cm9vbS1zYWZlc3Qvcm9vbV9zYWZlc3RDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS84cm9vbS1zYWZlc3Qvcm9vbV9zYWZlc3RWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS8ycm9vbS1TdGFydEdhbWUvcm9vbV9zdGFydEdhbWVDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS8ycm9vbS1TdGFydEdhbWUvcm9vbV9zdGFydEdhbWVWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC80cm9vbS85cm9vbS1zdGF0ZW1lbnRzL3Jvb21fc3RhdGVtZW50c0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzlyb29tLXN0YXRlbWVudHMvcm9vbV9zdGF0ZW1lbnRzVmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvcnVsZS9ydWxlQ29udHJvbGxlci5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvcnVsZS9ydWxlU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9ydWxlL3J1bGVWaWV3LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvTGl1anVuaGFvL3Jvb21XYWl0dGluZy9zZXRzY29yZUxheWVyU2NyaXB0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9zZXR0aW5nL3NldHRpbmdDb250cm9sbGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvY29udGV4dC9teS9zZXR0aW5nL3NldHRpbmdTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L3NldHRpbmcvc2V0dGluZ1ZpZXcuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9MaXVqdW5oYW8vcm9vbVdhaXR0aW5nL3NoYXJlTGF5ZXJTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9NYWFubmEvc3RhbmRhcmRwYXJ0eVNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L0xpdWp1bmhhby9yb29tV2FpdHRpbmcvdGFibGVTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tL3Rlc3RMYXllclNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL0ZXUy90ZXN0LmpzIiwiYXNzZXRzL3NjcmlwdHMvUDkvTGl1anVuaGFvL3Jvb21XYWl0dGluZy90aXRsZVNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L0xpdWp1bmhhby9yb29tV2FpdHRpbmcvd2FpdHRpbmdMYXllclNjcmlwdC5qcyIsImFzc2V0cy9zY3JpcHRzL1A5L2NvbnRleHQvbXkvd2FsbGV0L3dhbGxldENvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L3dhbGxldC93YWxsZXRTY3JpcHQuanMiLCJhc3NldHMvc2NyaXB0cy9QOS9jb250ZXh0L215L3dhbGxldC93YWxsZXRWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMzJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOWpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDemxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2I3NjNmdjc1eUZIUzdYTGNVNmlBcit4JywgJ0F2YXRhckZhY3RvcnknKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9BdmF0YXJTeXN0ZW0vQXZhdGFyRmFjdG9yeS5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgTWF0aFV0aWxpdHkgPSByZXF1aXJlKFwiTWF0aFV0aWxpdHlcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v5aS05YOP5oyJ6ZKuXG4gICAgICAgIEF2YXRhckJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/nqbrkvY3mloflrZdcbiAgICAgICAga29uZzoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+WAkuiuoeaXtueahOiDjOaZr1xuICAgICAgICBiYXJCZzoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/lgJLorqHml7bnmoTlnIhcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXJcbiAgICAgICAgfSxcbiAgICAgICAgLy/lpLTlg4/nmoTovb3kvZNcbiAgICAgICAgQXZhdGFyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+WQjeWtl+eahOi9veS9k1xuICAgICAgICBuYW1lTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/miL/kuLvnmoTmoIforrDngrlcbiAgICAgICAgZGlhbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/lnIblvaLnmoToioLngrlcbiAgICAgICAgbWFzazoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5NYXNrXG4gICAgICAgIH0sXG4gICAgICAgIC8v5byD54mM55qE6IOM5pmvXG4gICAgICAgIHFpcGFpQmc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIC8v5byD54mM55qE5paH5a2XXG4gICAgICAgIHFpUGFpTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/lgJLorqHml7bml7bljYrpgI/mmI7nmoTngbDoibLpga7nvalcbiAgICAgICAgc2hhZG93OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+WAkuiuoeaXtueahOaWh+Wtl1xuICAgICAgICBCYXJOdW06IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MubG9nKFwic2NoZWR1bGXlm57osIPosIPnlKjkuoZcIik7XG5cbiAgICAgICAgLy8gdmFyIGtrID0gbmV3IE1hdGhVdGlsaXR5KCk7XG4gICAgICAgIC8vIHRoaXMuQmFyTnVtLm5vZGUuc2V0UG9zaXRpb24oY2MucCgyMCwzMCkpO1xuICAgICAgICAvLyB0aGlzLkF2YXRhci5ub2RlLnNldFBvc2l0aW9uKGNjLnAoNDAsNTApKTtcbiAgICAgICAgLy8gdmFyIHNzPWtrLkdldEFuZ2xlKGNjLnAoLTMxNywyMzMpLGNjLnAoMzE3LDIzMykpO1xuICAgICAgICAvLyBjYy5sb2coXCLmiJHnmoTlpKnlk6pcIixzcyk7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICAvL3RoaXMuaW5pdFR5cGVMb2NhdGlvbigpO1xuICAgIH0sXG4gICAgb25EZXN0b3J5OiBmdW5jdGlvbiBvbkRlc3RvcnkoKSB7XG4gICAgICAgIGNjLmxvZyhcIndvIGJlaSBzaGFuIGNodSBsZSBcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH0sXG4gICAgLy/liJ3lp4vljJZcbiAgICBpbml0VHlwZTogZnVuY3Rpb24gaW5pdFR5cGUoKSB7XG4gICAgICAgIHRoaXMuQXZhdGFyQnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb25nLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iYXJCZy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLkF2YXRhci5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubmFtZUxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaWFuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5xaXBhaUJnLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5xaVBhaUxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaGFkb3cubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLkJhck51bS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICAvL+WKoOWFpeeJjOWxgOaXtuWAmeeahOWIneWni+WMllxuICAgIGluaXRUeXBlSm9pblBhcnR5OiBmdW5jdGlvbiBpbml0VHlwZUpvaW5QYXJ0eSgpIHtcbiAgICAgICAgY2MubG9nKFwid2FuYXdkYXNqZGtoYXNrZGpoYVwiKTtcbiAgICAgICAgLy/nvKnlsI9cbiAgICAgICAgdGhpcy5BdmF0YXJCdXR0b24ubm9kZS5zY2FsZSA9IDAuODtcbiAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmFtZUxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFyQmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8v5LiK5qGM5pe25YCZ55qE5Yid5aeL5YyWXG4gICAgaW5pdFR5cGVTZXJ2ZTogZnVuY3Rpb24gaW5pdFR5cGVTZXJ2ZSgpIHtcbiAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmFtZUxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFyQmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8v56m65bqn5L2N55qE5Yid5aeL5YyWXG4gICAgaW5pdFR5cGVOdWxsOiBmdW5jdGlvbiBpbml0VHlwZU51bGwoKSB7XG4gICAgICAgIHRoaXMuYmFyQmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5BdmF0YXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8v5YCS6K6h5pe25pe255qE5Yid5aeL5YyWXG4gICAgaW5pdFR5cGVQcm9ncmVzc0JhcjogZnVuY3Rpb24gaW5pdFR5cGVQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgdGhpcy5kaWFuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucWlwYWlCZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLy/lvIPniYzml7bnmoTliJ3lp4vljJZcbiAgICBpbml0VHlwZUNoZXNzOiBmdW5jdGlvbiBpbml0VHlwZUNoZXNzKCkge1xuICAgICAgICB0aGlzLmJhckJnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlhbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoYWRvdy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLy/lrprluqfvvIjmraPluLjooYzniYzvvInml7bnmoTliJ3lp4vljJZcbiAgICBpbml0VHlwZUxvY2F0aW9uOiBmdW5jdGlvbiBpbml0VHlwZUxvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLmJhckJnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlhbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljaygpIHtcbiAgICAgICAgY2MubG9nKFwic2FkYXNkYXNkYVwiKTtcbiAgICB9LFxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICBvbkZNZXNzYWdlX0F2YXRhcjogZnVuY3Rpb24gb25GTWVzc2FnZV9BdmF0YXIobXNnKSB7XG4gICAgICAgIGlmIChtc2cuYXJncy5uYW1lID09IHRoaXMubm9kZS5uYW1lKSB7XG4gICAgICAgICAgICBpZiAobXNnLmFyZ3MubmFtZSA9PSBcImluaXRUeXBlTG9jYXRpb25cIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFR5cGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUeXBlTG9jYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cuYXJncy5uYW1lID09IFwiaW5pdFR5cGVDaGVzc1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFR5cGVDaGVzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZy5hcmdzLm5hbWUgPT0gXCJpbml0VHlwZVByb2dyZXNzQmFyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VHlwZVByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5rYXFpZGluZ3NoaXFpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLmFyZ3MubmFtZSA9PSBcImluaXRUeXBlTnVsbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFR5cGVOdWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLmFyZ3MubmFtZSA9PSBcImluaXRUeXBlU2VydmVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFR5cGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUeXBlU2VydmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cuYXJncy5uYW1lID09IFwiaW5pdFR5cGVKb2luUGFydHlcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFR5cGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUeXBlSm9pblBhcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgX3VwZGF0ZVByb2dyZXNzQmFyOiBmdW5jdGlvbiBfdXBkYXRlUHJvZ3Jlc3NCYXIocHJvZ3Jlc3NCYXIsIGR0KSB7XG4gICAgICAgIGNjLmxvZyhcIuWbnuiwg+iwg+eUqOS6hlwiKTtcbiAgICAgICAgdmFyIHByb2dyZXNzID0gcHJvZ3Jlc3NCYXIucHJvZ3Jlc3M7XG4gICAgICAgIC8vdmFyIHByb2dyZXNzID0gMTtcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMS4wICYmIHRoaXMuX3Bpbmdwb25nKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLlm57osIPosIPnlKjkuoYxMTExMVwiKTtcbiAgICAgICAgICAgIC8vIHByb2dyZXNzICs9IGR0ICogdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHByb2dyZXNzICs9IDAuMDA3MTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuWbnuiwg+iwg+eUqOS6hjIyMjIyXCIpO1xuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MgLT0gZHQgKiB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgcHJvZ3Jlc3MgLT0gMC4wMDcxO1xuICAgICAgICAgICAgdGhpcy5fcGluZ3BvbmcgPSBwcm9ncmVzcyA8PSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuQmFyTnVtLnN0cmluZz1wYXJzZUludChwcm9ncmVzcyoxMCk7XG4gICAgICAgIHRoaXMuQmFyTnVtLnN0cmluZyA9IHBhcnNlSW50KGR0KTtcbiAgICAgICAgcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICB9LFxuICAgIGthcWlkaW5nc2hpcWk6IGZ1bmN0aW9uIGthcWlkaW5nc2hpcWkoKSB7XG4gICAgICAgIHZhciBkdCA9IDE1O1xuICAgICAgICB0aGlzLl9waW5ncG9uZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MubG9nKFwic2NoZWR1bGXlm57osIPosIPnlKjkuoZcIik7XG4gICAgICAgICAgICBkdCAtPSAwLjE7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0Jhcih0aGlzLnByb2dyZXNzQmFyLCBkdCk7XG4gICAgICAgIH0sIDAuMSwgMTQwKTtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZWFlMjlyWjYwaEIwTGJESHBhdFFkbnknLCAnQXZhdGFyU2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvQXZhdGFyU3lzdGVtL0F2YXRhclNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG4vL+S4iuahjOaVsFxudmFyIHNoYW5nWmh1b051bTtcbnZhciB6aHVuQmVpTnVtO1xudmFyIHpodW5CZWlBcnJheSA9IFtdO1xudmFyIE1hdGhVdGlsaXR5ID0gcmVxdWlyZShcIk1hdGhVdGlsaXR5XCIpO1xuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBBdmF0YXJQcmVmYWI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbFZpZXc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xuICAgICAgICB9LFxuICAgICAgICAvLyBob3Jpem9udGFsQmFyOiB7XG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy/lvZPliY3mmK/lh6DkurrmoYxcbiAgICAgICAgc2VhdE51bTogOSxcbiAgICAgICAgLy/lt6bkvqfnmoRY5Z2Q5qCHXG4gICAgICAgIGxlZnRQb3NpdGlvblg6IC0zMTAsXG4gICAgICAgIC8v5Y+z5L6n55qEWOWdkOagh1xuICAgICAgICByaWdodFBvc2l0aW9uWDogMzEwLFxuICAgICAgICAvL+S4iumdouW3puS+p+eahHjlnZDmoIdcbiAgICAgICAgdXBQb3NpdGlvblhfc2h1YW5nbDogLTE1MSxcbiAgICAgICAgLy/kuIrpnaLlj7PkvqfnmoR45Z2Q5qCHXG4gICAgICAgIHVwUG9zaXRpb25YX3NodWFuZ3I6IDE1MSxcbiAgICAgICAgLy/kuIrpnaLkuIDkuKrkurrml7blgJl45Z2Q5qCHXG4gICAgICAgIHVwUG9zaXRpb25YX2RhbjogMCxcbiAgICAgICAgLy/kuIrpnaJZ5Z2Q5qCHXG4gICAgICAgIHVwUG9zaXRpb25ZOiA1MjcsXG4gICAgICAgIC8v5LiL6Z2ieOWdkOagh1xuICAgICAgICBkb3duUG9zaXRpb25YOiAwLFxuICAgICAgICAvL+S4i+mdonnlnZDmoIdcbiAgICAgICAgZG93blBvc2l0aW9uWTogLTQ4MCxcbiAgICAgICAgLy/lt6blj7NZ5Z2Q5qCH55qE5pyA5aSn5YC8XG4gICAgICAgIHVwTWF4UG9zaXRpb246IDMxMCxcbiAgICAgICAgLy/lt6blj7NZ5Z2Q5qCH55qE5pyA5bCP5YC8XG4gICAgICAgIGRvd25NYXhQb3NpdGlvbjogLTE3MCxcbiAgICAgICAgLy/op4LnnIvnmoTkurrmlbBcbiAgICAgICAgbG9va09uTnVtOiAwLFxuICAgICAgICAvL+S4iuahjOeahOS6uuaVsFxuICAgICAgICBwbGF5TnVtOiAwLFxuICAgICAgICAvL+S4iuahjOS6uuaVsOS4reacgOmrmOeahFxuICAgICAgICB1cEJlZFRhYmxlTWF4OiAyMTUsXG4gICAgICAgIC8v5LiK5qGM5Lq65pWw5Lit5pyA5L2O55qEXG4gICAgICAgIGRvd25CZWRUYWJsZU1heDogMTE1LFxuICAgICAgICAvL+WchuW/g+eCuVxuICAgICAgICBQb2ludFA6IGNjLnAoMCwgNjcwKSxcbiAgICAgICAgLy/lgY/ovazop5LluqZcbiAgICAgICAgYW5nbGU6IDAuMDE3NDUzMixcbiAgICAgICAgLy/ljYrlvoTplb/luqZcbiAgICAgICAgZGlzdGFuY2U6IDU1NVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNjcm9sbFZpZXcpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgICAgIHNoYW5nWmh1b051bSA9IHRoaXMucGxheU51bTtcbiAgICAgICAgemh1bkJlaU51bSA9IDA7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm5ld1NlYXQoKTtcbiAgICAgICAgdGhpcy5uZXdCZWRUYWJsZSgpO1xuICAgIH0sXG4gICAgb25EZXN0b3J5OiBmdW5jdGlvbiBvbkRlc3RvcnkoKSB7XG5cbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfSxcbiAgICAvL+WIm+W7uueJjOahjOS4iueahOepuuS9jVxuICAgIG5ld1NlYXQ6IGZ1bmN0aW9uIG5ld1NlYXQoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWF0TnVtOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5BdmF0YXJQcmVmYWIpO1xuICAgICAgICAgICAgbmV3U3Rhci5uYW1lID0gXCJpbml0VHlwZU51bGxcIjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcbiAgICAgICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5zZXRTZWF0UG9zaXRpb24oaSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtc2cxID0gbmV3IE1WQy5GTWVzc2FnZShcIkF2YXRhclwiLCBcInJvb3RcIik7XG4gICAgICAgIG1zZzEuYXJncy5uYW1lID0gXCJpbml0VHlwZU51bGxcIjtcbiAgICAgICAgbXNnMS5zZW5kKCk7XG4gICAgfSxcbiAgICAvL+i/lOWbnuiuvue9ruaLjeahjOS4iuepuuW6p+S9jeeahOS9jee9rlxuICAgIHNldFNlYXRQb3NpdGlvbjogZnVuY3Rpb24gc2V0U2VhdFBvc2l0aW9uKGkpIHtcbiAgICAgICAgdmFyIHBYID0gMDtcbiAgICAgICAgdmFyIHBZID0gMDtcbiAgICAgICAgaWYgKHRoaXMuc2VhdE51bSAlIDIgPT0gMCkge1xuICAgICAgICAgICAgY2MubG9nKFwi56ys5LiA5LiqXCIpO1xuICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5zZWF0TnVtIC8gMiB8fCBpID09IDApIHtcbiAgICAgICAgICAgICAgICBwWCA9IHRoaXMuZG93blBvc2l0aW9uWDtcblxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcFkgPSB0aGlzLmRvd25Qb3NpdGlvblk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcFkgPSB0aGlzLnVwUG9zaXRpb25ZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+IDAgJiYgaSA8IHRoaXMuc2VhdE51bSAvIDIpIHtcbiAgICAgICAgICAgICAgICBwWCA9IHRoaXMucmlnaHRQb3NpdGlvblg7XG4gICAgICAgICAgICAgICAgcFkgPSAodGhpcy51cE1heFBvc2l0aW9uIC0gdGhpcy5kb3duTWF4UG9zaXRpb24pIC8gKHRoaXMuc2VhdE51bSAvIDIpICogaSArIHRoaXMuZG93bk1heFBvc2l0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwWCA9IHRoaXMubGVmdFBvc2l0aW9uWDtcbiAgICAgICAgICAgICAgICBwWSA9ICh0aGlzLnVwTWF4UG9zaXRpb24gLSB0aGlzLmRvd25NYXhQb3NpdGlvbikgLyAodGhpcy5zZWF0TnVtIC8gMikgKiAodGhpcy5zZWF0TnVtIC0gaSkgKyB0aGlzLmRvd25NYXhQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXROdW0gJSAyID09IDEpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuesrOS6jOS4qlwiKTtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJpPTBcIik7XG4gICAgICAgICAgICAgICAgcFggPSB0aGlzLmRvd25Qb3NpdGlvblg7XG4gICAgICAgICAgICAgICAgcFkgPSB0aGlzLmRvd25Qb3NpdGlvblk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCB0aGlzLnNlYXROdW0gLyAyICsgMSAmJiBpID4gdGhpcy5zZWF0TnVtIC8gMiAtIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHRoaXMuc2VhdE51bSAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcFggPSB0aGlzLnVwUG9zaXRpb25YX3NodWFuZ3I7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcFggPSB0aGlzLnVwUG9zaXRpb25YX3NodWFuZ2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBZID0gdGhpcy51cFBvc2l0aW9uWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+IDAgJiYgaSA8IHRoaXMuc2VhdE51bSAvIDIgLSAxKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiaT16dW9cIik7XG4gICAgICAgICAgICAgICAgcFggPSB0aGlzLnJpZ2h0UG9zaXRpb25YO1xuICAgICAgICAgICAgICAgIHBZID0gKHRoaXMudXBNYXhQb3NpdGlvbiAtIHRoaXMuZG93bk1heFBvc2l0aW9uKSAvICh0aGlzLnNlYXROdW0gLyAyKSAqIGkgKyB0aGlzLmRvd25NYXhQb3NpdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiaT15b3VcIik7XG4gICAgICAgICAgICAgICAgcFggPSB0aGlzLmxlZnRQb3NpdGlvblg7XG4gICAgICAgICAgICAgICAgcFkgPSAodGhpcy51cE1heFBvc2l0aW9uIC0gdGhpcy5kb3duTWF4UG9zaXRpb24pIC8gKHRoaXMuc2VhdE51bSAvIDIpICogKHRoaXMuc2VhdE51bSAtIGkpICsgdGhpcy5kb3duTWF4UG9zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2MubG9nKFwieFwiLHBYKTtcbiAgICAgICAgLy8gY2MubG9nKFwieVwiLHBZKTtcbiAgICAgICAgcmV0dXJuIGNjLnAocFgsIHBZKTtcbiAgICB9LFxuICAgIG5ld0JlZFRhYmxlOiBmdW5jdGlvbiBuZXdCZWRUYWJsZSgpIHtcbiAgICAgICAgdmFyIGFkZCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgICAgaWYgKGFkZCA9PSAwIHx8IGFkZCA9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhbmdaaHVvTnVtOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQXZhdGFyUHJlZmFiKTtcbiAgICAgICAgICAgICAgICBuZXdTdGFyLm5hbWUgPSBcImluaXRUeXBlU2VydmVcIjtcbiAgICAgICAgICAgICAgICBuZXdTdGFyLnRhZyA9IDEwMCArIGk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICAgICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5zZXRCZWRUYWJsZShpKSk7XG4gICAgICAgICAgICAgICAgdmFyIG1zZzEgPSBuZXcgTVZDLkZNZXNzYWdlKFwiQXZhdGFyXCIsIFwicm9vdFwiKTtcbiAgICAgICAgICAgICAgICBtc2cxLmFyZ3MubmFtZSA9IFwiaW5pdFR5cGVTZXJ2ZVwiO1xuICAgICAgICAgICAgICAgIG1zZzEuc2VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkF2YXRhclByZWZhYik7XG4gICAgICAgICAgICBuZXdTdGFyLm5hbWUgPSBcImluaXRUeXBlU2VydmVcIjtcbiAgICAgICAgICAgIG5ld1N0YXIudGFnID0gMTAwICsgYWRkO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLnNldEJlZFRhYmxlKGFkZCkpO1xuICAgICAgICAgICAgdmFyIG1zZzEgPSBuZXcgTVZDLkZNZXNzYWdlKFwiQXZhdGFyXCIsIFwicm9vdFwiKTtcbiAgICAgICAgICAgIG1zZzEuYXJncy5uYW1lID0gXCJpbml0VHlwZVNlcnZlXCI7XG4gICAgICAgICAgICBtc2cxLnNlbmQoKTtcbiAgICAgICAgICAgIC8vbmV3U3Rhci5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRCZWRUYWJsZTogZnVuY3Rpb24gc2V0QmVkVGFibGUoaSkge1xuICAgICAgICAvL+avj+S4quWktOWDj+S5i+mXtOebuOW3rueahOinkuW6pu+8iDM2MOW6pueahOiusOazle+8iVxuICAgICAgICB2YXIgamlhb2R1O1xuICAgICAgICAvL+aAu+aVsOS4uuWNleWPjOaXtuesrOS4gOS4quWktOWDj+eahOS9jee9rlxuICAgICAgICB2YXIgc3RhcnRQb3NpdG9uO1xuICAgICAgICBpZiAoc2hhbmdaaHVvTnVtICUgMiA9PSAwKSB7XG4gICAgICAgICAgICBqaWFvZHUgPSAxMi44NTc7XG4gICAgICAgICAgICBzdGFydFBvc2l0b24gPSAyMjUgKyBqaWFvZHUgKiBwYXJzZUludCgoOCAtIHNoYW5nWmh1b051bSkgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGppYW9kdSA9IDExLjI1O1xuICAgICAgICAgICAgc3RhcnRQb3NpdG9uID0gMjI1ICsgamlhb2R1ICogcGFyc2VJbnQoKDkgLSBzaGFuZ1podW9OdW0pIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKFwic3RhcnRQb3NpdG9uXCIsIGkgKiBqaWFvZHUgKyBzdGFydFBvc2l0b24pO1xuICAgICAgICB2YXIgVGVtcG9yYXJ5ID0gbmV3IE1hdGhVdGlsaXR5KCk7XG4gICAgICAgIGNjLmxvZyhUZW1wb3JhcnkuR2V0UG9zaXRpb24odGhpcy5Qb2ludFAsIGkgKiBqaWFvZHUgKyBzdGFydFBvc2l0b24sIHRoaXMuZGlzdGFuY2UpKTtcbiAgICAgICAgcmV0dXJuIFRlbXBvcmFyeS5HZXRQb3NpdGlvbih0aGlzLlBvaW50UCwgaSAqIGppYW9kdSArIHN0YXJ0UG9zaXRvbiwgdGhpcy5kaXN0YW5jZSk7XG4gICAgfSxcbiAgICBjbGlja3NpZ25VcEJ1dHRvbjogZnVuY3Rpb24gY2xpY2tzaWduVXBCdXR0b24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwiTVRUU05HY2xpY2tzaWduVXBCdXR0b25cIiwgXCJyb29tXCIpO1xuICAgICAgICBtc2cuYXJncy5uYW1lID0gXCJNVFRTTkdjbGlja3NpZ25VcEJ1dHRvbui/m+WFpeWAkuiuoeaXtlwiO1xuICAgICAgICBtc2cuc2VuZCgpO1xuICAgICAgICBjYy5sb2coXCJjbGlja3NpZ25VcEJ1dHRvblwiKTtcbiAgICB9LFxuICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljaygpIHtcbiAgICAgICAgaWYgKHNoYW5nWmh1b051bSA8IDkpIHtcbiAgICAgICAgICAgIHNoYW5nWmh1b051bSsrO1xuICAgICAgICAgICAgdGhpcy5zaGFuZ3podW9BY3Rpb24oKTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVMb29rT24oMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v5ri45oiP5byA5aeL5pe25LiK5qGM55qE5Yqo55S7XG4gICAgY2xpY2trYWlqdTogZnVuY3Rpb24gY2xpY2trYWlqdSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFuZ1podW9OdW07IGkrKykge1xuICAgICAgICAgICAgdmFyIGFjdGlvbkJ5ID0gY2MubW92ZVRvKDAuNSwgdGhpcy5zZXRTZWF0UG9zaXRpb24oaSkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlUYWcoMTAwICsgaSkucnVuQWN0aW9uKGFjdGlvbkJ5KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/kuIrmoYznmoTliqjnlLtcbiAgICBzaGFuZ3podW9BY3Rpb246IGZ1bmN0aW9uIHNoYW5nemh1b0FjdGlvbigpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIOS4gOS4quS6uueahOaXtuWAmeayoeacieWKqOeUu1xuICAgICAgICAgICAg5aSa5Lq655qE5pe25YCZ5YWI5pi+56S65paw5Yqg5YWl55qE5Lq677yM54S25ZCO5LmL5YmN55qE5Lq656e75YqoXG4gICAgICAgICovXG4gICAgICAgIC8v6I635Y+W5pyA5ZCO5Yqg5YWl55qE5Lq655qE5L2N572uXG4gICAgICAgIHRoaXMubmV3QmVkVGFibGUoc2hhbmdaaHVvTnVtIC0gMSk7XG4gICAgICAgIC8vIHZhciBfZmFkZVRvID0gY2MuZmFkZUluKDAuNSwwKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlUYWcoc2hhbmd6aHVvbnVtLTEpLnJ1bkFjdGlvbihfZmFkZVRvKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFuZ1podW9OdW0gLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb25CeSA9IGNjLm1vdmVUbygwLjMsIHRoaXMuc2V0QmVkVGFibGUoaSkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlUYWcoMTAwICsgaSkucnVuQWN0aW9uKGFjdGlvbkJ5KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/mnInkurrliqDlhaXniYzlsYDnmoTml7blgJnosIPnlKjvvIzliJvlu7rlpLTlg4/lr7nosaHvvIzlubbkuJTliqDlhaXliLDmlbDnu4TkuK1cbiAgICBzZXRMb29rT246IGZ1bmN0aW9uIHNldExvb2tPbigpIHtcbiAgICAgICAgemh1bkJlaU51bSsrO1xuICAgICAgICB2YXIgaGVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5BdmF0YXJQcmVmYWIpO1xuICAgICAgICBoZXIubmFtZSA9IFwiaW5pdFR5cGVKb2luUGFydHlcIjtcbiAgICAgICAgaGVyLnRhZyA9IDIwMCArIHpodW5CZWlOdW07XG4gICAgICAgIGhlci5zZXRQb3NpdGlvblkoMCk7XG4gICAgICAgIC8v5oqK6L+Z5Liq5a+56LGh5Yqg5YWl5Yiw5pWw57uE5L6/5LqO566h55CGXG4gICAgICAgIHpodW5CZWlBcnJheS5wdXNoKGhlcik7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmFkZENoaWxkKGhlcik7XG4gICAgICAgIHZhciBtc2cxID0gbmV3IE1WQy5GTWVzc2FnZShcIkF2YXRhclwiLCBcInJvb3RcIik7XG4gICAgICAgIG1zZzEuYXJncy5uYW1lID0gXCJpbml0VHlwZUpvaW5QYXJ0eVwiO1xuICAgICAgICBtc2cxLnNlbmQoKTtcbiAgICB9LFxuICAgIC8v6YGN5Y6G5pWw57uE5Yig6Zmk56a75byA5oiW6ICF5LiK5qGM55qE5a+56LGh77yM5bm25LiUcmVtb3Zl6K+l5a+56LGhXG4gICAgcmVtb3ZlTG9va09uOiBmdW5jdGlvbiByZW1vdmVMb29rT24odGFnKSB7XG4gICAgICAgIC8v6YGN5Y6G5pWw57uE5bm25LiU5Yig6Zmk55u45bqU55qE5YWD57SgXG4gICAgICAgIGNjLmxvZyhcIumBjeWOhuWJjVwiLCB6aHVuQmVpQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB6aHVuQmVpQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh6aHVuQmVpQXJyYXlbaV0udGFnID09IDIwMCArIHRhZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnJlbW92ZUNoaWxkQnlUYWcoMjAwICsgdGFnKTtcbiAgICAgICAgICAgICAgICB6aHVuQmVpQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MubG9nKHpodW5CZWlBcnJheVtpXS50YWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKFwi6YGN5Y6G5ZCOXCIsIHpodW5CZWlBcnJheS5sZW5ndGgpO1xuXG4gICAgICAgIC8vIGZvcih2YXIgaSA9MjAwK3RhZysxO2k8emh1bkJlaU51bTtpKyspe1xuICAgICAgICAvLyAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmdldENoaWxkQnlVdWlkKGkpLnRhZz1pLTE7XG4gICAgICAgIC8vIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzJjZjI2NnRxdVJGZjdTUzI5eVVTV1NmJywgJ0ZFbnZpcm9ubWVudCcpO1xuLy8gc2NyaXB0cy9GV1MvRkVudmlyb25tZW50LmpzXG5cbi8qXG4gKiDnjq/looPlj4LmlbBcbiAqIEBBdXRob3I6IHRob3IubGl1IFxuICogQERhdGU6IDIwMTYtMTItMDUgMTQ6MjY6MzQgXG4gKiBATGFzdCBNb2RpZmllZCBieTogdGhvci5saXVcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMTItMTMgMTg6NDg6MjFcbiAqL1xuXG52YXIgRkVudmlyb25tZW50ID0gY2MuQ2xhc3Moe1xuICBuYW1lOiBcIkZFbnZpcm9ubWVudFwiLFxuICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge30sXG5cbiAgc3RhdGljczoge1xuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAg5Y+C5pWw5a6a5LmJXG5cbiAgICAvKipcbiAgICAgKiBUQ1DmnI3liqHlmahJUOWcsOWdgFxuICAgICAqL1xuICAgIHRjcFNlcnZlcklQOiBcIjEyNy4wLjAuMVwiLFxuICAgIC8qKlxuICAgICAqIFRDUOacjeWKoeWZqOerr+WPo1xuICAgICAqL1xuICAgIHRjcFNlcnZlclBvcnQ6IDQwMDAsXG4gICAgLyoqXG4gICAgICogV0VC5pyN5Yqh5Z+656GA5Zyw5Z2AICjlip/og73mjqXlj6PnmoTln7rnoYDlnLDlnYApXG4gICAgICovXG4gICAgaHR0cEFwaUJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9cIixcblxuICAgIC8qKlxuICAgICAqIFdFQumhteWfuuehgOWcsOWdgCAoV0VC55WM6Z2i5oiW6ICF572R6aG155qE5Z+656GA5Zyw5Z2AKVxuICAgICAqL1xuICAgIHdlYlBhZ2VCYXNlVXJsOiBcImh0dHA6Ly9hcGkubmljZWZvbGQuY29tL1wiLFxuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAg5b2T5YmN55So5oi35L+h5oGvXG5cbiAgICB1c2VySW5mbzoge1xuICAgICAgaWQ6IFwiXCIsIC8v5b2T5YmN55So5oi3aWRcbiAgICAgIHRva2VuOiBcIlwiLCAvL+W9k+WJjeeUqOaIt+i6q+S7veagh+W/l1xuICAgICAgZGlzcGxheTogeyAvLzzlvZPliY3nlKjmiLfnmoTmmL7npLrkv6Hmga8+IFxuICAgICAgICBuYW1lOiBcIlwiLCAvL+W9k+WJjeeUqOaIt+eahOaYteensFxuICAgICAgICBhdmF0YXI6IFwiXCIgLy/lvZPliY3nlKjmiLfnmoTlpLTlg4/lnLDlnYBcbiAgICAgICAgLy8uLi5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAg5pa55rOV5a6a5LmJXG5cbiAgICBnZXRXZWJBcGlVcmw6IGZ1bmN0aW9uIGdldFdlYkFwaVVybChhcGlVcmwpIHtcbiAgICAgIHJldHVybiBGRW52aXJvbm1lbnQgKyBhcGlVcmw7XG4gICAgfVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGRW52aXJvbm1lbnQ7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdmOWVkY25reEw5Q1Zva3BIK0NnMlp5RycsICdGTGFuZ3VhZ2UnKTtcbi8vIHNjcmlwdHMvRldTL1V0aWxzL0ZMYW5ndWFnZS5qc1xuXG4vKlxuICog5aSa6K+t6KiA5pSv5oyBXG4gKiBAQXV0aG9yOiB0aG9yLmxpdSBcbiAqIEBEYXRlOiAyMDE2LTEyLTA1IDE3OjU3OjUwIFxuICogQExhc3QgTW9kaWZpZWQgYnk6IHRob3IubGl1XG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTEyLTA1IDE4OjUwOjA1XG4gKi9cbnZhciBGTGFuZ3VhZ2UgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGTGFuZ3VhZ2VcIixcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge30sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgaWYgKEZMYW5ndWFnZS5pbml0ZWQpIHJldHVybjtcbiAgICAgICAgICAgIEZMYW5ndWFnZS5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgRkxhbmd1YWdlLmRhdGEgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWKoOi9veS4gOihjOaWh+acrFxuICAgICAgICAgKi9cbiAgICAgICAgbG9hZDogZnVuY3Rpb24gbG9hZChpbmlfbGluZSkge1xuICAgICAgICAgICAgaWYgKGluaV9saW5lKSB7XG5cbiAgICAgICAgICAgICAgICAvL+enu+mZpGluaeazqOmHilxuICAgICAgICAgICAgICAgIHZhciBsaW5lID0gaW5pX2xpbmUucmVwbGFjZSgvI1teXFxyXFxuXSovZywgXCJcIik7XG5cbiAgICAgICAgICAgICAgICAvL+enu+mZpOWJjemdoueahOepuueZvVxuICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoL15cXHMrL2csIFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgLy/np7vpmaTlkI7pnaLnmoTnqbrnmb1cbiAgICAgICAgICAgICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC9cXHMrJC9nLCBcIlwiKTtcblxuICAgICAgICAgICAgICAgIC8v6L2s5o2iXFxuXG4gICAgICAgICAgICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSgvKFxcXFxuKSsvZywgXCJcXG5cIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgaSA9IGxpbmUuaW5kZXhPZihcIj1cIik7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrID0gbGluZS5zdWJzdHIoMCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gbGluZS5zdWJzdHIoaSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBGTGFuZ3VhZ2UuZGF0YVtrXSA9IHY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliqDovb3or63oqIDmlofku7bnmoTlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGxvYWRGaWxlOiBmdW5jdGlvbiBsb2FkRmlsZShpbmlfZmlsZSkge1xuICAgICAgICAgICAgaWYgKGluaV9maWxlICYmIHR5cGVvZiBpbmlfZmlsZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gaW5pX2ZpbGUuc3BsaXQoL1tcXHJcXG5dKy9nKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgRkxhbmd1YWdlLmxvYWQobGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bmjIflrpprZXnnmoTmlofmnKxcbiAgICAgICAgICovXG4gICAgICAgIHRleHQ6IGZ1bmN0aW9uIHRleHQodGFyZ2V0S2V5LCBkZWZhdWx0S2V5KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0S2V5ICYmIEZMYW5ndWFnZS5kYXRhW3RhcmdldEtleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRkxhbmd1YWdlLmRhdGFbdGFyZ2V0S2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlZmF1bHRLZXkgJiYgRkxhbmd1YWdlLmRhdGFbZGVmYXVsdEtleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRkxhbmd1YWdlLmRhdGFbZGVmYXVsdEtleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmoLnmja5rZXnku6Xlj4rlj4LmlbDmoLzlvI/ljJbmlofmnKxcbiAgICAgICAgICovXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkgcmV0dXJuIEZMYW5ndWFnZS50ZXh0KGFyZ3VtZW50c1swXSk7ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSByZXR1cm4gRkxhbmd1YWdlLnRleHQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO2Vsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRLZXkgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IEZMYW5ndWFnZS50ZXh0KHRhcmdldEtleSwgZGVmYXVsdEtleSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBpIC0gMTsgLy/lj4LmlbDku457MX3lvIDlp4tcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpbmRleC50b1N0cmluZygpICsgXCJcXFxcfVwiLCBcImdtXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldCA9IHJldC5yZXBsYWNlKHJlLCBhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGTGFuZ3VhZ2U7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5N2M3OFBsOFhSR2dLSkZ5bEJmR0J5YScsICdGTG9nSW5Nb2RlbCcpO1xuLy8gc2NyaXB0cy9GV1MvTW9kZWxzL0ZMb2dJbk1vZGVsLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBNT0RFTCA9IHJlcXVpcmUoXCJGV1NfTU9ERUxcIik7XG52YXIgbG9naW5Nb2RlbDtcbmxvZ2luTW9kZWwgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBvbkZNZXNzYWdlX0xvZ2luOiBmdW5jdGlvbiBvbkZNZXNzYWdlX0xvZ2luKG1zZykge1xuICAgICAgICBjYy5sb2coXCLmiJHmlLbliLDnmbvlvZXmtojmga/llaZcIiArIG1zZyk7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgICAgICB2YXIgbXNnMiA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJsb2dpblJlc3VsdFwiLCBcImxvZ2luU2NlbmVcIik7XG4gICAgICAgIG1zZzIuYXJncy5sb2dpblN0YXRlID0gdHJ1ZTtcbiAgICAgICAgbXNnMi5zZW5kKCk7XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2dpbk1vZGVsO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNzRlYjh3WDBsZFBPNUdCYThsMEI0QmknLCAnRlNvY2tldENTTW9kZWwnKTtcbi8vIHNjcmlwdHMvRldTL01vZGVscy9GU29ja2V0Q1NNb2RlbC5qc1xuXG4vKlxuICog5LiOQ1PmnI3liqHmqKHlnZfnmoRTT0NLRVTpgJrorq9cbiAqIEBBdXRob3I6IHRob3IubGl1IFxuICogQERhdGU6IDIwMTYtMTItMDMgMTQ6NDc6MzMgXG4gKiBATGFzdCBNb2RpZmllZCBieTogdGhvci5saXVcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMTItMTUgMTU6NDU6MjNcbiAqL1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgTU9ERUwgPSByZXF1aXJlKFwiRldTX01PREVMXCIpO1xudmFyIERBVEEgPSByZXF1aXJlKFwiRldTX01PREVMX0RBVEFcIik7XG52YXIgTVNHID0gcmVxdWlyZShcIkZXU19NU0dcIik7XG5cbnZhciBGU29ja2V0UGFjayA9IHJlcXVpcmUoXCJGU29ja2V0UGFja1wiKTtcbnZhciBGU29ja2V0TW9kZWxBYnN0cmFjdCA9IHJlcXVpcmUoXCJGU29ja2V0TW9kZWxBYnN0cmFjdFwiKTtcbnZhciBOT1RJRlkgPSBGU29ja2V0UGFjay5GSGVhZGVyTWFyay5Ob3RpZnk7XG52YXIgUkVRID0gRlNvY2tldFBhY2suRkhlYWRlck1hcmsuUmVxO1xudmFyIEFDSyA9IEZTb2NrZXRQYWNrLkZIZWFkZXJNYXJrLkFjaztcbnZhciBNU0dJRFMgPSBGU29ja2V0UGFjay5Nc2dJRHNbMF07XG5cbm1vZHVsZS5leHBvcnRzID0gY2MuQ2xhc3Moe1xuICAgIC8vIG5hbWU6IFwiRlNvY2tldENTTW9kZWxcIixcbiAgICBcImV4dGVuZHNcIjogRlNvY2tldE1vZGVsQWJzdHJhY3QsXG4gICAgLy8gY3RvcjogZnVuY3Rpb24oKSB7fSxcblxuICAgIC8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIOe9kee7nOmAmuiur1xuXG4gICAgaW5pdEhhbmRsZXJzOiBmdW5jdGlvbiBpbml0SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuYWRkUGFja0hhbmRsZXIoTk9USUZZIHwgTVNHSURTLlJlbG9naW4sIHRoaXMub25Ob3RpZnlSZWxvZ2luKTtcbiAgICAgICAgdGhpcy5hZGRQYWNrSGFuZGxlcihBQ0sgfCBNU0dJRFMuVmVyaWZ5LCB0aGlzLm9uQWNrVmVyaWZ5KTtcbiAgICB9LFxuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAg5pWw5o2u5YyF5aSE55CGXG5cbiAgICAvLy/lvILlnLDnmbvlvZXlkI7pgJrnn6XkuIvnur9cbiAgICBvbk5vdGlmeVJlbG9naW46IGZ1bmN0aW9uIG9uTm90aWZ5UmVsb2dpbihwYWNrKSB7fSxcblxuICAgIC8vL+i6q+S7vemqjOivgee7k+aenFxuICAgIG9uQWNrVmVyaWZ5OiBmdW5jdGlvbiBvbkFja1ZlcmlmeShwYWNrKSB7fSxcblxuICAgIC8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIOi/nuaOpeacjeWKoeWZqFxuXG4gICAgLyoqXG4gICAgICog6L+e5o6l5pyN5Yqh5ZmoXG4gICAgICovXG4gICAgb25GTWVzc2FnZV9zZXJ2ZXJDb25uZWN0OiBmdW5jdGlvbiBvbkZNZXNzYWdlX3NlcnZlckNvbm5lY3QobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDov57mjqXmnI3liqHlmajnu5PmnpxcbiAgICAgKi9cbiAgICBvbkZNZXNzYWdlX3NvY2tldE9uQ29ubmVjdDogZnVuY3Rpb24gb25GTWVzc2FnZV9zb2NrZXRPbkNvbm5lY3QobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlNGQ2ZEZYQzBoQWNZTE9WNnU1ZVlqWicsICdGU29ja2V0Q29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9GV1MvQ29udHJvbGxlci9GU29ja2V0Q29udHJvbGxlci5qc1xuXG4vKlxuICogQEF1dGhvcjogdGhvci5saXUgXG4gKiBARGF0ZTogMjAxNi0xMi0wNSAxNzoxMzo0OSBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiB0aG9yLmxpdVxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0xMi0wNiAxNzowMjoyOVxuICovXG52YXIgRldTX01TRyA9IHJlcXVpcmUoXCJGV1NfTVNHXCIpO1xudmFyIEZXU19NVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBGV1NfTkFUSVZFX0dBVEVXQVkgPSByZXF1aXJlKFwiRldTX05BVElWRV9HQVRFV0FZXCIpO1xuXG4vL0ZXU19OQVRJVkVfR0FURVdBWS5GTmF0aXZlR2F0ZXdheVxuXG52YXIgRlNvY2tldENvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgLy8gbmFtZTogXCJGU29ja2V0Q29udHJvbGxlclwiLFxuICAgIFwiZXh0ZW5kc1wiOiBGV1NfTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcbiAgICAvLyBjdG9yOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgb25GTWVzc2FnZV9zb2NrZXRDb25uZWN0OiBmdW5jdGlvbiBvbkZNZXNzYWdlX3NvY2tldENvbm5lY3QobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuXG4gICAgICAgIC8vVE9ETzog6LCD55SoanNUb0NwcOaOpeWPoywg5Y+R6LW36L+e5o6lXG4gICAgfSxcblxuICAgIG9uRk1lc3NhZ2Vfc29ja2V0Q2xvc2U6IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfc29ja2V0Q2xvc2UobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuXG4gICAgICAgIC8vVE9ETzog6LCD55SoanNUb0NwcOaOpeWPoywg5YWz6Zet6L+e5o6lXG4gICAgfSxcblxuICAgIG9uRk1lc3NhZ2Vfc29ja2V0U2VuZDogZnVuY3Rpb24gb25GTWVzc2FnZV9zb2NrZXRTZW5kKG1zZykge1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcblxuICAgICAgICAvL1RPRE86IOiwg+eUqGpzVG9DcHDmjqXlj6MsIOWPkemAgeaVsOaNrlxuICAgIH1cbn0pO1xuXG4vKlxuICAgIFtoZWFkZXJdXG4gICAgbXNnaWRcblxuICAgIFtoZWFkXVxuICAgIHZlcnNpb25cbiAgICByZXRjb2RlXG4gICAgZXh0cmFcbiAgICByb3V0ZXJcbiAgICBib2R5XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZTb2NrZXRDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNjc0MGI3dHVNcEplNzNPOXR0RDBpaHYnLCAnRlNvY2tldERpc3RyaWJ1dGVyJyk7XG4vLyBzY3JpcHRzL0ZXUy9Nb2RlbHMvRlNvY2tldERpc3RyaWJ1dGVyLmpzXG5cbi8qXG4gKiDmlLbliLBTb2NrZXTmlbDmja7ljIXml7bnmoTmtojmga/liIblj5HmqKHlnZdcbiAqIEBBdXRob3I6IHRob3IubGl1IFxuICogQERhdGU6IDIwMTYtMTItMDUgMTc6MDI6NTkgXG4gKiBATGFzdCBNb2RpZmllZCBieTogICB0aG9yLmxpdSBcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMTItMDUgMTc6MDI6NTkgXG4gKi9cbnZhciBGV1NfTVNHID0gcmVxdWlyZShcIkZXU19NU0dcIik7XG5cbnZhciBGU29ja2V0RGlzdHJpYnV0ZXIgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGU29ja2V0RGlzdHJpYnV0ZXJcIixcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge30sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGluaXRlZDogZmFsc2UsXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICBpZiAoRlNvY2tldERpc3RyaWJ1dGVyLmluaXRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgRlNvY2tldERpc3RyaWJ1dGVyLmluaXRlZCA9IHRydWU7XG4gICAgICAgICAgICBGU29ja2V0RGlzdHJpYnV0ZXIubWFwcyA9IG5ldyBPYmplY3QoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRNYXBRdWV1ZTogZnVuY3Rpb24gc2V0TWFwUXVldWUobXNnaWQsIGNhdGVnb3J5KSB7XG4gICAgICAgICAgICB2YXIgbXNnaWRfc2V0dGluZyA9IG51bGw7XG4gICAgICAgICAgICBpZiAoRlNvY2tldERpc3RyaWJ1dGVyLm1hcHNbY2F0ZWdvcnldKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICBGU29ja2V0RGlzdHJpYnV0ZXIubWFwc1tjYXRlZ29yeV0gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbXNnaWRfc2V0dGluZyA9IEZTb2NrZXREaXN0cmlidXRlci5tYXBzW2NhdGVnb3J5XTtcblxuICAgICAgICAgICAgaWYgKG1zZ2lkX3NldHRpbmcuaW5kZXhPZihtc2dpZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgbXNnaWRfc2V0dGluZy5wdXNoKG1zZ2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRNYXBRdWV1ZTogZnVuY3Rpb24gZ2V0TWFwUXVldWUobXNnaWQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGMgaW4gRlNvY2tldERpc3RyaWJ1dGVyLm1hcHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IEZTb2NrZXREaXN0cmlidXRlci5tYXBzW2NdO1xuICAgICAgICAgICAgICAgIGlmIChhLmluZGV4T2YobXNnaWQpID49IDApIHJldHVybiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHV0OiBmdW5jdGlvbiBwdXQobXNnaWQsIHNuLCBib2R5LCBoZWFkKSB7XG4gICAgICAgICAgICB2YXIgYyA9IEZTb2NrZXREaXN0cmlidXRlci5nZXRNYXBRdWV1ZShtc2dpZCk7XG5cbiAgICAgICAgICAgIHZhciBtc2cgPSBGV1NfTVNHLkZXU01lc3NhZ2VGYWN0b3J5LnNvY2tldE9uUmVjZWl2ZShjLCBtc2dpZCwgc24sIGJvZHkpO1xuICAgICAgICAgICAgbXNnLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZTb2NrZXREaXN0cmlidXRlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzdmN2RkcjFPMkJDVHAvaTVnTmdWcFlGJywgJ0ZTb2NrZXRNb2RlbEFic3RyYWN0Jyk7XG4vLyBzY3JpcHRzL0ZXUy9Nb2RlbHMvRlNvY2tldE1vZGVsQWJzdHJhY3QuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIEZTb2NrZXRQYWNrID0gcmVxdWlyZShcIkZTb2NrZXRQYWNrXCIpO1xudmFyIEZTb2NrZXRNb2RlbEFic3RyYWN0ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgYWRkUGFja0hhbmRsZXI6IGZ1bmN0aW9uIGFkZFBhY2tIYW5kbGVyKG1zZ2lkLCBoYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnBhY2tIYW5kbGVycykge30gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tIYW5kbGVycyA9IG5ldyBPYmplY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBhY2tIYW5kbGVyc1ttc2dpZF0pIHtcbiAgICAgICAgICAgIE1WQy5GTG9nLndhcm4oXCJTb2NrZXRNb2RlbFwiLCBcIumHjeWkjeeahOaVsOaNruWMheWkhOeQhuWHveaVsCA9IHswfVwiLCBtc2dpZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhY2tIYW5kbGVyc1ttc2dpZF0gPSBoYW5kbGVyO1xuICAgIH0sXG5cbiAgICBhcHBseVBhY2tIYW5kbGVyOiBmdW5jdGlvbiBhcHBseVBhY2tIYW5kbGVyKHBhY2spIHtcbiAgICAgICAgdmFyIG1zZ2lkID0gcGFjay5tc2dpZDtcbiAgICAgICAgaWYgKHRoaXMucGFja0hhbmRsZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWNrSGFuZGxlcnNbbXNnaWRdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFwaUlkID0gRlNvY2tldFBhY2suZ2V0SGVhZGVyTXNnSWQobXNnaWQpO1xuICAgICAgICAgICAgICAgIE1WQy5GTG9nLmluZm8oXCJTb2NrZXRcIiwgXCLlpITnkIbmlbDmja7ljIUgPSB7MH0gKHsxfSlcIiwgRlNvY2tldFBhY2suZ2V0TXNnSWREZXNjKG1zZ2lkKSwgYXBpSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFja0hhbmRsZXJzW21zZ2lkXShwYWNrKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBpbml0SGFuZGxlcnM6IGZ1bmN0aW9uIGluaXRIYW5kbGVycygpIHt9LFxuXG4gICAgb25GTWVzc2FnZV9zb2NrZXRPblJlY2VpdmU6IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfc29ja2V0T25SZWNlaXZlKG1zZykge1xuXG4gICAgICAgIGlmICh0aGlzLl9oYW5kbGVyc19pbml0ZWRfKSB7fSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJzX2luaXRlZF8gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbml0SGFuZGxlcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYW5kbGVkID0gdGhpcy5hcHBseVBhY2tIYW5kbGVyKG1zZy5hcmdzLnBhY2spO1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlUGFjazogZnVuY3Rpb24gY3JlYXRlUGFjaygpIHtcbiAgICAgICAgdmFyIGMgPSBGU29ja2V0UGFjaztcbiAgICAgICAgcmV0dXJuIG5ldyBjKCk7XG4gICAgfSxcblxuICAgIHNlbmRQYWNrOiBmdW5jdGlvbiBzZW5kUGFjayhwYWNrKSB7XG5cbiAgICAgICAgLy9UT0RPOiDlj5HpgIHmlbDmja7ljIVcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGU29ja2V0TW9kZWxBYnN0cmFjdDtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzgzNmQ0VTE1R05HbzY2WW5WTm11VjZpJywgJ0ZTb2NrZXRQYWNrJyk7XG4vLyBzY3JpcHRzL0ZXUy9VdGlscy9GU29ja2V0UGFjay5qc1xuXG4vKlxuICogU29ja2V05pWw5o2u5YyF5L+h5oGvXG4gKiBAQXV0aG9yOiB0aG9yLmxpdSBcbiAqIEBEYXRlOiAyMDE2LTEyLTA2IDE2OjQ2OjI1IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IHRob3IubGl1XG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTEyLTE1IDE1OjE5OjMwXG4gKi9cblxudmFyIEZTb2NrZXRQYWNrID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiRlNvY2tldFBhY2tcIixcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge30sXG5cbiAgICBzdGF0aWNzOiB7XG5cbiAgICAgICAgdmVyc2lvbjogMCxcblxuICAgICAgICAvLy/mtojmga/lj7fnsbvlnotcbiAgICAgICAgRkhlYWRlclR5cGU6IGNjLkVudW0oe1xuICAgICAgICAgICAgTm90aWZ5OiAweDAwMDAwMDAwLCAvL+W5v+aSrea2iOaBr1xuICAgICAgICAgICAgUmVxOiAweDEwMDAwMDAwLCAvL+ivt+axgua2iOaBr1xuICAgICAgICAgICAgQWNrOiAweDIwMDAwMDAwIC8v5bqU562U5raI5oGvXG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vL+a2iOaBr+WPt+aOqeeggVxuICAgICAgICBGSGVhZGVyTWFyazogY2MuRW51bSh7XG4gICAgICAgICAgICBNYXNrOiAweEYwMDAwMDAwLCAvL+exu+Wei1xuICAgICAgICAgICAgTVNHOiAweDBGRkZGRkZGIC8v5o6l5Y+j5Y+3XG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vL+WNj+iurua2iOaBr+WPt+WumuS5iVxuICAgICAgICBNc2dJRHM6IFt7XG4gICAgICAgICAgICBSZXBseTogMCwgLy/lm57lpI1cblxuICAgICAgICAgICAgSGVhcnRCZWF0OiA1MDAxLCAvL+W/g+i3s1xuICAgICAgICAgICAgUGluZzogNTAwMiwgLy/pk77ot6/mo4DmtYvljIVcbiAgICAgICAgICAgIFJlbG9naW46IDUwMDMsIC8v5byC5Zyw55m75b2V5ZCO55qE5LiL57q/6YCa55+lXG4gICAgICAgICAgICBWZXJpZnk6IDUwMDQgfV0sXG5cbiAgICAgICAgLy/lrqLmiLfnq6/ouqvku73orqTor4FcbiAgICAgICAgLy8v6I635Y+W5raI5oGv5Y+355qE5o6p56CB6YOo5YiGXG4gICAgICAgIGdldEhlYWRlck1hcms6IGZ1bmN0aW9uIGdldEhlYWRlck1hcmsoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBpZCAmIEZTb2NrZXRQYWNrLkZIZWFkZXJNYXJrLk1hc2s7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8v6I635Y+W5raI5oGv5Y+355qE5o6l5Y+j5Y+36YOo5YiGXG4gICAgICAgIGdldEhlYWRlck1zZ0lkOiBmdW5jdGlvbiBnZXRIZWFkZXJNc2dJZChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkICYgRlNvY2tldFBhY2suRkhlYWRlck1hcmsuTVNHO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vL+iOt+WPlua2iOaBr+WPt+eahOaWh+acrOS/oeaBr1xuICAgICAgICBnZXRNc2dJZERlc2M6IGZ1bmN0aW9uIGdldE1zZ0lkRGVzYyhpZCkge1xuICAgICAgICAgICAgdmFyIGEgPSBGU29ja2V0UGFjay5nZXRIZWFkZXJNYXJrKGlkKTtcbiAgICAgICAgICAgIHZhciBiID0gRlNvY2tldFBhY2suZ2V0SGVhZGVyTXNnSWQoaWQpO1xuXG4gICAgICAgICAgICB2YXIgc3pfYSA9IEZTb2NrZXRQYWNrLmdldEVudW1CeVZhbHVlKEZTb2NrZXRQYWNrLkZIZWFkZXJUeXBlLCBhKTtcbiAgICAgICAgICAgIHZhciBzel9iID0gRlNvY2tldFBhY2suZ2V0RW51bUJ5VmFsdWVFeChGU29ja2V0UGFjay5Nc2dJRHMsIGIpO1xuXG4gICAgICAgICAgICBpZiAoc3pfYSAmJiBzel9hLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzel9hICsgXCIgfCBcIiArIHN6X2I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzel9iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vL+iOt+WPluaemuS4vuWAvOeahOWQjeensFxuICAgICAgICBnZXRFbnVtQnlWYWx1ZTogZnVuY3Rpb24gZ2V0RW51bUJ5VmFsdWUoZSwgdikge1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVba10gPT0gdikgcmV0dXJuIGs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSxcblxuICAgICAgICAvLy/ojrflj5bmnprkuL7lgLznmoTlkI3np7BcbiAgICAgICAgZ2V0RW51bUJ5VmFsdWVFeDogZnVuY3Rpb24gZ2V0RW51bUJ5VmFsdWVFeChlcywgdikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBlID0gZXNbaV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW2tdID09IHYpIHJldHVybiBrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8tLS0tLVxuICAgICAgICB0eXBlOiAwLFxuICAgICAgICBtc2dpZDogMCxcblxuICAgICAgICAvLy0tLS0tXG4gICAgICAgIHJldGNvZGU6IDAsXG4gICAgICAgIGV4dHJhOiBcIlwiLFxuICAgICAgICByb3V0ZXI6IFwiXCIsXG5cbiAgICAgICAgLy8tLS0tLVxuICAgICAgICBib2R5OiBudWxsXG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGU29ja2V0UGFjaztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzJjOTgwcWtFWGhMOElxVTJ5dkMwUDJWJywgJ0ZTb2NrZXRSU01vZGVsJyk7XG4vLyBzY3JpcHRzL0ZXUy9Nb2RlbHMvRlNvY2tldFJTTW9kZWwuanNcblxuLypcbiAqIOS4jlJT5pyN5Yqh5qih5Z2X55qEU29ja2V06YCa6K6vXG4gKiBAQXV0aG9yOiB0aG9yLmxpdSBcbiAqIEBEYXRlOiAyMDE2LTEyLTAzIDE0OjQ3OjU2IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IHRob3IubGl1XG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTEyLTE1IDE1OjQ2OjQxXG4gKi9cblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIE1PREVMID0gcmVxdWlyZShcIkZXU19NT0RFTFwiKTtcbnZhciBEQVRBID0gcmVxdWlyZShcIkZXU19NT0RFTF9EQVRBXCIpO1xudmFyIE1TRyA9IHJlcXVpcmUoXCJGV1NfTVNHXCIpO1xuXG52YXIgRlNvY2tldFBhY2sgPSByZXF1aXJlKFwiRlNvY2tldFBhY2tcIik7XG52YXIgRlNvY2tldE1vZGVsQWJzdHJhY3QgPSByZXF1aXJlKFwiRlNvY2tldE1vZGVsQWJzdHJhY3RcIik7XG52YXIgTk9USUZZID0gRlNvY2tldFBhY2suRkhlYWRlck1hcmsuTm90aWZ5O1xudmFyIFJFUSA9IEZTb2NrZXRQYWNrLkZIZWFkZXJNYXJrLlJlcTtcbnZhciBBQ0sgPSBGU29ja2V0UGFjay5GSGVhZGVyTWFyay5BY2s7XG52YXIgTVNHSURTID0gRlNvY2tldFBhY2suTXNnSURzWzBdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNjLkNsYXNzKHtcbiAgICAvLyBuYW1lOiBcIkZTb2NrZXRSU01vZGVsXCIsXG4gICAgXCJleHRlbmRzXCI6IEZTb2NrZXRNb2RlbEFic3RyYWN0LFxuICAgIC8vIGN0b3I6IGZ1bmN0aW9uKCkge30sXG5cbiAgICAvL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCDnvZHnu5zpgJrorq9cblxuICAgIGluaXRIYW5kbGVyczogZnVuY3Rpb24gaW5pdEhhbmRsZXJzKCkge30sXG5cbiAgICAvL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCDliJvlu7rmiL/pl7RcblxuICAgIG9uRk1lc3NhZ2Vfcm9vbUNyZWF0ZTogZnVuY3Rpb24gb25GTWVzc2FnZV9yb29tQ3JlYXRlKG1zZykge1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICAgICAgTVZDLkZMb2cuaW5mbyhcIlJvb21cIiwgXCJUT0RPOiA8IOWIm+W7uuaIv+mXtFwiKTtcbiAgICB9LFxuICAgIGFja19yb29tQ3JlYXRlOiBmdW5jdGlvbiBhY2tfcm9vbUNyZWF0ZShtc2cpIHt9LFxuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAg5Yqg5YWl5oi/6Ze0XG4gICAgb25GTWVzc2FnZV9yb29tSm9pbjogZnVuY3Rpb24gb25GTWVzc2FnZV9yb29tSm9pbihtc2cpIHtcbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4gICAgICAgIE1WQy5GTG9nLmluZm8oXCJSb29tXCIsIFwiVE9ETzogPCDliqDlhaXmiL/pl7RcIik7XG4gICAgfSxcbiAgICBhY2tfcm9vbUpvaW46IGZ1bmN0aW9uIGFja19yb29tSm9pbihtc2cpIHt9LFxuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAg5YWz6Zet5oi/6Ze0XG4gICAgb25GTWVzc2FnZV9yb29tRW5kOiBmdW5jdGlvbiBvbkZNZXNzYWdlX3Jvb21FbmQobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgICAgICBNVkMuRkxvZy5pbmZvKFwiUm9vbVwiLCBcIlRPRE86IDwg5YWz6Zet5oi/6Ze0XCIpO1xuICAgIH0sXG4gICAgYWNrX3Jvb21FbmQ6IGZ1bmN0aW9uIGFja19yb29tRW5kKG1zZykge30sXG5cbiAgICAvL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCDliqDlhaXmuLjmiI9cbiAgICBvbkZNZXNzYWdlX2dhbWVKb2luOiBmdW5jdGlvbiBvbkZNZXNzYWdlX2dhbWVKb2luKG1zZykge1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICAgICAgTVZDLkZMb2cuaW5mbyhcIlJvb21cIiwgXCJUT0RPOiA8IOWKoOWFpea4uOaIj1wiKTtcbiAgICB9LFxuICAgIGFja19nYW1lSm9pbjogZnVuY3Rpb24gYWNrX2dhbWVKb2luKG1zZykge30sXG5cbiAgICAvL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCDml4Hop4LmuLjmiI9cbiAgICBvbkZNZXNzYWdlX2dhbWVXYXRjaDogZnVuY3Rpb24gb25GTWVzc2FnZV9nYW1lV2F0Y2gobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgICAgICBNVkMuRkxvZy5pbmZvKFwiUm9vbVwiLCBcIlRPRE86IDwg5peB6KeC5ri45oiPXCIpO1xuICAgIH0sXG4gICAgYWNrX2dhbWVXYXRjaDogZnVuY3Rpb24gYWNrX2dhbWVXYXRjaChtc2cpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ViMTNmVE9hUWRGYUpPT3BIcWpWTlkzJywgJ0ZXU19NT0RFTF9EQVRBJyk7XG4vLyBzY3JpcHRzL0ZXUy9GV1NfTU9ERUxfREFUQS5qc1xuXG4vKlxuICog5YWs5YWx5pWw5o2u57uT5p6E5a6a5LmJIFxuICogQEF1dGhvcjogdGhvci5saXUgXG4gKiBARGF0ZTogMjAxNi0xMi0wNSAxOTowOToxNSBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiB0aG9yLmxpdVxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0xMi0xMyAxODo0NToxOVxuICovXG52YXIgRldTX01PREVMID0gcmVxdWlyZShcIkZXU19NT0RFTFwiKTtcbnZhciBGV1NfTU9ERUxfREFUQSA9IHt9O1xuXG4vL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4vKipcbiAqIOaVsOaNruaooeWei+WvueixoeaOpeWPo1xuICovXG5GV1NfTU9ERUxfREFUQS5JRk1vZGVsRmFjdG9yeSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIklGTW9kZWxGYWN0b3J5XCIsXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IG51bGw7XG4gICAgfSxcbiAgICBjcmVhdGVCeUlkOiBmdW5jdGlvbiBjcmVhdGVCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuX3R5cGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChvYmopIHt9XG59KTtcblxuRldTX01PREVMX0RBVEEuRkVudGl0eUZhY3RvcnkgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGRW50aXR5RmFjdG9yeVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBGV1NfTU9ERUxfREFUQS5JRk1vZGVsRmFjdG9yeSxcblxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Bvb2wgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgIHRoaXMuX3R5cGUgPSBudWxsO1xuICAgIH0sXG5cbiAgICBjcmVhdGVCeUlkOiBmdW5jdGlvbiBjcmVhdGVCeUlkKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLl9wb29sW2lkXSkgcmV0dXJuIHRoaXMuX3Bvb2xbaWRdO1xuICAgICAgICB2YXIgcmV0ID0gdGhpcy5jcmVhdGUoKTtcbiAgICAgICAgcmV0LmlkID0gaWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xbaWRdID0gcmV0O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIOeUqOaIt+WvueixoeW3peWOguexu1xuICovXG5GV1NfTU9ERUxfREFUQS5GVXNlckZhY3RvcnkgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGVXNlckZhY3RvcnlcIixcbiAgICBcImV4dGVuZHNcIjogRldTX01PREVMX0RBVEEuRkVudGl0eUZhY3RvcnksXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHJlcXVpcmUoXCJGV1NfTU9ERUxfREFUQVwiKS5GVXNlcjtcbiAgICB9XG59KTtcblxuLyoqXG4gKiDnjqnlrrblr7nosaHlt6XljoLnsbtcbiAqL1xuRldTX01PREVMX0RBVEEuRlBsYXllckZhY3RvcnkgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGUGxheWVyRmFjdG9yeVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBGV1NfTU9ERUxfREFUQS5JRk1vZGVsRmFjdG9yeSxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge1xuICAgICAgICB0aGlzLl90eXBlID0gcmVxdWlyZShcIkZXU19NT0RFTF9EQVRBXCIpLkZQbGF5ZXI7XG4gICAgfVxufSk7XG5cbi8qKlxuICog5ri45oiP5a+56LGh5bel5Y6C57G7XG4gKi9cbkZXU19NT0RFTF9EQVRBLkZHYW1lRmFjdG9yeSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkZHYW1lRmFjdG9yeVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBGV1NfTU9ERUxfREFUQS5GRW50aXR5RmFjdG9yeSxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge1xuICAgICAgICB0aGlzLl90eXBlID0gcmVxdWlyZShcIkZXU19NT0RFTF9EQVRBXCIpLkZHYW1lO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIOa4uOaIj+ahjOWvueixoeW3peWOguexu1xuICovXG5GV1NfTU9ERUxfREFUQS5GR2FtZVRhYmxlRmFjdG9yeSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkZHYW1lVGFibGVGYWN0b3J5XCIsXG4gICAgXCJleHRlbmRzXCI6IEZXU19NT0RFTF9EQVRBLklGTW9kZWxGYWN0b3J5LFxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSByZXF1aXJlKFwiRldTX01PREVMX0RBVEFcIikuRkdhbWVUYWJsZTtcbiAgICB9XG59KTtcblxuLyoqXG4gKiDmuLjmiI/lsYDlr7nosaHlt6XljoLnsbtcbiAqL1xuRldTX01PREVMX0RBVEEuRkdhbWVSb3VuZEZhY3RvcnkgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGR2FtZVJvdW5kRmFjdG9yeVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBGV1NfTU9ERUxfREFUQS5JRk1vZGVsRmFjdG9yeSxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge1xuICAgICAgICB0aGlzLl90eXBlID0gcmVxdWlyZShcIkZXU19NT0RFTF9EQVRBXCIpLkZHYW1lUm91bmQ7XG4gICAgfVxufSk7XG5cbi8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbi8qKlxuICog55So5oi35a+56LGhOiDooajnpLrkuIDkuKrnlKjmiLfnmoTkv6Hmga9cbiAqL1xuRldTX01PREVMX0RBVEEuRlVzZXIgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGVXNlclwiLFxuICAgIFwiZXh0ZW5kc1wiOiByZXF1aXJlKFwiRldTX01PREVMXCIpLkZBYnN0cmFjdE1vZGVsLFxuXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcImRhdGFcIiwgbmV3IE9iamVjdCgpKTtcbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBmYWN0b3J5OiBuZXcgRldTX01PREVMX0RBVEEuRlVzZXJGYWN0b3J5KClcbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICByZXR1cm4gRldTX01PREVMX0RBVEEuRlVzZXIuZmFjdG9yeS5yZXNldCh0aGlzKTtcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICog55So5oi3aWRcbiAgICAgICAgICovXG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImlkXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwiaWRcIiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnlKjmiLfnmoTmmL7npLrkv6Hmga8o5ZCN56ewLOWktOWDj+etieWGheWuuSkgXG4gICAgICAgICAqL1xuICAgICAgICBkaXNwbGF5OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImRpc3BsYXlcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJkaXNwbGF5XCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICog55So5oi35pWw5o2uXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImRhdGFcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJkYXRhXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICog546p5a625a+56LGhOiDooajnpLrkuIDkuKrmuLjmiI/njqnlrrbnmoTkv6Hmga9cbiAqL1xuRldTX01PREVMX0RBVEEuRlBsYXllciA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkZQbGF5ZXJcIixcbiAgICBcImV4dGVuZHNcIjogRldTX01PREVMLkZBYnN0cmFjdE1vZGVsLFxuXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcImRhdGFcIiwgbmV3IE9iamVjdCgpKTtcbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBmYWN0b3J5OiBuZXcgRldTX01PREVMX0RBVEEuRlBsYXllckZhY3RvcnkoKVxuICAgIH0sXG5cbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHJldHVybiBGV1NfTU9ERUxfREFUQS5GUGxheWVyLmZhY3RvcnkucmVzZXQodGhpcyk7XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJ1c2VyXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwidXNlclwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJkYXRhXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwiZGF0YVwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIOa4uOaIj+WvueixoTog6KGo56S65LiA5Liq5ri45oiP55qE5L+h5oGvXG4gKi9cbkZXU19NT0RFTF9EQVRBLkZHYW1lID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiRkdhbWVcIixcbiAgICBcImV4dGVuZHNcIjogRldTX01PREVMLkZBYnN0cmFjdE1vZGVsLFxuXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcImRhdGFcIiwgbmV3IE9iamVjdCgpKTtcbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBmYWN0b3J5OiBuZXcgRldTX01PREVMX0RBVEEuRkdhbWVGYWN0b3J5KClcbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICByZXR1cm4gRldTX01PREVMX0RBVEEuRkdhbWUuZmFjdG9yeS5yZXNldCh0aGlzKTtcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIC8v5ri45oiP5oi/6Ze0aWRcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiaWRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJpZFwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvL+a4uOaIj+aIv+mXtOWQjeensFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcIm5hbWVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJuYW1lXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8v5ri45oiP57G75Z6LICjkuZ3kurrmoYw/IOm6u+Wwhj8g5Yir55qEPylcbiAgICAgICAgZ2FtZVR5cGU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiZ2FtZVR5cGVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJnYW1lVHlwZVwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvL+a4uOaIj+aIv+mXtOexu+WeiyAoc3RkL3NuZy9tdHQgPylcbiAgICAgICAgcm9vbVR5cGU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwicm9vbVR5cGVcIik7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcInJvb21UeXBlXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8v5oi/6Ze05omA5bGe6ICF57G75Z6LICjlrpjmlrk/IOeOqeWutuiHquW7uj8g5ZCI5L2c5pa5PylcbiAgICAgICAgb3duZXJUeXBlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcIm93bmVyVHlwZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcIm93bmVyVHlwZVwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvL+aIv+S4u+eahOeUqOaIt+S/oeaBr1xuICAgICAgICBvd25lclVzZXI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwib3duZXJVc2VyXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwib3duZXJVc2VyXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8v6YKA6K+356CBXG4gICAgICAgIGNvZGU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiY29kZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcImNvZGVcIiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJkYXRhXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwiZGF0YVwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIOa4uOaIj+ahjOWvueixoTog6KGo56S65LiA5qGM5ri45oiP55qE5L+h5oGvXG4gKi9cbkZXU19NT0RFTF9EQVRBLkZHYW1lVGFibGUgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGR2FtZVRhYmxlXCIsXG4gICAgXCJleHRlbmRzXCI6IEZXU19NT0RFTC5GQWJzdHJhY3RNb2RlbCxcblxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJkYXRhXCIsIG5ldyBPYmplY3QoKSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzZWF0c1wiLCBuZXcgRldTX01PREVMLkZEaWN0KCkpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKFwiY3VycmVudFBsYXllclNlYXRcIiwgLTEpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKFwid2F0Y2hlcnNcIiwgbmV3IEZXU19NT0RFTC5GQXJyYXkoKSk7XG4gICAgfSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgZmFjdG9yeTogbmV3IEZXU19NT0RFTF9EQVRBLkZHYW1lVGFibGVGYWN0b3J5KClcbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICByZXR1cm4gRldTX01PREVMX0RBVEEuRkdhbWVUYWJsZS5mYWN0b3J5LnJlc2V0KHRoaXMpO1xuICAgIH0sXG5cbiAgICAvL+aJvuahjOS4iuaJvuaMh+WumueahHVpZCwg5bm26L+U5Zue5bqn5L2N5Y+3XG4gICAgZmluZFBsYXllck9uU2VhdHM6IGZ1bmN0aW9uIGZpbmRQbGF5ZXJPblNlYXRzKHVpZCkge1xuICAgICAgICB2YXIga2V5cyA9IHRoaXMuc2VhdHMua2V5cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrID0gdGhpcy5rZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMuc2VhdHMuZ2V0VmFsdWUoayk7XG4gICAgICAgICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAudXNlciAmJiBwLnVzZXIuaWQgPT0gdWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfSxcblxuICAgIC8v5Zyo5peB6KeC5YiX6KGo5om+5oyH5a6a55qEdWlkLCDlubbov5Tlm57luqfkvY3lj7dcbiAgICBmaW5kUGxheWVyT25XYXRjaGVyczogZnVuY3Rpb24gZmluZFBsYXllck9uV2F0Y2hlcnModWlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53YXRjaGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLndhdGNoZXJzW2ldO1xuICAgICAgICAgICAgaWYgKHAgJiYgcC51c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHAudXNlci5pZCA9PSB1aWQpIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8v6K6+572u546p5a626Iez5bqn5L2N5LiKXG4gICAgc2V0UGxheWVyVG9TZWF0OiBmdW5jdGlvbiBzZXRQbGF5ZXJUb1NlYXQocGxheWVyLCBzZWF0KSB7XG4gICAgICAgIHZhciBpID0gdGhpcy53YXRjaGVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIHRoaXMud2F0Y2hlcnMucmVtb3ZlKGkpO1xuXG4gICAgICAgIHRoaXMuc2VhdHMuc2V0VmFsdWUoc2VhdCwgcGxheWVyKTtcbiAgICB9LFxuXG4gICAgLy/orr7nva7njqnlrrbkuLrml4Hop4JcbiAgICBzZXRQbGF5ZXJUb1dhdGNoZXM6IGZ1bmN0aW9uIHNldFBsYXllclRvV2F0Y2hlcyhwbGF5ZXIpIHtcbiAgICAgICAgaWYgKHBsYXllciAmJiBwbGF5ZXIudXNlcikge1xuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLndhdGNoZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcnMucmVtb3ZlKGkpO1xuXG4gICAgICAgICAgICB2YXIgayA9IHRoaXMuZmluZFBsYXllck9uU2VhdHMocGxheWVyLnVzZXIudWlkKTtcbiAgICAgICAgICAgIHRoaXMuc2VhdHMuc2V0VmFsdWUoaywgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy/np7vpmaTnjqnlrrZcbiAgICByZW1vdmVQbGF5ZXI6IGZ1bmN0aW9uIHJlbW92ZVBsYXllcihwbGF5ZXIpIHtcbiAgICAgICAgaWYgKHBsYXllciAmJiBwbGF5ZXIudXNlcikge1xuICAgICAgICAgICAgdmFyIHNlYXQgPSB0aGlzLmZpbmRQbGF5ZXJPblNlYXRzKHBsYXllci51c2VyLmlkKTtcbiAgICAgICAgICAgIGlmIChzZWF0ID49IDApIHRoaXMuc2VhdHMuc2V0VmFsdWUoc2VhdCwgbnVsbCk7XG5cbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5maW5kUGxheWVyT25XYXRjaGVycyhwbGF5ZXIudXNlci5pZCk7XG4gICAgICAgICAgICBpZiAoaSA+PSAwKSB0aGlzLndhdGNoZXJzLnJlbW92ZShpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL+iOt+WPluaMh+Wummlk55qE546p5a625a+56LGhXG4gICAgZ2V0UGxheWVyQnlVaWQ6IGZ1bmN0aW9uIGdldFBsYXllckJ5VWlkKHVpZCkge1xuICAgICAgICB2YXIgc2VhdCA9IHRoaXMuZmluZFBsYXllck9uU2VhdHModWlkKTtcbiAgICAgICAgaWYgKHNlYXQgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhdHMuYXQoc2VhdCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IHRoaXMuZmluZFBsYXllck9uV2F0Y2hlcnModWlkKTtcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2F0Y2hlcnMuYXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOahjOWPt1xuICAgICAgICAgKi9cbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiaWRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJpZFwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5bqn5L2NXG4gICAgICAgICAqL1xuICAgICAgICBzZWF0czoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJzZWF0c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5peB6KeC546p5a625YiX6KGoXG4gICAgICAgICAqL1xuICAgICAgICB3YXRjaGVyczoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJ3YXRjaGVyc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5b2T5YmN546p5a6255qE5bqn5L2N5Y+3XG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50UGxheWVyU2VhdDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJjdXJyZW50UGxheWVyU2VhdFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcImN1cnJlbnRQbGF5ZXJTZWF0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmlbDmja5cbiAgICAgICAgICovXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiZGF0YVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcImRhdGFcIiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiDmuLjmiI/lsYDlr7nosaE6IOihqOekuuS4gOWxgOa4uOaIj+eahOS/oeaBryAo5Lmd5Lq65qGM55qE5LiA5omL54mMLCDpurvlsIbnmoTkuIDlsYDniYwpXG4gKi9cbkZXU19NT0RFTF9EQVRBLkZHYW1lUm91bmQgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGR2FtZVJvdW5kXCIsXG4gICAgXCJleHRlbmRzXCI6IEZXU19NT0RFTC5GQWJzdHJhY3RNb2RlbCxcblxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJkYXRhXCIsIG5ldyBPYmplY3QoKSk7XG4gICAgfSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgZmFjdG9yeTogbmV3IEZXU19NT0RFTF9EQVRBLkZHYW1lUm91bmRGYWN0b3J5KClcbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICByZXR1cm4gRldTX01PREVMX0RBVEEuRkdhbWVSb3VuZC5mYWN0b3J5LnJlc2V0KHRoaXMpO1xuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImlkXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwiaWRcIiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiDmuLjmiI/lr7nosaHmqKHlnotcbiAqL1xuRldTX01PREVMX0RBVEEuRkdhbWVNb2RlbCA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkZHYW1lTW9kZWxcIixcbiAgICBcImV4dGVuZHNcIjogRldTX01PREVMLkZBYnN0cmFjdE1vZGVsLFxuXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcImdhbWVzXCIsIG5ldyBGV1NfTU9ERUwuRkRpY3QoKSk7XG4gICAgfSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgY3VycmVudDogZnVuY3Rpb24gY3VycmVudCgpIHtcbiAgICAgICAgICAgIGlmIChGV1NfTU9ERUxfREFUQS5GR2FtZU1vZGVsLl9jdXJyZW50KSB7fSBlbHNlIEZXU19NT0RFTF9EQVRBLkZHYW1lTW9kZWwuX2N1cnJlbnQgPSBuZXcgRldTX01PREVMX0RBVEEuRkdhbWVNb2RlbCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gRldTX01PREVMX0RBVEEuRkdhbWVNb2RlbC5fY3VycmVudDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW9k+WJjeeOqeWutlxuICAgICAgICAgKi9cbiAgICAgICAgY3VycmVudFVzZXI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiY3VycmVudFVzZXJcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJjdXJyZW50VXNlclwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW9k+WJjea4uOaIj1xuICAgICAgICAgKi9cbiAgICAgICAgY3VycmVudEdhbWU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiY3VycmVudEdhbWVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJjdXJyZW50R2FtZVwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW9k+WJjea4uOaIj+ahjFxuICAgICAgICAgKi9cbiAgICAgICAgY3VycmVudEdhbWVUYWJsZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJjdXJyZW50R2FtZVRhYmxlXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwiY3VycmVudEdhbWVUYWJsZVwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5omA5pyJ5ri45oiPXG4gICAgICAgICAqL1xuICAgICAgICBnYW1lczoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJnYW1lc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5tb2R1bGUuZXhwb3J0cyA9IEZXU19NT0RFTF9EQVRBO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZjdjZDVlVzAxdEthWVFZaldseEpSa3knLCAnRldTX01PREVMJyk7XG4vLyBzY3JpcHRzL0ZXUy9GV1NfTU9ERUwuanNcblxudmFyIEZXU19NT0RFTCA9IHt9O1xuXG4vL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4vKipcbiAqIOaVsOaNrue7keWumuWKn+iDvSwg5pqC5pe25Y+q5pSv5oyB5Y2V5ZCR5pWw5o2u57uR5a6aXG4gKi9cbkZXU19NT0RFTC5GQmluZCA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkZCaW5kXCIsXG4gICAgc3RhdGljczoge1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgICAgICAgICAgIGlmIChGV1NfTU9ERUwuRkJpbmQuX0JJTkRfTU9ERUxTXykgcmV0dXJuO1xuICAgICAgICAgICAgRldTX01PREVMLkZCaW5kLl9CSU5EX01PREVMU18gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIEZXU19NT0RFTC5GQmluZC5fQklORF9BUlJBWVNfID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBGV1NfTU9ERUwuRkJpbmQuX0JJTkRfRElDVFNfID0gbmV3IEFycmF5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG5vdGlmeUFycmF5Q2hhbmdlZDogZnVuY3Rpb24gbm90aWZ5QXJyYXlDaGFuZ2VkKHNvdXJjZSwgYWN0aW9uLCBpbmRleCwgbWVtYmVyKSB7XG4gICAgICAgICAgICBGV1NfTU9ERUwuRkJpbmQuaW5pdCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBGV1NfTU9ERUwuRkJpbmQuX0JJTkRfQVJSQVlTXy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gRldTX01PREVMLkZCaW5kLl9CSU5EX0FSUkFZU19baV07XG4gICAgICAgICAgICAgICAgaWYgKGxpbmsuc291cmNlID09PSBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsudGFyZ2V0IGluc3RhbmNlb2YgRldTX01PREVMLkZBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSBcImFkZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay50YXJnZXQuYWRkKG1lbWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcImluc2VydFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay50YXJnZXQuaW5zZXJ0KG1lbWJlciwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJyZW1vdmVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsudGFyZ2V0LnJlbW92ZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcIm1vZGlmeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay50YXJnZXQubW9kaWZ5KGluZGV4LCBtZW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJjbGVhclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay50YXJnZXQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLnRhcmdldC5vbkJpbmRBcnJheUNoYW5nZWQgJiYgdHlwZW9mIGxpbmsudGFyZ2V0Lm9uQmluZEFycmF5Q2hhbmdlZCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnRhcmdldC5vbkJpbmRBcnJheUNoYW5nZWQoYWN0aW9uLCBpbmRleCwgbWVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbm90aWZ5RGljdENoYW5nZWQ6IGZ1bmN0aW9uIG5vdGlmeURpY3RDaGFuZ2VkKHNvdXJjZSwgaywgdikge1xuICAgICAgICAgICAgRldTX01PREVMLkZCaW5kLmluaXQoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgRldTX01PREVMLkZCaW5kLl9CSU5EX0RJQ1RTXy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gRldTX01PREVMLkZCaW5kLl9CSU5EX0RJQ1RTX1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobGluay5zb3VyY2UgPT09IHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGluay50YXJnZXQgaW5zdGFuY2VvZiBGV1NfTU9ERUwuRkRpY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrKSBsaW5rLnRhcmdldC5zZXRWYWx1ZShrLCB2KTtlbHNlIGxpbmsudGFyZ2V0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluay50YXJnZXQub25CaW5kRGljdENoYW5nZWQgJiYgdHlwZW9mIGxpbmsudGFyZ2V0Lm9uQmluZERpY3RDaGFuZ2VkID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsudGFyZ2V0Lm9uQmluZERpY3RDaGFuZ2VkKGssIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBub3RpZnlEYXRhVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbiBub3RpZnlEYXRhVmFsdWVDaGFuZ2VkKHNvdXJjZSwgcHJvcGVydHlOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIEZXU19NT0RFTC5GQmluZC5pbml0KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEZXU19NT0RFTC5GQmluZC5fQklORF9NT0RFTFNfLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSBGV1NfTU9ERUwuRkJpbmQuX0JJTkRfTU9ERUxTX1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobGluay5zb3VyY2UgPT09IHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGluay5tYXBbcHJvcGVydHlOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFByb3BlcnR5TmFtZSA9IGxpbmsubWFwW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnRhcmdldFt0YXJnZXRQcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoc291cmNlLCB0YXJnZXQsIGFyeSkge1xuICAgICAgICAgICAgRldTX01PREVMLkZCaW5kLmluaXQoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSBhcnlbaV07XG4gICAgICAgICAgICAgICAgaWYgKGxpbmsuc291cmNlID09PSBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsudGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW5rO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiaW5kTW9kZWw6IGZ1bmN0aW9uIGJpbmRNb2RlbChzb3VyY2UsIHRhcmdldCwgcHJvcGVydGllc01hcCkge1xuICAgICAgICAgICAgRldTX01PREVMLkZCaW5kLmluaXQoKTtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzTWFwICYmIHNvdXJjZSAmJiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBGV1NfTU9ERUwuRkJpbmQuZmluZChzb3VyY2UsIHRhcmdldCwgRldTX01PREVMLkZCaW5kLl9CSU5EX01PREVMU18pO1xuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgICAgICAgICAgbGluay5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgICAgICAgICAgbGluay50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgbGluay5tYXAgPSBwcm9wZXJ0aWVzTWFwO1xuICAgICAgICAgICAgICAgIEZXU19NT0RFTC5GQmluZC5fQklORF9NT0RFTFNfLnB1c2gobGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJpbmRBcnJheTogZnVuY3Rpb24gYmluZEFycmF5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgICAgICBGV1NfTU9ERUwuRkJpbmQuaW5pdCgpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZSAmJiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBGV1NfTU9ERUwuRkJpbmQuZmluZChzb3VyY2UsIHRhcmdldCwgRldTX01PREVMLkZCaW5kLl9CSU5EX0FSUkFZU18pO1xuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gbmV3IE9iamVjdCgpO1xuICAgICAgICAgICAgICAgIGxpbmsuc291cmNlID0gc291cmNlO1xuICAgICAgICAgICAgICAgIGxpbmsudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIEZXU19NT0RFTC5GQmluZC5fQklORF9BUlJBWVNfLnB1c2gobGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJpbmREaWN0OiBmdW5jdGlvbiBiaW5kRGljdChzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgRldTX01PREVMLkZCaW5kLmluaXQoKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgJiYgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gRldTX01PREVMLkZCaW5kLmZpbmQoc291cmNlLCB0YXJnZXQsIEZXU19NT0RFTC5GQmluZC5fQklORF9ESUNUU18pO1xuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gbmV3IE9iamVjdCgpO1xuICAgICAgICAgICAgICAgIGxpbmsuc291cmNlID0gc291cmNlO1xuICAgICAgICAgICAgICAgIGxpbmsudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIEZXU19NT0RFTC5GQmluZC5fQklORF9ESUNUU18ucHVzaChsaW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB1bmJpbmRNb2RlbDogZnVuY3Rpb24gdW5iaW5kTW9kZWwoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIEZXU19NT0RFTC5GQmluZC5pbml0KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gRldTX01PREVMLkZCaW5kLl9CSU5EX01PREVMU18ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbGluayA9IEZXU19NT0RFTC5GQmluZC5fQklORF9NT0RFTFNfW2ldO1xuICAgICAgICAgICAgICAgIGlmIChsaW5rLnNvdXJjZSA9PT0gc291cmNlICYmIGxpbmsudGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgRldTX01PREVMLkZCaW5kLl9CSU5EX01PREVMU18uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdW5iaW5kQXJyYXk6IGZ1bmN0aW9uIHVuYmluZEFycmF5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgICAgICBGV1NfTU9ERUwuRkJpbmQuaW5pdCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IEZXU19NT0RFTC5GQmluZC5fQklORF9BUlJBWVNfLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSBGV1NfTU9ERUwuRkJpbmQuX0JJTkRfQVJSQVlTX1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobGluay5zb3VyY2UgPT09IHNvdXJjZSAmJiBsaW5rLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIEZXU19NT0RFTC5GQmluZC5fQklORF9BUlJBWVNfLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVuYmluZERpY3Q6IGZ1bmN0aW9uIHVuYmluZERpY3Qoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIEZXU19NT0RFTC5GQmluZC5pbml0KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gRldTX01PREVMLkZCaW5kLl9CSU5EX0RJQ1RTXy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gRldTX01PREVMLkZCaW5kLl9CSU5EX0RJQ1RTX1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobGluay5zb3VyY2UgPT09IHNvdXJjZSAmJiBsaW5rLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIEZXU19NT0RFTC5GQmluZC5fQklORF9ESUNUU18uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIOS4gOS4quaUr+aMgeWxnuaAp+WPmOWKqOS6i+S7tueahOaVsOaNruexu1xuICovXG5GV1NfTU9ERUwuRkFic3RyYWN0TW9kZWwgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGQWJzdHJhY3RNb2RlbFwiLFxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Byb3BlcnR5VmFsdWVzXyA9IG5ldyBPYmplY3QoKTtcbiAgICB9LFxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZShwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Byb3BlcnR5VmFsdWVzX1twcm9wZXJ0eU5hbWVdID09PSBwcm9wZXJ0eVZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5fcHJvcGVydHlWYWx1ZXNfW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgICAgdGhpcy5fcHJvcGVydHlWYWx1ZXNfW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0eVZhbHVlO1xuXG4gICAgICAgIEZXU19NT0RFTC5GQmluZC5ub3RpZnlEYXRhVmFsdWVDaGFuZ2VkKHRoaXMsIHByb3BlcnR5TmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9LFxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShwcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fcHJvcGVydHlWYWx1ZXNfW3Byb3BlcnR5TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0eVZhbHVlc19bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWUpIHJldHVybiBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9wcm9wZXJ0eVZhbHVlc18pO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIOS4gOS4quaUr+aMgeaVsOaNruaIkOWRmOWPmOWKqOmAmuefpeeahOaVsOe7hFxuICovXG5GV1NfTU9ERUwuRkFycmF5ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiRkFycmF5XCIsXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdmFyIHNyYyA9IG51bGw7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkgc3JjID0gYXJndW1lbnRzWzBdO1xuICAgICAgICB0aGlzLl9hcnJheV8gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcnJheV8ucHVzaChzcmNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uIGFkZChpdGVtKSB7XG4gICAgICAgIHRoaXMuX2FycmF5Xy5wdXNoKGl0ZW0pO1xuICAgICAgICBGV1NfTU9ERUwuRkJpbmQubm90aWZ5QXJyYXlDaGFuZ2VkKHRoaXMsIFwiYWRkXCIsIHRoaXMuX2FycmF5Xy5sZW5ndGggLSAxLCBpdGVtKTtcbiAgICB9LFxuICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5fYXJyYXlfLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICAgICAgdGhpcy5fYXJyYXlfLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIEZXU19NT0RFTC5GQmluZC5ub3RpZnlBcnJheUNoYW5nZWQodGhpcywgXCJpbnNlcnRcIiwgaW5kZXgsIGl0ZW0pO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl9hcnJheV8ubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuX2FycmF5X1tpbmRleF07XG4gICAgICAgIHRoaXMuX2FycmF5Xy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBGV1NfTU9ERUwuRkJpbmQubm90aWZ5QXJyYXlDaGFuZ2VkKHRoaXMsIFwicmVtb3ZlXCIsIGluZGV4LCBpdGVtKTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5fYXJyYXlfLnNwbGljZSgwLCB0aGlzLl9hcnJheV8ubGVuZ3RoKTtcbiAgICAgICAgRldTX01PREVMLkZCaW5kLm5vdGlmeUFycmF5Q2hhbmdlZCh0aGlzLCBcImNsZWFyXCIsIDAsIG51bGwpO1xuICAgIH0sXG4gICAgYXQ6IGZ1bmN0aW9uIGF0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5fYXJyYXlfLmxlbmd0aCAtIDEpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXlfW2luZGV4XTtcbiAgICB9LFxuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KGluZGV4LCBpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLl9hcnJheV9baW5kZXhdID09PSBpdGVtKSByZXR1O1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuX2FycmF5Xy5sZW5ndGggLSAxKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2FycmF5X1tpbmRleF0gPSBpdGVtO1xuICAgICAgICBGV1NfTU9ERUwuRkJpbmQubm90aWZ5QXJyYXlDaGFuZ2VkKHRoaXMsIFwibW9kaWZ5XCIsIGluZGV4LCBpdGVtKTtcbiAgICB9LFxuICAgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2YoaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXlfLmluZGV4T2YoaXRlbSk7XG4gICAgfSxcbiAgICBsZW5ndGg6IGZ1bmN0aW9uIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5Xy5sZW5ndGg7XG4gICAgfSxcbiAgICB0b0FycmF5OiBmdW5jdGlvbiB0b0FycmF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXlfLnNsaWNlKDApO1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXlfLnRvU3RyaW5nKCk7XG4gICAgfVxufSk7XG5cbi8qKlxuICog5LiA5Liq5pSv5oyB6ZSu5YC85Y+Y5YyW5LqL5Lu255qE5pWw5o2u57G7XG4gKi9cbkZXU19NT0RFTC5GRGljdCA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkZEaWN0XCIsXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdmFyIHNyY09iaiA9IG51bGw7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkgc3JjT2JqID0gYXJndW1lbnRzWzBdO1xuICAgICAgICB0aGlzLl9vYmpfID0gbmV3IE9iamVjdCgpO1xuICAgICAgICBmb3IgKHZhciBrIGluIHNyY09iaikge1xuICAgICAgICAgICAgdGhpcy5fb2JqX1trXSA9IHNyY09ialtrXTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKGssIHYpIHtcbiAgICAgICAgaWYgKHRoaXMuX29ial9ba10gPT09IHYpIHJldHVybjtcbiAgICAgICAgdGhpcy5fb2JqX1trXSA9IHY7XG4gICAgICAgIEZXU19NT0RFTC5GQmluZC5ub3RpZnlEaWN0Q2hhbmdlZCh0aGlzLCBrLCB2KTtcbiAgICB9LFxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShrKSB7XG4gICAgICAgIGlmICh0aGlzLl9vYmpfW2tdKSByZXR1cm4gdGhpcy5fb2JqX1trXTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBmaW5kVmFsdWU6IGZ1bmN0aW9uIGZpbmRWYWx1ZSh2KSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5fb2JqXykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29ial9ba10gPT0gdikgcmV0dXJuIGs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5fb2JqXykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX29ial9ba107XG4gICAgICAgIH1cbiAgICAgICAgRldTX01PREVMLkZCaW5kLm5vdGlmeURpY3RDaGFuZ2VkKHRoaXMsIG51bGwsIG51bGwpO1xuICAgIH0sXG4gICAgY291bnQ6IGZ1bmN0aW9uIGNvdW50KCkge1xuICAgICAgICB2YXIgcmV0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgayBpbiB0aGlzLl9vYmpfKSB7XG4gICAgICAgICAgICByZXQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBrIGluIHRoaXMuX29ial8pIHtcbiAgICAgICAgICAgIHJldC5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBrIGluIHRoaXMuX29ial8pIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuX29ial9ba10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9vYmpfKTtcbiAgICB9XG59KTtcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxubW9kdWxlLmV4cG9ydHMgPSBGV1NfTU9ERUw7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyOTY3ZUJEYTQ5RzVMUklYRzJDSlVDVycsICdGV1NfTVNHJyk7XG4vLyBzY3JpcHRzL0ZXUy9GV1NfTVNHLmpzXG5cbnZhciBGV1NfTVNHID0ge307XG52YXIgRldTX01WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuXG5GV1NfTVNHLkZXU01lc3NhZ2VGYWN0b3J5ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiRldTTWVzc2FnZUZhY3RvcnlcIixcbiAgICBzdGF0aWNzOiB7XG5cbiAgICAgICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgU29ja2V0XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDov57mjqXor7fmsYJcbiAgICAgICAgICovXG4gICAgICAgIHNvY2tldENvbm5lY3Q6IGZ1bmN0aW9uIHNvY2tldENvbm5lY3QodHlwZSwgaXAsIHBvcnQpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcInNvY2tldENvbm5lY3RcIiwgXCJzb2NrZXRcIik7XG4gICAgICAgICAgICByZXQuYXJncy50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIHJldC5hcmdzLmlwID0gaXA7XG4gICAgICAgICAgICByZXQuYXJncy5wb3J0ID0gcG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWFs+mXrei/nuaOpVxuICAgICAgICAgKi9cbiAgICAgICAgc29ja2V0Q2xvc2U6IGZ1bmN0aW9uIHNvY2tldENsb3NlKHR5cGUpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcInNvY2tldENsb3NlXCIsIFwic29ja2V0XCIpO1xuICAgICAgICAgICAgcmV0LmFyZ3MudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlj5HpgIHmlbDmja5cbiAgICAgICAgICovXG4gICAgICAgIHNvY2tldFNlbmQ6IGZ1bmN0aW9uIHNvY2tldFNlbmQocGFjaykge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBGV1NfTVZDLkZNZXNzYWdlKFwic29ja2V0U2VuZFwiLCBcInNvY2tldFwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLnBhY2sgPSBwYWNrO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5o6l5pS25pWw5o2u5pe2XG4gICAgICAgICAqL1xuICAgICAgICBzb2NrZXRPblJlY2VpdmU6IGZ1bmN0aW9uIHNvY2tldE9uUmVjZWl2ZShwYWNrKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJzb2NrZXRPblJlY2VpdmVcIiwgXCJzb2NrZXRcIik7XG4gICAgICAgICAgICByZXQuYXJncy5wYWNrID0gcGFjaztcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOi/nuaOpeaIkOWKn+aIluiAhei/nuaOpeWksei0peaXtlxuICAgICAgICAgKi9cbiAgICAgICAgc29ja2V0T25Db25uZWN0OiBmdW5jdGlvbiBzb2NrZXRPbkNvbm5lY3QodHlwZSwgc3VjY2Vzcykge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBGV1NfTVZDLkZNZXNzYWdlKFwic29ja2V0T25Db25uZWN0XCIsIFwic29ja2V0XCIpO1xuICAgICAgICAgICAgcmV0LmFyZ3MudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICByZXQuYXJncy5yZXRjb2RlID0gc3VjY2VzcyA/IDAgOiAtMTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOi/nuaOpeiiq+WFs+mXreaXtlxuICAgICAgICAgKi9cbiAgICAgICAgc29ja2V0T25DbG9zZTogZnVuY3Rpb24gc29ja2V0T25DbG9zZSh0eXBlKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJzb2NrZXRPbkNsb3NlXCIsIFwic29ja2V0XCIpO1xuICAgICAgICAgICAgcmV0LmFyZ3MudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIENvbW1vblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDov57mjqXmnI3liqHlmahcbiAgICAgICAgICovXG4gICAgICAgIHNlcnZlckNvbm5lY3Q6IGZ1bmN0aW9uIHNlcnZlckNvbm5lY3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJzZXJ2ZXJDb25uZWN0XCIsIFwidWlcIik7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDov57mjqXmnI3liqHlmajmiJDlip/miJbogIXlpLHotKVcbiAgICAgICAgICovXG4gICAgICAgIHNlcnZlckNvbm5lY3RSZXN1bHQ6IGZ1bmN0aW9uIHNlcnZlckNvbm5lY3RSZXN1bHQocmV0Y29kZSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBGV1NfTVZDLkZNZXNzYWdlKFwic2VydmVyQ29ubmVjdFJlc3VsdFwiLCBcInVpXCIpO1xuICAgICAgICAgICAgcmV0LmFyZ3MucmV0Y29kZSA9IHJldGNvZGU7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIFVzZXJcblxuICAgICAgICAvKipcbiAgICAgICAgICog5qCH5YeG5rOo5YaMXG4gICAgICAgICAqL1xuICAgICAgICB1c2VyUmVnOiBmdW5jdGlvbiB1c2VyUmVnKCkge1xuICAgICAgICAgICAgdmFyIHJldCA9IEZXU19NVkMuRk1lc3NhZ2UoXCJ1c2VyUmVnXCIsIFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOagh+WHhuazqOWGjOe7k+aenFxuICAgICAgICAgKi9cbiAgICAgICAgdXNlclJlZ1Jlc3VsdDogZnVuY3Rpb24gdXNlclJlZ1Jlc3VsdChyZXRjb2RlKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gRldTX01WQy5GTWVzc2FnZShcInVzZXJSZWdSZXN1bHRcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLnJldGNvZGUgPSByZXRjb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5qCH5YeG55m75b2VXG4gICAgICAgICAqL1xuICAgICAgICB1c2VyTG9naW46IGZ1bmN0aW9uIHVzZXJMb2dpbih1aWQsIHB3ZCkge1xuICAgICAgICAgICAgdmFyIHJldCA9IEZXU19NVkMuRk1lc3NhZ2UoXCJ1c2VyTG9naW5cIiwgXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICog5qCH5YeG55m75b2V57uT5p6cXG4gICAgICAgICAqL1xuICAgICAgICB1c2VyTG9naW5SZXN1bHQ6IGZ1bmN0aW9uIHVzZXJMb2dpblJlc3VsdChyZXRjb2RlKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gRldTX01WQy5GTWVzc2FnZShcInVzZXJMb2dpblJlc3VsdFwiLCBcInVpXCIpO1xuICAgICAgICAgICAgcmV0LmFyZ3MucmV0Y29kZSA9IHJldGNvZGU7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIFJvb21cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Yib5bu65oi/6Ze0XG4gICAgICAgICAqIEBwYXJhbSBuYW1lIOaIv+mXtOWQjeensFxuICAgICAgICAgKiBAcGFyYW0gcm9vbVR5cGUg5oi/6Ze057G75Z6LXG4gICAgICAgICAqIEBwYXJhbSByb29tIOaIv+mXtOaVsOaNriAoUDlTVERHYW1lRGF0YS9QOU1UVEdhbWVEYXRhKVxuICAgICAgICAgKi9cbiAgICAgICAgcm9vbUNyZWF0ZTogZnVuY3Rpb24gcm9vbUNyZWF0ZShuYW1lLCByb29tVHlwZSwgcm9vbSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBGV1NfTVZDLkZNZXNzYWdlKFwicm9vbUNyZWF0ZVwiLCBcIlwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgcmV0LmFyZ3Mucm9vbVR5cGUgPSByb29tVHlwZTtcbiAgICAgICAgICAgIHJldC5hcmdzLnJvb20gPSByb29tO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcbiAgICAgICAgcm9vbUNyZWF0ZVJlc3VsdDogZnVuY3Rpb24gcm9vbUNyZWF0ZVJlc3VsdChyZXRjb2RlLCBnYW1lKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJyb29tQ3JlYXRlUmVzdWx0XCIsIFwidWlcIik7XG4gICAgICAgICAgICByZXQuYXJncy5yZXRjb2RlID0gcmV0Y29kZTtcbiAgICAgICAgICAgIHJldC5hcmdzLmdhbWUgPSBnYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Yqg5YWl5oi/6Ze0XG4gICAgICAgICAqL1xuICAgICAgICByb29tSm9pbjogZnVuY3Rpb24gcm9vbUpvaW4oY29kZSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBGV1NfTVZDLkZNZXNzYWdlKFwicm9vbUpvaW5cIiwgXCJcIik7XG4gICAgICAgICAgICByZXQuYXJncy5jb2RlID0gY29kZTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJvb21Kb2luUmVzdWx0OiBmdW5jdGlvbiByb29tSm9pblJlc3VsdChyZXRjb2RlLCBnYW1lKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJyb29tSm9pblJlc3VsdFwiLCBcInVpXCIpO1xuICAgICAgICAgICAgcmV0LmFyZ3MucmV0Y29kZSA9IHJldGNvZGU7XG4gICAgICAgICAgICByZXQuYXJncy5nYW1lID0gZ2FtZTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWFs+mXreaIv+mXtFxuICAgICAgICAgKi9cbiAgICAgICAgcm9vbUVuZDogZnVuY3Rpb24gcm9vbUVuZCgpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcInJvb21FbmRcIiwgXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuICAgICAgICByb29tRW5kUmVzdWx0OiBmdW5jdGlvbiByb29tRW5kUmVzdWx0KHJldGNvZGUpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcInJvb21FbmRSZXN1bHRcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLnJldGNvZGUgPSByZXRjb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcbiAgICAgICAgcm9vbU9uRW5kOiBmdW5jdGlvbiByb29tT25FbmQoKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJyb29tT25FbmRcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcm9vbU9uR290b1RhYmxlOiBmdW5jdGlvbiByb29tT25Hb3RvVGFibGUoKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJyb29tT25Hb3RvVGFibGVcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8gOWni+aIv+mXtFxuICAgICAgICAgKi9cbiAgICAgICAgcm9vbVN0YXJ0OiBmdW5jdGlvbiByb29tU3RhcnQoKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJyb29tU3RhcnRcIiwgXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuICAgICAgICByb29tU3RhcnRSZXN1bHQ6IGZ1bmN0aW9uIHJvb21TdGFydFJlc3VsdChyZXRjb2RlKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJyb29tU3RhcnRSZXN1bHRcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLnJldGNvZGUgPSByZXRjb2RlO1xuICAgICAgICB9LFxuICAgICAgICByb29tT25TdGFydDogZnVuY3Rpb24gcm9vbU9uU3RhcnQoKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJyb29tT25TdGFydFwiLCBcInVpXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBHYW1lICAgICAgIFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliqDlhaXmuLjmiI8o5LiK5qGMLOaKpeWQjSlcbiAgICAgICAgICovXG4gICAgICAgIGdhbWVKb2luOiBmdW5jdGlvbiBnYW1lSm9pbigpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcImdhbWVKb2luXCIsIFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2FtZUpvaW5SZXN1bHQ6IGZ1bmN0aW9uIGdhbWVKb2luUmVzdWx0KHJldGNvZGUpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcImdhbWVKb2luUmVzdWx0XCIsIFwidWlcIik7XG4gICAgICAgICAgICByZXQuYXJncy5yZXRjb2RlID0gcmV0Y29kZTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdhbWVPbkpvaW46IGZ1bmN0aW9uIGdhbWVPbkpvaW4oKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJnYW1lT25Kb2luXCIsIFwidWlcIik7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDml4Hop4LmuLjmiI9cbiAgICAgICAgICovXG4gICAgICAgIGdhbWVXYXRjaDogZnVuY3Rpb24gZ2FtZVdhdGNoKCkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBGV1NfTVZDLkZNZXNzYWdlKFwiZ2FtZVdhdGNoXCIsIFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2FtZVdhdGNoUmVzdWx0OiBmdW5jdGlvbiBnYW1lV2F0Y2hSZXN1bHQocmV0Y29kZSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBGV1NfTVZDLkZNZXNzYWdlKFwiZ2FtZVdhdGNoUmVzdWx0XCIsIFwidWlcIik7XG4gICAgICAgICAgICByZXQuYXJncy5yZXRjb2RlID0gcmV0Y29kZTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdhbWVPbldhdGNoOiBmdW5jdGlvbiBnYW1lT25XYXRjaCgpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcImdhbWVPbldhdGNoXCIsIFwidWlcIik7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmgaLlpI3muLjmiI9cbiAgICAgICAgICovXG4gICAgICAgIGdhbWVSZXN1bWU6IGZ1bmN0aW9uIGdhbWVSZXN1bWUoKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJnYW1lUmVzdW1lXCIsIFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2FtZVJlc3VtZVJlc3VsdDogZnVuY3Rpb24gZ2FtZVJlc3VtZVJlc3VsdChyZXRjb2RlKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJnYW1lUmVzdW1lUmVzdWx0XCIsIFwidWlcIik7XG4gICAgICAgICAgICByZXQuYXJncy5yZXRjb2RlID0gcmV0Y29kZTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa4uOaIj+Wwsee7qlxuICAgICAgICAgKi9cbiAgICAgICAgZ2FtZVJlYWR5OiBmdW5jdGlvbiBnYW1lUmVhZHkoKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJnYW1lUmVhZHlcIiwgXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuICAgICAgICBnYW1lT25SZWFkeTogZnVuY3Rpb24gZ2FtZU9uUmVhZHkoKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJnYW1lT25SZWFkeVwiLCBcInVpXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5ri45oiP5byA5aeL5pe2XG4gICAgICAgICAqL1xuICAgICAgICBnYW1lT25TdGFydDogZnVuY3Rpb24gZ2FtZU9uU3RhcnQoc3RhcnREYXRhKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJnYW1lT25TdGFydFwiLCBcInVpXCIpO1xuICAgICAgICAgICAgcmV0LmFyZ3Muc3RhcnREYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5ri45oiP57uT5p2f5pe2XG4gICAgICAgICAqL1xuICAgICAgICBnYW1lT25SZXN1bHQ6IGZ1bmN0aW9uIGdhbWVPblJlc3VsdChyZXN1bHREYXRhKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IEZXU19NVkMuRk1lc3NhZ2UoXCJnYW1lT25SZXN1bHRcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLnJlc3VsdERhdGEgPSByZXN1bHREYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6K+i6Zeu546p5a625Yqo5L2cXG4gICAgICAgICAqL1xuICAgICAgICBnYW1lQWN0aW9uUmVxOiBmdW5jdGlvbiBnYW1lQWN0aW9uUmVxKGFjdGlvblJlcURhdGEpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcImdhbWVBY3Rpb25SZXFcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLmFjdGlvblJlcURhdGEgPSBhY3Rpb25SZXFEYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog546p5a625Yqo5L2c6YCJ5oupXG4gICAgICAgICAqL1xuICAgICAgICBnYW1lQWN0aW9uQWNrOiBmdW5jdGlvbiBnYW1lQWN0aW9uQWNrKGFjdGlvbkFja0RhdGEpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcImdhbWVBY3Rpb25BY2tcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLmFjdGlvbkFja0RhdGEgPSBhY3Rpb25BY2tEYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog546p5a625Yqo5L2c57uT5p6cXG4gICAgICAgICAqL1xuICAgICAgICBnYW1lQWN0aW9uQWNrUmVzdWx0OiBmdW5jdGlvbiBnYW1lQWN0aW9uQWNrUmVzdWx0KHJldGNvZGUpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcImdhbWVBY3Rpb25BY2tSZXN1bHRcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLnJldGNvZGUgPSByZXRjb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog546p5a625Yqo5L2c6YCa55+lXG4gICAgICAgICAqL1xuICAgICAgICBnYW1lQWN0aW9uTm90aWZ5OiBmdW5jdGlvbiBnYW1lQWN0aW9uTm90aWZ5KGFjdGlvbk5vdGlmeURhdGEpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgRldTX01WQy5GTWVzc2FnZShcImdhbWVBY3Rpb25Ob3RpZnlcIiwgXCJ1aVwiKTtcbiAgICAgICAgICAgIHJldC5hcmdzLmFjdGlvbk5vdGlmeURhdGEgPSBhY3Rpb25Ob3RpZnlEYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5ri45oiP5LqL5Lu26YCa55+lXG4gICAgICAgICAqL1xuICAgICAgICBnYW1lRXZlbnROb3RpZnk6IGZ1bmN0aW9uIGdhbWVFdmVudE5vdGlmeShldmVudFR5cGUsIGV2ZW50Tm90aWZ5RGF0YSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBGV1NfTVZDLkZNZXNzYWdlKFwiZ2FtZUV2ZW50Tm90aWZ5XCIsIFwidWlcIik7XG4gICAgICAgICAgICByZXQuYXJncy5ldmVudFR5cGUgPSBldmVudFR5cGU7XG4gICAgICAgICAgICByZXQuYXJncy5ldmVudE5vdGlmeURhdGEgPSBldmVudE5vdGlmeURhdGE7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbm1vZHVsZS5leHBvcnRzID0gRldTX01TRztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzU0YTA1cUdRZkZBRDZ5R3QyWm1pSVZDJywgJ0ZXU19NVkMnKTtcbi8vIHNjcmlwdHMvRldTL0ZXU19NVkMuanNcblxuLypcbiAqIOWFrOWFseS7o+eggeeahE1WQ+ahhuaetlxuICogQEF1dGhvcjogdGhvci5saXUgXG4gKiBARGF0ZTogMjAxNi0xMS0yNSAxMDo0MDozMSBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiB0aG9yLmxpdVxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0xMi0wNSAxNzoxOTo0MlxuICovXG5cbnZhciBGV1NfTVZDID0ge307XG5cbi8qKlxuICog5pel5b+X5Yqf6IO9XG4gKi9cbkZXU19NVkMuRkxvZyA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkZMb2dcIixcbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDovpPlh7rkv6Hmga/nsbvml6Xlv5dcbiAgICAgICAgICovXG4gICAgICAgIGluZm86IGZ1bmN0aW9uIGluZm8odGFncywgdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBhcmdzLnB1c2goXCJJTkZPXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEZXU19NVkMuRkxvZy5vdXRwdXQoYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDovpPlh7rorablkYrnsbvml6Xlv5dcbiAgICAgICAgICovXG4gICAgICAgIHdhcm46IGZ1bmN0aW9uIHdhcm4odGFncywgdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBhcmdzLnB1c2goXCJXQVJOXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEZXU19NVkMuRkxvZy5vdXRwdXQoYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDovpPlh7rplJnor6/nsbvml6Xlv5dcbiAgICAgICAgICovXG4gICAgICAgIGVycjogZnVuY3Rpb24gZXJyKHRhZ3MsIHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgYXJncy5wdXNoKFwiRVJST1JcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRldTX01WQy5GTG9nLm91dHB1dChhcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOi+k+WHuuaVsOaNruexu+aXpeW/l1xuICAgICAgICAgKi9cbiAgICAgICAgZGF0YTogZnVuY3Rpb24gZGF0YSh0YWdzLCB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGFyZ3MucHVzaChcIkRBVEFcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRldTX01WQy5GTG9nLm91dHB1dChhcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOi+k+WHuuaXpeW/l+S/oeaBr+iHs+aOp+WItuWPsCwg5oiW6ICF5LmL5ZCO55yL5oOF5Ya15Y675YaZ5pel5b+X5paH5Lu2LCDmiJbogIXlj5Hnu5nml6Xlv5fmnI3liqFcbiAgICAgICAgICovXG4gICAgICAgIG91dHB1dDogZnVuY3Rpb24gb3V0cHV0KGFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDMpIHJldHVybjtcbiAgICAgICAgICAgIHZhciB0eXBlID0gYXJnc1swXTtcbiAgICAgICAgICAgIHZhciB0YWdzID0gYXJnc1sxXTtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBhcmdzWzJdICsgXCJcIjtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDM7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoXCJ7XCIgKyAoaSAtIDMpICsgXCJ9XCIsIGFyZ3NbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gXCIoXCIgKyB0YWdzICsgXCIpIFwiICsgZm9ybWF0O1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBcIklORk9cIikge1xuICAgICAgICAgICAgICAgIGNjLmluZm8ob3V0cHV0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIkVSUk9SXCIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihvdXRwdXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwiV0FSTlwiKSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihvdXRwdXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2cob3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vVE9ETzog5YaZ5LiA5Liq5paH5pys5paH5Lu2XG4gICAgICAgIH1cbiAgICB9XG59KSxcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuLyoqXG4gKiDmtojmga/pgJrnn6VcbiAqL1xuRldTX01WQy5GTWVzc2FnZSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkZNZXNzYWdlXCIsXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcblxuICAgICAgICB2YXIgbXNnVHlwZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgdmFyIG1zZ0NhdGVnb3J5ID0gYXJndW1lbnRzWzFdO1xuXG4gICAgICAgIHRoaXMuX3R5cGUgPSBtc2dUeXBlO1xuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IG1zZ0NhdGVnb3J5O1xuICAgICAgICB0aGlzLl9pbmRleCA9IEZXU19NVkMuRk1lc3NhZ2UuX25leHRJbmRleDtcbiAgICAgICAgRldTX01WQy5GTWVzc2FnZS5fbmV4dEluZGV4Kys7XG5cbiAgICAgICAgdGhpcy5faXNTZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hcmdzID0gbmV3IE9iamVjdCgpO1xuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIF9uZXh0SW5kZXg6IDBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5raI5oGv57G75Z6LXG4gICAgICovXG4gICAgdHlwZTogZnVuY3Rpb24gdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPlua2iOaBr+WIhuexu1xuICAgICAqL1xuICAgIGNhdGVnb3J5OiBmdW5jdGlvbiBjYXRlZ29yeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5raI5oGv5piv5ZCm5bey57uP5a6M5oiQXG4gICAgICovXG4gICAgaXNDb21wbGV0ZWQ6IGZ1bmN0aW9uIGlzQ29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNDb21wbGV0ZWQ7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5bmtojmga/mmK/lkKblt7Lnu4/lj5HpgIFcbiAgICAgKi9cbiAgICBpc1NlbmRlZDogZnVuY3Rpb24gaXNTZW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbmRlZDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWPkemAgea2iOaBr+WIsOa2iOaBr+i3r+eUsVxuICAgICAqL1xuICAgIHNlbmQ6IGZ1bmN0aW9uIHNlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NlbmRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9pc1NlbmRlZCA9IHRydWU7XG5cbiAgICAgICAgRldTX01WQy5GTWVzc2FnZVJvdXRlci5zZW5kKHRoaXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6YCa55+l5raI5oGv5bey57uP5a6M5oiQXG4gICAgICovXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzU2VuZGVkKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLl9pc0NvbXBsZXRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9pc0NvbXBsZXRlZCA9IHRydWU7XG5cbiAgICAgICAgRldTX01WQy5GTWVzc2FnZVJvdXRlci5jb21wbGV0ZSh0aGlzKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiOt+WPlua2iOaBr+eahOaWh+acrOS/oeaBr1xuICAgICAqL1xuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiPEZNZXNzYWdlIFwiICsgdGhpcy5fdHlwZSArIFwiKFwiICsgdGhpcy5fY2F0ZWdvcnkgKyBcIiA6IFwiICsgdGhpcy5faW5kZXggKyBcIikgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmFyZ3MpICsgXCI+XCI7XG4gICAgfVxuXG59KSxcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuLyoqXG4gKiDmtojmga/pmJ/liJdcbiAqL1xuRldTX01WQy5GTWVzc2FnZVF1ZXVlID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiRk1lc3NhZ2VRdWV1ZVwiLFxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHZhciBtc2dDYXRlZ29yeSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnkgPSBtc2dDYXRlZ29yeTtcbiAgICAgICAgdGhpcy5fbWVzc2FnZXMgPSBuZXcgQXJyYXkoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiOt+WPlua2iOaBr+mYn+WIl+aJgOe7keWumueahOa2iOaBr+WIhuexu1xuICAgICAqL1xuICAgIGNhdGVnb3J5OiBmdW5jdGlvbiBjYXRlZ29yeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5raI5oGv6Zif5YiX55qE5b2T5YmN5raI5oGvLCDkuZ/lsLHmmK/pmJ/liJfkuK3mnIDliY3pnaLnmoTpgqPkuKrmtojmga9cbiAgICAgKi9cbiAgICBjdXJyZW50OiBmdW5jdGlvbiBjdXJyZW50KCkge1xuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZXMubGVuZ3RoID4gMCkgcmV0dXJuIHRoaXMuX21lc3NhZ2VzWzBdO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiOt+WPlua2iOaBr+mYn+WIl+S4reaJgOWMheWQq+eahOa2iOaBr+aVsOmHj1xuICAgICAqL1xuICAgIGNvdW50OiBmdW5jdGlvbiBjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VzLmxlbmd0aDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS4gOS4qua2iOaBr+iHs+a2iOaBr+mYn+WIl+eahOWwvumDqFxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gYWRkKG1zZykge1xuXG4gICAgICAgIGlmICghKG1zZyBpbnN0YW5jZW9mIEZXU19NVkMuRk1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBGV1NfTVZDLkZMb2cuZXJyKFwiRk1lc3NhZ2VRdWV1ZVwiLCBcInswfeS4jeaYr+S4gOS4quato+ehrueahOa2iOaBr+mAmuefpeWvueixoVwiLCBtc2cpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21lc3NhZ2VzLmluZGV4T2YobXNnKSA+PSAwKSB7XG4gICAgICAgICAgICBGV1NfTVZDLkZMb2cuZXJyKFwiRk1lc3NhZ2VRdWV1ZVwiLCBcIua2iOaBr+mYn+WIl+S4reW3sue7j+WMheWQq+S6hnswfVwiLCBtc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZXMucHVzaChtc2cpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDnp7vpmaTlubbov5Tlm57mtojmga/pmJ/liJfkuK3mnIDliY3pnaLnmoTpgqPkuKrmtojmga9cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX21lc3NhZ2VzLmxlbmd0aCA+IDApIHJldHVybiB0aGlzLl9tZXNzYWdlcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOa4heepuua2iOaBr+mYn+WIl+S4reeahOaJgOaciea2iOaBr1xuICAgICAqL1xuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX21lc3NhZ2VzLmxlbmd0aCA+IDApIHRoaXMuX21lc3NhZ2VzLnNwbGljZSgwLCB0aGlzLl9tZXNzYWdlcy5sZW5ndGgpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5raI5oGv6Zif5YiX55qE5paH5pys5L+h5oGvXG4gICAgICovXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCI8Rk1lc3NhZ2VRdWV1ZSBcIiArIHRoaXMuX21lc3NhZ2VzLnRvU3RyaW5nKCkgKyBcIj5cIjtcbiAgICB9XG59KSxcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuLyoqXG4gKiDmtojmga/ov57mjqXnsbtcbiAqL1xuRldTX01WQy5GTWVzc2FnZUNvbm5lY3Rpb24gPSBjYy5DbGFzcyh7XG4gICAgLy8gbmFtZTogXCJGTWVzc2FnZUNvbm5lY3Rpb25cIixcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgLyoqXG4gICAgICog6L+e5o6l5qih5Z2X6Iez5raI5oGv6Lev55SxXG4gICAgICovXG4gICAgY29ubmVjdDogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgRldTX01WQy5GTWVzc2FnZVJvdXRlci5jb25uZWN0KHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDku47mtojmga/ot6/nlLHmlq3lvIDov57mjqUgXG4gICAgICovXG4gICAgZGlzY29ubmVjdDogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgRldTX01WQy5GTWVzc2FnZVJvdXRlci5kaXNjb25uZWN0KHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmlLbliLDmtojmga/pgJrnn6Xml7YsIOebtOaOpeaMiea2iOaBr+eahOexu+Wei+WKoG9uRk1lc3NhZ2Vf55qE5YmN57yA5a6a5LmJ5Ye95pWw5ZCN5L2c5L6m5ZCsLCDkvovlpoI6IG9uRk1lc3NhZ2VfTG9naW46IGZ1bmN0aW9uKG1zZykgey4uLn1cbiAgICAgKi9cbiAgICBvbkZNZXNzYWdlOiBmdW5jdGlvbiBvbkZNZXNzYWdlKG1zZykge1xuICAgICAgICB2YXIgaGFuZGxlciA9IFwib25GTWVzc2FnZV9cIiArIG1zZy50eXBlKCk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1toYW5kbGVyXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXNbaGFuZGxlcl0obXNnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0pLFxuXG4vL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4vKipcbiAqIOa2iOaBr+i3r+eUsSAo5YWo5bGA5ZSv5LiAKVxuICovXG5GV1NfTVZDLkZNZXNzYWdlUm91dGVyID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiRk1lc3NhZ2VSb3V0ZXJcIixcblxuICAgIHN0YXRpY3M6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Yid5aeL5YyW5raI5oGv6Lev55SxXG4gICAgICAgICAqL1xuICAgICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgaWYgKEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIucXVldWVzKSByZXR1cm47XG4gICAgICAgICAgICBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLnF1ZXVlcyA9IG5ldyBPYmplY3QoKTtcbiAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIuY29ubmVjdGlvbnMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIudXBkYXRlSGFuZGxlciA9IHNldEludGVydmFsKEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIudXBkYXRlLCAxMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJvlu7rkuIDkuKrmjIflrprmtojmga/liIbnsbvnmoTmtojmga/pmJ/liJdcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZVF1ZXVlOiBmdW5jdGlvbiBjcmVhdGVRdWV1ZShjYXRlZ29yeSkge1xuICAgICAgICAgICAgRldTX01WQy5GTWVzc2FnZVJvdXRlci5pbml0KCk7XG5cbiAgICAgICAgICAgIGlmIChGV1NfTVZDLkZNZXNzYWdlUm91dGVyLnF1ZXVlc1tjYXRlZ29yeV0pIHJldHVybjtcblxuICAgICAgICAgICAgRldTX01WQy5GTWVzc2FnZVJvdXRlci5xdWV1ZXNbY2F0ZWdvcnldID0gbmV3IEZXU19NVkMuRk1lc3NhZ2VRdWV1ZShjYXRlZ29yeSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOenu+mZpOS4gOS4quaMh+Wumua2iOaBr+WIhuexu+eahOa2iOaBr+mYn+WIl1xuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlUXVldWU6IGZ1bmN0aW9uIHJlbW92ZVF1ZXVlKGNhdGVnb3J5KSB7XG4gICAgICAgICAgICBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLmluaXQoKTtcblxuICAgICAgICAgICAgaWYgKEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIucXVldWVzW2NhdGVnb3J5XSkgZGVsZXRlIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIucXVldWVzW2NhdGVnb3J5XTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog56e76Zmk5omA5pyJ55qE5raI5oGv6Zif5YiXXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVBbGxRdWV1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsUXVldWUoKSB7XG4gICAgICAgICAgICBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLmluaXQoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgY2F0ZWdvcnkgaW4gRldTX01WQy5GTWVzc2FnZVJvdXRlci5xdWV1ZXMpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgRldTX01WQy5GTWVzc2FnZVJvdXRlci5xdWV1ZXNbY2F0ZWdvcnldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmuIXnqbrmjIflrprmtojmga/liIbnsbvnmoTmtojmga/pmJ/liJfnmoTlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGNsZWFuUXVldWU6IGZ1bmN0aW9uIGNsZWFuUXVldWUoY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjYXQgaW4gRldTX01WQy5GTWVzc2FnZVJvdXRlci5xdWV1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2F0ICE9IGNhdGVnb3J5KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB2YXIgcSA9IEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIucXVldWVzW2NhdGVnb3J5XTtcbiAgICAgICAgICAgICAgICBxLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa4heepuuaJgOaciea2iOaBr+mYn+WIl+eahOWGheWuuVxuICAgICAgICAgKi9cbiAgICAgICAgY2xlYW5BbGxRdWV1ZTogZnVuY3Rpb24gY2xlYW5BbGxRdWV1ZSgpIHtcbiAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjYXRlZ29yeSBpbiBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLnF1ZXVlcykge1xuICAgICAgICAgICAgICAgIHZhciBxID0gRldTX01WQy5GTWVzc2FnZVJvdXRlci5xdWV1ZXNbY2F0ZWdvcnldO1xuICAgICAgICAgICAgICAgIHEuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6L+e5o6l5LiA5Liq5qih5Z2X5Yiw5raI5oGv6Lev55SxXG4gICAgICAgICAqL1xuICAgICAgICBjb25uZWN0OiBmdW5jdGlvbiBjb25uZWN0KGNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICBpZiAoY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChGV1NfTVZDLkZNZXNzYWdlUm91dGVyLmNvbm5lY3Rpb25zLmluZGV4T2YoY29ubmVjdGlvbikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBGV1NfTVZDLkZMb2cud2FybihcIkZNZXNzYWdlUm91dGVyXCIsIFwi5Zyo5raI5oGv6Lev55Sx5Lit5Y+R546w6YeN5aSN6L+e5o6l55qE5qih5Z2XezB9XCIsIGNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIuY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS7jua2iOaBr+i3r+eUseaWreW8gOS4gOS4qui/nuaOpVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzY29ubmVjdDogZnVuY3Rpb24gZGlzY29ubmVjdChjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLmluaXQoKTtcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLmNvbm5lY3Rpb25zLmluZGV4T2YoY29ubmVjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLmNvbm5lY3Rpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWreW8gOa2iOaBr+i3r+eUseS4reeahOaJgOaciei/nuaOpVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzY29ubmVjdEFsbDogZnVuY3Rpb24gZGlzY29ubmVjdEFsbCgpIHtcbiAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICBpZiAoRldTX01WQy5GTWVzc2FnZVJvdXRlci5jb25uZWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgRldTX01WQy5GTWVzc2FnZVJvdXRlci5jb25uZWN0aW9ucy5zcGxpY2UoMCwgRldTX01WQy5GTWVzc2FnZVJvdXRlci5jb25uZWN0aW9ucy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlkJHmtojmga/ot6/nlLHlj5HpgIHkuIDkuKrmtojmga8gKOW5tuS4jeaYr+mprOS4iuWPkeW4g+WIsOWQhOaooeWdlywg5Y+q5piv5YWl6Zif5YiXKVxuICAgICAgICAgKi9cbiAgICAgICAgc2VuZDogZnVuY3Rpb24gc2VuZChtc2cpIHtcbiAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICBGV1NfTVZDLkZMb2cuZGF0YShcIua2iOaBr1wiLCBcIuWPkemAgTogezB9XCIsIG1zZyk7XG5cbiAgICAgICAgICAgIGlmIChtc2cgaW5zdGFuY2VvZiBGV1NfTVZDLkZNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY2F0ZWdvcnkgaW4gRldTX01WQy5GTWVzc2FnZVJvdXRlci5xdWV1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHEgPSBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLnF1ZXVlc1tjYXRlZ29yeV07XG4gICAgICAgICAgICAgICAgICAgIHEuYWRkKG1zZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHEuY291bnQoKSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLnB1c2gobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRldTX01WQy5GTWVzc2FnZVJvdXRlci5wdXNoKG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaOqOmAgeS4gOS4qua2iOaBr+WIsOaJgOaciei/nuaOpVxuICAgICAgICAgKi9cbiAgICAgICAgcHVzaDogZnVuY3Rpb24gcHVzaChtc2cpIHtcbiAgICAgICAgICAgIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICBGV1NfTVZDLkZMb2cuaW5mbyhcIua2iOaBr1wiLCBcIuaOqOmAgTogezB9XCIsIG1zZyk7XG5cbiAgICAgICAgICAgIHZhciBjbG9uZUFycmF5ID0gRldTX01WQy5GTWVzc2FnZVJvdXRlci5jb25uZWN0aW9ucy5zbGljZSgwKTtcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb25uID0gY2xvbmVBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbm4ub25GTWVzc2FnZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4ub25GTWVzc2FnZShtc2cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudGVyID09IDApIHtcbiAgICAgICAgICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICBGV1NfTVZDLkZMb2cud2FybihcIua2iOaBr1wiLCBcIuS4ouW8g+S6huS4gOS4quacquWkhOeQhueahOa2iOaBr+mAmuefpTogezB9XCIsIG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOagh+iusOS4gOS4qua2iOaBr+W3sue7j+WujOaIkFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKG1zZykge1xuICAgICAgICAgICAgRldTX01WQy5GTWVzc2FnZVJvdXRlci5pbml0KCk7XG4gICAgICAgICAgICBGV1NfTVZDLkZMb2cuZGF0YShcIua2iOaBr1wiLCBcIuWujOaIkOa2iOaBrzogezB9XCIsIG1zZyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOabtOaWsOaTjeS9nFxuICAgICAgICAgKi9cbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjYXRlZ29yeSBpbiBGV1NfTVZDLkZNZXNzYWdlUm91dGVyLnF1ZXVlcykge1xuICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIucXVldWVzW2NhdGVnb3J5XTtcblxuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5jdXJyZW50KCkgJiYgcXVldWUuY3VycmVudCgpLmlzQ29tcGxldGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5jdXJyZW50KCkpIEZXU19NVkMuRk1lc3NhZ2VSb3V0ZXIucHVzaChxdWV1ZS5jdXJyZW50KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pLFxuXG4vL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4vKipcbiAqIOagkeW9ouiKgueCuee7k+aehFxuICovXG5GV1NfTVZDLkZOb2RlID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiRk5vZGVcIixcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge1xuICAgICAgICB2YXIgbm9kZWlkID0gYXJndW1lbnRzWzBdO1xuICAgICAgICB0aGlzLl9pZCA9IG5vZGVpZDtcbiAgICAgICAgdGhpcy5fbm9kZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgfSxcblxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiPFwiICsgY2MuanMuZ2V0Q2xhc3NOYW1lKHRoaXMpICsgXCIgXCIgKyB0aGlzLmlkKCkgKyBcIj5cIjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6IqC54K555qE5qCH6K+GXG4gICAgICovXG4gICAgaWQ6IGZ1bmN0aW9uIGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaJgOWxnueahOeItuiKgueCuVxuICAgICAqL1xuICAgIHBhcmVudDogZnVuY3Rpb24gcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5boioLngrnnmoTlhajot6/lvoRcbiAgICAgKi9cbiAgICBwYXRoOiBmdW5jdGlvbiBwYXRoKCkge1xuICAgICAgICB2YXIgYXJ5ID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdmFyIG4gPSB0aGlzO1xuXG4gICAgICAgIHdoaWxlIChuKSB7XG4gICAgICAgICAgICBhcnkuc3BsaWNlKDAsIDAsIG4uaWQoKSk7XG4gICAgICAgICAgICBuID0gbi5wYXJlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnkuam9pbihcIi9cIik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluWtkOiKgueCueeahOaVsOe7hFxuICAgICAqL1xuICAgIG5vZGVzOiBmdW5jdGlvbiBub2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGVzLnNsaWNlKDApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkuIDkuKrmjIflrpppZOeahOWtkOiKgueCuVxuICAgICAqL1xuICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQobm9kZWlkKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZCA9PSBub2RlaWQpIHJldHVybiB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX25vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX25vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKG4uaWQoKSA9PSBub2RlaWQpIHJldHVybiBuO1xuICAgICAgICAgICAgdmFyIGNuID0gbi5maW5kKG5vZGVpZCk7XG4gICAgICAgICAgICBpZiAoY24pIHJldHVybiBjbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5LiA5Liq5oyH5a6a57Si5byV55qE5a2Q6IqC54K5XG4gICAgICovXG4gICAgYXQ6IGZ1bmN0aW9uIGF0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5fbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZXNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDkuIDkuKrlrZDoioLngrlcbiAgICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIGFkZChub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLl9ub2Rlcy5pbmRleE9mKG5vZGUpID49IDApIHJldHVybiBudWxsO1xuICAgICAgICBpZiAobm9kZS5wYXJlbnQoKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIG5vZGUuX3BhcmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuX25vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTkuIDkuKrlrZDoioLngrlcbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShub2RlKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5fbm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5fbm9kZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgbm9kZS5fcGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTmiYDmnInoioLngrlcbiAgICAgKi9cbiAgICByZW1vdmVBbGw6IGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX25vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc1tpXS5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc1tpXS5fcGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX25vZGVzLnNwbGljZSgwLCB0aGlzLl9ub2Rlcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOenu+mZpOW9k+WJjeiKgueCuVxuICAgICAqL1xuICAgIHJlbW92ZVNlbGY6IGZ1bmN0aW9uIHJlbW92ZVNlbGYoKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluWtkOiKgueCueeahOaVsOmHjyBcbiAgICAgKi9cbiAgICBjb3VudDogZnVuY3Rpb24gY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2Rlcy5sZW5ndGg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaQnOe0ouaMh+WumuWtkOiKgueCueeahOe0ouW8lVxuICAgICAqL1xuICAgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6IqC54K555qE5rex5bqm57qn5YirXG4gICAgICovXG4gICAgbGV2ZWw6IGZ1bmN0aW9uIGxldmVsKCkge1xuICAgICAgICB2YXIgcmV0ID0gMDtcblxuICAgICAgICB2YXIgdGVtcCA9IHRoaXM7XG4gICAgICAgIHdoaWxlICh0ZW1wLnBhcmVudCgpKSB7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcC5wYXJlbnQoKTtcblxuICAgICAgICAgICAgcmV0Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmoLnoioLngrlcbiAgICAgKi9cbiAgICByb290OiBmdW5jdGlvbiByb290KCkge1xuICAgICAgICB2YXIgdGVtcCA9IHRoaXM7XG5cbiAgICAgICAgd2hpbGUgKHRlbXAucGFyZW50KCkpIHtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wLnBhcmVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluesrOS4gOS4quWtkOiKgueCuVxuICAgICAqL1xuICAgIGZpcnN0Q2hpbGQ6IGZ1bmN0aW9uIGZpcnN0Q2hpbGQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ub2Rlcy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGVzWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5blkIznuqfnmoTnrKzkuIDkuKroioLngrlcbiAgICAgKi9cbiAgICBmaXJzdDogZnVuY3Rpb24gZmlyc3QoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5fbm9kZXMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuX25vZGVzWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5blkIznuqfnmoTmnIDlkI7kuIDkuKroioLngrlcbiAgICAgKi9cbiAgICBsYXN0OiBmdW5jdGlvbiBsYXN0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQuX25vZGVzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50Ll9ub2Rlc1t0aGlzLl9wYXJlbnQuX25vZGVzLmxlbmd0aCAtIDFdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5blkIznuqfnmoTkuIrkuIDkuKroioLngrlcbiAgICAgKi9cbiAgICBwcmV2OiBmdW5jdGlvbiBwcmV2KCkge1xuXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBpID0gdGhpcy5fcGFyZW50Ll9ub2Rlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBpZiAoaSA8PSAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50Ll9ub2Rlc1tpIC0gMV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluWQjOe6p+eahOS4i+S4gOS4quiKgueCuVxuICAgICAqL1xuICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9wYXJlbnQuX25vZGVzLmluZGV4T2YodGhpcyk7XG4gICAgICAgIGlmIChpID49IHRoaXMuX3BhcmVudC5fbm9kZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGkgPCAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50Ll9ub2Rlc1tpICsgMV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluiKgueCueiHs+agueeahOmAkOe6p+iKgueCuVxuICAgICAqL1xuICAgIHBhcmVudE5vZGVzOiBmdW5jdGlvbiBwYXJlbnROb2RlcygpIHtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHZhciB0ZW1wID0gdGhpcztcblxuICAgICAgICB3aGlsZSAodGVtcCkge1xuICAgICAgICAgICAgcmV0LnNwbGljZSgwLCAwLCB0ZW1wKTtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wLnBhcmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS4juWPpuS4gOS4quiKgueCueeahOWFseWQjOeItue6p+iKgueCuVxuICAgICAqL1xuICAgIHBhcmVudEJ5OiBmdW5jdGlvbiBwYXJlbnRCeShub2RlKSB7XG4gICAgICAgIHZhciBwMSA9IHRoaXMucGFyZW50Tm9kZXMoKTtcbiAgICAgICAgdmFyIHAyID0gbm9kZS5wYXJlbnROb2RlcygpO1xuXG4gICAgICAgIHZhciByZXQgPSBudWxsO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuMSA9IHAxW2ldO1xuICAgICAgICAgICAgdmFyIG4yID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGkgPCBwMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuMiA9IHAyW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobjEgPT0gbjIpIHJldCA9IG4xO2Vsc2UgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn0pLFxuXG4vL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4vKipcbiAqIOeKtuaAgeiKgueCuVxuICovXG5GV1NfTVZDLkZDb250ZXh0ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiRkNvbnRleHRcIixcbiAgICBcImV4dGVuZHNcIjogRldTX01WQy5GTm9kZSxcblxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHZhciBpZCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbmV3IEFycmF5KCk7XG4gICAgfSxcblxuICAgIHNldE1vZHVsZXM6IGZ1bmN0aW9uIHNldE1vZHVsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZHVsZXMpIHt9IGVsc2UgdGhpcy5tb2R1bGVzID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kdWxlcy5pbmRleE9mKG0pID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGhpcy5tb2R1bGVzLnB1c2gobSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgRldTX01WQy5GTG9nLmRhdGEoXCLnirbmgIFcIiwgXCJvbkVudGVyTm9kZTogezB9XCIsIHRoaXMucGF0aCgpKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG0gPSB0aGlzLm1vZHVsZXNbaV07XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbS5vbkVudGVyTm9kZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgICAgICAgICBtLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIEZXU19NVkMuRkxvZy5kYXRhKFwi54q25oCBXCIsIFwib25MZWF2ZU5vZGU6IHswfVwiLCB0aGlzLnBhdGgoKSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW2ldO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG0ub25MZWF2ZU5vZGUoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgICAgICAgICAgbS5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG59KSxcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuLyoqXG4gKiDnirbmgIHnrqHnkIblmahcbiAqL1xuRldTX01WQy5GQ29udGV4dE1hbmFnZXIgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJGQ29udGV4dE1hbmFnZXJcIixcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdChyb290Q29udGV4dCkge1xuICAgICAgICAgICAgRldTX01WQy5GQ29udGV4dE1hbmFnZXIuX3Jvb3QgPSByb290Q29udGV4dDtcbiAgICAgICAgICAgIEZXU19NVkMuRkNvbnRleHRNYW5hZ2VyLl9jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIEZXU19NVkMuRkNvbnRleHRNYW5hZ2VyLl9oaXN0b3J5ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJvb3Q6IGZ1bmN0aW9uIHJvb3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gRldTX01WQy5GQ29udGV4dE1hbmFnZXIuX3Jvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnQ6IGZ1bmN0aW9uIGN1cnJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gRldTX01WQy5GQ29udGV4dE1hbmFnZXIuX2N1cnJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2s6IGZ1bmN0aW9uIGJhY2soKSB7XG4gICAgICAgICAgICBpZiAoRldTX01WQy5GQ29udGV4dE1hbmFnZXIuX2hpc3RvcnkubGVuZ3RoIDw9IDEpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBjID0gRldTX01WQy5GQ29udGV4dE1hbmFnZXIuX2hpc3RvcnkucG9wKCk7XG4gICAgICAgICAgICBjID0gRldTX01WQy5GQ29udGV4dE1hbmFnZXIuX2hpc3RvcnlbRldTX01WQy5GQ29udGV4dE1hbmFnZXIuX2hpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBGV1NfTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvKGMpO1xuICAgICAgICB9LFxuICAgICAgICBnb3RvSUQ6IGZ1bmN0aW9uIGdvdG9JRChpZCkge1xuICAgICAgICAgICAgaWYgKEZXU19NVkMuRkNvbnRleHRNYW5hZ2VyLl9yb290KSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBGV1NfTVZDLkZDb250ZXh0TWFuYWdlci5fcm9vdC5maW5kKGlkKTtcbiAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICBGV1NfTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvKHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ290bzogZnVuY3Rpb24gZ290byhjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnJvb3QoKSA9PSBGV1NfTVZDLkZDb250ZXh0TWFuYWdlci5fcm9vdCAmJiBGV1NfTVZDLkZDb250ZXh0TWFuYWdlci5fY3VycmVudCAhPSBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoZVBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy/lhbPpl63kuYvliY3nmoTml6DlhbPoioLngrlcbiAgICAgICAgICAgICAgICBpZiAoRldTX01WQy5GQ29udGV4dE1hbmFnZXIuX2N1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhlUGFyZW50Tm9kZSA9IEZXU19NVkMuRkNvbnRleHRNYW5hZ2VyLl9jdXJyZW50LnBhcmVudEJ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9zZUxpc3QgPSBGV1NfTVZDLkZDb250ZXh0TWFuYWdlci5fY3VycmVudC5wYXJlbnROb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VMaXN0Q291bnQgPSBjbG9zZUxpc3QubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBjbG9zZUxpc3RDb3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VDb250ZXh0ID0gY2xvc2VMaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VDb250ZXh0ID09IHRoZVBhcmVudE5vZGUpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VDb250ZXh0Lm9uTGVhdmVOb2RlICYmIHR5cGVvZiBjbG9zZUNvbnRleHQub25MZWF2ZU5vZGUgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VDb250ZXh0Lm9uTGVhdmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/miZPlvIDpnIDopoHnmoTmlrDoioLngrlcbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgb3Blbkxpc3QgPSBjb250ZXh0LnBhcmVudE5vZGVzKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRoZVBhcmVudE5vZGVJc051bGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGVQYXJlbnROb2RlKSB0aGVQYXJlbnROb2RlSXNOdWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcGVuTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3BlbkNvbnRleHQgPSBvcGVuTGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoZVBhcmVudE5vZGVJc051bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuQ29udGV4dC5vbkVudGVyTm9kZSAmJiB0eXBlb2Ygb3BlbkNvbnRleHQub25FbnRlck5vZGUgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkNvbnRleHQub25FbnRlck5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5Db250ZXh0ICE9IHRoZVBhcmVudE5vZGUgfHwgdGhlUGFyZW50Tm9kZUlzTnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuQ29udGV4dC5vbkVudGVyTm9kZSAmJiB0eXBlb2Ygb3BlbkNvbnRleHQub25FbnRlck5vZGUgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Db250ZXh0Lm9uRW50ZXJOb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5Db250ZXh0ID09IHRoZVBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBGV1NfTVZDLkZDb250ZXh0TWFuYWdlci5fY3VycmVudCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgRldTX01WQy5GQ29udGV4dE1hbmFnZXIuX2hpc3RvcnkucHVzaChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBGV1NfTVZDLkZMb2cuaW5mbyhcIueKtuaAgVwiLCBcIuWIh+aNouiHszogezB9XCIsIGNvbnRleHQucGF0aCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5tb2R1bGUuZXhwb3J0cyA9IEZXU19NVkM7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkZjhkN1VIemw5SnRvb01xN1VSMGhQbScsICdGV1NfTkFUSVZFX0dBVEVXQVknKTtcbi8vIHNjcmlwdHMvRldTL0ZXU19OQVRJVkVfR0FURVdBWS5qc1xuXG4vKlxuICog5LiO5Y6f55Sf5qih5Z2XLCDmiJbogIVDKyvmqKHlnZfnmoTmjqXlj6PpgJrpgZNcbiAqIEBBdXRob3I6IHRob3IubGl1IFxuICogQERhdGU6IDIwMTYtMTItMDIgMTA6NDY6MzEgXG4gKiBATGFzdCBNb2RpZmllZCBieTogdGhvci5saXVcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTYtMTItMDIgMTE6MDU6MTVcbiAqL1xuXG4vKlxuICAgIOWPguaVsOS7peWPiui/lOWbnuWGheWuuVxuICAgIHtcbiAgICAgICAgbmFtZTogXCJzb2NrZXRDb25uZWN0XCIsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBhcmdzOiB7IC8vbWFwXG4gICAgICAgICAgICBpcDogMTkyLjE4LjEuMVxuICAgICAgICAgICAgcG9ydDogMTAwMFxuICAgICAgICB9XG4gICAgfVxuICovXG5cbnZhciBGV1NfTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbnZhciBGV1NfTkFUSVZFX0dBVEVXQVkgPSB7XG4gICAgRk5hdGl2ZUdhdGV3YXk6IGNjLkNsYXNzKHtcbiAgICAgICAgbmFtZTogXCJGTmF0aXZlR2F0ZXdheVwiLFxuICAgICAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge30sXG4gICAgICAgIHN0YXRpY3M6IHtcbiAgICAgICAgICAgIC8vL+iwg+eUqG5hdGl2ZVxuICAgICAgICAgICAgdG86IGZ1bmN0aW9uIHRvKG5hbWUsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoRldTX05BVElWRV9HQVRFV0FZLkZOYXRpdmVHYXRld2F5Lm5leHRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBGV1NfTkFUSVZFX0dBVEVXQVkuRk5hdGl2ZUdhdGV3YXkubmV4dEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgRldTX05BVElWRV9HQVRFV0FZLkZOYXRpdmVHYXRld2F5Lm5leHRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgICAgIG9iai5uYW1lID0gXCJhYWFcIjtcbiAgICAgICAgICAgICAgICAvLyBvYmouaW5kZXggPSBGV1NfTkFUSVZFX0dBVEVXQVkuRk5hdGl2ZUdhdGV3YXkubmV4dEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIG9iai5hcmdzID0gYXJncztcblxuICAgICAgICAgICAgICAgIC8vIHZhciBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuXG4gICAgICAgICAgICAgICAgLy9zYW5nc2FuZyBhZGRcbiAgICAgICAgICAgICAgICAvLyBvYmouc3RyID0gc3RyO1xuICAgICAgICAgICAgICAgIC8vIC8vVE9ETzog6LCD55So5qGR5qGR5o6l5Y+jXG4gICAgICAgICAgICAgICAganNDcHBDb25uZWN0LnRlc3Rsb2coXCLlj5HpgIHkuoZcIik7XG5cbiAgICAgICAgICAgICAgICBqc0NwcENvbm5lY3QuanNUb0NwcChvYmopO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vL+adpeiHqm5hdGl2Zeiwg+eUqFxuICAgICAgICAgICAgZnJvbTogZnVuY3Rpb24gZnJvbShtc2cpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgcmVxID0gSlNPTi5wYXJzZShzdHJKc29uKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAocmVxLm5hbWUgJiYgcmVxLmFyZ3MgJiYgcmVnLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBoYW5kbGVyID0gRldTX05BVElWRV9HQVRFV0FZLkZOYXRpdmVHYXRld2F5W1wiZnJvbV9cIiArIHJlcS5uYW1lXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mKGhhbmRsZXIpID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBGV1NfTVZDLkZMb2cuZXJyKFwiRk5hdGl2ZUdhdGV3YXlcIiwgXCLmnKror4bliKvnmoTosIPnlKggezB9XCIsIHN0ckpzb24pO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgICAgICAgICAgb2JqLm5hbWUgPSBcIuaIkeaOpeaUtuWIsOa2iOaBr+S6hlwiO1xuICAgICAgICAgICAgICAgIG9iai5tc2cgPSBtc2c7XG4gICAgICAgICAgICAgICAganNDcHBDb25uZWN0LnRlc3Rsb2coXCLmiJHmjqXmlLbliLDmtojmga/kuoZcIik7XG5cbiAgICAgICAgICAgICAgICBqc0NwcENvbm5lY3QuanNUb0NwcChvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn07XG5cbndpbmRvdy5jcHBUb2pzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIEZXU19OQVRJVkVfR0FURVdBWS5GTmF0aXZlR2F0ZXdheS5mcm9tKG9iaik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZXU19OQVRJVkVfR0FURVdBWTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzQ4Njk0WitnVEpFKzQ0Lzd4TTcrVFBxJywgJ0ZXZWJDb25uZWN0Q29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9GV1MvQ29udHJvbGxlci9GV2ViQ29ubmVjdENvbnRyb2xsZXIuanNcblxudmFyIEZXU19NVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBGV2ViQ29ubmVjdENvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IEZXU19NVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBVUkw6IFwiaHR0cHM6Ly9nYW1lLnNtenkuY2MvdXNlci9cIlxuICAgIH0sXG5cbiAgICBvbkZNZXNzYWdlX1NlbmRXZWJNU0c6IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfU2VuZFdlYk1TRyhtc2cpIHtcblxuICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLlVSTCArIHRoaXMuZ2V0TXNnRGF0YShtc2cpO1xuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDw9IDIwNykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGh0dHBTdGF0dXMgPSB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0LnN1YnN0cmluZygwLCAxMDApICsgXCIuLi5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVjZWl2ZU1zZyhodHRwU3RhdHVzLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH0sXG5cbiAgICBnZXRNc2dEYXRhOiBmdW5jdGlvbiBnZXRNc2dEYXRhKG1zZykge1xuXG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICBpZiAobXNnLmFyZ3MubXNnVHlwZSA9PT0gXCJyZWdpc3RlclwiKSB7XG4gICAgICAgICAgICBkYXRhID0gXCJyZWdpc3Rlcj9cIiArIFwiYXBwaWQ9XCIgKyBtc2cuYXJncy5hcHBpZCArIFwiJlwiICsgXCJ0aW1lPVwiICsgbXNnLmFyZ3MudGltZSArIFwiJlwiICsgXCJtb2JpbGVcIiArIG1zZy5hcmdzLm1vYmlsZSArIFwiJlwiICsgXCJ0eXBlXCIgKyBtc2cuYXJncy50eXBlICsgXCImXCIgKyBcInNtc1wiICsgbXNnLmFyZ3Muc21zICsgXCImXCIgKyBcInBhc3N3b3JkXCIgKyBtc2cuYXJncy5wYXNzd29yZDtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cuYXJncy5tc2dUeXBlID09PSBcInNlbmRzbXNcIikge1xuICAgICAgICAgICAgZGF0YSA9IFwic2VuZHNtcz9cIiArIFwiYXBwaWQ9XCIgKyBtc2cuYXJncy5hcHBpZCArIFwiJlwiICsgXCJ0aW1lPVwiICsgbXNnLmFyZ3MudGltZSArIFwiJlwiICsgXCJtb2JpbGVcIiArIG1zZy5hcmdzLm1vYmlsZTtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cuYXJncy5tc2dUeXBlID09PSBcImxvZ2luXCIpIHtcbiAgICAgICAgICAgIGRhdGEgPSBcImxvZ2luP1wiICsgXCJhcHBpZD1cIiArIG1zZy5hcmdzLmFwcGlkICsgXCImXCIgKyBcInNpZ249XCIgKyBtc2cuYXJncy5zaWduICsgXCImXCIgKyBcInRpbWU9XCIgKyBtc2cuYXJncy50aW1lICsgXCImXCIgKyBcIm1vYmlsZT1cIiArIG1zZy5hcmdzLm1vYmlsZSArIFwiJlwiICsgXCJ0eXBlPVwiICsgbXNnLmFyZ3MudHlwZSArIFwiJlwiICsgXCJwYXNzd29yZD1cIiArIG1zZy5hcmdzLnBhc3N3b3JkICsgXCImXCIgKyBcImFwcGRldnRva2VuPVwiICsgbXNnLmFyZ3MuYXBwZGV2dG9rZW4gKyBcIiZcIiArIFwidmVyc2lvbj1cIiArIG1zZy5hcmdzLnZlcnNpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcblxuICAgIG9uUmVjZWl2ZU1zZzogZnVuY3Rpb24gb25SZWNlaXZlTXNnKGh0dHBTdGF0dXMsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChodHRwU3RhdHVzID09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcbm1vZHVsZS5leHBvcnRzID0gRldlYkNvbm5lY3RDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZmE1ZWZJSXFYcEVhNE5KWHZFRGJCRkQnLCAnSGVsbG9Xb3JsZCcpO1xuLy8gY3BwSnNUZXN0U2NlbmUvSGVsbG9Xb3JsZC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZGVmYXVsdHMsIHNldCB2aXN1YWxseSB3aGVuIGF0dGFjaGluZyB0aGlzIHNjcmlwdCB0byB0aGUgQ2FudmFzXG4gICAgICAgIHRleHQ6ICdIZWxsbywgV29ybGQhJ1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgd2luZG93LkhlbGxvV29ybGQgPSB0aGlzO1xuICAgIH0sXG4gICAgY2xpY2tGb3JDcHBUb0pzOiBmdW5jdGlvbiBjbGlja0ZvckNwcFRvSnMoKSB7fSxcbiAgICBjbGlja0ZvclNlbmRNc2c6IGZ1bmN0aW9uIGNsaWNrRm9yU2VuZE1zZygpIHtcblxuICAgICAgICAvLyB2YXIgbXNnID0gbmV3IE1WQy5GTWVzc2FnZShcIlNlbmRXZWJNU0dcIixcInJvb3RcIik7XG4gICAgICAgIC8vIG1zZy5hcmdzLm1zZ1R5cGUgPSBcImxvZ2luXCI7XG4gICAgICAgIC8vIG1zZy5hcmdzLmFwcGlkID0gXCJhcHBpZFwiO1xuICAgICAgICAvLyBtc2cuYXJncy50aW1lID0gXCJ0aW1lXCI7XG4gICAgICAgIC8vIG1zZy5hcmdzLm1vYmlsZSA9IFwibW9iaWxlXCI7XG4gICAgICAgIC8vIG1zZy5hcmdzLnR5cGUgPSBcInR5cGVcIjtcbiAgICAgICAgLy8gbXNnLmFyZ3Muc21zID0gXCJzbXNcIjtcbiAgICAgICAgLy8gbXNnLmFyZ3MucGFzc3dvcmQgPSBcInBhc3N3b3JkXCI7XG5cbiAgICAgICAgLy8gbXNnLnNlbmQoKTtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcInNzc3NzXCI7XG5cbiAgICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgICAgIG5hbWU6IFwibWVpbnZcIlxuICAgICAgICB9O1xuICAgICAgICBqc0NwcENvbm5lY3QudGVzdGxvZyhcImFhYTVcIik7XG5cbiAgICAgICAganNDcHBDb25uZWN0LmpzVG9DcHAobXNnKTtcbiAgICB9LFxuICAgIGNsaWNrRm9yQ29ubmVjdDogZnVuY3Rpb24gY2xpY2tGb3JDb25uZWN0KCkge30sXG4gICAgY3BwVE9qczogZnVuY3Rpb24gY3BwVE9qcyhtc2cpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBtc2c7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5NWYwZm5reXh4RnpLWUxyWnlhbWNwbycsICdMb2FkaW5nQ29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzBMb2FkaW5nL0xvYWRpbmdDb250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBMb2FkaW5nQ29udHJvbGxlcjtcbkxvYWRpbmdDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865q2k57G75piv5a+55bCG5p2l5Y+v6IO95Yqg6L+b5p2l55qE5YW25LuW5Yib5bu65pa55rOV5a2Y5Zyo55qEXG4gICAgLy9UT0RPOui/meacn+mXtOWKoOi9veacgOaWsOWuouaIt+err+eJiOacrOWPtyAg5pyA5b+M5pSv5oyB55qE5a6i5oi356uv54mI5pys5Y+3IOWFtuS7luWPguaVsCDliKTlrprmnKzlnLDmmK/lkKbmnInnmbvpmYbkv6Hmga9cbiAgICAvL1RPRE86562J5b6F5pyN5Yqh5Zmo5raI5oGvIOaYr+i/m+WFpeS4u+mhtemdoiDov5jmmK/mlq3nur/nu63njqlcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG5cbiAgICAgICAgY2MubG9nKFwicGFydHlfQ3JlYXRlUGFydHlDb250cm9sbGVyXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBMb2FkaW5nQ29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ViNGJjQmNQRDFIa2JpNHhib2o3SlVpJywgJ0xvYWRpbmdTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC8wTG9hZGluZy9Mb2FkaW5nU2NyaXB0LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibG9naW5cIik7XG4gICAgICAgICAgICAvLyB2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xuICAgICAgICAgICAgLy8gb2JqLmRhdGEgPSBcIuaIkeaYr+aVsOaNrlwiXG4gICAgICAgICAgICAvLyBnYXRlV2F5LnRvKFwi56ys5LiA5qyh5rWL6K+V77yB77yB77yBXCIpO1xuICAgICAgICB9LCAyKTtcbiAgICB9LFxuICAgIG9uRGVzdG9yeTogZnVuY3Rpb24gb25EZXN0b3J5KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNzNiZThRQXdrRklXcWFJVW9Ob2RvOVUnLCAnTG9hZGluZ1ZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC8wTG9hZGluZy9Mb2FkaW5nVmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgTG9hZGluZ1ZpZXc7XG5Mb2FkaW5nVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIC8qXG4gICAgICpUT0RPOuaciemcgOimgeeahOivneagueaNruWbnuWkjeeahOaVsOaNrueahOS4jeWQjCDliqDovb3ov5vluqZcbiAgICAgKiAqL1xuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/nrKzkuIDkuKpTQ0VOReS4jemcgOimgeWKoOi9vSDoh6rliqjliqDovb3nmoRcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gTG9hZGluZ1ZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcwZDExNUovN29KSVdadlg5dUZ6d2dRRicsICdMb2dpbkNvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC8xTG9naW4vTG9naW5Db250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG52YXIgTG9naW5Db250cm9sbGVyO1xuTG9naW5Db250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuXG4gICAgICAgIGNjLmxvZyhcIkxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcIkxvZ2luQ29udHJvbGxlciBvbkxlYXZlTm9kZVwiKTtcbiAgICB9LFxuICAgIG9uRk1lc3NhZ2VfY2xpY2tMb2dpbkJ1dHRvbjogZnVuY3Rpb24gb25GTWVzc2FnZV9jbGlja0xvZ2luQnV0dG9uKG1zZykge1xuICAgICAgICBpZiAobXNnLmFyZ3MubmFtZSA9PSBcIueZu+W9lVwiKSB7XG4gICAgICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuICAgICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWJjVwiKTtcbiAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibWFpblwiKTtcbiAgICAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDlkI5cIik7XG4gICAgICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuICAgICAgICB9IGVsc2UgaWYgKG1zZy5hcmdzLm5hbWUgPT0gXCLms6jlhoxcIikge1xuICAgICAgICAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4gICAgICAgICAgICAgICAgLy8gTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJTaGFyZVwiKTtcbiAgICAgICAgICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuICAgICAgICAgICAgfVxuICAgIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luQ29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzA1OTg2VTkvZ0pMdW9qVElkNnVaRXRCJywgJ0xvZ2luVmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzFMb2dpbi9Mb2dpblZpZXcuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIExvZ2luVmlldztcbnZhciBwbGF5ZXJIZWFkTGF5ZXI7XG5Mb2dpblZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8v5Yqg6L2957uT566X5Zy65pmvXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvZ2luU2NlbmVcIik7XG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luVmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzAyMDVkZk9mMXRKeVluRzhRRzAzSGdoJywgJ01ENScpO1xuLy8gc2NyaXB0cy9GV1MvVXRpbHMvTUQ1LmpzXG5cbnZhciBoZXhjYXNlID0gMDtmdW5jdGlvbiBoZXhfbWQ1KGEpIHtcbiAgaWYgKGEgPT0gXCJcIikgcmV0dXJuIGE7cmV0dXJuIHJzdHIyaGV4KHJzdHJfbWQ1KHN0cjJyc3RyX3V0ZjgoYSkpKTtcbn1mdW5jdGlvbiBoZXhfaG1hY19tZDUoYSwgYikge1xuICByZXR1cm4gcnN0cjJoZXgocnN0cl9obWFjX21kNShzdHIycnN0cl91dGY4KGEpLCBzdHIycnN0cl91dGY4KGIpKSk7XG59ZnVuY3Rpb24gbWQ1X3ZtX3Rlc3QoKSB7XG4gIHJldHVybiBoZXhfbWQ1KFwiYWJjXCIpLnRvTG93ZXJDYXNlKCkgPT0gXCI5MDAxNTA5ODNjZDI0ZmIwZDY5NjNmN2QyOGUxN2Y3MlwiO1xufWZ1bmN0aW9uIHJzdHJfbWQ1KGEpIHtcbiAgcmV0dXJuIGJpbmwycnN0cihiaW5sX21kNShyc3RyMmJpbmwoYSksIGEubGVuZ3RoICogOCkpO1xufWZ1bmN0aW9uIHJzdHJfaG1hY19tZDUoYywgZikge1xuICB2YXIgZSA9IHJzdHIyYmlubChjKTtpZiAoZS5sZW5ndGggPiAxNikge1xuICAgIGUgPSBiaW5sX21kNShlLCBjLmxlbmd0aCAqIDgpO1xuICB9dmFyIGEgPSBBcnJheSgxNiksXG4gICAgICBkID0gQXJyYXkoMTYpO2ZvciAodmFyIGIgPSAwOyBiIDwgMTY7IGIrKykge1xuICAgIGFbYl0gPSBlW2JdIF4gOTA5NTIyNDg2O2RbYl0gPSBlW2JdIF4gMTU0OTU1NjgyODtcbiAgfXZhciBnID0gYmlubF9tZDUoYS5jb25jYXQocnN0cjJiaW5sKGYpKSwgNTEyICsgZi5sZW5ndGggKiA4KTtyZXR1cm4gYmlubDJyc3RyKGJpbmxfbWQ1KGQuY29uY2F0KGcpLCA1MTIgKyAxMjgpKTtcbn1mdW5jdGlvbiByc3RyMmhleChjKSB7XG4gIHRyeSB7XG4gICAgaGV4Y2FzZTtcbiAgfSBjYXRjaCAoZykge1xuICAgIGhleGNhc2UgPSAwO1xuICB9dmFyIGYgPSBoZXhjYXNlID8gXCIwMTIzNDU2Nzg5QUJDREVGXCIgOiBcIjAxMjM0NTY3ODlhYmNkZWZcIjt2YXIgYiA9IFwiXCI7dmFyIGE7Zm9yICh2YXIgZCA9IDA7IGQgPCBjLmxlbmd0aDsgZCsrKSB7XG4gICAgYSA9IGMuY2hhckNvZGVBdChkKTtiICs9IGYuY2hhckF0KGEgPj4+IDQgJiAxNSkgKyBmLmNoYXJBdChhICYgMTUpO1xuICB9cmV0dXJuIGI7XG59ZnVuY3Rpb24gc3RyMnJzdHJfdXRmOChjKSB7XG4gIHZhciBiID0gXCJcIjt2YXIgZCA9IC0xO3ZhciBhLCBlO3doaWxlICgrK2QgPCBjLmxlbmd0aCkge1xuICAgIGEgPSBjLmNoYXJDb2RlQXQoZCk7ZSA9IGQgKyAxIDwgYy5sZW5ndGggPyBjLmNoYXJDb2RlQXQoZCArIDEpIDogMDtpZiAoNTUyOTYgPD0gYSAmJiBhIDw9IDU2MzE5ICYmIDU2MzIwIDw9IGUgJiYgZSA8PSA1NzM0Mykge1xuICAgICAgYSA9IDY1NTM2ICsgKChhICYgMTAyMykgPDwgMTApICsgKGUgJiAxMDIzKTtkKys7XG4gICAgfWlmIChhIDw9IDEyNykge1xuICAgICAgYiArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYSA8PSAyMDQ3KSB7XG4gICAgICAgIGIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgxOTIgfCBhID4+PiA2ICYgMzEsIDEyOCB8IGEgJiA2Myk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYSA8PSA2NTUzNSkge1xuICAgICAgICAgIGIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyMjQgfCBhID4+PiAxMiAmIDE1LCAxMjggfCBhID4+PiA2ICYgNjMsIDEyOCB8IGEgJiA2Myk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGEgPD0gMjA5NzE1MSkge1xuICAgICAgICAgICAgYiArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI0MCB8IGEgPj4+IDE4ICYgNywgMTI4IHwgYSA+Pj4gMTIgJiA2MywgMTI4IHwgYSA+Pj4gNiAmIDYzLCAxMjggfCBhICYgNjMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfXJldHVybiBiO1xufWZ1bmN0aW9uIHJzdHIyYmlubChiKSB7XG4gIHZhciBhID0gQXJyYXkoYi5sZW5ndGggPj4gMik7Zm9yICh2YXIgYyA9IDA7IGMgPCBhLmxlbmd0aDsgYysrKSB7XG4gICAgYVtjXSA9IDA7XG4gIH1mb3IgKHZhciBjID0gMDsgYyA8IGIubGVuZ3RoICogODsgYyArPSA4KSB7XG4gICAgYVtjID4+IDVdIHw9IChiLmNoYXJDb2RlQXQoYyAvIDgpICYgMjU1KSA8PCBjICUgMzI7XG4gIH1yZXR1cm4gYTtcbn1mdW5jdGlvbiBiaW5sMnJzdHIoYikge1xuICB2YXIgYSA9IFwiXCI7Zm9yICh2YXIgYyA9IDA7IGMgPCBiLmxlbmd0aCAqIDMyOyBjICs9IDgpIHtcbiAgICBhICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYltjID4+IDVdID4+PiBjICUgMzIgJiAyNTUpO1xuICB9cmV0dXJuIGE7XG59ZnVuY3Rpb24gYmlubF9tZDUocCwgaykge1xuICBwW2sgPj4gNV0gfD0gMTI4IDw8IGsgJSAzMjtwWyhrICsgNjQgPj4+IDkgPDwgNCkgKyAxNF0gPSBrO3ZhciBvID0gMTczMjU4NDE5Mzt2YXIgbiA9IC0yNzE3MzM4Nzk7dmFyIG0gPSAtMTczMjU4NDE5NDt2YXIgbCA9IDI3MTczMzg3ODtmb3IgKHZhciBnID0gMDsgZyA8IHAubGVuZ3RoOyBnICs9IDE2KSB7XG4gICAgdmFyIGogPSBvO3ZhciBoID0gbjt2YXIgZiA9IG07dmFyIGUgPSBsO28gPSBtZDVfZmYobywgbiwgbSwgbCwgcFtnICsgMF0sIDcsIC02ODA4NzY5MzYpO2wgPSBtZDVfZmYobCwgbywgbiwgbSwgcFtnICsgMV0sIDEyLCAtMzg5NTY0NTg2KTttID0gbWQ1X2ZmKG0sIGwsIG8sIG4sIHBbZyArIDJdLCAxNywgNjA2MTA1ODE5KTtuID0gbWQ1X2ZmKG4sIG0sIGwsIG8sIHBbZyArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO28gPSBtZDVfZmYobywgbiwgbSwgbCwgcFtnICsgNF0sIDcsIC0xNzY0MTg4OTcpO2wgPSBtZDVfZmYobCwgbywgbiwgbSwgcFtnICsgNV0sIDEyLCAxMjAwMDgwNDI2KTttID0gbWQ1X2ZmKG0sIGwsIG8sIG4sIHBbZyArIDZdLCAxNywgLTE0NzMyMzEzNDEpO24gPSBtZDVfZmYobiwgbSwgbCwgbywgcFtnICsgN10sIDIyLCAtNDU3MDU5ODMpO28gPSBtZDVfZmYobywgbiwgbSwgbCwgcFtnICsgOF0sIDcsIDE3NzAwMzU0MTYpO2wgPSBtZDVfZmYobCwgbywgbiwgbSwgcFtnICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7bSA9IG1kNV9mZihtLCBsLCBvLCBuLCBwW2cgKyAxMF0sIDE3LCAtNDIwNjMpO24gPSBtZDVfZmYobiwgbSwgbCwgbywgcFtnICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO28gPSBtZDVfZmYobywgbiwgbSwgbCwgcFtnICsgMTJdLCA3LCAxODA0NjAzNjgyKTtsID0gbWQ1X2ZmKGwsIG8sIG4sIG0sIHBbZyArIDEzXSwgMTIsIC00MDM0MTEwMSk7bSA9IG1kNV9mZihtLCBsLCBvLCBuLCBwW2cgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7biA9IG1kNV9mZihuLCBtLCBsLCBvLCBwW2cgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtvID0gbWQ1X2dnKG8sIG4sIG0sIGwsIHBbZyArIDFdLCA1LCAtMTY1Nzk2NTEwKTtsID0gbWQ1X2dnKGwsIG8sIG4sIG0sIHBbZyArIDZdLCA5LCAtMTA2OTUwMTYzMik7bSA9IG1kNV9nZyhtLCBsLCBvLCBuLCBwW2cgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO24gPSBtZDVfZ2cobiwgbSwgbCwgbywgcFtnICsgMF0sIDIwLCAtMzczODk3MzAyKTtvID0gbWQ1X2dnKG8sIG4sIG0sIGwsIHBbZyArIDVdLCA1LCAtNzAxNTU4NjkxKTtsID0gbWQ1X2dnKGwsIG8sIG4sIG0sIHBbZyArIDEwXSwgOSwgMzgwMTYwODMpO20gPSBtZDVfZ2cobSwgbCwgbywgbiwgcFtnICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7biA9IG1kNV9nZyhuLCBtLCBsLCBvLCBwW2cgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO28gPSBtZDVfZ2cobywgbiwgbSwgbCwgcFtnICsgOV0sIDUsIDU2ODQ0NjQzOCk7bCA9IG1kNV9nZyhsLCBvLCBuLCBtLCBwW2cgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTttID0gbWQ1X2dnKG0sIGwsIG8sIG4sIHBbZyArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7biA9IG1kNV9nZyhuLCBtLCBsLCBvLCBwW2cgKyA4XSwgMjAsIDExNjM1MzE1MDEpO28gPSBtZDVfZ2cobywgbiwgbSwgbCwgcFtnICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7bCA9IG1kNV9nZyhsLCBvLCBuLCBtLCBwW2cgKyAyXSwgOSwgLTUxNDAzNzg0KTttID0gbWQ1X2dnKG0sIGwsIG8sIG4sIHBbZyArIDddLCAxNCwgMTczNTMyODQ3Myk7biA9IG1kNV9nZyhuLCBtLCBsLCBvLCBwW2cgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7byA9IG1kNV9oaChvLCBuLCBtLCBsLCBwW2cgKyA1XSwgNCwgLTM3ODU1OCk7bCA9IG1kNV9oaChsLCBvLCBuLCBtLCBwW2cgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTttID0gbWQ1X2hoKG0sIGwsIG8sIG4sIHBbZyArIDExXSwgMTYsIDE4MzkwMzA1NjIpO24gPSBtZDVfaGgobiwgbSwgbCwgbywgcFtnICsgMTRdLCAyMywgLTM1MzA5NTU2KTtvID0gbWQ1X2hoKG8sIG4sIG0sIGwsIHBbZyArIDFdLCA0LCAtMTUzMDk5MjA2MCk7bCA9IG1kNV9oaChsLCBvLCBuLCBtLCBwW2cgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO20gPSBtZDVfaGgobSwgbCwgbywgbiwgcFtnICsgN10sIDE2LCAtMTU1NDk3NjMyKTtuID0gbWQ1X2hoKG4sIG0sIGwsIG8sIHBbZyArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtvID0gbWQ1X2hoKG8sIG4sIG0sIGwsIHBbZyArIDEzXSwgNCwgNjgxMjc5MTc0KTtsID0gbWQ1X2hoKGwsIG8sIG4sIG0sIHBbZyArIDBdLCAxMSwgLTM1ODUzNzIyMik7bSA9IG1kNV9oaChtLCBsLCBvLCBuLCBwW2cgKyAzXSwgMTYsIC03MjI1MjE5NzkpO24gPSBtZDVfaGgobiwgbSwgbCwgbywgcFtnICsgNl0sIDIzLCA3NjAyOTE4OSk7byA9IG1kNV9oaChvLCBuLCBtLCBsLCBwW2cgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7bCA9IG1kNV9oaChsLCBvLCBuLCBtLCBwW2cgKyAxMl0sIDExLCAtNDIxODE1ODM1KTttID0gbWQ1X2hoKG0sIGwsIG8sIG4sIHBbZyArIDE1XSwgMTYsIDUzMDc0MjUyMCk7biA9IG1kNV9oaChuLCBtLCBsLCBvLCBwW2cgKyAyXSwgMjMsIC05OTUzMzg2NTEpO28gPSBtZDVfaWkobywgbiwgbSwgbCwgcFtnICsgMF0sIDYsIC0xOTg2MzA4NDQpO2wgPSBtZDVfaWkobCwgbywgbiwgbSwgcFtnICsgN10sIDEwLCAxMTI2ODkxNDE1KTttID0gbWQ1X2lpKG0sIGwsIG8sIG4sIHBbZyArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtuID0gbWQ1X2lpKG4sIG0sIGwsIG8sIHBbZyArIDVdLCAyMSwgLTU3NDM0MDU1KTtvID0gbWQ1X2lpKG8sIG4sIG0sIGwsIHBbZyArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7bCA9IG1kNV9paShsLCBvLCBuLCBtLCBwW2cgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTttID0gbWQ1X2lpKG0sIGwsIG8sIG4sIHBbZyArIDEwXSwgMTUsIC0xMDUxNTIzKTtuID0gbWQ1X2lpKG4sIG0sIGwsIG8sIHBbZyArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO28gPSBtZDVfaWkobywgbiwgbSwgbCwgcFtnICsgOF0sIDYsIDE4NzMzMTMzNTkpO2wgPSBtZDVfaWkobCwgbywgbiwgbSwgcFtnICsgMTVdLCAxMCwgLTMwNjExNzQ0KTttID0gbWQ1X2lpKG0sIGwsIG8sIG4sIHBbZyArIDZdLCAxNSwgLTE1NjAxOTgzODApO24gPSBtZDVfaWkobiwgbSwgbCwgbywgcFtnICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7byA9IG1kNV9paShvLCBuLCBtLCBsLCBwW2cgKyA0XSwgNiwgLTE0NTUyMzA3MCk7bCA9IG1kNV9paShsLCBvLCBuLCBtLCBwW2cgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7bSA9IG1kNV9paShtLCBsLCBvLCBuLCBwW2cgKyAyXSwgMTUsIDcxODc4NzI1OSk7biA9IG1kNV9paShuLCBtLCBsLCBvLCBwW2cgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO28gPSBzYWZlX2FkZChvLCBqKTtuID0gc2FmZV9hZGQobiwgaCk7bSA9IHNhZmVfYWRkKG0sIGYpO2wgPSBzYWZlX2FkZChsLCBlKTtcbiAgfXJldHVybiBBcnJheShvLCBuLCBtLCBsKTtcbn1mdW5jdGlvbiBtZDVfY21uKGgsIGUsIGQsIGMsIGcsIGYpIHtcbiAgcmV0dXJuIHNhZmVfYWRkKGJpdF9yb2woc2FmZV9hZGQoc2FmZV9hZGQoZSwgaCksIHNhZmVfYWRkKGMsIGYpKSwgZyksIGQpO1xufWZ1bmN0aW9uIG1kNV9mZihnLCBmLCBrLCBqLCBlLCBpLCBoKSB7XG4gIHJldHVybiBtZDVfY21uKGYgJiBrIHwgfmYgJiBqLCBnLCBmLCBlLCBpLCBoKTtcbn1mdW5jdGlvbiBtZDVfZ2coZywgZiwgaywgaiwgZSwgaSwgaCkge1xuICByZXR1cm4gbWQ1X2NtbihmICYgaiB8IGsgJiB+aiwgZywgZiwgZSwgaSwgaCk7XG59ZnVuY3Rpb24gbWQ1X2hoKGcsIGYsIGssIGosIGUsIGksIGgpIHtcbiAgcmV0dXJuIG1kNV9jbW4oZiBeIGsgXiBqLCBnLCBmLCBlLCBpLCBoKTtcbn1mdW5jdGlvbiBtZDVfaWkoZywgZiwgaywgaiwgZSwgaSwgaCkge1xuICByZXR1cm4gbWQ1X2NtbihrIF4gKGYgfCB+aiksIGcsIGYsIGUsIGksIGgpO1xufWZ1bmN0aW9uIHNhZmVfYWRkKGEsIGQpIHtcbiAgdmFyIGMgPSAoYSAmIDY1NTM1KSArIChkICYgNjU1MzUpO3ZhciBiID0gKGEgPj4gMTYpICsgKGQgPj4gMTYpICsgKGMgPj4gMTYpO3JldHVybiBiIDw8IDE2IHwgYyAmIDY1NTM1O1xufWZ1bmN0aW9uIGJpdF9yb2woYSwgYikge1xuICByZXR1cm4gYSA8PCBiIHwgYSA+Pj4gMzIgLSBiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZXhfbWQ1O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNTdlYzRJVitBUkMzN09IRExxcERjVUQnLCAnTVRUU05HV2FpdGluZ1NjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L01UVFNOR2xvYWRpbmcvTVRUU05HV2FpdGluZ1NjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy/ov5Tlm57mjInpkq5cbiAgICAgICAgYmFja0J1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgbW9yZUJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgc2lnblVwQnV0dG9uOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZUJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgcmV3YXJkc0J1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgcGxheWVyQnV0dG9uOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBUYWJsZUJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIG9uRGVzdG9yeTogZnVuY3Rpb24gb25EZXN0b3J5KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuXG4gICAgY2xpY2tiYWNrQnV0dG9uOiBmdW5jdGlvbiBjbGlja2JhY2tCdXR0b24oKSB7XG4gICAgICAgIGNjLmxvZyhcImNsaWNrYmFja0J1dHRvblwiKTtcbiAgICB9LFxuICAgIGNsaWNrbW9yZUJ1dHRvbjogZnVuY3Rpb24gY2xpY2ttb3JlQnV0dG9uKCkge1xuICAgICAgICBjYy5sb2coXCJjbGlja21vcmVCdXR0b25cIik7XG4gICAgfSxcbiAgICBjbGlja3NpZ25VcEJ1dHRvbjogZnVuY3Rpb24gY2xpY2tzaWduVXBCdXR0b24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwiTVRUU05HY2xpY2tzaWduVXBCdXR0b25cIiwgXCJyb29tXCIpO1xuICAgICAgICBtc2cuYXJncy5uYW1lID0gXCJNVFRTTkdjbGlja3NpZ25VcEJ1dHRvbui/m+WFpeWAkuiuoeaXtlwiO1xuICAgICAgICBtc2cuc2VuZCgpO1xuICAgICAgICBjYy5sb2coXCJjbGlja3NpZ25VcEJ1dHRvblwiKTtcbiAgICB9LFxuICAgIGNsaWNrc3RhdGVCdXR0b246IGZ1bmN0aW9uIGNsaWNrc3RhdGVCdXR0b24oKSB7XG4gICAgICAgIGNjLmxvZyhcImNsaWNrc3RhdGVCdXR0b25cIik7XG4gICAgfSxcbiAgICBjbGlja3Jld2FyZHNCdXR0b246IGZ1bmN0aW9uIGNsaWNrcmV3YXJkc0J1dHRvbigpIHtcbiAgICAgICAgY2MubG9nKFwiY2xpY2tyZXdhcmRzQnV0dG9uXCIpO1xuICAgIH0sXG4gICAgY2xpY2twbGF5ZXJCdXR0b246IGZ1bmN0aW9uIGNsaWNrcGxheWVyQnV0dG9uKCkge1xuICAgICAgICBjYy5sb2coXCJjbGlja3BsYXllckJ1dHRvblwiKTtcbiAgICB9LFxuICAgIGNsaWNrcFRhYmxlQnV0dG9uOiBmdW5jdGlvbiBjbGlja3BUYWJsZUJ1dHRvbigpIHtcbiAgICAgICAgY2MubG9nKFwiY2xpY2twVGFibGVCdXR0b25cIik7XG4gICAgfVxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2JhMzQ0UG40V0pOWHErOURKRVJYeFllJywgJ01UVHBhcnR5U2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L01hYW5uYS9NVFRwYXJ0eVNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHNjcm9sbFZpZXc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmlld29uZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmlld3R3bzoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmlld3RocmVlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxWaWV3LmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25EZXN0b3J5OiBmdW5jdGlvbiBvbkRlc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH0sXG5cbiAgICAvL+mrmOe6p+iuvue9rlxuICAgIG1vcmVvcHRpb25jYWxsOiBmdW5jdGlvbiBtb3Jlb3B0aW9uY2FsbCgpIHtcblxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudmlld3R3by5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Cb3R0b20oMC4xKTtcbiAgICAgICAgdGhpcy52aWV3dGhyZWUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XG4gICAgfSxcblxuICAgIC8v5pS26LW3XG4gICAgcGFja3VwY2FsbDogZnVuY3Rpb24gcGFja3VwY2FsbCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKDAuMSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWV3dHdvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZpZXd0aHJlZS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMCwgMzIsIDc4KTtcbiAgICB9LFxuXG4gICAgLy/liJvlu7pNVFRcbiAgICBNVFRCdXR0b25DbGljazogZnVuY3Rpb24gTVRUQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHZhciBtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwiY2xpY2tNVFRCdXR0b25cIiwgXCJjcmVhdGVQYXJ0eVNldFwiKTtcbiAgICAgICAgbXNnLmFyZ3MubmFtZSA9IFwi5Yib5bu6TVRU5q+U6LWbXCI7XG4gICAgICAgIG1zZy5zZW5kKCk7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzIyNTY0SnBtdTVKS2Fsb2p2cjV6ZGhnJywgJ01haW5Db250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvMm1haW4vTWFpbkNvbnRyb2xsZXIuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBNYWluQ29udHJvbGxlcjtcbk1haW5Db250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuXG4gICAgICAgIGNjLmxvZyhcIk1haW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgY2MubG9nKFwiTWFpbkNvbnRyb2xsZXIgb25MZWF2ZU5vZGVcIik7XG4gICAgfSxcbiAgICBvbkZNZXNzYWdlX2NsaWNrYWRkUGFydHlCdXR0b246IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfY2xpY2thZGRQYXJ0eUJ1dHRvbihtc2cpIHtcbiAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJsb2FkaW5nUGFydHlcIik7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH0sXG4gICAgb25GTWVzc2FnZV9jbGlja3NldFBhcnR5QnV0dG9uOiBmdW5jdGlvbiBvbkZNZXNzYWdlX2NsaWNrc2V0UGFydHlCdXR0b24obXNnKSB7XG4gICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwiY3JlYXRlUGFydHlTZXRcIik7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH0sXG4gICAgb25GTWVzc2FnZV9jbGlja015OiBmdW5jdGlvbiBvbkZNZXNzYWdlX2NsaWNrTXkobXNnKSB7XG4gICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibXlcIik7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IE1haW5Db250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZThlMjhYbjdybEg2WktOSlVTRXdNaysnLCAnTWFpblZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC8ybWFpbi9NYWluVmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgTWFpblZpZXc7XG52YXIgcGxheWVySGVhZExheWVyO1xuTWFpblZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8v5Yqg6L2957uT566X5Zy65pmvXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcblxuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhcIlRlc3RQcm9mYWIvbWFpblwiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhlcnIpO1xuICAgICAgICAvLyAgICAgcGxheWVySGVhZExheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQocGxheWVySGVhZExheWVyKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21TY2VuZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcbm1vZHVsZS5leHBvcnRzID0gTWFpblZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0ZmU4YnV6dzhWSEZKWGFTQjRXLy9iaycsICdNYXRoVXRpbGl0eScpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L0F2YXRhclN5c3RlbS9NYXRoVXRpbGl0eS5qc1xuXG52YXIgTWF0aFV0aWxpdHk7XG5cbk1hdGhVdGlsaXR5ID0gY2MuQ2xhc3Moe1xuXHRcdFx0XHRcdFx0XCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblx0XHRcdFx0XHRcdC8vLyA8c3VtbWFyeT5cblx0XHRcdFx0XHRcdC8vLyDorqHnrpfkuKTngrnnmoTot53nprtcblx0XHRcdFx0XHRcdC8vLyA8L3N1bW1hcnk+XG5cdFx0XHRcdFx0XHQvLy8gPHBhcmFtIG5hbWU9XCJwMVwiPjwvcGFyYW0+XG5cdFx0XHRcdFx0XHQvLy8gPHBhcmFtIG5hbWU9XCJwMlwiPjwvcGFyYW0+XG5cdFx0XHRcdFx0XHQvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuXHRcdFx0XHRcdFx0R2V0RGlzdGFuY2U6IGZ1bmN0aW9uIEdldERpc3RhbmNlKFBvaW50UDEsIFBvaW50UDIpIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGR4ID0gTWF0aC5hYnMoUG9pbnRQMS54IC0gUG9pbnRQMi54KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBkeSA9IE1hdGguYWJzKFBvaW50UDEueSAtIFBvaW50UDIueSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQvLy8gPHN1bW1hcnk+XG5cdFx0XHRcdFx0XHQvLy8g6K6h566X5Lik54K555qE6KeS5bqmXG5cdFx0XHRcdFx0XHQvLy8gPC9zdW1tYXJ5PlxuXHRcdFx0XHRcdFx0Ly8vIDxwYXJhbSBuYW1lPVwicDFcIj48L3BhcmFtPlxuXHRcdFx0XHRcdFx0Ly8vIDxwYXJhbSBuYW1lPVwicDJcIj48L3BhcmFtPlxuXHRcdFx0XHRcdFx0Ly8vIDxyZXR1cm5zPjwvcmV0dXJucz5cblx0XHRcdFx0XHRcdEdldEFuZ2xlOiBmdW5jdGlvbiBHZXRBbmdsZShQb2ludFAxLCBQb2ludFAyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgdXNlMzYwID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbMl07XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBkeCA9IFBvaW50UDIueSAtIFBvaW50UDEueTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBkeSA9IFBvaW50UDIueCAtIFBvaW50UDEueDtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHIgPSBNYXRoLmF0YW4yKGR5LCBkeCkgKiAoMTgwIC8gTWF0aC5QSSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh1c2UzNjApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHIgKz0gMzYwO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ciAlPSAzNjA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyID0gMzYwIC0gciArIDkwO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ciA9IHIgJSAzNjA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQvLy8gPHN1bW1hcnk+XG5cdFx0XHRcdFx0XHQvLy8g5qC55o2u5LiA5Liq54K5LOinkuW6puWSjOmVv+W6puiuoeeul+acgOe7iOeahOS9jee9rlxuXHRcdFx0XHRcdFx0Ly8vIDwvc3VtbWFyeT5cblx0XHRcdFx0XHRcdC8vLyA8cGFyYW0gbmFtZT1cInBcIj48L3BhcmFtPlxuXHRcdFx0XHRcdFx0Ly8vIDxwYXJhbSBuYW1lPVwiYW5nbGVcIj48L3BhcmFtPlxuXHRcdFx0XHRcdFx0Ly8vIDxwYXJhbSBuYW1lPVwiZGlzdGFuY2VcIj48L3BhcmFtPlxuXHRcdFx0XHRcdFx0Ly8vIDxyZXR1cm5zPjwvcmV0dXJucz5cblx0XHRcdFx0XHRcdEdldFBvc2l0aW9uOiBmdW5jdGlvbiBHZXRQb3NpdGlvbihQb2ludFAsIGFuZ2xlLCBkaXN0YW5jZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGEgPSBhbmdsZSAvICgxODAgLyBNYXRoLlBJKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBjeCA9IGRpc3RhbmNlICogTWF0aC5jb3MoYSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgY3kgPSBkaXN0YW5jZSAqIE1hdGguc2luKGEpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY2MucChQb2ludFAueCArIGN4LCBQb2ludFAueSArIGN5KTtcblx0XHRcdFx0XHRcdH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBNYXRoVXRpbGl0eTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzhlN2Y4d3cvVXRCN0lJdkNFNFFNSmxCJywgJ05ld1NjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9nakNvbW1lbnQvTmV3U2NyaXB0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwcmVmYWI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG5cbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLmRpcmVjdG9yLmdldFZpc2libGVTaXplKCkpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2Y1OTE0UHk5VHBGL3BTUWdtQ3NjVHNnJywgJ1A5Q3JlYXRlU2V0dGluZ3MnKTtcbi8vIHNjcmlwdHMvUDkvRGF0YS9QOUNyZWF0ZVNldHRpbmdzLmpzXG5cblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFA5Q3JlYXRlU2V0dGluZ3MgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzU1REID0gbmV3IFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc1NURCgpO1xuICAgICAgICBQOUNyZWF0ZVNldHRpbmdzLlA5Q3JlYXRlU2V0dGluZ3NTVEQuaW5pdF9TQl9CQl9FbnRyeUZlZSgpO1xuICAgICAgICBQOUNyZWF0ZVNldHRpbmdzLlA5Q3JlYXRlU2V0dGluZ3NTVEQuaW5pdF9QbGF5ZXJOdW0oKTtcbiAgICAgICAgUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzU1RELmluaXRfUGFydHlUaW1lKCk7XG4gICAgICAgIFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc1NURC5pbml0X0FudGUoKTtcbiAgICAgICAgUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzU1RELmluaXRfRGVlcFJhaXNlKCk7XG5cbiAgICAgICAgUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzU05HID0gbmV3IFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc1NORygpO1xuICAgICAgICBQOUNyZWF0ZVNldHRpbmdzLlA5Q3JlYXRlU2V0dGluZ3NTTkcuaW5pdF9TcGVlZCgpO1xuICAgICAgICBQOUNyZWF0ZVNldHRpbmdzLlA5Q3JlYXRlU2V0dGluZ3NTTkcuaW5pdF9TaW5nbGVEZXNrUGxheWVyTnVtKCk7XG5cbiAgICAgICAgUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzTVRUID0gbmV3IFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc01UVCgpO1xuICAgICAgICBQOUNyZWF0ZVNldHRpbmdzLlA5Q3JlYXRlU2V0dGluZ3NNVFQuaW5pdF9TaW5nbGVEZXNrUGxheWVyTnVtKCk7XG4gICAgICAgIFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc01UVC5pbml0X1NwZWVkKCk7XG4gICAgICAgIFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc01UVC5pbml0X1N0b3BFbnJvbG1lbnQoKTtcbiAgICB9LFxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHt9LFxuICAgIG9uRk1lc3NhZ2VfR2V0UDlDcmVhdGVTZXR0aW5nc1NURERhdGFBY2s6IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfR2V0UDlDcmVhdGVTZXR0aW5nc1NURERhdGFBY2sobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgICAgICB2YXIgbXNnMSA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJHZXRQOUNyZWF0ZVNldHRpbmdzU1RERGF0YVJlcVwiLCBcInJvb3RcIik7XG4gICAgICAgIG1zZzEuYXJncy5TQl9CQl9FbnRyeUZlZSA9IFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc1NURC5TQl9CQl9FbnRyeUZlZTtcbiAgICAgICAgbXNnMS5hcmdzLlBsYXllck51bSA9IFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc1NURC5QbGF5ZXJOdW07XG4gICAgICAgIG1zZzEuYXJncy5QYXJ0eVRpbWUgPSBQOUNyZWF0ZVNldHRpbmdzLlA5Q3JlYXRlU2V0dGluZ3NTVEQuUGFydHlUaW1lO1xuICAgICAgICBtc2cxLmFyZ3MuQW50ZSA9IFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc1NURC5BbnRlO1xuICAgICAgICBtc2cxLmFyZ3MuRGVlcFJhaXNlID0gUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzU1RELkRlZXBSYWlzZTtcblxuICAgICAgICBtc2cxLnNlbmQoKTtcbiAgICB9LFxuICAgIG9uRk1lc3NhZ2VfR2V0UDlDcmVhdGVTZXR0aW5nc01UVEFjazogZnVuY3Rpb24gb25GTWVzc2FnZV9HZXRQOUNyZWF0ZVNldHRpbmdzTVRUQWNrKG1zZykge1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICAgICAgdmFyIG1zZzEgPSBuZXcgTVZDLkZNZXNzYWdlKFwiR2V0UDlDcmVhdGVTZXR0aW5nc01UVFJlcVwiLCBcInJvb3RcIik7XG4gICAgICAgIG1zZzEuYXJncy5TaW5nbGVEZXNrUGxheWVyTnVtID0gUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzTVRULlNpbmdsZURlc2tQbGF5ZXJOdW07XG4gICAgICAgIG1zZzEuYXJncy5TcGVlZCA9IFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc01UVC5TcGVlZDtcblxuICAgICAgICBtc2cxLnNlbmQoKTtcbiAgICB9LFxuICAgIG9uRk1lc3NhZ2VfR2V0UDlDcmVhdGVTZXR0aW5nc1NOR0FjazogZnVuY3Rpb24gb25GTWVzc2FnZV9HZXRQOUNyZWF0ZVNldHRpbmdzU05HQWNrKG1zZykge1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICAgICAgdmFyIG1zZzEgPSBuZXcgTVZDLkZNZXNzYWdlKFwiR2V0UDlDcmVhdGVTZXR0aW5nc1NOR1JlcVwiLCBcInJvb3RcIik7XG4gICAgICAgIG1zZzEuYXJncy5TaW5nbGVEZXNrUGxheWVyTnVtID0gUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzU05HLlNpbmdsZURlc2tQbGF5ZXJOdW07XG4gICAgICAgIG1zZzEuYXJncy5TcGVlZCA9IFA5Q3JlYXRlU2V0dGluZ3MuUDlDcmVhdGVTZXR0aW5nc1NORy5TcGVlZDtcblxuICAgICAgICBtc2cxLnNlbmQoKTtcbiAgICB9XG59KTtcblxuUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzU1REID0gY2MuQ2xhc3Moe1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBTQl9CQl9FbnRyeUZlZTogW10sXG4gICAgICAgIFBsYXllck51bTogW10sXG4gICAgICAgIFBhcnR5VGltZTogW10sXG4gICAgICAgIEFudGU6IFtdLFxuICAgICAgICBEZWVwUmFpc2U6IFtdXG5cbiAgICB9LFxuXG4gICAgaW5pdF9TQl9CQl9FbnRyeUZlZTogZnVuY3Rpb24gaW5pdF9TQl9CQl9FbnRyeUZlZSgpIHtcbiAgICAgICAgdGhpcy5TQl9CQl9FbnRyeUZlZVswXSA9IHtcbiAgICAgICAgICAgIFNCOiAxLFxuICAgICAgICAgICAgQkI6IDIsXG4gICAgICAgICAgICBFbnRyeUZlZTogMjAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuU0JfQkJfRW50cnlGZWVbMV0gPSB7XG4gICAgICAgICAgICBTQjogMixcbiAgICAgICAgICAgIEJCOiA0LFxuICAgICAgICAgICAgRW50cnlGZWU6IDQwMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLlNCX0JCX0VudHJ5RmVlWzJdID0ge1xuICAgICAgICAgICAgU0I6IDUsXG4gICAgICAgICAgICBCQjogMTAsXG4gICAgICAgICAgICBFbnRyeUZlZTogMTAwMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLlNCX0JCX0VudHJ5RmVlWzNdID0ge1xuICAgICAgICAgICAgU0I6IDEwLFxuICAgICAgICAgICAgQkI6IDIwLFxuICAgICAgICAgICAgRW50cnlGZWU6IDIwMDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5TQl9CQl9FbnRyeUZlZVs0XSA9IHtcbiAgICAgICAgICAgIFNCOiAyNSxcbiAgICAgICAgICAgIEJCOiA1MCxcbiAgICAgICAgICAgIEVudHJ5RmVlOiA1MDAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuU0JfQkJfRW50cnlGZWVbNV0gPSB7XG4gICAgICAgICAgICBTQjogNTAsXG4gICAgICAgICAgICBCQjogMTAwLFxuICAgICAgICAgICAgRW50cnlGZWU6IDEwMDAwXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBpbml0X1BsYXllck51bTogZnVuY3Rpb24gaW5pdF9QbGF5ZXJOdW0oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLlBsYXllck51bVtpXSA9IDIgKyBpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbml0X1BhcnR5VGltZTogZnVuY3Rpb24gaW5pdF9QYXJ0eVRpbWUoKSB7XG4gICAgICAgIC8vIGZvciAodmFyIGk9MDtpPDk7aSsrKXtcbiAgICAgICAgLy8gICAgIHRoaXMuUGFydHlUaW1lW2ldPTAuNStpKjAuNTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLlBhcnR5VGltZVswXSA9IDAuNTtcbiAgICAgICAgdGhpcy5QYXJ0eVRpbWVbMV0gPSAxO1xuICAgICAgICB0aGlzLlBhcnR5VGltZVsyXSA9IDEuNTtcbiAgICAgICAgdGhpcy5QYXJ0eVRpbWVbM10gPSAyO1xuICAgICAgICB0aGlzLlBhcnR5VGltZVs0XSA9IDIuNTtcbiAgICAgICAgdGhpcy5QYXJ0eVRpbWVbNV0gPSA0O1xuICAgICAgICB0aGlzLlBhcnR5VGltZVs2XSA9IDY7XG4gICAgfSxcblxuICAgIGluaXRfQW50ZTogZnVuY3Rpb24gaW5pdF9BbnRlKCkge1xuICAgICAgICAvLyBmb3IgKHZhciBpPTA7aTw1O2krKyl7XG4gICAgICAgIC8vICAgIHRoaXMuQW50ZVtpXT1pO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuQW50ZVswXSA9IDE7XG4gICAgICAgIHRoaXMuQW50ZVsxXSA9IDI7XG4gICAgICAgIHRoaXMuQW50ZVsyXSA9IDM7XG4gICAgICAgIHRoaXMuQW50ZVszXSA9IDQ7XG4gICAgfSxcbiAgICBpbml0X0RlZXBSYWlzZTogZnVuY3Rpb24gaW5pdF9EZWVwUmFpc2UoKSB7XG4gICAgICAgIC8vIGZvciAodmFyIGk9MDtpPDM7aSsrKXtcbiAgICAgICAgLy8gICAgIHRoaXMuRGVlcFJhaXNlW2ldPTIraSoyO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuRGVlcFJhaXNlWzBdID0gMjtcbiAgICAgICAgdGhpcy5EZWVwUmFpc2VbMV0gPSA0O1xuICAgICAgICB0aGlzLkRlZXBSYWlzZVsyXSA9IDg7XG4gICAgfVxuXG59KTtcblxuUDlDcmVhdGVTZXR0aW5ncy5QOUNyZWF0ZVNldHRpbmdzU05HID0gY2MuQ2xhc3Moe1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBTaW5nbGVEZXNrUGxheWVyTnVtOiBbXSxcbiAgICAgICAgU3BlZWQ6IFtdLFxuICAgICAgICBTdG9wRW5yb2xtZW50OiBbXVxuICAgIH0sXG5cbiAgICBpbml0X1NwZWVkOiBmdW5jdGlvbiBpbml0X1NwZWVkKCkge1xuICAgICAgICB0aGlzLlNwZWVkWzBdID0ge1xuICAgICAgICAgICAgU3BlZWROYW1lOiBcIuaFoumAn1wiLFxuICAgICAgICAgICAgVmlydHVhbEFwcGxpY2F0aW9uRmVlOiAxMDAwLFxuICAgICAgICAgICAgSW5pdGlhbEludGVncmFsOiA0MDAwLFxuICAgICAgICAgICAgQmxpbmRVcFRpbWU6IFwiMTUnXCIsXG4gICAgICAgICAgICBUaGVGaXJzdFByaXplOiA0NTAwLFxuICAgICAgICAgICAgVGhlU2Vjb25kUHJpemU6IDI3MDAsXG4gICAgICAgICAgICBUaGVUaGlyZFByaXplOiAxODAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuU3BlZWRbMV0gPSB7XG4gICAgICAgICAgICBTcGVlZE5hbWU6IFwi5pmu6YCaXCIsXG4gICAgICAgICAgICBWaXJ0dWFsQXBwbGljYXRpb25GZWU6IDEwMDAsXG4gICAgICAgICAgICBJbml0aWFsSW50ZWdyYWw6IDMwMDAsXG4gICAgICAgICAgICBCbGluZFVwVGltZTogXCIxMCdcIixcbiAgICAgICAgICAgIFRoZUZpcnN0UHJpemU6IDQ1MDAsXG4gICAgICAgICAgICBUaGVTZWNvbmRQcml6ZTogMjcwMCxcbiAgICAgICAgICAgIFRoZVRoaXJkUHJpemU6IDE4MDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5TcGVlZFsyXSA9IHtcbiAgICAgICAgICAgIFNwZWVkTmFtZTogXCLpq5jpgJ9cIixcbiAgICAgICAgICAgIFZpcnR1YWxBcHBsaWNhdGlvbkZlZTogMTAwMCxcbiAgICAgICAgICAgIEluaXRpYWxJbnRlZ3JhbDogMjAwMCxcbiAgICAgICAgICAgIEJsaW5kVXBUaW1lOiBcIjUnXCIsXG4gICAgICAgICAgICBUaGVGaXJzdFByaXplOiA0NTAwLFxuICAgICAgICAgICAgVGhlU2Vjb25kUHJpemU6IDI3MDAsXG4gICAgICAgICAgICBUaGVUaGlyZFByaXplOiAxODAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuU3BlZWRbM10gPSB7XG4gICAgICAgICAgICBTcGVlZE5hbWU6IFwi6LaF6auY6YCfXCIsXG4gICAgICAgICAgICBWaXJ0dWFsQXBwbGljYXRpb25GZWU6IDEwMDAsXG4gICAgICAgICAgICBJbml0aWFsSW50ZWdyYWw6IDEwMDAsXG4gICAgICAgICAgICBCbGluZFVwVGltZTogXCIzJ1wiLFxuICAgICAgICAgICAgVGhlRmlyc3RQcml6ZTogNDUwMCxcbiAgICAgICAgICAgIFRoZVNlY29uZFByaXplOiAyNzAwLFxuICAgICAgICAgICAgVGhlVGhpcmRQcml6ZTogMTgwMFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgaW5pdF9TaW5nbGVEZXNrUGxheWVyTnVtOiBmdW5jdGlvbiBpbml0X1NpbmdsZURlc2tQbGF5ZXJOdW0oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLlNpbmdsZURlc2tQbGF5ZXJOdW1baV0gPSAyICsgaTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG5QOUNyZWF0ZVNldHRpbmdzLlA5Q3JlYXRlU2V0dGluZ3NNVFQgPSBjYy5DbGFzcyh7XG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFNpbmdsZURlc2tQbGF5ZXJOdW06IFtdLFxuICAgICAgICBTcGVlZDogW11cblxuICAgIH0sXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICB0aGlzLmluaXRfU2luZ2xlRGVza1BsYXllck51bSgpO1xuICAgICAgICB0aGlzLmluaXRfU3BlZWQoKTtcbiAgICB9LFxuICAgIGluaXRfU2luZ2xlRGVza1BsYXllck51bTogZnVuY3Rpb24gaW5pdF9TaW5nbGVEZXNrUGxheWVyTnVtKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5TaW5nbGVEZXNrUGxheWVyTnVtW2ldID0gMiArIGk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXRfU3RvcEVucm9sbWVudDogZnVuY3Rpb24gaW5pdF9TdG9wRW5yb2xtZW50KCkge1xuXG4gICAgICAgIHRoaXMuU3RvcEVucm9sbWVudFswXSA9IDY7XG4gICAgICAgIHRoaXMuU3RvcEVucm9sbWVudFsxXSA9IDg7XG4gICAgICAgIHRoaXMuU3RvcEVucm9sbWVudFsyXSA9IDEwO1xuICAgICAgICB0aGlzLlN0b3BFbnJvbG1lbnRbM10gPSAxMjtcbiAgICAgICAgdGhpcy5TdG9wRW5yb2xtZW50WzRdID0gMTU7XG4gICAgfSxcblxuICAgIGluaXRfU3BlZWQ6IGZ1bmN0aW9uIGluaXRfU3BlZWQoKSB7XG4gICAgICAgIHRoaXMuU3BlZWRbMF0gPSB7XG4gICAgICAgICAgICBTcGVlZE5hbWU6IFwi5oWi6YCfXCIsXG4gICAgICAgICAgICBWaXJ0dWFsQXBwbGljYXRpb25GZWU6IDEwMDAsXG4gICAgICAgICAgICBCbGluZFVwVGltZTogXCIxNSdcIixcbiAgICAgICAgICAgIEluaXRpYWxJbmplY3Rpb246IFwiMTAvMjBcIixcbiAgICAgICAgICAgIEluaXRpYWxJbnRlZ3JhbDogNDAwMFxuICAgICAgICB9LCB0aGlzLlNwZWVkWzFdID0ge1xuICAgICAgICAgICAgU3BlZWROYW1lOiBcIuaZrumAmlwiLFxuICAgICAgICAgICAgVmlydHVhbEFwcGxpY2F0aW9uRmVlOiAxMDAwLFxuICAgICAgICAgICAgQmxpbmRVcFRpbWU6IFwiMTAnXCIsXG4gICAgICAgICAgICBJbml0aWFsSW5qZWN0aW9uOiBcIjEwLzIwXCIsXG4gICAgICAgICAgICBJbml0aWFsSW50ZWdyYWw6IDMwMDBcbiAgICAgICAgfSwgdGhpcy5TcGVlZFsyXSA9IHtcbiAgICAgICAgICAgIFNwZWVkTmFtZTogXCLpq5jpgJ9cIixcbiAgICAgICAgICAgIFZpcnR1YWxBcHBsaWNhdGlvbkZlZTogMTAwMCxcbiAgICAgICAgICAgIEJsaW5kVXBUaW1lOiBcIjUnXCIsXG4gICAgICAgICAgICBJbml0aWFsSW5qZWN0aW9uOiBcIjEwLzIwXCIsXG4gICAgICAgICAgICBJbml0aWFsSW50ZWdyYWw6IDIwMDBcbiAgICAgICAgfSwgdGhpcy5TcGVlZFszXSA9IHtcbiAgICAgICAgICAgIFNwZWVkTmFtZTogXCLotoXpq5jpgJ9cIixcbiAgICAgICAgICAgIFZpcnR1YWxBcHBsaWNhdGlvbkZlZTogMTAwMCxcbiAgICAgICAgICAgIEJsaW5kVXBUaW1lOiBcIjMnXCIsXG4gICAgICAgICAgICBJbml0aWFsSW5qZWN0aW9uOiBcIjEwLzIwXCIsXG4gICAgICAgICAgICBJbml0aWFsSW50ZWdyYWw6IDEwMDBcbiAgICAgICAgfTtcbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFA5Q3JlYXRlU2V0dGluZ3M7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc1MTA5ZkhXTEZGSGphNUlYaGRzRWwxdScsICdQOUdhbWVEYXRhJyk7XG4vLyBzY3JpcHRzL1A5L0RhdGEvUDlHYW1lRGF0YS5qc1xuXG4vKlxuICog5Lmd5Lq65qGM5ri45oiP55u45YWz55qE54m55pyJ5pWw5o2u57uT5p6EXG4gKiBAQXV0aG9yOiB0aG9yLmxpdSBcbiAqIEBEYXRlOiAyMDE2LTEyLTAzIDEzOjI2OjMyIFxuICogQExhc3QgTW9kaWZpZWQgYnk6IHRob3IubGl1XG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTEyLTEyIDE0OjQ0OjUwXG4gKi9cbnZhciBQOUdhbWVEYXRhID0ge307XG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBNT0RFTCA9IHJlcXVpcmUoXCJGV1NfTU9ERUxcIik7XG52YXIgREFUQSA9IHJlcXVpcmUoXCJGV1NfTU9ERUxfREFUQVwiKTtcblxuLy8v5ri45oiP5oi/6Ze057G75Z6LXG5QOUdhbWVEYXRhLlA5Um9vbVR5cGUgPSBjYy5FbnVtKHtcbiAgICBTVEQ6IDAsXG4gICAgU05HOiAxLFxuICAgIE1UVDogMlxufSk7XG5cbi8vL+aJkeWFi+eJjOeahOiKseiJslxuUDlHYW1lRGF0YS5QS0NhcmRDb2xvciA9IGNjLkVudW0oe1xuICAgIC8v5pa554mHXG4gICAgRGlhbW9uZDogMCxcbiAgICAvL+iNieiKsVxuICAgIENsdWI6IDEsXG4gICAgLy/nuqLlv4NcbiAgICBIZWFydHM6IDIsXG4gICAgLy/pu5HmoYNcbiAgICBTcGFkZTogM1xufSk7XG5cbi8vL+aJkeWFi+eJjOeahOeCueaVsFxuUDlHYW1lRGF0YS5QS0NhcmRBbW91bnQgPSBjYy5FbnVtKHtcbiAgICBBbW91bnRBOiAwLFxuICAgIEFtb3VudDI6IDEsXG4gICAgQW1vdW50MzogMixcbiAgICBBbW91bnQ0OiAzLFxuICAgIEFtb3VudDU6IDQsXG4gICAgQW1vdW50NjogNSxcbiAgICBBbW91bnQ3OiA2LFxuICAgIEFtb3VudDg6IDcsXG4gICAgQW1vdW50OTogOCxcbiAgICBBbW91bnQxMDogOSxcbiAgICBBbW91bnRKOiAxMCxcbiAgICBBbW91bnRROiAxMSxcbiAgICBBbW91bnRLOiAxMlxufSk7XG5cbi8vL+eJjOWei+e7hOWQiOexu+Wei1xuUDlHYW1lRGF0YS5QOUNhcmRHcm91cFR5cGUgPSBjYy5FbnVtKHtcbiAgICAvLy/ljZXniYxcbiAgICBTaW5nbGU6IDAsXG4gICAgLy8vMeWvuVxuICAgIFBhaXIxOiAxLFxuICAgIC8vLzLlr7lcbiAgICBQYWlyMjogMixcbiAgICAvLy8z5p2hXG4gICAgVGhyZWVTYW1lOiAzLFxuICAgIC8vL+mhulxuICAgIFN0cmFpZ2h0OiA0LFxuICAgIC8vL+WQjOiKsVxuICAgIEZsdXNoOiA1LFxuICAgIC8vL+iRq+iKplxuICAgIEZsdXNoSG91c2U6IDYsXG4gICAgLy8vNOadoVxuICAgIEZvdXJTYW1lOiA3LFxuICAgIC8vL+WQjOiKsemhulxuICAgIFN0cmFpZ2h0Rmx1c2g6IDgsXG4gICAgLy8v55qH5a625ZCM6Iqx6aG6XG4gICAgU3RyYWlnaHRLaW5nOiA5XG59KTtcblxuLy8v5ri45oiP5Yqo5L2c57G75Z6L5a6a5LmJXG5QOUdhbWVEYXRhLlA5R2FtZUFjdGlvblR5cGUgPSBjYy5FbnVtKHtcbiAgICAvLy/ml6BcbiAgICBOb25lOiAwLFxuICAgIC8vL0FudGVcbiAgICBBbnRlOiAxLFxuICAgIC8vL+Wwj+ebslxuICAgIFNCOiAyLFxuICAgIC8vL+Wkp+ebslxuICAgIEJCOiAzLFxuICAgIC8vL+S4i+azqFxuICAgIEJldDogNCxcbiAgICAvLy/ot5/ms6hcbiAgICBDYWxsOiA1LFxuICAgIC8vL+W8g+eJjFxuICAgIEZvbGQ6IDYsXG4gICAgLy8v6L+H54mMXG4gICAgQ2hlY2s6IDcsXG4gICAgLy8v5Yqg5rOoXG4gICAgUmFpc2U6IDgsXG4gICAgLy8v5YWo5LiLXG4gICAgQWxsaW46IDksXG4gICAgLy8v5Lqu54mMXG4gICAgU2hvd2NhcmQ6IDEwLFxuICAgIC8vL1N0cmFkZGxlXG4gICAgU3RyYWRkbGU6IDExLFxuICAgIC8vL+W8uuWItuWkp+ebsuazqFxuICAgIEZvcmNlQkI6IDEyLFxuICAgIC8vL+WKoOaXtlxuICAgIFRpbWVCYW5rOiAxMyxcblxuICAgIC8vL+S4gOaJi+e7k+aenOWKoOWIhlxuICAgIFNob3dDaGlwczogMTAyXG59KTtcblxuLy8v5ri45oiP5LqL5Lu257G75Z6LXG5QOUdhbWVEYXRhLlA5R2FtZUV2ZW50VHlwZSA9IGNjLkVudW0oe1xuICAgIC8vL+aXoFxuICAgIE5vbmU6IDAsXG4gICAgLy8v5Y+R5omL54mMXG4gICAgSGFuZENhcmRzOiAxLFxuICAgIC8vL+WPkeWFrOWFseeJjFxuICAgIFB1YmxpY0NhcmRzOiAyXG59KTtcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuLy/miZHlhYvniYzmlbDmja5cblA5R2FtZURhdGEuUEtDYXJkID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiUEtDYXJkXCIsXG5cbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge1xuICAgICAgICB0aGlzLl9pZCA9IC0xO1xuICAgIH0sXG5cbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHZhciBzelN0eWxlcyA9IFtcIuKZpu+4j1wiLCBcIuKZo++4j1wiLCBcIuKZpe+4j1wiLCBcIuKZoO+4j1wiXTtcbiAgICAgICAgdmFyIHN6QW1vdW50cyA9IFtcIkFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCIsIFwiSlwiLCBcIlFcIiwgXCJLXCJdO1xuXG4gICAgICAgIGlmICh0aGlzLl9pZCA8IDApIHJldHVybiBcIjw/PlwiO1xuXG4gICAgICAgIHZhciBjID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmFtb3VudDtcblxuICAgICAgICByZXR1cm4gXCI8XCIgKyBzelN0eWxlc1tjXSArIHN6QW1vdW50c1thXSArIFwiPlwiO1xuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJvlu7rmjIflrppJROeahOeJjFxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoY2FyZElkKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IFA5R2FtZURhdGEuUEtDYXJkKCk7XG4gICAgICAgICAgICByZXQuaWQgPSBjYXJkSWQ7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICog5Yib5bu65oyH5a6a6Iqx6Imy5ZKM54K55pWw55qE54mMXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVCeUNvbG9yQW1vdW50OiBmdW5jdGlvbiBjcmVhdGVCeUNvbG9yQW1vdW50KGMsIGEpIHtcbiAgICAgICAgICAgIHZhciBjYXJkSWQgPSAoYyArIDEpICogMTAwICsgYTtcbiAgICAgICAgICAgIHZhciByZXQgPSBuZXcgUDlHYW1lRGF0YS5QS0NhcmQoKTtcbiAgICAgICAgICAgIHJldC5pZCA9IGNhcmRJZDtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLy/ojrflj5bmiJborr7nva7niYznmoRJRFxuICAgICAgICBpZDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vL+iOt+WPlueJjOeahOiKseiJslxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldCA9IHRoaXMuX2lkO1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBNYXRoLmZsb29yKHJldCAvIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vL+iOt+WPlueJjOeahOeCueaVsFxuICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXQgPSB0aGlzLl9pZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gTWF0aC5mbG9vcihyZXQgJSAxMDApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vL+iOt+WPlueJjOeahOaOkuW6j+e8luWPt1xuICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IHRoaXMuX2lkO1xuICAgICAgICAgICAgICAgIGlmIChyZXQgPCAwKSByZXR1cm4gcmV0O1xuXG4gICAgICAgICAgICAgICAgdmFyIGlDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICAgICAgdmFyIGlBbW91bnQgPSB0aGlzLmFtb3VudDtcblxuICAgICAgICAgICAgICAgIHZhciBpQ29sb3JWYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGlBbW91bnRWYWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaUFtb3VudCA9PSAwKSBpQW1vdW50ID0gMjA7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGlDb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFA5R2FtZURhdGEuUEtDYXJkQ29sb3IuQ2x1YjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlDb2xvclZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUDlHYW1lRGF0YS5QS0NhcmRDb2xvci5EaWFtb25kOlxuICAgICAgICAgICAgICAgICAgICAgICAgaUNvbG9yVmFsdWUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBQOUdhbWVEYXRhLlBLQ2FyZENvbG9yLkhlYXJ0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlDb2xvclZhbHVlID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUDlHYW1lRGF0YS5QS0NhcmRDb2xvci5TcGFkZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlDb2xvclZhbHVlID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBpQW1vdW50ICogMTAwMCArIGlDb2xvclZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxuLy/kuZ3kurrmoYzmuLjmiI/miL/pl7TmlbDmja5cblA5R2FtZURhdGEuUDlHYW1lRGF0YSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIlA5R2FtZURhdGFcIixcbiAgICBcImV4dGVuZHNcIjogTU9ERUwuRkFic3RyYWN0TW9kZWwsXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHt9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLy/muLjmiI/miL/pl7TnsbvlnotcbiAgICAgICAgcm9vbVR5cGU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VmFsdWUoXCJyb29tVHlwZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcInJvb21UeXBlXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8v5Lmd5Lq65qGM5ri45oiP5qGM5pWw5o2uXG5QOUdhbWVEYXRhLlA5R2FtZVRhYmxlRGF0YSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIlA5R2FtZVRhYmxlRGF0YVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBNT0RFTC5GQWJzdHJhY3RNb2RlbCxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKFwicHVibGljQ2FyZHNcIiwgbmV3IE1PREVMLkZBcnJheSgpKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcInRvdGFsQ2hpcHNcIiwgMCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJwb3RzXCIsIG5ldyBNT0RFTC5GQXJyYXkoKSk7XG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vL+WFrOWFseeJjFxuICAgICAgICBwdWJsaWNDYXJkczoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJwdWJsaWNDYXJkc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8v5b2T5YmN5ri45oiP55qE5oC75aWW5rGgXG4gICAgICAgIHRvdGFsQ2hpcHM6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwidG90YWxDaGlwc1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcInRvdGFsQ2hpcHNcIiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vL+W9k+WJjea4uOaIj+eahOaJgOacieWlluaxoCAoUDlHYW1lUG90RGF0Yee7hOaIkOeahEZBcnJheSlcbiAgICAgICAgcG90czoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJwb3RzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8v5Lmd5Lq65qGM5ri45oiP5aWW5rGg5pWw5o2uXG5QOUdhbWVEYXRhLlA5R2FtZVBvdERhdGEgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJQOUdhbWVQb3REYXRhXCIsXG4gICAgXCJleHRlbmRzXCI6IE1PREVMLkZBYnN0cmFjdE1vZGVsLFxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJjaGlwc1wiLCAwKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcInNlYXRzXCIsIG5ldyBNT0RFTC5GQXJyYXkoKSk7XG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v5aWW5rGg5Lit55qE562556CB5pWw6YePXG4gICAgICAgIGNoaXBzOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImNoaXBzXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwiY2hpcHNcIiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8v5aWW5rGg5raJ5Y+K55qE546p5a625Z2Q5L2N5Y+3XG4gICAgICAgIHNlYXRzOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcInNlYXRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8v5Lmd5Lq65qGM5ri45oiP57uT566X5pWw5o2uXG5QOUdhbWVEYXRhLlA5R2FtZVJlc3VsdERhdGEgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJQOUdhbWVSZXN1bHREYXRhXCIsXG4gICAgXCJleHRlbmRzXCI6IE1PREVMLkZBYnN0cmFjdE1vZGVsLFxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJwbGF5ZXJzXCIsIG5ldyBNT0RFTC5GQXJyYXkoKSk7XG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBsYXllcnM6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwicGxheWVyc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vL+S5neS6uuahjOa4uOaIj+e7k+eul+aXtuavj+S4queOqeWutueahOaVsOaNrlxuUDlHYW1lRGF0YS5QOUdhbWVSZXN1bHRQbGF5ZXJEYXRhID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiUDlHYW1lUmVzdWx0UGxheWVyRGF0YVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBNT0RFTC5GQWJzdHJhY3RNb2RlbCxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKFwic2VhdFwiLCAwKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcIndpbkNoaXBzXCIsIDApO1xuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvL+W6p+S9jeWPt1xuICAgICAgICBzZWF0OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcInNlYXRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzZWF0XCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+i1oueahOetueeggeaVsFxuICAgICAgICB3aW5DaGlwczoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJ3aW5DaGlwc1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcIndpbkNoaXBzXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8v5Lmd5Lq65qGM546p5a625pWw5o2uXG5QOUdhbWVEYXRhLlA5UGxheWVyRGF0YSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIlA5UGxheWVyRGF0YVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBNT0RFTC5GQWJzdHJhY3RNb2RlbCxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKFwiaGFuZENhcmRzXCIsIG5ldyBNT0RFTC5GQXJyYXkoKSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJjYXJkR3JvdXBcIiwgbmV3IE1PREVMLkZBcnJheSgpKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcImNhcmRHcm91cFR5cGVcIiwgUDlHYW1lRGF0YS5QOUNhcmRHcm91cFR5cGUuTm9uZSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJjdXJyZW50Um91bmRBY3Rpb25UeXBlXCIsIFA5R2FtZURhdGEuUDlHYW1lQWN0aW9uVHlwZS5TaW5nbGUpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKFwiY3VycmVudFJvdW5kQ2hpcHNcIiwgMCk7XG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vL+aJi+eJjOaVsOaNrlxuICAgICAgICBoYW5kQ2FyZHM6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiaGFuZENhcmRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLy/niYzlnovnu4TlkIhcbiAgICAgICAgY2FyZEdyb3VwOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImNhcmRHcm91cFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8v54mM5Z6L57uE5ZCI57G75Z6LXG4gICAgICAgIGNhcmRHcm91cFR5cGU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiY2FyZEdyb3VwVHlwZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcImNhcmRHcm91cFR5cGVcIiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vL+W9k+WJjei/meS4gOi9rueahOWKqOS9nOexu+Wei1xuICAgICAgICBjdXJyZW50Um91bmRBY3Rpb25UeXBlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImN1cnJlbnRSb3VuZEFjdGlvblR5cGVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJjdXJyZW50Um91bmRBY3Rpb25UeXBlXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLy/lvZPliY3ov5nkuIDova7lh7rnmoTnrbnnoIHmlbBcbiAgICAgICAgY3VycmVudFJvdW5kQ2hpcHM6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiY3VycmVudFJvdW5kQ2hpcHNcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJjdXJyZW50Um91bmRDaGlwc1wiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vL+S5neS6uuahjOeJjOiwseaVsOaNrlxuUDlHYW1lRGF0YS5QOUdhbWVSb3VuZERhdGEgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJQOUdhbWVSb3VuZERhdGFcIixcbiAgICBcImV4dGVuZHNcIjogTU9ERUwuRkFic3RyYWN0TW9kZWwsXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHt9LFxuICAgIHByb3BlcnRpZXM6IHt9XG59KTtcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuLy/lj5HniYzkuovku7ZcblA5R2FtZURhdGEuUDlHYW1lRXZlbnRHZXRDYXJkcyA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIlA5R2FtZUV2ZW50R2V0Q2FyZHNcIixcbiAgICBcImV4dGVuZHNcIjogTU9ERUwuRkFic3RyYWN0TW9kZWwsXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcImNhcmRzXCIsIG5ldyBNT0RFTC5GQXJyYXkoKSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzZWF0XCIsIC0xKTtcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy/mnKzmrKHlj5HniYzljIXlkKvkuoblk6rlh6DlvKDmiZHlhYvniYznmoTlr7nosaFcbiAgICAgICAgY2FyZHM6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiY2FyZHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8v5pys5qyh5Y+R54mM5piv5Y+R57uZ6LCBKOW6p+S9jeWPtyksIOWmguaenOaYr+i0n+aVsCwg6KGo56S65piv5Y+R55qE5YWs5YWx54mMXG4gICAgICAgIHNlYXQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwic2VhdFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcInNlYXRcIiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLy/liqjkvZzor6Lpl65cblA5R2FtZURhdGEuUDlHYW1lQWN0aW9uUmVxRGF0YSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIlA5R2FtZUFjdGlvblJlcURhdGFcIixcbiAgICBcImV4dGVuZHNcIjogTU9ERUwuRkFic3RyYWN0TW9kZWwsXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcImFjdGlvblR5cGVzXCIsIG5ldyBNT0RFTC5GQXJyYXkoKSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJ0aW1lclwiLCAwKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcIm1pbkNoaXBzXCIsIDApO1xuICAgICAgICB0aGlzLnNldFZhbHVlKFwibWF4Q2hpcHNcIiwgMCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzZWF0XCIsIDApO1xuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v5Y+v6YCJ55qE5Yqo5L2c57G75Z6LXG4gICAgICAgIGFjdGlvblR5cGVzOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImFjdGlvblR5cGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+WIsOiuoeaXtuenkuaVsFxuICAgICAgICB0aW1lcjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJ0aW1lclwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcInRpbWVyXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+acgOWwj+etueeggVxuICAgICAgICBtaW5DaGlwczoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJtaW5DaGlwc1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcIm1pbkNoaXBzXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+acgOWkp+etueeggVxuICAgICAgICBtYXhDaGlwczoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJtYXhDaGlwc1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcIm1heENoaXBzXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+W6p+S9jeWPt1xuICAgICAgICBzZWF0OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcInNlYXRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzZWF0XCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cblA5R2FtZURhdGEuUDlVc2VyRmFjdG9yeSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIlA5VXNlckZhY3RvcnlcIixcbiAgICBcImV4dGVuZHNcIjogREFUQS5GVXNlckZhY3RvcnksXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHt9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgICB2YXIgcmV0ID0gdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgLy8gcmV0LmRhdGEudXNlckRhdGEgPSBuZXcgUDlHYW1lRGF0YS5QOVVzZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG59KTtcblxuUDlHYW1lRGF0YS5QOVBsYXllckZhY3RvcnkgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJQOVBsYXllckZhY3RvcnlcIixcbiAgICBcImV4dGVuZHNcIjogREFUQS5GUGxheWVyRmFjdG9yeSxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge30sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHZhciByZXQgPSB0aGlzLl9zdXBlcigpO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICByZXQuZGF0YS5wbGF5ZXJEYXRhID0gbmV3IFA5R2FtZURhdGEuUDlQbGF5ZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG59KTtcblxuUDlHYW1lRGF0YS5QOUdhbWVGYWN0b3J5ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiUDlHYW1lRmFjdG9yeVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBEQVRBLkZHYW1lRmFjdG9yeSxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge30sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHZhciByZXQgPSB0aGlzLl9zdXBlcigpO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICByZXQuZGF0YS5nYW1lRGF0YSA9IG5ldyBQOUdhbWVEYXRhLlA5R2FtZURhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn0pO1xuXG5QOUdhbWVEYXRhLlA5R2FtZVRhYmxlRmFjdG9yeSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIlA5R2FtZVRhYmxlRmFjdG9yeVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBEQVRBLkZHYW1lVGFibGVGYWN0b3J5LFxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7fSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgdmFyIHJldCA9IHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIHJldC5kYXRhLnRhYmxlRGF0YSA9IG5ldyBQOUdhbWVEYXRhLlA5R2FtZVRhYmxlRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxufSk7XG5cblA5R2FtZURhdGEuUDlHYW1lUm91bmRGYWN0b3J5ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiUDlHYW1lUm91bmRGYWN0b3J5XCIsXG4gICAgXCJleHRlbmRzXCI6IERBVEEuRkdhbWVSb3VuZEZhY3RvcnksXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHt9XG59KTtcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxubW9kdWxlLmV4cG9ydHMgPSBQOUdhbWVEYXRhO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNDc1NTdUQmVWOU9CTDhRYVk4R2FXVGwnLCAnUDlSb29tRGF0YScpO1xuLy8gc2NyaXB0cy9QOS9EYXRhL1A5Um9vbURhdGEuanNcblxuLypcbiAqIOS5neS6uuahjOeahOaIv+mXtOebuOWFs+eahOeJueacieaVsOaNrue7k+aehFxuICogQEF1dGhvcjogdGhvci5saXUgXG4gKiBARGF0ZTogMjAxNi0xMi0wMyAxMzoyNjoxMyBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiB0aG9yLmxpdVxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0xMi0wOCAxOTo1NzoyMFxuICovXG5cbnZhciBQOVJvb21EYXRhID0ge307XG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBNT0RFTCA9IHJlcXVpcmUoXCJGV1NfTU9ERUxcIik7XG52YXIgREFUQSA9IHJlcXVpcmUoXCJGV1NfTU9ERUxfREFUQVwiKTtcblxuLy8v5qCH5YeG5bGA5Y+C5pWwKFNURClcblA5Um9vbURhdGEuUDlTVERHYW1lRGF0YSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIlA5U1RER2FtZURhdGFcIixcbiAgICBcImV4dGVuZHNcIjogTU9ERUwuRkFic3RyYWN0TW9kZWwsXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcblxuICAgICAgICB0aGlzLnNiID0gMTA7XG4gICAgICAgIHRoaXMuYmIgPSAyMDtcbiAgICAgICAgdGhpcy5lbnRlckNoaXAgPSAyMDAwO1xuICAgICAgICB0aGlzLnBsYXllckNvdW50ID0gOTtcbiAgICAgICAgdGhpcy5yb29tVGltZSA9IDI7XG4gICAgICAgIHRoaXMuYXV0aG9yaXplID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2FmZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFudGUgPSAwO1xuICAgICAgICB0aGlzLnN0cmFkZGxlID0gMDtcbiAgICAgICAgdGhpcy5kZWVwTW9kZSA9IDA7XG4gICAgICAgIHRoaXMuYWxsaW4gPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvL+Wwj+ebslxuICAgICAgICBzYjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJzYlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcInNiXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+Wkp+ebslxuICAgICAgICBiYjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJiYlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcImJiXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+W4puWFpeiusOWIhueJjFxuICAgICAgICBlbnRlckNoaXA6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiZW50ZXJDaGlwXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwiZW50ZXJDaGlwXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+WPguS4juS6uuaVsFxuICAgICAgICBwbGF5ZXJDb3VudDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJwbGF5ZXJDb3VudFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcInBsYXllckNvdW50XCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+eJjOWxgOaXtumVv1xuICAgICAgICByb29tVGltZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJyb29tVGltZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcInJvb21UaW1lXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+aOiOadg1xuICAgICAgICBhdXRob3JpemU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiYXV0aG9yaXplXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwiYXV0aG9yaXplXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+S/nemZqeW8gOWFs1xuICAgICAgICBzYWZlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcInNhZmVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzYWZlXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL0FudGVcbiAgICAgICAgYW50ZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJhbnRlXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwiYW50ZVwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy9TdHJhZGRsZVxuICAgICAgICBzdHJhZGRsZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJzdHJhZGRsZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcInN0cmFkZGxlXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+a3seetueaooeW8j1xuICAgICAgICBkZWVwTW9kZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJkZWVwTW9kZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcImRlZXBNb2RlXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL0FsbGluIOemgemfs1xuICAgICAgICBhbGxpbjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJhbGxpblwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcImFsbGluXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8v5q+U6LWb5bGA5Y+C5pWwKFNORywgTVRUKVxuUDlSb29tRGF0YS5QOU1UVEdhbWVEYXRhID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiUDlNVFRHYW1lRGF0YVwiLFxuICAgIFwiZXh0ZW5kc1wiOiBNT0RFTC5GQWJzdHJhY3RNb2RlbCxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge30sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgLy/ljZXmoYzkurrmlbBcbiAgICAgICAgdGFibGVQbGF5ZXJDb3VudDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJ0YWJsZVBsYXllckNvdW50XCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwidGFibGVQbGF5ZXJDb3VudFwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy/pgJ/luqZcbiAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwic3BlZWRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzcGVlZFwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy/mjojmnYNcbiAgICAgICAgYXV0aG9yaXplOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImF1dGhvcml6ZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcImF1dGhvcml6ZVwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy/lu7bml7bmiqXlkI1cbiAgICAgICAgZGVsYXlKb2luOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImRlbGF5Sm9pblwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShcImRlbGF5Sm9pblwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy/mt7HnrbnmqKHlvI9cbiAgICAgICAgZGVlcE1vZGU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiZGVlcE1vZGVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoXCJkZWVwTW9kZVwiLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyhNVFTkuJPnlKgpIOW8gOi1m+aXtumXtFxuICAgICAgICBzdGFydFRpbWU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwic3RhcnRUaW1lXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwic3RhcnRUaW1lXCIsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vKFNOR+S4k+eUqCkg5Y+C5pWw5Lq65pWwXG4gICAgICAgIG1heFBsYXllckNvdW50OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcIm1heFBsYXllckNvdW50XCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKFwibWF4UGxheWVyQ291bnRcIiwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxubW9kdWxlLmV4cG9ydHMgPSBQOVJvb21EYXRhO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZTUwY2VLQ3orSkQrN2wwUHNyY0IvRmwnLCAnUDlTb2NrZXRHU01vZGVsJyk7XG4vLyBzY3JpcHRzL1A5L01vZGVscy9QOVNvY2tldEdTTW9kZWwuanNcblxuLypcbiAqIOS4juS5neS6uuahjOa4uOaIj+acjeWKoeeahFNvY2tldOmAmuiur1xuICogQEF1dGhvcjogdGhvci5saXUgXG4gKiBARGF0ZTogMjAxNi0xMi0wMyAxNTowODowMCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiB0aG9yLmxpdVxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0xMi0xNSAxNTo1MDowN1xuICovXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgTU9ERUwgPSByZXF1aXJlKFwiRldTX01PREVMXCIpO1xudmFyIERBVEEgPSByZXF1aXJlKFwiRldTX01PREVMX0RBVEFcIik7XG52YXIgTVNHID0gcmVxdWlyZShcIkZXU19NU0dcIik7XG5cbnZhciBGU29ja2V0UGFjayA9IHJlcXVpcmUoXCJGU29ja2V0UGFja1wiKTtcbnZhciBGU29ja2V0TW9kZWxBYnN0cmFjdCA9IHJlcXVpcmUoXCJGU29ja2V0TW9kZWxBYnN0cmFjdFwiKTtcbnZhciBOT1RJRlkgPSBGU29ja2V0UGFjay5GSGVhZGVyTWFyay5Ob3RpZnk7XG52YXIgUkVRID0gRlNvY2tldFBhY2suRkhlYWRlck1hcmsuUmVxO1xudmFyIEFDSyA9IEZTb2NrZXRQYWNrLkZIZWFkZXJNYXJrLkFjaztcbnZhciBNU0dJRFMgPSBGU29ja2V0UGFjay5Nc2dJRHNbMF07XG5cbm1vZHVsZS5leHBvcnRzID0gY2MuQ2xhc3Moe1xuICAgIC8vIG5hbWU6IFwiUDlTb2NrZXRHU01vZGVsXCIsXG4gICAgXCJleHRlbmRzXCI6IEZTb2NrZXRNb2RlbEFic3RyYWN0LFxuICAgIC8vIGN0b3I6IGZ1bmN0aW9uKCkge30sXG5cbiAgICAvL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCDnvZHnu5zpgJrorq9cblxuICAgIGluaXRIYW5kbGVyczogZnVuY3Rpb24gaW5pdEhhbmRsZXJzKCkge30sXG5cbiAgICAvL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCDmuLjmiI/kuovku7ZcblxuICAgIC8vVE9ETzogc3RhcnRcbiAgICAvL1RPRE86IGhhbmRjYXJkc1xuICAgIC8vVE9ETzogcHVibGljY2FyZHNcbiAgICAvL1RPRE86IHBvdFxuICAgIC8vVE9ETzogYWN0aW9uXG4gICAgLy9UT0RPOiB0aW1lYmFua1xuICAgIC8vVE9ETzogc2FmZS4uLlxuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAg5bCx57uqXG4gICAgb25GTWVzc2FnZV9nYW1lUmVhZHk6IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfZ2FtZVJlYWR5KG1zZykge1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICB9LFxuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAg546p5a625Yqo5L2cXG4gICAgb25GTWVzc2FnZV9nYW1lQWN0aW9uQWNrOiBmdW5jdGlvbiBvbkZNZXNzYWdlX2dhbWVBY3Rpb25BY2sobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczMDY3YXRsK3BWQmY2RFB0WXpOWjV3ZScsICdQOVRlc3RDcmVhdG9yTW9kZWwnKTtcbi8vIHNjcmlwdHMvUDkvTW9kZWxzL1A5VGVzdENyZWF0b3JNb2RlbC5qc1xuXG4vKlxuICog5ZyoQ3JlYXRvcuS4i+eahOa1i+ivleaooeWdlywg5Y+R5YGH5raI5oGv55So55qEXG4gKiBAQXV0aG9yOiB0aG9yLmxpdSBcbiAqIEBEYXRlOiAyMDE2LTEyLTAzIDE1OjA4OjI3IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IHRob3IubGl1XG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE2LTEyLTEyIDEzOjEyOjIxXG4gKi9cblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIE1TRyA9IHJlcXVpcmUoXCJGV1NfTVNHXCIpO1xudmFyIE1PREVMID0gcmVxdWlyZShcIkZXU19NT0RFTFwiKTtcbnZhciBEQVRBID0gcmVxdWlyZShcIkZXU19NT0RFTF9EQVRBXCIpO1xudmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIlA5R2FtZURhdGFcIik7XG52YXIgUm9vbURhdGEgPSByZXF1aXJlKFwiUDlSb29tRGF0YVwiKTtcblxudmFyIFA5VGVzdENyZWF0b3JNb2RlbCA9IGNjLkNsYXNzKHtcbiAgICAvLyBuYW1lOiBcIlA5VGVzdENyZWF0b3JNb2RlbFwiLFxuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuICAgIC8vIGN0b3I6IGZ1bmN0aW9uKCkge30sXG5cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIE1WQy5GTG9nLmluZm8oXCJ0ZXN0XCIsIFwib25FbnRlck5vZGVcIik7XG5cbiAgICAgICAgdmFyIHRhYmxlID0gREFUQS5GR2FtZVRhYmxlLmZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIERBVEEuRkdhbWVNb2RlbC5jdXJyZW50KCkuY3VycmVudEdhbWVUYWJsZSA9IHRhYmxlO1xuICAgICAgICB2YXIgdGVzdF91c2VycyA9IFt7IGlkOiBcIjEwMDAxXCIsIG5hbWU6IFwi5byg5bu65rCRXCIsIGltZzogXCIxMDAwMS5qcGdcIiB9LCB7IGlkOiBcIjEwMDAyXCIsIG5hbWU6IFwi5byg54G/6ZizXCIsIGltZzogXCIxMDAwMi5qcGdcIiB9LCB7IGlkOiBcIjEwMDAzXCIsIG5hbWU6IFwi5p2o6aOeXCIsIGltZzogXCIxMDAwMy5qcGdcIiB9LCB7IGlkOiBcIjEwMDA0XCIsIG5hbWU6IFwi5YiY5by6XCIsIGltZzogXCIxMDAwNC5qcGdcIiB9LCB7IGlkOiBcIjEwMDA1XCIsIG5hbWU6IFwi5qGR5qGRXCIsIGltZzogXCIxMDAwNS5qcGdcIiB9LCB7IGlkOiBcIjEwMDA2XCIsIG5hbWU6IFwi6auY5YGlXCIsIGltZzogXCIxMDAwNi5qcGdcIiB9LCB7IGlkOiBcIjEwMDA3XCIsIG5hbWU6IFwi6ZKn5rWpXCIsIGltZzogXCIxMDAwNy5qcGdcIiB9LCB7IGlkOiBcIjEwMDA4XCIsIG5hbWU6IFwi5a6J5aicXCIsIGltZzogXCIxMDAwOC5qcGdcIiB9LCB7IGlkOiBcIjEwMDA5XCIsIG5hbWU6IFwi55CD55CDXCIsIGltZzogXCIxMDAwOS5qcGdcIiB9XTtcblxuICAgICAgICB0YWJsZS5pZCA9IFwiMTJcIjtcblxuICAgICAgICB2YXIgdGFibGVEYXRhID0gbmV3IEdhbWVEYXRhLlA5R2FtZVRhYmxlRGF0YSgpO1xuXG4gICAgICAgIHRhYmxlLmRhdGEgPSB0YWJsZURhdGE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIHZhciB1c2VyID0gbmV3IERBVEEuRlVzZXIoKTtcbiAgICAgICAgICAgIHVzZXIuaWQgPSB0ZXN0X3VzZXJzW2ldLmlkO1xuICAgICAgICAgICAgdXNlci5uYW1lID0gdGVzdF91c2Vyc1tpXS5uYW1lO1xuICAgICAgICAgICAgdXNlci5hdmF0YXIgPSB0ZXN0X3VzZXJzW2ldLmltZztcblxuICAgICAgICAgICAgdmFyIHBsYXllciA9IERBVEEuRlBsYXllci5mYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICAgICAgcGxheWVyLnVzZXIgPSB1c2VyO1xuXG4gICAgICAgICAgICB0YWJsZS5zZXRQbGF5ZXJUb1NlYXQocGxheWVyLCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE1WQy5GTG9nLmluZm8oXCJ0ZXN0XCIsIFwidGFibGU9ezB9XCIsIHRhYmxlKTtcbiAgICB9LFxuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgQ29tbW9uXG5cbiAgICBvbkZNZXNzYWdlX3NlcnZlckNvbm5lY3Q6IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfc2VydmVyQ29ubmVjdChtc2cpIHtcbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG5cbiAgICAgICAgTVNHLkZXU01lc3NhZ2VGYWN0b3J5LnNlcnZlckNvbm5lY3RSZXN1bHQoMCkuc2VuZCgpO1xuICAgIH0sXG5cbiAgICAvL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBVc2VyXG5cbiAgICAvL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBSb29tXG5cbiAgICAvLy/or7fmsYLliJvlu7rmiL/pl7Tml7ZcbiAgICBvbkZNZXNzYWdlX3Jvb21DcmVhdGU6IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfcm9vbUNyZWF0ZShtc2cpIHtcbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG5cbiAgICAgICAgdmFyIGdhbWUgPSBEQVRBLkZHYW1lLmZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIGdhbWUubmFtZSA9IG1zZy5hcmdzLm5hbWU7XG4gICAgICAgIGdhbWUucm9vbVR5cGUgPSBtc2cuYXJncy5yb29tVHlwZTtcbiAgICAgICAgZ2FtZS5kYXRhID0gbXNnLmFyZ3Mucm9vbTtcblxuICAgICAgICBNU0cuRldTTWVzc2FnZUZhY3Rvcnkucm9vbUNyZWF0ZVJlc3VsdCgwLCBnYW1lKS5zZW5kKCk7IC8v5YGH6KOF5Yib5bu65oi/6Ze05oiQ5YqfXG4gICAgfSxcblxuICAgIC8vL+ivt+axguWKoOWFpeaIv+mXtOaXtlxuICAgIG9uRk1lc3NhZ2Vfcm9vbUpvaW46IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfcm9vbUpvaW4obXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuXG4gICAgICAgIHZhciBnYW1lID0gREFUQS5GR2FtZS5mYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICBnYW1lLm5hbWUgPSBcIua1i+ivleaIv+mXtFwiO1xuICAgICAgICBnYW1lLnJvb21UeXBlID0gR2FtZURhdGEuUDlSb29tVHlwZS5TVEQ7XG4gICAgICAgIGdhbWUuZGF0YSA9IG5ldyBSb29tRGF0YS5QOVNUREdhbWVEYXRhKCk7XG5cbiAgICAgICAgTVNHLkZXU01lc3NhZ2VGYWN0b3J5LnJvb21Kb2luUmVzdWx0KDAsIGdhbWUpLnNlbmQoKTsgLy/lgYfoo4XliqDlhaXmiL/pl7TmiJDlip9cbiAgICB9LFxuXG4gICAgLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgR2FtZVxuXG4gICAgLy8v6K+35rGC5Yqg5YWl5ri45oiP5pe2XG4gICAgb25GTWVzc2FnZV9nYW1lSm9pbjogZnVuY3Rpb24gb25GTWVzc2FnZV9nYW1lSm9pbihtc2cpIHtcbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG5cbiAgICAgICAgTVNHLkZXU01lc3NhZ2VGYWN0b3J5LmdhbWVKb2luUmVzdWx0KDApLnNlbmQoKTsgLy/lgYfoo4Xov5vlhaXmuLjmiI/miJDlip9cbiAgICAgICAgTVNHLkZXU01lc3NhZ2VGYWN0b3J5LnJvb21PbkdvdG9UYWJsZSgpLnNlbmQoKTsgLy/lgYfoo4XliIfmjaLliLDmoYzlrZDnmoTpgJrnn6VcbiAgICB9LFxuXG4gICAgLy8v6K+35rGC5bCx57uq5pe2XG4gICAgb25GTWVzc2FnZV9nYW1lUmVhZHk6IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfZ2FtZVJlYWR5KG1zZykge1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcblxuICAgICAgICBNU0cuRldTTWVzc2FnZUZhY3RvcnkuZ2FtZU9uU3RhcnQoKS5zZW5kKCk7IC8v5YGH6KOF5ri45oiP5byA5aeL55qE6YCa55+lXG5cbiAgICAgICAgLy/lgYfoo4XmuLjmiI/kuovku7bpgJrnn6UgKOWPkeaJi+eJjClcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgOTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50RGF0YSA9IG5ldyBHYW1lRGF0YS5QOUdhbWVFdmVudEdldENhcmRzKCk7XG4gICAgICAgICAgICAgICAgZXZlbnREYXRhLnNlYXQgPSBpO1xuICAgICAgICAgICAgICAgIHZhciBjYXJkSWQgPSAoaSArIDEpICogMTAwICsgajtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSAwKSBjYXJkSWQgPSAtMTtcbiAgICAgICAgICAgICAgICB2YXIgY2FyZCA9IEdhbWVEYXRhLlBLQ2FyZC5jcmVhdGUoY2FyZElkKTtcbiAgICAgICAgICAgICAgICBldmVudERhdGEuY2FyZHMuYWRkKGNhcmQpO1xuICAgICAgICAgICAgICAgIE1TRy5GV1NNZXNzYWdlRmFjdG9yeS5nYW1lRXZlbnROb3RpZnkoR2FtZURhdGEuUDlHYW1lRXZlbnRUeXBlLkhhbmRDYXJkcywgZXZlbnREYXRhKS5zZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL+WBh+ijheWKqOS9nOivoumXrumAmuefpVxuICAgICAgICB2YXIgcmVxRGF0YSA9IG5ldyBHYW1lRGF0YS5QOUdhbWVBY3Rpb25SZXFEYXRhKCk7XG4gICAgICAgIHJlcURhdGEudGltZXIgPSAzMDtcbiAgICAgICAgcmVxRGF0YS5taW5DaGlwcyA9IDA7XG4gICAgICAgIHJlcURhdGEubWF4Q2hpcHMgPSAxMDA7XG4gICAgICAgIHJlcURhdGEuc2VhdCA9IDA7XG4gICAgICAgIHJlcURhdGEuYWN0aW9uVHlwZXMuYWRkKEdhbWVEYXRhLlA5R2FtZUFjdGlvblR5cGUuQ2FsbCk7XG4gICAgICAgIHJlcURhdGEuYWN0aW9uVHlwZXMuYWRkKEdhbWVEYXRhLlA5R2FtZUFjdGlvblR5cGUuQmV0KTtcbiAgICAgICAgcmVxRGF0YS5hY3Rpb25UeXBlcy5hZGQoR2FtZURhdGEuUDlHYW1lQWN0aW9uVHlwZS5Gb2xkKTtcbiAgICAgICAgcmVxRGF0YS5hY3Rpb25UeXBlcy5hZGQoR2FtZURhdGEuUDlHYW1lQWN0aW9uVHlwZS5DaGVjayk7XG4gICAgICAgIHJlcURhdGEuYWN0aW9uVHlwZXMuYWRkKEdhbWVEYXRhLlA5R2FtZUFjdGlvblR5cGUuQWxsaW4pO1xuXG4gICAgICAgIE1TRy5GV1NNZXNzYWdlRmFjdG9yeS5nYW1lQWN0aW9uUmVxKCkuc2VuZCgpO1xuICAgIH0sXG5cbiAgICAvLy/lm57lpI3muLjmiI/liqjkvZzml7ZcbiAgICBvbkZNZXNzYWdlX2dhbWVBY3Rpb25BY2s6IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfZ2FtZUFjdGlvbkFjayhtc2cpIHtcbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG5cbiAgICAgICAgTVNHLkZXU01lc3NhZ2VGYWN0b3J5LmdhbWVBY3Rpb25Ob3RpZnkoKS5zZW5kKCk7IC8v5YGH6KOF5Yqo5L2c57uT5p6c6YCa55+lXG4gICAgICAgIE1TRy5GV1NNZXNzYWdlRmFjdG9yeS5nYW1lT25SZXN1bHQoKS5zZW5kKCk7IC8v5YGH6KOF5ri45oiP57uT5p6c6YCa55+lXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUDlUZXN0Q3JlYXRvck1vZGVsO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnN2U0ZDJlRmF3MVBoYTJaVVdMdDh0Uy8nLCAnUGFydHlDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5L1BhcnR5Q29udHJvbGxlci5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUGFydHlDb250cm9sbGVyO1xuUGFydHlDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJQYXJ0eUNvbnRyb2xsZXIgLS0tIG9uRW50ZXJOb2RlXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9LFxuICAgIC8v5Yqg5YWl54mM5bGAXG4gICAgb25GTWVzc2FnZV9vbkpvaW5QYXJ0eUNsaWNrOiBmdW5jdGlvbiBvbkZNZXNzYWdlX29uSm9pblBhcnR5Q2xpY2sobXNnKSB7XG4gICAgICAgIC8v5Yik5pat5pWw5a2X6L6T5YWl55qE5L2N5pWw5piv5ZCm5q2j56GuXG5cbiAgICAgICAgLy/lpoLmnpzkuI3mraPnoa7lj5Eg5L2N5pWw5LiN5q2j56Gu5raI5oGvXG5cbiAgICAgICAgLy/lpoLmnpzmraPnoa5nb3RvIGpvaW5QYXJ0eVxuICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcImxvYWRpbmdQYXJ0eVwiKTtcbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4gICAgfSxcbiAgICAvL+WIm+W7uueJjOWxgFxuICAgIG9uRk1lc3NhZ2Vfb25DcmVhdFBhcnR5Q2xpY2s6IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfb25DcmVhdFBhcnR5Q2xpY2sobXNnKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGNjLmxvZyhcIlBhcnR5Q29udHJvbGxlciAtLS0gb25GTWVzc2FnZV9jcmVhdGVQYXJ0eUJ1dHRvbkNsaWNrXCIpO1xuXG4gICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwiY3JlYXRlUGFydHlTZXRcIik7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBQYXJ0eUNvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdjM2U3NkhhUHdwS01ZRkNucnZMM280YicsICdQYXJ0eVNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS9QYXJ0eVNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gYmxpbmRyZXN1bHQ6MCxcblxuICAgICAgICBiZzoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcblxuICAgICAgICBTbGlkZXJvbmU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU2xpZGVyXG4gICAgICAgIH0sXG4gICAgICAgIC8v5bCP55uy5aSn55uyXG4gICAgICAgIGJsaW5kbGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/luKblhaXorrDliIbniYxcbiAgICAgICAgc2NvcmVjYXJkbGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIG9uRGVzdG9yeTogZnVuY3Rpb24gb25EZXN0b3J5KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuXG4gICAgLy/pq5jnuqfpgInpoblcbiAgICBtb3Jlb3B0aW9uOiBmdW5jdGlvbiBtb3Jlb3B0aW9uKCkge1xuXG4gICAgICAgIC8vIHZhciB3aW5TaXplVz10aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQqMC4zO1xuICAgICAgICAvLyB2YXIgbW92ZXVwID0gY2MubW92ZUJ5KDAuMSwgY2MucCgwLCB3aW5TaXplVykpO1xuICAgICAgICAvLyB0aGlzLmJnLm5vZGUucnVuQWN0aW9uKG1vdmV1cCk7XG5cbiAgICB9LFxuXG4gICAgLy/liJvlu7rmoIflh4blsYBcbiAgICBzdGFuZGFyZEJ1dHRvbkNsaWNrOiBmdW5jdGlvbiBzdGFuZGFyZEJ1dHRvbkNsaWNrKCkge1xuXG4gICAgICAgIHZhciBtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwiY2xpY2tzdGFuZGFyZEJ1dHRvblwiLCBcImNyZWF0ZVBhcnR5U2V0XCIpO1xuICAgICAgICBtc2cuYXJncy5uYW1lID0gXCLliJvlu7rmoIflh4bniYzlsYBcIjtcbiAgICAgICAgLy8gbXNnLmFyZ3MuYmxpbmQgPSB0aGlzLmJsaW5kVmFsdWUuZ2V0KCk7XG4gICAgICAgIG1zZy5zZW5kKCk7XG4gICAgfSxcblxuICAgIC8v5Yib5bu6U05HXG4gICAgU05HQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIFNOR0J1dHRvbkNsaWNrKCkge1xuICAgICAgICB2YXIgbXNnID0gbmV3IE1WQy5GTWVzc2FnZShcImNsaWNrU05HQnV0dG9uXCIsIFwiY3JlYXRlUGFydHlTZXRcIik7XG4gICAgICAgIG1zZy5hcmdzLm5hbWUgPSBcIuWIm+W7ulNOR+avlOi1m1wiO1xuICAgICAgICBtc2cuc2VuZCgpO1xuICAgIH0sXG4gICAgLy/liJvlu7pNVFRcbiAgICBNVFRCdXR0b25DbGljazogZnVuY3Rpb24gTVRUQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHZhciBtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwiY2xpY2tNVFRCdXR0b25cIiwgXCJjcmVhdGVQYXJ0eVNldFwiKTtcbiAgICAgICAgbXNnLmFyZ3MubmFtZSA9IFwi5Yib5bu6TVRU5q+U6LWbXCI7XG4gICAgICAgIG1zZy5zZW5kKCk7XG4gICAgfSxcblxuICAgIEJ1eXNob3VxdWFuOiBmdW5jdGlvbiBCdXlzaG91cXVhbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJjbGlja2J1eXNob3VxdWFuXCIsIFwicGFydHlcIik7XG4gICAgICAgIG1zZy5hcmdzLm5hbWUgPSBcIuWIm+W7uk1UVOavlOi1m1wiO1xuICAgICAgICBtc2cuc2VuZCgpO1xuICAgIH0sXG5cbiAgICAvL+esrOS4gOS4qlNsaWRlciDlpKflsI/nm7Lms6gg5bim5YWl6K6w5YiG54mMXG4gICAgQmxpbmRTbGlkZXI6IGZ1bmN0aW9uIEJsaW5kU2xpZGVyKCkge1xuXG4gICAgICAgIHZhciBwZXJjZW50ID0gdGhpcy5TbGlkZXJvbmUucHJvZ3Jlc3M7XG5cbiAgICAgICAgaWYgKDEgLyA2IDwgcGVyY2VudCAmJiBwZXJjZW50IDwgMiAvIDYpIHtcbiAgICAgICAgICAgIHRoaXMuYmxpbmRsYWJlbC5zdHJpbmcgPSAnMi80JztcbiAgICAgICAgICAgIHRoaXMuc2NvcmVjYXJkbGFiZWwuc3RyaW5nID0gJzQwMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDIgLyA2IDwgcGVyY2VudCAmJiBwZXJjZW50IDwgMyAvIDYpIHtcbiAgICAgICAgICAgIHRoaXMuYmxpbmRsYWJlbC5zdHJpbmcgPSAnNC84JztcbiAgICAgICAgICAgIHRoaXMuc2NvcmVjYXJkbGFiZWwuc3RyaW5nID0gJzEwMDAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICgzIC8gNiA8IHBlcmNlbnQgJiYgcGVyY2VudCA8IDQgLyA2KSB7XG4gICAgICAgICAgICB0aGlzLmJsaW5kbGFiZWwuc3RyaW5nID0gJzUvMTAnO1xuICAgICAgICAgICAgdGhpcy5zY29yZWNhcmRsYWJlbC5zdHJpbmcgPSAnMjAwMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDQgLyA2IDwgcGVyY2VudCAmJiBwZXJjZW50IDwgNSAvIDYpIHtcbiAgICAgICAgICAgIHRoaXMuYmxpbmRsYWJlbC5zdHJpbmcgPSAnMTAvMjAnO1xuICAgICAgICAgICAgdGhpcy5zY29yZWNhcmRsYWJlbC5zdHJpbmcgPSAnNTAwMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDUgLyA2IDwgcGVyY2VudCAmJiBwZXJjZW50IDwgMSkge1xuICAgICAgICAgICAgdGhpcy5ibGluZGxhYmVsLnN0cmluZyA9ICcyNS81MCc7XG4gICAgICAgICAgICB0aGlzLnNjb3JlY2FyZGxhYmVsLnN0cmluZyA9ICcxMDAwMCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgIHRoaXMuYmxpbmRyZXN1bHQ9dGhpcy5ibGluZGxhYmVsLnN0cmluZztcbiAgICAgICAgLy8gICB0aGlzLmJsaW5kVmFsdWUuc2V0KGJsaW5kcmVzdWx0KTtcbiAgICB9LFxuICAgIC8v5Y+C5LiO5Lq65pWwU2xpZGVyXG4gICAgUGVvcGxlTnVtYmVyU2xpZGVyOiBmdW5jdGlvbiBQZW9wbGVOdW1iZXJTbGlkZXIoKSB7fSxcbiAgICAvL+eJjOWxgOaXtumVv1xuICAgIFRpbWVTbGlkZXI6IGZ1bmN0aW9uIFRpbWVTbGlkZXIoKSB7fVxuXG59KTtcbi8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2I4OTVSTTlONVBPWlY4SGFyazQySEcnLCAnUGFydHlWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5L1BhcnR5Vmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUGFydHlWaWV3O1xudmFyIHBhcnR5TGF5ZXI7XG5QYXJ0eVZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqXG4gICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcIm15VHVybkxheWVyXCIpO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIlRlc3RQcm9mYWIvcGFydHlMYXllclwiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhlcnIpO1xuICAgICAgICAgICAgcGFydHlMYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHBhcnR5TGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIHBhcnR5TGF5ZXIucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBQYXJ0eVZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc3YWIxNnZCRDlCSUhhTDJ1SDd1VWZELycsICdQYXJ0eV9DcmVhdGVQYXJ0eUNvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMWNyZWF0ZVBhcnR5LzFwYXJ0eV9DcmVhdGVQYXJ0eS9QYXJ0eV9DcmVhdGVQYXJ0eUNvbnRyb2xsZXIuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIHBhcnR5X0NyZWF0ZVBhcnR5Q29udHJvbGxlcjtcbnBhcnR5X0NyZWF0ZVBhcnR5Q29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuatpOexu+aYr+WvueWwhuadpeWPr+iDveWKoOi/m+adpeeahOWFtuS7luWIm+W7uuaWueazleWtmOWcqOeahFxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcblxuICAgICAgICBjYy5sb2coXCJwYXJ0eV9DcmVhdGVQYXJ0eUNvbnRyb2xsZXJcIik7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhcnR5X0NyZWF0ZVBhcnR5Q29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2E5NjUxVjBLTHBOellkbDVlT2JzdFFlJywgJ1BhcnR5X0NyZWF0ZVBhcnR5TG9hZGluZ0NvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMWNyZWF0ZVBhcnR5LzNwYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmcvUGFydHlfQ3JlYXRlUGFydHlMb2FkaW5nQ29udHJvbGxlci5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcGFydHlfQ3JlYXRlUGFydHlMb2FkaW5nQ29udHJvbGxlcjtcbnBhcnR5X0NyZWF0ZVBhcnR5TG9hZGluZ0NvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7fSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge30sXG4gICAgLy9UT0RP77ya562J5b6F5pyN5Yqh5Zmo5Zue5aSNcGFydHnliJvlu7rmiJDlip8g54S25ZCO5YaN6YCJ5oupIOi/m+WFpeagh+WHhuWxgOeahOetieW+hSDov5jmmK/ov5vlhaXmr5TotZvor6bmg4XpobVcblxuICAgIG9uRk1lc3NhZ2Vfc2hvd1BhcnR5VHlwZVJlcTogZnVuY3Rpb24gb25GTWVzc2FnZV9zaG93UGFydHlUeXBlUmVxKG1zZykge1xuICAgICAgICAvL+WIpOaWrea2iOaBr+e7k+aenFxuXG4gICAgICAgIGlmIChtc2cuYXJncy50eXBlID09IFwiU1REXCIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIm9uRk1lc3NhZ2Vfc2hvd1BhcnR5VHlwZVJlcSA9IFNURFwiKTtcbiAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwicm9vbVdhaXRpbmdcIik7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnLmFyZ3MudHlwZSA9PSBcIk1UVFwiKSB7XG4gICAgICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcImNoYWNrU3BvcnRzUGFydHlpbmZvXCIpO1xuICAgICAgICB9XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmdDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZjYwOWRzYXNZVkN4SlJEWnZjVDhoY1AnLCAnUGFydHlfQ3JlYXRlUGFydHlMb2FkaW5nVmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS8xY3JlYXRlUGFydHkvM3BhcnR5X0NyZWF0ZVBhcnR5TG9hZGluZy9QYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmdWaWV3LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBwYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmdWaWV3O1xudmFyIHBhcnR5Q3JlYXRlUGFydHlMb2FkaW5nTGF5ZXI7XG5wYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmdWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJteVR1cm5MYXllclwiKTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJUZXN0UHJvZmFiL3BhcnR5Q3JlYXRlUGFydHlMb2FkaW5nTGF5ZXJcIiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5sb2coZXJyKTtcbiAgICAgICAgICAgIHBhcnR5Q3JlYXRlUGFydHlMb2FkaW5nTGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChwYXJ0eUNyZWF0ZVBhcnR5TG9hZGluZ0xheWVyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBwYXJ0eUNyZWF0ZVBhcnR5TG9hZGluZ0xheWVyLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gcGFydHlfQ3JlYXRlUGFydHlMb2FkaW5nVmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzJjOWFlTmR1Z0JLN2JRVENJQU9IWUhoJywgJ1BhcnR5X0NyZWF0ZVBhcnR5U2V0Q29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS8xY3JlYXRlUGFydHkvMnBhcnR5X0NyZWF0ZVBhcnR5U2V0L1BhcnR5X0NyZWF0ZVBhcnR5U2V0Q29udHJvbGxlci5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcGFydHlfQ3JlYXRlU2V0Q29udHJvbGxlcjtcbnBhcnR5X0NyZWF0ZVNldENvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqXG4gICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7fSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge30sXG4gICAgLy/liqDlhaXniYzlsYBcbiAgICBvbkZNZXNzYWdlX29uSm9pblBhcnR5Q2xpY2s6IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfb25Kb2luUGFydHlDbGljayhtc2cpIHtcbiAgICAgICAgLy/liKTmlq3mlbDlrZfovpPlhaXnmoTkvY3mlbDmmK/lkKbmraPnoa5cblxuICAgICAgICAvL+WmguaenOS4jeato+ehruWPkSDkvY3mlbDkuI3mraPnoa7mtojmga9cblxuICAgICAgICAvL+WmguaenOato+ehrmdvdG8gam9pblBhcnR5XG4gICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibG9hZGluZ1BhcnR5XCIpO1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICB9LFxuICAgIC8v5Yib5bu654mM5bGAXG4gICAgb25GTWVzc2FnZV9vbkNyZWF0UGFydHlDbGljazogZnVuY3Rpb24gb25GTWVzc2FnZV9vbkNyZWF0UGFydHlDbGljayhtc2cpIHtcbiAgICAgICAgLy9cbiAgICAgICAgY2MubG9nKFwiUGFydHlDb250cm9sbGVyIC0tLSBvbkZNZXNzYWdlX2NyZWF0ZVBhcnR5QnV0dG9uQ2xpY2tcIik7XG5cbiAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJjcmVhdGVQYXJ0eVNldFwiKTtcbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFydHlfQ3JlYXRlU2V0Q29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzkwODkxaGFjYTlOWG8rZi8vdEY3RFE0JywgJ1BhcnR5X0NyZWF0ZVBhcnR5U2V0VmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS8xY3JlYXRlUGFydHkvMnBhcnR5X0NyZWF0ZVBhcnR5U2V0L1BhcnR5X0NyZWF0ZVBhcnR5U2V0Vmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcGFydHlDcmVhdGVTZXRMYXllcjtcbnZhciBwYXJ0eV9DcmVhdGVTZXRWaWV3O1xucGFydHlfQ3JlYXRlU2V0VmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIC8qXG4gICAgICpcbiAgICAgKiAqL1xuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgY2MubG9nKFwicGFydHlDcmVhdGVTZXRMYXllcjJcIik7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiVGVzdFByb2ZhYi9jcmVhdGVwYXJ0eXNldExheWVyXCIsIGZ1bmN0aW9uIChlcnIsIHByZWZhYikge1xuICAgICAgICAgICAgY2MubG9nKGVycik7XG4gICAgICAgICAgICBjYy5sb2coXCJteVR1cm5MYXllcjJcIik7XG5cbiAgICAgICAgICAgIHBhcnR5Q3JlYXRlU2V0TGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChwYXJ0eUNyZWF0ZVNldExheWVyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJteVR1cm5MYXllclwiKTtcblxuICAgICAgICBwYXJ0eUNyZWF0ZVNldExheWVyLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gcGFydHlfQ3JlYXRlU2V0VmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzQ1NGYwcWdHNWhDMG8zT2ZRV29xbVRUJywgJ1BhcnR5X0NyZWF0ZVBhcnR5VmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS8xY3JlYXRlUGFydHkvMXBhcnR5X0NyZWF0ZVBhcnR5L1BhcnR5X0NyZWF0ZVBhcnR5Vmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcGFydHlfQ3JlYXRlUGFydHlWaWV3O1xucGFydHlfQ3JlYXRlUGFydHlWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJteVR1cm5MYXllclwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gcGFydHlfQ3JlYXRlUGFydHlWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2ZlMjJjb2YxNUtDNTdZYXpnSXJTUXgnLCAnUGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm9Db250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzJqb2luUGFydHkvMnBhcnR5X2NoYWNrU3BvcnRzUGFydHlpbmZvL1BhcnR5X2NoYWNrU3BvcnRzUGFydHlpbmZvQ29udHJvbGxlci5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIHBhcnR5X2NoYWNrU3BvcnRzUGFydHlpbmZvQ29udHJvbGxlcjtcbnBhcnR5X2NoYWNrU3BvcnRzUGFydHlpbmZvQ29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcblxuICAgICAgICBjYy5sb2coXCJwYXJ0eV9jaGFja1Nwb3J0c1BhcnR5aW5mb0NvbnRyb2xsZXIgb25FbnRlck5vZGVcIik7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJwYXJ0eV9jaGFja1Nwb3J0c1BhcnR5aW5mb0NvbnRyb2xsZXIgb25MZWF2ZU5vZGVcIik7XG4gICAgfSxcbiAgICBvbkZNZXNzYWdlX01UVFNOR2NsaWNrc2lnblVwQnV0dG9uOiBmdW5jdGlvbiBvbkZNZXNzYWdlX01UVFNOR2NsaWNrc2lnblVwQnV0dG9uKG1zZykge1xuICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcImxvYWRpbmdHYW1lXCIpO1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXJ0eV9jaGFja1Nwb3J0c1BhcnR5aW5mb0NvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyMWVlYnE3VTdSTU1yWVZvd3lGV2t0RycsICdQYXJ0eV9jaGFja1Nwb3J0c1BhcnR5aW5mb1ZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMmpvaW5QYXJ0eS8ycGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm8vUGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm9WaWV3LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBwYXJ0eV9jaGFja1Nwb3J0c1BhcnR5aW5mb1ZpZXc7XG52YXIgcGxheWVySGVhZExheWVyO1xucGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm9WaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9vee7k+eul+WcuuaZr1xuICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1UVFNOR1dhaXRpbmdcIik7XG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiVGVzdFByb2ZhYi9NVFRTTkdXYWl0aW5nXCIsIGZ1bmN0aW9uIChlcnIsIHByZWZhYikge1xuICAgICAgICAgICAgY2MubG9nKGVycik7XG4gICAgICAgICAgICBwbGF5ZXJIZWFkTGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChwbGF5ZXJIZWFkTGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicm9vbVNjZW5lXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXJ0eV9jaGFja1Nwb3J0c1BhcnR5aW5mb1ZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4ZWVkOEhJSGFOSzVvTDhaMjlWYjZaUScsICdQYXJ0eV9qb2luUGFydHlDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzJqb2luUGFydHkvMXBhcnR5X2pvaW5QYXJ0eS9QYXJ0eV9qb2luUGFydHlDb250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBwYXJ0eV9qb2luUGFydHlDb250cm9sbGVyO1xucGFydHlfam9pblBhcnR5Q29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcblxuICAgICAgICAvLyBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcImxvYWRpbmdQYXJ0eVwiKTtcblxuICAgICAgICBjYy5sb2coXCJyb29tTG9hZGluZ1NjZW5lXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXJ0eV9qb2luUGFydHlDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOTQxN2YxbVVPTkIvNXpJRkQxRVloWGYnLCAnUGFydHlfam9pblBhcnR5VmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS8yam9pblBhcnR5LzFwYXJ0eV9qb2luUGFydHkvUGFydHlfam9pblBhcnR5Vmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcGFydHlfam9pblBhcnR5VmlldztcbnZhciBwYXJ0eUpvaW5QYXJ0eUxheWVyO1xucGFydHlfam9pblBhcnR5VmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIC8qXG4gICAgICpcbiAgICAgKiAqL1xuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgY2MubG9nKFwibXlUdXJuTGF5ZXJcIik7XG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKFwiVGVzdFByb2ZhYi9wYXJ0eUpvaW5QYXJ0eUxheWVyXCIsIGZ1bmN0aW9uIChlcnIsIHByZWZhYikge1xuICAgICAgICAvLyAgICAgY2MubG9nKGVycik7XG4gICAgICAgIC8vICAgICBwYXJ0eUpvaW5QYXJ0eUxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQocGFydHlKb2luUGFydHlMYXllcik7XG4gICAgICAgIC8vIH0pO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgcGFydHlKb2luUGFydHlMYXllci5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xuICAgIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhcnR5X2pvaW5QYXJ0eVZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczM2RkN0EydWZWRUxvQkVmNmgwQ1VUWCcsICdQYXJ0eV9sb2FkaW5nUGFydHlDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzJqb2luUGFydHkvMXBhcnR5X2xvYWRpbmdQYXJ0eS9QYXJ0eV9sb2FkaW5nUGFydHlDb250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBwYXJ0eV9sb2FkaW5nUGFydHlDb250cm9sbGVyO1xucGFydHlfbG9hZGluZ1BhcnR5Q29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcblxuICAgICAgICBjYy5sb2coXCJyb29tTG9hZGluZ1NjZW5lXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9LFxuICAgIG9uRk1lc3NhZ2Vfam9pblBhcnR5SW5mb1JlcTogZnVuY3Rpb24gb25GTWVzc2FnZV9qb2luUGFydHlJbmZvUmVxKG1zZykge1xuICAgICAgICAvL1xuXG4gICAgICAgIGlmIChtc2cuYXJncy50eXBlID09IFwiU1REXCIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIm9uRk1lc3NhZ2Vfc2hvd1BhcnR5VHlwZVJlcSA9IFNURFwiKTtcbiAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwicm9vbVdhaXRpbmdcIik7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnLmFyZ3MudHlwZSA9PSBcIk1UVFwiKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJvbkZNZXNzYWdlX3Nob3dQYXJ0eVR5cGVSZXEgPSBNVFRcIik7XG5cbiAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwiY2hhY2tTcG9ydHNQYXJ0eWluZm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4gICAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhcnR5X2xvYWRpbmdQYXJ0eUNvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdmOWM3YWRUZlpwQ2RxcmhWenNGb2dicCcsICdQYXJ0eV9sb2FkaW5nUGFydHlWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzJqb2luUGFydHkvMXBhcnR5X2xvYWRpbmdQYXJ0eS9QYXJ0eV9sb2FkaW5nUGFydHlWaWV3LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBwYXJ0eV9sb2FkaW5nUGFydHlWaWV3O1xudmFyIHBhcnR5TG9hZGluZ1BhcnR5TGF5ZXI7XG5wYXJ0eV9sb2FkaW5nUGFydHlWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJteVR1cm5MYXllcjExMTFcIik7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiVGVzdFByb2ZhYi9wYXJ0eUxvYWRpbmdQYXJ0eUxheWVyXCIsIGZ1bmN0aW9uIChlcnIsIHByZWZhYikge1xuICAgICAgICAgICAgY2MubG9nKGVycik7XG4gICAgICAgICAgICBwYXJ0eUxvYWRpbmdQYXJ0eUxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQocGFydHlMb2FkaW5nUGFydHlMYXllcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgcGFydHlMb2FkaW5nUGFydHlMYXllci5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xuICAgIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhcnR5X2xvYWRpbmdQYXJ0eVZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcwZjAzNms5NktSRjc0aUd1dFZEQkE3bScsICdQcm9qZWN0Jyk7XG4vLyBzY3JpcHRzL1Byb2plY3QuanNcblxuLypcbiAqIOW3peeoi+WumuS5iVxuICogQEF1dGhvcjogdGhvci5saXUgXG4gKiBARGF0ZTogMjAxNi0xMi0wMiAxMDozNTowNyBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiB0aG9yLmxpdVxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0xMi0wOCAxNTowMDozNFxuICovXG52YXIgUHJvamVjdCA9IHtcbiAgICBGV1M6IHt9LFxuICAgIFA5OiB7XG4gICAgICAgIENvbmZpZzoge30sXG4gICAgICAgIERBVEE6IHt9XG5cbiAgICB9LFxuICAgIEdhbWVNb2RlbDogcmVxdWlyZShcIkZXU19NT0RFTF9EQVRBXCIpLkZHYW1lTW9kZWxcbn07XG5cbi8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIE1vZHVsZXNcblxuUHJvamVjdC5GV1MuTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5Qcm9qZWN0LkZXUy5NT0RFTCA9IHJlcXVpcmUoXCJGV1NfTU9ERUxcIik7XG5Qcm9qZWN0LkZXUy5EQVRBID0gcmVxdWlyZShcIkZXU19NT0RFTF9EQVRBXCIpO1xuUHJvamVjdC5GV1MuTVNHID0gcmVxdWlyZShcIkZXU19NU0dcIik7XG5Qcm9qZWN0LkZXUy5MQU5HID0gcmVxdWlyZShcIkZMYW5ndWFnZVwiKTtcblxuUHJvamVjdC5QOS5EQVRBLkdBTUUgPSByZXF1aXJlKFwiUDlHYW1lRGF0YVwiKTtcblByb2plY3QuUDkuREFUQS5ST09NID0gcmVxdWlyZShcIlA5Um9vbURhdGFcIik7XG5cblByb2plY3QuRldTLkRBVEEuRlVzZXIuZmFjdG9yeSA9IG5ldyBQcm9qZWN0LlA5LkRBVEEuR0FNRS5QOVVzZXJGYWN0b3J5KCk7XG5Qcm9qZWN0LkZXUy5EQVRBLkZQbGF5ZXIuZmFjdG9yeSA9IG5ldyBQcm9qZWN0LlA5LkRBVEEuR0FNRS5QOVBsYXllckZhY3RvcnkoKTtcblByb2plY3QuRldTLkRBVEEuRkdhbWUuZmFjdG9yeSA9IG5ldyBQcm9qZWN0LlA5LkRBVEEuR0FNRS5QOUdhbWVGYWN0b3J5KCk7XG5Qcm9qZWN0LkZXUy5EQVRBLkZHYW1lVGFibGUuZmFjdG9yeSA9IG5ldyBQcm9qZWN0LlA5LkRBVEEuR0FNRS5QOUdhbWVUYWJsZUZhY3RvcnkoKTtcblByb2plY3QuRldTLkRBVEEuRkdhbWVSb3VuZC5mYWN0b3J5ID0gbmV3IFByb2plY3QuUDkuREFUQS5HQU1FLlA5R2FtZVJvdW5kRmFjdG9yeSgpO1xuXG4vLyAvLyDmtYvor5U6IOaJgOacieeahOaJkeWFi+eJjFxuLy8gZm9yICh2YXIgYyA9IDA7IGMgPD0gMzsgYysrKSB7XG4vLyAgICAgZm9yICh2YXIgYSA9IDA7IGEgPD0gMTI7IGErKykge1xuLy8gICAgICAgICB2YXIgY2FyZCA9IFByb2plY3QuUDkuREFUQS5HQU1FLlBLQ2FyZC5jcmVhdGVCeUNvbG9yQW1vdW50KGMsIGEpO1xuLy8gICAgICAgICBQcm9qZWN0LkZXUy5NVkMuRkxvZy5kYXRhKFwidGVzdFwiLCBcImNhcmQgPSB7MH0sIGlkID0gezF9LCBjb2xvciA9IHsyfSwgYW1vdW50ID0gezN9LCBvcmRlciA9IHs0fVwiLCBjYXJkLCBjYXJkLmlkLCBjYXJkLmNvbG9yLCBjYXJkLmFtb3VudCwgY2FyZC5vcmRlcik7XG4vLyAgICAgfVxuLy8gfVxuXG52YXIgRlNvY2tldENTTW9kZWwgPSByZXF1aXJlKFwiRlNvY2tldENTTW9kZWxcIik7XG52YXIgRlNvY2tldFJTTW9kZWwgPSByZXF1aXJlKFwiRlNvY2tldFJTTW9kZWxcIik7XG52YXIgRldlYkNvbm5lY3RDb250cm9sbGVyID0gcmVxdWlyZShcIkZXZWJDb25uZWN0Q29udHJvbGxlclwiKTtcblxudmFyIFA5U29ja2V0R1NNb2RlbCA9IHJlcXVpcmUoXCJQOVNvY2tldEdTTW9kZWxcIik7XG52YXIgUDlUZXN0Q3JlYXRvck1vZGVsID0gcmVxdWlyZShcIlA5VGVzdENyZWF0b3JNb2RlbFwiKTtcblxudmFyIFA5Q3JlYXRlU2V0dGluZ3MgPSByZXF1aXJlKFwiUDlDcmVhdGVTZXR0aW5nc1wiKTtcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgbG9hZGluZ1xudmFyIGxvYWRpbmdDb250cm9sbGVyID0gcmVxdWlyZShcIkxvYWRpbmdDb250cm9sbGVyXCIpO1xudmFyIGxvYWRpbmdWaWV3ID0gcmVxdWlyZShcIkxvYWRpbmdWaWV3XCIpO1xuXG4vL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCBsb2dpblxudmFyIGxvZ2luQ29udHJvbGxlciA9IHJlcXVpcmUoXCJMb2dpbkNvbnRyb2xsZXJcIik7XG52YXIgbG9naW5WaWV3ID0gcmVxdWlyZShcIkxvZ2luVmlld1wiKTtcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgbWFpblxuXG52YXIgbWFpbkNvbnRyb2xsZXIgPSByZXF1aXJlKFwiTWFpbkNvbnRyb2xsZXJcIik7XG52YXIgbWFpblZpZXcgPSByZXF1aXJlKFwiTWFpblZpZXdcIik7XG5cbi8vIC8v4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIHBhcnR5XG4vL1xudmFyIHBhcnR5VmlldyA9IHJlcXVpcmUoXCJQYXJ0eVZpZXdcIik7XG52YXIgcGFydHlDb250cm9sbGVyID0gcmVxdWlyZShcIlBhcnR5Q29udHJvbGxlclwiKTtcbi8v5Yib5bu654mM5bGAXG4vLyBjb25zdCBwYXJ0eV9DcmVhdGVQYXJ0eVZpZXcgPSByZXF1aXJlKFwiUGFydHlfQ3JlYXRlUGFydHlWaWV3XCIpO1xuLy8gY29uc3QgcGFydHlfQ3JlYXRlUGFydHlDb250cm9sbGVyID0gcmVxdWlyZShcIlBhcnR5X0NyZWF0ZVBhcnR5Q29udHJvbGxlclwiKTtcbnZhciBwYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmdWaWV3ID0gcmVxdWlyZShcIlBhcnR5X0NyZWF0ZVBhcnR5TG9hZGluZ1ZpZXdcIik7XG52YXIgcGFydHlfQ3JlYXRlUGFydHlMb2FkaW5nQ29udHJvbGxlciA9IHJlcXVpcmUoXCJQYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmdDb250cm9sbGVyXCIpO1xudmFyIHBhcnR5X0NyZWF0ZVBhcnR5U2V0VmlldyA9IHJlcXVpcmUoXCJQYXJ0eV9DcmVhdGVQYXJ0eVNldFZpZXdcIik7XG52YXIgcGFydHlfQ3JlYXRlUGFydHlTZXRDb250cm9sbGVyID0gcmVxdWlyZShcIlBhcnR5X0NyZWF0ZVBhcnR5U2V0Q29udHJvbGxlclwiKTtcbi8vIC8v5Yqg5YWl54mM5bGAXG52YXIgcGFydHlfSm9pblBhcnR5VmlldyA9IHJlcXVpcmUoXCJQYXJ0eV9qb2luUGFydHlWaWV3XCIpO1xudmFyIHBhcnR5X0pvaW5QYXJ0eUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiUGFydHlfam9pblBhcnR5Q29udHJvbGxlclwiKTtcbnZhciBwYXJ0eV9Kb2luUGFydHlMb2FkaW5nVmlldyA9IHJlcXVpcmUoXCJQYXJ0eV9sb2FkaW5nUGFydHlWaWV3XCIpO1xudmFyIHBhcnR5X0pvaW5QYXJ0eUxvYWRpbmdDb250cm9sbGVyID0gcmVxdWlyZShcIlBhcnR5X2xvYWRpbmdQYXJ0eUNvbnRyb2xsZXJcIik7XG52YXIgcGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm9WaWV3ID0gcmVxdWlyZShcIlBhcnR5X2NoYWNrU3BvcnRzUGFydHlpbmZvVmlld1wiKTtcbnZhciBwYXJ0eV9jaGFja1Nwb3J0c1BhcnR5aW5mb0NvbnRyb2xsZXIgPSByZXF1aXJlKFwiUGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm9Db250cm9sbGVyXCIpO1xuXG4vL+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCByb29tXG5cbnZhciByb29tVmlldyA9IHJlcXVpcmUoXCJyb29tVmlld1wiKTtcbnZhciByb29tQ29udHJvbGxlciA9IHJlcXVpcmUoXCJyb29tQ29udHJvbGxlclwiKTtcblxudmFyIHJvb21fbG9hZGluZ0NvbnRyb2xsZXIgPSByZXF1aXJlKFwicm9vbV9sb2FkaW5nQ29udHJvbGxlclwiKTtcbnZhciByb29tX2xvYWRpbmdWaWV3ID0gcmVxdWlyZShcInJvb21fbG9hZGluZ1ZpZXdcIik7XG5cbnZhciByb29tX3N0YXJ0R2FtZUNvbnRyb2xsZXIgPSByZXF1aXJlKFwicm9vbV9zdGFydEdhbWVDb250cm9sbGVyXCIpO1xudmFyIHJvb21fc3RhcnRHYW1lVmlldyA9IHJlcXVpcmUoXCJyb29tX3N0YXJ0R2FtZVZpZXdcIik7XG5cbnZhciByb29tX3Jvb21XYWl0aW5nQ29udHJvbGxlciA9IHJlcXVpcmUoXCJSb29tX3Jvb21XYWl0aW5nQ29udHJvbGxlclwiKTtcbnZhciByb29tX3Jvb21XYWl0aW5nVmlldyA9IHJlcXVpcmUoXCJSb29tX3Jvb21XYWl0aW5nVmlld1wiKTtcblxudmFyIHJvb21fVmlsbGFnZUNvbnRyb2xsZXIgPSByZXF1aXJlKFwicm9vbV9WaWxsYWdlQ29ucm9sbGVyXCIpO1xudmFyIHJvb21fVmlsbGFnZVZpZXcgPSByZXF1aXJlKFwicm9vbV9WaWxsYWdlVmlld1wiKTtcblxudmFyIHJvb21faGFuZFNpZ25Db250cm9sbGVyID0gcmVxdWlyZShcInJvb21faGFuZFNpZ25Db250cm9sbGVyXCIpO1xudmFyIHJvb21faGFuZFNpZ25WaWV3ID0gcmVxdWlyZShcInJvb21faGFuZFNpZ25WaWV3XCIpO1xuXG52YXIgcm9vbV9jb21tdW5pdHlDYXJkQ29udHJvbGxlciA9IHJlcXVpcmUoXCJyb29tX2NvbW11bml0eUNhcmRDb250cm9sbGVyXCIpO1xudmFyIHJvb21fY29tbXVuaXR5Q2FyZFZpZXcgPSByZXF1aXJlKFwicm9vbV9jb21tdW5pdHlDYXJkVmlld1wiKTtcblxudmFyIHJvb21fbXlUdXJuQ29udHJvbGxlciA9IHJlcXVpcmUoXCJyb29tX215VHVybkNvbnRyb2xsZXJcIik7XG52YXIgcm9vbV9teVR1cm5WaWV3ID0gcmVxdWlyZShcInJvb21fbXlUdXJuVmlld1wiKTtcblxudmFyIHJvb21fb3RoZXJzVHVybkNvbnRyb2xsZXIgPSByZXF1aXJlKFwicm9vbV9vdGhlcnNUdXJuQ29udHJvbGxlclwiKTtcbnZhciByb29tX290aGVyc1R1cm5WaWV3ID0gcmVxdWlyZShcInJvb21fb3RoZXJzVHVyblZpZXdcIik7XG5cbnZhciByb29tX3NhZmVzdENvbnRyb2xsZXIgPSByZXF1aXJlKFwicm9vbV9zYWZlc3RDb250cm9sbGVyXCIpO1xudmFyIHJvb21fc2FmZXN0VmlldyA9IHJlcXVpcmUoXCJyb29tX3NhZmVzdFZpZXdcIik7XG5cbnZhciByb29tX3N0YXRlbWVudHNDb250cm9sbGVyID0gcmVxdWlyZShcInJvb21fc3RhdGVtZW50c0NvbnRyb2xsZXJcIik7XG52YXIgcm9vbV9zdGF0ZW1lbnRzVmlldyA9IHJlcXVpcmUoXCJyb29tX3N0YXRlbWVudHNWaWV3XCIpO1xuXG52YXIgcm9vbV9wYXJ0eVJvb21PdmVyQ29udHJvbGxlciA9IHJlcXVpcmUoXCJyb29tX3BhcnR5Um9vbU92ZXJDb250cm9sbGVyXCIpO1xudmFyIHJvb21fcGFydHlSb29tT3ZlclZpZXcgPSByZXF1aXJlKFwicm9vbV9wYXJ0eVJvb21PdmVyVmlld1wiKTtcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgbXlcbnZhciBteVZpZXcgPSByZXF1aXJlKFwibXlWaWV3XCIpO1xudmFyIG15Q29udHJvbGxlciA9IHJlcXVpcmUoXCJteUNvbnRyb2xsZXJcIik7XG4vL+mSseWMhVxudmFyIHdhbGxldFZpZXcgPSByZXF1aXJlKFwid2FsbGV0Vmlld1wiKTtcbnZhciB3YWxsZXRDb250cm9sbGVyID0gcmVxdWlyZShcIndhbGxldENvbnRyb2xsZXJcIik7XG4vL+WVhuWfjlxudmFyIG1hbGxWaWV3ID0gcmVxdWlyZShcIm1hbGxWaWV3XCIpO1xudmFyIG1hbGxDb250cm9sbGVyID0gcmVxdWlyZShcIm1hbGxDb250cm9sbGVyXCIpO1xuLy8gLy/miJHnmoTmiJjpmJ9cbi8vIGNvbnN0IG15dGVhbVZpZXcgPSByZXF1aXJlKFwibXl0ZWFtVmlld1wiKTtcbi8vIGNvbnN0IG15dGVhbUNvbnRyb2xsZXIgPSByZXF1aXJlKFwibXl0ZWFtQ29udHJvbGxlclwiKTtcbi8vIC8v6IGU57O75Lq6XG4vLyBjb25zdCBjb250YWN0c1ZpZXcgPSByZXF1aXJlKFwiY29udGFjdHNWaWV3XCIpO1xuLy8gY29uc3QgY29udGFjdHNDb250cm9sbGVyID0gcmVxdWlyZShcImNvbnRhY3RzQ29udHJvbGxlclwiKTtcbi8vIC8v5raI5oGvXG4vLyBjb25zdCBtZXNzYWdlVmlldyA9IHJlcXVpcmUoXCJtZXNzYWdlVmlld1wiKTtcbi8vIGNvbnN0IG1lc3NhZ2VDb250cm9sbGVyID0gcmVxdWlyZShcIm1lc3NhZ2VDb250cm9sbGVyXCIpO1xuLy8gLy/miYDojrfmiJDlsLFcbi8vIGNvbnN0IGFjaGlldmVtZW50VmlldyA9IHJlcXVpcmUoXCJhY2hpZXZlbWVudFZpZXdcIik7XG4vLyBjb25zdCBhY2hpZXZlbWVudENvbnRyb2xsZXIgPSByZXF1aXJlKFwiYWNoaWV2ZW1lbnRDb250cm9sbGVyXCIpO1xuLy8gLy/niYzlsYDnu5/orqFcbi8vIGNvbnN0IGdhbWVzdGF0aXN0aWNzVmlldyA9IHJlcXVpcmUoXCJnYW1lc3RhdGlzdGljc1ZpZXdcIik7XG4vLyBjb25zdCBnYW1lc3RhdGlzdGljc0NvbnRyb2xsZXIgPSByZXF1aXJlKFwiZ2FtZXN0YXRpc3RpY3NDb250cm9sbGVyXCIpO1xuLy8gLy/miJHnmoTniYzosLFcbi8vIGNvbnN0IG15YnJhbmRWaWV3ID0gcmVxdWlyZShcIm15YnJhbmRWaWV3XCIpO1xuLy8gY29uc3QgbXlicmFuZENvbnRyb2xsZXIgPSByZXF1aXJlKFwibXlicmFuZENvbnRyb2xsZXJcIik7XG4vLyAvL+mCgOivt+eggVxuLy8gY29uc3QgaW52aXRhdGlvbmNvZGVWaWV3ID0gcmVxdWlyZShcImludml0YXRpb25jb2RlVmlld1wiKTtcbi8vIGNvbnN0IGludml0YXRpb25jb2RlQ29udHJvbGxlciA9IHJlcXVpcmUoXCJpbnZpdGF0aW9uY29kZUNvbnRyb2xsZXJcIik7XG4vLyAvL+ezu+e7n+iuvue9rlxuLy8gY29uc3Qgc2V0dGluZ1ZpZXcgPSByZXF1aXJlKFwic2V0dGluZ1ZpZXdcIik7XG4vLyBjb25zdCBzZXR0aW5nQ29udHJvbGxlciA9IHJlcXVpcmUoXCJzZXR0aW5nQ29udHJvbGxlclwiKTtcbi8vIC8v6KeE5YiZ6K+05piOXG4vLyBjb25zdCBydWxlVmlldyA9IHJlcXVpcmUoXCJydWxlVmlld1wiKTtcbi8vIGNvbnN0IHJ1bGVDb250cm9sbGVyID0gcmVxdWlyZShcInJ1bGVDb250cm9sbGVyXCIpO1xuLy8gLy/nvJbovpFcbi8vIGNvbnN0IGVkaXRWaWV3ID0gcmVxdWlyZShcImVkaXRWaWV3XCIpO1xuLy8gY29uc3QgZWRpdENvbnRyb2xsZXIgPSByZXF1aXJlKFwiZWRpdENvbnRyb2xsZXJcIik7XG4vLyAvL+Wkp+W4iOetiee6p1xuLy8gY29uc3QgbWFzdGVybGV2ZWxWaWV3ID0gcmVxdWlyZShcIm1hc3RlcmxldmVsVmlld1wiKTtcbi8vIGNvbnN0IG1hc3RlcmxldmVsQ29udHJvbGxlciA9IHJlcXVpcmUoXCJtYXN0ZXJsZXZlbENvbnRyb2xsZXJcIik7XG4vLyAvL+S8muexjVxuLy8gY29uc3QgbWVtYmVyc2hpcFZpZXcgPSByZXF1aXJlKFwibWVtYmVyc2hpcFZpZXdcIik7XG4vLyBjb25zdCBtZW1iZXJzaGlwQ29udHJvbGxlciA9IHJlcXVpcmUoXCJtZW1iZXJzaGlwQ29udHJvbGxlclwiKTtcblxuLy8gY29uc3QgTVRUU05HV2FpdGluZ1ZpZXcgPSByZXF1aXJlKFwiTVRUU05HV2FpdGluZ1ZpZXdcIik7XG4vLyBjb25zdCBNVFRTTkdXYWl0aW5nQ29udHJvbGxlciA9IHJlcXVpcmUoXCJNVFRTTkdXYWl0aW5nQ29udHJvbGxlclwiKTtcblxuLy8gY29uc3QgU2V0dGxlbWVudFZpZXcgPSByZXF1aXJlKFwiU2V0dGxlbWVudFZpZXdcIik7XG4vLyBjb25zdCBTZXR0bGVtZW50Q29udHJvbGxlciA9IHJlcXVpcmUoXCJTZXR0bGVtZW50Q29udHJvbGxlclwiKTtcblxuLy/ilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgQ29udGV4dHNcblxuUHJvamVjdC5Db250ZXh0cyA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkNvbnRleHRzXCIsXG4gICAgc3RhdGljczoge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgaWYgKFByb2plY3QuQ29udGV4dHMuaW5pdGVkKSByZXR1cm47XG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLmluaXRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vVE9ETzog5Yqg6L29anNDcHDpgJrpgZNcblxuICAgICAgICAgICAgLy/moLlcbiAgICAgICAgICAgIFByb2plY3QuQ29udGV4dHMucm9vdCA9IG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJyb290XCIpO1xuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5yb290LnNldE1vZHVsZXMobmV3IEZTb2NrZXRDU01vZGVsKCksIG5ldyBGU29ja2V0UlNNb2RlbCgpLCBuZXcgUDlTb2NrZXRHU01vZGVsKCksIG5ldyBQOVRlc3RDcmVhdG9yTW9kZWwoKSwgLy/lnKhjcmVhdG9y5LiL5rWL6K+V5pe255qE5qih5ouf5raI5oGv5Lqk5LqSXG4gICAgICAgICAgICBuZXcgUDlDcmVhdGVTZXR0aW5ncygpLCBuZXcgRldlYkNvbm5lY3RDb250cm9sbGVyKCkpO1xuXG4gICAgICAgICAgICAvL1RPRE86IOaguSA+IOWKoOi9vVxuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5sb2FkaW5nID0gUHJvamVjdC5Db250ZXh0cy5yb290LmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwibG9hZGluZ1wiKS5zZXRNb2R1bGVzKG5ldyBsb2FkaW5nQ29udHJvbGxlcigpLCBuZXcgbG9hZGluZ1ZpZXcoKSkpO1xuXG4gICAgICAgICAgICAvL1RPRE86IOaguSA+IOeZu+W9lVxuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5sb2dpbiA9IFByb2plY3QuQ29udGV4dHMucm9vdC5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcImxvZ2luXCIpLnNldE1vZHVsZXMoXG4gICAgICAgICAgICAvL+eZu+W9lXZpZXcg5Yib5bu655m75b2V5rOo5YaM6aG1IOa3u+WKoCAgICAgICAgb25FbnRlck5vZGUg6L+b5YWl6IqC54K5LT5sb2FkU2NlbmUgbG9hZOaOp+S7tuetiSAgb25MZWF2ZU5vZGUg56a75byA6IqC54K555qE5pe25YCZ5Lya6LCD55SoXG4gICAgICAgICAgICAvL+eZu+W9lWNvbnRyb2xsZXIg6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgIG5ldyBsb2dpbkNvbnRyb2xsZXIoKSwgbmV3IGxvZ2luVmlldygpKSk7XG5cbiAgICAgICAgICAgIC8vVE9ETzog5qC5ID4g5Li755WM6Z2iXG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLm1haW4gPSBQcm9qZWN0LkNvbnRleHRzLnJvb3QuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJtYWluXCIpLnNldE1vZHVsZXMoXG5cbiAgICAgICAgICAgIC8v5Li755WM6Z2idmlldyAgICAgICBvbkVudGVyTm9kZSDov5vlhaXoioLngrktPmxvYWRTY2VuZSBsb2Fk5o6n5Lu2562JICBvbkxlYXZlTm9kZSDnprvlvIDoioLngrnnmoTml7blgJnkvJrosIPnlKhcblxuICAgICAgICAgICAgLy/kuLvnlYzpnaJjb250cm9sbGVyIOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICBuZXcgbWFpbkNvbnRyb2xsZXIoKSwgbmV3IG1haW5WaWV3KCkpKTtcblxuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDkuLvnlYzpnaIgPiDniYzlsYBcbiAgICAgICAgICAgIFByb2plY3QuQ29udGV4dHMucGFydHkgPSBQcm9qZWN0LkNvbnRleHRzLm1haW4uYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJwYXJ0eVwiKS5zZXRNb2R1bGVzKFxuICAgICAgICAgICAgLy/niYzlsYB2aWV3ICAgICAgIG9uRW50ZXJOb2RlIOi/m+WFpeiKgueCuS0+bG9hZFNjZW5lIGxvYWTmjqfku7bnrYkgIG9uTGVhdmVOb2RlIOemu+W8gOiKgueCueeahOaXtuWAmeS8muiwg+eUqFxuICAgICAgICAgICAgLy/niYzlsYBjb250cm9sbGVyIOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICBuZXcgcGFydHlWaWV3KCksIG5ldyBwYXJ0eUNvbnRyb2xsZXIoKSkpO1xuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDkuLvnlYzpnaIgPiDniYzlsYAgPiDliqDlhaXniYzlsYBcblxuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5qb2luUGFydHkgPSBQcm9qZWN0LkNvbnRleHRzLnBhcnR5LmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwiam9pblBhcnR5XCIpLnNldE1vZHVsZXMoXG4gICAgICAgICAgICAvL+WKoOWFpeeJjOWxgHZpZXcgICAgICAgb25FbnRlck5vZGUg6L+b5YWl6IqC54K5LT5sb2FkU2NlbmUgbG9hZOaOp+S7tuetiSAgb25MZWF2ZU5vZGUg56a75byA6IqC54K555qE5pe25YCZ5Lya6LCD55SoXG4gICAgICAgICAgICAvL+WKoOWFpeeJjOWxgGNvbnRyb2xsZXIg6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgIG5ldyBwYXJ0eV9Kb2luUGFydHlWaWV3KCksIG5ldyBwYXJ0eV9Kb2luUGFydHlDb250cm9sbGVyKCkpKTtcblxuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDkuLvnlYzpnaIgPiDniYzlsYAgPiDliqDlhaXniYzlsYAgPiDliqDlhaXniYzlsYBsb2FkaW5nXG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLmxvYWRpbmdQYXJ0eSA9IFByb2plY3QuQ29udGV4dHMucGFydHkuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJsb2FkaW5nUGFydHlcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8v5Yqg5YWl54mM5bGAbG9hZGluZ3ZpZXcgICAgICAgOiBvbkVudGVyTm9kZSDov5vlhaXoioLngrktPmxvYWRTY2VuZSBsb2Fk5o6n5Lu2562JICBvbkxlYXZlTm9kZSDnprvlvIDoioLngrnnmoTml7blgJnkvJrosIPnlKhcbiAgICAgICAgICAgIC8v5Yqg5YWl54mM5bGAbG9hZGluZ2NvbnRyb2xsZXJcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtui/m+WFpeeJjOWxgOeahOaVsOaNrlxuICAgICAgICAgICAgICAgIDog6LSf6LSj5Yik5patIOi/m+WFpeWTquenjeaAleWxgOetieW+hemhtVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5ldyBwYXJ0eV9Kb2luUGFydHlMb2FkaW5nVmlldygpLCBuZXcgcGFydHlfSm9pblBhcnR5TG9hZGluZ0NvbnRyb2xsZXIoKSkpO1xuXG4gICAgICAgICAgICAvL1RPRE86IOaguSA+IOS4u+eVjOmdoiA+IOeJjOWxgCA+IOWKoOWFpeeJjOWxgCA+IOafpeeci+ernuaKgOWcuuS/oeaBr1xuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5jaGFja1Nwb3J0c1BhcnR5aW5mbyA9IFByb2plY3QuQ29udGV4dHMucGFydHkuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJjaGFja1Nwb3J0c1BhcnR5aW5mb1wiKS5zZXRNb2R1bGVzKFxuICAgICAgICAgICAgLy/mn6XnnIvnq57mioDlnLrkv6Hmga92aWV3ICAgICAgIDogb25FbnRlck5vZGUg6L+b5YWl6IqC54K5LT5sb2FkU2NlbmUgbG9hZOaOp+S7tuetiSAgb25MZWF2ZU5vZGUg56a75byA6IqC54K555qE5pe25YCZ5Lya6LCD55SoXG4gICAgICAgICAgICAvL+afpeeci+ernuaKgOWcuuS/oeaBr2NvbnRyb2xsZXJcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8vIG5ldyBNVFRTTkdXYWl0aW5nVmlldygpLFxuICAgICAgICAgICAgLy8gbmV3IE1UVFNOR1dhaXRpbmdDb250cm9sbGVyKClcblxuICAgICAgICAgICAgbmV3IHBhcnR5X2NoYWNrU3BvcnRzUGFydHlpbmZvVmlldygpLCBuZXcgcGFydHlfY2hhY2tTcG9ydHNQYXJ0eWluZm9Db250cm9sbGVyKCkpKTtcblxuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDkuLvnlYzpnaIgPiDniYzlsYAgPiDliJvlu7rniYzlsYBcbiAgICAgICAgICAgIC8vIFByb2plY3QuQ29udGV4dHMuY3JlYXRlUGFydHkgPSBQcm9qZWN0LkNvbnRleHRzLnBhcnR5LmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwiY3JlYXRlUGFydHlcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8vICAgICAvL+WIm+W7uuagh+WHhuWxgHZpZXcgICAgICAgOiBvbkVudGVyTm9kZSDov5vlhaXoioLngrktPmxvYWRTY2VuZSBsb2Fk5o6n5Lu2562JICBvbkxlYXZlTm9kZSDnprvlvIDoioLngrnnmoTml7blgJnkvJrosIPnlKhcbiAgICAgICAgICAgIC8vICAgICAvL+WIm+W7uuagh+WHhuWxgGNvbnRyb2xsZXJcbiAgICAgICAgICAgIC8vICAgICAvKiAgOiDotJ/otKPmjqXmlLbmtojmga8g6L+Q6KGMZ290b++8iOiKgueCuei3s+i9rO+8iVxuICAgICAgICAgICAgLy8gICAgICAqL1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBuZXcgcGFydHlfQ3JlYXRlUGFydHlWaWV3KCksXG4gICAgICAgICAgICAvLyAgICAgbmV3IHBhcnR5X0NyZWF0ZVBhcnR5Q29udHJvbGxlcigpXG4gICAgICAgICAgICAvLyApKTtcblxuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDkuLvnlYzpnaIgPiDniYzlsYAgPiDliJvlu7rniYzlsYDorr7nva5cbiAgICAgICAgICAgIFByb2plY3QuQ29udGV4dHMuY3JlYXRlUGFydHlTZXQgPSBQcm9qZWN0LkNvbnRleHRzLnBhcnR5LmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwiY3JlYXRlUGFydHlTZXRcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8v5Yib5bu65qCH5YeG54mM5bGA6K6+572uIHZpZXcgICAgICAgOiBvbkVudGVyTm9kZSDov5vlhaXoioLngrktPmxvYWRTY2VuZSBsb2Fk5o6n5Lu2562JICBvbkxlYXZlTm9kZSDnprvlvIDoioLngrnnmoTml7blgJnkvJrosIPnlKhcbiAgICAgICAgICAgIC8v5Yib5bu65qCH5YeG54mM5bGA6K6+572uIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgbmV3IHBhcnR5X0NyZWF0ZVBhcnR5U2V0VmlldygpLCBuZXcgcGFydHlfQ3JlYXRlUGFydHlTZXRDb250cm9sbGVyKCkpKTtcblxuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDkuLvnlYzpnaIgPiDniYzlsYAgPiDliJvlu7rniYzlsYBsb2FkaW5nXG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLmNyZWF0ZVBhcnR5TG9hZGluZyA9IFByb2plY3QuQ29udGV4dHMucGFydHkuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJjcmVhdGVQYXJ0eUxvYWRpbmdcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8v5Yib5bu654mM5bGAbG9hZGluZyB2aWV3ICAgICAgIDogb25FbnRlck5vZGUg6L+b5YWl6IqC54K5LT5sb2FkU2NlbmUgbG9hZOaOp+S7tuetiSAgb25MZWF2ZU5vZGUg56a75byA6IqC54K555qE5pe25YCZ5Lya6LCD55SoXG4gICAgICAgICAgICAvL+WIm+W7uueJjOWxgGxvYWRpbmcgY29udHJvbGxlclxuICAgICAgICAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmV3IHBhcnR5X0NyZWF0ZVBhcnR5TG9hZGluZ1ZpZXcoKSwgbmV3IHBhcnR5X0NyZWF0ZVBhcnR5TG9hZGluZ0NvbnRyb2xsZXIoKSkpO1xuXG4gICAgICAgICAgICAvL1RPRE86IOaguSA+IOaIv+mXtFxuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5yb29tID0gUHJvamVjdC5Db250ZXh0cy5yb290LmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwicm9vbVwiKS5zZXRNb2R1bGVzKFxuICAgICAgICAgICAgLy/miL/pl7QgdmlldyAgICAgICA6IG9uRW50ZXJOb2RlIOi/m+WFpeiKgueCuS0+bG9hZFNjZW5lIGxvYWTmjqfku7bnrYkgIG9uTGVhdmVOb2RlIOemu+W8gOiKgueCueeahOaXtuWAmeS8muiwg+eUqFxuICAgICAgICAgICAgLy/miL/pl7QgY29udHJvbGxlclxuICAgICAgICAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmV3IHJvb21WaWV3KCksIG5ldyByb29tQ29udHJvbGxlcigpKSk7XG4gICAgICAgICAgICAvL1RPRE86IOaguSA+IOaIv+mXtCA+IOaIv+mXtOetieW+hS4uLiAoU1REKSAo5Yik5pat5piv5ZCm5LiK5qGMKVxuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5yb29tV2FpdGluZyA9IFByb2plY3QuQ29udGV4dHMucm9vbS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcInJvb21XYWl0aW5nXCIpLnNldE1vZHVsZXMoXG4gICAgICAgICAgICAvL+aIv+mXtOetieW+hSB2aWV3ICAgICAgIDogb25FbnRlck5vZGUg6L+b5YWl6IqC54K5LT5sb2FkU2NlbmUgbG9hZOaOp+S7tuetiSAgb25MZWF2ZU5vZGUg56a75byA6IqC54K555qE5pe25YCZ5Lya6LCD55SoXG4gICAgICAgICAgICAvL+aIv+mXtOetieW+hSBjb250cm9sbGVyXG4gICAgICAgICAgICAvKiAgOiDotJ/otKPmjqXmlLbmtojmga8g6L+Q6KGMZ290b++8iOiKgueCuei3s+i9rO+8iVxuICAgICAgICAgICAgLy8gICovXG4gICAgICAgICAgICAvLyBuZXcgY3JlYXRlUGFydHlXYWl0aW5nVmlldygpLFxuICAgICAgICAgICAgLy8gbmV3IGNyZWF0ZVBhcnR5V2FpdGluZ0NvbnRyb2xsZXIoKVxuXG4gICAgICAgICAgICBuZXcgcm9vbV9yb29tV2FpdGluZ0NvbnRyb2xsZXIoKSwgbmV3IHJvb21fcm9vbVdhaXRpbmdWaWV3KCkpKTtcblxuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDmiL/pl7QgPiBsb2FkaW5nXG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLmxvYWRpbmdHYW1lID0gUHJvamVjdC5Db250ZXh0cy5yb29tLmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwibG9hZGluZ0dhbWVcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8v5byA5aeL5ri45oiPIHZpZXcgICAgICAgOiBvbkVudGVyTm9kZSDov5vlhaXoioLngrktPmxvYWRTY2VuZSBsb2Fk5o6n5Lu2562JICBvbkxlYXZlTm9kZSDnprvlvIDoioLngrnnmoTml7blgJnkvJrosIPnlKhcbiAgICAgICAgICAgIC8v5byA5aeL5ri45oiPIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5ldyByb29tX2xvYWRpbmdDb250cm9sbGVyKCksIG5ldyByb29tX2xvYWRpbmdWaWV3KCkpKTtcbiAgICAgICAgICAgIC8vVE9ETzog5qC5ID4g5oi/6Ze0ID4g5byA5aeL5ri45oiPXG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLnN0YXJ0R2FtZSA9IFByb2plY3QuQ29udGV4dHMucm9vbS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcInN0YXJ0R2FtZVwiKS5zZXRNb2R1bGVzKFxuICAgICAgICAgICAgLy/lvIDlp4vmuLjmiI8gdmlldyAgICAgICA6IG9uRW50ZXJOb2RlIOi/m+WFpeiKgueCuS0+bG9hZFNjZW5lIGxvYWTmjqfku7bnrYkgIG9uTGVhdmVOb2RlIOemu+W8gOiKgueCueeahOaXtuWAmeS8muiwg+eUqFxuICAgICAgICAgICAgLy/lvIDlp4vmuLjmiI8gY29udHJvbGxlclxuICAgICAgICAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICBuZXcgcm9vbV9zdGFydEdhbWVDb250cm9sbGVyKCksIG5ldyByb29tX3N0YXJ0R2FtZVZpZXcoKSkpO1xuXG4gICAgICAgICAgICAvL1RPRE86IOaguSA+IOaIv+mXtCA+IOW8gOWni+a4uOaIjyA+IOWumuW6hFxuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5WaWxsYWdlID0gUHJvamVjdC5Db250ZXh0cy5zdGFydEdhbWUuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJWaWxsYWdlXCIpLnNldE1vZHVsZXMoXG4gICAgICAgICAgICAvL+WumuW6hCB2aWV3ICAgICAgIDogb25FbnRlck5vZGUg6L+b5YWl6IqC54K5LT5sb2FkU2NlbmUgbG9hZOaOp+S7tuetiSAgb25MZWF2ZU5vZGUg56a75byA6IqC54K555qE5pe25YCZ5Lya6LCD55SoXG4gICAgICAgICAgICAvL+WumuW6hCBjb250cm9sbGVyXG4gICAgICAgICAgICAvKiAgOiDotJ/otKPmjqXmlLbmtojmga8g6L+Q6KGMZ290b++8iOiKgueCuei3s+i9rO+8iVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuZXcgcm9vbV9WaWxsYWdlQ29udHJvbGxlcigpLCBuZXcgcm9vbV9WaWxsYWdlVmlldygpKSk7XG4gICAgICAgICAgICAvL1RPRE86IOaguSA+IOaIv+mXtCA+IOW8gOWni+a4uOaIjyA+IOWPkeaJi+eJjFxuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5oYW5kU2lnbiA9IFByb2plY3QuQ29udGV4dHMuc3RhcnRHYW1lLmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwiaGFuZFNpZ25cIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8v5Y+R5omL54mMIHZpZXcgICAgICAgOiBvbkVudGVyTm9kZSDov5vlhaXoioLngrktPmxvYWRTY2VuZSBsb2Fk5o6n5Lu2562JICBvbkxlYXZlTm9kZSDnprvlvIDoioLngrnnmoTml7blgJnkvJrosIPnlKhcbiAgICAgICAgICAgIC8v5Y+R5omL54mMIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5ldyByb29tX2hhbmRTaWduQ29udHJvbGxlcigpLCBuZXcgcm9vbV9oYW5kU2lnblZpZXcoKSkpO1xuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDmiL/pl7QgPiDlvIDlp4vmuLjmiI8gPiAg5Y+R5YWs5YWx54mMXG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLmNvbW11bml0eUNhcmQgPSBQcm9qZWN0LkNvbnRleHRzLnN0YXJ0R2FtZS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcImNvbW11bml0eUNhcmRcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8v5Y+R5YWs5YWx54mMIHZpZXcgICAgICAgOiBvbkVudGVyTm9kZSDov5vlhaXoioLngrktPmxvYWRTY2VuZSBsb2Fk5o6n5Lu2562JICBvbkxlYXZlTm9kZSDnprvlvIDoioLngrnnmoTml7blgJnkvJrosIPnlKhcbiAgICAgICAgICAgIC8v5Y+R5YWs5YWx54mMIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5ldyByb29tX2NvbW11bml0eUNhcmRDb250cm9sbGVyKCksIG5ldyByb29tX2NvbW11bml0eUNhcmRWaWV3KCkpKTtcbiAgICAgICAgICAgIC8vVE9ETzog5qC5ID4g5oi/6Ze0ID4g5byA5aeL5ri45oiPID4gIOi9ruWIsOWIq+S6uuWKqOS9nFxuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5vdGhlcnNBY3Rpb24gPSBQcm9qZWN0LkNvbnRleHRzLnN0YXJ0R2FtZS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcIm90aGVyc0FjdGlvblwiKS5zZXRNb2R1bGVzKFxuICAgICAgICAgICAgLy/ova7liLDliKvkurrliqjkvZwgdmlldyAgICAgICA6IG9uRW50ZXJOb2RlIOi/m+WFpeiKgueCuS0+bG9hZFNjZW5lIGxvYWTmjqfku7bnrYkgIG9uTGVhdmVOb2RlIOemu+W8gOiKgueCueeahOaXtuWAmeS8muiwg+eUqFxuICAgICAgICAgICAgLy/ova7liLDliKvkurrliqjkvZwgY29udHJvbGxlclxuICAgICAgICAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmV3IHJvb21fb3RoZXJzVHVybkNvbnRyb2xsZXIoKSwgbmV3IHJvb21fb3RoZXJzVHVyblZpZXcoKSkpO1xuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDmiL/pl7QgPiDlvIDlp4vmuLjmiI8gPiAg6L2u5Yiw6Ieq5bex5Yqo5L2cXG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLm15QWN0aW9uID0gUHJvamVjdC5Db250ZXh0cy5zdGFydEdhbWUuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJteUFjdGlvblwiKS5zZXRNb2R1bGVzKFxuICAgICAgICAgICAgLy/ova7liLDoh6rlt7HliqjkvZwgdmlldyAgICAgICA6IG9uRW50ZXJOb2RlIOi/m+WFpeiKgueCuS0+bG9hZFNjZW5lIGxvYWTmjqfku7bnrYkgIG9uTGVhdmVOb2RlIOemu+W8gOiKgueCueeahOaXtuWAmeS8muiwg+eUqFxuICAgICAgICAgICAgLy/ova7liLDoh6rlt7HliqjkvZwgY29udHJvbGxlclxuICAgICAgICAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICBuZXcgcm9vbV9teVR1cm5Db250cm9sbGVyKCksIG5ldyByb29tX215VHVyblZpZXcoKSkpO1xuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDmiL/pl7QgPiDlvIDlp4vmuLjmiI8gPiAg5L+d6ZmpXG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLnNhZmVzdCA9IFByb2plY3QuQ29udGV4dHMuc3RhcnRHYW1lLmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwic2FmZXN0XCIpLnNldE1vZHVsZXMoXG4gICAgICAgICAgICAvL+S/nemZqSB2aWV3ICAgICAgIDogb25FbnRlck5vZGUg6L+b5YWl6IqC54K5LT5sb2FkU2NlbmUgbG9hZOaOp+S7tuetiSAgb25MZWF2ZU5vZGUg56a75byA6IqC54K555qE5pe25YCZ5Lya6LCD55SoXG4gICAgICAgICAgICAvL+S/nemZqSBjb250cm9sbGVyXG4gICAgICAgICAgICAvKiAgOiDotJ/otKPmjqXmlLbmtojmga8g6L+Q6KGMZ290b++8iOiKgueCuei3s+i9rO+8iVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuZXcgcm9vbV9zYWZlc3RDb250cm9sbGVyKCksIG5ldyByb29tX3NhZmVzdFZpZXcoKSkpO1xuICAgICAgICAgICAgLy9UT0RPOiDmoLkgPiDmiL/pl7QgPiDnu5PnrpdcbiAgICAgICAgICAgIFByb2plY3QuQ29udGV4dHMuc3RhdGVtZW50cyA9IFByb2plY3QuQ29udGV4dHMucm9vbS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcInN0YXRlbWVudHNcIikuc2V0TW9kdWxlcygpKTtcbiAgICAgICAgICAgIC8vVE9ETzog5qC5ID4g5oi/6Ze0ID4g54mM5bGA5oi/6Ze057uT5p2fXG5cbiAgICAgICAgICAgIC8v5L+d6ZmpIHZpZXcgICAgICAgOiBvbkVudGVyTm9kZSDov5vlhaXoioLngrktPmxvYWRTY2VuZSBsb2Fk5o6n5Lu2562JICBvbkxlYXZlTm9kZSDnprvlvIDoioLngrnnmoTml7blgJnkvJrosIPnlKhcbiAgICAgICAgICAgIC8v5L+d6ZmpIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgLy8gbmV3IHJvb21fc3RhdGVtZW50c0NvbnRyb2xsZXIoKSxcbiAgICAgICAgICAgIC8vIG5ldyByb29tX3N0YXRlbWVudHNWaWV3KClcbiAgICAgICAgICAgIC8vIG5ldyBTZXR0bGVtZW50VmlldygpLFxuICAgICAgICAgICAgLy8gbmV3IFNldHRsZW1lbnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIFByb2plY3QuQ29udGV4dHMucGFydHlSb29tT3ZlciA9IFByb2plY3QuQ29udGV4dHMucm9vbS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcInBhcnR5Um9vbU92ZXJcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8v54mM5bGA5oi/6Ze057uT5p2fIHZpZXcgICAgICAgOiBvbkVudGVyTm9kZSDov5vlhaXoioLngrktPmxvYWRTY2VuZSBsb2Fk5o6n5Lu2562JICBvbkxlYXZlTm9kZSDnprvlvIDoioLngrnnmoTml7blgJnkvJrosIPnlKhcbiAgICAgICAgICAgIC8v54mM5bGA5oi/6Ze057uT5p2fIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgbmV3IHJvb21fcGFydHlSb29tT3ZlckNvbnRyb2xsZXIoKSwgbmV3IHJvb21fcGFydHlSb29tT3ZlclZpZXcoKSkpO1xuXG4gICAgICAgICAgICAvL+aguSA+IOaIkeeahFxuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5teSA9IFByb2plY3QuQ29udGV4dHMucm9vdC5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcIm15XCIpLnNldE1vZHVsZXMobmV3IG15VmlldygpLCBuZXcgbXlDb250cm9sbGVyKClcblxuICAgICAgICAgICAgLy/miJHnmoRcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDkuKrkurrorr7nva5cbiAgICAgICAgICAgIFByb2plY3QuQ29udGV4dHMuZWRpdCA9IFByb2plY3QuQ29udGV4dHMubXkuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJlZGl0XCIpLnNldE1vZHVsZXMoKSk7XG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOeJjOiwsVxuXG4gICAgICAgICAgICAvLyBuZXcgZWRpdFZpZXcoKSxcbiAgICAgICAgICAgIC8vIG5ldyBlZGl0Q29udHJvbGxlcigpXG5cbiAgICAgICAgICAgIC8v5oiR55qEXG4gICAgICAgICAgICAvKiAgOiDotJ/otKPmjqXmlLbmtojmga8g6L+Q6KGMZ290b++8iOiKgueCuei3s+i9rO+8iVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBQcm9qZWN0LkNvbnRleHRzLm15YnJhbmQgPSBQcm9qZWN0LkNvbnRleHRzLm15LmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwibXlicmFuZFwiKS5zZXRNb2R1bGVzKCkpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDniYzosLEgPiDmiJHnmoTniYzosLFcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g54mM6LCxID4g5pS26JeP55qE54mM6LCxXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOWkp+W4iOetiee6p1xuXG4gICAgICAgICAgICAvLyBuZXcgbXlicmFuZFZpZXcoKSxcbiAgICAgICAgICAgIC8vIG5ldyBteWJyYW5kQ29udHJvbGxlcigpXG4gICAgICAgICAgICAvL+mSseWMhVxuICAgICAgICAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5tYXN0ZXJsZXZlbCA9IFByb2plY3QuQ29udGV4dHMubXkuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJtYXN0ZXJsZXZlbFwiKS5zZXRNb2R1bGVzKCkpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDkvJrnsY1cblxuICAgICAgICAgICAgLy8gbmV3IG1hc3RlcmxldmVsVmlldygpLFxuICAgICAgICAgICAgLy8gbmV3IG1hc3RlcmxldmVsQ29udHJvbGxlcigpXG4gICAgICAgICAgICAvL+mSseWMhVxuICAgICAgICAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5tZW1iZXJzaGlwID0gUHJvamVjdC5Db250ZXh0cy5teS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcIm1lbWJlcnNoaXBcIikuc2V0TW9kdWxlcygpKTtcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g5Lya57GNID4g5Lya57GN57uR5a6aXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOS8muexjSA+IOWNh+e6p+S8muWRmFxuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDpkrHljIVcblxuICAgICAgICAgICAgLy8gbmV3IG1lbWJlcnNoaXBWaWV3KCksXG4gICAgICAgICAgICAvLyBuZXcgbWVtYmVyc2hpcENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgLy/pkrHljIVcbiAgICAgICAgICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFByb2plY3QuQ29udGV4dHMud2FsbGV0ID0gUHJvamVjdC5Db250ZXh0cy5teS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcIndhbGxldFwiKS5zZXRNb2R1bGVzKCkpO1xuICAgICAgICAgICAgLy/moLkgPiDmiJHnmoQgPiDpkrHljIUgPiDllYbln45cbiAgICAgICAgICAgIC8v5qC5ID4g5oiR55qEID4g5ZWG5Z+OXG5cbiAgICAgICAgICAgIC8vIG5ldyB3YWxsZXRWaWV3KCksXG4gICAgICAgICAgICAvLyBuZXcgd2FsbGV0Q29udHJvbGxlcigpXG4gICAgICAgICAgICAvL+mSseWMhVxuICAgICAgICAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5tYWxsID0gUHJvamVjdC5Db250ZXh0cy5teS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcIm1hbGxcIikuc2V0TW9kdWxlcygpKTtcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g5oiR55qE5oiY6ZifXG4gICAgICAgICAgICAvLyBQcm9qZWN0LkNvbnRleHRzLm15dGVhbSA9IFByb2plY3QuQ29udGV4dHMubXkuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJteXRlYW1cIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8vICAgICBuZXcgbXl0ZWFtVmlldygpLFxuICAgICAgICAgICAgLy8gICAgIG5ldyBteXRlYW1Db250cm9sbGVyKClcbiAgICAgICAgICAgIC8vICAgICAvL+mSseWMhVxuICAgICAgICAgICAgLy8gICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAvLyAgICAgICovXG4gICAgICAgICAgICAvLyApKTtcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g6IGU57O75Lq6ID4g5oiR5YWz5rOo55qEXG4gICAgICAgICAgICAvLyBQcm9qZWN0LkNvbnRleHRzLmNvbnRhY3RzZm9sbG93PSBQcm9qZWN0LkNvbnRleHRzLm15LmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwiY29udGFjdHNmb2xsb3dcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8vICAgICBuZXcgY29udGFjdHNWaWV3KCksXG4gICAgICAgICAgICAvLyAgICAgbmV3IGNvbnRhY3RzQ29udHJvbGxlcigpXG4gICAgICAgICAgICAvLyAgICAgLy/pkrHljIVcbiAgICAgICAgICAgIC8vICAgICAvKiAgOiDotJ/otKPmjqXmlLbmtojmga8g6L+Q6KGMZ290b++8iOiKgueCuei3s+i9rO+8iVxuICAgICAgICAgICAgLy8gICAgICAqL1xuICAgICAgICAgICAgLy8gKSk7XG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOiBlOezu+S6uiA+IOeyieS4nVxuICAgICAgICAgICAgLy8gUHJvamVjdC5Db250ZXh0cy5jb250YWN0c2Zhbj0gUHJvamVjdC5Db250ZXh0cy5teS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcImNvbnRhY3RzZmFuXCIpLnNldE1vZHVsZXMoXG4gICAgICAgICAgICAvLyAgICAgbmV3IGNvbnRhY3RzVmlldygpLFxuICAgICAgICAgICAgLy8gICAgIG5ldyBjb250YWN0c0NvbnRyb2xsZXIoKVxuICAgICAgICAgICAgLy8gICAgIC8v6ZKx5YyFXG4gICAgICAgICAgICAvLyAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgIC8vICAgICAgKi9cbiAgICAgICAgICAgIC8vICkpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDmiJHlhbPms6jnmoRcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g5oiR55qE57KJ5LidXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOa2iOaBr1xuICAgICAgICAgICAgLy8gUHJvamVjdC5Db250ZXh0cy5tZXNzYWdlID0gUHJvamVjdC5Db250ZXh0cy5teS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcIm1lc3NhZ2VcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8vICAgICBuZXcgbWVzc2FnZVZpZXcoKSxcbiAgICAgICAgICAgIC8vICAgICBuZXcgbWVzc2FnZUNvbnRyb2xsZXIoKVxuICAgICAgICAgICAgLy8gICAgIC8v6ZKx5YyFXG4gICAgICAgICAgICAvLyAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgIC8vICAgICAgKi9cbiAgICAgICAgICAgIC8vICkpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDmtojmga8gPiDogYrlpKlcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g5raI5oGvID4g5raI5oGvXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOaJgOiOt+aIkOWwsVxuICAgICAgICAgICAgLy8gUHJvamVjdC5Db250ZXh0cy5hY2hpZXZlbWVudCA9IFByb2plY3QuQ29udGV4dHMubXkuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJhY2hpZXZlbWVudFwiKS5zZXRNb2R1bGVzKFxuICAgICAgICAgICAgLy8gICAgIG5ldyBhY2hpZXZlbWVudFZpZXcoKSxcbiAgICAgICAgICAgIC8vICAgICBuZXcgYWNoaWV2ZW1lbnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIC8vICAgICAvL+mSseWMhVxuICAgICAgICAgICAgLy8gICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAvLyAgICAgICovXG4gICAgICAgICAgICAvLyApKTtcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g5omA6I635oiQ5bCxID4gU1REXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOaJgOiOt+aIkOWwsSA+IFNOR1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDmiYDojrfmiJDlsLEgPiBNVFRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOeJjOWxgOe7n+iuoVxuICAgICAgICAgICAgLy8gUHJvamVjdC5Db250ZXh0cy5nYW1lc3RhdGlzdGljcyA9IFByb2plY3QuQ29udGV4dHMubXkuYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJnYW1lc3RhdGlzdGljc1wiKS5zZXRNb2R1bGVzKFxuICAgICAgICAgICAgLy8gICAgIG5ldyBnYW1lc3RhdGlzdGljc1ZpZXcoKSxcbiAgICAgICAgICAgIC8vICAgICBuZXcgZ2FtZXN0YXRpc3RpY3NDb250cm9sbGVyKClcbiAgICAgICAgICAgIC8vICAgICAvL+mSseWMhVxuICAgICAgICAgICAgLy8gICAgIC8qICA6IOi0n+i0o+aOpeaUtua2iOaBryDov5DooYxnb3Rv77yI6IqC54K56Lez6L2s77yJXG4gICAgICAgICAgICAvLyAgICAgICovXG4gICAgICAgICAgICAvLyApKTtcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g6YKA6K+356CBXG4gICAgICAgICAgICAvLyBQcm9qZWN0LkNvbnRleHRzLmludml0YXRpb25jb2RlID0gUHJvamVjdC5Db250ZXh0cy5teS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcImludml0YXRpb25jb2RlXCIpLnNldE1vZHVsZXMoXG4gICAgICAgICAgICAvLyAgICAgbmV3IGludml0YXRpb25jb2RlVmlldygpLFxuICAgICAgICAgICAgLy8gICAgIG5ldyBpbnZpdGF0aW9uY29kZUNvbnRyb2xsZXIoKVxuICAgICAgICAgICAgLy8gICAgIC8v6ZKx5YyFXG4gICAgICAgICAgICAvLyAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgIC8vICAgICAgKi9cbiAgICAgICAgICAgIC8vICkpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDpgoDor7fnoIEgPiDpgoDor7flpb3lj4tcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g6YKA6K+356CBID4g6YKA6K+35aW95Y+LXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOezu+e7n+iuvue9rlxuICAgICAgICAgICAgLy8gUHJvamVjdC5Db250ZXh0cy5zZXR0aW5nID0gUHJvamVjdC5Db250ZXh0cy5teS5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcInNldHRpbmdcIikuc2V0TW9kdWxlcyhcbiAgICAgICAgICAgIC8vICAgICBuZXcgc2V0dGluZ1ZpZXcoKSxcbiAgICAgICAgICAgIC8vICAgICBuZXcgc2V0dGluZ0NvbnRyb2xsZXIoKVxuICAgICAgICAgICAgLy8gICAgIC8v6ZKx5YyFXG4gICAgICAgICAgICAvLyAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgIC8vICAgICAgKi9cbiAgICAgICAgICAgIC8vICkpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDns7vnu5/orr7nva4gPiDliIfmjaLotKblj7dcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g57O757uf6K6+572uID4g6K+E5YiGXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOezu+e7n+iuvue9riA+IOW4ruWKqeS4juWPjemmiFxuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDns7vnu5/orr7nva4gPiDlhbPkuo7miJHku6xcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g6KeE5YiZ6K+05piOXG4gICAgICAgICAgICAvLyBQcm9qZWN0LkNvbnRleHRzLnJ1bGUgPSBQcm9qZWN0LkNvbnRleHRzLm15LmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwicnVsZVwiKS5zZXRNb2R1bGVzKFxuICAgICAgICAgICAgLy8gICAgIG5ldyBydWxlVmlldygpLFxuICAgICAgICAgICAgLy8gICAgIG5ldyBydWxlQ29udHJvbGxlcigpXG4gICAgICAgICAgICAvLyAgICAgLy/pkrHljIVcbiAgICAgICAgICAgIC8vICAgICAvKiAgOiDotJ/otKPmjqXmlLbmtojmga8g6L+Q6KGMZ290b++8iOiKgueCuei3s+i9rO+8iVxuICAgICAgICAgICAgLy8gICAgICAqL1xuICAgICAgICAgICAgLy8gKSk7XG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOinhOWImeivtOaYjiA+IOWfuuacrOinhOWImVxuICAgICAgICAgICAgLy8gLy/moLkgPiDmiJHnmoQgPiDop4TliJnor7TmmI4gPiDnm7Lms6jnuqfliKvooahcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oiR55qEID4g6KeE5YiZ6K+05piOID4g5L+d6Zmp6K+05piOXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIkeeahCA+IOinhOWImeivtOaYjiA+IOWFjei0o+ivtOaYjlxuICAgICAgICAgICAgLy9cblxuICAgICAgICAgICAgLy8gLy/moLkgPiDkuLvnlYzpnaIgPiDliJvlu7rniYzlsYBcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oi/6Ze0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gLy/moLkgPiDliqDovb1cbiAgICAgICAgICAgIC8vIC8vIFByb2plY3QuQ29udGV4dHMubG9hZGluZyA9IFByb2plY3QuQ29udGV4dHMucm9vdC5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcImxvYWRpbmdcIikpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDkuLvnlYzpnaJcbiAgICAgICAgICAgIC8vIFByb2plY3QuQ29udGV4dHMubWFpbiA9IFByb2plY3QuQ29udGV4dHMucm9vdC5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcIm1haW5cIikpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDkuLvnlYzpnaIgPiDoj5zljZVcbiAgICAgICAgICAgIC8vIFByb2plY3QuQ29udGV4dHMubWVudSA9IFByb2plY3QuQ29udGV4dHMubWFpbi5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcIm1lbnVcIikpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDkuLvnlYzpnaIgPiDluJDmiLfkv6Hmga9cbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5Li755WM6Z2iID4g5Yib5bu65oi/6Ze0XG4gICAgICAgICAgICAvLyBQcm9qZWN0LkNvbnRleHRzLnJvb21DcmVhdGUgPSBQcm9qZWN0LkNvbnRleHRzLm1haW4uYWRkKG5ldyBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHQoXCJyb29tQ3JlYXRlXCIpKTtcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5Li755WM6Z2iID4g5Yqg5YWl5oi/6Ze0XG4gICAgICAgICAgICAvLyBQcm9qZWN0LkNvbnRleHRzLnJvb21Kb2luID0gUHJvamVjdC5Db250ZXh0cy5tYWluLmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwicm9vbUpvaW5cIikpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDkuLvnlYzpnaIgPiDlhazlkYpcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5Li755WM6Z2iID4g6IOM5YyFXG4gICAgICAgICAgICAvLyAvL+aguSA+IOS4u+eVjOmdoiA+IOWVhuWfjlxuICAgICAgICAgICAgLy8gLy/moLkgPiDkuLvnlYzpnaIgPiDku7vliqFcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5Li755WM6Z2iID4g6KeE5YiZXG4gICAgICAgICAgICAvLyAvL+aguSA+IOS4u+eVjOmdoiA+IOW4ruWKqVxuICAgICAgICAgICAgLy8gLy/moLkgPiDkuLvnlYzpnaIgPiDliIbkuqtcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5Li755WM6Z2iID4g6K6+572uXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiL/pl7RcbiAgICAgICAgICAgIC8vIFByb2plY3QuQ29udGV4dHMucm9vbSA9IFByb2plY3QuQ29udGV4dHMucm9vdC5hZGQobmV3IFByb2plY3QuRldTLk1WQy5GQ29udGV4dChcInJvb21cIikpO1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiL/pl7QgPiDliqDovb1cbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oi/6Ze0ID4g6YKA6K+3XG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIv+mXtCA+IOa4uOaIj1xuICAgICAgICAgICAgLy8gUHJvamVjdC5Db250ZXh0cy5nYW1lID0gUHJvamVjdC5Db250ZXh0cy5yb29tLmFkZChuZXcgUHJvamVjdC5GV1MuTVZDLkZDb250ZXh0KFwiZ2FtZVwiKSk7XG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIv+mXtCA+IOa4uOaIjyA+IOetieW+hVxuICAgICAgICAgICAgLy8gLy/moLkgPiDmiL/pl7QgPiDmuLjmiI8gPiDlrprluoRcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oi/6Ze0ID4g5ri45oiPID4g5Y+R54mMXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIv+mXtCA+IOa4uOaIjyA+IOaNoueJjFxuICAgICAgICAgICAgLy8gLy/moLkgPiDmiL/pl7QgPiDmuLjmiI8gPiDlrprnvLpcbiAgICAgICAgICAgIC8vIC8v5qC5ID4g5oi/6Ze0ID4g5ri45oiPID4g6KGM54mMXG4gICAgICAgICAgICAvLyAvL+aguSA+IOaIv+mXtCA+IOa4uOaIjyA+IOe7k+eul1xuICAgICAgICAgICAgLy8gLy/moLkgPiDmiL/pl7QgPiDnu5PmnZ9cblxuICAgICAgICAgICAgLy8tLS0tLVxuXG4gICAgICAgICAgICAvLyBuZXcgbWFsbFZpZXcoKSxcbiAgICAgICAgICAgIC8vIG5ldyBtYWxsQ29udHJvbGxlcigpXG4gICAgICAgICAgICAvL+mSseWMhVxuICAgICAgICAgICAgLyogIDog6LSf6LSj5o6l5pS25raI5oGvIOi/kOihjGdvdG/vvIjoioLngrnot7PovazvvIlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgUHJvamVjdC5GV1MuTVZDLkZNZXNzYWdlUm91dGVyLmNyZWF0ZVF1ZXVlKFwidWlcIik7XG4gICAgICAgICAgICBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHRNYW5hZ2VyLmluaXQoUHJvamVjdC5Db250ZXh0cy5yb290KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy/lvIDlp4tcbiAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAgICAgUHJvamVjdC5Db250ZXh0cy5pbml0KCk7XG4gICAgICAgICAgICBQcm9qZWN0LkZXUy5NVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcImxvYWRpbmdcIik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuUHJvamVjdC5Db250ZXh0cy5zdGFydCgpO1xuXG4vLy0tLS0tLSDmtYvor5Xku6PnoIE6IOS4jeWhq+WPguaVsOeahOaDheWGteS4i+i3keS4gOmBjeS4u+e6v+a2iOaBr+a1geeoi1xuXG4vLyAvL+i/nuaOpeacjeWKoeWZqFxuLy8gUHJvamVjdC5GV1MuTVNHLkZXU01lc3NhZ2VGYWN0b3J5LnNlcnZlckNvbm5lY3QoKS5zZW5kKCk7XG4vLyAvL+WIm+W7uuaIv+mXtCAo5q2k5aSE5Lmf5Y+v6IO95piv5Yqg5YWl5oi/6Ze0KVxuLy8gUHJvamVjdC5GV1MuTVNHLkZXU01lc3NhZ2VGYWN0b3J5LnJvb21DcmVhdGUoKS5zZW5kKCk7XG4vLyAvL+WKoOWFpea4uOaIj1xuLy8gUHJvamVjdC5GV1MuTVNHLkZXU01lc3NhZ2VGYWN0b3J5LmdhbWVKb2luKCkuc2VuZCgpO1xuLy8gLy/muLjmiI/lsLHnu6pcbi8vIFByb2plY3QuRldTLk1TRy5GV1NNZXNzYWdlRmFjdG9yeS5nYW1lUmVhZHkoKS5zZW5kKCk7XG4vLyAvL+W6lOetlOWKqOS9nFxuLy8gUHJvamVjdC5GV1MuTVNHLkZXU01lc3NhZ2VGYWN0b3J5LmdhbWVBY3Rpb25BY2soKS5zZW5kKCk7XG5cbi8vLS0tLS0tIOWIm+W7uua4uOaIj+aIv+mXtFxuXG4vLyAvL+aIv+mXtOWQjeensFxuLy8gdmFyIHJvb21OYW1lID0gXCLmiJHnmoRNVFTmuLjmiI9cIjtcbi8vIC8v5oi/6Ze057G75Z6LXG4vLyB2YXIgcm9vbVR5cGUgPSBQcm9qZWN0LlA5LkRBVEEuR0FNRS5QOVJvb21UeXBlLk1UVDtcbi8vIC8v5oi/6Ze06YCJ6aG55Y+C6ICDUDlSb29tRGF0YS5qc+S4reeahFA5U1RER2FtZURhdGHlkoxQOU1UVEdhbWVEYXRh55qE5bGe5oCn5a6a5LmJLi4uXG4vLyB2YXIgcm9vbURhdGEgPSBuZXcgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlNVFRHYW1lRGF0YSgpO1xuLy8gcm9vbURhdGEudGFibGVQbGF5ZXJDb3VudCA9IDk7XG4vLyAvLy4uLlxuXG4vLyBQcm9qZWN0LkZXUy5NU0cuRldTTWVzc2FnZUZhY3Rvcnkucm9vbUNyZWF0ZShyb29tTmFtZSwgcm9vbVR5cGUsIHJvb21EYXRhKS5zZW5kKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdDtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzllMWQ3TUlMRzFKZHBPOFRMNGlyL0p5JywgJ1Jvb21fcm9vbVdhaXRpbmdDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vYTJyb29tLXJvb21XYWl0aW5nL1Jvb21fcm9vbVdhaXRpbmdDb250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBSb29tX3Jvb21XYWl0aW5nQ29udHJvbGxlcjtcblJvb21fcm9vbVdhaXRpbmdDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJvbkVudGVyTm9kZSBSb29tX3Jvb21XYWl0aW5nQ29udHJvbGxlclwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fSxcbiAgICAvL+eVjOmdouaYvuekulxuICAgIG9uTWVzc2FnZXNob3c6IGZ1bmN0aW9uIG9uTWVzc2FnZXNob3cobXNnKSB7XG4gICAgICAgIC8v5pi+56S65oi/6Ze05ZCNXG4gICAgICAgIC8v5pi+56S65oi/6Ze05Y+3XG4gICAgICAgIC8v5pi+56S65Lq65pWwXG4gICAgICAgIC8v5pi+56S66L+b5bGA5Lq65pWwXG4gICAgICAgIC8v5pi+56S654mM5bGA5pe26Ze0XG4gICAgICAgIC8v5oyJ6ZKu54q25oCBXG4gICAgfSxcbiAgICAvL+iBiuWkqVxuICAgIG9uTWVzc2FnZWpvaW5CdG46IGZ1bmN0aW9uIG9uTWVzc2FnZWpvaW5CdG4obXNnKSB7fSxcbiAgICAvL+WFpeWxgOeOqeWutuWktOWDj1xuICAgIG9uTWVzc2FnZWhlYWQ6IGZ1bmN0aW9uIG9uTWVzc2FnZWhlYWQobXNnKSB7fSxcbiAgICAvL+i2heaXtuitpuWRilxuICAgIG9uTWVzc2FnZW92ZXJ0aW1lOiBmdW5jdGlvbiBvbk1lc3NhZ2VvdmVydGltZShtc2cpIHt9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBSb29tX3Jvb21XYWl0aW5nQ29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzRmYjM2a2VjalJCWHJXU3M3bG41UzA1JywgJ1Jvb21fcm9vbVdhaXRpbmdTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC80cm9vbS9hMnJvb20tcm9vbVdhaXRpbmcvUm9vbV9yb29tV2FpdGluZ1NjcmlwdC5qc1xuXG4vL+etieW+heeJjOWxgOeVjOmdou+8jOeJjOahjOWKqOeUu+S7peWPiueJjOahjOWIneWni+WMllxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIG9wZW5hdXRvYnV5ID0gZmFsc2U7XG5cbnZhciBjb2xvcmJsdWUgPSBuZXcgY2MuQ29sb3IoMCwgMTEyLCAyNTUpO1xudmFyIGNvbG9yZ3JheSA9IG5ldyBjYy5Db2xvcigxMTEsIDExMSwgMTExKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v5qCH6aKY5Yy6XG4gICAgICAgIHRpdGxlU3ByaXRlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+WGheWuueiDjOaZr1xuICAgICAgICBiYWNrZ3JvdW5kTGF5ZXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIC8v54mM5bGA5L+h5oGv5Yy6XG4gICAgICAgIGdhbWVwcm9maWxlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+S6uuaVsCDmloflrZdcbiAgICAgICAgcGVyc29uY291bnRMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+WFpeWxgOS6uuaVsC/kurrmlbAg5paH5a2XXG4gICAgICAgIHBlcnNvbkxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v54mM5bGA5pe26ZW/IOaWh+Wtl1xuICAgICAgICB0aW1lTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/liIbkuqvmjInpkq5cbiAgICAgICAgc2hhcmVCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v5YiG5LqrIOaWh+Wtl1xuICAgICAgICBzaGFyZUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v54mM5bGA57yW5Y+3XG4gICAgICAgIHJvb21udW1iZXJMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+W8gOWxgOaMiemSrlxuICAgICAgICBzdGFydEJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/lvIDlsYAg5paH5a2XXG4gICAgICAgIHN0YXJ0TGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/nq4vljbPkuIrmoYzmjInpkq5cbiAgICAgICAgam9pbkJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/nq4vljbPkuIrmoYwg5paH5a2XXG4gICAgICAgIGpvaW5MYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+etieW+heeOqeWutuWFpeWxgCDmloflrZdcbiAgICAgICAgd2FpdHBsYXllckxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v6LaF5pe2IOaWh+Wtl1xuICAgICAgICBvdmVydGltZUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v54mM5qGMXG4gICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+iBiuWkqSDlsYJcbiAgICAgICAgY2hhdExheWVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0t5by55Ye65bGC77yM6K6+572u5bim5YWl6K6w5YiG54mMLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgIC8v6K6+572u5bim5YWl6K6w5YiG54mM5bGCXG4gICAgICAgIHNldHNjb3JlTGF5ZXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGF5b3V0XG4gICAgICAgIH0sXG4gICAgICAgIC8v5qCH6aKYIOaWh+Wtl1xuICAgICAgICB0aXRsZUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v6YCA5Ye65oyJ6ZKuXG4gICAgICAgIHF1aXRCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8vc2xpZGVyXG4gICAgICAgIHNsaWRlcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TbGlkZXJcbiAgICAgICAgfSxcbiAgICAgICAgLy9zbGlkZXLog4zmma/mnaFcbiAgICAgICAgc2xpZGVyYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/luKblhaXmlbDph49cbiAgICAgICAgc2NvcmVMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+iuvue9ruW4puWFpeiusOWIhueJjCDmloflrZdcbiAgICAgICAgc2V0dGFrZWluTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy9zbGlkZXLmnIDlsI/lgLxcbiAgICAgICAgbWludGFrZWluTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy9zbGlkZXLmnIDlpKflgLxcbiAgICAgICAgbWF4dGFrZWluTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/lvIDlkK/oh6rliqjkubDlhaUg5paH5a2XXG4gICAgICAgIG9wZW5hdXRvYnV5TGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/lvIDlkK/oh6rliqjkubDlhaUg5oyJ6ZKuXG4gICAgICAgIG9wZW5CdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v6Ieq5Yqo5Lmw5YWl5oyJ6ZKu5byA5YWzXG4gICAgICAgIGNpcmNsZVNwcml0ZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/oh6rliqjkubDlhaXmjInpkq7lvIDlhbPog4zmma9cbiAgICAgICAgb3BlbkJ0bmJnU3ByaXRlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+iHquWKqOS5sOWFpeWxglxuICAgICAgICBhdXRvYnV5c2V0dGluZ0xheWVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxheW91dFxuICAgICAgICB9LFxuICAgICAgICAvL+W9k+aIkeeahOiuoeWIhuadv+WwkeS6ji/nrYnkuo4g5paH5a2XXG4gICAgICAgIHNjb3JlbGVzczFMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+S4quWkp+ebsuazqOaXtlxuICAgICAgICBzY29yZWxlc3MyTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/ns7vnu5/oh6rliqjkuLrmiJHooaXlhYVcbiAgICAgICAgc3VwcGxlbWVudDFMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+S4qmJ1eS1pblxuICAgICAgICBzdXBwbGVtZW50MkxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5YeP5Y+35oyJ6ZKuXG4gICAgICAgIG1pbnVzQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL2J1eS1pbuaVsOmHj1xuICAgICAgICBidXlpbmNvdW50TGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/liqDlpb3mjInpkq5cbiAgICAgICAgYWRkQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL+ehruWumuW4puWFpeaMiemSrlxuICAgICAgICBjb25maXJtdGFrZUJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/noa7lrprluKblhaUg5paH5a2XXG4gICAgICAgIGNvbmZpcm10YWtlTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcblxuICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS3liIbkuqvlsYItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICAgICAgLy/liIbkuqvlsYJcbiAgICAgICAgc2hhcmVMYXllckJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/lvq7kv6HliIbkuqvmjInpkq5cbiAgICAgICAgc2hhcmVWWEJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy9RUeWIhuS6q+aMiemSrlxuICAgICAgICBzaGFyZVFRQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL+W+ruS/oeWIhuS6qyDmloflrZdcbiAgICAgICAgVlhMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL1FR5YiG5LqrIOaWh+Wtl1xuICAgICAgICBRUUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeOqeWutiDoh6rliqjliqjkvZzlsYItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgICAvL+iHquWKqOaTjeS9nOiuvuWumuWxglxuICAgICAgICBhdXRvTGF5b3V0OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxheW91dFxuICAgICAgICB9LFxuICAgICAgICAvL+iHquWKqOW8g+eJjCDlm77niYdcbiAgICAgICAgYXV0b2ZvbGRTcHJpdGU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIC8v6Ieq5Yqo5byD54mMIOaWh+Wtl1xuICAgICAgICBhdXRvZm9sZExhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v6Ieq5Yqo5byD54mMIOaMiemSrlxuICAgICAgICBhdXRvZm9sZEJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/oh6rliqjov4fniYwg5Zu+54mHXG4gICAgICAgIGF1dG9wYXNzU3ByaXRlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+iHquWKqOi/h+eJjCDmloflrZdcbiAgICAgICAgYXV0b3Bhc3NMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+iHquWKqOi/h+eJjCDmjInpkq5cbiAgICAgICAgYXV0b3Bhc3NCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeOqeWutuWxgOmXtOWKqOS9nOWxgi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICBhY3Rpb25MYXlvdXQ6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGF5b3V0XG4gICAgICAgIH0sXG4gICAgICAgIC8vMuWAjVxuICAgICAgICBkb3VibGVjb3VudExhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGRvdWJsZUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGRvdWJsZUJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy8z5YCNXG4gICAgICAgIHRyZWJsZWNvdW50TGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgdHJlYmxlTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgdHJlYmxlQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvLzTlgI1cbiAgICAgICAgZm91cmZvbGRjb3VudExhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGZvdXJmb2xkTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgZm91cmZvbGRCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v6Ieq55Sx5Yqg5rOoXG4gICAgICAgIGZyZWVmaWxsQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBmcmVlZmlsbExhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5byD54mMXG4gICAgICAgIGZvbGRTcHJpdGU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIGZvbGRMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBmb2xkQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL+i/h+eJjFxuICAgICAgICBwYXNzU3ByaXRlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICBwYXNzTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc0J0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MubG9nKFwib25sb2Fk5Yqg6L29XCIpO1xuXG4gICAgICAgIHRoaXMuYXV0b0xheW91dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYWN0aW9uTGF5b3V0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zaGFyZUxheWVyQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hdXRvYnV5c2V0dGluZ0xheWVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy53YWl0cGxheWVyTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm92ZXJ0aW1lTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNldHNjb3JlTGF5ZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJhY2tncm91bmRMYXllci5ub2RlLmNhc2NhZGVPcGFjaXR5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50YWJsZS5ub2RlLnNldExvY2FsWk9yZGVyKDMpO1xuICAgICAgICB0aGlzLnRpdGxlU3ByaXRlLm5vZGUuc2V0TG9jYWxaT3JkZXIoNCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZExheWVyLm5vZGUuc2V0TG9jYWxaT3JkZXIoNCk7XG4gICAgICAgIC8v5bu656uL6L+e5o6lXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH0sXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH0sXG4gICAgLy9zbGlkZXLmu5HliqhcbiAgICBzbGlkZXJjbGljazogZnVuY3Rpb24gc2xpZGVyY2xpY2soKSB7XG4gICAgICAgIGNjLmxvZyhcIjExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExXCIpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2xpZGVyLnByb2dyZXNzICogMTAwO1xuICAgICAgICBjYy5sb2coaW5kZXgpO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuc2xpZGVyYmFja2dyb3VuZC5ub2RlLndpZHRoO1xuICAgICAgICBjYy5sb2cod2lkdGgpO1xuXG4gICAgICAgIC8v5Zub5Liq5L2N572u55qE5oyJ6ZKu5Yqo55S7XG4gICAgICAgIHZhciB0bzBBY3Rpb24gPSBjYy5tb3ZlVG8oMC4xLCBjYy5wKC0yNDAsIDApKTtcbiAgICAgICAgdmFyIHRvMzNBY3Rpb24gPSBjYy5tb3ZlVG8oMC4xLCBjYy5wKC04MCwgMCkpO1xuICAgICAgICB2YXIgdG82N0FjdGlvbiA9IGNjLm1vdmVUbygwLjEsIGNjLnAoODAsIDApKTtcbiAgICAgICAgdmFyIHRvMTAwQWN0aW9uID0gY2MubW92ZVRvKDAuMSwgY2MucCgyNDAsIDApKTtcblxuICAgICAgICB2YXIgaGFuZGxlID0gdGhpcy5zbGlkZXIuaGFuZGxlLm5vZGU7XG5cbiAgICAgICAgLy/mu5HliqjljLrpl7TliKTlrppcbiAgICAgICAgaWYgKGluZGV4IDw9IDApIHtcbiAgICAgICAgICAgIGhhbmRsZS5ydW5BY3Rpb24odG8wQWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IDEwMCkge1xuICAgICAgICAgICAgaGFuZGxlLnJ1bkFjdGlvbih0bzEwMEFjdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiAwICYmIGluZGV4IDw9IDE3KSB7XG4gICAgICAgICAgICBoYW5kbGUucnVuQWN0aW9uKHRvMEFjdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiAxNyAmJiBpbmRleCA8PSA1MCkge1xuICAgICAgICAgICAgaGFuZGxlLnJ1bkFjdGlvbih0bzMzQWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IDUwICYmIGluZGV4IDw9IDgzKSB7XG4gICAgICAgICAgICBoYW5kbGUucnVuQWN0aW9uKHRvNjdBY3Rpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gODMgJiYgaW5kZXggPD0gMTAwKSB7XG4gICAgICAgICAgICBoYW5kbGUucnVuQWN0aW9uKHRvMTAwQWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/liIbkuqvmjInpkq7ngrnlh7tcbiAgICBzaGFyZUJ0bmNsaWNrOiBmdW5jdGlvbiBzaGFyZUJ0bmNsaWNrKCkge1xuICAgICAgICB0aGlzLnNoYXJlTGF5ZXJCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNoYXJlTGF5ZXJCdG4ubm9kZS5zZXRMb2NhbFpPcmRlcig2KTtcbiAgICB9LFxuICAgIC8v54mM5qGM5Yqo55S75Zue6LCDXG4gICAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoZXZlbnQpIHtcbiAgICAgICAgY2MubG9nKFwi54mM5qGM5Yqo55S757uT5p2f5Zue6LCDXCIpO1xuXG4gICAgICAgIHRoaXMuYXV0b0xheW91dC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICAvL+W8gOWxgOaMiemSrueCueWHu1xuICAgIHN0YXJ0QnRuY2xpY2s6IGZ1bmN0aW9uIHN0YXJ0QnRuY2xpY2soKSB7XG4gICAgICAgIGNjLmxvZyhcIuW8gOWxgFwiKTtcbiAgICAgICAgLy/pmpDol4/ml6DlhbPoioLngrlcbiAgICAgICAgdGhpcy5zaGFyZUJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuam9pbkJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVwcm9maWxlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGl0bGVTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB2YXIgdGFibGUgPSB0aGlzLnRhYmxlLm5vZGU7XG5cbiAgICAgICAgLy/ogYrlpKnliqjnlLvlm57osINcbiAgICAgICAgdmFyIGNoYXRmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8v6I635Y+W5qGM5a2Q5Yqo55S75bm25pKt5pS+XG4gICAgICAgICAgICB2YXIgYW5pbUN0cmwgPSB0YWJsZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGFuaW1DdHJsLm9uKCdzdG9wJywgdGhpcy5vblN0b3AsIHRoaXMpO1xuICAgICAgICAgICAgYW5pbUN0cmwucGxheShcInRhYmxlXCIpO1xuICAgICAgICB9LCB0aGlzLCBudWxsKTtcbiAgICAgICAgdmFyIGNoYXRMYXllckFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLm1vdmVUbygxLCBjYy5wKDAsIC0xMDAwKSksIGNoYXRmaW5pc2hlZCk7XG4gICAgICAgIHRoaXMuY2hhdExheWVyLm5vZGUucnVuQWN0aW9uKGNoYXRMYXllckFjdGlvbik7XG4gICAgfSxcbiAgICAvL+eri+WNs+S4iuahjOaMiemSrueCueWHu1xuICAgIGpvaW5CdG5jbGljazogZnVuY3Rpb24gam9pbkJ0bmNsaWNrKCkge1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLnNldHNjb3JlTGF5ZXI7XG4gICAgICAgIGxheWVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGF5ZXIubm9kZS5zZXRMb2NhbFpPcmRlcig1KTtcbiAgICB9LFxuICAgIC8v6YCA5Ye66K6+572u6K6w5YiG54mMbGF5ZXJcbiAgICBxdWl0QnRuY2xpY2s6IGZ1bmN0aW9uIHF1aXRCdG5jbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRzY29yZUxheWVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvL+iHquWKqOS5sOWFpeaMiemSruW8gOWQr1xuICAgIG9wZW5CdG5jbGljazogZnVuY3Rpb24gb3BlbkJ0bmNsaWNrKCkge1xuICAgICAgICBjYy5sb2cob3BlbmF1dG9idXkpO1xuICAgICAgICBjYy5sb2coXCJvcGVuQnRuY2xpY2tcIik7XG4gICAgICAgIHZhciBtb3Zld2lkdGggPSB0aGlzLmNpcmNsZVNwcml0ZS5ub2RlLndpZHRoIC8gMjtcbiAgICAgICAgdmFyIGxlZnRtb3ZlYWN0aW9uID0gY2MubW92ZVRvKDAuMiwgY2MucCgtbW92ZXdpZHRoLCAwKSk7XG4gICAgICAgIHZhciByaWdodG1vdmVhY3Rpb24gPSBjYy5tb3ZlVG8oMC4yLCBjYy5wKG1vdmV3aWR0aCwgMCkpO1xuXG4gICAgICAgIC8vIHZhciBjb2xvcmJsdWUgPSBuZXcgY2MuQ29sb3IoMCwgMTEyLCAyNTUpO1xuICAgICAgICAvLyB2YXIgY29sb3JncmF5ID0gbmV3IGNjLkNvbG9yKDExMSwgMTExLCAxMTEpO1xuXG4gICAgICAgIGlmIChvcGVuYXV0b2J1eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIm9wZW5hdXRvYnV5ID0gXCIgKyBvcGVuYXV0b2J1eSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXV0b2J1eXNldHRpbmdMYXllci5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMub3BlbkJ0bmJnU3ByaXRlLm5vZGUuY29sb3IgPSBjb2xvcmJsdWU7XG4gICAgICAgICAgICB0aGlzLmNpcmNsZVNwcml0ZS5ub2RlLnJ1bkFjdGlvbihyaWdodG1vdmVhY3Rpb24pO1xuXG4gICAgICAgICAgICBjYy5sb2coXCLlj5HprLzlnLDmlrlcIiwgdGhpcy5vcGVuQnRuYmdTcHJpdGUubm9kZS5jb2xvcik7XG4gICAgICAgICAgICBvcGVuYXV0b2J1eSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCJvcGVuYXV0b2J1eSA9IFwiICsgb3BlbmF1dG9idXkpO1xuXG4gICAgICAgICAgICB0aGlzLmF1dG9idXlzZXR0aW5nTGF5ZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5vcGVuQnRuYmdTcHJpdGUubm9kZS5jb2xvciA9IGNvbG9yZ3JheTtcblxuICAgICAgICAgICAgdGhpcy5jaXJjbGVTcHJpdGUubm9kZS5ydW5BY3Rpb24obGVmdG1vdmVhY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBjYy5sb2codGhpcy5vcGVuQnRuYmdTcHJpdGUubm9kZS5jb2xvcik7XG5cbiAgICAgICAgICAgIGNjLmxvZyhcIuWPkemsvOWcsOaWuVwiLCB0aGlzLm9wZW5CdG5iZ1Nwcml0ZS5ub2RlLmNvbG9yKTtcbiAgICAgICAgICAgIG9wZW5hdXRvYnV5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v5YeP5Y+35oyJ6ZKu54K55Ye7XG4gICAgbWludXNCdG5jbGljazogZnVuY3Rpb24gbWludXNCdG5jbGljaygpIHt9LFxuICAgIC8v5Yqg5Y+35oyJ6ZKu54K55Ye7XG4gICAgYWRkQnRuY2xpY2s6IGZ1bmN0aW9uIGFkZEJ0bmNsaWNrKCkge30sXG4gICAgLy/noa7lrprluKblhaXmjInpkq7ngrnlh7tcbiAgICBjb25maXJtdGFrZUJ0bmNsaWNrOiBmdW5jdGlvbiBjb25maXJtdGFrZUJ0bmNsaWNrKCkge30sXG4gICAgLy/pgIDlh7rliIbkuqvpobXpnaJcbiAgICBzaGFyZUxheWVyQnRuY2xpY2s6IGZ1bmN0aW9uIHNoYXJlTGF5ZXJCdG5jbGljaygpIHtcbiAgICAgICAgdGhpcy5zaGFyZUxheWVyQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvL+iHquWKqOW8g+eJjOaMiemSrueCueWHu1xuICAgIGF1dG9mb2xkQnRuY2xpY2s6IGZ1bmN0aW9uIGF1dG9mb2xkQnRuY2xpY2soKSB7XG4gICAgICAgIHRoaXMuYXV0b0xheW91dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYWN0aW9uTGF5b3V0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25MYXlvdXQubm9kZS5zZXRMb2NhbFpPcmRlcig4KTtcbiAgICB9LFxuICAgIC8v6Ieq5Yqo6L+H54mM5oyJ6ZKu54K55Ye7XG4gICAgYXV0b3Bhc3NCdG5jbGljazogZnVuY3Rpb24gYXV0b3Bhc3NCdG5jbGljaygpIHtcbiAgICAgICAgLy8gdGhpcy5hdXRvcGFzc1Nwcml0ZS5zcHJpdGVGcmFtZSA9IDtcblxuICAgIH0sXG4gICAgLy8yWOaMiemSrueCueWHu1xuICAgIGRvdWJsZUJ0bmNsaWNrOiBmdW5jdGlvbiBkb3VibGVCdG5jbGljaygpIHt9LFxuICAgIC8vM1jmjInpkq7ngrnlh7tcbiAgICB0cmVibGVCdG5jbGljazogZnVuY3Rpb24gdHJlYmxlQnRuY2xpY2soKSB7fSxcbiAgICAvLzRY5oyJ6ZKu54K55Ye7XG4gICAgZm91cmZvbGRCdG5jbGljazogZnVuY3Rpb24gZm91cmZvbGRCdG5jbGljaygpIHt9LFxuICAgIC8v6Ieq55Sx5Yqg5rOo5oyJ6ZKu54K55Ye7XG4gICAgZnJlZWZpbGxCdG5jbGljazogZnVuY3Rpb24gZnJlZWZpbGxCdG5jbGljaygpIHt9LFxuICAgIC8v5byD54mM5oyJ6ZKu54K55Ye7XG4gICAgZm9sZEJ0bmNsaWNrOiBmdW5jdGlvbiBmb2xkQnRuY2xpY2soKSB7fSxcbiAgICAvL+i/h+eJjOaMiemSrueCueWHu1xuICAgIHBhc3NCdG5jbGljazogZnVuY3Rpb24gcGFzc0J0bmNsaWNrKCkge31cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2Y4OTIyU01Bb0ZJQktTK1pSWnY4V0ZOJywgJ1Jvb21fcm9vbVdhaXRpbmdWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vYTJyb29tLXJvb21XYWl0aW5nL1Jvb21fcm9vbVdhaXRpbmdWaWV3LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBSb29tX3Jvb21XYWl0aW5nVmlldztcbnZhciByb29tV2FpdGluZ0xheWVyO1xuUm9vbV9yb29tV2FpdGluZ1ZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqXG4gICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGNjLmxvZyhcInJvb21XYWl0aW5nTGF5ZXJcIik7XG4gICAgICAgIC8v5Y+R5LiA5p2h5raI5oGvIOiuqXJvb21XYWl0aW5nTGF5ZXIg5pi+56S6XG4gICAgICAgIHZhciBtc2cxID0gbmV3IE1WQy5GTWVzc2FnZShcInNob3dXYWl0aW5nTGF5ZXJcIiwgXCJyb29tV2FpdGluZ1wiKTtcbiAgICAgICAgbXNnMS5zZW5kKCk7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICAvLyByb29tV2FpdGluZ0xheWVyLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gUm9vbV9yb29tV2FpdGluZ1ZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0MjYwMy9rL2JoRTg3c3BZUkVBQWQ0MScsICdTTkdwYXJ0eVNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9NYWFubmEvU05HcGFydHlTY3JpcHQuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBQOVJvb21EYXRhID0gcmVxdWlyZShcIlA5Um9vbURhdGFcIik7XG52YXIgUDlDcmVhdGVTZXR0aW5ncyA9IHJlcXVpcmUoXCJQOUNyZWF0ZVNldHRpbmdzXCIpO1xuXG52YXIgU2luZ2xlRGVza1BsYXllck51bSA9IFtdO1xudmFyIFNwZWVkdmFsdWUgPSBbXTtcblxudmFyIHNpbmdsZXNlc2twbGF5ZXJudW07XG52YXIgc3BlZWR0eXBlO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHNjcm9sbFZpZXc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xuXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VWaWV3OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLnBhZ2VWaWV3XG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdvbmU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICB2aWV3dHdvOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgdmlld3RocmVlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgcGxheWVyY291bnRTbGlkZXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU2xpZGVyXG5cbiAgICAgICAgfSxcbiAgICAgICAgc3BlZWRTbGlkZXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU2xpZGVyXG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxWaWV3LmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgZ2FtZWRhdGFtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwiR2V0UDlDcmVhdGVTZXR0aW5nc1NOR0Fja1wiLCBcInJvb3RcIik7XG4gICAgICAgIGdhbWVkYXRhbXNnLnNlbmQoKTtcbiAgICB9LFxuICAgIG9uRGVzdG9yeTogZnVuY3Rpb24gb25EZXN0b3J5KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuXG4gICAgLy/pq5jnuqforr7nva5cbiAgICBtb3Jlb3B0aW9uY2FsbDogZnVuY3Rpb24gbW9yZW9wdGlvbmNhbGwoKSB7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZXd0d28uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvQm90dG9tKDAuMSk7XG4gICAgICAgIHRoaXMudmlld3RocmVlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xuICAgIH0sXG4gICAgLy/mlLbotbdcbiAgICBwYWNrdXBjYWxsOiBmdW5jdGlvbiBwYWNrdXBjYWxsKCkge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Ub3AoMC4xKTtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZXd0d28uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlld3RocmVlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDIwLCAzMiwgNzgpO1xuICAgIH0sXG4gICAgLy/liJvlu7pTTkdcbiAgICBTTkdCdXR0b25DbGljazogZnVuY3Rpb24gU05HQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHZhciBtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwiY2xpY2tTTkdCdXR0b25cIiwgXCJjcmVhdGVQYXJ0eVNldFwiKTtcbiAgICAgICAgbXNnLmFyZ3MubmFtZSA9IFwi5Yib5bu6U05H5q+U6LWbXCI7XG4gICAgICAgIG1zZy5zZW5kKCk7XG4gICAgfSxcbiAgICAvL+WIm+W7uk1UVFxuICAgIE1UVEJ1dHRvbkNsaWNrOiBmdW5jdGlvbiBNVFRCdXR0b25DbGljaygpIHtcbiAgICAgICAgdmFyIG1zZyA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJjbGlja01UVEJ1dHRvblwiLCBcImNyZWF0ZVBhcnR5U2V0XCIpO1xuICAgICAgICBtc2cuYXJncy5uYW1lID0gXCLliJvlu7pNVFTmr5TotZtcIjtcbiAgICAgICAgbXNnLnNlbmQoKTtcbiAgICB9LFxuXG4gICAgb25GTWVzc2FnZV9HZXRQOUNyZWF0ZVNldHRpbmdzU05HUmVxOiBmdW5jdGlvbiBvbkZNZXNzYWdlX0dldFA5Q3JlYXRlU2V0dGluZ3NTTkdSZXEobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgICAgICB2YXIgZGF0YSA9IG1zZy5hcmdzO1xuXG4gICAgICAgIC8v5b6q546v6YGN5Y6GUGxheWVyTnVtXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5TaW5nbGVEZXNrUGxheWVyTnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBTaW5nbGVEZXNrUGxheWVyTnVtLnB1c2goZGF0YS5TaW5nbGVEZXNrUGxheWVyTnVtW2ldKTtcbiAgICAgICAgICAgIC8vIOeVjOmdouaYvuekuueJjOWxgOS6uuaVsFxuXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBuZXcgY2MuTm9kZSgpLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBkYXRhLlNpbmdsZURlc2tQbGF5ZXJOdW1baV07XG4gICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgdmFyIHNsaWRlcmxlbmd0aCA9IHRoaXMucGxheWVyY291bnRTbGlkZXIubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoO1xuICAgICAgICAgICAgdmFyIHBvaW50WCA9IC0oc2xpZGVybGVuZ3RoIC8gMik7XG4gICAgICAgICAgICB2YXIgc2xpZGVycG9zaXRpb25YID0gdGhpcy5wbGF5ZXJjb3VudFNsaWRlci5ub2RlLmdldFBvc2l0aW9uWCgpO1xuICAgICAgICAgICAgdmFyIHNsaWRlcnBvc2l0aW9uWSA9IHRoaXMucGxheWVyY291bnRTbGlkZXIubm9kZS5nZXRQb3NpdGlvblkoKTtcbiAgICAgICAgICAgIGxhYmVsLm5vZGUuc2V0UG9zaXRpb24ocG9pbnRYICsgaSAqIChzbGlkZXJsZW5ndGggLyAoZGF0YS5TaW5nbGVEZXNrUGxheWVyTnVtLmxlbmd0aCAtIDEpKSwgc2xpZGVycG9zaXRpb25ZICsgMTApO1xuICAgICAgICAgICAgdGhpcy52aWV3b25lLmFkZENoaWxkKGxhYmVsLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLlNwZWVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBTcGVlZHZhbHVlLnB1c2goZGF0YS5TcGVlZFtpXSk7XG4gICAgICAgICAgICAvLyDnlYzpnaLmmL7npLrniYzlsYDkurrmlbBcblxuICAgICAgICAgICAgdmFyIGxhYmVsID0gbmV3IGNjLk5vZGUoKS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gZGF0YS5TcGVlZFtpXS5TcGVlZE5hbWU7XG4gICAgICAgICAgICBjYy5sb2coXCJzcGVlZC4uLi4uXCIsIGxhYmVsLnN0cmluZyk7XG4gICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgdmFyIHNsaWRlcmxlbmd0aCA9IHRoaXMuc3BlZWRTbGlkZXIubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoO1xuICAgICAgICAgICAgdmFyIHBvaW50WCA9IC0oc2xpZGVybGVuZ3RoIC8gMik7XG4gICAgICAgICAgICB2YXIgc2xpZGVycG9zaXRpb25YID0gdGhpcy5zcGVlZFNsaWRlci5ub2RlLmdldFBvc2l0aW9uWCgpO1xuICAgICAgICAgICAgdmFyIHNsaWRlcnBvc2l0aW9uWSA9IHRoaXMuc3BlZWRTbGlkZXIubm9kZS5nZXRQb3NpdGlvblkoKTtcbiAgICAgICAgICAgIGxhYmVsLm5vZGUuc2V0UG9zaXRpb24ocG9pbnRYICsgaSAqIChzbGlkZXJsZW5ndGggLyAoZGF0YS5TcGVlZC5sZW5ndGggLSAxKSksIHNsaWRlcnBvc2l0aW9uWSArIDEwKTtcbiAgICAgICAgICAgIHRoaXMudmlld29uZS5hZGRDaGlsZChsYWJlbC5ub2RlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxheWVyY291bnRTbGlkZXJjYWxsOiBmdW5jdGlvbiBwbGF5ZXJjb3VudFNsaWRlcmNhbGwoKSB7XG5cbiAgICAgICAgdmFyIHBlcmNlbnQgPSB0aGlzLnBsYXllcmNvdW50U2xpZGVyLnByb2dyZXNzO1xuICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IFNpbmdsZURlc2tQbGF5ZXJOdW0ubGVuZ3RoOyBhKyspIHtcblxuICAgICAgICAgICAgdmFyIHNpbmdsZURlc2tQbGF5ZXJOdW0gPSBTaW5nbGVEZXNrUGxheWVyTnVtW2FdO1xuICAgICAgICAgICAgaWYgKGEgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwZXJjZW50IDwgMSAvICgoU2luZ2xlRGVza1BsYXllck51bS5sZW5ndGggLSAxKSAqIDIpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVzZXNrcGxheWVybnVtID0gc2luZ2xlRGVza1BsYXllck51bTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgoMiAqIChhIC0gMSkgKyAxKSAvICgoU2luZ2xlRGVza1BsYXllck51bS5sZW5ndGggLSAxKSAqIDIpIDwgcGVyY2VudCAmJiBwZXJjZW50IDwgKDIgKiBhICsgMSkgLyAoKFNpbmdsZURlc2tQbGF5ZXJOdW0ubGVuZ3RoIC0gMSkgKiAyKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlc2Vza3BsYXllcm51bSA9IHNpbmdsZURlc2tQbGF5ZXJOdW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy/lrZjlgqjliJvlu7rniYzmoYzkv6Hmga9cbiAgICAgICAgICAgICAgICBQcm9qZWN0LlA5LkRBVEEuUk9PTS5QOU1UVEdhbWVEYXRhLnRhYmxlUGxheWVyQ291bnQgPSB0aGlzLnNpbmdsZXNlc2twbGF5ZXJudW07XG5cbiAgICAgICAgICAgICAgICBjYy5sb2coXCJyZW5zaHVcIiwgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlNVFRHYW1lRGF0YS50YWJsZVBsYXllckNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzcGVlZFNsaWRlcmNhbGw6IGZ1bmN0aW9uIHNwZWVkU2xpZGVyY2FsbCgpIHtcblxuICAgICAgICB2YXIgcGVyY2VudCA9IHRoaXMuc3BlZWRTbGlkZXIucHJvZ3Jlc3M7XG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgU3BlZWR2YWx1ZS5sZW5ndGg7IGErKykge1xuXG4gICAgICAgICAgICB2YXIgc3BlZWQgPSBTcGVlZHZhbHVlW2FdO1xuICAgICAgICAgICAgaWYgKGEgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwZXJjZW50IDwgMSAvICgoU2luZ2xlRGVza1BsYXllck51bS5sZW5ndGggLSAxKSAqIDIpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZHR5cGUgPSBzcGVlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgoMiAqIChhIC0gMSkgKyAxKSAvICgoU2luZ2xlRGVza1BsYXllck51bS5sZW5ndGggLSAxKSAqIDIpIDwgcGVyY2VudCAmJiBwZXJjZW50IDwgKDIgKiBhICsgMSkgLyAoKFNpbmdsZURlc2tQbGF5ZXJOdW0ubGVuZ3RoIC0gMSkgKiAyKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWR0eXBlID0gc3BlZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy/lrZjlgqjliJvlu7rniYzmoYzkv6Hmga9cbiAgICAgICAgICAgICAgICBQcm9qZWN0LlA5LkRBVEEuUk9PTS5QOU1UVEdhbWVEYXRhLnNwZWVkID0gdGhpcy5zcGVlZHR5cGU7XG5cbiAgICAgICAgICAgICAgICBjYy5sb2coXCJyZW5zaHVcIiwgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlNVFRHYW1lRGF0YS5zcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZTViZTYrMlpnOUpocThRSGd2OTh6cDMnLCAnU2V0dGxlbWVudENvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9TZXR0bGVtZW50L1NldHRsZW1lbnRDb250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG52YXIgU2V0dGxlbWVudENvbnRyb2xsZXI7XG5TZXR0bGVtZW50Q29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcblxuICAgICAgICBjYy5sb2coXCJTZXR0bGVtZW50Q29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcIlNldHRsZW1lbnRDb250cm9sbGVyIG9uTGVhdmVOb2RlXCIpO1xuICAgIH0sXG5cbiAgICAvL1RPRE866LSf6LSj5bCGIHZpZXflsYLnmoTkuovku7Yg6L2s5o2i5oiQIOmhtemdouWIh+aNouetieWKqOS9nFxuICAgIG9uRk1lc3NhZ2VfY2xpY2tQYXJ0eUJ1dHRvbjogZnVuY3Rpb24gb25GTWVzc2FnZV9jbGlja1BhcnR5QnV0dG9uKG1zZykge1xuICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIlNoYXJlXCIpO1xuICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuICAgIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFNldHRsZW1lbnRDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYjFkMjdxYTZ3OU01YlZlRlNONGI1SnMnLCAnU2V0dGxlbWVudFNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L1NldHRsZW1lbnQvU2V0dGxlbWVudFNjcmlwdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy/niYzlsYDnu5/orqHmjInpkq5cbiAgICAgICAgbGVmdEJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/miJHnmoTnu5/orqHmjInpkq5cbiAgICAgICAgcmlnaHRCdXR0b246IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v5o6o5Ye655qEWOaMiemSrlxuICAgICAgICBleGl0QnV0dG9uOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL+WIhuS6q+aMiemSruW3plxuICAgICAgICBzaGFyZUJ1dHRvbjE6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v5YiG5Lqr5oyJ6ZKu5Y+zXG4gICAgICAgIHNoYXJlQnV0dG9uMjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgY2xpY2tsZWZ0QnV0dG9uOiBmdW5jdGlvbiBjbGlja2xlZnRCdXR0b24oKSB7XG4gICAgICAgIGNjLmxvZyhcImNsaWNrbGVmdEJ1dHRvblwiKTtcbiAgICB9LFxuICAgIGNsaWNrcmlnaHRCdXR0b246IGZ1bmN0aW9uIGNsaWNrcmlnaHRCdXR0b24oKSB7XG4gICAgICAgIGNjLmxvZyhcImNsaWNrcmlnaHRCdXR0b25cIik7XG4gICAgfSxcbiAgICBjbGlja2V4aXRCdXR0b246IGZ1bmN0aW9uIGNsaWNrZXhpdEJ1dHRvbigpIHtcbiAgICAgICAgY2MubG9nKFwiY2xpY2tleGl0QnV0dG9uXCIpO1xuICAgIH0sXG4gICAgY2xpY2tzaGFyZUJ1dHRvbjE6IGZ1bmN0aW9uIGNsaWNrc2hhcmVCdXR0b24xKCkge1xuICAgICAgICBjYy5sb2coXCJjbGlja3NoYXJlQnV0dG9uMVwiKTtcbiAgICB9LFxuICAgIGNsaWNrc2hhcmVCdXR0b24yOiBmdW5jdGlvbiBjbGlja3NoYXJlQnV0dG9uMigpIHtcbiAgICAgICAgY2MubG9nKFwiY2xpY2tzaGFyZUJ1dHRvbjJcIik7XG4gICAgfVxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2M3MWM0S0QyOWhHdDdyWWY4SDB3d1VtJywgJ1NldHRsZW1lbnRWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvU2V0dGxlbWVudC9TZXR0bGVtZW50Vmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgU2V0dGxlbWVudFZpZXc7XG52YXIgcGxheWVySGVhZExheWVyO1xuU2V0dGxlbWVudFZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG5cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJUZXN0UHJvZmFiL1NldHRsZW1lbnRcIiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5sb2coZXJyKTtcbiAgICAgICAgICAgIHBsYXllckhlYWRMYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHBsYXllckhlYWRMYXllcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBTZXR0bGVtZW50VmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2Y3M2JlRkNDSnBNT296NE9tcGd6K2NyJywgJ1N0cmluZ1V0aWxzJyk7XG4vLyBzY3JpcHRzL0ZXUy9VdGlscy9TdHJpbmdVdGlscy5qc1xuXG52YXIgU3RyaW5nVXRpbHMgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogXCJTdHJpbmdVdGlsc1wiLFxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgLy/ljrvpmaTliY3pnaLnmoTnqbrnmb3lrZfnrKZcbiAgICAgICAgbHRyaW06IGZ1bmN0aW9uIGx0cmltKHNyYykge1xuICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcmMucmVwbGFjZSgvXlxccysvZywgXCJcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvL+WOu+mZpOWQjumdoueahOepuueZveWtl+esplxuICAgICAgICBydHJpbTogZnVuY3Rpb24gcnRyaW0oc3JjKSB7XG4gICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNyYy5yZXBsYWNlKC9cXHMrJC9nLCBcIlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8v5Y676Zmk5YmN6Z2i5ZKM5ZCO6Z2i55qE56m655m95a2X56ymXG4gICAgICAgIHRyaW06IGZ1bmN0aW9uIHRyaW0oc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nVXRpbHMubHRyaW0oU3RyaW5nVXRpbHMucnRyaW0oc3JjKSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8v5qC85byP5YyW5a2X56ym5LiyOiAgXCJ7MH0sezF9LHsyfS4uLlwiLCAuLi5cbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQoKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IGFyZ3VtZW50c1swXSArIFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCJcXFxce1wiICsgKGkgLSAxKSArIFwiXFxcXH1cIiwgXCJnbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LnJlcGxhY2UocmUsIGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy/moLzlvI/ljJblrZfnrKbkuLI6IFwie2tleTF9LHtrZXkyfSx7a2V5M30uLi5cIlxuICAgICAgICBmb3JtYXRFeDogZnVuY3Rpb24gZm9ybWF0RXgodGVtcGxhdGUsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSB0ZW1wbGF0ZSArIFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IGRhdGFba107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiXFxcXHtcIiArIGsgKyBcIlxcXFx9XCIsIFwiZ21cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQucmVwbGFjZShyZSwgdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVXRpbHM7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc3OWQ3ZFlpWUxoQU5ZVmhhS3FkWGtKWicsICdhY2hpZXZlbWVudENvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9hY2hpZXZlbWVudC9hY2hpZXZlbWVudENvbnRyb2xsZXIuanNcblxuLy/miYDojrfmiJDlsLFcbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG52YXIgYWNoaWV2ZW1lbnRDb250cm9sbGVyO1xuYWNoaWV2ZW1lbnRDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkxlYXZlTm9kZVwiKTtcbiAgICB9XG59KTtcbi8vIC8v5YiH5o2i6ZKx5YyF55WM6Z2iXG4vLyBvbkZNZXNzYWdlX3dhbGxldEJ0bmNsaWNrOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBNVkMuRkxvZy5kYXRhKFwi6ZKx5YyF6Lez6L2sXCIsIFwi5o6l5pS25raI5oGvIHswfVwiLCBtc2cpO1xuLy8gICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuXG4vLyAgICAgaWYobXNnKXtcbi8vICAgICAgICAgaWYobXNnLmFyZ3MubmFtZSA9IFwi5YmN5b6A6ZKx5YyF6aG16Z2iXCIpe1xuLy8gICAgICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG4vLyAgICAgICAgICAgICBtc2cuY29tcGxldGUoKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbi8vIG9uRk1lc3NhZ2VfY2xpY2tMb2dpbkJ1dHRvbjogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgaWYoIG1zZy5hcmdzLm5hbWUgPT0gXCLnmbvlvZVcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDliY1cIik7XG4vLyAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibWFpblwiKTtcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWQjlwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9ZWxzZSBpZihtc2cuYXJncy5uYW1lID09IFwi5rOo5YaMXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICAvLyBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIlNoYXJlXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1cblxuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFjaGlldmVtZW50Q29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzgwYWJkditYUUpFVmJYVWgwaWFocFZyJywgJ2FjaGlldmVtZW50U2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvYWNoaWV2ZW1lbnQvYWNoaWV2ZW1lbnRTY3JpcHQuanNcblxuLy/miYDojrfmiJDlsLFcbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIC8v5Yqg6L2955qE5pe25YCZ6KaB5LiO5raI5oGv6Lev55Sx6L+e5o6lXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH0sXG4gICAgLy/plIDmr4FcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy/plIDmr4HnmoTml7blgJnopoHmlq3lvIDov57mjqVcbiAgICAgICAgY2MubG9nKFwi6ZSA5q+B5LqGIOaWreW8gOi/nuaOpVwiKTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZGE1YmVrZ2hQUk1ocURWT2daQWdCNkMnLCAnYWNoaWV2ZW1lbnRWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvYWNoaWV2ZW1lbnQvYWNoaWV2ZW1lbnRWaWV3LmpzXG5cbi8v5omA6I635oiQ5bCxXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIGFjaGlldmVtZW50VmlldztcbmFjaGlldmVtZW50VmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3nu5PnrpflnLrmma9cbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYWNoaWV2ZW1lbnRTY2VuZVwiKTtcblxuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25FbnRlck5vZGVcIik7XG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBhY2hpZXZlbWVudFZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5OTliNEt6SFZwRUNvbGEwU1ovVWN4cScsICdhY3Rpb25MYXlvdXRTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvTGl1anVuaGFvL3Jvb21XYWl0dGluZy9hY3Rpb25MYXlvdXRTY3JpcHQuanNcblxuLy/njqnlrrbmk43kvZxwcmVmYWJcbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLzJYIOWbvueJh1xuICAgICAgICBkb3VibGVTcHJpdGU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIC8vMlgg5paH5a2XXG4gICAgICAgIGRvdWJsZUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8vMlgg5oyJ6ZKuXG4gICAgICAgIGRvdWJsZUJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy8yWCDmlbDlrZdcbiAgICAgICAgZG91YmxlY291bnRMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvLzNYIOWbvueJh1xuICAgICAgICB0cmVibGVTcHJpdGU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIC8vM1gg5paH5a2XXG4gICAgICAgIHRyZWJsZUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8vM1gg5oyJ6ZKuXG4gICAgICAgIHRyZWJsZUJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy8zWCDmlbDlrZdcbiAgICAgICAgdHJlYmxlY291bnRMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvLzRYIOWbvueJh1xuICAgICAgICBmb3VyZm9sZFNwcml0ZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy80WCDmloflrZdcbiAgICAgICAgZm91cmZvbGRMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvLzRYIOaMiemSrlxuICAgICAgICBmb3VyZm9sZEJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy80WCDmlbDlrZdcbiAgICAgICAgZm91cmZvbGRjb3VudExhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v6Ieq55Sx5Yqg5rOoIOWbvueJh1xuICAgICAgICBmcmVlZmlsbFNwcml0ZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/oh6rnlLHliqDms6gg5paH5a2XXG4gICAgICAgIGZyZWVmaWxsTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/oh6rnlLHliqDms6gg5oyJ6ZKuXG4gICAgICAgIGZyZWVmaWxsQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL+W8g+eJjCDlm77niYdcbiAgICAgICAgZm9sZFNwcml0ZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/lvIPniYwg5paH5a2XXG4gICAgICAgIGZvbGRMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+W8g+eJjCDmjInpkq5cbiAgICAgICAgZm9sZEJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcblxuICAgICAgICAvL+i/h+eJjCDlm77niYdcbiAgICAgICAgcGFzc1Nwcml0ZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/ov4fniYwg5paH5a2XXG4gICAgICAgIHBhc3NMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+i/h+eJjCDmjInpkq5cbiAgICAgICAgcGFzc0J0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfSxcbiAgICBvbkRlc3Rvcnk6IGZ1bmN0aW9uIG9uRGVzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfSxcbiAgICAvLzJYIOaMiemSrueCueWHu1xuICAgIGRvdWJsZUJ0bmNsaWNrOiBmdW5jdGlvbiBkb3VibGVCdG5jbGljaygpIHt9LFxuICAgIC8vM1gg5oyJ6ZKu54K55Ye7XG4gICAgdHJlYmxlQnRuY2xpY2s6IGZ1bmN0aW9uIHRyZWJsZUJ0bmNsaWNrKCkge30sXG4gICAgLy80WCDmjInpkq7ngrnlh7tcbiAgICBmb3VyZm9sZEJ0bmNsaWNrOiBmdW5jdGlvbiBmb3VyZm9sZEJ0bmNsaWNrKCkge30sXG4gICAgLy/oh6rnlLHliqDms6gg5oyJ6ZKu54K55Ye7XG4gICAgZnJlZWZpbGxCdG5jbGljazogZnVuY3Rpb24gZnJlZWZpbGxCdG5jbGljaygpIHt9LFxuICAgIC8v5byD54mMIOaMiemSrueCueWHu1xuICAgIGZvbGRCdG5jbGljazogZnVuY3Rpb24gZm9sZEJ0bmNsaWNrKCkge30sXG4gICAgLy/ov4fniYwg5oyJ6ZKu54K55Ye7XG4gICAgcGFzc0J0bmNsaWNrOiBmdW5jdGlvbiBwYXNzQnRuY2xpY2soKSB7fVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzA0ODE4T3ZUZFpHdUlqeEp4em16WGRxJywgJ2Fkc2ZnZ3NnZ2cnKTtcbi8vIHJlc291cmNlcy9zY3JpcHQvYWRzZmdnc2dnZy5qc1xuXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBHYXRlV0FZID0gcmVxdWlyZShcIkZXU19OQVRJVkVfR0FURVdBWVwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJsb2dpblwiKTtcblxuICAgICAgICB9LCAyKTtcbiAgICB9LFxuICAgIG9uRGVzdG9yeTogZnVuY3Rpb24gb25EZXN0b3J5KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuICAgIGNsaWNrRm9yQ3BwVG9KczogZnVuY3Rpb24gY2xpY2tGb3JDcHBUb0pzKCkge30sXG4gICAgY2xpY2tGb3JTZW5kTXNnOiBmdW5jdGlvbiBjbGlja0ZvclNlbmRNc2coKSB7XG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgb2JqLnZlcnNpb24gPSBcIjFcIjtcbiAgICAgICAgb2JqLmFwcGlkID0gXCIxMVwiO1xuICAgICAgICBvYmoubXNnSWQgPSAnMTExJztcbiAgICAgICAgb2JqLnNlcXVlbmNlID0gJzExMTEnO1xuICAgICAgICBvYmoucmV0Y29kZSA9ICcxMTExJztcbiAgICAgICAgb2JqLmV4dHJhID0gXCIxMTExMVwiO1xuICAgICAgICBvYmoucm91dGVyID0gXCIxMTExMTExXCI7XG4gICAgICAgIG9iai50aW1lc3RhbXAgPSBcIjE5MTkxOVwiO1xuICAgICAgICBvYmouYm9keSA9IFwiMTExMTExMTExMTExMTExMVwiO1xuICAgICAgICBvYmoudHlwZSA9IFwiMVwiO1xuXG4gICAgICAgIGpzQ3BwQ29ubmVjdC50ZXN0bG9nKFwi5Y+R6YCB5LqG572R57uc5raI5oGvXCIpO1xuICAgICAgICBqc0NwcENvbm5lY3QuanNUb0NwcChvYmopO1xuICAgIH0sXG4gICAgY2xpY2tGb3JDb25uZWN0OiBmdW5jdGlvbiBjbGlja0ZvckNvbm5lY3QoKSB7fSxcbiAgICBjcHBUT2pzOiBmdW5jdGlvbiBjcHBUT2pzKG1zZykge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IG1zZztcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzdlM2IzN0NPckZMWlpHYUZIQThPNmVIJywgJ2F1dG9MYXlvdXRTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvTGl1anVuaGFvL3Jvb21XYWl0dGluZy9hdXRvTGF5b3V0U2NyaXB0LmpzXG5cbi8v6Ieq5Yqo5pON5L2ccHJlZmFiXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy/oh6rliqjlvIPniYwg5Zu+54mHXG4gICAgICAgIGF1dG9mb2xkU3ByaXRlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+iHquWKqOW8g+eJjCDmloflrZdcbiAgICAgICAgYXV0b2ZvbGRMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+iHquWKqOW8g+eJjCDmjInpkq5cbiAgICAgICAgYXV0b2ZvbGRCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v6Ieq5Yqo6L+H54mMIOWbvueJh1xuICAgICAgICBhdXRvcGFzc1Nwcml0ZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/oh6rliqjov4fniYwg5paH5a2XXG4gICAgICAgIGF1dG9wYXNzTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/oh6rliqjov4fniYwg5oyJ6ZKuXG4gICAgICAgIGF1dG9wYXNzQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIG9uRGVzdG9yeTogZnVuY3Rpb24gb25EZXN0b3J5KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6Ieq5Yqo5byD54mMIOaMiemSrueCueWHu1xuICAgIGF1dG9mb2xkQnRuY2xpY2s6IGZ1bmN0aW9uIGF1dG9mb2xkQnRuY2xpY2soKSB7fSxcbiAgICAvL+iHquWKqOi/h+eJjCDmjInpkq7ngrnlh7tcbiAgICBhdXRvcGFzc0J0bmNsaWNrOiBmdW5jdGlvbiBhdXRvcGFzc0J0bmNsaWNrKCkge31cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkYWZjNVNadzc1SHNMVVZRbUtCV1k2RicsICdiYWNrT2ZteScpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L2JhY2tPZm15LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcbiAgICBiYWNrQnRuOiBmdW5jdGlvbiBiYWNrQnRuKCkge1xuICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIm15XCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJteVNjZW5lXCIpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2IzNzI4MnlTQzVQbjU2RGtGZ2Vud0RsJywgJ2JhY2tncm91bmRMYXllclNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9MaXVqdW5oYW8vcm9vbVdhaXR0aW5nL2JhY2tncm91bmRMYXllclNjcmlwdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMzViNTB1bXdvZEIxSzlOUlFPR2hmazQnLCAnY29udGFjdHNDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvY29udGFjdHMvY29udGFjdHNDb250cm9sbGVyLmpzXG5cbi8v6IGU57O75Lq6XG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIGNvbnRhY3RzQ29udHJvbGxlcjtcbmNvbnRhY3RzQ29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcblxuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25FbnRlck5vZGVcIik7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25MZWF2ZU5vZGVcIik7XG4gICAgfVxufSk7XG4vLyAvL+WIh+aNoumSseWMheeVjOmdolxuLy8gb25GTWVzc2FnZV93YWxsZXRCdG5jbGljazogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgTVZDLkZMb2cuZGF0YShcIumSseWMhei3s+i9rFwiLCBcIuaOpeaUtua2iOaBryB7MH1cIiwgbXNnKTtcbi8vICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIndhbGxldFwiKTtcblxuLy8gICAgIGlmKG1zZyl7XG4vLyAgICAgICAgIGlmKG1zZy5hcmdzLm5hbWUgPSBcIuWJjeW+gOmSseWMhemhtemdolwiKXtcbi8vICAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuLy8gICAgICAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4vLyBvbkZNZXNzYWdlX2NsaWNrTG9naW5CdXR0b246IGZ1bmN0aW9uKG1zZykge1xuLy8gICAgIGlmKCBtc2cuYXJncy5uYW1lID09IFwi55m75b2VXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICBjYy5sb2coXCJnb3RvIG1haW4g5YmNXCIpO1xuLy8gICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIm1haW5cIik7XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDlkI5cIik7XG4vLyAgICAgICAgIC8v5Y+R6YCB5raI5oGv57uZ572R57uc5qih5Z2XXG4vLyAgICAgfWVsc2UgaWYobXNnLmFyZ3MubmFtZSA9PSBcIuazqOWGjFwiKXtcbi8vICAgICAgICAgLy/ov5vlhaXliIbkuqvoioLngrlcbi8vICAgICAgICAgLy8gTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJTaGFyZVwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9XG5cbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWN0c0NvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcwODY5Mi9XTnhKRTA1VlRUc0VxWm0xRycsICdjb250YWN0c1NjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L2NvbnRhY3RzL2NvbnRhY3RzU2NyaXB0LmpzXG5cbi8v6IGU57O75Lq6XG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL+WKoOi9veeahOaXtuWAmeimgeS4jua2iOaBr+i3r+eUsei/nuaOpVxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6ZSA5q+BXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8v6ZSA5q+B55qE5pe25YCZ6KaB5pat5byA6L+e5o6lXG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzgxNzhjTW9zQkZJcTRpcFJFaDBFaWtBJywgJ2NvbnRhY3RzVmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L2NvbnRhY3RzL2NvbnRhY3RzVmlldy5qc1xuXG4vL+iBlOezu+S6ulxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBjb250YWN0c1ZpZXc7XG5jb250YWN0c1ZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8v5Yqg6L2957uT566X5Zy65pmvXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImNvbnRhY3RzU2NlbmVcIik7XG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gY29udGFjdHNWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzBhZGZzZ3JvaEtUcTBCRnlkaVFBR2InLCAnZGVza1NjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tL2Rlc2tTY3JpcHQuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIHJvb21UeXBlID0gY2MuRW51bSh7XG4gICAgTk9ORTogMCxcbiAgICBNVFQ6IDEsXG4gICAgU05HOiAyLFxuICAgIFNURDogM1xufSk7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHJvb21UeXBlOiByb29tVHlwZS5OT05FLFxuICAgICAgICAvL+WlluaxoFxuICAgICAgICBqYWNrcG90OiAwLFxuICAgICAgICAvL3BhbHllcueahOaooeWeiyjlpLTlg4/nrYkpXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOGY5YjQybkRYVk1McXRIWldyY3lDTTEnLCAnZWRpdENvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9lZGl0L2VkaXRDb250cm9sbGVyLmpzXG5cbi8v57yW6L6RXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIGVkaXRDb250cm9sbGVyO1xuZWRpdENvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uTGVhdmVOb2RlXCIpO1xuICAgIH1cbn0pO1xuLy8gLy/liIfmjaLpkrHljIXnlYzpnaJcbi8vIG9uRk1lc3NhZ2Vfd2FsbGV0QnRuY2xpY2s6IGZ1bmN0aW9uKG1zZykge1xuLy8gICAgIE1WQy5GTG9nLmRhdGEoXCLpkrHljIXot7PovaxcIiwgXCLmjqXmlLbmtojmga8gezB9XCIsIG1zZyk7XG4vLyAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG5cbi8vICAgICBpZihtc2cpe1xuLy8gICAgICAgICBpZihtc2cuYXJncy5uYW1lID0gXCLliY3lvoDpkrHljIXpobXpnaJcIil7XG4vLyAgICAgICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIndhbGxldFwiKTtcbi8vICAgICAgICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuLy8gb25GTWVzc2FnZV9jbGlja0xvZ2luQnV0dG9uOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBpZiggbXNnLmFyZ3MubmFtZSA9PSBcIueZu+W9lVwiKXtcbi8vICAgICAgICAgLy/ov5vlhaXliIbkuqvoioLngrlcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWJjVwiKTtcbi8vICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJtYWluXCIpO1xuLy8gICAgICAgICBjYy5sb2coXCJnb3RvIG1haW4g5ZCOXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1lbHNlIGlmKG1zZy5hcmdzLm5hbWUgPT0gXCLms6jlhoxcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIC8vIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwiU2hhcmVcIik7XG4vLyAgICAgICAgIC8v5Y+R6YCB5raI5oGv57uZ572R57uc5qih5Z2XXG4vLyAgICAgfVxuXG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZWRpdENvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxNDI0OWo2c0sxQVJMRjFHTGJucXlVeicsICdlZGl0U2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvZWRpdC9lZGl0U2NyaXB0LmpzXG5cbi8v57yW6L6RXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL+WKoOi9veeahOaXtuWAmeimgeS4jua2iOaBr+i3r+eUsei/nuaOpVxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6ZSA5q+BXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8v6ZSA5q+B55qE5pe25YCZ6KaB5pat5byA6L+e5o6lXG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzNmZDc0bHBxT0pCQlovTVJ3ZUJ5NHBpJywgJ2VkaXRWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvZWRpdC9lZGl0Vmlldy5qc1xuXG4vL+e8lui+kVxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBlZGl0VmlldztcbmVkaXRWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9vee7k+eul+WcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJlZGl0U2NlbmVcIik7XG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBlZGl0VmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzg4Nzc1ZTBIdXBOajZFNVZ1ajl4NEZzJywgJ2dhbWVzdGF0aXN0aWNzQ29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L2dhbWVzdGF0aXN0aWNzL2dhbWVzdGF0aXN0aWNzQ29udHJvbGxlci5qc1xuXG4vL+eJjOWxgOe7n+iuoVxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBnYW1lc3RhdGlzdGljc0NvbnRyb2xsZXI7XG5nYW1lc3RhdGlzdGljc0NvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uTGVhdmVOb2RlXCIpO1xuICAgIH1cbn0pO1xuLy8gLy/liIfmjaLpkrHljIXnlYzpnaJcbi8vIG9uRk1lc3NhZ2Vfd2FsbGV0QnRuY2xpY2s6IGZ1bmN0aW9uKG1zZykge1xuLy8gICAgIE1WQy5GTG9nLmRhdGEoXCLpkrHljIXot7PovaxcIiwgXCLmjqXmlLbmtojmga8gezB9XCIsIG1zZyk7XG4vLyAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG5cbi8vICAgICBpZihtc2cpe1xuLy8gICAgICAgICBpZihtc2cuYXJncy5uYW1lID0gXCLliY3lvoDpkrHljIXpobXpnaJcIil7XG4vLyAgICAgICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIndhbGxldFwiKTtcbi8vICAgICAgICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuLy8gb25GTWVzc2FnZV9jbGlja0xvZ2luQnV0dG9uOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBpZiggbXNnLmFyZ3MubmFtZSA9PSBcIueZu+W9lVwiKXtcbi8vICAgICAgICAgLy/ov5vlhaXliIbkuqvoioLngrlcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWJjVwiKTtcbi8vICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJtYWluXCIpO1xuLy8gICAgICAgICBjYy5sb2coXCJnb3RvIG1haW4g5ZCOXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1lbHNlIGlmKG1zZy5hcmdzLm5hbWUgPT0gXCLms6jlhoxcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIC8vIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwiU2hhcmVcIik7XG4vLyAgICAgICAgIC8v5Y+R6YCB5raI5oGv57uZ572R57uc5qih5Z2XXG4vLyAgICAgfVxuXG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZXN0YXRpc3RpY3NDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnODI4NDdDQTBQOUxiWkVjcUpYMlZ0QmEnLCAnZ2FtZXN0YXRpc3RpY3NTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9nYW1lc3RhdGlzdGljcy9nYW1lc3RhdGlzdGljc1NjcmlwdC5qc1xuXG4vL+eJjOWxgOe7n+iuoVxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy/liqDovb3nmoTml7blgJnopoHkuI7mtojmga/ot6/nlLHov57mjqVcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfSxcbiAgICAvL+mUgOavgVxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge1xuICAgICAgICAvL+mUgOavgeeahOaXtuWAmeimgeaWreW8gOi/nuaOpVxuICAgICAgICBjYy5sb2coXCLplIDmr4HkuoYg5pat5byA6L+e5o6lXCIpO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2MmI1MzlTMWwxQWZxamFDbFQ4YmphTycsICdnYW1lc3RhdGlzdGljc1ZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9nYW1lc3RhdGlzdGljcy9nYW1lc3RhdGlzdGljc1ZpZXcuanNcblxuLy/niYzlsYDnu5/orqFcbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG52YXIgZ2FtZXN0YXRpc3RpY3NWaWV3O1xuZ2FtZXN0YXRpc3RpY3NWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9vee7k+eul+WcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lc3RhdGlzdGljc1NjZW5lXCIpO1xuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVzdGF0aXN0aWNzVmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2M5OTg0Um53eVpETEk3VGdWbC9WOXU2JywgJ2dqU2NlbmVDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2dqRGlyL2dqU2NlbmVDb250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG52YXIgZ2pTY2VuZUNvbnRyb2xsZXI7XG5nalNjZW5lQ29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcblxuICAgICAgICBjYy5sb2coXCJnalNjZW5lQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcImdqU2NlbmVDb250cm9sbGVyIG9uTGVhdmVOb2RlXCIpO1xuICAgIH0sXG4gICAgb25GTWVzc2FnZV9idXR0b246IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfYnV0dG9uKG1zZykge1xuICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcInRlc3RcIik7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGdqU2NlbmVDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2I0YzRLaGVEcE1VcFcyQk5PNWF5U3onLCAnZ2pTY2VuZVNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9nakRpci9nalNjZW5lU2NyaXB0LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBqaWFydW51bTtcbnZhciBzaGFuZ3podW9udW07XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcHI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIHNQcmVmYWI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGppYXJ1OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBzaGFuZ3podW86IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbFZpZXc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xuICAgICAgICB9LFxuICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgaG9yaXpvbnRhbEJhcjoge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXIsXG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBCYXJOdW06IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgc2VhdE51bTogOSxcbiAgICAgICAgbGVmdFBvc2l0aW9uWDogLTMxMCxcbiAgICAgICAgcmlnaHRQb3NpdGlvblg6IDMxMCxcbiAgICAgICAgdXBQb3NpdGlvblhfc2h1YW5nbDogLTE1MSxcbiAgICAgICAgdXBQb3NpdGlvblhfc2h1YW5ncjogMTUxLFxuICAgICAgICB1cFBvc2l0aW9uWF9kYW46IDAsXG4gICAgICAgIHVwUG9zaXRpb25ZOiA1MjcsXG4gICAgICAgIGRvd25Qb3NpdGlvblg6IDAsXG4gICAgICAgIGRvd25Qb3NpdGlvblk6IC00ODAsXG4gICAgICAgIHVwTWF4UG9zaXRpb246IDMxMCxcbiAgICAgICAgZG93bk1heFBvc2l0aW9uOiAtMTcwLFxuICAgICAgICBsb29rT25OdW06IDAsXG4gICAgICAgIHBsYXlOdW06IDAsXG4gICAgICAgIHVwQmVkVGFibGVNYXg6IDIxNSxcbiAgICAgICAgZG93bkJlZFRhYmxlTWF4OiAxMTVcblxuICAgIH0sXG4gICAgY2xpY2tqaWFydTogZnVuY3Rpb24gY2xpY2tqaWFydSgpIHtcbiAgICAgICAgamlhcnVudW0rKztcbiAgICAgICAgdGhpcy5zZXRMb29rT24oKTtcbiAgICAgICAgY2MubG9nKHRoaXMuc2Nyb2xsVmlldy5jb250ZW50KTtcbiAgICB9LFxuICAgIGNsaWNrc2hhbmd6aHVvOiBmdW5jdGlvbiBjbGlja3NoYW5nemh1bygpIHtcbiAgICAgICAgaWYgKGppYXJ1bnVtID4gMCkge1xuICAgICAgICAgICAgamlhcnVudW0tLTtcbiAgICAgICAgICAgIHNoYW5nemh1b251bSsrO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvZyhcImNsaWNrc2hhbmd6aHVvXCIpO1xuICAgIH0sXG4gICAgc2V0TG9va09uOiBmdW5jdGlvbiBzZXRMb29rT24oKSB7XG4gICAgICAgIHZhciBoZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNQcmVmYWIpO1xuICAgICAgICBoZXIuc2V0UG9zaXRpb25ZKDApO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChoZXIpO1xuICAgIH0sXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG5cbiAgICAgICAgdmFyIGR0ID0gMTU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZHQgLT0gMC4xO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUHJvZ3Jlc3NCYXIodGhpcy5ob3Jpem9udGFsQmFyLCBkdCk7XG4gICAgICAgIH0sIDAuMSwgMTQwKTtcblxuICAgICAgICB0aGlzLl9waW5ncG9uZyA9IHRydWU7XG4gICAgICAgIHZhciBzID0gY2MuZGlyZWN0b3IuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgY2MubG9nKHMpO1xuICAgICAgICBqaWFydW51bSA9IHRoaXMubG9va09uTnVtO1xuICAgICAgICBzaGFuZ3podW9udW0gPSB0aGlzLnBsYXlOdW07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhbmd6aHVvbnVtOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zUHJlZmFiKTtcbiAgICAgICAgICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgICAgICAgICAvLyDkuLrmmJ/mmJ/orr7nva7kuIDkuKrpmo/mnLrkvY3nva5cbiAgICAgICAgICAgIGNjLmxvZyhpKTtcbiAgICAgICAgICAgIGNjLmxvZyh0aGlzLnNldEJlZFRhYmxlKGkpKTtcbiAgICAgICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5zZXRCZWRUYWJsZShpKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXdTZWF0KCk7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICAvLyB2YXIgcHJvID0gQ0NQcm9ncmVzc1RpbWVyLmFyZ3NjcmVhdGUodGhpcy5zcHIpO1xuICAgICAgICAvLyAgICAgcHJvLnNldFR5cGUoa0NDUHJvZ3Jlc3NUaW1lclR5cGVSYWRpYWwpO1xuICAgICAgICAvLyAgICAgcHJvLnNldFBlcmNlbnRhZ2UoMCk7XG4gICAgfSxcbiAgICBvbkRlc3Rvcnk6IGZ1bmN0aW9uIG9uRGVzdG9yeSgpIHtcblxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuICAgIG5ld1NlYXQ6IGZ1bmN0aW9uIG5ld1NlYXQoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWF0TnVtOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zUHJlZmFiKTtcbiAgICAgICAgICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgICAgICAgICAvLyDkuLrmmJ/mmJ/orr7nva7kuIDkuKrpmo/mnLrkvY3nva5cbiAgICAgICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5zZXRTZWF0UG9zaXRpb24oaSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIC8vIOWwhiBHYW1lIOe7hOS7tueahOWunuS+i+S8oOWFpeaYn+aYn+e7hOS7tlxuICAgICAgICAvLyBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xuICAgIH0sXG4gICAgc2V0U2VhdFBvc2l0aW9uOiBmdW5jdGlvbiBzZXRTZWF0UG9zaXRpb24oaSkge1xuICAgICAgICB2YXIgcFggPSAwO1xuICAgICAgICB2YXIgcFkgPSAwO1xuICAgICAgICBpZiAodGhpcy5zZWF0TnVtICUgMiA9PSAwKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLnrKzkuIDkuKpcIik7XG4gICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnNlYXROdW0gLyAyIHx8IGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHBYID0gdGhpcy5kb3duUG9zaXRpb25YO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwWSA9IHRoaXMuZG93blBvc2l0aW9uWTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwWSA9IHRoaXMudXBQb3NpdGlvblk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCAmJiBpIDwgdGhpcy5zZWF0TnVtIC8gMikge1xuICAgICAgICAgICAgICAgIHBYID0gdGhpcy5yaWdodFBvc2l0aW9uWDtcbiAgICAgICAgICAgICAgICBwWSA9ICh0aGlzLnVwTWF4UG9zaXRpb24gLSB0aGlzLmRvd25NYXhQb3NpdGlvbikgLyAodGhpcy5zZWF0TnVtIC8gMikgKiBpICsgdGhpcy5kb3duTWF4UG9zaXRpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBYID0gdGhpcy5sZWZ0UG9zaXRpb25YO1xuICAgICAgICAgICAgICAgIHBZID0gKHRoaXMudXBNYXhQb3NpdGlvbiAtIHRoaXMuZG93bk1heFBvc2l0aW9uKSAvICh0aGlzLnNlYXROdW0gLyAyKSAqICh0aGlzLnNlYXROdW0gLSBpKSArIHRoaXMuZG93bk1heFBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhdE51bSAlIDIgPT0gMSkge1xuICAgICAgICAgICAgY2MubG9nKFwi56ys5LqM5LiqXCIpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcImk9MFwiKTtcbiAgICAgICAgICAgICAgICBwWCA9IHRoaXMuZG93blBvc2l0aW9uWDtcbiAgICAgICAgICAgICAgICBwWSA9IHRoaXMuZG93blBvc2l0aW9uWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IHRoaXMuc2VhdE51bSAvIDIgKyAxICYmIGkgPiB0aGlzLnNlYXROdW0gLyAyIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgdGhpcy5zZWF0TnVtIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBwWCA9IHRoaXMudXBQb3NpdGlvblhfc2h1YW5ncjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwWCA9IHRoaXMudXBQb3NpdGlvblhfc2h1YW5nbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcFkgPSB0aGlzLnVwUG9zaXRpb25ZO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCAmJiBpIDwgdGhpcy5zZWF0TnVtIC8gMiAtIDEpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJpPXp1b1wiKTtcbiAgICAgICAgICAgICAgICBwWCA9IHRoaXMucmlnaHRQb3NpdGlvblg7XG4gICAgICAgICAgICAgICAgcFkgPSAodGhpcy51cE1heFBvc2l0aW9uIC0gdGhpcy5kb3duTWF4UG9zaXRpb24pIC8gKHRoaXMuc2VhdE51bSAvIDIpICogaSArIHRoaXMuZG93bk1heFBvc2l0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJpPXlvdVwiKTtcbiAgICAgICAgICAgICAgICBwWCA9IHRoaXMubGVmdFBvc2l0aW9uWDtcbiAgICAgICAgICAgICAgICBwWSA9ICh0aGlzLnVwTWF4UG9zaXRpb24gLSB0aGlzLmRvd25NYXhQb3NpdGlvbikgLyAodGhpcy5zZWF0TnVtIC8gMikgKiAodGhpcy5zZWF0TnVtIC0gaSkgKyB0aGlzLmRvd25NYXhQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjYy5sb2coXCJ4XCIscFgpO1xuICAgICAgICAvLyBjYy5sb2coXCJ5XCIscFkpO1xuICAgICAgICByZXR1cm4gY2MucChwWCwgcFkpO1xuICAgIH0sXG4gICAgc2V0QmVkVGFibGU6IGZ1bmN0aW9uIHNldEJlZFRhYmxlKGkpIHtcbiAgICAgICAgdmFyIHdpblNpemVYID0gY2MuZGlyZWN0b3IuZ2V0VmlzaWJsZVNpemUoKS53aWR0aDtcbiAgICAgICAgdmFyIHdpblNpemVZID0gY2MuZGlyZWN0b3IuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQ7XG4gICAgICAgIHZhciBCZWRUYWJsZVhEID0gd2luU2l6ZVggLyA4O1xuICAgICAgICB2YXIgQmVkVGFibGVYUyA9IHdpblNpemVYIC8gOTtcblxuICAgICAgICB2YXIgcFggPSAwO1xuICAgICAgICB2YXIgcFkgPSAwO1xuICAgICAgICBpZiAoc2hhbmd6aHVvbnVtICUgMiA9PSAwKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNoYW5nemh1b251bSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcFggPSAtQmVkVGFibGVYRCAvIDIgKyBCZWRUYWJsZVhEICogaTtcbiAgICAgICAgICAgICAgICAgICAgcFkgPSB0aGlzLnNldFkoMiwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgcFggPSAtQmVkVGFibGVYRCAqIDMgLyAyICsgQmVkVGFibGVYRCAqIGk7XG4gICAgICAgICAgICAgICAgICAgIHBZID0gdGhpcy5zZXRZKDQsIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHBYID0gLUJlZFRhYmxlWEQgKiA1IC8gMiArIEJlZFRhYmxlWEQgKiBpO1xuICAgICAgICAgICAgICAgICAgICBwWSA9IHRoaXMuc2V0WSg2LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICBwWCA9IC1CZWRUYWJsZVhEICogNyAvIDIgKyBCZWRUYWJsZVhEICogaTtcbiAgICAgICAgICAgICAgICAgICAgcFkgPSB0aGlzLnNldFkoOCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChzaGFuZ3podW9udW0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHBYID0gQmVkVGFibGVYUyAqIGk7XG4gICAgICAgICAgICAgICAgICAgIHBZID0gdGhpcy5zZXRZKDEsIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHBYID0gLUJlZFRhYmxlWFMgKiAzIC8gMiArIEJlZFRhYmxlWFMgKiBpO1xuICAgICAgICAgICAgICAgICAgICBwWSA9IHRoaXMuc2V0WSgzLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBwWCA9IC1CZWRUYWJsZVhTICogNSAvIDIgKyBCZWRUYWJsZVhTICogaTtcbiAgICAgICAgICAgICAgICAgICAgcFkgPSB0aGlzLnNldFkoNSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgcFggPSAtQmVkVGFibGVYUyAqIDcgLyAyICsgQmVkVGFibGVYUyAqIGk7XG4gICAgICAgICAgICAgICAgICAgIHBZID0gdGhpcy5zZXRZKDcsIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIHBYID0gLUJlZFRhYmxlWFMgKiA5IC8gMiArIEJlZFRhYmxlWFMgKiBpO1xuICAgICAgICAgICAgICAgICAgICBwWSA9IHRoaXMuc2V0WSg5LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNjLnAocFgsIHBZKTtcbiAgICB9LFxuICAgIGNsaWNrc2lnblVwQnV0dG9uOiBmdW5jdGlvbiBjbGlja3NpZ25VcEJ1dHRvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJNVFRTTkdjbGlja3NpZ25VcEJ1dHRvblwiLCBcInJvb21cIik7XG4gICAgICAgIG1zZy5hcmdzLm5hbWUgPSBcIk1UVFNOR2NsaWNrc2lnblVwQnV0dG9u6L+b5YWl5YCS6K6h5pe2XCI7XG4gICAgICAgIG1zZy5zZW5kKCk7XG4gICAgICAgIGNjLmxvZyhcImNsaWNrc2lnblVwQnV0dG9uXCIpO1xuICAgIH0sXG5cbiAgICBzZXRZOiBmdW5jdGlvbiBzZXRZKG51bSwgaSkge1xuICAgICAgICB2YXIgQmVkVGFibGVZID0gMjA7XG4gICAgICAgIHZhciB1cF9tYXhIID0gMTE1O1xuICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgIHZhciBZID0gbmV3IEFycmF5KCk7XG4gICAgICAgIFlbMF0gPSB1cF9tYXhIICsgQmVkVGFibGVZICogMDtcbiAgICAgICAgWVsxXSA9IHVwX21heEggKyBCZWRUYWJsZVkgKiAxIC0gMTA7XG4gICAgICAgIFlbMl0gPSB1cF9tYXhIICsgQmVkVGFibGVZICogMiAtIDE1O1xuICAgICAgICBZWzNdID0gdXBfbWF4SCArIEJlZFRhYmxlWSAqIDMgLSAxMDtcbiAgICAgICAgWVs0XSA9IHVwX21heEggKyBCZWRUYWJsZVkgKiA0O1xuICAgICAgICAvLyBmb3IodmFyIGogPSAwIDsgaiA8NSA7aisrKXtcbiAgICAgICAgLy8gICAgICAgICBZW2pdPXVwX21heEgrQmVkVGFibGVZKmo7XG4gICAgICAgIC8vIH1cbiAgICAgICAgc3dpdGNoIChudW0pIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB5ID0gWVswXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB5ID0gWVsxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBZWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBZWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwIHx8IGkgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICB5ID0gWVsyXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB5ID0gWVsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCB8fCBpID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IFlbMl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09IDEgfHwgaSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBZWzFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBZWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwIHx8IGkgPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICB5ID0gWVszXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMSB8fCBpID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IFlbMl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IFlbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGlmIChpID09IDAgfHwgaSA9PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBZWzNdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSAxIHx8IGkgPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICB5ID0gWVsyXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMiB8fCBpID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IFlbMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IFlbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGlmIChpID09IDAgfHwgaSA9PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBZWzRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSAxIHx8IGkgPT0gNikge1xuICAgICAgICAgICAgICAgICAgICB5ID0gWVszXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMiB8fCBpID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IFlbMl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IFlbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCB8fCBpID09IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IFlbNF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09IDEgfHwgaSA9PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBZWzNdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSAyIHx8IGkgPT0gNikge1xuICAgICAgICAgICAgICAgICAgICB5ID0gWVsyXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMyB8fCBpID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKG51bSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBZWzFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBZWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBjYy5sb2coeSk7XG4gICAgICAgIHJldHVybiB5O1xuICAgIH0sXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICAvL3RoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKHRoaXMuaG9yaXpvbnRhbEJhciwgZHQpO1xuICAgIH0sXG4gICAgX3VwZGF0ZVByb2dyZXNzQmFyOiBmdW5jdGlvbiBfdXBkYXRlUHJvZ3Jlc3NCYXIocHJvZ3Jlc3NCYXIsIGR0KSB7XG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHByb2dyZXNzQmFyLnByb2dyZXNzO1xuICAgICAgICAvL3ZhciBwcm9ncmVzcyA9IDE7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDEuMCAmJiB0aGlzLl9waW5ncG9uZykge1xuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MgKz0gZHQgKiB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gMC4wMDcxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MgLT0gZHQgKiB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgcHJvZ3Jlc3MgLT0gMC4wMDcxO1xuICAgICAgICAgICAgdGhpcy5fcGluZ3BvbmcgPSBwcm9ncmVzcyA8PSAwO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvZyhwcm9ncmVzcyk7XG4gICAgICAgIGlmIChwcm9ncmVzcykge31cbiAgICAgICAgLy8gdGhpcy5CYXJOdW0uc3RyaW5nPXBhcnNlSW50KHByb2dyZXNzKjEwKTtcbiAgICAgICAgdGhpcy5CYXJOdW0uc3RyaW5nID0gcGFyc2VJbnQoZHQpO1xuICAgICAgICBwcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZTdiYjYyUlVkWlBXN1N5UmEwMFRtdzknLCAnZ2pTY2VuZVZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvZ2pEaXIvZ2pTY2VuZVZpZXcuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIGdqU2NlbmVWaWV3O1xudmFyIHBsYXllckhlYWRMYXllcjtcbmdqU2NlbmVWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9vee7k+eul+WcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnalNjZW5lXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuXG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiVGVzdFByb2ZhYi9wbGF5ZXJIZWFkTGF5ZXJcIiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5sb2coZXJyKTtcbiAgICAgICAgICAgIHBsYXllckhlYWRMYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHBsYXllckhlYWRMYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tU2NlbmVcIik7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGdqU2NlbmVWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOWZlYjBIRVp2OUlOSnN5UlVYbTRnV3AnLCAnaW52aXRhdGlvbmNvZGVDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvaW52aXRhdGlvbmNvZGUvaW52aXRhdGlvbmNvZGVDb250cm9sbGVyLmpzXG5cbi8v6YKA6K+356CBXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIGludml0YXRpb25jb2RlQ29udHJvbGxlcjtcbmludml0YXRpb25jb2RlQ29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcblxuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25FbnRlck5vZGVcIik7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25MZWF2ZU5vZGVcIik7XG4gICAgfVxufSk7XG4vLyAvL+WIh+aNoumSseWMheeVjOmdolxuLy8gb25GTWVzc2FnZV93YWxsZXRCdG5jbGljazogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgTVZDLkZMb2cuZGF0YShcIumSseWMhei3s+i9rFwiLCBcIuaOpeaUtua2iOaBryB7MH1cIiwgbXNnKTtcbi8vICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIndhbGxldFwiKTtcblxuLy8gICAgIGlmKG1zZyl7XG4vLyAgICAgICAgIGlmKG1zZy5hcmdzLm5hbWUgPSBcIuWJjeW+gOmSseWMhemhtemdolwiKXtcbi8vICAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuLy8gICAgICAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4vLyBvbkZNZXNzYWdlX2NsaWNrTG9naW5CdXR0b246IGZ1bmN0aW9uKG1zZykge1xuLy8gICAgIGlmKCBtc2cuYXJncy5uYW1lID09IFwi55m75b2VXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICBjYy5sb2coXCJnb3RvIG1haW4g5YmNXCIpO1xuLy8gICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIm1haW5cIik7XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDlkI5cIik7XG4vLyAgICAgICAgIC8v5Y+R6YCB5raI5oGv57uZ572R57uc5qih5Z2XXG4vLyAgICAgfWVsc2UgaWYobXNnLmFyZ3MubmFtZSA9PSBcIuazqOWGjFwiKXtcbi8vICAgICAgICAgLy/ov5vlhaXliIbkuqvoioLngrlcbi8vICAgICAgICAgLy8gTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJTaGFyZVwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9XG5cbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZpdGF0aW9uY29kZUNvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0NjJhNFlQeUg5RUZLQTI3cEIrTWRCOCcsICdpbnZpdGF0aW9uY29kZVNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L2ludml0YXRpb25jb2RlL2ludml0YXRpb25jb2RlU2NyaXB0LmpzXG5cbi8v6YKA6K+356CBXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL+WKoOi9veeahOaXtuWAmeimgeS4jua2iOaBr+i3r+eUsei/nuaOpVxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6ZSA5q+BXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8v6ZSA5q+B55qE5pe25YCZ6KaB5pat5byA6L+e5o6lXG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2JlOTU0SnhNemhCREpLWE50ZFpPWWIzJywgJ2ludml0YXRpb25jb2RlVmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L2ludml0YXRpb25jb2RlL2ludml0YXRpb25jb2RlVmlldy5qc1xuXG4vL+mCgOivt+eggVxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBpbnZpdGF0aW9uY29kZVZpZXc7XG5pbnZpdGF0aW9uY29kZVZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8v5Yqg6L2957uT566X5Zy65pmvXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImludml0YXRpb25jb2RlU2NlbmVcIik7XG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gaW52aXRhdGlvbmNvZGVWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZTNhODl3SXM2VkxJTHNPUkRQdjJ4VGInLCAnam9pbkdhbWVMb2FkaW5nTGF5ZXJTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMmpvaW5QYXJ0eS8xcGFydHlfbG9hZGluZ1BhcnR5L2pvaW5HYW1lTG9hZGluZ0xheWVyU2NyaXB0LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8v5YGH6KOF5Y+R6YCB6L+b5YWl5ZOq56eN54mM5qGM55qE5raI5oGvXG4gICAgICAgICAgICAvL+ebruWJjemcgOimgeaJi+WKqOaUuVxuICAgICAgICAgICAgdmFyIG1zZzEgPSBuZXcgTVZDLkZNZXNzYWdlKFwiam9pblBhcnR5SW5mb1JlcVwiLCBcIk5ldFwiKTtcbiAgICAgICAgICAgIG1zZzEuYXJncy50eXBlID0gXCJNVFRcIjtcblxuICAgICAgICAgICAgbXNnMS5zZW5kKCk7XG4gICAgICAgIH0sIDQpO1xuICAgIH0sXG4gICAgb25EZXN0b3J5OiBmdW5jdGlvbiBvbkRlc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlMjkyN2pyaUlKRUlaLzJUZklDRFRFWScsICdsb2dpblNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L0xvZ2luL2xvZ2luU2NyaXB0LmpzXG5cbi8v5b+F6aG76KaB5Yqg6L296L+Z5Liq5qih5Z2XXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc2V0VXBMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBzZXRQaG9uZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBhc3NXb3JkOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3hcbiAgICAgICAgfSxcbiAgICAgICAgbG9naW5CdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIGxvZ2luQnRuX2xhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RCdG5fbGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgbW92ZV9ib3g6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIGthaWd1YW46IHRydWVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBiZ2doID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGg7XG4gICAgICAgIGNjLmxvZyhiZ2doKTtcbiAgICAgICAgLy/liqDovb3nmoTml7blgJnopoHkuI7mtojmga/ot6/nlLHov57mjqVcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfSxcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy/plIDmr4HnmoTml7blgJnopoHmlq3lvIDov57mjqVcbiAgICAgICAgY2MubG9nKFwi6ZSA5q+B5LqGIOaWreW8gOi/nuaOpVwiKTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfSxcblxuICAgIGNsaWNrVXA6IGZ1bmN0aW9uIGNsaWNrVXAoKSB7XG4gICAgICAgIHZhciBtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwiY2xpY2tMb2dpbkJ1dHRvblwiLCBcIm1haW5cIik7XG4gICAgICAgIGlmICh0aGlzLnNldFVwTGFiZWwuc3RyaW5nID09IFwi5rOo5YaMXCIpIHtcbiAgICAgICAgICAgIC8vIG1zZy5hcmdzLm5hbWUgPSBcIuazqOWGjFwiO1xuICAgICAgICAgICAgY2MubG9nKFwi5rOo5YaMXCIpO1xuICAgICAgICAgICAgLy8gbXNnLnNlbmQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNldFVwTGFiZWwuc3RyaW5nID09IFwi55m75b2VXCIpIHtcbiAgICAgICAgICAgICAgICBtc2cuYXJncy5uYW1lID0gXCLnmbvlvZVcIjtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLnmbvlvZVcIik7XG4gICAgICAgICAgICAgICAgbXNnLnNlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICB9LFxuICAgIGNsaWNrRG93bjogZnVuY3Rpb24gY2xpY2tEb3duKCkge1xuICAgICAgICB2YXIgdGltZSA9IDAuMztcbiAgICAgICAgdmFyIHdpblNpemVXID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGg7XG4gICAgICAgIGlmICh0aGlzLmthaWd1YW4pIHtcbiAgICAgICAgICAgIHZhciBtb3ZlTGVmdCA9IGNjLm1vdmVCeSh0aW1lLCBjYy5wKC13aW5TaXplVywgMCkpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlX2JveC5ub2RlLnJ1bkFjdGlvbihtb3ZlTGVmdCk7XG4gICAgICAgICAgICB0aGlzLnNldFVwTGFiZWwuc3RyaW5nID0gXCLms6jlhoxcIjtcbiAgICAgICAgICAgIHRoaXMubG9naW5CdG5fbGFiZWwuc3RyaW5nID0gXCLms6jlhoxcIjtcbiAgICAgICAgICAgIHRoaXMucG9zdEJ0bl9sYWJlbC5zdHJpbmcgPSBcIueZu+W9lVwiO1xuICAgICAgICAgICAgdGhpcy5rYWlndWFuID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFVwTGFiZWwuc3RyaW5nID0gXCLnmbvlvZVcIjtcbiAgICAgICAgICAgIHRoaXMubG9naW5CdG5fbGFiZWwuc3RyaW5nID0gXCLnmbvlvZVcIjtcbiAgICAgICAgICAgIHRoaXMucG9zdEJ0bl9sYWJlbC5zdHJpbmcgPSBcIuazqOWGjFwiO1xuICAgICAgICAgICAgdmFyIG1vdmVMZWZ0ID0gY2MubW92ZUJ5KHRpbWUsIGNjLnAod2luU2l6ZVcsIDApKTtcbiAgICAgICAgICAgIHRoaXMubW92ZV9ib3gubm9kZS5ydW5BY3Rpb24obW92ZUxlZnQpO1xuICAgICAgICAgICAgdGhpcy5rYWlndWFuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25GTWVzc2FnZV9jbGlja0xvZ2luQnV0dG9uOiBmdW5jdGlvbiBvbkZNZXNzYWdlX2NsaWNrTG9naW5CdXR0b24obXNnKSB7fVxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2U4MzkzcmhmSUpLSGEzczAzSWlTZGlSJywgJ21haW5TY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9tYWluL21haW5TY3JpcHQuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhZGRQYXJ0eUJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgc2V0UGFydHlCdXR0b246IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIE15OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH0sXG4gICAgb25EZXN0b3J5OiBmdW5jdGlvbiBvbkRlc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH0sXG4gICAgY2xpY2thZGRQYXJ0eUJ1dHRvbjogZnVuY3Rpb24gY2xpY2thZGRQYXJ0eUJ1dHRvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJjbGlja2FkZFBhcnR5QnV0dG9uXCIsIFwibWFpblwiKTtcbiAgICAgICAgbXNnLmFyZ3MubmFtZSA9IFwi6L+b5YWl54mM5qGMXCI7XG4gICAgICAgIG1zZy5zZW5kKCk7XG4gICAgICAgIGNjLmxvZyhcImNsaWNrYWRkUGFydHlCdXR0b25cIik7XG4gICAgfSxcbiAgICBjbGlja3NldFBhcnR5QnV0dG9uOiBmdW5jdGlvbiBjbGlja3NldFBhcnR5QnV0dG9uKCkge1xuICAgICAgICB2YXIgbXNnID0gbmV3IE1WQy5GTWVzc2FnZShcImNsaWNrc2V0UGFydHlCdXR0b25cIiwgXCJtYWluXCIpO1xuICAgICAgICBtc2cuYXJncy5uYW1lID0gXCLov5vlhaXniYzlsYDorr7nva5cIjtcbiAgICAgICAgbXNnLnNlbmQoKTtcbiAgICAgICAgY2MubG9nKFwiY2xpY2tzZXRQYXJ0eUJ1dHRvblwiKTtcbiAgICB9LFxuICAgIGNsaWNrTXk6IGZ1bmN0aW9uIGNsaWNrTXkoKSB7XG4gICAgICAgIHZhciBtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwiY2xpY2tNeVwiLCBcIm1haW5cIik7XG4gICAgICAgIG1zZy5hcmdzLm5hbWUgPSBcIuaIkeeahFwiO1xuICAgICAgICBtc2cuc2VuZCgpO1xuICAgICAgICBjYy5sb2coXCJjbGlja015XCIpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzk2ODBlNjAyUFZQc0x6YXE3YVZCbGplJywgJ21hbGxDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvbWFsbC9tYWxsQ29udHJvbGxlci5qc1xuXG4vL+WVhuWfjlxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBtYWxsQ29udHJvbGxlcjtcbm1hbGxDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkxlYXZlTm9kZVwiKTtcbiAgICB9XG59KTtcbi8vIC8v5YiH5o2i6ZKx5YyF55WM6Z2iXG4vLyBvbkZNZXNzYWdlX3dhbGxldEJ0bmNsaWNrOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBNVkMuRkxvZy5kYXRhKFwi6ZKx5YyF6Lez6L2sXCIsIFwi5o6l5pS25raI5oGvIHswfVwiLCBtc2cpO1xuLy8gICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuXG4vLyAgICAgaWYobXNnKXtcbi8vICAgICAgICAgaWYobXNnLmFyZ3MubmFtZSA9IFwi5YmN5b6A6ZKx5YyF6aG16Z2iXCIpe1xuLy8gICAgICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG4vLyAgICAgICAgICAgICBtc2cuY29tcGxldGUoKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbi8vIG9uRk1lc3NhZ2VfY2xpY2tMb2dpbkJ1dHRvbjogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgaWYoIG1zZy5hcmdzLm5hbWUgPT0gXCLnmbvlvZVcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDliY1cIik7XG4vLyAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibWFpblwiKTtcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWQjlwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9ZWxzZSBpZihtc2cuYXJncy5uYW1lID09IFwi5rOo5YaMXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICAvLyBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIlNoYXJlXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1cblxuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hbGxDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMjI2MTdjbjJ5OUxON2I1dlVoTEhPT3onLCAnbWFsbFNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L21hbGwvbWFsbFNjcmlwdC5qc1xuXG4vL+WVhuWfjlxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy/liqDovb3nmoTml7blgJnopoHkuI7mtojmga/ot6/nlLHov57mjqVcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfSxcbiAgICAvL+mUgOavgVxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge1xuICAgICAgICAvL+mUgOavgeeahOaXtuWAmeimgeaWreW8gOi/nuaOpVxuICAgICAgICBjYy5sb2coXCLplIDmr4HkuoYg5pat5byA6L+e5o6lXCIpO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkNzI2Zk16NjNCRVZLTmVVc2V5T0trZCcsICdtYWxsVmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L21hbGwvbWFsbFZpZXcuanNcblxuLy/llYbln45cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG52YXIgbWFsbFZpZXc7XG5tYWxsVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3nu5PnrpflnLrmma9cbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFsbFNjZW5lXCIpO1xuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IG1hbGxWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMjUwYjRKSlFuWk4zNEk3czc0NTZ2ejQnLCAnbWFzdGVybGV2ZWxDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvbWFzdGVybGV2ZWwvbWFzdGVybGV2ZWxDb250cm9sbGVyLmpzXG5cbi8v5aSn5biI562J57qnXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIG1hc3RlcmxldmVsQ29udHJvbGxlcjtcbm1hc3RlcmxldmVsQ29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcblxuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25FbnRlck5vZGVcIik7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25MZWF2ZU5vZGVcIik7XG4gICAgfVxufSk7XG4vLyAvL+WIh+aNoumSseWMheeVjOmdolxuLy8gb25GTWVzc2FnZV93YWxsZXRCdG5jbGljazogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgTVZDLkZMb2cuZGF0YShcIumSseWMhei3s+i9rFwiLCBcIuaOpeaUtua2iOaBryB7MH1cIiwgbXNnKTtcbi8vICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIndhbGxldFwiKTtcblxuLy8gICAgIGlmKG1zZyl7XG4vLyAgICAgICAgIGlmKG1zZy5hcmdzLm5hbWUgPSBcIuWJjeW+gOmSseWMhemhtemdolwiKXtcbi8vICAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuLy8gICAgICAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4vLyBvbkZNZXNzYWdlX2NsaWNrTG9naW5CdXR0b246IGZ1bmN0aW9uKG1zZykge1xuLy8gICAgIGlmKCBtc2cuYXJncy5uYW1lID09IFwi55m75b2VXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICBjYy5sb2coXCJnb3RvIG1haW4g5YmNXCIpO1xuLy8gICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIm1haW5cIik7XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDlkI5cIik7XG4vLyAgICAgICAgIC8v5Y+R6YCB5raI5oGv57uZ572R57uc5qih5Z2XXG4vLyAgICAgfWVsc2UgaWYobXNnLmFyZ3MubmFtZSA9PSBcIuazqOWGjFwiKXtcbi8vICAgICAgICAgLy/ov5vlhaXliIbkuqvoioLngrlcbi8vICAgICAgICAgLy8gTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJTaGFyZVwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9XG5cbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXN0ZXJsZXZlbENvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczZWMyMDRWUDU1SUdwWUxWLzNVZXNLNycsICdtYXN0ZXJsZXZlbFNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L21hc3RlcmxldmVsL21hc3RlcmxldmVsU2NyaXB0LmpzXG5cbi8v5aSn5biI562J57qnXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL+WKoOi9veeahOaXtuWAmeimgeS4jua2iOaBr+i3r+eUsei/nuaOpVxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6ZSA5q+BXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8v6ZSA5q+B55qE5pe25YCZ6KaB5pat5byA6L+e5o6lXG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzQwZGQ4R2EyZlJHRVpIc09wNlR0OVBFJywgJ21hc3RlcmxldmVsVmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L21hc3RlcmxldmVsL21hc3RlcmxldmVsVmlldy5qc1xuXG4vL+Wkp+W4iOetiee6p1xudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBtYXN0ZXJsZXZlbFZpZXc7XG5tYXN0ZXJsZXZlbFZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8v5Yqg6L2957uT566X5Zy65pmvXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hc3RlcmxldmVsU2NlbmVcIik7XG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBtYXN0ZXJsZXZlbFZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2OWY3NkFyTnpsTm1vSEpVYUIxd3V4WicsICdtZW1iZXJzaGlwQ29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L21lbWJlcnNoaXAvbWVtYmVyc2hpcENvbnRyb2xsZXIuanNcblxuLy/kvJrnsY1cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG52YXIgbWVtYmVyc2hpcENvbnRyb2xsZXI7XG5tZW1iZXJzaGlwQ29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcblxuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25FbnRlck5vZGVcIik7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25MZWF2ZU5vZGVcIik7XG4gICAgfVxufSk7XG4vLyAvL+WIh+aNoumSseWMheeVjOmdolxuLy8gb25GTWVzc2FnZV93YWxsZXRCdG5jbGljazogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgTVZDLkZMb2cuZGF0YShcIumSseWMhei3s+i9rFwiLCBcIuaOpeaUtua2iOaBryB7MH1cIiwgbXNnKTtcbi8vICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIndhbGxldFwiKTtcblxuLy8gICAgIGlmKG1zZyl7XG4vLyAgICAgICAgIGlmKG1zZy5hcmdzLm5hbWUgPSBcIuWJjeW+gOmSseWMhemhtemdolwiKXtcbi8vICAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuLy8gICAgICAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4vLyBvbkZNZXNzYWdlX2NsaWNrTG9naW5CdXR0b246IGZ1bmN0aW9uKG1zZykge1xuLy8gICAgIGlmKCBtc2cuYXJncy5uYW1lID09IFwi55m75b2VXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICBjYy5sb2coXCJnb3RvIG1haW4g5YmNXCIpO1xuLy8gICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIm1haW5cIik7XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDlkI5cIik7XG4vLyAgICAgICAgIC8v5Y+R6YCB5raI5oGv57uZ572R57uc5qih5Z2XXG4vLyAgICAgfWVsc2UgaWYobXNnLmFyZ3MubmFtZSA9PSBcIuazqOWGjFwiKXtcbi8vICAgICAgICAgLy/ov5vlhaXliIbkuqvoioLngrlcbi8vICAgICAgICAgLy8gTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJTaGFyZVwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9XG5cbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1iZXJzaGlwQ29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2IyMmY4OU1SY0JKZzd3bktEU1krN2l3JywgJ21lbWJlcnNoaXBTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9tZW1iZXJzaGlwL21lbWJlcnNoaXBTY3JpcHQuanNcblxuLy/kvJrnsY1cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIC8v5Yqg6L2955qE5pe25YCZ6KaB5LiO5raI5oGv6Lev55Sx6L+e5o6lXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH0sXG4gICAgLy/plIDmr4FcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy/plIDmr4HnmoTml7blgJnopoHmlq3lvIDov57mjqVcbiAgICAgICAgY2MubG9nKFwi6ZSA5q+B5LqGIOaWreW8gOi/nuaOpVwiKTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNWQ3YzM2RXozMUlHTFJvbGZwWW01ODQnLCAnbWVtYmVyc2hpcFZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9tZW1iZXJzaGlwL21lbWJlcnNoaXBWaWV3LmpzXG5cbi8v5Lya57GNXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIG1lbWJlcnNoaXBWaWV3O1xubWVtYmVyc2hpcFZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8v5Yqg6L2957uT566X5Zy65pmvXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbWJlcnNoaXBTY2VuZVwiKTtcblxuICAgICAgICBjYy5sb2coXCJsb2dpbkNvbnRyb2xsZXIgb25FbnRlck5vZGVcIik7XG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IG1lbWJlcnNoaXBWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNGViNjVvQWZWdENrNXladUNIMHYvNkUnLCAnbWVzc2FnZUNvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9tZXNzYWdlL21lc3NhZ2VDb250cm9sbGVyLmpzXG5cbi8v5raI5oGvXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIG1lc3NhZ2VDb250cm9sbGVyO1xubWVzc2FnZUNvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uTGVhdmVOb2RlXCIpO1xuICAgIH1cbn0pO1xuLy8gLy/liIfmjaLpkrHljIXnlYzpnaJcbi8vIG9uRk1lc3NhZ2Vfd2FsbGV0QnRuY2xpY2s6IGZ1bmN0aW9uKG1zZykge1xuLy8gICAgIE1WQy5GTG9nLmRhdGEoXCLpkrHljIXot7PovaxcIiwgXCLmjqXmlLbmtojmga8gezB9XCIsIG1zZyk7XG4vLyAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG5cbi8vICAgICBpZihtc2cpe1xuLy8gICAgICAgICBpZihtc2cuYXJncy5uYW1lID0gXCLliY3lvoDpkrHljIXpobXpnaJcIil7XG4vLyAgICAgICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIndhbGxldFwiKTtcbi8vICAgICAgICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuLy8gb25GTWVzc2FnZV9jbGlja0xvZ2luQnV0dG9uOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBpZiggbXNnLmFyZ3MubmFtZSA9PSBcIueZu+W9lVwiKXtcbi8vICAgICAgICAgLy/ov5vlhaXliIbkuqvoioLngrlcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWJjVwiKTtcbi8vICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJtYWluXCIpO1xuLy8gICAgICAgICBjYy5sb2coXCJnb3RvIG1haW4g5ZCOXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1lbHNlIGlmKG1zZy5hcmdzLm5hbWUgPT0gXCLms6jlhoxcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIC8vIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwiU2hhcmVcIik7XG4vLyAgICAgICAgIC8v5Y+R6YCB5raI5oGv57uZ572R57uc5qih5Z2XXG4vLyAgICAgfVxuXG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gbWVzc2FnZUNvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlNzQ5YzI5czZCRndwL29sNldvNVc1dicsICdtZXNzYWdlU2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvbWVzc2FnZS9tZXNzYWdlU2NyaXB0LmpzXG5cbi8v5raI5oGvXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL+WKoOi9veeahOaXtuWAmeimgeS4jua2iOaBr+i3r+eUsei/nuaOpVxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6ZSA5q+BXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8v6ZSA5q+B55qE5pe25YCZ6KaB5pat5byA6L+e5o6lXG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ExZjhlOEc2c1pNbVpTR2xLeTdYVDQ1JywgJ21lc3NhZ2VWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvbWVzc2FnZS9tZXNzYWdlVmlldy5qc1xuXG4vL+a2iOaBr1xudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBtZXNzYWdlVmlldztcbm1lc3NhZ2VWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9vee7k+eul+WcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZXNzYWdlU2NlbmVcIik7XG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gbWVzc2FnZVZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkNmQ4Mzhic2NkRndLYVZJOEIvQ3kwSCcsICdteUNvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9teUNvbnRyb2xsZXIuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBteUNvbnRyb2xsZXI7XG5teUNvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkxlYXZlTm9kZVwiKTtcbiAgICB9LFxuICAgIC8v5YiH5o2i6ZKx5YyF55WM6Z2iXG4gICAgb25GTWVzc2FnZV93YWxsZXRCdG5jbGljazogZnVuY3Rpb24gb25GTWVzc2FnZV93YWxsZXRCdG5jbGljayhtc2cpIHtcbiAgICAgICAgTVZDLkZMb2cuZGF0YShcIumSseWMhei3s+i9rFwiLCBcIuaOpeaUtua2iOaBryB7MH1cIiwgbXNnKTtcbiAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH0sXG4gICAgLy/liIfmjaLllYbln47nlYzpnaJcbiAgICBvbkZNZXNzYWdlX21hbGxCdG5jbGljazogZnVuY3Rpb24gb25GTWVzc2FnZV9tYWxsQnRuY2xpY2sobXNnKSB7XG4gICAgICAgIE1WQy5GTG9nLmRhdGEoXCLllYbln47ot7PovaxcIiwgXCLmjqXmlLbmtojmga8gezB9XCIsIG1zZyk7XG4gICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibWFsbFwiKTtcbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4gICAgfVxuICAgIC8vIG9uRk1lc3NhZ2VfY2xpY2tMb2dpbkJ1dHRvbjogZnVuY3Rpb24obXNnKSB7XG4gICAgLy8gICAgIGlmKCBtc2cuYXJncy5uYW1lID09IFwi55m75b2VXCIpe1xuICAgIC8vICAgICAgICAgLy/ov5vlhaXliIbkuqvoioLngrlcbiAgICAvLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDliY1cIik7XG4gICAgLy8gICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIm1haW5cIik7XG4gICAgLy8gICAgICAgICBjYy5sb2coXCJnb3RvIG1haW4g5ZCOXCIpO1xuICAgIC8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbiAgICAvLyAgICAgfWVsc2UgaWYobXNnLmFyZ3MubmFtZSA9PSBcIuazqOWGjFwiKXtcbiAgICAvLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4gICAgLy8gICAgICAgICAvLyBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIlNoYXJlXCIpO1xuICAgIC8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gbXlDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMTg4NDEzQnZtZEp2SzFldU1iKzlSZjEnLCAnbXlTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9teVNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuICAgIC8v5Yqg6L296ISa5pys5YaF5a65XG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIC8v5Yqg6L2955qE5pe25YCZ6KaB5LiO5raI5oGv6Lev55Sx6L+e5o6lXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH0sXG4gICAgLy/plIDmr4FcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy/plIDmr4HnmoTml7blgJnopoHmlq3lvIDov57mjqVcbiAgICAgICAgY2MubG9nKFwi6ZSA5q+B5LqGIOaWreW8gOi/nuaOpVwiKTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfSxcbiAgICAvL+i3s+i9rOmSseWMhemhtemdolxuICAgIHdhbGxldEJ0bmNsaWNrOiBmdW5jdGlvbiB3YWxsZXRCdG5jbGljaygpIHtcbiAgICAgICAgdmFyIGxvYWR3YWxsZXRtc2cgPSBuZXcgTVZDLkZNZXNzYWdlKFwid2FsbGV0QnRuY2xpY2tcIiwgXCJteVwiKTtcbiAgICAgICAgbG9hZHdhbGxldG1zZy5hcmdzLm5hbWUgPSBcIuWJjeW+gOmSseWMhemhtemdolwiO1xuICAgICAgICBsb2Fkd2FsbGV0bXNnLnNlbmQoKTtcblxuICAgICAgICBNVkMuRkxvZy5kYXRhKFwi6ZKx5YyF6Lez6L2sXCIsIFwi5Y+R6YCB5raI5oGvIHswfVwiLCBsb2Fkd2FsbGV0bXNnKTtcbiAgICB9LFxuICAgIC8v6Lez6L2s5ZWG5Z+O6aG16Z2iXG4gICAgbWFsbEJ0bmNsaWNrOiBmdW5jdGlvbiBtYWxsQnRuY2xpY2soKSB7XG4gICAgICAgIHZhciBsb2FkbWFsbG1zZyA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJtYWxsQnRuY2xpY2tcIiwgXCJteVwiKTtcbiAgICAgICAgbG9hZG1hbGxtc2cuYXJncy5uYW1lID0gXCLliY3lvoDllYbln47pobXpnaJcIjtcbiAgICAgICAgbG9hZG1hbGxtc2cuc2VuZCgpO1xuXG4gICAgICAgIE1WQy5GTG9nLmRhdGEoXCLllYbln47ot7PovaxcIiwgXCLlj5HpgIHmtojmga8gezB9XCIsIGxvYWRtYWxsbXNnKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2E3Y2I5N0JpOEJHb0tPdXh5NFJmcVMyJywgJ215VmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L215Vmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgbXlWaWV3O1xubXlWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9vee7k+eul+WcuuaZr1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJteVNjZW5lXCIpO1xuXG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IG15VmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzQ2NTg1L1NSb3hDL1lqblF5NmVIVzNkJywgJ215YnJhbmRDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvbXlicmFuZC9teWJyYW5kQ29udHJvbGxlci5qc1xuXG4vL+aIkeeahOeJjOiwsVxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBteWJyYW5kQ29udHJvbGxlcjtcbm15YnJhbmRDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkxlYXZlTm9kZVwiKTtcbiAgICB9XG59KTtcbi8vIC8v5YiH5o2i6ZKx5YyF55WM6Z2iXG4vLyBvbkZNZXNzYWdlX3dhbGxldEJ0bmNsaWNrOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBNVkMuRkxvZy5kYXRhKFwi6ZKx5YyF6Lez6L2sXCIsIFwi5o6l5pS25raI5oGvIHswfVwiLCBtc2cpO1xuLy8gICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuXG4vLyAgICAgaWYobXNnKXtcbi8vICAgICAgICAgaWYobXNnLmFyZ3MubmFtZSA9IFwi5YmN5b6A6ZKx5YyF6aG16Z2iXCIpe1xuLy8gICAgICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG4vLyAgICAgICAgICAgICBtc2cuY29tcGxldGUoKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbi8vIG9uRk1lc3NhZ2VfY2xpY2tMb2dpbkJ1dHRvbjogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgaWYoIG1zZy5hcmdzLm5hbWUgPT0gXCLnmbvlvZVcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDliY1cIik7XG4vLyAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibWFpblwiKTtcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWQjlwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9ZWxzZSBpZihtc2cuYXJncy5uYW1lID09IFwi5rOo5YaMXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICAvLyBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIlNoYXJlXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1cblxuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IG15YnJhbmRDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYmM2NjdkZWhqRktvWW1hNlR4UHRZL2UnLCAnbXlicmFuZFNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L215YnJhbmQvbXlicmFuZFNjcmlwdC5qc1xuXG4vL+aIkeeahOeJjOiwsVxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy/liqDovb3nmoTml7blgJnopoHkuI7mtojmga/ot6/nlLHov57mjqVcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfSxcbiAgICAvL+mUgOavgVxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge1xuICAgICAgICAvL+mUgOavgeeahOaXtuWAmeimgeaWreW8gOi/nuaOpVxuICAgICAgICBjYy5sb2coXCLplIDmr4HkuoYg5pat5byA6L+e5o6lXCIpO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4NjMzMGlRR08xQTdwMWVqVWtyTjVqeCcsICdteWJyYW5kVmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L215YnJhbmQvbXlicmFuZFZpZXcuanNcblxuLy/miJHnmoTniYzosLFcbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG52YXIgbXlicmFuZFZpZXc7XG5teWJyYW5kVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3nu5PnrpflnLrmma9cbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibXlicmFuZFNjZW5lXCIpO1xuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IG15YnJhbmRWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzZlMGNCMFdINU1LSXpmbGlocEp2RkUnLCAnbXl0ZWFtQ29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L215dGVhbS9teXRlYW1Db250cm9sbGVyLmpzXG5cbi8v5oiR55qE5oiY6ZifXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIG15dGVhbUNvbnRyb2xsZXI7XG5teXRlYW1Db250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkxlYXZlTm9kZVwiKTtcbiAgICB9XG59KTtcbi8vIC8v5YiH5o2i6ZKx5YyF55WM6Z2iXG4vLyBvbkZNZXNzYWdlX3dhbGxldEJ0bmNsaWNrOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBNVkMuRkxvZy5kYXRhKFwi6ZKx5YyF6Lez6L2sXCIsIFwi5o6l5pS25raI5oGvIHswfVwiLCBtc2cpO1xuLy8gICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuXG4vLyAgICAgaWYobXNnKXtcbi8vICAgICAgICAgaWYobXNnLmFyZ3MubmFtZSA9IFwi5YmN5b6A6ZKx5YyF6aG16Z2iXCIpe1xuLy8gICAgICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG4vLyAgICAgICAgICAgICBtc2cuY29tcGxldGUoKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbi8vIG9uRk1lc3NhZ2VfY2xpY2tMb2dpbkJ1dHRvbjogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgaWYoIG1zZy5hcmdzLm5hbWUgPT0gXCLnmbvlvZVcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDliY1cIik7XG4vLyAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibWFpblwiKTtcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWQjlwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9ZWxzZSBpZihtc2cuYXJncy5uYW1lID09IFwi5rOo5YaMXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICAvLyBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIlNoYXJlXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1cblxuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IG15dGVhbUNvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc3NDlkNGtNampoUEVZT295NGk3RnNGNicsICdteXRlYW1TY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9teXRlYW0vbXl0ZWFtU2NyaXB0LmpzXG5cbi8v5oiR55qE5oiY6ZifXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL+WKoOi9veeahOaXtuWAmeimgeS4jua2iOaBr+i3r+eUsei/nuaOpVxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6ZSA5q+BXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8v6ZSA5q+B55qE5pe25YCZ6KaB5pat5byA6L+e5o6lXG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzJkNjQwbkU0anBPc2JMcFlsOGNaa3hWJywgJ215dGVhbVZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9teXRlYW0vbXl0ZWFtVmlldy5qc1xuXG4vL+aIkeeahOaImOmYn1xudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBteXRlYW1WaWV3O1xubXl0ZWFtVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3nu5PnrpflnLrmma9cbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibXl0ZWFtU2NlbmVcIik7XG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gbXl0ZWFtVmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzQ2ZTY2Y1pRbUZFMnJsZkV0a1QwZ2M4JywgJ3BhcnR5Q3JlYXRlUGFydHlMb2FkaW5nTGF5ZXJTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC8zcGFydHkvMWNyZWF0ZVBhcnR5LzNwYXJ0eV9DcmVhdGVQYXJ0eUxvYWRpbmcvcGFydHlDcmVhdGVQYXJ0eUxvYWRpbmdMYXllclNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL+WBh+ijheWPkemAgei/m+WFpeWTquenjeeJjOahjOeahOa2iOaBr1xuICAgICAgICAgICAgdmFyIG1zZzEgPSBuZXcgTVZDLkZNZXNzYWdlKFwic2hvd1BhcnR5VHlwZVJlcVwiLCBcIk5ldFwiKTtcbiAgICAgICAgICAgIG1zZzEuYXJncy50eXBlID0gd2luZG93LkdhbWVUeXBlO1xuICAgICAgICAgICAgbXNnMS5zZW5kKCk7XG4gICAgICAgIH0sIDIpO1xuICAgIH0sXG4gICAgb25EZXN0b3J5OiBmdW5jdGlvbiBvbkRlc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc1MGFhMjUyanlaQWlwb2diZlJuRkhERycsICdwYXJ0eUNyZWF0ZVNldExheWVyU2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvM3BhcnR5LzFjcmVhdGVQYXJ0eS8ycGFydHlfQ3JlYXRlUGFydHlTZXQvcGFydHlDcmVhdGVTZXRMYXllclNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH0sXG4gICAgb25EZXN0b3J5OiBmdW5jdGlvbiBvbkRlc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH0sXG4gICAgb25DcmVhdGVTdGQ6IGZ1bmN0aW9uIG9uQ3JlYXRlU3RkKCkge1xuICAgICAgICAvL+WBh+iuvuiuvue9ruWlveS6huaVsOaNruetieS4nOilvyAg5bCG6L+Z5Lqb5Lic6KW/5Y+R57uZ572R57uc5bGCXG4gICAgICAgIHZhciBtc2cxID0gbmV3IE1WQy5GTWVzc2FnZShcIkNyZWF0ZVN0ZFBhcnR5SW5mb0Fja1wiLCBcIk5ldFwiKTtcbiAgICAgICAgbXNnMS5hcmdzLlR5cGUgPSBcIlNURFwiO1xuICAgICAgICBtc2cxLnNlbmQoKTtcbiAgICAgICAgLy/nm7TmjqXot7PliLBsb2FkaW5nXG4gICAgICAgIHdpbmRvdy5HYW1lVHlwZSA9IFwiU1REXCI7XG4gICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwiY3JlYXRlUGFydHlMb2FkaW5nXCIpO1xuICAgIH0sXG4gICAgb25DcmVhdGVNVFQ6IGZ1bmN0aW9uIG9uQ3JlYXRlTVRUKCkge1xuICAgICAgICAvL+WBh+iuvuiuvue9ruWlveS6huaVsOaNruetieS4nOilvyAg5bCG6L+Z5Lqb5Lic6KW/5Y+R57uZ572R57uc5bGCXG5cbiAgICAgICAgdmFyIG1zZzEgPSBuZXcgTVZDLkZNZXNzYWdlKFwiQ3JlYXRlU3RkUGFydHlJbmZvQWNrXCIsIFwiTmV0XCIpO1xuICAgICAgICBtc2cxLmFyZ3MuVHlwZSA9IFwiTVRUXCI7XG4gICAgICAgIG1zZzEuc2VuZCgpO1xuICAgICAgICB3aW5kb3cuR2FtZVR5cGUgPSBcIk1UVFwiO1xuXG4gICAgICAgIC8v55u05o6l6Lez5YiwbG9hZGluZ1xuICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcImNyZWF0ZVBhcnR5TG9hZGluZ1wiKTtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZDYxNmZCT09ZMUlNNk16bGcxb0hINkInLCAncGFydHlMYXllclNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzNwYXJ0eS9wYXJ0eUxheWVyU2NyaXB0LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfSxcbiAgICBvbkRlc3Rvcnk6IGZ1bmN0aW9uIG9uRGVzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfSxcbiAgICBvbkNyZWF0UGFydHk6IGZ1bmN0aW9uIG9uQ3JlYXRQYXJ0eSgpIHtcbiAgICAgICAgdmFyIG1zZzEgPSBuZXcgTVZDLkZNZXNzYWdlKFwib25DcmVhdFBhcnR5Q2xpY2tcIiwgXCJjcmVhdGVQYXJ0eVNldFwiKTtcbiAgICAgICAgbXNnMS5zZW5kKCk7XG4gICAgfSxcbiAgICBvbkpvaW5QYXJ0eTogZnVuY3Rpb24gb25Kb2luUGFydHkoKSB7XG4gICAgICAgIHZhciBtc2cxID0gbmV3IE1WQy5GTWVzc2FnZShcIm9uSm9pblBhcnR5Q2xpY2tcIiwgXCJjcmVhdGVQYXJ0eVNldFwiKTtcbiAgICAgICAgbXNnMS5zZW5kKCk7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2FiYWFhZnJyRmxMK2FFaUtzUGtCcndEJywgJ3BhcnR5VmlldzInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9wYXJ0eS9wYXJ0eVZpZXcyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBwYXJ0eVZpZXc7XG52YXIgcGF5dHlMYXllcjtcbnBhcnR5VmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcblxuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgICAgICBjYy5sb2coXCJwYXJ0eVNjZW5lIGlzIGxvYWRpbmdcIik7XG5cbiAgICAgICAgLy/liqDovb1wYWlqdeWcuuaZr1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIlRlc3RQcm9mYWIvcGFydHlTY2VuZVwiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhlcnIpO1xuICAgICAgICAgICAgcGF5dHlMYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHBheXR5TGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcbm1vZHVsZS5leHBvcnRzID0gcGFydHlWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2MxZmFNM2tQTkJnSzQwNUJWcmowbXgnLCAncGxheWVySGVhZFNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzJyb29tLVN0YXJ0R2FtZS9wbGF5ZXJIZWFkU2NyaXB0LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHBsYXllck5hbWU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgbnVtOiAtMSB9LFxuXG4gICAgLy8tMeS7o+ihqOayoeS6ulxuICAgIC8v5YW25LuW5pWw5o2u6Ieq5Yqo6I635Y+WXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm51bSA9PSAtMSkge1xuICAgICAgICAgICAgLy8gdGhpcy5uYW1lLnN0cmluZyA9IFwi5rKh5pyJ5Lq6XCI7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm51bSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtID09IDEpIHt9IGVsc2UgaWYgKHRoaXMubnVtID09IDIpIHt9IGVsc2UgaWYgKHRoaXMubnVtID09IDMpIHt9IGVsc2UgaWYgKHRoaXMubnVtID09IDQpIHt9IGVsc2UgaWYgKHRoaXMubnVtID09IDUpIHt9XG4gICAgfSxcbiAgICAvL+WktOWDj+iiq+eCueWHu+S6huS8muWPkemAgeS4gOS4qua2iOaBryBwbGF5ZXLor6bmg4XnmoRsYXllclxuICAgIGhlYWRPbkNsaWNrOiBmdW5jdGlvbiBoZWFkT25DbGljaygpIHt9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMzVhMzF4NjRKaEg5S01hRmpqbTNKVGgnLCAncGxheWVyTGF5ZXJTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvU2FuZ0hvbmdMdURpci9wbGF5ZXJMYXllclNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG4vL+WNleS4queOqeWutueahOaVsOaNrue7k+aehFxudmFyIHBsYXllciA9IHt9O1xuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvL+acrOahjOaUr+aMgeacgOWkp+S6uuaVsFxuICAgICAgICBtYXhwbGF5ZXJOdW06IDAsXG4gICAgICAgIC8v5Lu75Yqh5aS05YOP5qih5Z6LXG4gICAgICAgIHBsYXllck1vZGVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/lk6rkupvkvY3nva7mnInkurrlk6rkupvkvY3nva7msqHmnInkurrnmoTmlbDnu4Qg6KOF55qE5piv5q+P5Liq5Lq655qE57uT5p6E5L2T77yI5aS05YOP77yM5ZCN5a2X77yM6K+m57uG5L+h5oGv77yJXG4gICAgICAgIC8v6Ieq5bex6I635Y+W77yfXG4gICAgICAgIHBsYXllcnM6IFtdXG4gICAgfSxcbiAgICAvL+mcgOimgeehruiupG9uRW50ZXJOb2Rl5ZKMIG9uTG9hZOiwgeWFiOWKoOi9vVxuICAgIC8v5aaC5p6cb25FbnRlck5vZGXlhYjliqDovb3nmoTor53lj6/ku6Xorqnov5nkuKrlh73mlbDlhYjojrflj5boh6rlt7HpnIDopoHnmoTkuJzopb8g54S25ZCO6LWwb25sb2FkXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiEhISEhIXBsYXllckxheWVyU2NpcnB0LS0tLW9uRW50ZXJOb2RlXCIpO1xuICAgIH0sXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiISEhISEhcGxheWVyTGF5ZXJTY2lycHQtLS0tb25Mb2FkXCIpO1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgLy/lkJHosIHojrflj5bmiJHkuIrpnaLnmoTkurrnmoTkv6Hmga9cbiAgICB9LFxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuICAgIG9uRk1lc3NhZ2VfaW5pdEhlYWRMYXllckluZm86IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfaW5pdEhlYWRMYXllckluZm8obXNnKSB7fVxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzZjOTQ0MHJIOVpOY3FmY1ovSG4zbVFSJywgJ3ByZWZhYkJvZHlTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvU2FuZ0hvbmdMdURpci9wcmVmYWJCb2R5U2NyaXB0LmpzXG5cblxuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy5kaXJlY3Rvci5nZXRWaXNpYmxlU2l6ZSgpKTtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZGM0ODhHV01uQk0zcG5HQzUzanNWOUInLCAncm9vbUNvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC80cm9vbS9yb29tQ29udHJvbGxlci5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcm9vbUNvbnRyb2xsZXI7XG5yb29tQ29udHJvbGxlciA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcblxuICAgICAgICBjYy5sb2coXCJyb29tQ29udHJvbGxlclwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gcm9vbUNvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0Yzc1ZTArbFRsS1FyLzZ3a0loMFcvRycsICdyb29tU2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vcm9vbVNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGxheWVyTnVtOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcnR5VHlwZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICByb29tTnVtOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIHBvbmQ6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6L+Z5Liq5Lmf5Y+v5Lul5piv5omL5Yqo6I635Y+Wcm9vbeS/oeaBr1xuICAgIG9uRk1lc3NhZ2VfaW5pdFJvb21JbmZvOiBmdW5jdGlvbiBvbkZNZXNzYWdlX2luaXRSb29tSW5mbyhtc2cpIHtcbiAgICAgICAgLy/nlLHosIHnu5nmiJHlj5HkuIvmiJHnmoTkv6Hmga8g55So5LqO5oiR55qE5Yid5aeL5YyWXG4gICAgICAgIHRoaXMucGxheWVyTnVtLnN0cmluZyA9IG1zZy5hcmdzLnBsYXllck51bSArIFwiXCI7XG4gICAgICAgIHRoaXMucGFydHlUeXBlLnN0cmluZyA9IG1zZy5hcmdzLnBhcnR5VHlwZSArIFwiXCI7XG4gICAgICAgIHRoaXMucm9vbU51bS5zdHJpbmcgPSBtc2cuYXJncy5yb29tTnVtICsgXCJcIjtcbiAgICAgICAgdGhpcy5wb25kLnN0cmluZyA9IG1zZy5hcmdzLnJvb21OdW0gKyBcIlwiO1xuICAgICAgICAvL+WKoOi9veWIneWni+WMlueahOS4gOS6m3ZpZXfkv6Hmga/vvJrlupXmsaDkv6Hmga/llYog562J562JXG5cbiAgICAgICAgLy/liqDovb3lrozkuoblj5HpgIFjb21wbGV0Zea2iOaBryDlkYror4lsb2FkaW5nVmlld+WxgiDnlKjkuo7noa7orqTliqDovb3ov5vluqZcbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNmQ5YjJlM0NxVkNqSmYrN29aTGU5eFAnLCAncm9vbVZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC80cm9vbS9yb29tVmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcm9vbVZpZXc7XG5yb29tVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIC8qXG4gICAgKiDpppblhYhcbiAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9vXJvb21TY2VuZe+8iOWMheaLrOi/m+WFpeeJjOWxgOetieW+he+8iVxuICAgICAgICBjYy5sb2coXCJyb29tU2NlbmVcIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21TY2VuZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIlRlc3RQcm9mYWIvcm9vbVdhaXRpbmdMYXllclwiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAvL+WKoOi9veWHuuadpeS5i+WQjnByb2ZhYueahOmUgOavgSDmnInku5boh6rlt7HlhrPlrppcbiAgICAgICAgICAgICAgICB2YXIgcm9vbVdhaXRpbmdMYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChyb29tV2FpdGluZ0xheWVyKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJyb29tV2FpdGluZ0xheWVyIG9uXCIgKyByb29tV2FpdGluZ0xheWVyLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNjLmxvZyhcInJvb21Mb2FkaW5nU2NlbmVcIik7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJvb21WaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMTZiMmY3V0xTeE1DNkxRSlJFSHhHdkMnLCAncm9vbV9WaWxsYWdlQ29ucm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vM3Jvb20tVmlsbGFnZS9yb29tX1ZpbGxhZ2VDb25yb2xsZXIuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIHJvb21Mb2FkaW5nVmlldztcbnJvb21Mb2FkaW5nVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIC8qXG4gICAgICog5Yqg6L29bG9hZGluZ1ZpZXcg77yI6L2s5ZyI55qE6YKj5Liq6aG16Z2i77yJIOaJgOacieeahOaIv+mXtOWGheeahHZpZXcg6YO95Zyo5LiA5Liqc2NlbmXkuIrop6PlhrNcbiAgICAgKiDkvb/nlKjmlrnms5XvvJpcbiAgICAgKiAgICAgICAx77yM6LCD55So5pa55rOV77yaXG4gICAgICogICAgICAgICAgIGEs6YCa6L+HZGlyZWN0b3Lojrflj5blvZPliY1zY2VuZSDlkJHkuIrpnaLmt7vliqDmlrDnmoR2aWV3XG4gICAgICogICAgICAgICAgIGIs6YCa6L+H5Y+R6YCB5raI5oGv57uZ6Ieq5bex5YaZ55qE6ISa5pys77yI5oyC6L295Zyocm9vbVNjZW5l5LiK55qE77yJ5Y+R6YCB5raI5oGv5p2l5a6e546w5p+Q5Lqb6LCD55SoXG4gICAgICpcbiAgICAgKiAgICAgICAy77yM6KaB5rGC77yaXG4gICAgICogICAgICAgICAgIGEs6Ieq5bex55qE5pi+56S66ZyA5rGCKGNvbnRleHToioLngrnnmoTmmL7npLrpnIDmsYIp5Y2V54us5YaZ5LiA5Liq6ISa5pysIOaMgui9veWcqHJvb21TY2VuZeS4ilxuICAgICAqICAgICAgIDPvvIxcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuXG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG4gICAgICAgIGNjLmxvZyhcInJvb21Mb2FkaW5nU2NlbmVcIik7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJvb21Mb2FkaW5nVmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ZmZThhZDZncWhNTW9nbXprSGNCVDA5JywgJ3Jvb21fVmlsbGFnZVNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzNyb29tLVZpbGxhZ2Uvcm9vbV9WaWxsYWdlU2NyaXB0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlYjczN28wQUpWRXY0VXlUWXdHQXFvNScsICdyb29tX1ZpbGxhZ2VWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vM3Jvb20tVmlsbGFnZS9yb29tX1ZpbGxhZ2VWaWV3LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciByb29tVmlsbGFnZVZpZXc7XG52YXIgRGluZ1podWFuZ1Rlc3RMYXllcjtcbnJvb21WaWxsYWdlVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIC8qXG4gICAgICpcbiAgICAgKiAqL1xuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3lrprluoTliqjnlLtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJUZXN0UHJvZmFiL0RpbmdaaHVhbmdUZXN0TGF5ZXJcIiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5sb2coZXJyKTtcbiAgICAgICAgICAgIERpbmdaaHVhbmdUZXN0TGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChEaW5nWmh1YW5nVGVzdExheWVyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBEaW5nWmh1YW5nVGVzdExheWVyLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gcm9vbVZpbGxhZ2VWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzMzZjZiazRFQk9IYXRRcnFmbTJtdHQnLCAncm9vbV9jb21tdW5pdHlDYXJkQ29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzVyb29tLWNvbW11bml0eUNhcmQvcm9vbV9jb21tdW5pdHlDYXJkQ29udHJvbGxlci5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcm9vbUNvbW11bml0eUNhcmRDb250cm9sbGVyO1xucm9vbUNvbW11bml0eUNhcmRDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge30sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tQ29tbXVuaXR5Q2FyZENvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4NjYyOGhmK0w5UGRwbXRyQS9laVR4RycsICdyb29tX2NvbW11bml0eUNhcmRWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vNXJvb20tY29tbXVuaXR5Q2FyZC9yb29tX2NvbW11bml0eUNhcmRWaWV3LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciByb29tQ29tbXVuaXR5Q2FyZFZpZXc7XG52YXIgRmFTaG91UGFpVGVzdExheWVyO1xucm9vbUNvbW11bml0eUNhcmRWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9veWumuW6hOWKqOeUu1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIlRlc3RQcm9mYWIvRmFHb25nR29uZ1BhaVRlc3RMYXllclwiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhlcnIpO1xuICAgICAgICAgICAgRmFTaG91UGFpVGVzdExheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQoRmFTaG91UGFpVGVzdExheWVyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBGYVNob3VQYWlUZXN0TGF5ZXIucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tQ29tbXVuaXR5Q2FyZFZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc1MjhlOTFhRENGSDByVkJNcHk4eVhNaScsICdyb29tX2hhbmRTaWduQ29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzRyb29tLWhhbmRTaWduL3Jvb21faGFuZFNpZ25Db250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciByb29tSGFuZFNpZ25Db250cm9sbGVyO1xudmFyIEZhU2hvdVBhaVRlc3RMYXllcjtcbnJvb21IYW5kU2lnbkNvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqXG4gICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7fSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge1xuICAgICAgICBGYVNob3VQYWlUZXN0TGF5ZXIucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tSGFuZFNpZ25Db250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNTgyNjNkT2s0aEN2WkpDT2hGNWdrazEnLCAncm9vbV9oYW5kU2lnblZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC80cm9vbS80cm9vbS1oYW5kU2lnbi9yb29tX2hhbmRTaWduVmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcm9vbUhhbmRTaWduVmlldztcbnZhciBGYVNob3VQYWlUZXN0TGF5ZXI7XG5yb29tSGFuZFNpZ25WaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9veWumuW6hOWKqOeUu1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIlRlc3RQcm9mYWIvRmFTaG91UGFpVGVzdExheWVyXCIsIGZ1bmN0aW9uIChlcnIsIHByZWZhYikge1xuICAgICAgICAgICAgY2MubG9nKGVycik7XG4gICAgICAgICAgICBGYVNob3VQYWlUZXN0TGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChGYVNob3VQYWlUZXN0TGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIEZhU2hvdVBhaVRlc3RMYXllci5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xuICAgIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJvb21IYW5kU2lnblZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdhMmYzN0VTRmx0SFlZVGw0djdSSkRoMicsICdyb29tX2xvYWRpbmdDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vMXJvb20tbG9hZGluZy9yb29tX2xvYWRpbmdDb250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciByb29tTG9hZGluZ0NvbnRyb2xsZXI7XG5yb29tTG9hZGluZ0NvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqIDHvvIzlj5HpgIHmtojmga8gZ2FtZVJlYWR55raI5oGvXG4gICAgICogICAgICDmtojmga/lkI3vvJpnYW1lUmVhZHlcbiAgICAgKiAgICAgIOiKgueCue+8muaaguWumiBNU0co5YW25a6e5Lmf5peg5omA6LCTIOWPquimgeacieaWueazleWwseWPr+S7peaOpeaUtuW+l+WIsOWPquaYr+S5i+WQjumcgOimgeehruiupOS4gOS4iylcbiAgICAgKiAy77yM562J5b6FZ2FtZU9uU3RhcnTmtojmga9cbiAgICAgKiAgICAgIGHvvIxnb3RvIHN0YXJ0R2FtZVxuICAgICAqICovXG5cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIHRoaXMuc2VuZEdhbWVSZWFkeU1zZygpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9LFxuICAgIHNlbmRHYW1lUmVhZHlNc2c6IGZ1bmN0aW9uIHNlbmRHYW1lUmVhZHlNc2coKSB7XG4gICAgICAgIC8v5pqC5pe25LiN55+l6YGT5Y+R57uZ6LCBIOWFiOS4jeWPkVxuICAgICAgICAvLyB2YXIgbXNnID0gbmV3IE1WQy5GTWVzc2FnZShcImdhbWVSZWFkeVwiLFwiTVNHXCIpO1xuICAgICAgICAvLyBtc2cuc2VuZCgpO1xuICAgIH0sXG4gICAgb25GTWVzc2FnZV9nYW1lT25TdGFydDogZnVuY3Rpb24gb25GTWVzc2FnZV9nYW1lT25TdGFydChtc2cpIHtcbiAgICAgICAgTVZDLkZMb2cuZGF0YShcInJvb20tTG9hZGluZ0NvbnRyb2xsZXJcIiwgXCLmlLbliLDmtojmga8gezB9XCIsIG1zZyk7XG4gICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwic3RhcnRHYW1lXCIpO1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tTG9hZGluZ0NvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4YjQ0MDFaUnYxRm9KQm1zbmFXQlRCUCcsICdyb29tX2xvYWRpbmdUZXN0U2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vMXJvb20tbG9hZGluZy9yb29tX2xvYWRpbmdUZXN0U2NyaXB0LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwic3RhcnRHYW1lXCIpO1xuICAgICAgICB9LCAzKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4YzNiMUZUSjdKT05xOXpCVmRJREpmeScsICdyb29tX2xvYWRpbmdWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vMXJvb20tbG9hZGluZy9yb29tX2xvYWRpbmdWaWV3LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciByb29tTG9hZGluZ1ZpZXc7XG52YXIgbG9hZExheWVyO1xucm9vbUxvYWRpbmdWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAqIOWKoOi9vWxvYWRpbmdWaWV3IO+8iOi9rOWciOeahOmCo+S4qumhtemdou+8iSDmiYDmnInnmoTmiL/pl7TlhoXnmoR2aWV3IOmDveWcqOS4gOS4qnNjZW5l5LiK6Kej5YazXG4gICAgKiDkvb/nlKjmlrnms5XvvJpcbiAgICAqICAgICAgIDHvvIzosIPnlKjmlrnms5XvvJpcbiAgICAqICAgICAgICAgICBhLOmAmui/h2RpcmVjdG9y6I635Y+W5b2T5YmNc2NlbmUg5ZCR5LiK6Z2i5re75Yqg5paw55qEdmlld1xuICAgICogICAgICAgICAgIGIs6YCa6L+H5Y+R6YCB5raI5oGv57uZ6Ieq5bex5YaZ55qE6ISa5pys77yI5oyC6L295Zyocm9vbVNjZW5l5LiK55qE77yJ5Y+R6YCB5raI5oGv5p2l5a6e546w5p+Q5Lqb6LCD55SoXG4gICAgKlxuICAgICogICAgICAgMu+8jOimgeaxgu+8mlxuICAgICogICAgICAgICAgIGEs6Ieq5bex55qE5pi+56S66ZyA5rGCKGNvbnRleHToioLngrnnmoTmmL7npLrpnIDmsYIp5Y2V54us5YaZ5LiA5Liq6ISa5pysIOaMgui9veWcqHJvb21TY2VuZeS4ilxuICAgICogICAgICAgM++8jFxuICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8v55Sx5LqO56ys5LiA5Liqc2NlbmXov5jmsqHliqDovb3nmoTml7blgJkg5LiN6IO96LCD55SobG9hZFNjZW5l5pa55rOVXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb20tbG9hZGluZ1NjZW5lXCIpO1xuICAgICAgICAvLyDliqDovb0gUHJlZmFiXG4gICAgICAgIC8v5ZCR6LCB6I635Y+W5oiR5LiK6Z2i55qE5Lq655qE5L+h5oGvXG5cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJUZXN0UHJvZmFiL2xvYWRpbmdHYW1lXCIsIGZ1bmN0aW9uIChlcnIsIHByZWZhYikge1xuICAgICAgICAgICAgY2MubG9nKGVycik7XG4gICAgICAgICAgICBjYy5sb2coXCJsb2FkaW5nR2FtZVwiKTtcbiAgICAgICAgICAgIGxvYWRMYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKGxvYWRMYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgICAgICBjYy5sb2coXCJyb29tTG9hZGluZ1NjZW5lXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgbG9hZExheWVyLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgfSxcbiAgICAvL+etieW+heaOpeaUtuWKoOi9vWxvYWRpbmdWaWV355qE5raI5oGvXG4gICAgb25GTWVzc2FnZV9zaG93TG9hZGluZ1ZpZXc6IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfc2hvd0xvYWRpbmdWaWV3KCkge1xuICAgICAgICAvL+iOt+WPlmxvYWRpbmdWaWV3XG5cbiAgICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tTG9hZGluZ1ZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5MjQ4Y3l6UFpoQnpJUWtwMlIyZTU3MScsICdyb29tX215VHVybkNvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC80cm9vbS82cm9vbS1teVR1cm4vcm9vbV9teVR1cm5Db250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciByb29tTXlUdXJuQ29udHJvbGxlcjtcbnJvb21NeVR1cm5Db250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge30sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tTXlUdXJuQ29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzM5MzVkSlh3Wk5CWTdyQWtBTC9kcklEJywgJ3Jvb21fbXlUdXJuVmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzZyb29tLW15VHVybi9yb29tX215VHVyblZpZXcuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIHJvb21NeVR1cm5WaWV3O1xudmFyIG15VHVybkxheWVyO1xucm9vbU15VHVyblZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqXG4gICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8v5Yqg6L295a6a5bqE5Yqo55S7XG4gICAgICAgIGNjLmxvZyhcIm15VHVybkxheWVyXCIpO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIlRlc3RQcm9mYWIvbXlUdXJuTGF5ZXJcIiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5sb2coZXJyKTtcbiAgICAgICAgICAgIG15VHVybkxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQobXlUdXJuTGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIG15VHVybkxheWVyLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gcm9vbU15VHVyblZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0MDZlOEhuYUhKRkJxMVNtWXhZT3g5cCcsICdyb29tX290aGVyc1R1cm5Db250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vN3Jvb20tb3RoZXJzVHVybi9yb29tX290aGVyc1R1cm5Db250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciByb29tT3RoZXJzVHVybkNvbnRyb2xsZXI7XG5yb29tT3RoZXJzVHVybkNvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqXG4gICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7fSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJvb21PdGhlcnNUdXJuQ29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzcxM2E0dnBJMXRLd0lnWDFGQVdtT2ZhJywgJ3Jvb21fb3RoZXJzVHVyblZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC80cm9vbS83cm9vbS1vdGhlcnNUdXJuL3Jvb21fb3RoZXJzVHVyblZpZXcuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIHJvb21PdGhlcnNUdXJuVmlldztcbnZhciBvdGhlclR1cm5MYXllcjtcbnJvb21PdGhlcnNUdXJuVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIC8qXG4gICAgICpcbiAgICAgKiAqL1xuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3lrprluoTliqjnlLtcbiAgICAgICAgY2MubG9nKFwibXlUdXJuTGF5ZXJcIik7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiVGVzdFByb2ZhYi9vdGhlclR1cm5MYXllclwiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhlcnIpO1xuICAgICAgICAgICAgb3RoZXJUdXJuTGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChvdGhlclR1cm5MYXllcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgb3RoZXJUdXJuTGF5ZXIucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tT3RoZXJzVHVyblZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkNjIxNFR3ODNSTEpvM2NURWRJRFBzbCcsICdyb29tX3BhcnR5Um9vbU92ZXJDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vYTFyb29tLXBhcnR5Um9vbU92ZXIvcm9vbV9wYXJ0eVJvb21PdmVyQ29udHJvbGxlci5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcm9vbVBhcnR5Um9vbU92ZXJDb250cm9sbGVyO1xucm9vbVBhcnR5Um9vbU92ZXJDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgLypcbiAgICAgKlxuICAgICAqICovXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge30sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tUGFydHlSb29tT3ZlckNvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkZWY4MGNHa29GSGVKa2Y3Nk54SjhyOScsICdyb29tX3BhcnR5Um9vbU92ZXJWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vYTFyb29tLXBhcnR5Um9vbU92ZXIvcm9vbV9wYXJ0eVJvb21PdmVyVmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUm9vbV9yb29tV2FpdGluZ1ZpZXc7XG52YXIgcm9vbVJvb21XYWl0aW5nVmlld0xheWVyO1xuUm9vbV9yb29tV2FpdGluZ1ZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqXG4gICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8v5Yqg6L295a6a5bqE5Yqo55S7XG4gICAgICAgIGNjLmxvZyhcIm15VHVybkxheWVyXCIpO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIlRlc3RQcm9mYWIvcm9vbVJvb21XYWl0aW5nVmlld0xheWVyXCIsIGZ1bmN0aW9uIChlcnIsIHByZWZhYikge1xuICAgICAgICAgICAgY2MubG9nKGVycik7XG4gICAgICAgICAgICByb29tUm9vbVdhaXRpbmdWaWV3TGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChyb29tUm9vbVdhaXRpbmdWaWV3TGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIHJvb21Sb29tV2FpdGluZ1ZpZXdMYXllci5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xuICAgIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFJvb21fcm9vbVdhaXRpbmdWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMDUxMTBlN1N1dEt4cmNyemtpUkE0NzYnLCAncm9vbV9wbGF5ZXJIZWFkTHlhZXJTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC80cm9vbS8ycm9vbS1TdGFydEdhbWUvcm9vbV9wbGF5ZXJIZWFkTHlhZXJTY3JpcHQuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGhlYWRNb2RlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy/ojrflj5blpLTlg4/mlbDph48g5Yqg6L2955u45bqU5aS05YOP77yI6Jm954S25piv5Zyo6L+Z6YeMYWRkQ2hpbGTkuoYg5L2G5piv6L+Z5piv5pyA5aW955qE5Yqe5rOV5LqG77yJXG4gICAgICAgIC8v55Sx5LqObW9kZWzmsqHmnInov5jmsqHlrozmiJAg5YWI55So5YaZ5aW955qE5Lic6KW/5Luj5pu/XG5cbiAgICB9LFxuXG4gICAgb25GTWVzc2FnZV9nYW1lT25SZXN1bHQ6IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfZ2FtZU9uUmVzdWx0KG1zZykge1xuICAgICAgICAvL+WKoOi9vea4uOaIj+e7k+aenGxheWVyXG5cbiAgICAgICAgbXNnLmNvbXBsZXRlKCk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdiNzczN1RMcUVsTVZvdVVjWnhVdWN4RicsICdyb29tX3BsYXllclNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzJyb29tLVN0YXJ0R2FtZS9yb29tX3BsYXllclNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcGxheWVyVHlwZSA9IGNjLkVudW0oe1xuICAgIG5vQm9keTogMCxcbiAgICBwbGF5ZXI6IDFcbn0pO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v5aS05YOPXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIC8v5ZCN5a2XXG4gICAgICAgIHBsYXllck5hbWU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/kuKrkurrkv6Hmga9cbiAgICAgICAgaW5mb0xheWVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/miJHnmoTlsZ7mgKdcbiAgICAgICAgLy9wbGF5ZXJOdW1cbiAgICAgICAgbnVtOiAtMSxcbiAgICAgICAgdHlwZTogcGxheWVyVHlwZS5ub0JvZHlcblxuICAgIH0sXG4gICAgb25sb2FkOiBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gcGxheWVyVHlwZS5ub0JvZHkpIHtcbiAgICAgICAgICAgIC8v5pyJ5LiA5aWX6buY6K6k55qE5pi+56S65pa55byPXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuc3RyaW5nID0gXCLmraTmoYzmsqHkurpcIjtcbiAgICAgICAgICAgIC8v5Luj6KGo5q2k5qGM5rKh5Lq6XG4gICAgICAgIH1cbiAgICAgICAgLy/moLnmja5udW3mnaXorr7nva5wb3NpdGlvblxuICAgIH0sXG4gICAgLy9UT0RPOiDorr7nva7ov5nkuKrnjqnlrrbnmoTlkITnp43kv6Hmga9cbiAgICAvKlxuICAgICog546p5a6257G75Z6LXG4gICAgKlxuICAgICogKi9cbiAgICBvbkZNZXNzYWdlX3NldFBsYXllckluZm86IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfc2V0UGxheWVySW5mbyhtc2cpIHt9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMmIyZWFYQlBPVlA5NWp0eVhuOVc0Nm8nLCAncm9vbV9wbGF5ZXJWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vMnJvb20tU3RhcnRHYW1lL3Jvb21fcGxheWVyVmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcm9vbXBsYXllclZpZXc7XG5yb29tcGxheWVyVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcblxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tcGxheWVyVmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2MwMzk0ZFo3RGxFRUx5NDdUbGN2bVBoJywgJ3Jvb21fc2FmZXN0Q29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzhyb29tLXNhZmVzdC9yb29tX3NhZmVzdENvbnRyb2xsZXIuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIHJvb21TYWZlc3RDb250cm9sbGVyO1xucm9vbVNhZmVzdENvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqXG4gICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7fSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJvb21TYWZlc3RDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMmFmNjVXaytKSkM0Ymp3alBKQTlDQnAnLCAncm9vbV9zYWZlc3RWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vOHJvb20tc2FmZXN0L3Jvb21fc2FmZXN0Vmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcm9vbVNhZmVzdFZpZXc7XG52YXIgb3RoZXJUdXJuTGF5ZXI7XG5yb29tU2FmZXN0VmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIC8qXG4gICAgICpcbiAgICAgKiAqL1xuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3lrprluoTliqjnlLtcbiAgICAgICAgY2MubG9nKFwibXlUdXJuTGF5ZXJcIik7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiVGVzdFByb2ZhYi9zYWZlc3RMYXllclwiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhlcnIpO1xuICAgICAgICAgICAgb3RoZXJUdXJuTGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChvdGhlclR1cm5MYXllcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgb3RoZXJUdXJuTGF5ZXIucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICB9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb29tU2FmZXN0VmlldztcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ZjZjU3MkRDYzVPL2I3WnlKZDROUU1CJywgJ3Jvb21fc3RhcnRHYW1lQ29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0LzRyb29tLzJyb29tLVN0YXJ0R2FtZS9yb29tX3N0YXJ0R2FtZUNvbnRyb2xsZXIuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIHJvb21TdGFydEdhbWVDb250cm9sbGVyO1xucm9vbVN0YXJ0R2FtZUNvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICog6K+05piO77yaXG4gICAgKiAgIOacrOiKgueCueaYr+a4uOaIj+i/m+ihjOS4reeahOaVsOaNruebuOWFs+mAu+i+kVxuICAgICog5rWB56iL77yaXG4gICAgKiAgIDHvvIznrYnlvoVnYW1lRXZlbnROb3RpZnkg5raI5oGvXG4gICAgKiAgICAgICBh77yM6K+05piO77ya6LSf6LSj55Sx5pyN5Yqh5Zmo5Y+R5p2l55qE6KKr5Yqo5Yqo5L2cXG4gICAgKiAgICAgICAgICAgMe+8ie+8jOiiq+WKqOWKqOS9nO+8muacjeWKoeWZqOiuqeaIkeS7rOaJp+ihjOaIkeS7rOaJjeaJp+ihjOeahOWKqOS9nFxuICAgICogICAgICAgYu+8jOiBjOiDve+8mui0n+i0o+WIh+aNouWIsOafkOS6m+iKgueCueS4ilxuICAgICogICAgICAgY++8jOWKqOS9nO+8iGNvbnRleHToioLngrnvvInljIXmi6zvvJpcbiAgICAqICAgICAgICAgICAx77yJ77yM5a6a5bqEXG4gICAgKiAgICAgICAgICAgMu+8ie+8jOWPkeaJi+eJjFxuICAgICogICAgICAgICAgIDPvvInvvIzlj5HlhazlhbHniYxcbiAgICAqICAgMu+8jOetieW+hWdhbWVBY3Rpb25SZXEg5raI5oGvXG4gICAgKiAgICAgICBh77yM6K+05piO77ya6LSf6LSj546p5a626KaB5YGa55qE5Li75Yqo5Yqo5L2cXG4gICAgKiAgICAgICAgICAgMe+8ie+8jOS4u+WKqOWKqOS9nO+8muWIsOaIkeiHquW3seeahOaXtuWAmSDmiJHor6XlgZrku4DkuYgg6L2u5Yiw5Yir5Lq655qE5pe25YCZ5oiR6K+l5YGa5LuA5LmIXG4gICAgKiAgICAgICAgICAgYu+8jOiBjOiDve+8mui0n+i0o+WIh+aNouWIsOafkOS4quiKgueCueS4ilxuICAgICogICAgICAgICAgIGPvvIzliqjkvZzvvIhjb250ZXh077yJ5YyF5ousXG4gICAgKiAgICAgICAgICAgICAgIDHvvInvvIzova7liLDoh6rlt7FcbiAgICAqICAgICAgICAgICAgICAgMu+8ie+8jOi9ruWIsOWIq+S6ulxuICAgICogICAgICAgM++8jOetieW+hea4uOaIj+aIv+mXtOe7k+adn+WKqOeUu+aSremAgeWujOavlea2iOaBr1xuICAgICogICAgICAgICAgIGdvdG/kuLvnlYzpnaJcbiAgICAgKiAqL1xuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHt9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fSxcbiAgICBvbkZNZXNzYWdlX2dhbWVFdmVudE5vdGlmeTogZnVuY3Rpb24gb25GTWVzc2FnZV9nYW1lRXZlbnROb3RpZnkobXNnKSB7XG4gICAgICAgIGlmIChtc2cuYXJncy5ldmVudFR5cGUgPT0gXCJEaW5nWmh1YW5nXCIpIHtcbiAgICAgICAgICAgIC8vZ290b+WumuW6hFxuICAgICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJWaWxsYWdlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZy5hcmdzLmV2ZW50VHlwZSA9PSBcIkZhU2hvdVBhaVwiKSB7XG4gICAgICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcImhhbmRTaWduXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZy5hcmdzLmV2ZW50VHlwZSA9PSBcIkZhR29uZ0dvbmdQYWlcIikge1xuICAgICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJjb21tdW5pdHlDYXJkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9lcnJvciBldmVudFxuICAgICAgICB9XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH0sXG4gICAgb25GTWVzc2FnZV9nYW1lQWN0aW9uUmVxOiBmdW5jdGlvbiBvbkZNZXNzYWdlX2dhbWVBY3Rpb25SZXEobXNnKSB7XG4gICAgICAgIGlmIChtc2cuYXJncy5hY3Rpb25UeXBlID09IFwibXlBY3Rpb25cIikge1xuICAgICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJteUFjdGlvblwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cuYXJncy5hY3Rpb25UeXBlID09IFwib3RoZXJzQWN0aW9uXCIpIHtcbiAgICAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwib3RoZXJzQWN0aW9uXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9lcnJvciBhY3Rpb25cbiAgICAgICAgfVxuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICB9LFxuICAgIG9uRk1lc3NhZ2VfZ2FtZUVuZGluZ1RoaW5nc09mVmlldzogZnVuY3Rpb24gb25GTWVzc2FnZV9nYW1lRW5kaW5nVGhpbmdzT2ZWaWV3KG1zZykge1xuICAgICAgICAvL+aIv+mXtOe7k+adn+WKqOeUu+etieWKqOS9nOWujOaIkOWQjlxuICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIm15QWN0aW9uXCIpO1xuICAgICAgICBtc2cuY29tcGxldGUoKTtcbiAgICB9LFxuICAgIG9uRk1lc3NhZ2Vfc2FmZXN0UmVxOiBmdW5jdGlvbiBvbkZNZXNzYWdlX3NhZmVzdFJlcShtc2cpIHtcbiAgICAgICAgLy/liIfmjaLliLDkv53pmanoioLngrlcbiAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJzYWZlc3RcIik7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH0sXG4gICAgb25GTWVzc2FnZV9nYW1lT25SZXN1bHQ6IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfZ2FtZU9uUmVzdWx0KG1zZykge1xuICAgICAgICAvL+WIh+aNouWIsOe7k+eul+iKgueCuVxuICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcInN0YXRlbWVudHNcIik7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH0sXG4gICAgb25GTWVzc2FnZV9yb29tT25FbmQ6IGZ1bmN0aW9uIG9uRk1lc3NhZ2Vfcm9vbU9uRW5kKG1zZykge1xuICAgICAgICAvL+WIh+aNouWIsOeJjOWxgOe7k+adn+iKgueCuVxuICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcInBhcnR5Um9vbU92ZXJcIik7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuICAgIH1cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJvb21TdGFydEdhbWVDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZGVlMmNzQVlUVkJ6clBIOFQvbG1XRUQnLCAncm9vbV9zdGFydEdhbWVWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vMnJvb20tU3RhcnRHYW1lL3Jvb21fc3RhcnRHYW1lVmlldy5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgcm9vbVN0YXJ0R2FtZVZpZXc7XG52YXIgcGxheWVySGVhZExheWVyO1xucm9vbVN0YXJ0R2FtZVZpZXcgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICogMe+8jOivt+axguiOt+WPlueJjOahjOaVsOaNrlxuICAgICogICBhLCByb29t57G75Z6LXG4gICAgKiAgIGIsIOeOqeWutuS6uuaVsFxuICAgICogICBjLCAuLi4uLlxuICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiVGVzdFByb2ZhYi9wbGF5ZXJIZWFkTGF5ZXJcIiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5sb2coZXJyKTtcbiAgICAgICAgICAgIHBsYXllckhlYWRMYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHBsYXllckhlYWRMYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyb29tU2NlbmVcIik7XG4gICAgICAgIGNjLmxvZyhcInJvb21TY2VuZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gcm9vbVN0YXJ0R2FtZVZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxNTViMHpocndOUFRLaHIybzQ2ZnpLbycsICdyb29tX3N0YXRlbWVudHNDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vOXJvb20tc3RhdGVtZW50cy9yb29tX3N0YXRlbWVudHNDb250cm9sbGVyLmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciByb29tU3RhdGVtZW50c0NvbnRyb2xsZXI7XG5yb29tU3RhdGVtZW50c0NvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICAvKlxuICAgICAqXG4gICAgICogKi9cbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7fSxcbiAgICAvL1RPRE865b2T56a75byA5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25MZWF2ZU5vZGU6IGZ1bmN0aW9uIG9uTGVhdmVOb2RlKCkge31cblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJvb21TdGF0ZW1lbnRzQ29udHJvbGxlcjtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2Y3ZWFjNXovYTVLUUlyN1dEcTJpZWdSJywgJ3Jvb21fc3RhdGVtZW50c1ZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC80cm9vbS85cm9vbS1zdGF0ZW1lbnRzL3Jvb21fc3RhdGVtZW50c1ZpZXcuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIHJvb21TdGF0ZW1lbnRzVmlldztcbnZhciBvdGhlclR1cm5MYXllcjtcbnJvb21TdGF0ZW1lbnRzVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy9UT0RPOuW9k+WIh+aNouWIsOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIC8qXG4gICAgICpcbiAgICAgKiAqL1xuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3lrprluoTliqjnlLtcbiAgICAgICAgY2MubG9nKFwibXlUdXJuTGF5ZXJcIik7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiVGVzdFByb2ZhYi9zdGF0ZW1lbnRzTGF5ZXJcIiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5sb2coZXJyKTtcbiAgICAgICAgICAgIG90aGVyVHVybkxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQob3RoZXJUdXJuTGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIG90aGVyVHVybkxheWVyLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgfVxuXG59KTtcbm1vZHVsZS5leHBvcnRzID0gcm9vbVN0YXRlbWVudHNWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzY0NmVIRXV5MUhab0ErYnAxVXVOVW4nLCAncnVsZUNvbnRyb2xsZXInKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS9ydWxlL3J1bGVDb250cm9sbGVyLmpzXG5cbi8v6KeE5YiZ6K+05piOXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIHJ1bGVDb250cm9sbGVyO1xucnVsZUNvbnRyb2xsZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vVE9ETzrlvZPliIfmjaLliLDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkVudGVyTm9kZTogZnVuY3Rpb24gb25FbnRlck5vZGUoKSB7XG4gICAgICAgIC8vbG9hZHNjZW5l44CC44CC44CCXG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHtcbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uTGVhdmVOb2RlXCIpO1xuICAgIH1cbn0pO1xuLy8gLy/liIfmjaLpkrHljIXnlYzpnaJcbi8vIG9uRk1lc3NhZ2Vfd2FsbGV0QnRuY2xpY2s6IGZ1bmN0aW9uKG1zZykge1xuLy8gICAgIE1WQy5GTG9nLmRhdGEoXCLpkrHljIXot7PovaxcIiwgXCLmjqXmlLbmtojmga8gezB9XCIsIG1zZyk7XG4vLyAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG5cbi8vICAgICBpZihtc2cpe1xuLy8gICAgICAgICBpZihtc2cuYXJncy5uYW1lID0gXCLliY3lvoDpkrHljIXpobXpnaJcIil7XG4vLyAgICAgICAgICAgICBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIndhbGxldFwiKTtcbi8vICAgICAgICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuLy8gb25GTWVzc2FnZV9jbGlja0xvZ2luQnV0dG9uOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBpZiggbXNnLmFyZ3MubmFtZSA9PSBcIueZu+W9lVwiKXtcbi8vICAgICAgICAgLy/ov5vlhaXliIbkuqvoioLngrlcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWJjVwiKTtcbi8vICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJtYWluXCIpO1xuLy8gICAgICAgICBjYy5sb2coXCJnb3RvIG1haW4g5ZCOXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1lbHNlIGlmKG1zZy5hcmdzLm5hbWUgPT0gXCLms6jlhoxcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIC8vIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwiU2hhcmVcIik7XG4vLyAgICAgICAgIC8v5Y+R6YCB5raI5oGv57uZ572R57uc5qih5Z2XXG4vLyAgICAgfVxuXG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gcnVsZUNvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5YTVlNlhHSDdGS25ZY0FZTVZYOWZyRicsICdydWxlU2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvcnVsZS9ydWxlU2NyaXB0LmpzXG5cbi8v6KeE5YiZ6K+05piOXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL+WKoOi9veeahOaXtuWAmeimgeS4jua2iOaBr+i3r+eUsei/nuaOpVxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6ZSA5q+BXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8v6ZSA5q+B55qE5pe25YCZ6KaB5pat5byA6L+e5o6lXG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzY3ZDFmVW0wRlZNT29GWmtERDNKSkdDJywgJ3J1bGVWaWV3Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvcnVsZS9ydWxlVmlldy5qc1xuXG4vL+inhOWImeivtOaYjlxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBydWxlVmlldztcbnJ1bGVWaWV3ID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL+WKoOi9vee7k+eul+WcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJydWxlU2NlbmVcIik7XG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gcnVsZVZpZXc7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkZDQ4NStQWlVCT1hJRHVZRllHOXNTUicsICdzZXRzY29yZUxheWVyU2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L0xpdWp1bmhhby9yb29tV2FpdHRpbmcvc2V0c2NvcmVMYXllclNjcmlwdC5qc1xuXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy/orr7nva7luKblhaXorrDliIbniYwg5paH5a2XXG4gICAgICAgIHRpdGxlTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/pgIDlh7og5oyJ6ZKuXG4gICAgICAgIHF1aXRCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v5ruR5Yqo5p2hXG4gICAgICAgIHNsaWRlcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TbGlkZXJcbiAgICAgICAgfSxcbiAgICAgICAgLy/nrKzkuIDmrrUg5Y+Y6ImyXG4gICAgICAgIGZpcnN0c2xpZGVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+esrOS6jOautSDlj5joibJcbiAgICAgICAgc2Vjb25kc2xpZGVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+esrOS4ieautSDlj5joibJcbiAgICAgICAgdGhpcmRzbGlkZXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIC8v5bim5YWl5pWw6YePIOaWh+Wtl1xuICAgICAgICBzY29yZUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v6K6+572u5bim5YWl6K6w5YiG54mM77yI5bCP77yJIOaWh+Wtl1xuICAgICAgICBzZXR0YWtlaW5MYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+acgOWwj+W4puWFpSDmloflrZdcbiAgICAgICAgbWludGFrZWluOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5pyA5aSn5bim5YWlIOaWh+Wtl1xuICAgICAgICBtYXh0YWtlaW46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/lvIDlkK/oh6rliqjkubDlhaUg5paH5a2XXG4gICAgICAgIG9wZW5hdXRvYnV5TGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/lvIDlkK/oh6rliqjkubDlhaUg5oyJ6ZKuXG4gICAgICAgIG9wZW5CdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v6Ieq5Yqo5Lmw5YWl5Y+Y6Imy6IOM5pmvXG4gICAgICAgIG9wZW5CdG5iZ1Nwcml0ZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgLy/mu5HlnZdcbiAgICAgICAgY2lyY2xlU3ByaXRlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+iHquWKqOS5sOWFpVxuICAgICAgICBhdXRvYnV5c2V0dGluZ0xheWVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxheW91dFxuICAgICAgICB9LFxuICAgICAgICAvL+W9k+aIkeeahOiuoeWIhuadv+WwkeS6ji/nrYnkuo4g5paH5a2XXG4gICAgICAgIHNjb3JlbGVzczFMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+S4quWkp+ebsuazqOaXtiDmloflrZdcbiAgICAgICAgc2NvcmVsZXNzMkxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v57O757uf6Ieq5Yqo5Li65oiR6KGl5YWFIOaWh+Wtl1xuICAgICAgICBzdXBwbGVtZW50MUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5LiqYnV5LWluIOaWh+Wtl1xuICAgICAgICBzdXBwbGVtZW50MkxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5YeP5Y+3IOaMiemSrlxuICAgICAgICBtaW51c0J0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/liqDlj7cg5oyJ6ZKuXG4gICAgICAgIGFkZEJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/ooaXlhYVidXktaW7mlbDph49cbiAgICAgICAgYnV5aW5jb3VudExhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v56Gu5a6a5bim5YWlIOaMiemSrlxuICAgICAgICBjb25maXJtdGFrZUJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/noa7lrprluKblhaUg5paH5a2XXG4gICAgICAgIGNvbmZpcm10YWtlTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfSxcbiAgICBvbkRlc3Rvcnk6IGZ1bmN0aW9uIG9uRGVzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfSxcbiAgICAvL+mAgOWHuuiuvue9ruiusOWIhueJjGxheWVyXG4gICAgcXVpdEJ0bmNsaWNrOiBmdW5jdGlvbiBxdWl0QnRuY2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0c2NvcmVMYXllci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLy9zbGlkZXLmu5HliqhcbiAgICBzbGlkZXJjbGljazogZnVuY3Rpb24gc2xpZGVyY2xpY2soKSB7XG4gICAgICAgIGNjLmxvZyhcIjExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExXCIpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2xpZGVyLnByb2dyZXNzICogMTAwO1xuICAgICAgICBjYy5sb2coaW5kZXgpO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuc2xpZGVyYmFja2dyb3VuZC5ub2RlLndpZHRoO1xuICAgICAgICBjYy5sb2cod2lkdGgpO1xuXG4gICAgICAgIC8v5Zub5Liq5L2N572u55qE5oyJ6ZKu5Yqo55S7XG4gICAgICAgIHZhciB0bzBBY3Rpb24gPSBjYy5tb3ZlVG8oMC4xLCBjYy5wKC13aWR0aCAvIDIsIDApKTtcbiAgICAgICAgdmFyIHRvMzNBY3Rpb24gPSBjYy5tb3ZlVG8oMC4xLCBjYy5wKC13aWR0aCAvIDYsIDApKTtcbiAgICAgICAgdmFyIHRvNjdBY3Rpb24gPSBjYy5tb3ZlVG8oMC4xLCBjYy5wKHdpZHRoIC8gNiwgMCkpO1xuICAgICAgICB2YXIgdG8xMDBBY3Rpb24gPSBjYy5tb3ZlVG8oMC4xLCBjYy5wKHdpZHRoIC8gMiwgMCkpO1xuXG4gICAgICAgIHZhciBoYW5kbGUgPSB0aGlzLnNsaWRlci5oYW5kbGUubm9kZTtcblxuICAgICAgICAvL+a7keWKqOWMuumXtOWIpOWumlxuICAgICAgICBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgICAgICAgaGFuZGxlLnJ1bkFjdGlvbih0bzBBY3Rpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gMTAwKSB7XG4gICAgICAgICAgICBoYW5kbGUucnVuQWN0aW9uKHRvMTAwQWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPD0gMTcpIHtcbiAgICAgICAgICAgIGhhbmRsZS5ydW5BY3Rpb24odG8wQWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IDE3ICYmIGluZGV4IDw9IDUwKSB7XG4gICAgICAgICAgICBoYW5kbGUucnVuQWN0aW9uKHRvMzNBY3Rpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gNTAgJiYgaW5kZXggPD0gODMpIHtcbiAgICAgICAgICAgIGhhbmRsZS5ydW5BY3Rpb24odG82N0FjdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiA4MyAmJiBpbmRleCA8PSAxMDApIHtcbiAgICAgICAgICAgIGhhbmRsZS5ydW5BY3Rpb24odG8xMDBBY3Rpb24pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+iHquWKqOS5sOWFpeaMiemSruW8gOWQr1xuICAgIG9wZW5CdG5jbGljazogZnVuY3Rpb24gb3BlbkJ0bmNsaWNrKCkge1xuICAgICAgICBjYy5sb2cob3BlbmF1dG9idXkpO1xuICAgICAgICBjYy5sb2coXCJvcGVuQnRuY2xpY2tcIik7XG5cbiAgICAgICAgdmFyIG1vdmV3aWR0aCA9IHRoaXMuY2lyY2xlU3ByaXRlLm5vZGUud2lkdGggLyAyO1xuICAgICAgICB2YXIgbGVmdG1vdmVhY3Rpb24gPSBjYy5tb3ZlVG8oMC4yLCBjYy5wKC1tb3Zld2lkdGgsIDApKTtcbiAgICAgICAgdmFyIHJpZ2h0bW92ZWFjdGlvbiA9IGNjLm1vdmVUbygwLjIsIGNjLnAobW92ZXdpZHRoLCAwKSk7XG5cbiAgICAgICAgdmFyIGNvbG9yYmx1ZSA9IG5ldyBjYy5Db2xvcigwLCAxMTIsIDI1NSk7XG4gICAgICAgIHZhciBjb2xvcmdyYXkgPSBuZXcgY2MuQ29sb3IoMTExLCAxMTEsIDExMSk7XG5cbiAgICAgICAgaWYgKG9wZW5hdXRvYnV5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY2MubG9nKFwib3BlbmF1dG9idXkgPSBcIiArIG9wZW5hdXRvYnV5KTtcblxuICAgICAgICAgICAgdGhpcy5hdXRvYnV5c2V0dGluZ0xheWVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5vcGVuQnRuYmdTcHJpdGUubm9kZS5jb2xvciA9IGNvbG9yYmx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlU3ByaXRlLm5vZGUucnVuQWN0aW9uKHJpZ2h0bW92ZWFjdGlvbik7XG5cbiAgICAgICAgICAgIGNjLmxvZyhcIuWPkemsvOWcsOaWuVwiLCB0aGlzLm9wZW5CdG5iZ1Nwcml0ZS5ub2RlLmNvbG9yKTtcbiAgICAgICAgICAgIG9wZW5hdXRvYnV5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIm9wZW5hdXRvYnV5ID0gXCIgKyBvcGVuYXV0b2J1eSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXV0b2J1eXNldHRpbmdMYXllci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLm9wZW5CdG5iZ1Nwcml0ZS5ub2RlLmNvbG9yID0gY29sb3JncmF5O1xuXG4gICAgICAgICAgICB0aGlzLmNpcmNsZVNwcml0ZS5ub2RlLnJ1bkFjdGlvbihsZWZ0bW92ZWFjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLm9wZW5CdG5iZ1Nwcml0ZS5ub2RlLmNvbG9yKTtcblxuICAgICAgICAgICAgY2MubG9nKFwi5Y+R6ay85Zyw5pa5XCIsIHRoaXMub3BlbkJ0bmJnU3ByaXRlLm5vZGUuY29sb3IpO1xuICAgICAgICAgICAgb3BlbmF1dG9idXkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/lh4/lj7fmjInpkq7ngrnlh7tcbiAgICBtaW51c0J0bmNsaWNrOiBmdW5jdGlvbiBtaW51c0J0bmNsaWNrKCkge30sXG4gICAgLy/liqDlj7fmjInpkq7ngrnlh7tcbiAgICBhZGRCdG5jbGljazogZnVuY3Rpb24gYWRkQnRuY2xpY2soKSB7fSxcbiAgICAvL+ehruWumuW4puWFpeaMiemSrueCueWHu1xuICAgIGNvbmZpcm10YWtlQnRuY2xpY2s6IGZ1bmN0aW9uIGNvbmZpcm10YWtlQnRuY2xpY2soKSB7fVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2FhN2M1RXdqY1pJU3BBaUZhSDhKVXcrJywgJ3NldHRpbmdDb250cm9sbGVyJyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvbXkvc2V0dGluZy9zZXR0aW5nQ29udHJvbGxlci5qc1xuXG4vL+ezu+e7n+iuvue9rlxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciBzZXR0aW5nQ29udHJvbGxlcjtcbnNldHRpbmdDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkxlYXZlTm9kZVwiKTtcbiAgICB9XG59KTtcbi8vIC8v5YiH5o2i6ZKx5YyF55WM6Z2iXG4vLyBvbkZNZXNzYWdlX3dhbGxldEJ0bmNsaWNrOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBNVkMuRkxvZy5kYXRhKFwi6ZKx5YyF6Lez6L2sXCIsIFwi5o6l5pS25raI5oGvIHswfVwiLCBtc2cpO1xuLy8gICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuXG4vLyAgICAgaWYobXNnKXtcbi8vICAgICAgICAgaWYobXNnLmFyZ3MubmFtZSA9IFwi5YmN5b6A6ZKx5YyF6aG16Z2iXCIpe1xuLy8gICAgICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG4vLyAgICAgICAgICAgICBtc2cuY29tcGxldGUoKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbi8vIG9uRk1lc3NhZ2VfY2xpY2tMb2dpbkJ1dHRvbjogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgaWYoIG1zZy5hcmdzLm5hbWUgPT0gXCLnmbvlvZVcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDliY1cIik7XG4vLyAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibWFpblwiKTtcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWQjlwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9ZWxzZSBpZihtc2cuYXJncy5uYW1lID09IFwi5rOo5YaMXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICAvLyBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIlNoYXJlXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1cblxuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdDb250cm9sbGVyO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNTAxZmZJNE5PUkJtSk00NGdtdHZGOHcnLCAnc2V0dGluZ1NjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L3NldHRpbmcvc2V0dGluZ1NjcmlwdC5qc1xuXG4vL+ezu+e7n+iuvue9rlxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy/liqDovb3nmoTml7blgJnopoHkuI7mtojmga/ot6/nlLHov57mjqVcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfSxcbiAgICAvL+mUgOavgVxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge1xuICAgICAgICAvL+mUgOavgeeahOaXtuWAmeimgeaWreW8gOi/nuaOpVxuICAgICAgICBjYy5sb2coXCLplIDmr4HkuoYg5pat5byA6L+e5o6lXCIpO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlNTVlMkM2RGlWREI0dktmZGNLSktIYicsICdzZXR0aW5nVmlldycpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L3NldHRpbmcvc2V0dGluZ1ZpZXcuanNcblxuLy/ns7vnu5/orr7nva5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcbnZhciBQcm9qZWN0ID0gcmVxdWlyZShcIlByb2plY3RcIik7XG52YXIgc2V0dGluZ1ZpZXc7XG5zZXR0aW5nVmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3nu5PnrpflnLrmma9cbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2V0dGluZ1NjZW5lXCIpO1xuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICAgICAgLy9sb2Fkc2NlbmXjgILjgILjgIJcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7fVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdWaWV3O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZGY5OTlUZzZSbEpEb053MFpkQ3pkRzMnLCAnc2hhcmVMYXllclNjcmlwdCcpO1xuLy8gc2NyaXB0cy9QOS9MaXVqdW5oYW8vcm9vbVdhaXR0aW5nL3NoYXJlTGF5ZXJTY3JpcHQuanNcblxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v6YCA5Ye65YiG5Lqr6aG16Z2i5oyJ6ZKuXG4gICAgICAgIHNoYXJlTGF5ZXJCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v5b6u5L+h5YiG5Lqr5oyJ6ZKuXG4gICAgICAgIHNoYXJlVlhCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8vUVHliIbkuqvmjInpkq5cbiAgICAgICAgc2hhcmVRUUJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/pgoDor7flpb3lj4sg5paH5a2XXG4gICAgICAgIGludml0ZWZyaWVuZHNMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+W+ruS/oeWIhuS6qyDmloflrZdcbiAgICAgICAgVlhMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL1FR5YiG5LqrIOaWh+Wtl1xuICAgICAgICBRUUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH0sXG4gICAgb25EZXN0b3J5OiBmdW5jdGlvbiBvbkRlc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH0sXG4gICAgLy/lvq7kv6HliIbkuqsg5oyJ6ZKu54K55Ye7XG4gICAgc2hhcmVWWEJ0bmNsaWNrOiBmdW5jdGlvbiBzaGFyZVZYQnRuY2xpY2soKSB7fSxcbiAgICAvL1FR5YiG5LqrIOaMiemSrueCueWHu1xuICAgIHNoYXJlUVFCdG5jbGljazogZnVuY3Rpb24gc2hhcmVRUUJ0bmNsaWNrKCkge30sXG4gICAgLy/pgIDlh7rliIbkuqvnlYzpnaIg5oyJ6ZKu54K55Ye7XG4gICAgc2hhcmVMYXllckJ0bmNsaWNrOiBmdW5jdGlvbiBzaGFyZUxheWVyQnRuY2xpY2soKSB7fVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2RlMWYza2RRQkpHWmFkdVpmMm91Y29TJywgJ3N0YW5kYXJkcGFydHlTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvTWFhbm5hL3N0YW5kYXJkcGFydHlTY3JpcHQuanNcblxuLypcbumAieaLqeWIm+W7uuagh+WHhuWxgOmhtemdolxuICovXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIFA5Um9vbURhdGEgPSByZXF1aXJlKFwiUDlSb29tRGF0YVwiKTtcbnZhciBQOUNyZWF0ZVNldHRpbmdzID0gcmVxdWlyZShcIlA5Q3JlYXRlU2V0dGluZ3NcIik7XG52YXIgdmFsdWVhcnJheV9TQl9CQl9FbnRyeUZlZSA9IFtdOyAvL+WtmOWCqFNCX0JCX0VudHJ5RmVlKOWkp+Wwj+ebsiDluKblhaXorrDliIbniYwp55qE5pWw57uEXG52YXIgdmFsdWVhcnJheV9QbGF5ZXJOdW0gPSBbXTsgLy/lrZjlgqhQbGF5ZXJOdW3kuIrmoYzkurrmlbDnmoTmlbDnu4RcbnZhciB2YWx1ZWFycmF5X1BhcnR5VGltZSA9IFtdOyAvL+WtmOWCqOeJjOWxgOaXtumVv+eahOaVsOe7hFxudmFyIHZhbHVlYXJyYXlfQW50ZSA9IFtdO1xudmFyIHZhbHVlYXJyYXlfRGVlcFJhaXNlID0gW107XG5cbnZhciBwbGF5ZXJudW07XG52YXIgcGFydHl0aW1lO1xudmFyIHBhcnR5QW50ZTtcbnZhciBwYXJ0eURlZXBSYWlzZTtcbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJnOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuXG4gICAgICAgIHNjcm9sbFZpZXc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xuXG4gICAgICAgIH0sXG4gICAgICAgIHZpZXcxOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgdmlldzI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICB2aWV3Mzoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgQmxpbmRTbGlkZXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU2xpZGVyXG4gICAgICAgIH0sXG4gICAgICAgIFBlb3BsZU51bWJlclNsaWRlcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TbGlkZXJcbiAgICAgICAgfSxcbiAgICAgICAgVGltZVNsaWRlcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TbGlkZXJcbiAgICAgICAgfSxcbiAgICAgICAgQW50ZVNsaWRlcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TbGlkZXJcbiAgICAgICAgfSxcbiAgICAgICAgRGVlcFJhaXNlU2xpZGVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNsaWRlclxuICAgICAgICB9LFxuICAgICAgICAvL+Wwj+ebslxuICAgICAgICBzYmxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5aSn55uyXG4gICAgICAgIGJibGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/luKblhaXorrDliIbniYxcbiAgICAgICAgc2NvcmVjYXJkbGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcblxuICAgICAgICAvL1xuICAgICAgICAvL+etieWIhue6v1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+eJjOWxgOaXtumVv1xuICAgICAgICByb29tVGltZWxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuXG4gICAgICAgIC8vIC8v6K+35rGC6I635Y+W5ri45oiP5pWw5o2u6YWN572u5paH5Lu2XG4gICAgICAgIHZhciBnYW1lZGF0YW1zZyA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJHZXRQOUNyZWF0ZVNldHRpbmdzU1RERGF0YUFja1wiLCBcInJvb3RcIik7XG5cbiAgICAgICAgZ2FtZWRhdGFtc2cuc2VuZCgpO1xuICAgIH0sXG5cbiAgICBvbkRlc3Rvcnk6IGZ1bmN0aW9uIG9uRGVzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfSxcblxuICAgIC8v6auY57qn6YCJ6aG5XG4gICAgbW9yZW9wdGlvbmNhbGw6IGZ1bmN0aW9uIG1vcmVvcHRpb25jYWxsKCkge1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWV3Mi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Cb3R0b20oMC4xKTtcbiAgICAgICAgdGhpcy52aWV3My5jb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcbiAgICB9LFxuICAgIC8v5pS26LW3XG4gICAgcGFja3VwY2FsbDogZnVuY3Rpb24gcGFja3VwY2FsbCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKDAuMSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWV3Mi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aWV3My5jb2xvciA9IG5ldyBjYy5Db2xvcigyMCwgMzIsIDc4KTtcbiAgICB9LFxuXG4gICAgLy/liJvlu7rmoIflh4blsYBcbiAgICBzdGFuZGFyZEJ1dHRvbkNsaWNrOiBmdW5jdGlvbiBzdGFuZGFyZEJ1dHRvbkNsaWNrKCkge1xuXG4gICAgICAgIHZhciByb29tTmFtZSA9IFwi5oiR55qETVRU5ri45oiPXCI7XG4gICAgICAgIC8vIC8v5oi/6Ze057G75Z6LXG4gICAgICAgIHZhciByb29tVHlwZSA9IFByb2plY3QuUDkuREFUQS5HQU1FLlA5Um9vbVR5cGUuU1REO1xuICAgICAgICAvLyAvL+aIv+mXtOmAiemhueWPguiAg1A5Um9vbURhdGEuanPkuK3nmoRQOVNUREdhbWVEYXRh5ZKMUDlNVFRHYW1lRGF0YeeahOWxnuaAp+WumuS5iS4uLlxuICAgICAgICB2YXIgcm9vbURhdGEgPSBuZXcgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlNVFRHYW1lRGF0YSgpO1xuICAgICAgICBQcm9qZWN0LkZXUy5NU0cuRldTTWVzc2FnZUZhY3Rvcnkucm9vbUNyZWF0ZShyb29tTmFtZSwgcm9vbVR5cGUsIHJvb21EYXRhKS5zZW5kKCk7XG4gICAgfSxcblxuICAgIC8v5aSn5bCP55uy5rOo6K6w5YiG54mMU2xpZGVyXG4gICAgQmxpbmRTbGlkZXJjYWxsOiBmdW5jdGlvbiBCbGluZFNsaWRlcmNhbGwoKSB7XG5cbiAgICAgICAgdmFyIHBlcmNlbnQgPSB0aGlzLkJsaW5kU2xpZGVyLnByb2dyZXNzO1xuICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHZhbHVlYXJyYXlfU0JfQkJfRW50cnlGZWUubGVuZ3RoOyBhKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbHVlX1NCID0gdmFsdWVhcnJheV9TQl9CQl9FbnRyeUZlZVthXS5TQjtcbiAgICAgICAgICAgIHZhciB2YWx1ZV9CQiA9IHZhbHVlYXJyYXlfU0JfQkJfRW50cnlGZWVbYV0uQkI7XG4gICAgICAgICAgICB2YXIgdmFsdWVfRW50cnkgPSB2YWx1ZWFycmF5X1NCX0JCX0VudHJ5RmVlW2FdLkVudHJ5RmVlO1xuICAgICAgICAgICAgaWYgKGEgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwZXJjZW50IDwgMSAvICgodmFsdWVhcnJheV9TQl9CQl9FbnRyeUZlZS5sZW5ndGggLSAxKSAqIDIpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYmxhYmVsLnN0cmluZyA9IHZhbHVlX1NCO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJibGFiZWwuc3RyaW5nID0gdmFsdWVfQkI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVjYXJkbGFiZWwuc3RyaW5nID0gdmFsdWVfRW50cnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKDIgKiAoYSAtIDEpICsgMSkgLyAoKHZhbHVlYXJyYXlfU0JfQkJfRW50cnlGZWUubGVuZ3RoIC0gMSkgKiAyKSA8IHBlcmNlbnQgJiYgcGVyY2VudCA8ICgyICogYSArIDEpIC8gKCh2YWx1ZWFycmF5X1NCX0JCX0VudHJ5RmVlLmxlbmd0aCAtIDEpICogMikpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNibGFiZWwuc3RyaW5nID0gdmFsdWVfU0I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmJsYWJlbC5zdHJpbmcgPSB2YWx1ZV9CQjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZWNhcmRsYWJlbC5zdHJpbmcgPSB2YWx1ZV9FbnRyeTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL+WtmOWCqOWIm+W7uueJjOahjOS/oeaBr1xuICAgICAgICAgICAgICAgIFByb2plY3QuUDkuREFUQS5ST09NLlA5U1RER2FtZURhdGEuc2IgPSB0aGlzLnNibGFiZWwuc3RyaW5nOyAvL+Wwj+ebslxuICAgICAgICAgICAgICAgIFByb2plY3QuUDkuREFUQS5ST09NLlA5U1RER2FtZURhdGEuYmIgPSB0aGlzLmJibGFiZWwuc3RyaW5nOyAvL+Wkp+ebslxuICAgICAgICAgICAgICAgIFByb2plY3QuUDkuREFUQS5ST09NLlA5U1RER2FtZURhdGEuZW50ZXJDaGlwID0gdGhpcy5zY29yZWNhcmRsYWJlbC5zdHJpbmc7IC8v6K6w5YiG54mMXG5cbiAgICAgICAgICAgICAgICBjYy5sb2coUHJvamVjdC5QOS5EQVRBLlJPT00uUDlTVERHYW1lRGF0YS5zYiwgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlTVERHYW1lRGF0YS5iYiwgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlTVERHYW1lRGF0YS5lbnRlckNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBQZW9wbGVOdW1iZXJTbGlkZXIxOiBmdW5jdGlvbiBQZW9wbGVOdW1iZXJTbGlkZXIxKCkge1xuXG4gICAgICAgIHZhciBwZXJjZW50ID0gdGhpcy5QZW9wbGVOdW1iZXJTbGlkZXIucHJvZ3Jlc3M7XG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdmFsdWVhcnJheV9QbGF5ZXJOdW0ubGVuZ3RoOyBhKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbHVlX1BsYXllck51bSA9IHZhbHVlYXJyYXlfUGxheWVyTnVtW2FdO1xuICAgICAgICAgICAgY2MubG9nKHZhbHVlX1BsYXllck51bSk7XG4gICAgICAgICAgICBpZiAoYSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBlcmNlbnQgPCAxIC8gKCh2YWx1ZWFycmF5X1BsYXllck51bS5sZW5ndGggLSAxKSAqIDIpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJudW0gPSB2YWx1ZV9QbGF5ZXJOdW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKDIgKiAoYSAtIDEpICsgMSkgLyAoKHZhbHVlYXJyYXlfUGxheWVyTnVtLmxlbmd0aCAtIDEpICogMikgPCBwZXJjZW50ICYmIHBlcmNlbnQgPCAoMiAqIGEgKyAxKSAvICgodmFsdWVhcnJheV9QbGF5ZXJOdW0ubGVuZ3RoIC0gMSkgKiAyKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVybnVtID0gdmFsdWVfUGxheWVyTnVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8v5a2Y5YKo5Yib5bu654mM5qGM5L+h5oGvXG4gICAgICAgICAgICAgICAgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlTVERHYW1lRGF0YS5wbGF5ZXJDb3VudCA9IHRoaXMucGxheWVybnVtOyAvL+eJjOahjOS6uuaVsFxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuS6uuaVsO+8mlwiLCBQcm9qZWN0LlA5LkRBVEEuUk9PTS5QOVNUREdhbWVEYXRhLnBsYXllckNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBUaW1lU2xpZGVyMTogZnVuY3Rpb24gVGltZVNsaWRlcjEoKSB7XG5cbiAgICAgICAgdmFyIHBlcmNlbnQgPSB0aGlzLlRpbWVTbGlkZXIucHJvZ3Jlc3M7XG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdmFsdWVhcnJheV9QYXJ0eVRpbWUubGVuZ3RoOyBhKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbHVlX1BsYXllclRpbWUgPSB2YWx1ZWFycmF5X1BhcnR5VGltZVthXTtcbiAgICAgICAgICAgIGlmIChhID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocGVyY2VudCA8IDEgLyAoKHZhbHVlYXJyYXlfUGFydHlUaW1lLmxlbmd0aCAtIDEpICogMikpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnR5dGltZSA9IHZhbHVlX1BsYXllclRpbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKDIgKiAoYSAtIDEpICsgMSkgLyAoKHZhbHVlYXJyYXlfUGFydHlUaW1lLmxlbmd0aCAtIDEpICogMikgPCBwZXJjZW50ICYmIHBlcmNlbnQgPCAoMiAqIGEgKyAxKSAvICgodmFsdWVhcnJheV9QYXJ0eVRpbWUubGVuZ3RoIC0gMSkgKiAyKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHl0aW1lID0gdmFsdWVfUGxheWVyVGltZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL+WtmOWCqOWIm+W7uueJjOahjOS/oeaBr1xuICAgICAgICAgICAgICAgIFByb2plY3QuUDkuREFUQS5ST09NLlA5U1RER2FtZURhdGEucm9vbVRpbWUgPSB0aGlzLnBhcnR5dGltZTtcblxuICAgICAgICAgICAgICAgIGNjLmxvZyhcInRpbWVcIiwgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlTVERHYW1lRGF0YS5yb29tVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgQW50ZVNsaWRlcmNhbGw6IGZ1bmN0aW9uIEFudGVTbGlkZXJjYWxsKCkge1xuICAgICAgICB2YXIgcGVyY2VudCA9IHRoaXMuQW50ZVNsaWRlci5wcm9ncmVzcztcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB2YWx1ZWFycmF5X0FudGUubGVuZ3RoOyBhKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbHVlX1BsYXllckFudGUgPSB2YWx1ZWFycmF5X0FudGVbYV07XG4gICAgICAgICAgICBpZiAoYSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBlcmNlbnQgPCAxIC8gKCh2YWx1ZWFycmF5X0FudGUubGVuZ3RoIC0gMSkgKiAyKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHlBbnRlID0gdmFsdWVfUGxheWVyQW50ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgoMiAqIChhIC0gMSkgKyAxKSAvICgodmFsdWVhcnJheV9BbnRlLmxlbmd0aCAtIDEpICogMikgPCBwZXJjZW50ICYmIHBlcmNlbnQgPCAoMiAqIGEgKyAxKSAvICgodmFsdWVhcnJheV9BbnRlLmxlbmd0aCAtIDEpICogMikpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnR5QW50ZSA9IHZhbHVlX1BsYXllckFudGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy/lrZjlgqjliJvlu7rniYzmoYzkv6Hmga9cbiAgICAgICAgICAgICAgICBQcm9qZWN0LlA5LkRBVEEuUk9PTS5QOVNUREdhbWVEYXRhLmFudGUgPSB0aGlzLnBhcnR5QW50ZTtcblxuICAgICAgICAgICAgICAgIGNjLmxvZyhcInRpbWVcIiwgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlTVERHYW1lRGF0YS5hbnRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBEZWVwUmFpc2VTbGlkZXJjYWxsOiBmdW5jdGlvbiBEZWVwUmFpc2VTbGlkZXJjYWxsKCkge1xuICAgICAgICB2YXIgcGVyY2VudCA9IHRoaXMuRGVlcFJhaXNlU2xpZGVyLnByb2dyZXNzO1xuICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHZhbHVlYXJyYXlfRGVlcFJhaXNlLmxlbmd0aDsgYSsrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZV9EZWVwUmFpc2UgPSB2YWx1ZWFycmF5X0RlZXBSYWlzZVthXTtcbiAgICAgICAgICAgIGlmIChhID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocGVyY2VudCA8IDEgLyAoKHZhbHVlYXJyYXlfRGVlcFJhaXNlLmxlbmd0aCAtIDEpICogMikpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnR5RGVlcFJhaXNlID0gdmFsdWVfRGVlcFJhaXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCgyICogKGEgLSAxKSArIDEpIC8gKCh2YWx1ZWFycmF5X0RlZXBSYWlzZS5sZW5ndGggLSAxKSAqIDIpIDwgcGVyY2VudCAmJiBwZXJjZW50IDwgKDIgKiBhICsgMSkgLyAoKHZhbHVlYXJyYXlfRGVlcFJhaXNlLmxlbmd0aCAtIDEpICogMikpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnR5RGVlcFJhaXNlID0gdmFsdWVfRGVlcFJhaXNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8v5a2Y5YKo5Yib5bu654mM5qGM5L+h5oGvXG4gICAgICAgICAgICAgICAgUHJvamVjdC5QOS5EQVRBLlJPT00uUDlTVERHYW1lRGF0YS5kZWVwTW9kZSA9IHRoaXMucGFydHlEZWVwUmFpc2U7XG5cbiAgICAgICAgICAgICAgICBjYy5sb2coXCJ0aW1lXCIsIFByb2plY3QuUDkuREFUQS5ST09NLlA5U1RER2FtZURhdGEuZGVlcE1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRk1lc3NhZ2VfR2V0UDlDcmVhdGVTZXR0aW5nc1NURERhdGFSZXE6IGZ1bmN0aW9uIG9uRk1lc3NhZ2VfR2V0UDlDcmVhdGVTZXR0aW5nc1NURERhdGFSZXEobXNnKSB7XG4gICAgICAgIG1zZy5jb21wbGV0ZSgpO1xuXG4gICAgICAgIHZhciBkYXRhID0gbXNnLmFyZ3M7XG4gICAgICAgIC8v6I635Y+W6L+b5bqm5p2h6L+b6KGM5Yeg562J5YiG5pWw5o2uXG4gICAgICAgIHZhciBsZW5ndGhfU0JfQkJfRW50cnlGZWUgPSBkYXRhLlNCX0JCX0VudHJ5RmVlLmxlbmd0aDtcbiAgICAgICAgdmFyIGxlbmd0aF9QbGF5ZXJOdW0gPSBkYXRhLlBsYXllck51bS5sZW5ndGg7XG4gICAgICAgIHZhciBsZW5ndGhfUGFydHlUaW1lID0gZGF0YS5QYXJ0eVRpbWUubGVuZ3RoO1xuICAgICAgICB2YXIgbGVuZ3RoX0FudGUgPSBkYXRhLkFudGUubGVuZ3RoO1xuICAgICAgICB2YXIgbGVuZ3RoX0RlZXBSYWlzZSA9IGRhdGEuRGVlcFJhaXNlLmxlbmd0aDtcblxuICAgICAgICAvL+W+queOr+mBjeWOhlNCX0JCX0VudHJ5RmVlIOW5tuWtmOWFpeWIsOaVsOe7hOS4rVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuU0JfQkJfRW50cnlGZWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhbHVlYXJyYXlfU0JfQkJfRW50cnlGZWUucHVzaChkYXRhLlNCX0JCX0VudHJ5RmVlW2ldKTtcbiAgICAgICAgfVxuICAgICAgICAvL+W+queOr+mBjeWOhlBsYXllck51bVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF9QbGF5ZXJOdW07IGkrKykge1xuICAgICAgICAgICAgdmFsdWVhcnJheV9QbGF5ZXJOdW0ucHVzaChkYXRhLlBsYXllck51bVtpXSk7XG4gICAgICAgICAgICAvLyDnlYzpnaLmmL7npLrniYzlsYDkurrmlbBcblxuICAgICAgICAgICAgdmFyIGxhYmVsID0gbmV3IGNjLk5vZGUoKS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gZGF0YS5QbGF5ZXJOdW1baV07XG4gICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgdmFyIHNsaWRlcmxlbmd0aCA9IHRoaXMuUGVvcGxlTnVtYmVyU2xpZGVyLm5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aDtcbiAgICAgICAgICAgIHZhciBwb2ludFggPSAtKHNsaWRlcmxlbmd0aCAvIDIpO1xuICAgICAgICAgICAgdmFyIHNsaWRlcnBvc2l0aW9uWCA9IHRoaXMuUGVvcGxlTnVtYmVyU2xpZGVyLm5vZGUuZ2V0UG9zaXRpb25YKCk7XG4gICAgICAgICAgICB2YXIgc2xpZGVycG9zaXRpb25ZID0gdGhpcy5QZW9wbGVOdW1iZXJTbGlkZXIubm9kZS5nZXRQb3NpdGlvblkoKTtcbiAgICAgICAgICAgIGxhYmVsLm5vZGUuc2V0UG9zaXRpb24ocG9pbnRYICsgaSAqIChzbGlkZXJsZW5ndGggLyAobGVuZ3RoX1BsYXllck51bSAtIDEpKSwgc2xpZGVycG9zaXRpb25ZICsgMTApO1xuICAgICAgICAgICAgdGhpcy52aWV3MS5hZGRDaGlsZChsYWJlbC5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICAvL+W+queOr+mBjeWOhlBhcnR5VGltZVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuUGFydHlUaW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZWFycmF5X1BhcnR5VGltZS5wdXNoKGRhdGEuUGFydHlUaW1lW2ldKTtcblxuICAgICAgICAgICAgdmFyIGxhYmVsID0gbmV3IGNjLk5vZGUoKS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gZGF0YS5QYXJ0eVRpbWVbaV07XG4gICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgdmFyIHNsaWRlcmxlbmd0aCA9IHRoaXMuVGltZVNsaWRlci5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGg7XG4gICAgICAgICAgICB2YXIgcG9pbnRYID0gLShzbGlkZXJsZW5ndGggLyAyKTtcbiAgICAgICAgICAgIHZhciBzbGlkZXJwb3NpdGlvblggPSB0aGlzLlRpbWVTbGlkZXIubm9kZS5nZXRQb3NpdGlvblgoKTtcbiAgICAgICAgICAgIHZhciBzbGlkZXJwb3NpdGlvblkgPSB0aGlzLlRpbWVTbGlkZXIubm9kZS5nZXRQb3NpdGlvblkoKTtcbiAgICAgICAgICAgIGxhYmVsLm5vZGUuc2V0UG9zaXRpb24ocG9pbnRYICsgaSAqIChzbGlkZXJsZW5ndGggLyAoZGF0YS5QYXJ0eVRpbWUubGVuZ3RoIC0gMSkpLCBzbGlkZXJwb3NpdGlvblkgKyAxMCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcxLmFkZENoaWxkKGxhYmVsLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/lvqrnjq/pgY3ljoZBbnRlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5BbnRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZWFycmF5X0FudGUucHVzaChkYXRhLkFudGVbaV0pO1xuXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBuZXcgY2MuTm9kZSgpLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBkYXRhLkFudGVbaV07XG4gICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgdmFyIHNsaWRlcmxlbmd0aCA9IHRoaXMuQW50ZVNsaWRlci5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGg7XG4gICAgICAgICAgICB2YXIgcG9pbnRYID0gLShzbGlkZXJsZW5ndGggLyAyKTtcbiAgICAgICAgICAgIHZhciBzbGlkZXJwb3NpdGlvblggPSB0aGlzLkFudGVTbGlkZXIubm9kZS5nZXRQb3NpdGlvblgoKTtcbiAgICAgICAgICAgIHZhciBzbGlkZXJwb3NpdGlvblkgPSB0aGlzLkFudGVTbGlkZXIubm9kZS5nZXRQb3NpdGlvblkoKTtcbiAgICAgICAgICAgIGxhYmVsLm5vZGUuc2V0UG9zaXRpb24ocG9pbnRYICsgaSAqIChzbGlkZXJsZW5ndGggLyAoZGF0YS5BbnRlLmxlbmd0aCAtIDEpKSwgc2xpZGVycG9zaXRpb25ZICsgMTApO1xuICAgICAgICAgICAgdGhpcy52aWV3Mi5hZGRDaGlsZChsYWJlbC5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuRGVlcFJhaXNlLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhbHVlYXJyYXlfRGVlcFJhaXNlLnB1c2goZGF0YS5EZWVwUmFpc2VbaV0pO1xuXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBuZXcgY2MuTm9kZSgpLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBkYXRhLkRlZXBSYWlzZVtpXTtcbiAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gMjA7XG4gICAgICAgICAgICB2YXIgc2xpZGVybGVuZ3RoID0gdGhpcy5EZWVwUmFpc2VTbGlkZXIubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoO1xuICAgICAgICAgICAgdmFyIHBvaW50WCA9IC0oc2xpZGVybGVuZ3RoIC8gMik7XG4gICAgICAgICAgICB2YXIgc2xpZGVycG9zaXRpb25YID0gdGhpcy5EZWVwUmFpc2VTbGlkZXIubm9kZS5nZXRQb3NpdGlvblgoKTtcbiAgICAgICAgICAgIHZhciBzbGlkZXJwb3NpdGlvblkgPSB0aGlzLkRlZXBSYWlzZVNsaWRlci5ub2RlLmdldFBvc2l0aW9uWSgpO1xuICAgICAgICAgICAgbGFiZWwubm9kZS5zZXRQb3NpdGlvbihwb2ludFggKyBpICogKHNsaWRlcmxlbmd0aCAvIChkYXRhLkRlZXBSYWlzZS5sZW5ndGggLSAxKSksIHNsaWRlcnBvc2l0aW9uWSArIDEwKTtcbiAgICAgICAgICAgIHRoaXMudmlldzIuYWRkQ2hpbGQobGFiZWwubm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMGU3MGZBdENSMUdTclR6bEV6Q1NSbVAnLCAndGFibGVTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvTGl1anVuaGFvL3Jvb21XYWl0dGluZy90YWJsZVNjcmlwdC5qc1xuXG4vL+eJjOahjHByZWZhYlxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIG9uRGVzdG9yeTogZnVuY3Rpb24gb25EZXN0b3J5KCkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v5Yqo55S75pKt5pS+XG4gICAgdGFibGVBbmltYXRpb246IGZ1bmN0aW9uIHRhYmxlQW5pbWF0aW9uKCkge1xuXG4gICAgICAgIHZhciBhbmltQ3RybCA9IHRoaXMudGFibGUubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbUN0cmwub24oJ3N0b3AnLCB0aGlzLm9uU3RvcCwgdGhpcyk7XG4gICAgICAgIGFuaW1DdHJsLnBsYXkoXCJ0YWJsZVwiKTtcbiAgICB9LFxuICAgIC8v5Yqo55S757uT5p2f5Zue6LCDXG4gICAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgICAgIC8v5Yqo55S757uT5p2f5raI5oGvXG5cbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOTM2NDZlSHJoUkJ6NVpMSkpGa3hYVDQnLCAndGVzdExheWVyU2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L2NvbnRleHQvNHJvb20vdGVzdExheWVyU2NyaXB0LmpzXG5cbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfSxcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfSxcbiAgICBkaW5nWmh1YW5nOiBmdW5jdGlvbiBkaW5nWmh1YW5nKCkge1xuICAgICAgICB2YXIgbXNnMiA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJnYW1lRXZlbnROb3RpZnlcIiwgXCJzdGFydEdhbWVcIik7XG4gICAgICAgIG1zZzIuYXJncy5ldmVudFR5cGUgPSBcIkRpbmdaaHVhbmdcIjtcbiAgICAgICAgbXNnMi5zZW5kKCk7XG4gICAgfSxcbiAgICBmYVNob3VQYWk6IGZ1bmN0aW9uIGZhU2hvdVBhaSgpIHtcbiAgICAgICAgdmFyIG1zZzIgPSBuZXcgTVZDLkZNZXNzYWdlKFwiZ2FtZUV2ZW50Tm90aWZ5XCIsIFwic3RhcnRHYW1lXCIpO1xuICAgICAgICBtc2cyLmFyZ3MuZXZlbnRUeXBlID0gXCJGYVNob3VQYWlcIjtcbiAgICAgICAgbXNnMi5zZW5kKCk7XG4gICAgfSxcbiAgICBmYUdvbmdHb25nUGFpOiBmdW5jdGlvbiBmYUdvbmdHb25nUGFpKCkge1xuICAgICAgICB2YXIgbXNnMiA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJnYW1lRXZlbnROb3RpZnlcIiwgXCJzdGFydEdhbWVcIik7XG4gICAgICAgIG1zZzIuYXJncy5ldmVudFR5cGUgPSBcIkZhR29uZ0dvbmdQYWlcIjtcbiAgICAgICAgbXNnMi5zZW5kKCk7XG4gICAgfSxcbiAgICBsdW5EYW9aaUppOiBmdW5jdGlvbiBsdW5EYW9aaUppKCkge1xuICAgICAgICB2YXIgbXNnMiA9IG5ldyBNVkMuRk1lc3NhZ2UoXCJnYW1lQWN0aW9uUmVxXCIsIFwic3RhcnRHYW1lXCIpO1xuICAgICAgICBtc2cyLmFyZ3MuYWN0aW9uVHlwZSA9IFwibXlBY3Rpb25cIjtcbiAgICAgICAgbXNnMi5zZW5kKCk7XG4gICAgfSxcbiAgICBsdW5EYW9CaWVSZW46IGZ1bmN0aW9uIGx1bkRhb0JpZVJlbigpIHtcbiAgICAgICAgdmFyIG1zZzIgPSBuZXcgTVZDLkZNZXNzYWdlKFwiZ2FtZUFjdGlvblJlcVwiLCBcInN0YXJ0R2FtZVwiKTtcbiAgICAgICAgbXNnMi5hcmdzLmFjdGlvblR5cGUgPSBcIm90aGVyc0FjdGlvblwiO1xuICAgICAgICBtc2cyLnNlbmQoKTtcbiAgICB9LFxuICAgIGJhb1hpYW46IGZ1bmN0aW9uIGJhb1hpYW4oKSB7XG4gICAgICAgIHZhciBtc2cyID0gbmV3IE1WQy5GTWVzc2FnZShcInNhZmVzdFJlcVwiLCBcInN0YXJ0R2FtZVwiKTtcbiAgICAgICAgbXNnMi5hcmdzLmFjdGlvblR5cGUgPSBcIm90aGVyc0FjdGlvblwiO1xuICAgICAgICBtc2cyLnNlbmQoKTtcbiAgICB9LFxuICAgIGppZVN1YW46IGZ1bmN0aW9uIGppZVN1YW4oKSB7XG4gICAgICAgIHZhciBtc2cyID0gbmV3IE1WQy5GTWVzc2FnZShcImdhbWVPblJlc3VsdFwiLCBcInN0YXJ0R2FtZVwiKTtcbiAgICAgICAgbXNnMi5hcmdzLmFjdGlvblR5cGUgPSBcIm90aGVyc0FjdGlvblwiO1xuICAgICAgICBtc2cyLnNlbmQoKTtcbiAgICB9LFxuICAgIHBhaUp1RmFuZ0ppYW5KaWVTaHU6IGZ1bmN0aW9uIHBhaUp1RmFuZ0ppYW5KaWVTaHUoKSB7XG4gICAgICAgIHZhciBtc2cyID0gbmV3IE1WQy5GTWVzc2FnZShcInJvb21PbkVuZFwiLCBcInN0YXJ0R2FtZVwiKTtcbiAgICAgICAgbXNnMi5hcmdzLmFjdGlvblR5cGUgPSBcIm90aGVyc0FjdGlvblwiO1xuICAgICAgICBtc2cyLnNlbmQoKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2JlMzBhbWxQMzlJaHJSV01FWVA5MW92JywgJ3Rlc3QnKTtcbi8vIHNjcmlwdHMvRldTL3Rlc3QuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzI5ODA4YU5iWDFFUXFvdjVTU0s4TG1MJywgJ3RpdGxlU2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L0xpdWp1bmhhby9yb29tV2FpdHRpbmcvdGl0bGVTY3JpcHQuanNcblxuLy/pobbpg6hwcmVmYWJcbnZhciBNVkMgPSByZXF1aXJlKFwiRldTX01WQ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvL+aIv+mXtOagh+mimCDmloflrZdcbiAgICAgICAgcm9vbW5hbWVMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+i/lOWbniDmjInpkq5cbiAgICAgICAgYmFja0J0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcblxuICAgICAgICAvL+ino+aVo+eJjOWxgCblh4/lsJHluqfkvY0g5oyJ6ZKuXG4gICAgICAgIGNvbnRyb2xyb29tQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL+ino+aVo+eJjOWxgCblh4/lsJHluqfkvY0g5bGCXG4gICAgICAgIGNvbnRyb3Jvb21TcHJpdGU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIC8v5YeP5bCR5bqn5L2N5pWwIOaWh+Wtl1xuICAgICAgICByZWR1Y2VzZWF0TGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/lh4/lsJHluqfkvY3mlbAg5oyJ6ZKuXG4gICAgICAgIHJlZHVjZXNlYXRCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v6Kej5pWj5b2T5YmN5bGAIOaWh+Wtl1xuICAgICAgICBkaXNzb2x2ZWdhbWVMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+ino+aVo+W9k+WJjeWxgCDmjInpkq5cbiAgICAgICAgZGlzc29sdmVnYW1lQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL2tpbGwg6Kej5pWj54mM5bGAJuWHj+WwkeW6p+S9jSDmjInpkq5cbiAgICAgICAga2lsbGNvbnRyb2xTcHJpdGVCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcblxuICAgICAgICAvL+W7uueri+i/nuaOpVxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge1xuICAgICAgICBjYy5sb2coXCLplIDmr4HkuoYg5pat5byA6L+e5o6lXCIpO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuXG4gICAgLy/ov5Tlm54g5oyJ6ZKu54K55Ye7XG4gICAgYmFja0J0bmNsaWNrOiBmdW5jdGlvbiBiYWNrQnRuY2xpY2soKSB7XG4gICAgICAgIC8v6L+U5Zue54mM5bGA6aG16Z2i5raI5oGvXG4gICAgfSxcbiAgICAvL+ino+aVo+eJjOWxgCblh4/lsJHluqfkvY0g5oyJ6ZKu54K55Ye7XG4gICAgY29udHJvbHJvb21CdG5jbGljazogZnVuY3Rpb24gY29udHJvbHJvb21CdG5jbGljaygpIHt9LFxuICAgIC8v5YeP5bCR5bqn5L2N5pWwIOaMiemSrueCueWHu1xuICAgIHJlZHVjZXNlYXRCdG5jbGljazogZnVuY3Rpb24gcmVkdWNlc2VhdEJ0bmNsaWNrKCkge1xuICAgICAgICAvL1xuICAgIH0sXG4gICAgLy/op6PmlaPniYzlsYAg5oyJ6ZKu54K55Ye7XG4gICAgZGlzc29sdmVnYW1lQnRuY2xpY2s6IGZ1bmN0aW9uIGRpc3NvbHZlZ2FtZUJ0bmNsaWNrKCkge30sXG4gICAgLy8vL2tpbGwg6Kej5pWj54mM5bGAJuWHj+WwkeW6p+S9jSDmjInpkq7ngrnlh7tcbiAgICBraWxsY29udHJvbFNwcml0ZUJ0bmNsaWNrOiBmdW5jdGlvbiBraWxsY29udHJvbFNwcml0ZUJ0bmNsaWNrKCkge31cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5MGZmMGRnMjlaSjNiQ0tHUHhSUndXbicsICd3YWl0dGluZ0xheWVyU2NyaXB0Jyk7XG4vLyBzY3JpcHRzL1A5L0xpdWp1bmhhby9yb29tV2FpdHRpbmcvd2FpdHRpbmdMYXllclNjcmlwdC5qc1xuXG4vL+etieW+heS4u+mhtemdonByZWZhYlxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v5YiG5Lqr5oyJ6ZKuXG4gICAgICAgIHNoYXJlQnRuOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICAvL+aIv+mXtOWPtyDmloflrZdcbiAgICAgICAgcm9vbW51bWJlckxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5YiG5LqrIOaWh+Wtl1xuICAgICAgICBzaGFyZUxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v54mM5bGA566A5LuL5Yy65Z+fXG4gICAgICAgIGdhbWVwcm9maWxlU3ByaXRlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICAvL+eJjOWxgOS6uuaVsCDmloflrZdcbiAgICAgICAgZ2FtZXBlcnNvbkxhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5b2T5YmN54mM5bGA5Lq65pWwL+eJjOWxgOS6uuaVsCDmloflrZdcbiAgICAgICAgcGVyc29uTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/niYzlsYDml7bplb8g5paH5a2XXG4gICAgICAgIHRpbWVMYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+eri+WNs+S4iuahjCDmjInpkq5cbiAgICAgICAgam9pbkJ0bjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgLy/nq4vljbPkuIrmoYwg5paH5a2XXG4gICAgICAgIGpvaW5MYWJlbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvL+W8gOWxgCDmjInpkq5cbiAgICAgICAgc3RhcnRCdG46IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIC8v5byA5bGAIOaWh+Wtl1xuICAgICAgICBzdGFydExhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8v562J5b6F546p5a625YWl5bGAIOaWh+Wtl1xuICAgICAgICB3YWl0UGxheWVyTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgLy/otoXml7bmj5DnpLog5paH5a2XXG4gICAgICAgIG92ZXJ0aW1lTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuXG4gICAgICAgIC8v5bu656uL6L+e5o6lXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH0sXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH0sXG4gICAgLy/liIbkuqsg5oyJ6ZKu54K55Ye7XG4gICAgc2hhcmVCdG5jbGljazogZnVuY3Rpb24gc2hhcmVCdG5jbGljaygpIHt9LFxuICAgIC8v56uL5Y2z5LiK5qGMIOaMiemSrueCueWHu1xuICAgIGpvaW5CdG5jbGljazogZnVuY3Rpb24gam9pbkJ0bmNsaWNrKCkge30sXG4gICAgLy/lvIDlsYAg5oyJ6ZKu54K55Ye7XG4gICAgc3RhcnRCdG5jbGljazogZnVuY3Rpb24gc3RhcnRCdG5jbGljaygpIHt9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMGFiODJIRkxwSk9LTHUwYTJhMlJXTnAnLCAnd2FsbGV0Q29udHJvbGxlcicpO1xuLy8gc2NyaXB0cy9QOS9jb250ZXh0L215L3dhbGxldC93YWxsZXRDb250cm9sbGVyLmpzXG5cbi8v6ZKx5YyFXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG52YXIgUHJvamVjdCA9IHJlcXVpcmUoXCJQcm9qZWN0XCIpO1xudmFyIHdhbGxldENvbnRyb2xsZXI7XG53YWxsZXRDb250cm9sbGVyID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBNVkMuRk1lc3NhZ2VDb25uZWN0aW9uLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvL1RPRE865b2T5YiH5o2i5Yiw5q2k6IqC54K555qE5pe25YCZ5Lya6L+Q6KGM6L+Z5Liq5pa55rOVXG4gICAgb25FbnRlck5vZGU6IGZ1bmN0aW9uIG9uRW50ZXJOb2RlKCkge1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuXG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkVudGVyTm9kZVwiKTtcbiAgICB9LFxuICAgIC8vVE9ETzrlvZPnprvlvIDmraToioLngrnnmoTml7blgJnkvJrov5DooYzov5nkuKrmlrnms5VcbiAgICBvbkxlYXZlTm9kZTogZnVuY3Rpb24gb25MZWF2ZU5vZGUoKSB7XG4gICAgICAgIGNjLmxvZyhcImxvZ2luQ29udHJvbGxlciBvbkxlYXZlTm9kZVwiKTtcbiAgICB9XG59KTtcbi8vIC8v5YiH5o2i6ZKx5YyF55WM6Z2iXG4vLyBvbkZNZXNzYWdlX3dhbGxldEJ0bmNsaWNrOiBmdW5jdGlvbihtc2cpIHtcbi8vICAgICBNVkMuRkxvZy5kYXRhKFwi6ZKx5YyF6Lez6L2sXCIsIFwi5o6l5pS25raI5oGvIHswfVwiLCBtc2cpO1xuLy8gICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwid2FsbGV0XCIpO1xuXG4vLyAgICAgaWYobXNnKXtcbi8vICAgICAgICAgaWYobXNnLmFyZ3MubmFtZSA9IFwi5YmN5b6A6ZKx5YyF6aG16Z2iXCIpe1xuLy8gICAgICAgICAgICAgTVZDLkZDb250ZXh0TWFuYWdlci5nb3RvSUQoXCJ3YWxsZXRcIik7XG4vLyAgICAgICAgICAgICBtc2cuY29tcGxldGUoKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbi8vIG9uRk1lc3NhZ2VfY2xpY2tMb2dpbkJ1dHRvbjogZnVuY3Rpb24obXNnKSB7XG4vLyAgICAgaWYoIG1zZy5hcmdzLm5hbWUgPT0gXCLnmbvlvZVcIil7XG4vLyAgICAgICAgIC8v6L+b5YWl5YiG5Lqr6IqC54K5XG4vLyAgICAgICAgIGNjLmxvZyhcImdvdG8gbWFpbiDliY1cIik7XG4vLyAgICAgICAgIE1WQy5GQ29udGV4dE1hbmFnZXIuZ290b0lEKFwibWFpblwiKTtcbi8vICAgICAgICAgY2MubG9nKFwiZ290byBtYWluIOWQjlwiKTtcbi8vICAgICAgICAgLy/lj5HpgIHmtojmga/nu5nnvZHnu5zmqKHlnZdcbi8vICAgICB9ZWxzZSBpZihtc2cuYXJncy5uYW1lID09IFwi5rOo5YaMXCIpe1xuLy8gICAgICAgICAvL+i/m+WFpeWIhuS6q+iKgueCuVxuLy8gICAgICAgICAvLyBNVkMuRkNvbnRleHRNYW5hZ2VyLmdvdG9JRChcIlNoYXJlXCIpO1xuLy8gICAgICAgICAvL+WPkemAgea2iOaBr+e7mee9kee7nOaooeWdl1xuLy8gICAgIH1cblxuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhbGxldENvbnRyb2xsZXI7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdiYTQ1M08zOWdKUGw0MkZpbjFOcExobycsICd3YWxsZXRTY3JpcHQnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS93YWxsZXQvd2FsbGV0U2NyaXB0LmpzXG5cbi8v6ZKx5YyFXG52YXIgTVZDID0gcmVxdWlyZShcIkZXU19NVkNcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IE1WQy5GTWVzc2FnZUNvbm5lY3Rpb24sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL+WKoOi9veeahOaXtuWAmeimgeS4jua2iOaBr+i3r+eUsei/nuaOpVxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LFxuICAgIC8v6ZSA5q+BXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8v6ZSA5q+B55qE5pe25YCZ6KaB5pat5byA6L+e5o6lXG4gICAgICAgIGNjLmxvZyhcIumUgOavgeS6hiDmlq3lvIDov57mjqVcIik7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzI0ZmE4SEpGeHRFNXJGc1B0Znk1TWNUJywgJ3dhbGxldFZpZXcnKTtcbi8vIHNjcmlwdHMvUDkvY29udGV4dC9teS93YWxsZXQvd2FsbGV0Vmlldy5qc1xuXG4vL+mSseWMhVxudmFyIE1WQyA9IHJlcXVpcmUoXCJGV1NfTVZDXCIpO1xudmFyIFByb2plY3QgPSByZXF1aXJlKFwiUHJvamVjdFwiKTtcbnZhciB3YWxsZXRWaWV3O1xud2FsbGV0VmlldyA9IGNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogTVZDLkZNZXNzYWdlQ29ubmVjdGlvbixcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuICAgIG9uRW50ZXJOb2RlOiBmdW5jdGlvbiBvbkVudGVyTm9kZSgpIHtcbiAgICAgICAgLy/liqDovb3nu5PnrpflnLrmma9cbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid2FsbGV0U2NlbmVcIik7XG5cbiAgICAgICAgY2MubG9nKFwibG9naW5Db250cm9sbGVyIG9uRW50ZXJOb2RlXCIpO1xuICAgICAgICAvL2xvYWRzY2VuZeOAguOAguOAglxuICAgIH0sXG4gICAgLy9UT0RPOuW9k+emu+W8gOatpOiKgueCueeahOaXtuWAmeS8mui/kOihjOi/meS4quaWueazlVxuICAgIG9uTGVhdmVOb2RlOiBmdW5jdGlvbiBvbkxlYXZlTm9kZSgpIHt9XG5cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB3YWxsZXRWaWV3O1xuXG5jYy5fUkZwb3AoKTsiXX0=
