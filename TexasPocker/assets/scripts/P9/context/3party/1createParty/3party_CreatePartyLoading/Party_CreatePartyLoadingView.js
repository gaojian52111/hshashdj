const MVC = require("FWS_MVC");
var party_CreatePartyLoadingView;
var partyCreatePartyLoadingLayer;
party_CreatePartyLoadingView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function() {
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/partyCreatePartyLoadingLayer", function (err, prefab) {
            cc.log(err);
            partyCreatePartyLoadingLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(partyCreatePartyLoadingLayer);
        });

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        partyCreatePartyLoadingLayer.removeFromParent(true);
    }

});
module.exports = party_CreatePartyLoadingView;