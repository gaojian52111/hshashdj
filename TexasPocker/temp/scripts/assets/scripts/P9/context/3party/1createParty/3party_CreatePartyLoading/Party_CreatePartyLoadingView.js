"use strict";
cc._RFpush(module, 'daa0aGwIq1IhZmtR6H0Y6aU', 'Party_CreatePartyLoadingView');
// scripts/P9/context/3party/1createParty/3party_CreatePartyLoading/Party_CreatePartyLoadingView.js

var MVC = require("FWS_MVC");
var party_CreatePartyLoadingView;
var partyCreatePartyLoadingLayer;
party_CreatePartyLoadingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/partyCreatePartyLoadingLayer", function (err, prefab) {
            cc.log(err);
            partyCreatePartyLoadingLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(partyCreatePartyLoadingLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        partyCreatePartyLoadingLayer.removeFromParent(true);
    }

});
module.exports = party_CreatePartyLoadingView;

cc._RFpop();