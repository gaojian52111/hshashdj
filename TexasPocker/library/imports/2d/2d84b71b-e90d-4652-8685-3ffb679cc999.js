var MVC = require("FWS_MVC");
var PartyView;
var partyLayer;
PartyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/partyLayer", function (err, prefab) {
            cc.log(err);
            partyLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(partyLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        partyLayer.removeFromParent(true);
    }

});
module.exports = PartyView;