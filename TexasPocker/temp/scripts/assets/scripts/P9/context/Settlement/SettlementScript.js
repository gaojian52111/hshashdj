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