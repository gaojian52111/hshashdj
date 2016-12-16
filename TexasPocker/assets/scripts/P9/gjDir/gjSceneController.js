const MVC = require("FWS_MVC");
const Project = require("Project");
var gjSceneController;
gjSceneController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {
        //loadscene。。。

        cc.log("gjSceneController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        cc.log("gjSceneController onLeaveNode");
    },
    onFMessage_button: function(msg) {
        MVC.FContextManager.gotoID("test");
        msg.complete();
    }

});
module.exports = gjSceneController;


