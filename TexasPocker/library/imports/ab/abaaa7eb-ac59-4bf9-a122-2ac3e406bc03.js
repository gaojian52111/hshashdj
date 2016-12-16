var MVC = require("FWS_MVC");
var partyView;
var paytyLayer;
partyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {

        //loadscene。。。
        cc.log("partyScene is loading");

        //加载paiju场景
        cc.loader.loadRes("TestProfab/partyScene", function (err, prefab) {
            cc.log(err);
            paytyLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(paytyLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = partyView;