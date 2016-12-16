"use strict";
cc._RFpush(module, 'e55e2C6DiVDB4vKfdcKJKHb', 'settingView');
// scripts/P9/context/my/setting/settingView.js

//系统设置
var MVC = require("FWS_MVC");
var Project = require("Project");
var settingView;
settingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("settingScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = settingView;

cc._RFpop();