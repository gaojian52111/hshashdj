"use strict";
cc._RFpush(module, 'eb0074S/phFxo+G6LUH7ZkK', 'room_partyRoomOverView');
// scripts/P9/context/4room/a1room-partyRoomOver/room_partyRoomOverView.js

var MVC = require("FWS_MVC");
var Room_roomWaitingView;
var roomRoomWaitingViewLayer;
Room_roomWaitingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/roomRoomWaitingViewLayer", function (err, prefab) {
            cc.log(err);
            roomRoomWaitingViewLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(roomRoomWaitingViewLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        roomRoomWaitingViewLayer.removeFromParent(true);
    }

});
module.exports = Room_roomWaitingView;

cc._RFpop();