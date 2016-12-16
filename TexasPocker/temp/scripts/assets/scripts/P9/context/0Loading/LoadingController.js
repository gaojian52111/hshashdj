"use strict";
cc._RFpush(module, '95f0fnkyxxFzKYLrZyamcpo', 'LoadingController');
// scripts/P9/context/0Loading/LoadingController.js

var MVC = require("FWS_MVC");
var LoadingController;
LoadingController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:此类是对将来可能加进来的其他创建方法存在的
    //TODO:这期间加载最新客户端版本号  最忌支持的客户端版本号 其他参数 判定本地是否有登陆信息
    //TODO:等待服务器消息 是进入主页面 还是断线续玩
    onEnterNode: function onEnterNode() {

        cc.log("party_CreatePartyController");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = LoadingController;

cc._RFpop();