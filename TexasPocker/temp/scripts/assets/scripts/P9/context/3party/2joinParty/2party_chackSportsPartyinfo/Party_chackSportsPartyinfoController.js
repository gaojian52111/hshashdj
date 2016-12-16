"use strict";
cc._RFpush(module, '3fe22cof15KC57YazgIrSQx', 'Party_chackSportsPartyinfoController');
// scripts/P9/context/3party/2joinParty/2party_chackSportsPartyinfo/Party_chackSportsPartyinfoController.js

var MVC = require("FWS_MVC");
var Project = require("Project");
var party_chackSportsPartyinfoController;
party_chackSportsPartyinfoController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("party_chackSportsPartyinfoController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("party_chackSportsPartyinfoController onLeaveNode");
    },
    onFMessage_MTTSNGclicksignUpButton: function onFMessage_MTTSNGclicksignUpButton(msg) {
        MVC.FContextManager.gotoID("loadingGame");
        msg.complete();
    }

});
module.exports = party_chackSportsPartyinfoController;

cc._RFpop();