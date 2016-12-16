"use strict";
cc._RFpush(module, '6d9b2e3CqVCjJf+7oZLe9xP', 'roomView');
// scripts/P9/context/4room/roomView.js

var MVC = require("FWS_MVC");
var roomView;
roomView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
    * 首先
    * */
    onEnterNode: function onEnterNode() {
        //加载roomScene（包括进入牌局等待）
        cc.log("roomScene");
        cc.director.loadScene("roomScene", function () {
            cc.loader.loadRes("TestProfab/roomWaitingLayer", function (err, prefab) {
                cc.log(err);
                //加载出来之后profab的销毁 有他自己决定
                var roomWaitingLayer = cc.instantiate(prefab);
                cc.director.getScene().addChild(roomWaitingLayer);
                cc.log("roomWaitingLayer on" + roomWaitingLayer.getPosition());
            });
        });

        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomView;

cc._RFpop();