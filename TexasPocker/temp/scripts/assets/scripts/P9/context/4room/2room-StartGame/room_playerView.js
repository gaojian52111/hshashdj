"use strict";
cc._RFpush(module, '2b2eaXBPOVP95jtyXn9W46o', 'room_playerView');
// scripts/P9/context/4room/2room-StartGame/room_playerView.js

var MVC = require("FWS_MVC");
var roomplayerView;
roomplayerView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = roomplayerView;

cc._RFpop();