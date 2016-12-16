"use strict";
cc._RFpush(module, '21eebq7U7RMMrYVowyFWktG', 'Party_chackSportsPartyinfoView');
// scripts/P9/context/3party/2joinParty/2party_chackSportsPartyinfo/Party_chackSportsPartyinfoView.js

var MVC = require("FWS_MVC");
var party_chackSportsPartyinfoView;
var playerHeadLayer;
party_chackSportsPartyinfoView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //加载结算场景
        //cc.director.loadScene("MTTSNGWaiting");
        //loadscene。。。
        cc.loader.loadRes("TestProfab/MTTSNGWaiting", function (err, prefab) {
            cc.log(err);
            playerHeadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(playerHeadLayer);
        });
        // cc.director.loadScene("roomScene");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = party_chackSportsPartyinfoView;

cc._RFpop();