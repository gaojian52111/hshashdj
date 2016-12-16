"use strict";
cc._RFpush(module, 'a3263fSnBpP06RgC/m4UxiW', 'roomScript');
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