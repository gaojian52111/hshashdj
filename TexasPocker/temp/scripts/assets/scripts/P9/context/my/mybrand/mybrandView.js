"use strict";
cc._RFpush(module, '844a3xr9bFKSabp0twiC7XL', 'mybrandView');
// scripts/P9/context/my/mybrand/mybrandView.js

//我的牌谱
var MVC = require("FWS_MVC");
var Project = require("Project");
var mybrandView;
mybrandView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("mybrandScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = mybrandView;

cc._RFpop();