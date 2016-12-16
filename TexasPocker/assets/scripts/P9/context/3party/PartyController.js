const MVC = require("FWS_MVC");
var PartyController;
PartyController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function () {
        cc.log("PartyController --- onEnterNode");

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function () {

    },
    //加入牌局
    onFMessage_onJoinPartyClick: function (msg) {
        //判断数字输入的位数是否正确

        //如果不正确发 位数不正确消息

        //如果正确goto joinParty
        MVC.FContextManager.gotoID("loadingParty");
        msg.complete();
    },
    //创建牌局
    onFMessage_onCreatPartyClick: function (msg) {
        //
        cc.log("PartyController --- onFMessage_createPartyButtonClick");

        MVC.FContextManager.gotoID("createPartySet");
        msg.complete();
    }
});
module.exports = PartyController;