"use strict";
cc._RFpush(module, 'cd162qUca5It63+aJKWC9JC', 'room_othersTurnView');
// scripts/P9/context/4room/7room-othersTurn/room_othersTurnView.js

var MVC = require("FWS_MVC");
var roomOthersTurnView;
var otherTurnLayer;
roomOthersTurnView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/otherTurnLayer", function (err, prefab) {
            cc.log(err);
            otherTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(otherTurnLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        otherTurnLayer.removeFromParent(true);
    }

});
module.exports = roomOthersTurnView;

cc._RFpop();