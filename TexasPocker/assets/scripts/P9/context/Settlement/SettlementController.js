const MVC = require("FWS_MVC");
const Project = require("Project");
var SettlementController;
SettlementController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {
        //loadscene。。。

        cc.log("SettlementController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        cc.log("SettlementController onLeaveNode");
    },

    //TODO:负责将 view层的事件 转换成 页面切换等动作
    onFMessage_clickPartyButton: function(msg) {
        //进入分享节点
        MVC.FContextManager.gotoID("Share");
        //发送消息给网络模块
    }

});
module.exports = SettlementController;


