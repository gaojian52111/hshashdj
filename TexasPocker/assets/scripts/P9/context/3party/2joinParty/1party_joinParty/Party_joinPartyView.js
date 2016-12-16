const MVC = require("FWS_MVC");
var party_joinPartyView;
var partyJoinPartyLayer;
party_joinPartyView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function() {
        cc.log("myTurnLayer");
        // cc.loader.loadRes("TestProfab/partyJoinPartyLayer", function (err, prefab) {
        //     cc.log(err);
        //     partyJoinPartyLayer = cc.instantiate(prefab);
        //     cc.director.getScene().addChild(partyJoinPartyLayer);
        // });

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        partyJoinPartyLayer.removeFromParent(true);
    }

});
module.exports = party_joinPartyView;
