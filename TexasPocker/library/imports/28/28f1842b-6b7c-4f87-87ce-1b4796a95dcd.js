var MVC = require("FWS_MVC");
var Project = require("Project");
var MainController;
MainController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //loadscene。。。

        cc.log("MainController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("MainController onLeaveNode");
    },
    onFMessage_clickaddPartyButton: function onFMessage_clickaddPartyButton(msg) {
        MVC.FContextManager.gotoID("loadingParty");
        msg.complete();
    },
    onFMessage_clicksetPartyButton: function onFMessage_clicksetPartyButton(msg) {
        MVC.FContextManager.gotoID("createPartySet");
        msg.complete();
    },
    onFMessage_clickMy: function onFMessage_clickMy(msg) {
        MVC.FContextManager.gotoID("my");
        msg.complete();
    }

});
module.exports = MainController;