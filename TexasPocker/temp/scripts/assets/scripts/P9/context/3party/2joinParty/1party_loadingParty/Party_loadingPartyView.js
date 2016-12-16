"use strict";
cc._RFpush(module, 'f9c7adTfZpCdqrhVzsFogbp', 'Party_loadingPartyView');
// scripts/P9/context/3party/2joinParty/1party_loadingParty/Party_loadingPartyView.js

var MVC = require("FWS_MVC");
var party_loadingPartyView;
var partyLoadingPartyLayer;
party_loadingPartyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer1111");
        cc.loader.loadRes("TestProfab/partyLoadingPartyLayer", function (err, prefab) {
            cc.log(err);
            partyLoadingPartyLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(partyLoadingPartyLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        partyLoadingPartyLayer.removeFromParent(true);
    }

});
module.exports = party_loadingPartyView;

cc._RFpop();