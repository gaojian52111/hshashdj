"use strict";
cc._RFpush(module, '30dc9v80z1KMpT9M9dExFZI', 'shareLayerScript');
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