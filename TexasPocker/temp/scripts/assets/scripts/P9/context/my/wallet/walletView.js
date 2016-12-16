"use strict";
cc._RFpush(module, 'd68caI74tdOeov4wnyqF2jA', 'walletView');
// scripts/P9/context/my/wallet/walletView.js

//钱包
var MVC = require("FWS_MVC");
var Project = require("Project");
var walletView;
walletView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("walletScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = walletView;

cc._RFpop();