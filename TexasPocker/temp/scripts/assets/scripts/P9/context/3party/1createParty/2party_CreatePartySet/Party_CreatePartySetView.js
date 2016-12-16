"use strict";
cc._RFpush(module, '11df9L6mjpFG4FwnUN3038f', 'Party_CreatePartySetView');
// scripts/P9/context/3party/1createParty/2party_CreatePartySet/Party_CreatePartySetView.js

var MVC = require("FWS_MVC");
var partyCreateSetLayer;
var party_CreateSetView;
party_CreateSetView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("partyCreateSetLayer2");
        cc.loader.loadRes("TestProfab/createpartysetLayer", function (err, prefab) {
            cc.log(err);
            cc.log("myTurnLayer2");

            partyCreateSetLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(partyCreateSetLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("myTurnLayer");

        partyCreateSetLayer.removeFromParent(true);
    }

});
module.exports = party_CreateSetView;

cc._RFpop();