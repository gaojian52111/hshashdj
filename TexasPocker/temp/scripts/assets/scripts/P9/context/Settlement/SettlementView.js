"use strict";
cc._RFpush(module, 'c71c4KD29hGt7rYf8H0wwUm', 'SettlementView');
// scripts/P9/context/Settlement/SettlementView.js

var MVC = require("FWS_MVC");
var SettlementView;
var playerHeadLayer;
SettlementView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        cc.loader.loadRes("TestProfab/Settlement", function (err, prefab) {
            cc.log(err);
            playerHeadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(playerHeadLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = SettlementView;

cc._RFpop();