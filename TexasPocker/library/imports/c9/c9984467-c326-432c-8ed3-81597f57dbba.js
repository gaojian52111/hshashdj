var MVC = require("FWS_MVC");
var Project = require("Project");
var gjSceneController;
gjSceneController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("gjSceneController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("gjSceneController onLeaveNode");
    },
    onFMessage_button: function onFMessage_button(msg) {
        MVC.FContextManager.gotoID("test");
        msg.complete();
    }

});
module.exports = gjSceneController;