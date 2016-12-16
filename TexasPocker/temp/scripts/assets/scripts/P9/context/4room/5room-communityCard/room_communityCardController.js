"use strict";
cc._RFpush(module, '245b4J1MGhNHqh6vLPwJ8J/', 'room_communityCardController');
// scripts/P9/context/4room/5room-communityCard/room_communityCardController.js

var MVC = require("FWS_MVC");
var roomCommunityCardController;
roomCommunityCardController = cc.Class({
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
module.exports = roomCommunityCardController;

cc._RFpop();