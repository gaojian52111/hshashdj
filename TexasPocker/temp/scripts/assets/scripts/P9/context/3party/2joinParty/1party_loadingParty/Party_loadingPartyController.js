"use strict";
cc._RFpush(module, '33dd7A2ufVELoBEf6h0CUTX', 'Party_loadingPartyController');
// scripts/P9/context/3party/2joinParty/1party_loadingParty/Party_loadingPartyController.js

var MVC = require("FWS_MVC");
var party_loadingPartyController;
party_loadingPartyController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    onFMessage_joinPartyInfoReq: function onFMessage_joinPartyInfoReq(msg) {
        //

        if (msg.args.type == "STD") {
            cc.log("onFMessage_showPartyTypeReq = STD");
            MVC.FContextManager.gotoID("roomWaiting");
        } else if (msg.args.type == "MTT") {
            cc.log("onFMessage_showPartyTypeReq = MTT");

            MVC.FContextManager.gotoID("chackSportsPartyinfo");
        }
        msg.complete();
    }
});
module.exports = party_loadingPartyController;

cc._RFpop();