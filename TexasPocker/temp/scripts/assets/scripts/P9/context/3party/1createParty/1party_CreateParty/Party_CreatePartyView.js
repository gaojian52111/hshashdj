"use strict";
cc._RFpush(module, '1986dribi1O1p4uLD7OPI0l', 'Party_CreatePartyView');
// scripts/P9/context/3party/1createParty/1party_CreateParty/Party_CreatePartyView.js

var MVC = require("FWS_MVC");
var party_CreatePartyView;
party_CreatePartyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = party_CreatePartyView;

cc._RFpop();