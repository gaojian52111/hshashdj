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