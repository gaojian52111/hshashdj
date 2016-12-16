"use strict";
cc._RFpush(module, '528e91aDCFH0rVBMpy8yXMi', 'room_handSignController');
// scripts/P9/context/4room/4room-handSign/room_handSignController.js

var MVC = require("FWS_MVC");
var roomHandSignController;
var FaShouPaiTestLayer;
roomHandSignController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        FaShouPaiTestLayer.removeFromParent(true);
    }

});
module.exports = roomHandSignController;

cc._RFpop();