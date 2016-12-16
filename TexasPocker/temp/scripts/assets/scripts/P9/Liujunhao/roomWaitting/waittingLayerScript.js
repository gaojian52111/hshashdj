"use strict";
cc._RFpush(module, '3088aGCxn5Fjo0XW6ae9EDp', 'waittingLayerScript');
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