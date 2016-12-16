"use strict";
cc._RFpush(module, '86628hf+L9PdpmtrA/eiTxG', 'room_communityCardView');
// scripts/P9/context/4room/5room-communityCard/room_communityCardView.js

var MVC = require("FWS_MVC");
var roomCommunityCardView;
var FaShouPaiTestLayer;
roomCommunityCardView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.loader.loadRes("TestProfab/FaGongGongPaiTestLayer", function (err, prefab) {
            cc.log(err);
            FaShouPaiTestLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(FaShouPaiTestLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        FaShouPaiTestLayer.removeFromParent(true);
    }

});
module.exports = roomCommunityCardView;

cc._RFpop();