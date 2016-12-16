const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.connect();
    },
    onDestory:function () {
        this.disconnect();
    },
    onCreateStd:function () {
        //假设设置好了数据等东西  将这些东西发给网络层
        var msg1 = new MVC.FMessage("CreateStdPartyInfoAck", "Net");
        msg1.args.Type = "STD";
        msg1.send();
        //直接跳到loading
        window.GameType = "STD";
        MVC.FContextManager.gotoID("createPartyLoading");

    },
    onCreateMTT:function () {
        //假设设置好了数据等东西  将这些东西发给网络层

        var msg1 = new MVC.FMessage("CreateStdPartyInfoAck", "Net");
        msg1.args.Type = "MTT";
        msg1.send();
        window.GameType = "MTT";

        //直接跳到loading
        MVC.FContextManager.gotoID("createPartyLoading");


    },



});
