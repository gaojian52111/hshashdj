const MVC = require("FWS_MVC");
var party_joinPartyController;
party_joinPartyController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {

        // MVC.FContextManager.gotoID("loadingParty");

        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    }

});
module.exports = party_joinPartyController;
