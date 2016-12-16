"use strict";
cc._RFpush(module, 'c22d926aq9CypQz972c4FiV', 'myteamView');
// scripts/P9/context/my/myteam/myteamView.js

//我的战队
var MVC = require("FWS_MVC");
var Project = require("Project");
var myteamView;
myteamView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("myteamScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = myteamView;

cc._RFpop();