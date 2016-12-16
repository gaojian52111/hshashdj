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