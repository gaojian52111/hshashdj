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
            var msg1 = new MVC.FMessage("showPartyTypeReq", "Net");
            msg1.args.type =window.GameType;
            msg1.send();
        },2);
    },
    onDestory:function () {
        this.disconnect();

    }

});
