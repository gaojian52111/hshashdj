const MVC = require("FWS_MVC");
var SettlementView;
var playerHeadLayer;
SettlementView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {

        cc.loader.loadRes("TestProfab/Settlement", function (err, prefab) {
            cc.log(err);
            playerHeadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(playerHeadLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    }
        // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = SettlementView;
