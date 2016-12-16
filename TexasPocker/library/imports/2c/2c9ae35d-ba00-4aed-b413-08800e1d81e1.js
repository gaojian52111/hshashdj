var MVC = require("FWS_MVC");
var party_CreateSetController;
party_CreateSetController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    //加入牌局
    onFMessage_onJoinPartyClick: function onFMessage_onJoinPartyClick(msg) {
        //判断数字输入的位数是否正确

        //如果不正确发 位数不正确消息

        //如果正确goto joinParty
        MVC.FContextManager.gotoID("loadingParty");
        msg.complete();
    },
    //创建牌局
    onFMessage_onCreatPartyClick: function onFMessage_onCreatPartyClick(msg) {
        //
        cc.log("PartyController --- onFMessage_createPartyButtonClick");

        MVC.FContextManager.gotoID("createPartySet");
        msg.complete();
    }
});

module.exports = party_CreateSetController;