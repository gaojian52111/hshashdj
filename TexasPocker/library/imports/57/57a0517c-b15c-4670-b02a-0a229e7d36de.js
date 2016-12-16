var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        label: {
            "default": null,
            type: cc.Label
        }
    },
    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
        this.scheduleOnce(function () {
            // MVC.FContextManager.gotoID("login");
            // var obj = new Object();
            // obj.data = "我是数据"
            // gateWay.to("第一次测试！！！");
        }, 2);
    },
    onDestory: function onDestory() {
        this.disconnect();
    }

});