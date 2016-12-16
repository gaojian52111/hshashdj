"use strict";
cc._RFpush(module, 'dee2csAYTVBzrPH8T/lmWED', 'room_startGameView');
// scripts/P9/context/4room/2room-StartGame/room_startGameView.js

var MVC = require("FWS_MVC");
var roomStartGameView;
var playerHeadLayer;
roomStartGameView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
    * 1，请求获取牌桌数据
    *   a, room类型
    *   b, 玩家人数
    *   c, .....
    * */
    onEnterNode: function onEnterNode() {
        //loadscene。。。
        cc.loader.loadRes("TestProfab/playerHeadLayer", function (err, prefab) {
            cc.log(err);
            playerHeadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(playerHeadLayer);
        });
        // cc.director.loadScene("roomScene");
        cc.log("roomScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomStartGameView;

cc._RFpop();