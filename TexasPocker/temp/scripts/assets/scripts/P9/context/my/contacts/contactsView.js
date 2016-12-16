"use strict";
cc._RFpush(module, 'a11c2nd9LBCLoZZweOF1Fmg', 'contactsView');
// scripts/P9/context/my/contacts/contactsView.js

//联系人
var MVC = require("FWS_MVC");
var Project = require("Project");
var contactsView;
contactsView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("contactsScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = contactsView;

cc._RFpop();