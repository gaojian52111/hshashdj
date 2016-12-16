"use strict";
cc._RFpush(module, 'a3816cO6v1A4ZIFaqdBq5GS', 'loginScript');
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