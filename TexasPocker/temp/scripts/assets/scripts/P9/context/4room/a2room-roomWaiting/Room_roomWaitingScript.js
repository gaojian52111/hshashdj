"use strict";
cc._RFpush(module, 'ac8bbehGiFBQp10dWO5+xHC', 'Room_roomWaitingScript');
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