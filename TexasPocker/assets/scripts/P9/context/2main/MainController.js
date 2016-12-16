const MVC = require("FWS_MVC");
const Project = require("Project");
var MainController;
MainController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {
        //loadscene。。。

        cc.log("MainController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        cc.log("MainController onLeaveNode");
    },
    onFMessage_clickaddPartyButton: function(msg) {
        MVC.FContextManager.gotoID("loadingParty");
        msg.complete();
    },
        onFMessage_clicksetPartyButton: function(msg) {
        MVC.FContextManager.gotoID("createPartySet");
        msg.complete();
    },
        onFMessage_clickMy: function(msg) {
        MVC.FContextManager.gotoID("my");
        msg.complete();
    }

});
module.exports = MainController;


