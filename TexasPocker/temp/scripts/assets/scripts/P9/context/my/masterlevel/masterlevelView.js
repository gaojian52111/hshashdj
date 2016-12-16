"use strict";
cc._RFpush(module, 'b0278R87UxEebgjtxhTnu4B', 'masterlevelView');
// scripts/P9/context/my/masterlevel/masterlevelView.js

//大师等级
var MVC = require("FWS_MVC");
var Project = require("Project");
var masterlevelView;
masterlevelView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("masterlevelScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = masterlevelView;

cc._RFpop();