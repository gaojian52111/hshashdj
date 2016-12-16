"use strict";
cc._RFpush(module, 'c1d1d10hmxNzontR7AKzAU2', 'room_othersTurnController');
// scripts/P9/context/4room/7room-othersTurn/room_othersTurnController.js

var MVC = require("FWS_MVC");
var roomOthersTurnController;
roomOthersTurnController = cc.Class({
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
module.exports = roomOthersTurnController;

cc._RFpop();