"use strict";
cc._RFpush(module, 'd726fMz63BEVKNeUseyOKkd', 'mallView');
// scripts/P9/context/my/mall/mallView.js

//商城
var MVC = require("FWS_MVC");
var Project = require("Project");
var mallView;
mallView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("mallScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = mallView;

cc._RFpop();