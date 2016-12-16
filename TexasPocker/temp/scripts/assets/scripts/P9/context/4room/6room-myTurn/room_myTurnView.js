"use strict";
cc._RFpush(module, 'de9d1dAmlhKr4uQ7Y0+ZJY7', 'room_myTurnView');
// scripts/P9/context/4room/6room-myTurn/room_myTurnView.js

var MVC = require("FWS_MVC");
var roomMyTurnView;
var myTurnLayer;
roomMyTurnView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/myTurnLayer", function (err, prefab) {
            cc.log(err);
            myTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(myTurnLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        myTurnLayer.removeFromParent(true);
    }

});
module.exports = roomMyTurnView;

cc._RFpop();