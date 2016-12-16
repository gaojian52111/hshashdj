"use strict";
cc._RFpush(module, '62b539S1l1AfqjaClT8bjaO', 'gamestatisticsView');
// scripts/P9/context/my/gamestatistics/gamestatisticsView.js

//牌局统计
var MVC = require("FWS_MVC");
var Project = require("Project");
var gamestatisticsView;
gamestatisticsView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("gamestatisticsScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = gamestatisticsView;

cc._RFpop();