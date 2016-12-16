"use strict";
cc._RFpush(module, 'dc488GWMnBM3pnGC53jsV9B', 'roomController');
// scripts/P9/context/4room/roomController.js

var MVC = require("FWS_MVC");
var roomController;
roomController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        cc.log("roomController");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomController;

cc._RFpop();