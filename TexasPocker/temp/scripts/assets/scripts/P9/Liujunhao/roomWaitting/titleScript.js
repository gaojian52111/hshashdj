"use strict";
cc._RFpush(module, 'e8b98cxWClC6pcpFueuAWFN', 'titleScript');
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