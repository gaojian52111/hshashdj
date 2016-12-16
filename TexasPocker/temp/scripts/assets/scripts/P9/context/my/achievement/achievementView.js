"use strict";
cc._RFpush(module, 'da5bekghPRMhqDVOgZAgB6C', 'achievementView');
// scripts/P9/context/my/achievement/achievementView.js

//所获成就
var MVC = require("FWS_MVC");
var Project = require("Project");
var achievementView;
achievementView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("achievementScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = achievementView;

cc._RFpop();