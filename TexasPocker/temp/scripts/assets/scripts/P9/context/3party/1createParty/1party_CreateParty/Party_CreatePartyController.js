"use strict";
cc._RFpush(module, '7ab16vBD9BIHaL2uH7uUfD/', 'Party_CreatePartyController');
// scripts/P9/context/3party/1createParty/1party_CreateParty/Party_CreatePartyController.js

var MVC = require("FWS_MVC");
var party_CreatePartyController;
party_CreatePartyController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:此类是对将来可能加进来的其他创建方法存在的
    onEnterNode: function onEnterNode() {

        cc.log("party_CreatePartyController");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = party_CreatePartyController;

cc._RFpop();