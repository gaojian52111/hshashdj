const MVC = require("FWS_MVC");
var roomMyTurnView;
var myTurnLayer;
roomMyTurnView = cc.Class({
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
        cc.loader.loadRes("TestProfab/myTurnLayer", function (err, prefab) {
            cc.log(err);
            myTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(myTurnLayer);
        });

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        myTurnLayer.removeFromParent(true);
    }

});
module.exports = roomMyTurnView;