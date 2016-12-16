"use strict";
cc._RFpush(module, 'c7cf3uwK+dCFYF2qGSZ85JY', 'room_myTurnController');
// scripts/P9/context/4room/6room-myTurn/room_myTurnController.js

var MVC = require("FWS_MVC");
var roomMyTurnController;
roomMyTurnController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomMyTurnController;

cc._RFpop();