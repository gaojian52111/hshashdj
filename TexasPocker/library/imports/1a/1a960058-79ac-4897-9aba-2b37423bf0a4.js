var MVC = require("FWS_MVC");
var roomVillageView;
var DingZhuangTestLayer;
roomVillageView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.loader.loadRes("TestProfab/DingZhuangTestLayer", function (err, prefab) {
            cc.log(err);
            DingZhuangTestLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(DingZhuangTestLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        DingZhuangTestLayer.removeFromParent(true);
    }

});
module.exports = roomVillageView;