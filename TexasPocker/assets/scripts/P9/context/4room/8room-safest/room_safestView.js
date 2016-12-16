const MVC = require("FWS_MVC");
var roomSafestView;
var otherTurnLayer;
roomSafestView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/safestLayer", function (err, prefab) {
            cc.log(err);
            otherTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(otherTurnLayer);
        });

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        otherTurnLayer.removeFromParent(true);
    }

});
module.exports = roomSafestView;