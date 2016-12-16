"use strict";
cc._RFpush(module, '8eed8HIHaNK5oL8Z29Vb6ZQ', 'Party_joinPartyController');
// scripts/P9/context/3party/2joinParty/1party_joinParty/Party_joinPartyController.js

var MVC = require("FWS_MVC");
var party_joinPartyController;
party_joinPartyController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        // MVC.FContextManager.gotoID("loadingParty");

        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = party_joinPartyController;

cc._RFpop();