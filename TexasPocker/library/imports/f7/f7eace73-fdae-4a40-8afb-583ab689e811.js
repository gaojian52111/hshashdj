var MVC = require("FWS_MVC");
var roomStatementsView;
var otherTurnLayer;
roomStatementsView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/statementsLayer", function (err, prefab) {
            cc.log(err);
            otherTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(otherTurnLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        otherTurnLayer.removeFromParent(true);
    }

});
module.exports = roomStatementsView;