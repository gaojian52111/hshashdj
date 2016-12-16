const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.connect();
    },
    onDestroy:function () {
        this.disconnect();

    },
    dingZhuang:function () {
        var msg2 = new MVC.FMessage("gameEventNotify", "startGame");
        msg2.args.eventType = "DingZhuang";
        msg2.send();
    },
    faShouPai:function () {
        var msg2 = new MVC.FMessage("gameEventNotify", "startGame");
        msg2.args.eventType = "FaShouPai";
        msg2.send();
    },
    faGongGongPai:function () {
        var msg2 = new MVC.FMessage("gameEventNotify", "startGame");
        msg2.args.eventType = "FaGongGongPai";
        msg2.send();
    },
    lunDaoZiJi:function () {
        var msg2 = new MVC.FMessage("gameActionReq", "startGame");
        msg2.args.actionType = "myAction";
        msg2.send();
    },
    lunDaoBieRen:function () {
        var msg2 = new MVC.FMessage("gameActionReq", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    },
    baoXian:function () {
        var msg2 = new MVC.FMessage("safestReq", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    },
    jieSuan:function () {
        var msg2 = new MVC.FMessage("gameOnResult", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    },
    paiJuFangJianJieShu:function () {
        var msg2 = new MVC.FMessage("roomOnEnd", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    }
});
