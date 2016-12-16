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