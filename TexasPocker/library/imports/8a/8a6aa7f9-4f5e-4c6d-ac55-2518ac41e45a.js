var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        headModel: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        //获取头像数量 加载相应头像（虽然是在这里addChild了 但是这是最好的办法了）
        //由于model没有还没完成 先用写好的东西代替

    },

    onFMessage_gameOnResult: function onFMessage_gameOnResult(msg) {
        //加载游戏结果layer

        msg.complete();
    }
});