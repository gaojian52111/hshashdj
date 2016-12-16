"use strict";
cc._RFpush(module, '6156e7abWBAgrQgbPQb5zfd', 'membershipView');
// scripts/P9/context/my/membership/membershipView.js

//会籍
var MVC = require("FWS_MVC");
var Project = require("Project");
var membershipView;
membershipView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("membershipScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = membershipView;

cc._RFpop();