"use strict";
cc._RFpush(module, 'a1f8e8G6sZMmZSGlKy7XT45', 'messageView');
// scripts/P9/context/my/message/messageView.js

//消息
var MVC = require("FWS_MVC");
var Project = require("Project");
var messageView;
messageView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("messageScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = messageView;

cc._RFpop();