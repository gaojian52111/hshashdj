const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.connect();
        this.scheduleOnce(function () {
            //假装发送进入哪种牌桌的消息
            //目前需要手动改
            var msg1 = new MVC.FMessage("joinPartyInfoReq", "Net");
            msg1.args.type ="MTT";

            msg1.send();
        },4);
    },
    onDestory:function () {
        this.disconnect();

    }

});
